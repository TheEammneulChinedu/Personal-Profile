import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About({ id }: { id: string }) {
  return (
    <section id={id} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-web3-accent/10 blur-[100px] rounded-full group-hover:bg-web3-accent/20 transition-all duration-500" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
              {/* Replace src with actual portrait path if known */}
              <img 
                src="https://res.cloudinary.com/dqqff6jli/image/upload/v1777728204/IMG_3817_2_rc77il.jpg
                "
                alt="Chinedu Emmanuel"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-web3-dark via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Experience Floating Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-web3-accent/20 rounded-full flex items-center justify-center text-web3-accent">
                  <Quote size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-white font-bold leading-none">5+ Years</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">IN BLOCKCHAIN</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">About Me</h2>
              <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                <p>
                  <span className="text-white font-medium">Chinedu Emmanuel</span> is a blockchain business developer and Co-founder of BlockchainHub Africa, where he has spent over five years building products and designing programs that support developer talent and early-stage founders across the Web3 ecosystem.
                </p>
                <p>
                  With a career spanning banking, financial markets, and blockchain technology, Emmanuel operates at the intersection of business development, finance, and emerging technologies. He serves as Co-Lead and Web3 Lead of the Enugu Tech Festival (ETF).
                </p>
                <p>
                  His work focuses on collaborating with technical teams, ecosystem partners, and emerging markets across Africa to identify practical pathways for blockchain adoption. He brings experience in ecosystem strategy, developer education, and capacity-building program design.
                </p>
                <p>
                  Emmanuel frequently works with regional and global stakeholders to bridge knowledge gaps and strengthen local innovation ecosystems, driven by an interest in sustainable innovation models and scalable ecosystem development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
