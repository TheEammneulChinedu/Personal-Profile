import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const metrics = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Developers Trained', value: '100+' },
  { label: 'Programs Designed', value: '4+' },
  { label: 'Ecosystem Partnerships', value: '5+' },
];

export default function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="relative min-h-screen flex flex-col justify-center pt-32 pb-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-web3-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-web3-accent font-mono text-sm tracking-widest uppercase mb-4 mb-6">
              Blockchain Business Developer
            </h2>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
              <span className="text-white block">Chinedu</span>
              <span className="text-gradient block">Emmanuel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10">
              Co-founder, BlockchainHub Africa | Web3 Ecosystem Builder. 
              <span className="text-white"> Building pathways for developers and founders across Africa’s Web3 ecosystem through education and innovation.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#collaborate"
                className="group bg-web3-accent text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all duration-300"
              >
                Work With Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects"
                className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact Metrics Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 w-full mt-24"
      >
        <div className="glass-card py-10 px-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div key={metric.label} className="text-center md:text-left">
              <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{metric.value}</div>
              <div className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
