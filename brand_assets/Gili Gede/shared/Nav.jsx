const Nav = ({ active = 'home', overlay = true, fixed = true }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isMobile } = useBreakpoint();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile]);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const onHero = overlay && !scrolled && !menuOpen;

  const navStyle = {
    position: fixed ? 'fixed' : 'absolute',
    top: 0, left: 0, right: 0,
    zIndex: 50,
    background: onHero ? 'transparent' : 'rgba(255,255,255,0.96)',
    backdropFilter: onHero ? 'none' : 'saturate(140%) blur(12px)',
    WebkitBackdropFilter: onHero ? 'none' : 'saturate(140%) blur(12px)',
    borderBottom: onHero ? '1px solid transparent' : '1px solid var(--sand-flat)',
    padding: isMobile ? '0 20px' : '0 56px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    height: 72,
    transition: 'background 0.3s ease, border-color 0.3s ease',
  };

  const wordmarkColor = onHero ? 'var(--coconut-cream)' : 'var(--deep-canopy)';
  const subColor = onHero ? 'rgba(250,248,244,0.65)' : 'var(--sage-hillside)';
  const barColor = onHero ? 'var(--coconut-cream)' : 'var(--deep-canopy)';

  const linkStyle = (id) => ({
    fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 500,
    color: onHero
      ? (active === id ? 'var(--coconut-cream)' : 'rgba(250,248,244,0.75)')
      : (active === id ? 'var(--deep-canopy)' : 'var(--driftwood)'),
    textDecoration: 'none', cursor: 'pointer',
    borderBottom: active === id ? '1px solid var(--teak-grain)' : '1px solid transparent',
    paddingBottom: 4, fontFamily: 'var(--font-body)',
    transition: 'all 0.2s ease',
  });

  const ctaStyle = {
    background: 'var(--deep-canopy)', color: 'var(--coconut-cream)',
    padding: '12px 24px', borderRadius: 999,
    fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500,
    textDecoration: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)',
    border: 'none', boxShadow: onHero ? '0 4px 16px rgba(0,0,0,0.18)' : 'none',
    transition: 'all 0.25s ease',
  };

  const items = [
    { id: 'home',    label: 'Home',    href: 'index.html' },
    { id: 'about',   label: 'The Land', href: 'about.html' },
    { id: 'pricing', label: 'Pricing', href: 'pricing.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <>
      <nav style={navStyle}>
        <a href="index.html" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 22, fontWeight: 400, color: wordmarkColor, lineHeight: 1.0, letterSpacing: '0.5px' }}>
              Beyond Leisure
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: subColor, marginTop: 4, fontWeight: 400 }}>
              Powder Bay · Gili Gede
            </div>
          </div>
        </a>

        {isMobile ? (
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, minWidth: 44, minHeight: 44 }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 22, height: 1.5, borderRadius: 1, background: barColor,
                transform: menuOpen
                  ? (i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none')
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: 'transform 0.25s ease, opacity 0.2s ease',
              }} />
            ))}
          </button>
        ) : (
          <>
            <ul style={{ display: 'flex', gap: 38, listStyle: 'none', margin: 0, padding: 0 }}>
              {items.map(it => (
                <li key={it.id}>
                  <a href={it.href} style={linkStyle(it.id)}>{it.label}</a>
                </li>
              ))}
            </ul>
            <a href="contact.html" style={ctaStyle}>Enquire</a>
          </>
        )}
      </nav>

      {/* Mobile fullscreen menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
          background: 'var(--deep-canopy)',
          zIndex: 49,
          display: 'flex', flexDirection: 'column',
          padding: '28px 24px 40px',
          overflowY: 'auto',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {items.map((it) => (
              <li key={it.id} style={{ borderBottom: '1px solid rgba(250,248,244,0.1)' }}>
                <a href={it.href} onClick={() => setMenuOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 300,
                  fontStyle: active === it.id ? 'italic' : 'normal',
                  color: active === it.id ? 'var(--teak-grain)' : 'var(--coconut-cream)',
                  textDecoration: 'none', padding: '18px 0',
                  letterSpacing: '-0.3px',
                }}>
                  {it.label}
                  {active === it.id && <span style={{ fontSize: 22 }}>→</span>}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 36 }}>
            <a href="contact.html" onClick={() => setMenuOpen(false)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--teak-grain)', color: 'var(--deep-canopy)',
              padding: '16px 32px', borderRadius: 999,
              fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500,
              textDecoration: 'none', fontFamily: 'var(--font-body)',
            }}>Enquire about a plot →</a>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 32, borderTop: '1px solid rgba(250,248,244,0.1)' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(250,248,244,0.5)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Direct</div>
            <a href="mailto:info@beyondleisure.com" style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 300, color: 'var(--coconut-cream)', textDecoration: 'none' }}>
              info@beyondleisure.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};

window.Nav = Nav;
