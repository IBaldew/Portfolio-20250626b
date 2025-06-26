import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';

// Sample project data
const projectsData = {
  work: [
    {
      id: 1,
      title: "Modern Retail Interior",
      category: "Retail",
      description: "A minimalist retail space featuring clean lines, natural wood elements, and carefully curated lighting to create an inviting shopping environment.",
      images: [
        "img/retail/FB2A.png",
        "https://images.unsplash.com/photo-1586107082398-7ac72326a6c9",
        "https://images.unsplash.com/photo-1742602446126-e10f78b518b6"
      ],
      year: "2023"
    },
    {
      id: 2,
      title: "Futuristic Retail Space",
      category: "Shop-in-Shop",
      description: "An innovative shop-in-shop concept with cutting-edge lighting design and metallic finishes that create a futuristic shopping experience.",
      images: [
        "https://images.unsplash.com/photo-1586107082398-7ac72326a6c9",
        "https://images.unsplash.com/photo-1707586834647-128c7f27d209",
        "https://images.pexels.com/photos/7552324/pexels-photo-7552324.jpeg"
      ],
      year: "2023"
    },
    {
      id: 3,
      title: "Brand Identity Animation",
      category: "Animation",
      description: "Dynamic brand identity animation for a luxury retail brand, featuring smooth transitions and modern typography.",
      images: [
        "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9",
        "https://images.unsplash.com/photo-1710799885122-428e63eff691"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Retail Design Tutorial",
      category: "Tutorials",
      description: "Step-by-step tutorial on creating effective retail spaces that drive customer engagement and sales.",
      images: [
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ],
  afterHours: [
    {
      id: 5,
      title: "Brand Portfolio Collection",
      category: "Graphic Design",
      description: "A curated collection of brand identity designs featuring modern typography and sophisticated color palettes.",
      images: [
        "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9",
        "https://images.unsplash.com/photo-1710799885122-428e63eff691"
      ],
      year: "2023"
    },
    {
      id: 6,
      title: "Jazz Performance",
      category: "Saxophonist",
      description: "Live jazz performance at the Blue Note, featuring original compositions and classic standards.",
      images: [
        "https://images.unsplash.com/photo-1553487164-47dd19cf0a72"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ]
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
            PORTFOLIO
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="text-gray-300 hover:text-white transition-colors">Work</Link>
            <Link to="/after-hours" className="text-gray-300 hover:text-white transition-colors">After Hours</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/work" className="text-gray-300 hover:text-white transition-colors">Work</Link>
              <Link to="/after-hours" className="text-gray-300 hover:text-white transition-colors">After Hours</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Filter Component
const FilterTabs = ({ filters, activeFilter, onFilterChange, animated = true }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-12 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
          } ${animated ? 'transform hover:scale-105' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, section }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-500 transform hover:scale-105"
      onClick={() => navigate(`/${section}/project/${project.id}`)}
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>
        <p className="text-gray-300 text-sm mb-3">{project.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-purple-400 text-sm">
            View Project
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Pure CSS Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-gradient"></div>
        
        {/* Large Moving Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-medium"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-twinkle-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-green-400 rounded-full animate-twinkle-fast"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle-medium"></div>
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
              PORTFOLIO
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 drop-shadow-lg animate-slide-up">
              ISHVAR BALDEW
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 drop-shadow-md animate-fade-in">
              I'm a designer and so much more.
              CLICK ON SOMETHING!
            </p>
            <div className="flex gap-6 justify-center animate-slide-up">
              <Link 
                to="/work" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                View Work
              </Link>
              <Link 
                to="/after-hours" 
                className="border border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-black/20"
              >
                After Hours
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

// Work Page
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const workFilters = ['All', 'Retail', 'Shop-in-Shop', 'Animation', 'Tutorials'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData.work 
    : projectsData.work.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Work</h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Professional projects spanning retail design, animation, and educational content.
        </p>
        
        <FilterTabs 
          filters={workFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} section="work" />
          ))}
        </div>
      </div>
    </div>
  );
};

// After Hours Page
const AfterHours = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const afterHoursFilters = ['All', 'Graphic Design', 'Saxophonist'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData.afterHours 
    : projectsData.afterHours.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">After Hours</h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Personal projects and creative pursuits beyond the professional realm.
        </p>
        
        <FilterTabs 
          filters={afterHoursFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} section="after-hours" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Detail Page
const ProjectDetail = () => {
  const { section, id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const allProjects = [...projectsData.work, ...projectsData.afterHours];
  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="min-h-screen bg-black text-white pt-24">Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous Page
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="relative mb-8">
              <img 
                src={project.images[currentImageIndex]} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="flex space-x-2 justify-center">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-purple-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <span className="text-gray-400">{project.year}</span>
            </div>
            
            <div className="mb-6">
              <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm">
                {project.category}
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {project.video && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Video</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={project.video}
                    className="w-full h-64 rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page
const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">About</h1>
        
        <div className="space-y-12">
          <div className="text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-8"></div>
            <h2 className="text-3xl font-bold mb-4">Creative Professional</h2>
            <p className="text-xl text-gray-300">
              Designer • Saxophonist • Creative Director
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Professional</h3>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience in retail design and visual communication, 
                I specialize in creating immersive brand experiences that connect with audiences 
                on an emotional level. My work spans from intimate boutique concepts to large-scale 
                retail environments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Personal</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not designing, you'll find me exploring the creative depths of jazz music 
                as a saxophonist. This musical journey deeply informs my design work, bringing 
                rhythm, improvisation, and emotional depth to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Let's Create Something Amazing</h2>
            <p className="text-gray-300 text-lg mb-8">
              Ready to bring your vision to life? I'd love to discuss your project 
              and explore how we can create something extraordinary together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">hello@portfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/after-hours" element={<AfterHours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/project/:id" element={<ProjectDetail />} />
          <Route path="/after-hours/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;