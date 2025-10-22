import { useState, useEffect } from 'react';
import { Camera, Code, Lock, Sparkles, Instagram, Mail, Youtube, ChevronDown } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              SCRIECKY
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center space-x-2 text-cyan-400 text-sm font-mono">
              <Code className="w-4 h-4" />
              <span className="animate-pulse">SYSTEM_ONLINE</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-slate-300">Hello, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Reochi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences at the intersection of
            <span className="text-cyan-400 font-semibold"> art</span>,
            <span className="text-fuchsia-400 font-semibold"> code</span>, and
            <span className="text-cyan-400 font-semibold"> cybersecurity</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a digital artist and cybersecurity enthusiast who believes in the power of
                combining creative vision with technical precision. My work explores the boundaries
                between digital art, secure coding practices, and innovative design.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With a background in both visual arts and computer science, I create experiences
                that are not only visually stunning but also technically robust and secure.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every project is an opportunity to push boundaries, experiment with new technologies,
                and create something that resonates with both the heart and the mind.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="w-full h-full rounded-xl bg-slate-900/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Camera className="w-16 h-16 mx-auto text-cyan-400" />
                    <p className="text-slate-400 font-mono text-sm">CREATIVE_MODE: ACTIVE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Digital Art',
                skills: ['Illustration', 'Photo Manipulation', 'UI/UX Design', 'Motion Graphics']
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: 'Development',
                skills: ['React & TypeScript', 'Modern CSS', 'Web Animation', 'API Integration']
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: 'Cybersecurity',
                skills: ['Secure Coding', 'Encryption', 'Web Security', 'Privacy Design']
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-slate-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cyberpunk UI System',
                category: 'Design & Development',
                description: 'A futuristic interface system with advanced animations and secure authentication.'
              },
              {
                title: 'Digital Art Collection',
                category: 'Illustration',
                description: 'Anime-inspired digital artwork exploring themes of technology and humanity.'
              },
              {
                title: 'Secure Portfolio Platform',
                category: 'Web Development',
                description: 'End-to-end encrypted portfolio platform with modern design principles.'
              },
              {
                title: 'Cipher Visualizer',
                category: 'Interactive Art',
                description: 'An interactive experience that visualizes encryption algorithms as art.'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-cyan-400 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-cyan-400 font-mono mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in collaboration or just want to chat about art, code, and security?
            I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, label: 'Email', url: 'mailto:gopro.logs@proton.me', color: 'cyan' },
              { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', url: 'https://www.instagram.com/scriecky63itz?igsh=cHh4bW1nM2x5OGcx', color: 'fuchsia' },
              { icon: <Youtube className="w-6 h-6" />, label: 'YouTube', url: 'https://www.youtube.com/@Scriecky', color: 'cyan' },
              { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>, label: 'TikTok', url: 'https://www.tiktok.com/@scriecky63itz?_t=ZS-90kw5mvJuC7&_r=1', color: 'fuchsia' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 px-6 py-3 rounded-full border-2 border-${social.color}-400 hover:bg-${social.color}-400/10 transition-all duration-300`}
              >
                <span className={`text-${social.color}-400`}>{social.icon}</span>
                <span className="font-semibold">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-slate-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-slate-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-3xl bg-slate-800/50 border border-slate-700 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-slate-500 resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="font-mono text-sm">
            © 2024 SCRIECKY — Crafted with passion and code
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
