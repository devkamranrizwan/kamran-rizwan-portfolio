import { TowerOfHanoi } from "./TowerOfHanoi";

export function Playground() {
  return (
    <section aria-labelledby="playground-title" className="playground" id="playground">
      <div className="container">
        <div className="lab-top">
          <div><div className="section-eyebrow mono">Interactive demo</div><h2 className="section-title" id="playground-title">Try an interactive demo</h2></div>
          <div><p className="lab-intro">Tower of Hanoi is a classic exercise in recursion and problem-solving. Move the complete stack from A to C. You&apos;ll get a breakdown of your exact moves when you finish.</p><div className="lab-instructions"><span>Choose a tower</span><span>Choose where to move</span><span>Smaller disks stay on top</span></div></div>
        </div>
        <TowerOfHanoi />
      </div>
    </section>
  );
}
