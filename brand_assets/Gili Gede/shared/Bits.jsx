// Shared primitives — exported to window
const Eyebrow = ({ children, dark, style }) => (
  <div style={{
    fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: 4,
    textTransform: 'uppercase',
    color: dark ? 'var(--sage-light)' : 'var(--sage-hillside)',
    ...style,
  }}>{children}</div>
);

const Label = ({ children, dark, style }) => (
  <div style={{
    fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: 3,
    textTransform: 'uppercase',
    color: dark ? 'var(--sage-light)' : 'var(--sage-hillside)',
    ...style,
  }}>{children}</div>
);

const Button = ({ variant = 'primary', size = 'md', icon, children, onClick, style, href }) => {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
    border: 'none', fontFamily: 'var(--font-body)', letterSpacing: 2,
    textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500,
    transition: 'all 0.25s ease', whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '11px 22px', fontSize: 9 },
    md: { padding: '16px 32px', fontSize: 10 },
    lg: { padding: '20px 44px', fontSize: 11 },
  };
  const variants = {
    // pill-rounded primary (deep canopy)
    primary: {
      background: hover ? 'var(--driftwood)' : 'var(--deep-canopy)',
      color: 'var(--coconut-cream)', borderRadius: 999,
      transform: hover ? 'translateY(-1px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
    },
    secondary: {
      background: hover ? 'var(--canopy-20)' : 'transparent',
      color: 'var(--deep-canopy)', borderRadius: 999,
      border: '1px solid var(--deep-canopy)',
    },
    teak: {
      background: hover ? 'var(--teak-light)' : 'var(--teak-grain)',
      color: 'var(--deep-canopy)', borderRadius: 999,
      transform: hover ? 'translateY(-1px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--deep-canopy)' : 'var(--sage-hillside)',
      borderBottom: hover ? '1px solid var(--deep-canopy)' : '1px solid var(--sage-hillside)',
      borderRadius: 0, padding: '0 0 4px',
    },
    outlineLight: {
      background: hover ? 'rgba(250,248,244,0.1)' : 'transparent',
      color: 'var(--coconut-cream)',
      border: '1px solid rgba(250,248,244,0.4)', borderRadius: 999,
    },
  };
  const s = { ...base, ...sizes[size], ...variants[variant], ...(variant === 'ghost' ? { padding: '0 0 4px' } : {}), ...style };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      style={s}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {icon && <span style={{ fontSize: 13, letterSpacing: 0, marginLeft: 2 }}>→</span>}
    </Tag>
  );
};

const Badge = ({ variant = 'sage', children, style }) => {
  const variants = {
    sage: { background: 'var(--sage-pale)', color: 'var(--deep-canopy)', border: '1px solid var(--sage-light)' },
    teak: { background: 'var(--teak-pale)', color: 'var(--deep-canopy)', border: '1px solid var(--teak-light)' },
    dark: { background: 'var(--deep-canopy)', color: 'var(--coconut-cream)', border: 'none' },
    cream: { background: 'rgba(250,248,244,0.92)', color: 'var(--deep-canopy)', border: 'none', backdropFilter: 'blur(8px)' },
    outline: { background: 'transparent', color: 'var(--driftwood)', border: '1px solid var(--sand-flat)' },
    outlineLight: { background: 'transparent', color: 'var(--coconut-cream)', border: '1px solid rgba(250,248,244,0.3)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 400,
      padding: '7px 14px', borderRadius: 999, fontFamily: 'var(--font-body)',
      ...variants[variant], ...style,
    }}>
      {children}
    </span>
  );
};

const OrnateDivider = ({ children, dark }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 20,
    color: dark ? 'rgba(250,248,244,0.4)' : 'var(--limestone)',
    fontSize: 10, letterSpacing: 3,
    textTransform: 'uppercase', fontFamily: 'var(--font-body)',
  }}>
    <span style={{ flex: 1, height: 1, background: dark ? 'rgba(250,248,244,0.15)' : 'var(--sand-flat)' }} />
    <span>{children}</span>
    <span style={{ flex: 1, height: 1, background: dark ? 'rgba(250,248,244,0.15)' : 'var(--sand-flat)' }} />
  </div>
);

// Section number marker e.g. "01"
const SectionNum = ({ children, dark }) => (
  <span style={{
    fontFamily: 'var(--font-display)',
    fontSize: 14, letterSpacing: 3, fontWeight: 400,
    color: dark ? 'var(--sage-light)' : 'var(--sage-hillside)',
    marginRight: 12, fontStyle: 'italic',
  }}>{children}</span>
);

// Pill chip used in feature cards (Beaches · Mountain · Coast etc.)
const Pill = ({ children, tone = 'default' }) => {
  const tones = {
    default: { background: 'transparent', color: 'var(--driftwood)', border: '1px solid var(--sand-flat)' },
    sage: { background: 'var(--sage-pale)', color: 'var(--deep-canopy)', border: '1px solid transparent' },
    teak: { background: 'var(--teak-pale)', color: 'var(--deep-canopy)', border: '1px solid transparent' },
  };
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 11, letterSpacing: 1, fontWeight: 400,
      padding: '7px 14px', borderRadius: 999,
      ...tones[tone],
    }}>{children}</span>
  );
};

const useWindowWidth = () => {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
};

const useBreakpoint = () => {
  const w = useWindowWidth();
  return { isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024, w };
};

Object.assign(window, { Eyebrow, Label, Button, Badge, OrnateDivider, SectionNum, Pill, useWindowWidth, useBreakpoint });
