// Plot Map section — interactive masterplan with tier highlight + plot grid
// Lives on the Pricing page, between PlotTable and Ownership.

const TIER_META = {
  Interior:    { color: '#E8B7B7', accent: '#C77C7C', perM2Label: 'IDR 500 K / m²' },
  'Mid-Slope': { color: '#B5A8D4', accent: '#7B6BA8', perM2Label: 'IDR 1.0 M / m²' },
  Beachfront:  { color: '#F0BE8C', accent: '#D69052', perM2Label: 'IDR 1.5 M / m²' }
};

// Rough polygon outlines (% of 1280×1280 source) for each tier zone.
// Used to brighten the active tier while the rest dims.
const TIER_CLIP = {
  Interior:
    'polygon(14% 38%, 14% 30%, 20% 24%, 28% 19%, 40% 13%, 54% 9%, 70% 10%, 74% 16%, 75% 30%, 60% 32%, 30% 36%)',
  'Mid-Slope':
    'polygon(22% 38%, 75% 30%, 78% 38%, 78% 55%, 76% 70%, 30% 70%, 23% 60%, 21% 48%)',
  Beachfront:
    'polygon(28% 62%, 78% 60%, 78% 92%, 28% 95%)'
};

const fmtIDR_M = (n) => 'IDR ' + (n / 1000000).toFixed(0) + ' M';
const fmtIDR_full = (n) => 'IDR ' + (n / 1000000).toFixed(1) + ' M';
const fmtUSD_full = (n) => 'USD ' + n.toLocaleString('en-US');

const PlotMap = ({ tweaks, setTweak }) => {
  const { isMobile, isTablet } = useBreakpoint();
  const currency = tweaks.plotCurrency;       // 'idr' | 'usd' | 'both'
  const highlight = tweaks.tierHighlight;     // 'all' | 'Interior' | 'Mid-Slope' | 'Beachfront'
  const mapSize = tweaks.mapSize;             // 'regular' | 'tall'

  const plots = React.useMemo(() => buildPlots(), []);
  const visible = highlight === 'all' ? plots : plots.filter((p) => p.tier === highlight);

  const mapHeight = mapSize === 'tall' ? 720 : 560;

  return (
    <section id="masterplan-map" style={{
      background: '#fff',
      padding: isMobile ? '64px 20px' : '120px 64px',
      borderTop: '1px solid var(--sand-flat)'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* ── Header ── */}
        <div style={{
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between',
          marginBottom: isMobile ? 28 : 48, gap: isMobile ? 20 : 32, flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow style={{ marginBottom: 18 }}>— The Masterplan —</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: isMobile ? 28 : 44, lineHeight: 1.1, color: 'var(--deep-canopy)',
              letterSpacing: '-0.7px', margin: 0, marginBottom: 18
            }}>
              The bay, plot by plot —{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>
                see every parcel on the map.
              </em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
              color: 'var(--driftwood)', lineHeight: 1.75, margin: 0
            }}>
              Three tiers fan down from the ridge to the sand. Filter by tier to focus
              the map, hover any plot card to locate it on the parcel drawing, and
              cross-reference exact sizes and prices below.
            </p>
          </div>

          {/* ── Tier filter pills (mirror the Tweaks "highlight" state) ── */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All tiers', dot: 'var(--deep-canopy)' },
              { id: 'Interior', label: 'Interior', dot: TIER_META.Interior.accent },
              { id: 'Mid-Slope', label: 'Mid-Slope', dot: TIER_META['Mid-Slope'].accent },
              { id: 'Beachfront', label: 'Beachfront', dot: TIER_META.Beachfront.accent }
            ].map((f) => {
              const on = highlight === f.id;
              return (
                <button key={f.id} onClick={() => setTweak('tierHighlight', f.id)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: on ? 'var(--deep-canopy)' : '#fff',
                  color: on ? 'var(--coconut-cream)' : 'var(--driftwood)',
                  border: '1px solid ' + (on ? 'var(--deep-canopy)' : 'var(--sand-flat)'),
                  padding: '10px 16px', borderRadius: 999,
                  fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2,
                  textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: f.dot,
                    boxShadow: on ? '0 0 0 2px rgba(250,248,244,0.25)' : 'none'
                  }} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Two-column: map + plot grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isTablet ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 1fr)',
          gap: isMobile ? 28 : 40, alignItems: 'flex-start'
        }}>
          {/* ── Map column ── */}
          <div style={{
            position: isMobile ? 'static' : 'sticky', top: 24,
            background: 'var(--coconut-cream)',
            borderRadius: 10,
            border: '1px solid var(--sand-flat)',
            padding: isMobile ? 12 : 18,
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? undefined : mapHeight,
              aspectRatio: isMobile ? '1 / 1' : undefined,
              borderRadius: 6, overflow: 'hidden',
              background: '#F5F2EE'
            }}>
              {/* Base image — contain on mobile so full map is always visible */}
              <img
                src="shared/images/plot-map-1.jpeg"
                alt="Gili Gede plot masterplan"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: isMobile ? 'contain' : 'cover',
                  objectPosition: 'center',
                  filter: highlight === 'all' ? 'none' : 'saturate(0.18) brightness(0.96)',
                  transition: 'filter 0.45s ease'
                }} />

              {/* Bright cutout — only the active tier zone is fully saturated */}
              {highlight !== 'all' &&
                <img
                  src="shared/images/plot-map-1.jpeg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: isMobile ? 'contain' : 'cover',
                    objectPosition: 'center',
                    clipPath: TIER_CLIP[highlight],
                    WebkitClipPath: TIER_CLIP[highlight],
                    transition: 'clip-path 0.45s ease, -webkit-clip-path 0.45s ease'
                  }} />
              }

              {/* Compass / north marker */}
              <div style={{
                position: 'absolute', top: 16, left: 16,
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(250,248,244,0.92)',
                padding: '7px 12px', borderRadius: 999,
                fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 2,
                textTransform: 'uppercase', color: 'var(--driftwood)',
                backdropFilter: 'blur(6px)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 14, color: 'var(--teak-grain)'
                }}>N</span>
                <span style={{ width: 1, height: 14, background: 'var(--sand-flat)' }} />
                Bay of Gili Gede
              </div>

              {/* Scale label */}
              <div style={{
                position: 'absolute', bottom: 14, right: 14,
                fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 2,
                textTransform: 'uppercase', color: 'var(--driftwood)',
                background: 'rgba(250,248,244,0.92)',
                padding: '6px 12px', borderRadius: 4,
                backdropFilter: 'blur(6px)'
              }}>Plot Details · 36 Parcels</div>
            </div>

            {/* Map legend — tier swatches */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12, marginTop: 18
            }}>
              {Object.entries(TIER_META).map(([name, meta]) => {
                const active = highlight === name || highlight === 'all';
                return (
                  <button key={name}
                    onClick={() => setTweak('tierHighlight', highlight === name ? 'all' : name)}
                    style={{
                      textAlign: 'left',
                      background: active ? '#fff' : 'transparent',
                      border: '1px solid ' + (highlight === name ? 'var(--deep-canopy)' : 'var(--sand-flat)'),
                      borderRadius: 6, padding: '10px 12px',
                      cursor: 'pointer', opacity: active ? 1 : 0.55,
                      transition: 'all 0.2s ease'
                    }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4
                    }}>
                      <span style={{
                        width: 14, height: 14, borderRadius: 3,
                        background: meta.color, border: '1px solid ' + meta.accent
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: 10,
                        letterSpacing: 2, textTransform: 'uppercase',
                        fontWeight: 500, color: 'var(--deep-canopy)'
                      }}>{name}</span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)', fontSize: 11,
                      color: 'var(--driftwood)', marginLeft: 22
                    }}>{meta.perM2Label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Plot grid column ── */}
          <div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 16
            }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3,
                textTransform: 'uppercase', color: 'var(--sage-hillside)'
              }}>
                {visible.length} plot{visible.length === 1 ? '' : 's'}
              </div>
              <div style={{
                display: 'flex', gap: 4,
                background: 'var(--coconut-cream)',
                border: '1px solid var(--sand-flat)',
                borderRadius: 999, padding: 3
              }}>
                {[
                  { id: 'idr', label: 'IDR' },
                  { id: 'usd', label: 'USD' },
                  { id: 'both', label: 'Both' }
                ].map((c) => {
                  const on = currency === c.id;
                  return (
                    <button key={c.id} onClick={() => setTweak('plotCurrency', c.id)} style={{
                      background: on ? 'var(--deep-canopy)' : 'transparent',
                      color: on ? 'var(--coconut-cream)' : 'var(--driftwood)',
                      border: 'none', borderRadius: 999,
                      padding: '5px 12px',
                      fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 1.5,
                      textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer'
                    }}>{c.label}</button>
                  );
                })}
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10,
              maxHeight: isMobile ? 'none' : mapHeight + 80,
              overflowY: isMobile ? 'visible' : 'auto',
              paddingRight: isMobile ? 0 : 4
            }}>
              {visible.map((p) => {
                const meta = TIER_META[p.tier];
                return (
                  <div key={p.n}
                    style={{
                      background: 'var(--coconut-cream)',
                      border: '1px solid var(--sand-flat)',
                      borderLeft: '3px solid ' + meta.accent,
                      borderRadius: 4, padding: '14px 14px 12px'
                    }}>
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                      marginBottom: 8
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                        color: 'var(--deep-canopy)', letterSpacing: '-0.3px'
                      }}>#1-{String(p.n).padStart(2, '0')}</span>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 1.5,
                        textTransform: 'uppercase', color: meta.accent, fontWeight: 500
                      }}>{p.tier}</span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)', fontSize: 11,
                      color: 'var(--driftwood)', marginBottom: 6
                    }}>
                      {p.size.toLocaleString()} m²
                    </div>
                    {(currency === 'idr' || currency === 'both') &&
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400,
                        color: 'var(--deep-canopy)'
                      }}>{fmtIDR_full(p.idrTotal)}</div>
                    }
                    {(currency === 'usd' || currency === 'both') &&
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400,
                        color: 'var(--teak-grain)',
                        marginTop: currency === 'both' ? 2 : 0
                      }}>{fmtUSD_full(p.usdTotal)}</div>
                    }
                  </div>
                );
              })}
            </div>

            {highlight !== 'all' &&
              <button onClick={() => setTweak('tierHighlight', 'all')} style={{
                marginTop: 14, background: 'transparent', border: 'none',
                fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2,
                textTransform: 'uppercase', color: 'var(--sage-hillside)',
                cursor: 'pointer', padding: 0,
                borderBottom: '1px solid var(--sage-hillside)', paddingBottom: 2
              }}>← Show all 36 plots</button>
            }
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          #masterplan-map > div > div:nth-child(2) {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          #masterplan-map > div > div:nth-child(2) > div:first-child {
            position: static !important;
          }
        }
        @media (max-width: 639px) {
          #masterplan-map {
            padding: 72px 24px !important;
          }
          #masterplan-map > div > div:nth-child(1) {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          #masterplan-map > div > div:nth-child(1) > div:last-child {
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </section>
  );
};

window.PlotMap = PlotMap;
