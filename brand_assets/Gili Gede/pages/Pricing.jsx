// Pricing page

const PricingHero = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '120px 24px 64px' : '180px 64px 96px', textAlign: 'center', borderBottom: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 26 }}>— Pricing & Plot Schedule —</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 36 : 'clamp(48px, 6vw, 76px)', lineHeight: 1.05, color: 'var(--deep-canopy)', letterSpacing: '-1.2px', margin: 0, marginBottom: 20 }}>
          36 plots. One masterplan.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>Three price tiers.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, fontWeight: 300, color: 'var(--driftwood)', lineHeight: 1.75, maxWidth: 620, margin: '0 auto' }}>
          Interior plots from USD 29/m². Beachfront from USD 88/m². Comparable land
          in Canggu now starts above USD 800/m² — you are buying a market that's
          roughly where Bali was in 2018.
        </p>
      </div>
    </section>
  );
};

const TierCards = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const tiers = [
    {
      bg: 'var(--sage-pale)', dark: false,
      eyebrow: 'Tier 1', name: 'Interior',
      plots: '11', range: '313 – 949 m²',
      perM2: 'IDR 500 K / m²', from: 'USD 9,206',
      blurb: 'Interior plots inside the masterplan. Road access 200 to 300 meters behind the beach. The lowest cost of entry on the bay.',
      bullets: ['Hak Pakai or PMA HGB or Hak Milik through a nominee', 'Garden & Sea views from a double storey villa'],
    },
    {
      bg: 'var(--teak-pale)', dark: false, hero: true,
      eyebrow: 'Tier 2', name: 'Mid-Slope',
      plots: '21', range: '291 – 930 m²',
      perM2: 'IDR 1.0 M / m²', from: 'USD 17,118',
      blurb: 'Second line to the beach plots on the development. Private road access just 100 to 150 meters to the beach. Most popular tier.',
      bullets: ['Hak Pakai or PMA HGB or Hak Milik through a nominee', 'Strait & sunset views', 'Direct road access'],
    },
    {
      bg: 'var(--deep-canopy)', dark: true, taller: true,
      eyebrow: 'Tier 3', name: 'Beachfront',
      plots: '4', range: '2,293 – 2,942 m²',
      perM2: 'IDR 1.5 M / m²', from: 'USD 202,324',
      blurb: 'Direct Beachfront access. Four estate-sized plots flush to the sand. Sunset orientation across the bay.',
      bullets: ['Hak Pakai or PMA HGB or Hak Milik through a nominee', 'Direct beach access', 'Estate-sized parcels', 'Sunset orientation'],
    },
  ];

  return (
    <section style={{ background: '#fff', padding: isMobile ? '56px 24px' : '96px 64px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 20 : 28, alignItems: 'stretch' }}>
        {tiers.map((t) => (
          <article key={t.name} style={{
            background: t.bg,
            color: t.dark ? 'var(--coconut-cream)' : 'var(--deep-canopy)',
            border: t.dark ? 'none' : '1px solid var(--sand-flat)',
            borderRadius: 8, padding: isMobile ? '36px 28px 28px' : '48px 40px 40px',
            position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            boxShadow: t.taller ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
          }}>
            {t.taller && (
              <>
                <div style={{ position: 'absolute', top: -120, right: -120, width: 360, height: 360, background: 'radial-gradient(circle, rgba(196,180,138,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--teak-grain)', color: 'var(--deep-canopy)', padding: '6px 14px', borderRadius: 999, fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500 }}>Hero Tier</div>
              </>
            )}
            <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: t.dark ? 'var(--teak-grain)' : 'var(--sage-hillside)', marginBottom: 12 }}>{t.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 40 : 48, lineHeight: 1.0, margin: 0, marginBottom: 18, letterSpacing: '-1px', color: t.dark ? 'var(--coconut-cream)' : 'var(--deep-canopy)' }}>{t.name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, fontWeight: 300, margin: 0, marginBottom: 24, color: t.dark ? 'rgba(250,248,244,0.78)' : 'var(--driftwood)' }}>{t.blurb}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, paddingTop: 20, marginBottom: 20, borderTop: t.dark ? '1px solid rgba(250,248,244,0.12)' : '1px solid var(--sand-flat)' }}>
                {[
                  { lbl: 'Plots', val: t.plots, valStyle: { fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 300 } },
                  { lbl: 'Size Range', val: t.range, valStyle: { fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, marginTop: 4 } },
                  { lbl: 'Per m²', val: t.perM2, valStyle: { fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, marginTop: 4 } },
                  { lbl: 'From', val: t.from, valStyle: { fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, marginTop: 4, color: t.dark ? 'var(--teak-grain)' : 'var(--deep-canopy)' } },
                ].map(({ lbl, val, valStyle }) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: t.dark ? 'var(--sage-light)' : 'var(--sage-hillside)' }}>{lbl}</div>
                    <div style={valStyle}>{val}</div>
                  </div>
                ))}
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: 24, flex: 1 }}>
                {t.bullets.map((b, i) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'var(--font-body)', fontSize: 13, color: t.dark ? 'rgba(250,248,244,0.85)' : 'var(--driftwood)', padding: '8px 0', borderBottom: i === t.bullets.length - 1 ? 'none' : t.dark ? '1px solid rgba(250,248,244,0.08)' : '1px solid var(--sand-flat)' }}>
                    <span style={{ color: 'var(--teak-grain)', fontFamily: 'var(--font-display)', fontStyle: 'italic', marginTop: 1, flexShrink: 0 }}>✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Button variant={t.dark ? 'teak' : 'primary'} size="md" icon href="contact.html">View Plots</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// 36 plots, sourced from GG-LandSales-PriceList May 2026.
// USD calculated at IDR 17,000 / USD.
const buildPlots = () => {
  const data = [
    // Tier 1 — Interior  (IDR 500,000 / m²)
    [1,'Interior',949,500000],[2,'Interior',690,500000],[3,'Interior',710,500000],
    [4,'Interior',696,500000],[5,'Interior',673,500000],[6,'Interior',651,500000],
    [7,'Interior',627,500000],[8,'Interior',570,500000],[9,'Interior',503,500000],
    [10,'Interior',426,500000],[11,'Interior',313,500000],
    // Tier 2 — Mid-Slope  (IDR 1,000,000 / m²)
    [12,'Mid-Slope',725,1000000],[13,'Mid-Slope',808,1000000],[14,'Mid-Slope',890,1000000],
    [15,'Mid-Slope',456,1000000],[16,'Mid-Slope',500,1000000],[17,'Mid-Slope',681,1000000],
    [18,'Mid-Slope',724,1000000],[19,'Mid-Slope',790,1000000],[20,'Mid-Slope',856,1000000],
    [21,'Mid-Slope',634,1000000],[22,'Mid-Slope',511,1000000],[23,'Mid-Slope',398,1000000],
    [24,'Mid-Slope',291,1000000],[25,'Mid-Slope',732,1000000],[26,'Mid-Slope',798,1000000],
    [27,'Mid-Slope',864,1000000],[28,'Mid-Slope',930,1000000],[29,'Mid-Slope',654,1000000],
    [30,'Mid-Slope',713,1000000],[31,'Mid-Slope',773,1000000],[32,'Mid-Slope',832,1000000],
    // Tier 3 — Beachfront  (IDR 1,500,000 / m²)
    [33,'Beachfront',2293,1500000],[34,'Beachfront',2625,1500000],
    [35,'Beachfront',2942,1500000],[36,'Beachfront',2460,1500000],
  ];
  return data.map(([n, tier, size, perM2]) => ({
    n, tier, size, perM2,
    idrTotal: size * perM2,
    usdTotal: Math.round(size * perM2 / 17000),
  }));
};

window.buildPlots = buildPlots;

const fmtIDR   = (n) => 'IDR ' + (n / 1000000).toFixed(1) + ' M';
const fmtUSD   = (n) => 'USD ' + n.toLocaleString('en-US');
const fmtPerM2 = (n) => n >= 1000000 ? 'IDR ' + (n / 1000000).toFixed(1) + ' M' : 'IDR ' + (n / 1000).toFixed(0) + ' K';

const PlotTable = () => {
  const { isMobile } = useBreakpoint();
  const [filter, setFilter] = React.useState('all');
  const all = React.useMemo(() => buildPlots(), []);
  const filtered = filter === 'all' ? all : all.filter((p) => p.tier.toLowerCase().replace('-', '') === filter);
  const tierColor = (t) => t === 'Beachfront' ? 'var(--teak-grain)' : t === 'Mid-Slope' ? 'var(--sage-hillside)' : 'var(--strait-blue)';

  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px', borderTop: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', marginBottom: 36, gap: 20, flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
          <div>
            <Eyebrow style={{ marginBottom: 16 }}>— Full Plot Schedule —</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 30 : 44, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-0.7px', margin: 0 }}>
              All 36 plots,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>priced individually.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[{ id: 'all', label: 'All 36' }, { id: 'interior', label: 'Interior' }, { id: 'midslope', label: 'Mid-Slope' }, { id: 'beachfront', label: 'Beachfront' }].map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{ background: filter === f.id ? 'var(--deep-canopy)' : '#fff', color: filter === f.id ? 'var(--coconut-cream)' : 'var(--driftwood)', border: filter === f.id ? '1px solid var(--deep-canopy)' : '1px solid var(--sand-flat)', padding: '10px 16px', borderRadius: 999, fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', fontWeight: 500, transition: 'all 0.2s ease', minHeight: 44 }}>{f.label}</button>
            ))}
          </div>
        </div>

        {/* Horizontally scrollable on mobile */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 8, border: '1px solid var(--sand-flat)', boxShadow: 'var(--shadow-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr style={{ background: 'var(--teak-pale)', borderBottom: '1px solid var(--teak-light)' }}>
                {['Plot #', 'Tier', 'Size m²', 'IDR / m²', 'IDR Total', 'USD Total', ''].map((h) => (
                  <th key={h} style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--deep-canopy)', padding: '16px 20px', textAlign: 'left', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.n} style={{ background: i % 2 === 0 ? '#fff' : 'var(--coconut-cream)', borderBottom: '1px solid var(--sand-flat)', transition: 'background 0.2s ease' }}>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--deep-canopy)', whiteSpace: 'nowrap' }}>#{String(p.n).padStart(2, '0')}</td>
                  <td style={{ padding: '16px 20px', whiteSpace: 'nowrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--driftwood)' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: tierColor(p.tier), flexShrink: 0 }} />
                      {p.tier}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--driftwood)', whiteSpace: 'nowrap' }}>{p.size.toLocaleString()}</td>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--driftwood)', whiteSpace: 'nowrap' }}>{fmtPerM2(p.perM2)}</td>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--deep-canopy)', whiteSpace: 'nowrap' }}>{fmtIDR(p.idrTotal)}</td>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--deep-canopy)', whiteSpace: 'nowrap' }}>{fmtUSD(p.usdTotal)}</td>
                  <td style={{ padding: '12px 20px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <a href="contact.html" style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--sage-hillside)', borderBottom: '1px solid var(--sage-hillside)', paddingBottom: 2, textDecoration: 'none' }}>Reserve →</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--limestone)', marginTop: 18, fontStyle: 'italic' }}>
          *USD prices are indicative, calculated at IDR 17,000 / USD. Final settlement in IDR.
        </div>
      </div>
    </section>
  );
};

const Ownership = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const cards = [
    { eyebrow: 'Option 1', title: 'Hak Pakai', duration: '30 + 20 + 30 years', body: 'Right of Use title, available directly to foreign individuals. Renewable for a total of up to 80 years. Typically the simplest path for a single-villa buyer who does not need to operate commercially.', tags: ['Foreign individual', 'Single villa', 'Personal use'] },
    { eyebrow: 'Option 2', title: 'Freehold or Hak Milik', duration: 'Own for life', body: 'Own directly as a freehold title in your own name if you are an Indonesian passport holder or through a nominee if you are a foreigner.', tags: ['No company', 'Notarised', 'For Indonesian Citizens'] },
    { eyebrow: 'Option 3', title: 'PMA Company HGB', duration: '30 + 20 + 30 years', body: 'Right to Build via a foreign-owned PMA company. The strongest title available to foreigners — supports rental, resale, and building approval. Recommended for investment-grade or multi-villa buyers.', tags: ['PMA company', 'Build & rent', 'Investment-grade'] },
  ];

  return (
    <section id="ownership" style={{ background: '#fff', padding: isMobile ? '72px 24px' : '120px 64px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 56, maxWidth: 720 }}>
          <Eyebrow style={{ marginBottom: 18 }}>— Ownership Options —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 30 : 48, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-0.8px', margin: 0 }}>
            Three legal structures,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>one freehold parent title.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 20 : 28 }}>
          {cards.map((c) => (
            <article key={c.title} style={{ background: 'var(--coconut-cream)', borderRadius: 8, padding: isMobile ? 28 : 36, border: '1px solid var(--sand-flat)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginBottom: 12 }}>{c.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 28 : 36, lineHeight: 1.1, color: 'var(--deep-canopy)', margin: 0, marginBottom: 10, letterSpacing: '-0.5px' }}>{c.title}</h3>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--teak-grain)', marginBottom: 18 }}>{c.duration}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.75, color: 'var(--driftwood)', fontWeight: 300, margin: 0, marginBottom: 20, flex: 1 }}>{c.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {c.tags.map((t) => <Pill key={t} tone="sage">{t}</Pill>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReserveCTA = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section id="reserve" style={{ background: 'var(--deep-canopy)', padding: isMobile ? '72px 24px' : '110px 64px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -160, right: -160, width: 540, height: 540, background: 'radial-gradient(circle, rgba(196,180,138,0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: isMobile ? 40 : 64, alignItems: 'center' }}>
        <div>
          <Eyebrow dark style={{ marginBottom: 20, color: 'var(--teak-grain)' }}>— Reservation —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 36 : 'clamp(40px, 5vw, 60px)', lineHeight: 1.1, color: 'var(--coconut-cream)', letterSpacing: '-0.8px', margin: 0, marginBottom: 20 }}>
            Reserve your plot for{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>USD 2,000.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 14 : 15, fontWeight: 300, color: 'rgba(250,248,244,0.78)', lineHeight: 1.8, maxWidth: 540, margin: 0 }}>
            A USD 2,000 reservation holds your selected plot for 30 days while
            due diligence is completed. Fully refundable if title or zoning
            checks fall short — credited against the final purchase price otherwise.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <Button variant="teak" size="lg" icon href="contact.html">Reserve a Plot</Button>
          <Button variant="outlineLight" size="md" href="contact.html#process">View 6-Step Process</Button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS || {
    plotCurrency: 'both',
    tierHighlight: 'all',
    mapSize: 'regular',
  });

  return (
    <>
      <Nav active="pricing" />
      <PricingHero />
      <TierCards />
      <PlotTable />
      <PlotMap tweaks={tweaks} setTweak={setTweak} />
      <Ownership />
      <ReserveCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Masterplan map" />
        <TweakRadio label="Tier highlight" value={tweaks.tierHighlight} options={['all', 'Interior', 'Mid-Slope', 'Beachfront']} onChange={(v) => setTweak('tierHighlight', v)} />
        <TweakRadio label="Currency"     value={tweaks.plotCurrency}  options={['idr', 'usd', 'both']}                          onChange={(v) => setTweak('plotCurrency', v)} />
        <TweakRadio label="Map size"     value={tweaks.mapSize}       options={['regular', 'tall']}                              onChange={(v) => setTweak('mapSize', v)} />
      </TweaksPanel>
    </>
  );
};

window.Pricing = Pricing;
