import { motion } from 'framer-motion';
import { Briefcase, Plane, Home, TrendingUp, Heart } from 'lucide-react';

interface DreamCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const dreams: DreamCard[] = [
  {
    icon: <Briefcase size={32} />,
    title: 'Building Our Careers',
    description:
      "Supporting each other's ambitions, celebrating each moment, being each other's biggest cheerleader living together in a flat",
  },
  {
    icon: <Plane size={32} />,
    title: 'Exploring the World',
    description:
      "All those places we've talked about—Maldives beaches, Party nights, places where we can just be together. Adventures waiting for us.",
  },
  {
    icon: <Home size={32} />,
    title: 'A Home of Our Own',
    description:
      "A peacefull place that's ours. Evening tea on the balcony, lazy Sunday mornings, building a life brick by brick, together with 11 kids and a dog.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Growing Together',
    description:
      'Becoming better versions of ourselves, challenging each other, learning together, and never stopping our journey of growth.',
  },
];

const DreamCard = ({ dream, index }: { dream: DreamCard; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="romantic-card-hover group"
    >
      <div className="w-16 h-16 rounded-2xl gradient-romantic flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-wine">{dream.icon}</div>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold text-wine mb-3">
        {dream.title}
      </h3>
      <p className="font-body text-muted-foreground leading-relaxed">
        {dream.description}
      </p>
    </motion.div>
  );
};

const DreamsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine mb-4">
            Dreams We Spoke About
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Remember all those late-night conversations? The future we painted together...
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart size={16} className="text-primary fill-primary/50" />
            <span className="font-script text-xl text-rose-gold">Together</span>
            <Heart size={16} className="text-primary fill-primary/50" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {dreams.map((dream, index) => (
            <DreamCard key={dream.title} dream={dream} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamsSection;
