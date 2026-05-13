// About — Gili Gede & The Project

const AboutHero = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{
      position: 'relative', minHeight: '88vh',
      backgroundImage: `linear-gradient(180deg, rgba(28,43,26,0.5) 0%, rgba(28,43,26,0.35) 40%, rgba(28,43,26,0.75) 100%), url(${IMG.heroIsland})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: isMobile ? '0 24px' : '0 64px',
    }}>
      <div style={{ maxWidth: 920 }}>
        <Eyebrow dark style={{ marginBottom: 24, color: 'var(--teak-grain)' }}>— The Island · West Lombok —</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(48px, 8vw, 110px)', lineHeight: 1.0, color: 'var(--coconut-cream)', letterSpacing: '-1.5px', margin: 0, marginBottom: 28 }}>
          This is{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>Gili Gede.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: isMobile ? 18 : 24, lineHeight: 1.5, color: 'rgba(250,248,244,0.85)', maxWidth: 720, margin: '0 auto' }}>
          Where nature remains dominant, and life moves at its own pace.
        </p>
      </div>
    </section>
  );
};

const NaturalDiversityIntro = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section id="lifestyle" style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px', textAlign: 'center' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 24 }}>— 01 · Natural Diversity —</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 28 : 48, lineHeight: 1.15, color: 'var(--deep-canopy)', letterSpacing: '-0.7px', margin: 0 }}>
          Gili Gede is defined by natural diversity within close reach —{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>
            from coastline to reef, forest to open sea.
          </em>
        </h2>
      </div>
    </section>
  );
};

const ThreeFeatureCards = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const cards = [
    { image: IMG.beach,  eyebrow: 'Nature & Landscape',   title: 'A coastline still its own.',     body: 'Powdered-sand beaches, fringing reef, mangrove inlets, and forested ridges — all reachable on foot from the bay.',                                                    tags: ['Beaches', 'Reef', 'Jungle', 'Waterfall'] },
    { image: IMG.surfer, eyebrow: 'Lifestyle & Activities',title: 'Move, or do nothing at all.',   body: 'World-class surf at Desert Point, dive sites at Belongas, yoga at Mentigi Bay — and quiet cafés with names you have to be told.',                                     tags: ['Surf', 'Dive', 'Yoga', 'Wellness', 'Cafés'] },
    { image: IMG.craft,  eyebrow: 'Culture & Community',   title: 'A way of life still intact.',   body: 'Sasak weaving villages, daily fish markets, customary land councils.',                                                                                              tags: ['Crafts', 'Food', 'Traditions', 'Local life'] },
  ];

  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '0 24px 72px' : '0 64px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 24 : 40 }}>
        {cards.map((c) => (
          <article key={c.title} style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--sand-flat)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', aspectRatio: '4/3', backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ padding: isMobile ? 24 : 32 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginBottom: 12 }}>{c.eyebrow}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: 'var(--deep-canopy)', margin: 0, marginBottom: 12, letterSpacing: '-0.3px' }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--driftwood)', fontWeight: 300, margin: 0, marginBottom: 20 }}>{c.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {c.tags.map((t) => <Pill key={t} tone="sage">{t}</Pill>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const OriginStory = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section id="story" style={{ background: '#fff', padding: isMobile ? '72px 24px' : '120px 64px', borderTop: '1px solid var(--sand-flat)', borderBottom: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 96, alignItems: 'start' }}>
        <div>
          <Eyebrow style={{ marginBottom: 24 }}>— 02 · Origin —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: isMobile ? 36 : 56, lineHeight: 1.15, color: 'var(--deep-canopy)', letterSpacing: '-1px', margin: 0 }}>
            Powder Bay began with{' '}
            <span style={{ color: 'var(--teak-grain)' }}>an unexpected discovery.</span>
          </h2>
        </div>
        <div style={{ paddingTop: isMobile ? 0 : 8 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, lineHeight: 1.85, color: 'var(--driftwood)', fontWeight: 300, margin: 0, marginBottom: 24 }}>
            In 2017, the founder rounded a headland on the western coast of Gili Gede on a chartered fishing boat and saw the bay for the first time — a horseshoe of fine white sand backed by jungle, sheltered from the trade winds, with no road in.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.85, color: 'var(--driftwood)', fontWeight: 300, margin: 0, marginBottom: 28 }}>
            The next nine years were spent quietly. Land titles were consolidated
            parcel by parcel from sixteen Sasak families, the foreshore surveyed,
            a marina basin gazetted, and the masterplan drawn — slowly, with
            local council, and without the press release.
          </p>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 22, fontWeight: 300, fontStyle: 'italic', color: 'var(--deep-canopy)', lineHeight: 1.5, paddingLeft: 24, borderLeft: '2px solid var(--teak-grain)', margin: 0, marginBottom: 28 }}>
            "We're not in a hurry. The bay isn't going anywhere — and we want
            the people who buy here to feel the same way."
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginTop: 14, fontStyle: 'normal' }}>
              — BEYOND LEISURE · GROUP
            </div>
          </blockquote>
          <Button variant="secondary" size="md" icon href="contact.html">Read the Full Story</Button>
        </div>
      </div>
    </section>
  );
};

const Masterplan = () => {
  const { isMobile } = useBreakpoint();
  const stats = [
    { num: '31,688 m²', label: 'Freehold Land',      sub: 'Across 36 titled plots' },
    { num: '46 ha',      label: 'Seabed Concession', sub: 'For marina & moorings' },
    { num: '285',        label: 'Berth Marina',       sub: 'Future Phase II' },
  ];

  return (
    <section id="masterplan" style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: isMobile ? 32 : 48, gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow style={{ marginBottom: 18 }}>— 03 · Masterplan —</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 34 : 52, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-1px', margin: 0 }}>
              One bay,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>drawn slowly.</em>
            </h2>
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', aspectRatio: isMobile ? '4/3' : '16/9', backgroundImage: `url(${IMG.masterplan})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--sand-flat)', marginBottom: 40 }}>
          {isMobile ? (
            /* Mobile: swatches only, no text */
            <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(250,248,244,0.88)', backdropFilter: 'blur(8px)', padding: '6px', borderRadius: 4, border: '1px solid var(--sand-flat)', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['#E07856','#8B7CC4','#E0A856'].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: 2, background: c, border: '1px solid rgba(28,43,26,0.35)', display: 'block' }} />
              ))}
            </div>
          ) : (
            /* Desktop: full legend */
            <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(250,248,244,0.94)', backdropFilter: 'blur(10px)', padding: '14px 16px', borderRadius: 4, border: '1px solid var(--sand-flat)', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', paddingBottom: 8, borderBottom: '1px solid var(--sand-flat)' }}>
                Plot Footprint · 36 Titles
              </div>
              {[
                { swatch: '#E07856', label: 'Tier 3 · Beachfront' },
                { swatch: '#8B7CC4', label: 'Tier 2 · Mid-Slope' },
                { swatch: '#E0A856', label: 'Tier 1 · Interior' },
              ].map((row) => (
                <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 2, background: row.swatch, border: '1px solid rgba(28,43,26,0.35)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--deep-canopy)' }}>{row.label}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(28,43,26,0.85)', backdropFilter: 'blur(10px)', padding: '10px 16px', borderRadius: 4, color: 'var(--coconut-cream)', fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: 1 }}>
            <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--teak-grain)', marginBottom: 3 }}>Drawn by</div>
            M2 Design Studio · 2025
          </div>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', borderTop: '1px solid var(--sand-flat)', borderBottom: '1px solid var(--sand-flat)' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: isMobile ? '24px 0' : '36px 28px', borderRight: !isMobile && i < stats.length - 1 ? '1px solid var(--sand-flat)' : 'none', borderBottom: isMobile && i < stats.length - 1 ? '1px solid var(--sand-flat)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 36 : 44, color: 'var(--deep-canopy)', lineHeight: 1.0, letterSpacing: '-0.5px' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginTop: 10 }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--driftwood)', fontStyle: 'italic', marginTop: 6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programme = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const items = [
    { num: '01', title: 'Hospitality & Residential', body: 'Boutique villa cluster, beach club, and 36 freehold residential plots.' },
    { num: '02', title: 'Marina & Commercial',        body: 'A 285-berth marina with provisioning, customs clearance, and chandlery.' },
    { num: '03', title: 'Wellness & Sustainability',  body: 'A wellness village, water bottling on-site, and a closed-loop wastewater system.' },
    { num: '04', title: 'Education & Innovation',     body: 'A maritime training campus in partnership with Universitas Mataram.' },
  ];

  const cols = isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)';

  return (
    <section id="location" style={{ background: '#fff', padding: isMobile ? '72px 24px' : '120px 64px', borderTop: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64, maxWidth: 720 }}>
          <Eyebrow style={{ marginBottom: 18 }}>— 04 · Programme —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 34 : 52, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-1px', margin: 0 }}>
            Four pillars,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>one quiet bay.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 0, borderTop: '1px solid var(--sand-flat)' }}>
          {items.map((it, i) => (
            <div key={it.num} style={{
              padding: isMobile ? '28px 20px' : '40px 32px',
              borderRight: isMobile ? (i % 2 === 0 ? '1px solid var(--sand-flat)' : 'none') : (i < items.length - 1 ? '1px solid var(--sand-flat)' : 'none'),
              borderBottom: isMobile ? '1px solid var(--sand-flat)' : '1px solid var(--sand-flat)',
              display: 'flex', flexDirection: 'column', minHeight: isMobile ? 'auto' : 260,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: isMobile ? 28 : 36, color: 'var(--teak-grain)', lineHeight: 1.0, marginBottom: isMobile ? 16 : 28 }}>{it.num}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 18 : 22, lineHeight: 1.2, color: 'var(--deep-canopy)', margin: 0, marginBottom: 12, letterSpacing: '-0.2px' }}>{it.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--driftwood)', fontWeight: 300, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <>
    <Nav active="about" />
    <AboutHero />
    <NaturalDiversityIntro />
    <ThreeFeatureCards />
    <OriginStory />
    <Masterplan />
    <Programme />
    <Footer />
  </>
);

window.About = About;
