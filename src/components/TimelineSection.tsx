import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Camera } from 'lucide-react';

interface TimelineYear {
  year: number;
  title: string;
  description: string;
  memories: string[];
}

const timelineData: TimelineYear[] = [
  {
    year: 1,
    title: 'The Beginning',
    description:
      'The year when everything changed. When I first saw your smile, I knew my world would never be the same. Every moment with you felt like discovering a new color I never knew existed.',
    memories: [
      'Our first conversation that lasted until sunrise',
      'The nervous excitement of our first date',
      "Learning each other's little quirks and falling deeper",
    ],
  },
  {
    year: 2,
    title: 'Growing Together',
    description:
      'We learned what it means to be a team. Through challenges and celebrations, we held each other close. You became not just my love, but my best friend, my confidant, my home.',
    memories: [
      'Building traditions that became ours',
      'Supporting each other through difficult times',
      'Celebrating victories, big and small',
    ],
  },
  {
    year: 3,
    title: 'Deeper Than Ever',
    description:
      "Three years of loving you, and every day I discover new reasons why you're the one. The way you laugh, the way you care, the way you make ordinary moments extraordinary.",
    memories: [
      'Realizing this love is forever',
      'Dreaming together about our future',
      "Knowing I can't imagine life without you",
    ],
  },
];

const TimelineCard = ({ data, index }: { data: TimelineYear; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Year badge */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full gradient-romantic flex flex-col items-center justify-center glow-soft">
          <span className="font-script text-3xl md:text-4xl text-wine">Year</span>
          <span className="font-display text-4xl md:text-5xl font-bold text-wine">{data.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 romantic-card text-center md:text-left">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-wine mb-4">
          {data.title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          {data.description}
        </p>

        {/* Photo placeholder */}
        <div className="bg-muted rounded-xl p-8 mb-6 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center min-h-[200px]">
          <Camera size={32} className="text-primary/50 mb-2" />
          <p className="text-sm text-muted-foreground font-body">
            Add your favorite photo from Year {data.year}
          </p>
        </div>

        {/* Memories */}
        <div className="space-y-2">
          {data.memories.map((memory, i) => (
            <div key={i} className="flex items-start gap-3">
              <Heart size={14} className="text-primary fill-primary/30 mt-1.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-body">{memory}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine mb-4">
            Our Journey Together
          </h2>
          <p className="font-script text-xl md:text-2xl text-rose-gold">
            Three years of beautiful memories
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((year, index) => (
              <TimelineCard key={year.year} data={year} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
