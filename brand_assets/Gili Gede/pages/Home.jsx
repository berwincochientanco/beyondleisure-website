// Home page composition
const HomeHero = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = isMobile ? '0 24px 64px' : '0 64px 88px';
  return (
    <section style={{
      position: 'relative', minHeight: '92vh', width: '100%',
      backgroundImage: `linear-gradient(180deg, rgba(28,43,26,0.25) 0%, rgba(28,43,26,0.35) 30%, rgba(28,43,26,0.75) 60%, rgba(28,43,26,0.95) 100%), url(${IMG.heroAerial})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: hPad, overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 880 }}>
        <Eyebrow dark style={{ marginBottom: 20, color: 'var(--deep-canopy)' }}>
          Gili Gede · West Lombok · Indonesia
        </Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(38px, 7vw, 96px)', lineHeight: 1.02,
          color: 'var(--coconut-cream)', letterSpacing: '-1.5px',
          margin: 0, marginBottom: 24,
        }}>
          Beachfront land,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>
            before the world finds it.
          </em>
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, fontWeight: 300,
          color: 'rgba(250,248,244,0.85)', lineHeight: 1.7,
          maxWidth: 540, marginBottom: 36,
        }}>
          36 freehold-eligible plots on a private bay, 75 minutes from Lombok
          International Airport — and a world away from Bali's crowds.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
          <Button variant="teak" size={isMobile ? 'md' : 'lg'} icon href="#plots">Discover the Project</Button>
          <Button variant="outlineLight" size={isMobile ? 'md' : 'lg'} href="about.html">About Gili Gede</Button>
        </div>
      </div>

      {!isMobile && (
        <div style={{ position: 'absolute', right: 64, bottom: 88, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(250,248,244,0.7)', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Scroll · 36 plots below
          </div>
          <div style={{ width: 1, height: 56, background: 'rgba(250,248,244,0.4)' }} />
        </div>
      )}
    </section>
  );
};

const EditorialIntro = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 24 }}>— 01 · The Project —</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: isMobile ? 32 : 44, lineHeight: 1.2, color: 'var(--deep-canopy)',
          letterSpacing: '-0.5px', margin: 0,
        }}>
          A rare beachfront opportunity{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>
            designed in response
          </em>{' '}
          to Gili Gede's landscape.
        </h2>
      </div>
    </section>
  );
};

const StatStrip = () => {
  const { isMobile } = useBreakpoint();
  const stats = [
    { num: '36',         label: 'Plots Available', sub: 'Across three tiers' },
    { num: 'USD 9,206',  label: 'Entry Price',      sub: 'Tier 1 interior, from' },
    { num: '31,688 m²',  label: 'Freehold Land',    sub: 'Across 36 titled plots' },
    { num: '75 min',     label: 'From Airport',     sub: 'Lombok Intl. (LOP)' },
  ];
  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '0 24px 72px' : '0 64px 96px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        borderTop: '1px solid var(--sand-flat)',
        borderBottom: '1px solid var(--sand-flat)',
      }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: isMobile ? '28px 16px' : '40px 32px',
            borderRight: isMobile
              ? (i % 2 === 0 ? '1px solid var(--sand-flat)' : 'none')
              : (i < stats.length - 1 ? '1px solid var(--sand-flat)' : 'none'),
            borderBottom: isMobile && i < 2 ? '1px solid var(--sand-flat)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 30 : 44, color: 'var(--deep-canopy)', lineHeight: 1.0, letterSpacing: '-0.5px' }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginTop: 4 }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--driftwood)', fontStyle: 'italic' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PlotTierCard = ({ tier, eyebrow, title, blurb, image, specs, reverse }) => {
  const { isMobile } = useBreakpoint();
  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (reverse ? '40% 60%' : '60% 40%'),
      background: '#fff',
      borderRadius: 8, overflow: 'hidden',
      border: '1px solid var(--sand-flat)',
      boxShadow: 'var(--shadow-sm)',
      minHeight: isMobile ? 'auto' : 420,
    }}>
      <div style={{
        order: isMobile ? 1 : (reverse ? 2 : 1),
        backgroundImage: `linear-gradient(180deg, rgba(28,43,26,0) 60%, rgba(28,43,26,0.25) 100%), url(${image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative',
        minHeight: isMobile ? 240 : 420,
      }}>
        <div style={{
          position: 'absolute', top: 20, left: 20,
          background: 'rgba(250,248,244,0.92)',
          padding: '7px 14px', borderRadius: 999,
          fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2,
          textTransform: 'uppercase', color: 'var(--deep-canopy)',
          backdropFilter: 'blur(8px)',
        }}>{tier}</div>
      </div>

      <div style={{
        order: isMobile ? 2 : (reverse ? 1 : 2),
        background: 'var(--deep-canopy)',
        color: 'var(--coconut-cream)',
        padding: isMobile ? '32px 24px' : '48px 44px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--teak-grain)', marginBottom: 12 }}>{eyebrow}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 26 : 32, lineHeight: 1.15, margin: 0, marginBottom: 16, color: 'var(--coconut-cream)', letterSpacing: '-0.3px' }}>{title}</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.75, fontWeight: 300, color: 'rgba(250,248,244,0.72)', margin: 0, marginBottom: 24 }}>{blurb}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 18, borderTop: '1px solid rgba(250,248,244,0.12)' }}>
            {specs.map(sp => (
              <div key={sp.label} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(250,248,244,0.85)' }}>
                <span style={{ width: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--teak-grain)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>{sp.icon}</span>
                <span style={{ fontWeight: 400 }}>{sp.label}</span>
                <span style={{ marginLeft: 'auto', color: 'var(--limestone)' }}>{sp.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <Button variant="teak" size="sm" icon href="pricing.html">View Tier</Button>
        </div>
      </div>
    </article>
  );
};

const PlotsSection = () => {
  const { isMobile } = useBreakpoint();
  const tiers = [
    {
      tier: 'Tier 3 · Beachfront', eyebrow: 'Plot #30 — #33',
      title: 'Direct on the bay.',
      blurb: 'Four estate-sized plots flush to the sand with unobstructed sunset orientation across the strait toward Gili Layar.',
      image: IMG.tierBeachfront,
      specs: [
        { icon: '◊', label: 'Plots available', value: '4 of 4' },
        { icon: '⌐', label: 'Size range',      value: '2,293 – 2,942 m²' },
        { icon: '$', label: 'IDR per m²',       value: 'IDR 1.5 M' },
        { icon: '✦', label: 'From',             value: 'USD 202,324' },
      ],
    },
    {
      tier: 'Tier 2 · Mid-Slope', eyebrow: 'Plot #12 — #29',
      title: 'Elevated, framed by canopy.',
      blurb: 'Twenty-one plots on the gentle hillside with cross-strait views, mature shade and a short walk to the beach club.',
      image: IMG.tierMidSlope, reverse: true,
      specs: [
        { icon: '◊', label: 'Plots available', value: '21 of 21' },
        { icon: '⌐', label: 'Size range',      value: '291 – 930 m²' },
        { icon: '$', label: 'IDR per m²',       value: 'IDR 1.0 M' },
        { icon: '✦', label: 'From',             value: 'USD 17,118' },
      ],
    },
    {
      tier: 'Tier 1 · Interior', eyebrow: 'Plot #1 — #11',
      title: 'Garden-set, hill-backed.',
      blurb: 'Eleven entry-tier plots tucked into the masterplan with road access, jungle backdrop and the lowest cost of entry on the bay.',
      image: IMG.tierInterior,
      specs: [
        { icon: '◊', label: 'Plots available', value: '11 of 11' },
        { icon: '⌐', label: 'Size range',      value: '313 – 949 m²' },
        { icon: '$', label: 'IDR per m²',       value: 'IDR 0.5 M' },
        { icon: '✦', label: 'From',             value: 'USD 9,206' },
      ],
    },
  ];

  return (
    <section id="plots" style={{ background: '#fff', padding: isMobile ? '72px 24px' : '120px 64px', borderTop: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 48 : 72 }}>
          <Eyebrow style={{ marginBottom: 18 }}>— 02 · The Plots —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 36 : 56, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-1px', margin: 0, maxWidth: 760, marginInline: 'auto' }}>
            36 plots, three tiers,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>one private bay.</em>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 20 : 32 }}>
          {tiers.map(t => <PlotTierCard key={t.tier} {...t} />)}
        </div>
      </div>
    </section>
  );
};

const IslandFullBleed = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ position: 'relative', background: 'var(--deep-canopy)', padding: isMobile ? '72px 24px 56px' : '120px 64px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 880, marginBottom: isMobile ? 36 : 56 }}>
          <Eyebrow dark style={{ marginBottom: 24, color: 'var(--teak-grain)' }}>— Gili Gede · West Lombok —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 1.0, color: 'var(--coconut-cream)', letterSpacing: '-1.5px', margin: 0, marginBottom: 24 }}>
            This is Gili Gede.
          </h2>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: isMobile ? 18 : 22, lineHeight: 1.5, color: 'rgba(250,248,244,0.85)', margin: 0, maxWidth: 640 }}>
            Where the sea meets <span style={{ color: 'var(--teak-grain)' }}>still living.</span>
          </p>
        </div>

        <figure style={{ margin: 0 }}>
          <div style={{
            width: '100%', aspectRatio: isMobile ? '3/2' : '4/3',
            maxHeight: '78vh',
            backgroundImage: `url(${IMG.giliGedeAerial})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            borderRadius: 4,
            border: '1px solid rgba(218,196,168,0.18)',
          }} />
          <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(250,248,244,0.65)' }}>
            <span>Gili Gede · viewed from the southwest, across the Sekotong strait</span>
            <span style={{ color: 'var(--teak-grain)' }}>8°45′S · 116°02′E</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const FeatureColumn = ({ image, eyebrow, title, body, tags }) => (
  <article style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={{ width: '100%', aspectRatio: '4/3', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 4 }} />
    <div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-hillside)', marginBottom: 10 }}>{eyebrow}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, lineHeight: 1.15, color: 'var(--deep-canopy)', letterSpacing: '-0.3px', margin: 0, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--driftwood)', fontWeight: 300, margin: 0, marginBottom: 18 }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map(t => <Pill key={t}>{t}</Pill>)}
      </div>
    </div>
  </article>
);

const FeatureColumns = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = [
    { image: IMG.reef,    eyebrow: '01 · Marine & Nature',   title: 'A reef on your doorstep.',       body: "Coral, mangrove, and clear-water snorkelling minutes from the bay. Untouched by the resort circuits that hollowed Bali's western coast.", tags: ['Beaches', 'Reef', 'Mangrove', 'Mountain'] },
    { image: IMG.airport, eyebrow: '02 · Location & Access', title: '75 minutes from the airport.',   body: 'Drive 60 minutes from Lombok International to Tembowong harbour, then a 15-minute private boat to the bay. No hidden ferry days.',       tags: ['LOP Airport', 'Coast', 'Marina', 'Direct Road'] },
    { image: IMG.bayBoats,eyebrow: '03 · Investment Case',   title: 'Bali in 2010 is gone.',          body: "Comparable land in Canggu now starts above USD 800/m². Powder Bay starts at USD 29/m². You are buying a market that's ten years younger.", tags: ['Freehold', 'IDR Settled', 'Hak Pakai', 'PMA HGB'] },
  ];
  return (
    <section style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 48 : 72, maxWidth: 720 }}>
          <Eyebrow style={{ marginBottom: 18 }}>— 03 · Why Powder Bay —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 34 : 52, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-1px', margin: 0 }}>
            Three reasons people are buying{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>before the road is paved.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? 40 : 48 }}>
          {cols.map(c => <FeatureColumn key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
};

const DarkCTA = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ background: 'var(--deep-canopy)', padding: isMobile ? '72px 24px' : '120px 64px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -160, right: -160, width: 540, height: 540, background: 'radial-gradient(circle, rgba(196,180,138,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -160, left: -160, width: 480, height: 480, background: 'radial-gradient(circle, rgba(138,154,122,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'center', textAlign: isMobile ? 'left' : 'center' }}>
        <Eyebrow dark style={{ marginBottom: 20, color: 'var(--teak-grain)' }}>— 04 · Visit the Bay —</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 40 : 'clamp(48px, 6vw, 72px)', lineHeight: 1.05, color: 'var(--coconut-cream)', letterSpacing: '-1px', margin: 0, marginBottom: 20, maxWidth: 880 }}>
          Walk the beach.{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>Pick the plot.</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 16, fontWeight: 300, color: 'rgba(250,248,244,0.75)', lineHeight: 1.75, maxWidth: 540, margin: 0, marginBottom: 36 }}>
          We arrange airport pickup, accommodation on Gili Gede, and a guided
          walk of every available plot. You pay only your flight.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start' }}>
          <Button variant="teak" size="lg" icon href="contact.html">Arrange a Site Visit</Button>
          <Button variant="outlineLight" size="lg" href="pricing.html">View All 36 Plots</Button>
        </div>
      </div>
    </section>
  );
};

const Home = () => (
  <>
    <Nav active="home" />
    <HomeHero />
    <EditorialIntro />
    <StatStrip />
    <PlotsSection />
    <IslandFullBleed />
    <FeatureColumns />
    <DarkCTA />
    <Footer />
  </>
);

window.Home = Home;
