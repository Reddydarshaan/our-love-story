import { motion } from 'framer-motion';
import { Heart, RefreshCw, MessageCircleHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContact = () => {
    // Replace with actual contact method (WhatsApp, email, etc.)
    window.location.href = 'mailto:your-email@example.com?subject=Let\'s Talk ❤️';
  };

  return (
    <section className="py-20 md:py-32 bg-wine text-primary-foreground relative overflow-hidden">
      {/* Decorative hearts */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            size={Math.random() * 30 + 10}
            className="absolute fill-current"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={60} className="mx-auto fill-blush/50 text-blush mb-8" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">
            This Is Not Pressure.
            <br />
            <span className="text-blush">This Is Love.</span>
          </h2>

          <p className="font-body text-lg text-blush/80 max-w-xl mx-auto mb-12">
            Every word written here comes from love and respect. 
            Your choice is your own.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToTop}
              variant="romantic"
              size="lg"
              className="group"
            >
              <RefreshCw size={20} className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Read This Again
            </Button>

            <Button
              onClick={openContact}
              variant="romanticOutline"
              size="lg"
              className="group"
            >
              <MessageCircleHeart size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Talk To Me
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-blush/20"
          >
            <p className="font-script text-xl text-blush/70">
              Made with all my heart, for you ❤️
            </p>
            <p className="font-body text-sm text-blush/50 mt-2">
              January 17 — Our Anniversary
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
