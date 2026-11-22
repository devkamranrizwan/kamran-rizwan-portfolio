import { Contact, Footer } from "@/components/ContactFooter";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndependentProjects } from "@/components/IndependentProjects";
import { ProfessionalWork } from "@/components/ProfessionalWork";
import { Playground } from "@/components/Playground";

const personStructuredData = {
  "@context": "https://schema.org", "@type": "Person", name: "Kamran Rizwan", jobTitle: "Senior Software Engineer",
  url: "https://kamran-rizwan.vercel.app/", image: "https://kamran-rizwan.vercel.app/assets/kamran-rizwan.webp",
  sameAs: ["https://www.linkedin.com/in/kamran-rizwan/"],
  knowsAbout: ["React", "TypeScript", "Next.js", "Node.js", "Full-stack engineering", "RAG", "Cloud engineering"],
};

export default function HomePage() {
  return <><script dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c") }} type="application/ld+json" /><Header /><main id="home"><Hero /><ProfessionalWork /><Experience /><IndependentProjects /><Expertise /><Playground /><Contact /></main><Footer /></>;
}
