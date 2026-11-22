import Image from "next/image";
import { HeaderControls } from "./HeaderControls";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a aria-label="Kamran Rizwan, home" className="brand" href="#home">
          <span className="brand-mark"><Image alt="Portrait of Kamran Rizwan" height={46} src="/assets/avatar.webp" width={46} /></span>
          <span className="brand-name">Kamran Rizwan<small>Software engineer</small></span>
        </a>
        <HeaderControls />
        <a className="header-contact" href="mailto:devkamranrizwan@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
