import { motion } from 'framer-motion';
import { Heart, MapPin, Globe } from 'lucide-react';

const CanadaSection = () => {
  return (
    <section className="py-20 md:py-32 bg-lavender/30 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full mb-6">
            <Globe size={18} className="text-primary" />
            <span className="font-body text-sm text-muted-foreground">A Gentle Truth</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine mb-4">
            About Your Dreams
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="romantic-card"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-wine" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-wine mb-2">
                I understand your dreams
              </h3>
              <p className="font-body text-muted-foreground">
                Canada represents something beautiful for you—growth, opportunity, 
                a new chapter. I would never want to dim that light in your eyes.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-primary/30 pl-6 py-4 bg-muted/50 rounded-r-xl mb-6">
            <p className="font-body text-foreground/80 leading-relaxed italic">
              "Your ambitions are part of who you are, and I fell in love with 
              all of you—including the dreamer who reaches for the stars."
            </p>
          </div>

          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              But I need to be honest with you, from my heart. The thought of 
              being so far apart... it scares me. Not because I don't trust us, 
              but because I know how precious our everyday moments are.
            </p>

            <p>
              The morning texts that turn into calls. The spontaneous dates. 
              Being able to hold you when you're sad or celebrate with you 
              when you're happy. Time zones and thousands of miles between us... 
              I'm afraid of what that might do to us.
            </p>

            <p>
              I've seen long-distance change people. Not because love wasn't there, 
              but because life gets in the way. And I want to be there—really there—for 
              every moment of your life, not just through a screen.
            </p>
          </div>

          <div className="mt-8 p-6 gradient-romantic rounded-2xl text-center">
            <Heart size={24} className="mx-auto text-wine mb-3" />
            <p className="font-script text-xl text-wine">
              "I support your dreams. But I'm scared of losing us."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CanadaSection;
