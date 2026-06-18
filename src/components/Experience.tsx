
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: 'Junior Full-Stack Developer',
      company: 'Knowhow Solutions',
      period: 'January 2025 - July 2025',
      location: 'Cairo, Egypt',
      description: 'Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      technologies: ['nuxtjs', 'Vue.js', 'Laravel','MySQL','firebase','docker','nginx','git','github','slack','deployment'],
      achievements: [
        'Reduced application load time by 40%',
        'work on Learning management systems',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'ZYDX',
      period: 'July 2025 - Mat 2026',
      location: 'Cairo, Egypt',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.',
      technologies: ['React.js', 'redux', 'axios', 'paymob', 'mysql'],
      achievements: [
        'Delivered 15+ successful projects',
        'Improved system performance by 35%',
        'optimized database queries',
        'worked on cars financing platforms'
      ]
    },
    
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey showcasing growth, achievements, and the impact
            I've made across different organizations and projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background hidden md:block animate-glow" />
                
                <div className="md:ml-20">
                  <Card className="glass border-0 hover-glow hover-scale transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <div className="flex items-center text-primary mb-2">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.period} • {exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
