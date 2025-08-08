import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';

// Sample project data
const projectsData = {
  work: [
    {
      id: 1,
      title: "Fitbit Counter Display for CAPI",
      category: "Retail Design",
      description: "Designing in an existing space with a lot of store rules. Still we managed to create a illuminated counter display for every smartwatch.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/FB2A.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Fitbit/Fitbit%20-%20CAPI%20VERSA%20AMT%20-%201000mm%20breed%20-%2001_PhysCamera001_copy.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Fitbit/Fitbit%20-%20CAPI%20VERSA%20AMT_copy.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Fitbit/Fitbit%20Schiphol%20Lounge%202%20(1).jpg"
      ],
      year: "2019"
    },
    {
      id: 2,
      title: "GoPro Floor Display for Harrods",
      category: "Retail Design",
      description: "A minimalist GoPro style floor display. With all the theft sensitive items in a showcase, this display is versatile for multiple products.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Fusion/GoPro%20-%20Fusion%20add-on%20Harrods%20-%2002.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Fusion/GoPro%20-%20Fusion%20add-on%20Harrods%20-%2003_PhysCamera002.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Fusion/GoPro%20-%20Fusion%20add-on%20Harrods%20-%2004b_PhysCamera004.png"
      ],
      year: "2019"
    },
    {
      id: 3,
      title: "GoPro Counter Display",
      category: "Retail Design",
      description: "A minimalist GoPro style counter display. Simple, clean and yet so modular. Easy to produce and adjust. Costumizable with different magnet visuals and camera's.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/20250711_084512%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/20250711_084548%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/20250711_084535%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/HERO%20Left%2001%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/HERO%20Right%2001%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/24239-GoPro%20GmbH-GoPro%20-%20Glorifier%202024%20-%2004%20kopie2%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/GoPro%20Glorifier/24239-GoPro%20GmbH-GoPro%20-%20Glorifier%202024%20-%2004%20kopie%202.png"
      ],
      year: "2025"
    },
    {
      id: 4,
      title: "Trust Lighting Floor Display",
      category: "Retail Design",
      description: "Drawn to gaming rooms, these products create the right vibes for the right feeling. Knocked down to present that feeling into a floordisplay, this unit can be placed anywhere.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Trust%20Lighting/TR1A.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Trust%20Lighting/Naamloos-1%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Trust%20Lighting/24029%20-%20Lighting%20displays%20Trust%20-%2002%20kopie%203.png"
      ],
      year: "2024"
    },
    {
      id: 5,
      title: "Mascotte",
      category: "Retail Design",
      description: "A counter display for Mascotte's best selling products. Can be placed almost everywhere. Easy to produce and perfect for the retailers.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Mascotte/Impact%20Instore_Mascotte%20counter%2001.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Mascotte/Impact%20Instore_Mascotte%20counter%2002.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/retail/Mascotte/24338-Mignot%20%26%20De%20Block%20BV-Mascotte%20Display-01%20kopie%202.png"
      ],
      year: "2025"
    },
    {
      id: 6,
      title: "Huawei MM Arena",
      category: "Shop-in-Shop",
      description: "This is a unique shop designed especially for Mediamarkt Arena. Implementing the design language Huawei brought into a new enviroment, makes this SIS outstanding. With the big illuminated logo on top, the SIS could easily been seen from a far.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20MM%20Arena/03.-Huawei-Brand-Store.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20MM%20Arena/04.-Huawei-Brand-Store.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20MM%20Arena/Huawei%20Media%20Markt%20Arena%20%20(2).jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20MM%20Arena/Huawei%20Media%20Markt%20Arena%20%20(3).jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20MM%20Arena/Huawei%20Technologies%20NL%20-%20Media%20Markt%20Amsterdam%20Arena%20-%2002.png"
      ],
      year: "2019"
    },
    {
      id: 7,
      title: "Xiaomi E-Sports",
      category: "Shop-in-Shop",
      description: "This shop first needed the costumer experience/journey designed before thinking about shape. A special corner for gamers to attend tournaments with E-Sports. With this area divided into 3 sections, each section gives the costumers a great versatile experience in this SIS.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/saturn_xperion_xiaomi.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/xiaomi-xperion.jpeg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/IMG_20200703_134325.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/IMG_20200703_134409.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/IMG_20200703_134459.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/IMG_20200703_134536.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/IMG_20200703_134612.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture9.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture5%20-%20kopie.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture11.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture13.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture14.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture16.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Xiaomi/Picture18.jpg"
      ],
      year: "2019"
    },
    {
      id: 8,
      title: "Huawei Zoetermeer",
      category: "Shop-in-Shop",
      description: "Configurating and installing the predesigned furniture, gives every Shop-in-Shop a personal touch.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20Zoetermeer/IMG_20190702_181519%20kopie.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20Zoetermeer/IMG_20190702_181441%20kopie.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20Zoetermeer/Huawei%20NL%20-%20Media%20Markt%20Zoetermeer%20-%20Final%20Design%20Phase%202.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Huawei%20Zoetermeer/Huawei%20NL%20-%20Media%20Markt%20Zoetermeer%20-%20Final%20Design%20Phase%203.png"
      ],
      year: "2018"
    },
    {
      id: 9,
      title: "Hoya Eye Exam Stand",
      category: "Animation",
      description: "Designed by our design team, I developed an animation which explains the stand's function and options.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Hoya/C1%20Flat%20Packed%20-%2001.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Hoya/C1%20Flat%20Packed%20-%2002.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Hoya/C1%20Store%2001%20-%2001.png"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/5CiKyGFnegA?si=xFSbS9IOLq0SNbZr"
    },
        {
      id: 10,
      title: "Dopper Counter Display",
      category: "Animation",
      description: "Designed by me. I developed a flatpacked display which explains how it will be assembled instore.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Dopper/Dopper%20Post%2001%20-%2001_052.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Dopper/Dopper%20Post%2001%20-%2001_125.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Dopper/Dopper%20Post%2001%20-%2001_420.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Dopper/Dopper%20Post%2001%20-%2001_560.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Dopper/Dopper%20Post%2001%20-%2001_700.png"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/PAMOi8orvpk?si=-22GCApTQVyMItRF"
    },
    {  
      id: 11,
      title: "Crocs Store",
      category: "Animation",
      description: "A small flythrough video of a Crocs Store concept.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/sis/Crocs%20Store/Store%20-%2001%20-%20Fase%2005%20-%2002%204.png"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/l5qm_RIl6AQ?si=ZknTuOZi7yBQjWm6"
    },
        {
      id: 20,
      title: "Art of Beauty",
      category: "Graphic Design",
      description: "With different coloured strokes, itt reflects perfecty what the company is all about.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Art%20of%20Beauty/AB1B.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Art%20of%20Beauty/Art%20of%20Beauty%20Logo%20-%2001%20T-Shirt%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Art%20of%20Beauty/OQ3A7S1%20kopi%C3%ABren%20kopie.png"
      ],
      year: "2023"
    },
    {
      id: 21,
      title: "RB Productions",
      category: "Graphic Design",
      description: "A clear typographical logo which fits the target audience for this music production company.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/RB%20Productions/RB1B.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/RB%20Productions/Naamloos-1.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/026702099156cda4029f60f80d27995009cc2b78/img/graphic/logo/RB%20Productions/20250803_210950.jpg"
      ],
      year: "2023"
    },
    {
      id: 22,
      title: "Naseem",
      category: "Graphic Design",
      description: "A Indian music group asked for a simple logo. Naseem meaning 'a fresh breeze', the letter represent a gust of wind with a musical note.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Naseem/N1B.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Naseem/OQ3A7S1%20kopie%202.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Naseem/IMG-20221124-WA0000%20kopie.jpg"
      ],
      year: "2023"
    },
    {
      id: 23,
      title: "Safri",
      category: "Graphic Design",
      description: "As a saxoponist I designed a special logo. Aa classy yet clear logo to be recognized from a far. Video usage can been seen in the 'Saxophonist' section.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri/SA1B.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri/Naamloos-1.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri/safri%20kopjes%20kopie.png"
      ],
      year: "2024"
    },
    {
      id: 24,
      title: "Safri Clothing",
      category: "Graphic Design",
      description: "While developing a upcoming clothing company focused on streetwear, I design not only the clothes. But also the logo and graphic designs.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri%20Clothing/Safri%20Clothing%20-%2002.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri%20Clothing/20250607%20Black%20T-Shirt%2001%20kopie.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri%20Clothing/Beige%20T-Shirt%2001.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri%20Clothing/White%20T-Shirt%2001.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Safri%20Clothing/Black%20T-Shirt%2001%20kopie.jpg"
      ],
      year: "2025"
    },
    {
      id: 25,
      title: "Imkerij Vitello",
      category: "Graphic Design",
      description: "A local honey batcher needed a style, logo and labels for his local raw honey. 2 Bees transfering pheromones makes the logo clear about what the product is all about.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Vitello/IV1B.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Vitello/Middel%201%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Vitello/Middel%202%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/logo/Vitello/20240817_185353%20kopie.jpg"
      ],
      year: "2025"
    },
        {
      id: 26,
      title: "Kawasaki Retail Identity",
      category: "Graphic Design",
      description: "This is a very clear catalogue for all the Kawasaki retail furniture including description, prices and client information.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/Kawasaki%20Catalogue/2025-08-07%20Kawasaki%20Motors%20Europe%20N.V.%20-%20Retail%20Identity%20Catalogue%20PRINT-1.jpg",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/Kawasaki%20Catalogue/2025-08-07%20Kawasaki%20Motors%20Europe%20N.V.%20-%20Retail%20Identity%20Catalogue%20PRINT-2-01%20kopie.png",
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/graphic/Kawasaki%20Catalogue/Schermafbeelding%202025-08-07%20133032.png"
      ],
      year: "2025"
    },
  ],
  afterHours: [
    {
      id: 30,
      title: "Wedding gig",
      category: "Saxophonist",
      description: "With my own ensemble, we played a special indian song to guide the bride walking down the aisle.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/Tudje%20Kitna%20-%20Youtube%20-%2001%20(0-00-25-04)%20kopie.jpg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/RoMMz_e3uUE?si=UjUhs5aVdPOwiSFe"
    },
            {
      id: 31,
      title: "Movie Premiere",
      category: "Saxophonist",
      description: "My wife and I were part of a preshow at a movie premiere in Kinepolis The Hague Westfield Mall.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/Premiere%20Hanuman%20-%20Kinepolis%20Leidschendam%20-%2001_1%20kopie.jpg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/QZtiXkyAlDQ?si=e4ZqzzDwysNzh4vQ"
    },
        {
      id: 32,
      title: "Kaseko Medley with a family band",
      category: "Saxophonist",
      description: "For a birthday party we ensembled close musical family members to play a full gig. This is one of the songs I sang and played.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/La%20Familia%20Live%20_%20Kaseko%20Friyari%20Mix%20(Moi%20Misi)%20kopie.jpg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/3NSz-2aZbKk?si=97B7vQYdXZspNtpQ"
    },
    {
      id: 33,
      title: "Groot Bazuin (Part 1)",
      category: "Saxophonist",
      description: "My first recording playing with hardware, software and video editing programs. Here we're playing a classic Kaseko song from Surinam.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/Groot%20Bazuin%20-%20Youtube%20-%2001%20(0-00-07-00)%20kopie.jpg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/SFW9DRdMqsE?si=Ype8OwWCi-hSXuXr"
    },
    {
      id: 34,
      title: "Groot Bazuin (Part 2)",
      category: "Saxophonist",
      description: "A sequel to my previous upload playing to remaining part of a classic Kaseko song form Surinam.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/Groot%20Bazuin%20-%20Youtube%20-%2001%20(0-00-21-21)%20kopie.jpg"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/Ww_8VJD5trM?si=mR-xa6eaTcF5PnRb"
    },
        {
      id: 35,
      title: "Pehla Nasha",
      category: "Saxophonist",
      description: "Recorded as a promotional video, we recorded a classic Indian song with multiple musicians.",
      images: [
        "https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/Pehla%20Nasha%20-%20Youtube%20-%2002%20kopie%202.png"
      ],
      year: "2024",
      video: "https://www.youtube.com/embed/uCg-NymP4tA?si=4E4JdFYStakXexDH"
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
  const workFilters = ['All', 'Retail Design', 'Graphic Design', 'Shop-in-Shop', 'Animation'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData.work 
    : projectsData.work.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Work</h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Professional projects spanning retail design, graphic design and animation.
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
  const afterHoursFilters = ['All', 'Saxophonist'];
  
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
                className="w-full h-full object-cover rounded-xl"
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
            <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://raw.githubusercontent.com/IBaldew/Portfolio/refs/heads/main/img/frontpage-photo.jpg')"
  }}></div>
            <h2 className="text-3xl font-bold mb-4">Creative Professional</h2>
            <p className="text-xl text-gray-300">
              Designer • Father • Musician
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Professional</h3>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience in retail design and even longer in visual communication, 
                I specialize in creating immersive brand experiences that connect with audiences 
                on an emotional level. My work spans from intimate boutique concepts to large-scale 
                retail environments. After the office hours I have my own time where I create graphics for myself and others. 
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Personal</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not designing, you'll find me exploring the creative depths of music 
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

// Contact Page (zonder formulier, met social media)
const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-12">Contact</h1>

        <h2 className="text-3xl font-bold mb-6">Let's Create Something Amazing Together</h2>
        <p className="text-gray-300 text-lg mb-12">
          Ready to bring your vision to life? I'd love to connect and explore how we can build something extraordinary.
        </p>

        <div className="space-y-6 mb-12">
<div className="space-y-6 mb-12">
  {/* E-mail */}
  <div className="flex items-center justify-center space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div className="text-left leading-tight">
      <p className="font-semibold">Email</p>
      <p className="text-gray-400">ishvarbaldew@live.nl</p>
    </div>
  </div>

  {/* Telefoon */}
  <div className="flex items-center justify-center space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <div className="text-left leading-tight">
      <p className="font-semibold">Phone</p>
      <p className="text-gray-400">+31(6) 19062482</p>
    </div>
  </div>
</div>
        </div>

        {/* Social Media */}
        <div className="mt-8 space-y-4">
          <p className="text-xl font-semibold mb-4">Volg mij op social media:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/safrisax/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a href="https://www.instagram.com/safriclothing/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 3a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
              <span>Instagram Safri Clothing</span>
            </a>

            <a href="https://www.linkedin.com/in/ishvar-baldew-b248637b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM7.5 8h3.6v2.2h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.6V24h-4v-7.6c0-1.8-.05-4.15-2.5-4.15-2.5 0-2.9 1.95-2.9 4v7.75h-4V8z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="https://www.facebook.com/ishvar.baldew/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span>Facebook</span>
            </a>
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