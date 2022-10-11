import { HeroSection } from '../collections';
import { Navbar } from '../components';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <section className='h-screen'>
        <HeroSection />
      </section>
    </div>
  );
}
