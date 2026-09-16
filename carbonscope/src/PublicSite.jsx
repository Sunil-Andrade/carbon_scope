import { useState } from 'react'
import { Link } from 'react-router-dom'

function Arrow() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>
}

export function PublicHeader({ brand, signedIn }) {
  const [open, setOpen] = useState(false)
  return <header className="public-header">
    <div className="public-nav-wrap">
      {brand}
      <nav className="public-desktop-nav" aria-label="Main navigation">
        <a href="/#how-it-works">How it works</a>
        <a href="/#our-purpose">Our purpose</a>
        <a href="/#possibilities">Ways to contribute</a>
      </nav>
      <div className="public-nav-actions">
        {signedIn ? <Link className="button primary" to="/dashboard">My dashboard <Arrow/></Link> : <><Link className="public-login" to="/login">Log in</Link><Link className="button primary" to="/register">Get started <Arrow/></Link></>}
        <button className="public-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="public-mobile-nav" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
      </div>
    </div>
    {open && <nav id="public-mobile-nav" className="public-mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}><a href="/#how-it-works">How it works</a><a href="/#our-purpose">Our purpose</a><a href="/#possibilities">Ways to contribute</a><Link to={signedIn ? '/dashboard' : '/login'}>{signedIn ? 'My dashboard' : 'Log in'}</Link></nav>}
  </header>
}

export function PublicFooter({ brand }) {
  return <footer className="public-footer"><div>{brand}<p>A little action. A lasting impact.</p></div><nav aria-label="Footer navigation"><a href="/#how-it-works">How it works</a><a href="/#our-purpose">Our purpose</a><Link to="/login">Log in</Link></nav><span>© {new Date().getFullYear()} CarbonScope.<br/>Made for a world worth caring for.</span></footer>
}

export default function PublicHome({ signedIn }) {
  const start = signedIn ? '/dashboard' : '/register'
  return <>
    <section className="landing-hero">
      <img src="/forest.png" className="landing-hero-photo" alt="Sunrise over a lush forest and winding river" fetchPriority="high"/>
      <div className="landing-hero-overlay"/>
      <div className="landing-hero-inner">
        <div className="landing-eyebrow"><i/>FOR THE PLANET. FOR ALL OF US.</div>
        <h1>A little action.<br/>A <em>lasting</em> impact.</h1>
        <p>A healthier planet starts with what we do today.<br className="landing-break"/> Turn your environmental actions into a story of<br className="landing-break"/> measurable, meaningful change.</p>
        <div className="landing-hero-actions"><Link to={start} className="button lime">{signedIn ? 'Go to your dashboard' : 'Start your impact journey'}<Arrow/></Link><a href="#how-it-works" className="landing-watch"><span>↗</span>See how it works</a></div>
        <div className="landing-hero-bottom"><span>GOOD INTENTIONS. REAL-WORLD ACTION.</span><a href="#our-purpose" aria-label="Scroll to our purpose">↓</a><span>ONE PLANET. A SHARED FUTURE.</span></div>
      </div>
      <div className="landing-nature-note"><span>↗</span><div>Rooted in action.<br/><strong>Growing with purpose.</strong></div></div>
    </section>

    <section className="landing-principles" aria-label="Our principles"><span>Small steps.<br/><strong>A bigger picture.</strong></span><div><b>01</b>Document your actions</div><div><b>02</b>Make progress visible</div><div><b>03</b>Build lasting change</div></section>

    <section id="our-purpose" className="landing-purpose landing-section">
      <div className="landing-purpose-photo"><img src="/planting.png" alt="Hands planting a young sapling in rich soil" loading="lazy"/><span>THE FUTURE IS IN OUR HANDS.</span><div className="landing-photo-label"><span>One small step.</span><strong>So much possibility.</strong></div></div>
      <div className="landing-purpose-copy"><span className="landing-kicker">A PURPOSE WE SHARE</span><h2>Doing good deserves<br/>to <em>be seen.</em></h2><p>Planting a tree. Saving energy. Giving waste a second life. The things we do for our planet matter—and they deserve more than a passing moment.</p><p>CarbonScope brings your environmental actions together in one place. Document what you did, support it with evidence, and follow its journey toward verified impact.</p><div className="landing-purpose-points"><span><i>✓</i> A clear record of every contribution</span><span><i>✓</i> Evidence at the heart of the process</span><span><i>✓</i> Progress you can understand and share</span></div><Link className="landing-inline-link" to={start}>Find your place in the bigger picture <Arrow/></Link></div>
    </section>

    <section id="how-it-works" className="landing-how landing-section"><div className="landing-section-heading"><div><span className="landing-kicker">SIMPLE STEPS. MEANINGFUL CHANGE.</span><h2>From intention<br/>to <em>impact.</em></h2></div><p>You don’t have to change everything.<br/>Just start with something.</p></div><div className="landing-steps">
      {[['01','Take a positive step','Choose an environmental action in your community, your organization, or your everyday life.','Make it happen.'],['02','Tell the whole story','Record what you did, where it happened, and the difference you made. Add a photo or document.','Make it visible.'],['03','Follow your progress','Track the review of your evidence and see your verified contribution grow over time.','Make it count.']].map(([n,title,copy,foot]) => <article key={n}><div className="landing-step-number">{n}<Arrow/></div><h3>{title}</h3><p>{copy}</p><span>{foot}</span></article>)}
    </div></section>

    <section id="possibilities" className="landing-possibilities landing-section"><div className="landing-section-heading"><div><span className="landing-kicker">FIND YOUR STARTING POINT</span><h2>Different actions.<br/><em>One shared planet.</em></h2></div><Link to={start} className="landing-inline-link">Start contributing <Arrow/></Link></div><div className="landing-category-grid">
      {[['01','Reforestation','Let a greener future take root.','Plant native trees and help restore the green spaces around you.','tree'],['02','Clean energy','A brighter way forward.','Document energy savings and renewable electricity generation.','energy'],['03','Waste reduction','Less waste. More possibility.','Keep materials in use through recycling, recovery, and reuse.','waste'],['04','Water conservation','Make every drop count.','Capture rainwater and document practical water-saving efforts.','water']].map(([n,title,line,copy,type]) => <Link to={start} key={n} className={`landing-category ${type}`}><div className="landing-category-top"><span>{n} /</span><Arrow/></div><div className="landing-category-art" aria-hidden="true">{type==='tree'?<svg viewBox="0 0 120 120"><path d="M60 104V48M60 73C19 72 19 25 20 18c40-1 43 27 40 55ZM61 87c-3-41 24-58 42-55 4 36-15 53-42 55Z"/></svg>:type==='energy'?<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="25"/><path d="M60 10v13m0 74v13M10 60h13m74 0h13M25 25l10 10m50 50 10 10M25 95l10-10m50-50 10-10"/></svg>:type==='waste'?<svg viewBox="0 0 120 120"><path d="M33 34a39 39 0 0 1 64 24M96 34l2 25-25-2M86 86a39 39 0 0 1-64-24m1 24-2-25 25 2"/></svg>:<svg viewBox="0 0 120 120"><path d="M60 12S24 52 24 76a36 36 0 0 0 72 0c0-24-36-64-36-64Z"/><path d="M39 76a21 21 0 0 0 21 21"/></svg>}</div><h3>{title}</h3><strong>{line}</strong><p>{copy}</p></Link>)}
    </div></section>

    <section className="landing-accountability landing-section"><span className="landing-kicker">BUILT AROUND TRANSPARENCY</span><h2>A contribution is a beginning.<br/><em>Evidence makes it meaningful.</em></h2><p>Documented actions and verified impact are different steps. CarbonScope keeps that distinction clear, so you always know what’s submitted, what’s in review, and what’s been verified.</p><div><span>Documented with care</span><i/><span>Reviewed with evidence</span><i/><span>Tracked with clarity</span></div></section>

    <section className="landing-cta"><img src="/forest.png" alt="Green forest canopy surrounding a river" loading="lazy"/><div><span className="landing-eyebrow">TOMORROW STARTS WITH TODAY.</span><h2>Your next small step<br/>could be a <em>big deal.</em></h2><Link to={start} className="button lime">{signedIn ? 'Continue your journey' : 'Let’s make a difference'}<Arrow/></Link><p>Already part of the journey? <Link to={signedIn ? '/dashboard' : '/login'}>{signedIn ? 'Open your dashboard' : 'Log in'}</Link></p></div></section>
  </>
}
