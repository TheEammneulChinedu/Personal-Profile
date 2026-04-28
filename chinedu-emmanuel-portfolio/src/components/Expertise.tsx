import { motion } from 'motion/react';
import { Target, Zap, Briefcase } from 'lucide-react';

const skills = [
  {
    category: "Ecosystem & Strategy",
    icon: <Target className="text-web3-accent" size={20} />,
    items: ["Web3 Ecosystem Development", "Partnership Building", "Program Design"]
  },
  {
    category: "Technology & Innovation",
    icon: <Zap className="text-web3-accent" size={20} />,
    items: ["Blockchain Adoption Strategy", "Developer Ecosystem Growth", "Product & Community Development"]
  },
  {
    category: "Professional",
    icon: <Briefcase className="text-web3-accent" size={20} />,
    items: ["Business Development", "Stakeholder Engagement", "Emerging Markets Strategy"]
  }
];

export default function Expertise({ id }: { id: string }) {
  return (
    <section id={id} className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] text-left border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-web3-accent/10 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-4">
                {skill.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-400 group cursor-default">
                    <span className="w-1 h-1 bg-web3-accent rounded-full group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
