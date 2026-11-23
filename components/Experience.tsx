import { experience } from "@/data/portfolio";

export function Experience() {
  return <section aria-labelledby="experience-title" className="section experience" id="experience"><div className="container career-layout"><div className="career-intro"><div className="section-eyebrow mono">Experience</div><h2 className="section-title" id="experience-title">The work behind the code</h2><p>From AngularJS applications to enterprise SaaS and financial dashboards, each role has shaped how I build software today.</p></div><div className="career-list">{experience.map((item) => <article className="career-entry" key={item.company}><span className="career-year">{item.year}</span><div><h3>{item.company}</h3><span className="career-role">{item.role}</span><p>{item.description}</p></div></article>)}</div></div></section>;
}
