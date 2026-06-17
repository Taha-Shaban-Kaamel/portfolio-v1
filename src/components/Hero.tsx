import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Star, Sparkles, Zap } from 'lucide-react';
import { RectangleHorizontal, RectangleVertical } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faGithub, faFigma, faLaravel , faVuejs } from '@fortawesome/free-brands-svg-icons'
import { useLottie } from 'lottie-react';
import animationData from '../../public/animations/hi.json'; 
import codingAnimation from '../../public/animations/coding.json';
import img from '../../assets/images/removed.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { View:HiAnimation } = useLottie({
    animationData: animationData ,
    loop: true,
    autoplay: true
  });
  const { View:CodingAnimation } = useLottie({
    animationData: codingAnimation,
    loop: true,
    autoplay: true
  });
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden ">
      {/* Matrix rain background */}
      <div className="matrix-rain absolute inset-0 opacity-30" />
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 animated-bg opacity-20" />
      
      {/* Interactive cursor glow with smoother movement */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none z-0 will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 500}px, ${mousePosition.y - 500}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div className="absolute top-10 left-10 floating-element">
        <RectangleHorizontal className="w-16 h-12 text-blue-400/30 animate-bounce-in hover-rotate" />
      </div>
      <div className="absolute top-20 right-20 floating-element">
        <RectangleVertical className="w-12 h-16 text-purple-400/40 animate-float hover-scale" />
      </div>
      <div className="absolute bottom-32 left-16 floating-element">
        <RectangleHorizontal className="w-20 h-14 text-pink-400/35 animate-wiggle hover-glow" />
      </div>
      <div className="absolute bottom-20 right-32 floating-element">
        <RectangleVertical className="w-10 h-14 text-green-400/30 animate-bounce-in hover-lift" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-1/3 left-20 floating-element">
        <RectangleHorizontal className="w-14 h-10 text-yellow-400/40 animate-glow hover-rotate" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-2/3 right-16 floating-element">
        <RectangleVertical className="w-8 h-12 text-cyan-400/35 animate-float-delayed hover-scale" />
      </div>
      <div className="absolute top-1/2 right-1/4 floating-element">
        <RectangleHorizontal className="w-18 h-12 text-indigo-400/30 animate-pulse-glow hover-wiggle" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 floating-element">
        <RectangleVertical className="w-6 h-10 text-orange-400/40 animate-spin-slow hover-bounce" />
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-20 floating-element">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl animate-pulse-glow" />
      </div>
      <div className="absolute bottom-20 right-20 floating-element">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse-glow" />
      </div>
      <div className="absolute top-1/2 left-10 floating-element">
        <Code className="w-8 h-8 text-primary/40 animate-bounce-in" />
      </div>
      <div className="absolute top-1/4 right-10 floating-element">
        <Star className="w-6 h-6 text-purple-400/40 animate-wiggle" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 floating-element">
        <Sparkles className="w-10 h-10 text-pink-400/40 animate-glow" />
      </div>
      <div className="absolute top-1/3 right-1/4 floating-element">
        <Zap className="w-7 h-7 text-yellow-400/40 animate-bounce-in" style={{ animationDelay: '1s' }} />
      </div>

      {/* Particle system */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="container flex justify-evenly items-center mx-auto px-6 text-start relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-between items-center`}>
          <div>
              <p className="text-white text-2xl font-light text-start flex items-end">
                <p className='w-12 h-12'>{HiAnimation}</p> Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-handwritten">
                <span className="gradient-text">
                  <span 
                    className="gradient-text pr-2 italic"
                    data-text="Full-Stack"
                    style={{ '--delay': '0' } as React.CSSProperties}
                  >
                    Taha 
                  </span>
                </span>
                <span 
                  className="text-white" 
                  style={{ '--characters': '9', '--delay': '1' } as React.CSSProperties}
                >
                  <span 
                    className="pl-2 text-wrap italic"
                  >
                    Shaban
                  </span>
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-handwritten">
                <span className="">
                  <span 
                    className=" pr-2 italic font-semibold animate-pulse"
                    data-text="Full-Stack"
                    style={{ '--delay': '0' } as React.CSSProperties}
                  >
                    Software 
                  </span>
                </span>
                <span 
                  className="text-white" 
                  style={{ '--characters': '9', '--delay': '1' } as React.CSSProperties}
                >
                  <span 
                    className="pl-2 text-wrap italic gradient-text "
                  >
                    Engineer
                  </span>
                </span>
              </h2>
            <div className="relative mb-8 max-w-2xl mx-auto">
              <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed transition-all duration-1000 delay-500 text-left ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`}>
                 with hands-on experience building{' '}
                <span className="gradient-text font-semibold animate-glow">production-grade </span>{' '}
                <p>LMS platforms, payment integrations, and scalable web applications..</p>
              </p>
            </div>
            
            <div className={` flex  flex-row  gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'animate-bounce-in' : 'opacity-0'} `}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-lift glow-border hover:text-white px-8 py-6 text-lg group"
                onClick={() => scrollToSection('projects')}
              >
                <span className="group-hover:animate-wiggle">View My Work</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale hover-rotate px-4 sm:px-8 py-6 text-lg group"
                onClick={() => scrollToSection('contact')}
              >
                <span className="group-hover:animate-bounce">Get In Touch</span>
              </Button>

            </div>
            <div className="flex flex-col transition-all duration-1000 delay-700 mt-3">
              <p className="text-gray-400 mb-2">current favorite tech stack/tools:</p>
              <div className="flex flex-wrap gap-4 text-2xl">
                {/* React */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faReact} className="text-blue-400 hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    React - A JavaScript library for building user interfaces
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
                
                {/* Node.js */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faNodeJs} className="text-green-500 hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Node.js - JavaScript runtime built on Chrome's V8 engine
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
                
                {/* GitHub */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-200 hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub - Platform for version control and collaboration
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
                
                {/* Figma */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faFigma} className="text-purple-400 hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Figma - Collaborative interface design tool
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
                
                {/* Laravel */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faLaravel} className="text-red-500 hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Laravel - PHP web application framework
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
                
                {/* Vue.js */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faVuejs} className="text-[#63E6BE] hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Vue.js - Progressive JavaScript framework
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 hidden sm:flex justify-center">
            <div className="relative group">
              <div className="w-[500px] h-[500px] rounded-lg ">
                <img
                  src={img}
                  alt="Developer Taha Shaban"
                  className="w-full h-full relative rounded-lg object-cover !scale-[1.4] group-hover:scale-105 transition-transform duration-300"
                />
                <p className="absolute top-[100px] left-[-180px] opacity-[.8] w-[400px] h-[400px] z-[-10]">{CodingAnimation}</p>
              </div>
              <div className="absolute inset-0 rounded-full" />
            </div>
          </div>
        </div>
        
      </div>
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-50 delay-1000 ${isVisible ? 'animate-slide-in-down' : 'opacity-0'}`}>
          <ArrowDown 
            className="w-8 h-8 text-primary animate-bounce cursor-pointer hover-scale hover:animate-pulse " 
            onClick={() => scrollToSection('about')}
          />
        </div>
    </section>
  );
};

export default Hero;
