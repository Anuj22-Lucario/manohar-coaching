import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import BatchSchedule from '@/components/BatchSchedule';
import Facilities from '@/components/Facilities';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <BatchSchedule />
        <Facilities />
        <Reviews />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
