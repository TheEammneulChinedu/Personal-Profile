import { motion } from 'motion/react';
import { ExternalLink, Globe, Smartphone, Monitor } from 'lucide-react';

const projects = [
  {
    title: "BlockchainHub Africa",
    role: "Co-founder",
    description: "Designed and led blockchain education programs, building a growing developer ecosystem and supporting early-stage founders across Web3.",
    link: "#",
    icon: <Globe className="text-web3-accent" size={24} />,
    tags: ["Education", "Ecosystem", "Founders"]
  },
  {
    title: "Enugu Tech Festival (ETF)",
    role: "Co-Lead & Web3 Lead",
    description: "Shaped blockchain and emerging tech agenda, coordinated ecosystem stakeholders, and led Web3-focused initiatives and programming.",
    link: "#",
    icon: <Monitor className="text-web3-accent" size={24} />,
    tags: ["Policy", "Programming", "Festivals"]
  },
  {
    title: "University Blockchain Programs",
    role: "Program Lead",
    description: "Partnered with universities to train STEM students, designing developer-focused blockchain curriculum and building talent pipelines.",
    link: "#",
    icon: <Smartphone className="text-web3-accent" size={24} />,
    tags: ["University", "STEM", "Curriculum"]
  }
];

export default function Work({ id }: { id: string }) {
  return (
    <section id={id} className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-gray-500 max-w-xl">
              Driving impact through strategic initiatives, education, and ecosystem building across the African continent.
            </p>
          </div>
          <div className="text-web3-accent font-mono text-sm tracking-widest uppercase pb-2">
            Projects & Initiatives
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-web3-accent group-hover:text-black transition-all duration-500">
                {project.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{project.title}</h3>
              <div className="text-web3-accent font-mono text-xs uppercase tracking-wider mb-4 font-bold">{project.role}</div>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="flex items-center gap-2 text-white font-semibold text-sm hover:text-web3-accent transition-colors"
              >
                Learn More <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
