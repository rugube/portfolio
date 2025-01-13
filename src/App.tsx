import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Globe, Rocket, ChevronDown, ExternalLink, X } from 'lucide-react';
import { Helmet } from 'react-helmet';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Ronald Rugube | Fullstack Developer</title>
        <meta name="description" content="Ronald Rugube is a Fullstack Developer specializing in WordPress and JavaScript ecosystems, with over 4 years of experience in web development." />
        <meta name="keywords" content="Ronald Rugube, Fullstack Developer, WordPress Developer, JavaScript Developer, React Developer, Web Development, Middlesbrough" />
        <link rel="canonical" href="https://rugube.tech" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ronald Rugube | Fullstack Developer" />
        <meta property="og:description" content="Fullstack Developer specializing in WordPress and JavaScript ecosystems" />
        <meta property="og:url" content="https://rugube.tech" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ronald Rugube",
            "url": "https://rugube.tech",
            "jobTitle": "Fullstack Developer",
            "sameAs": [
              "https://github.com/rugube",
              "https://x.com/_rugube"
            ]
          }`}
        </script>
      </Helmet>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-white">
        <main>
          <header className="min-h-[80vh] md:min-h-screen flex flex-col justify-start pt-16 px-2 sm:px-3 lg:px-4 relative overflow-visible pb-16">
            {/* Background effects contained within header */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f630,transparent)] animate-pulse [animation-delay:200ms]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,#8b5cf630,transparent)] animate-pulse [animation-delay:400ms]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_800px,#6366f130,transparent)] animate-pulse [animation-delay:600ms]" />

            {/* Animated shapes contained within header */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float mix-blend-overlay" 
                   style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }} />
              <div className="absolute top-1/3 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float [animation-delay:1000ms] mix-blend-overlay"
                   style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` }} />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="space-y-6 animate-fade-in p-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
                  <div className="relative space-y-6 bg-gray-900/90 backdrop-blur-sm p-4 sm:p-8 pb-10 rounded-lg border border-gray-800/50">
                    <h2 className="text-lg text-blue-400 font-mono animate-slide-up tracking-wider">Hi, I'm</h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold gradient-text mb-12 animate-slide-up [animation-delay:200ms] hover:scale-[1.02] transition-transform cursor-default leading-[1.1] pb-4">
                      Ronald Rugube
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-semibold animate-slide-up [animation-delay:400ms] tracking-normal">
                      Fullstack Developer
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl animate-slide-up [animation-delay:600ms] hover:text-gray-300 transition-colors leading-relaxed">
                      A detail-oriented Fullstack Developer specializing in WordPress and JavaScript ecosystems. With over 4 years of experience crafting dynamic web applications, custom WordPress solutions, and modern React-based interfaces.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up [animation-delay:800ms]">
                      <a href="mailto:rrugube69@gmail.com" 
                         className="group flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-blue-600/90 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-all hover:scale-105 hover:gap-3 shadow-lg shadow-blue-500/20">
                        <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-medium">Contact</span>
                      </a>
                      <div className="flex gap-3 justify-center sm:justify-start">
                        <a href="https://github.com/rugube" 
                           className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all hover:scale-110 hover:rotate-6 shadow-lg shadow-gray-900/20 group">
                          <Github size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://x.com/_rugube" 
                           className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all hover:scale-110 hover:-rotate-6 shadow-lg shadow-gray-900/20 group">
                          <X size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div 
                onClick={scrollToSkills}
                className="p-2.5 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg group hover:bg-gray-700/50 transition-colors cursor-pointer"
              >
                <ChevronDown size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </header>

          <section id="skills" aria-label="Technical Skills" className="py-8 sm:py-16 px-2 sm:px-3 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />
            <div className="max-w-6xl mx-auto relative">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="card-gradient p-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-lg mb-4 md:mb-0 max-w-[320px] mx-auto w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-600/20 rounded-lg shadow-inner">
                      <Code2 className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Development</h3>
                  </div>
                  <ul className="space-y-2.5 text-gray-400">
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      WordPress (Themes, Plugins, Gutenberg)
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      React, TypeScript, Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      PHP, MySQL, REST APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      Modern JavaScript (ES6+)
                    </li>
                  </ul>
                </div>
                
                <div className="card-gradient p-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-lg mb-4 md:mb-0 max-w-[320px] mx-auto w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-600/20 rounded-lg shadow-inner">
                      <Database className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Database & APIs</h3>
                  </div>
                  <ul className="space-y-2.5 text-gray-400">
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      MySQL, PostgreSQL, MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      RESTful APIs & Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      JSON, XML Data Handling
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      Version Control (Git, SVN)
                    </li>
                  </ul>
                </div>

                <div className="card-gradient p-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-lg mb-4 md:mb-0 max-w-[320px] mx-auto w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-600/20 rounded-lg shadow-inner">
                      <Globe className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">Web Design</h3>
                  </div>
                  <ul className="space-y-2.5 text-gray-400">
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      UI/UX Design Principles
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      Figma, Adobe XD
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      Responsive Design
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-blue-400" />
                      Design Systems & Components
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="services" aria-label="Services" className="py-2 sm:py-8 px-2 sm:px-3 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent opacity-50" />
            <div className="max-w-6xl mx-auto relative">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Code2 className="text-blue-400" size={24} />,
                    title: "WordPress Development",
                    description: "Custom themes, plugins, and full-featured websites built with modern WordPress practices."
                  },
                  {
                    icon: <Globe className="text-blue-400" size={24} />,
                    title: "Frontend Development",
                    description: "Modern web applications using React, TypeScript, and the latest JavaScript features."
                  },
                  {
                    icon: <Database className="text-blue-400" size={24} />,
                    title: "Backend Solutions",
                    description: "Robust backend systems using PHP, Node.js, and RESTful APIs."
                  }
                ].map((service, index) => (
                  <div key={index} className="card-gradient p-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-lg max-w-[320px] mx-auto w-full">
                    <div className="p-2.5 bg-blue-600/20 rounded-lg w-fit mb-4 shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="py-6 px-4 sm:px-2 text-center text-gray-400 border-t border-gray-800/50 backdrop-blur-sm">
          <p className="hover:text-gray-300 transition-colors text-sm sm:text-base">Based in Middlesbrough, England</p>
          <a href="mailto:rrugube69@gmail.com" 
             className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block text-sm sm:text-base">
            rrugube69@gmail.com
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;