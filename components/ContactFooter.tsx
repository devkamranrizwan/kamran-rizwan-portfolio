export function Contact() {
  return <section aria-labelledby="contact-title" className="contact-section" id="contact"><div className="container contact-layout"><div><div className="mono">Let&apos;s talk</div><h2 id="contact-title">Let&apos;s build something useful</h2><p>If you need help with a web product, complex frontend, full-stack feature or AI integration, I&apos;d be glad to hear about it. I&apos;m also open to international remote engineering opportunities.</p></div><div className="contact-methods"><a href="mailto:devkamranrizwan@gmail.com"><span>devkamranrizwan@gmail.com</span><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/kamran-rizwan/" rel="noopener noreferrer" target="_blank"><span>View my LinkedIn profile</span><span aria-hidden="true">↗</span></a></div></div></section>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Kamran Rizwan. All rights reserved.</span><span>React · TypeScript · Full-stack engineering</span></div></footer>;
}
