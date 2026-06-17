
import { Code, Star, Link, User } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Link, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tahashaban/' },
    { icon: Code, label: 'GitHub', href: 'https://github.com/Taha-Shaban-Kaamel' },
    { icon: Star, label: 'WhatsApp', href: 'https://wa.me/01055724970' },
    { icon: User, label: 'Portfolio', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio</h3>
            <p className="text-gray-400">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover-scale hover-glow transition-all duration-300 group"
                  aria-label={social.label}
                  target='blank'
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Portfolio. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
