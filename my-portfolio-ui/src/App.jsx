import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence එකතු කළා
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close button icon

// --- DNA Animation Component ---
const DnaHelix = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/3 z-0 hidden md:flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
      <div className="relative h-[120vh] w-20 flex flex-col justify-between items-center rotate-12">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="relative w-40 h-8 flex items-center justify-between">
            <motion.div
              className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              animate={{ x: [-50, 50, -50], scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            />
            <motion.div 
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-red-900 to-green-900 mx-auto"
              style={{ width: '100px' }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
            <motion.div
              className="w-4 h-4 rounded-full bg-green-600 shadow-[0_0_15px_rgba(22,163,74,0.8)]"
              animate={{ x: [50, -50, 50], scale: [1.2, 0.8, 1.2], opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Click කරන Project එක මතක තියාගන්න

  useEffect(() => {
    fetch("http://localhost:5024/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="bg-black text-gray-300 min-h-screen relative selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      <DnaHelix />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider cursor-pointer hover:text-red-500 transition" 
              onClick={() => scrollToSection('home')}>
            KAVISHKA<span className="text-red-600">.DEV</span>
          </h1>
          <ul className="hidden md:flex gap-8 font-medium text-sm tracking-widest uppercase">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-green-500 transition duration-300">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-start px-6 pt-20 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-lg font-bold text-green-500 mb-2 tracking-widest uppercase">Hello, It's Me</h2>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-none text-white">
            I'm <span className="text-red-600">Dev</span><br />Kavishka
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mb-8 mx-auto md:mx-0 font-light leading-relaxed">
            Crafting biological precision in digital code. Full Stack Developer specializing in .NET and React.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start mb-10">
            <a href="#" className="p-3 rounded-full border border-gray-700 hover:border-blue-600 hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="p-3 rounded-full border border-gray-700 hover:border-pink-600 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="p-3 rounded-full border border-gray-700 hover:border-green-500 hover:text-white transition"><FaWhatsapp /></a>
            <a href="#" className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="p-3 rounded-full border border-gray-700 hover:border-white hover:text-white transition"><FaGithub /></a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
             <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-full font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] transition">View My Work</button>
             <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border border-green-600 text-green-500 hover:bg-green-900/20 rounded-full font-bold transition">Contact Me</button>
          </div>
        </motion.div>

        <motion.div className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10">
             <div className="absolute w-80 h-80 bg-red-600/20 rounded-full blur-[80px] -z-10"></div>
          <motion.img src="/profile.png" alt="Kavishka" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-2 border-red-900/50 shadow-2xl" onError={(e) => e.target.src = "https://via.placeholder.com/400x400"} />
        </motion.div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <h3 className="text-4xl font-bold mb-16 text-center text-white">Featured <span className="text-green-600">Projects</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`} // Animation link for modal
              onClick={() => setSelectedProject(project)} // Click කළාම Modal එකට යවනවා
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all border border-zinc-800 group cursor-pointer"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" onError={(e) => e.target.src = "https://via.placeholder.com/400x300"} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="text-white font-bold border border-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-light">{project.description}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full border ${i % 2 === 0 ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-green-500/10 text-green-400 border-green-500/20'}`}>#{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECT DETAILS MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            {/* Background Blur */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              layoutId={`project-${selectedProject.id}`}
              className="bg-zinc-900 w-full max-w-2xl rounded-2xl border border-zinc-700 shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-red-600 transition z-20"
              >
                <IoClose size={24} />
              </button>

              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
                <img src={selectedProject.imageUrl} className="w-full h-full object-cover" onError={(e) => e.target.src = "https://via.placeholder.com/600x400"} />
              </div>

              {/* Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex gap-2 mb-6">
                   {selectedProject.tags && selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-gray-400 bg-zinc-800 px-2 py-1 rounded">#{tag}</span>
                   ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedProject.description}
                  {/* තව විස්තර backend එකෙන් එනවා නම් මෙතන දාන්න පුළුවන් */}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.gitUrl && (
                    <a href={selectedProject.gitUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-white hover:text-black border border-zinc-700 rounded-lg font-bold transition">
                      <FaCode /> GitHub Repo
                    </a>
                  )}
                  {selectedProject.demoUrl && selectedProject.demoUrl !== "" && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition shadow-lg shadow-red-600/20">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Footer --- */}
      <footer className="text-center py-6 text-gray-700 text-sm relative z-10 border-t border-zinc-900 bg-black">
        © 2024 Kavishka. All rights reserved.
      </footer>
    </div>
  );
}

export default App;