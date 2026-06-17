
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';
import mutators from '../../assets/images/blogs/mutators.jpeg'
import scopes from '../../assets/images/blogs/elquent.webp'
import stateManagement from '../../assets/images/blogs/state management.png'

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('blogs');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "Accessors & Mutators in Laravel",
      description: "Understand how Laravel Accessors and Mutators help you transform, format, and manage model attributes efficiently while keeping your code clean and maintainable.",
      date: "2025-06-15",
      readTime: "5 min read",
      image: mutators,
      link: "https://www.linkedin.com/posts/tahashaban_laravel-php-webdevelopment-activity-7311942530089066497-hyMg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFKfJcBciUB6xWs50vG8YAb_eGEutRQOmU",
      tags: ["Laravel", "PHP", "Backend"]
    },
    {
      title: "Eloquent Scopes in Laravel",
      description: "Learn how Eloquent Scopes in Laravel help you reuse query logic, keep your codebase clean, and write more readable database queries in your applications.",
      date: "2025-07-20",
      readTime: "7 min read",
      image: scopes,
      link: "https://www.linkedin.com/posts/tahashaban_%D9%81%D8%A7%D9%8A%D8%AF%D8%A9-%D8%A7%D9%84%D9%80-eloquent-scopes-%D9%81%D9%8A-laravel-%D9%85%D8%B9-activity-7307158754481868801-yIUB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFKfJcBciUB6xWs50vG8YAb_eGEutRQOmU",
      tags: ["Laravel", "Eloquent", "Database"]
    },
    {
      title: "State Management Best Practice",
      description: "Learn best practices for managing application state efficiently, organizing global and local state, and building scalable frontend applications with clean architecture.",
      date: "2025-08-01",
      readTime: "6 min read",
      image: stateManagement,
      link: "",
      tags: ["State Management", "Frontend", "Architecture"]
    }
  ];

  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 animated-bg opacity-5" />

      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <BookOpen className="w-12 h-12 text-primary animate-bounce-in" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Latest Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts about web development, technology trends, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={`glass border-white/10 hover-lift group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-fill transition-transform duration-300 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>

                <CardDescription className="text-gray-300">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 group-hover:animate-wiggle"
                  onClick={() => window.open(post.link, '_blank')}
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:text-white hover-lift glow-border px-8 py-3"
            onClick={() => window.open('https://www.linkedin.com/in/tahashaban/recent-activity/all/', '_blank')}
          >
            View All Posts
            <ExternalLink  className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
