
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Link, Star } from 'lucide-react';
import tabaAcademy from '../../assets/images/projects/logo.BVjs3Vfw.png';
import elMoqawma from '../../assets/images/projects/elmoqwma.png';
import jokerCarRental from '../../assets/images/projects/joker.png';
import klaksaAuto from '../../assets/images/projects/klaksat.png';
import driftech from '../../assets/images/projects/driftech.png';
import resaletFarah from '../../assets/images/projects/resalet-farah.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Driftech',
      description: 'Contributed to developing a production-grade automotive financing platform designed to simplify the car purchasing journey through fully digital financing solutions.',
      image: driftech,
      technologies: ['React', 'reduxjs', 'axios', 'formik', 'react-i18next', 'Laravel', 'MySQL', 'PAYMOB', 'FIREBASE',],
      liveUrl: 'https://driftech.tech/#/',
      srouce_code: false,
      status: 'Live Production System',
      contribution: [
        "Car Financing Workflow Development",
        "Customer Application Management",
        "Payment Integration (PAYMOB)",
        "Admin Dashboard Development",
        "API Development & Notification System (FIREBASE)",
        "Authentication with Social Login & User Management",
        "Multi-language Support",
        "Responsive Frontend Development",
      ]
    },
    {
      title: 'Joker Car Rental Dubai',
      description: 'Contributed to developing a production-grade car rental platform serving customers in Dubai, focused on vehicle booking, fleet management, and seamless customer inquiry workflows.',
      image: jokerCarRental,
      technologies: ['React', 'tailwindcss', 'lucide-react', 'swiper', 'Laravel', 'MySQL',],
      liveUrl: 'https://jokercarrentaldubai.com',
      status: 'Live Production System',
      srouce_code: false,
      contribution: [
        "Vehicle Booking System",
        "Fleet Management Dashboard",
        "Inquiry & Reservation Workflow",
        "API Development",
        "Responsive Frontend Development",
        "Performance Optimization",
        "Admin Dashboard Development"
      ]
    },
    {
      title: 'Klaksat Auto',
      description: 'Contributed to building a scalable automotive marketplace platform designed to help users explore vehicle listings, compare available cars, and access flexible financing options.',
      image: klaksaAuto,
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity'],
      liveUrl: 'https://klaksatauto.com',
      srouce_code: false,
      status: 'Live Production System',
      contribution: [
        "Vehicle Listing Management",
        "Car Comparison System",
        "Financing & Installment Workflow",
        "Admin Dashboard Development",
        "API Development",
        "User Experience Optimization"
      ]
    },
    {
      title: 'El Moqawma',
      description: 'Developed and contributed to a production-grade corporate web platform focused on delivering scalable business solutions.',
      image: elMoqawma,
      technologies: ['Corporate Platform', 'CMS', 'SEO Optimized', 'Laravel',
        'Vue.js', 'Nuxt.js',
        'MySQL',
        'REST API',
        'Authentication',
        'Admin Dashboard',
        'Responsive Design',
        'State Management (Pinia / Vuex)'],
      liveUrl: 'https://elmoqawma.com',
      status: 'Live Production System',
      srouce_code: false,
      contribution: [
        'Backend architecture',
        'Dynamic content management',
        'Performance optimization',
        'Responsive user-facing interfaces',
      ]
    },
    {
      title: 'Taba Academy',
      description: 'Contributed as part of a development team building a full-stack LMS platform using Nuxt.js, Laravel, and MySQL.',
      image: tabaAcademy,
      technologies: ['Nuxtjs', 'Laravel', 'mySql', 'MyFatoorah', 'Pinia'],
      liveUrl: 'https://tabaacademy.com',
      codeUrl: '#',
      status: 'Live Production System',
      srouce_code: false,
      contribution: [
        'Payment Integration',
        'User Authentication',
        'Course Management',
        'Admin Dashboard',
      ]
    },
    {
      title: 'Resalet Farah',
      description: 'Built a full-stack donation platform for a non-profit organization from scratch, designed to streamline donation management, volunteer registration, and secure online payment processing while delivering a seamless user experience.',
      image: resaletFarah,
      technologies: [
        'Next.js',
        'React.js',
        'Laravel',
        'MySQL',
        'Tailwind CSS',
        'TypeScript',
        'Fawry API'
      ],
      status: 'Live Production System',
      contribution: [
        'Full Stack Development',
        'System Architecture Design',
        'Donation Payment Integration',
        'Volunteer Registration Workflow',
        'Authentication & Authorization',
        'Admin Dashboard Development',
        'Backend API Development'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative ">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development
            and innovative problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass border-0 overflow-hidden hover-scale hover-glow group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 scale-5 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {
                  <Badge className="absolute capitalize top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                }
                <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1">
                    <Link className="w-4 h-4 mr-2" />
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live System
                    </a>
                  </Button>
                  {project.srouce_code ??
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black flex-1">
                      <Code className="w-4 h-4 mr-2" />
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                  }

                </div>
              </div>

              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4" >
                  {project.description}
                  {project.contribution && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-white mb-2">My Contributions:</h4>
                      <ul className="list-disc list-inside text-gray-400 text-sm">
                        {project.contribution.map((contribution) => (
                          <li key={contribution}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </p>
                <div className="flex flex-wrap items-end  gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale px-8 py-6"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
