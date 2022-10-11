import {
  AboutSection,
  ContactSection,
  HeroSection,
  Projects,
} from '../collections';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <section className='h-screen'>
        <HeroSection />
      </section>

      <section>
        <AboutSection />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  );
}
