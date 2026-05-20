const Footer = () => {
  const { isMobile, isTablet } = useBreakpoint();

  const cols = [
    {
      title: 'The Project',
      links: [
        { label: 'Home',            href: 'index.html' },
        { label: 'The Land',        href: 'about.html' },
        { label: 'Pricing & Plots', href: 'pricing.html' },
        { label: 'Masterplan',      href: 'about.html#masterplan' },
      ],
    },
    {
      title: 'The Island',
      links: [
        { label: 'Gili Gede',    href: 'about.html' },
        { label: 'Getting Here', href: 'about.html#location' },
        { label: 'Lifestyle',    href: 'about.html#lifestyle' },
        { label: 'Origin Story', href: 'about.html#story' },
      ],
    },
    {
      title: 'Investment',
      links: [
        { label: 'Reservation',    href: 'pricing.html#reserve' },
        { label: 'Ownership',      href: 'pricing.html#ownership' },
        { label: 'Process',        href: 'contact.html#process' },
        { label: 'Brochure (PDF)', href: '#' },
      ],
    },
  ];

  const pad = isMobile ? '40px 24px 28px' : '56px 64px 32px';

  return (
    <footer style={{ background: 'var(--deep-canopy)', color: 'var(--coconut-cream)' }}>
      <div style={{ height: 1, background: 'var(--teak-grain)' }} />

      <div style={{ padding: pad, maxWidth: 1440, margin: '0 auto' }}>

        {/* Top row: wordmark · tagline · social */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap', paddingBottom: isMobile ? 32 : 48,
          borderBottom: '1px solid rgba(250,248,244,0.1)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 300, color: 'var(--coconut-cream)', letterSpacing: '0.5px', lineHeight: 1.0 }}>
              Beyond Leisure
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)', marginTop: 8 }}>
              Powder Bay · Gili Gede
            </div>
          </div>
          {!isMobile && (
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: 'var(--teak-grain)', letterSpacing: '0.3px', alignSelf: 'center' }}>
              The island beyond Bali.
            </div>
          )}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { label: 'IG', href: 'https://www.instagram.com/beyondleisureindonesia?igsh=MXhiM21ycGhiaHRoMg==' },
              { label: 'in', href: 'https://www.linkedin.com/in/beyond-leisure-376a1140b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
              { label: 'F',  href: 'https://www.facebook.com/profile.php?id=61589739106990' },
            ].map((x) => (
              <a key={x.label} href={x.href} target={x.href !== '#' ? '_blank' : undefined} rel={x.href !== '#' ? 'noopener noreferrer' : undefined} style={{
                width: 40, height: 40, borderRadius: 999,
                border: '1px solid rgba(250,248,244,0.25)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--coconut-cream)', textDecoration: 'none',
                fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: 1,
                transition: 'all 0.2s ease',
              }}>{x.label}</a>
            ))}
          </div>
        </div>

        {/* Middle: link columns + contact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr 1fr' : '1.4fr 1fr 1fr 1fr',
          gap: isMobile ? '32px 24px' : 64,
          padding: isMobile ? '32px 0' : '48px 0',
          borderBottom: '1px solid rgba(250,248,244,0.1)',
        }}>
          {!isMobile && (
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 18 }}>COMPANY</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.9, color: 'rgba(250,248,244,0.7)' }}>
                PT Gili Gede PropertyB
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)', marginTop: 28, marginBottom: 12 }}>Direct</div>
              <a href="mailto:info@beyondleisure.com" style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 300, color: 'var(--coconut-cream)', textDecoration: 'none', borderBottom: '1px solid var(--teak-grain)', paddingBottom: 2 }}>
                info@beyondleisure.com
              </a>
            </div>
          )}
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 18 }}>{col.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(250,248,244,0.7)', textDecoration: 'none', letterSpacing: 0.2 }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {isMobile && (
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 12 }}>Direct</div>
              <a href="mailto:info@beyondleisure.com" style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 300, color: 'var(--coconut-cream)', textDecoration: 'none', borderBottom: '1px solid var(--teak-grain)', paddingBottom: 2 }}>
                info@beyondleisure.com
              </a>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div style={{ paddingTop: 24, fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 0.3, color: 'var(--limestone)', lineHeight: 1.8, maxWidth: 980 }}>
          USD prices are indicative, calculated at IDR 17,000 / USD. Final settlement in IDR.
          Plot availability and pricing as of April 2026 and subject to change without notice.
          Beyond Leisure markets land in cooperation with PT Powder Bay Indonesia, the freehold land owner.
        </div>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(250,248,244,0.45)', letterSpacing: 1.5, textTransform: 'uppercase', flexWrap: 'wrap', gap: 12 }}>
          <div>© 2026 Beyond Leisure · All rights reserved</div>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Privacy', 'Terms', 'Press Kit'].map((l) => (
              <a key={l} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
