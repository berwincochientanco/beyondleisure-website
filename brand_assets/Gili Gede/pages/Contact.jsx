// Contact page

const ContactSplitHero = () => {
  const { isMobile } = useBreakpoint();
  const [first, setFirst]       = React.useState('');
  const [last, setLast]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [budget, setBudget]     = React.useState('USD 100K – 250K');
  const [plot, setPlot]         = React.useState('No preference yet');
  const [msg, setMsg]           = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending]   = React.useState(false);
  const [error, setError]       = React.useState('');

  const sendEnquiry = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true); setError('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@beyondleisure.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: 'Powder Bay enquiry — ' + first + ' ' + last, _template: 'table', _captcha: 'false', 'First Name': first, 'Last Name': last, Email: email, WhatsApp: whatsapp, 'Budget Range': budget, 'Plot of Interest': plot, Message: msg }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Could not send your enquiry. Please try WhatsApp or email instead.');
      }
    } catch (err) {
      setError(err.message || 'Could not send your enquiry. Please try WhatsApp or email instead.');
    } finally {
      setSending(false);
    }
  };

  const fieldStyle = {
    background: '#fff', border: '1px solid var(--sand-flat)',
    borderRadius: 4, padding: '14px 16px',
    fontFamily: 'var(--font-body)', fontSize: 14,
    color: 'var(--deep-canopy)', outline: 'none', width: '100%',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    minHeight: 48,
  };
  const labelStyle = {
    fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3,
    textTransform: 'uppercase', color: 'var(--sage-hillside)',
    marginBottom: 8, display: 'block', fontWeight: 500,
  };
  const selectStyle = {
    ...fieldStyle, cursor: 'pointer', appearance: 'none',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A9A7A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 40,
  };

  const contactItems = [
    { icon: 'W', label: 'WhatsApp', value: '+62 822 6458 7673' },
    { icon: '@', label: 'Email',    value: 'info@beyondleisure.com' },
    { icon: '◊', label: 'Website',  value: 'www.beyondleisure.com' },
  ];

  return (
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '45% 55%', minHeight: isMobile ? 'auto' : '100vh' }}>
      {/* Left dark panel */}
      <div style={{
        background: `linear-gradient(180deg, rgba(28,43,26,0.9), rgba(28,43,26,0.96)), url(${IMG.contactDark})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        color: 'var(--coconut-cream)',
        padding: isMobile ? '100px 24px 48px' : '160px 64px 64px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative', overflow: 'hidden',
        gap: isMobile ? 40 : 0,
      }}>
        <div style={{ position: 'absolute', top: 80, right: -120, width: 380, height: 380, background: 'radial-gradient(circle, rgba(196,180,138,0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {!isMobile && (
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--coconut-cream)', letterSpacing: '0.5px', lineHeight: 1.0, marginBottom: 8 }}>Beyond Leisure</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)' }}>Powder Bay · Gili Gede</div>
          </div>
        )}

        <div style={{ position: 'relative', maxWidth: 460 }}>
          <Eyebrow dark style={{ marginBottom: 20, color: 'var(--teak-grain)' }}>— Visit the Bay —</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 40 : 'clamp(48px, 5vw, 68px)', lineHeight: 1.05, color: 'var(--coconut-cream)', letterSpacing: '-1px', margin: 0, marginBottom: 20 }}>
            Walk the beach.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>Pick the plot.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 14 : 15, fontWeight: 300, color: 'rgba(250,248,244,0.75)', lineHeight: 1.75, margin: 0 }}>
            We respond to every enquiry within 24 hours, and arrange a guided
            walk of every available plot for buyers who can travel.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 28, borderTop: '1px solid rgba(250,248,244,0.12)' }}>
          {contactItems.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(196,180,138,0.15)', border: '1px solid rgba(196,180,138,0.4)', color: 'var(--teak-grain)', fontFamily: 'var(--font-display)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontStyle: 'italic', flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--sage-light)' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 16 : 18, fontWeight: 400, color: 'var(--coconut-cream)', marginTop: 2, letterSpacing: '0.2px' }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div style={{ background: 'var(--coconut-cream)', padding: isMobile ? '48px 24px 64px' : '160px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 560 }}>
          <Eyebrow style={{ marginBottom: 16 }}>— Enquiry —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 32 : 44, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-0.7px', margin: 0, marginBottom: 32 }}>
            Tell us about{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>your plot.</em>
          </h2>

          {submitted ? (
            <div style={{ padding: 36, background: '#fff', borderRadius: 8, border: '1px solid var(--sage-light)' }}>
              <Eyebrow style={{ marginBottom: 12 }}>Thank You</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 30, color: 'var(--deep-canopy)', margin: 0, marginBottom: 12 }}>Your enquiry is <em style={{ color: 'var(--teak-grain)' }}>received.</em></h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--driftwood)', margin: 0, marginBottom: 22 }}>We will respond within 24 hours with plot recommendations matched to your budget.</p>
              <Button variant="ghost" onClick={() => setSubmitted(false)}>Send another enquiry</Button>
            </div>
          ) : (
            <form onSubmit={sendEnquiry}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input style={fieldStyle} value={first} onChange={(e) => setFirst(e.target.value)} placeholder="Sofia" required />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input style={fieldStyle} value={last} onChange={(e) => setLast(e.target.value)} placeholder="De Vries" required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" style={fieldStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sofia@example.com" required />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp</label>
                  <input style={fieldStyle} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+62 …" />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select style={selectStyle} value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option>USD 20K – 100K</option>
                    <option>USD 100K – 250K</option>
                    <option>USD 250K+</option>
                    <option>Portfolio Offer</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Plot of Interest</label>
                  <select style={selectStyle} value={plot} onChange={(e) => setPlot(e.target.value)}>
                    <option>No preference yet</option>
                    <option>Tier 1 · Interior</option>
                    <option>Tier 2 · Mid-Slope</option>
                    <option>Tier 3 · Beachfront</option>
                    <option>Multiple plots</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Message</label>
                <textarea style={{ ...fieldStyle, minHeight: 120, resize: 'vertical' }} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us your timeline, intended use, or which plots interest you most..." />
              </div>
              <Button variant="teak" size="lg" icon>{sending ? 'Sending…' : 'Send Enquiry'}</Button>
              {error && (
                <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontSize: 12, color: '#A6573F', lineHeight: 1.6, background: '#FBEFE8', border: '1px solid #E8C9B4', borderRadius: 4, padding: '10px 14px' }}>{error}</div>
              )}
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--limestone)', marginTop: 16, fontStyle: 'italic' }}>
                We respond within 24 hours. Your details stay between us and the notary.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const ProcessTimeline = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const steps = [
    { n: '01', title: 'Enquire & Shortlist', body: 'Send us your budget and intended use. We respond within 24 hours with two or three plots that fit.' },
    { n: '02', title: 'Site Visit',           body: 'We arrange airport pickup, accommodation on Gili Gede, and a guided walk of every shortlisted plot.' },
    { n: '03', title: 'Reservation',          body: 'A USD 2,000 refundable deposit holds your plot for 30 days, registered in your name with the notary.' },
    { n: '04', title: 'Due Diligence',        body: 'Title search, zoning verification, and topographic survey are completed by an independent notary.' },
    { n: '05', title: 'Notary Signing',       body: 'Final purchase deed signed in Mataram. Funds settled in IDR via escrow account.' },
    { n: '06', title: 'After Sale',           body: 'Optional handover to our architect partners and a property manager. We stay in touch.' },
  ];

  const cols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)';

  return (
    <section id="process" style={{ background: 'var(--coconut-cream)', padding: isMobile ? '72px 24px' : '120px 64px', borderTop: '1px solid var(--sand-flat)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 48 : 64, textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 18 }}>— The Process —</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 30 : 48, lineHeight: 1.1, color: 'var(--deep-canopy)', letterSpacing: '-0.8px', margin: 0, maxWidth: 720, marginInline: 'auto' }}>
            From first enquiry to keys —{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--teak-grain)' }}>six considered steps.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? '28px 16px' : 0 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ padding: isMobile ? '0 8px' : '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius: '50%', background: 'var(--coconut-cream)', border: '1px solid var(--teak-grain)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: isMobile ? 18 : 22, color: 'var(--deep-canopy)', marginBottom: isMobile ? 16 : 28, position: 'relative', zIndex: 1, flexShrink: 0 }}>{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 17 : 20, lineHeight: 1.2, color: 'var(--deep-canopy)', margin: 0, marginBottom: 10, letterSpacing: '-0.2px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--driftwood)', fontWeight: 300, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => (
  <>
    <Nav active="contact" />
    <ContactSplitHero />
    <ProcessTimeline />
    <Footer />
  </>
);

window.ContactPage = ContactPage;
