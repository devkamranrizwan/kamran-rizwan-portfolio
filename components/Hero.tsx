import Image from "next/image";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="about">
      <div className="container">
        <div className="hero-layout">
          <div>
            <div className="role-row"><span className="role-label">Senior Software Engineer</span><span className="status-label">Open to remote opportunities</span></div>
            <h1 id="hero-title">Turning complex ideas into <em>reliable software.</em></h1>
            <p className="hero-lead">I&apos;m Kamran Rizwan, a software engineer with 8+ years of experience across financial technology, enterprise SaaS, immersive collaboration and consumer products. I focus on elegant interfaces, reliable full-stack systems and thoughtful engineering.</p>
            <div className="hero-actions"><a className="button button-dark" href="#professional-work">Explore professional work <span aria-hidden="true">↗</span></a><a className="button button-outline" download="Kamran-Rizwan-Resume.pdf" href="/Kamran-Rizwan-Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a></div>
            <div className="hero-quickfacts"><div className="hero-fact"><strong>8+ years</strong><span>Software engineering experience</span></div><div className="hero-fact"><strong>Global experience</strong><span>Remote collaboration with US and German teams</span></div></div>
          </div>
          <figure className="hero-portrait">
            <Image alt="Portrait of Kamran Rizwan" decoding="async" fetchPriority="high" height={907} priority src="/assets/kamran-rizwan.webp" width={909} />
            <figcaption className="portrait-caption"><span className="portrait-name">Kamran Rizwan</span><span className="portrait-role">Senior Software Engineer</span></figcaption>
          </figure>
        </div>
        <div className="hero-bottom"><span>BASED IN PAKISTAN · WORKING INTERNATIONALLY</span><span>FRONTEND · FULL STACK · AI INTEGRATIONS · CLOUD</span></div>
      </div>
    </section>
  );
}
