import { motion } from 'motion/react';
import { Briefcase, Building2, Landmark, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Co-founder",
    company: "BlockchainHub Africa",
    icon: <Building2 className="text-web3-accent" />,
    description: "Leading the strategic direction and ecosystem growth for one of Africa's leading blockchain training hubs."
  },
  {
    title: "Co-Lead & Web3 Lead",
    company: "Enugu Tech Festival",
    icon: <Briefcase className="text-web3-accent" />,
    description: "Coordinating stakeholders to shape the future of emerging technologies in the regional ecosystem."
  },
  {
    title: "Background in Finance",
    company: "Banking & Financial Markets",
    icon: <Landmark className="text-web3-accent" />,
    description: "Deep expertise in traditional financial structures, informing a practical approach to DeFi and crypto-economic models."
  }
];

const focusAreas = [
  "Blockchain Business Development",
  "Ecosystem Strategy",
  "Developer Education",
  "Partnerships & Growth"
];

export default function Experience({ id }: { id: string }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Experience</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Merging deep financial knowledge with Web3 innovation to create scalable structures for the digital economy.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white font-display font-semibold uppercase tracking-wider text-sm mb-6">Focus Areas</h4>
              <div className="grid grid-cols-1 gap-3">
                {focusAreas.map(area => (
                  <div key={area} className="flex items-center gap-3 p-4 glass-card rounded-2xl">
                    <div className="w-1.5 h-1.5 bg-web3-accent rounded-full shadow-[0_0_8px_rgba(191,167,141,0.5)]" />
                    <span className="text-gray-300 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border-b border-white/5 hover:border-web3-accent/20 transition-all duration-500 hover:bg-white/[0.01]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-web3-accent transition-colors">{exp.title}</h3>
                      <div className="text-gray-500 font-mono text-sm tracking-wide mt-1 uppercase">{exp.company}</div>
                      <p className="text-gray-500 mt-4 leading-relaxed max-w-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
