import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';

const LetterSection = () => {
  return (
    <section className="py-20 md:py-32 gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote size={120} className="text-wine" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 rotate-180">
        <Quote size={120} className="text-wine" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heart size={40} className="mx-auto text-wine fill-wine/30 mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine mb-4">
            What You Mean to Me
          </h2>
          <div className="h-1 w-24 bg-wine/30 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="font-script text-xl md:text-2xl text-wine/90 leading-relaxed space-y-6">
            <p>My love,</p>
            
            <p>
              Before you, I didn't know what it meant to have someone believe in me 
              so completely. You saw the best in me when I couldn't see it myself. 
              You loved me through my flaws and helped me become someone I'm proud to be.
            </p>

            <p>
              You're my first thought in the morning and my last wish at night. 
              Your laughter is my favorite sound. Your happiness is my purpose. 
              With you, I've learned that love isn't just a feeling—it's a choice 
              we make every single day. And I choose you. Always.
            </p>

            <p>
              You've taught me patience, kindness, and what it truly means to care 
              for someone. Every challenge we've faced together has only made our 
              bond stronger. You are my partner, my best friend, my everything.
            </p>

            <p>
              Three years ago, I found you. But every day since, I keep falling 
              deeper. I didn't know love could grow like this—infinitely, endlessly, 
              more beautiful with each passing moment.
            </p>

            <p className="text-right pt-4">
              Forever yours ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
