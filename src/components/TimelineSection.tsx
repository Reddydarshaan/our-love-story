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
<<<<<<< HEAD
      'The year when everything changed. When I proposed u in train, I knew my world would never be the same. Every moment with you felt like discovering a new color I never knew existed.',
    memories: [
      'The nervous excitement of our first date',
      'Our Tea-dates to malls and beaches',
=======
      'The year when everything changed. When I first saw your smile, I knew my world would never be the same. Every moment with you felt like discovering a new color I never knew existed.',
    memories: [
      'Our first conversation that lasted until sunrise',
      'The nervous excitement of our first date',
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
      "Learning each other's little quirks and falling deeper",
    ],
  },
  {
    year: 2,
    title: 'Growing Together',
    description:
      'We learned what it means to be a team. Through challenges and celebrations, we held each other close. You became not just my love, but my best friend, my confidant, my home.',
    memories: [
<<<<<<< HEAD
      'Our First Trip Together',
=======
      'Building traditions that became ours',
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
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
<<<<<<< HEAD
      'We didn’t just love each other—we lived it',
      'Countless dates, evening beaches,endless cups of tea, quiet dinners, and loud laughter.',
      'Ordinary days became our favorite memories, simply because we were together',
    ],
  },
];
const timelineImages: Record<number, string> = {
  1: "/images/year1.jpeg",
  2: "/images/year2.jpeg",
  3: "/images/year3.jpeg",
};
=======
      'Realizing this love is forever',
      'Dreaming together about our future',
      "Knowing I can't imagine life without you",
    ],
  },
];
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8

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

<<<<<<< HEAD
        {/* Year Image */}
<motion.div
  className="rounded-xl overflow-hidden mb-6 shadow-lg"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.6 }}
>
  <img
    src={timelineImages[data.year]}
    alt={`Year ${data.year} memory`}
    className="w-full h-64 object-cover"
  />
</motion.div>

=======
        {/* Photo placeholder */}
        <div className="bg-muted rounded-xl p-8 mb-6 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center min-h-[200px]">
          <Camera size={32} className="text-primary/50 mb-2" />
          <p className="text-sm text-muted-foreground font-body">
            Add your favorite photo from Year {data.year}
          </p>
        </div>
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8

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
