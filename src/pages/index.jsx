import { AboutSection, HeroSection } from '../collections';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <section className='h-screen'>
        <HeroSection />
      </section>

      <section>
        <AboutSection />
      </section>
    </div>
  );
}
