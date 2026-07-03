import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Honors from './sections/Honors';
import Contact from './sections/Contact';
import ProjectDetail from './pages/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        bar.style.transform = `scaleX(${self.progress})`;
      },
    });
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent/60 origin-left z-[100]"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    if (params.has('scrollTo')) {
      const id = params.get('scrollTo');
      setTimeout(() => {
        const el = document.getElementById(id || '');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  return null;
}

function HomePage() {
  // Section scroll animation
  useEffect(() => {
    const sections = document.querySelectorAll('[data-animate-section]');
    sections.forEach((section) => {
      const heading = section.querySelector('[data-animate-heading]');
      const cards = section.querySelectorAll('[data-animate-card]');
      const content = section.querySelectorAll('[data-animate-content]');

      if (heading) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          onEnter: () => {
            const spans = heading.querySelectorAll('span');
            gsap.fromTo(
              spans,
              { y: 60, opacity: 0, rotateX: 10 },
              { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.05, ease: 'power3.out' },
            );
          },
          once: true,
        });
      }

      if (cards.length) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 75%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0, scale: 0.97 },
              { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
            );
          },
          once: true,
        });
      }

      if (content.length) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              content,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power2.out' },
            );
          },
          once: true,
        });
      }
    });

    // Parallax on background layers
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      ScrollTrigger.create({
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const y = self.progress * 60 - 30;
          (el as HTMLElement).style.transform = `translateY(${y}px)`;
        },
      });
    });

    // Anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href') || '');
        if (target) {
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Honors />
      <div className="section-divider" />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
