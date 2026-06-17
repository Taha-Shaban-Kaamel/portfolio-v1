
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Experience />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
