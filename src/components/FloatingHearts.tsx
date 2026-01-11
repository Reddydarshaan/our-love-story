import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const hearts = [
  { id: 1, x: '10%', delay: 0, size: 16, duration: 8 },
  { id: 2, x: '25%', delay: 1, size: 12, duration: 10 },
  { id: 3, x: '40%', delay: 2, size: 20, duration: 7 },
  { id: 4, x: '55%', delay: 0.5, size: 14, duration: 9 },
  { id: 5, x: '70%', delay: 1.5, size: 18, duration: 8 },
  { id: 6, x: '85%', delay: 2.5, size: 10, duration: 11 },
  { id: 7, x: '15%', delay: 3, size: 16, duration: 9 },
  { id: 8, x: '80%', delay: 0.8, size: 14, duration: 10 },
];

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{ left: heart.x }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.6, 0.8, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            animate={{
              x: [0, 20, -20, 10, 0],
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: heart.duration / 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Heart
              size={heart.size}
              className="text-primary fill-primary/30"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
