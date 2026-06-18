
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Layout, Star, Users, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Reactjs', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Vue/Nuxtjs', level: 95, color: 'from-green-300 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'PHP/laravel', level: 95, color: 'from-green-500 to-green-400' },
    { name: 'SQL/MySQL', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL', level: 82, color: 'from-blue-700 to-blue-500' },
    { name: 'AWS/Cloud', level: 78, color: 'from-orange-500 to-red-500' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Layout,
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first designs that work on all devices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Performance',
      description: 'Optimizing applications for speed, SEO, and user experience.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using modern development workflows.',
      color: 'from-red-500 to-orange-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            const newProgress: Record<string, number> = {};
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setSkillProgress(prev => ({ ...prev, [skill.name]: skill.level }));
              }, index * 200);
            });
          }, 500);
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
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-primary/20 animate-glow floating-element" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-1'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-reveal">
            About <span className="gradient-text animate-flip-in">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            Passionate full-stack developer with expertise in modern web technologies,
            creating innovative solutions that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-1'}`}>
            <div className="glass p-8 rounded-2xl hover-lift glow-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              <h3 className="text-2xl font-bold mb-6 gradient-text animate-bounce-in">My Story</h3>
              <p className="text-gray-300 mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                With over 1 years of experience in web development, I specialize in creating
                high-performance applications using cutting-edge technologies. My journey started
                with a curiosity for problem-solving and has evolved into a passion for crafting
                digital experiences that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.7s' }}>
                I believe in continuous learning and staying up-to-date with the latest trends
                in technology. When I'm not coding, you'll find me contributing to open-source
                projects or mentoring fellow developers.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass p-8 rounded-2xl hover-lift glow-border relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
              <h3 className="text-2xl font-bold mb-6 gradient-text animate-bounce-in">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                        {skill.name}
                      </span>
                      <span className="text-gray-400 animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                        {skillProgress[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out animate-pulse-glow`}
                        style={{
                          width: `${skillProgress[skill.name] || 0}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`glass border-0 hover-lift hover:hover-rotate glow-border group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center animate-pulse-glow group-hover:animate-bounce`}>
                    <Icon className="w-8 h-8 text-white group-hover:animate-wiggle" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
