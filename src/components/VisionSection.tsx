import { motion } from 'framer-motion';
import { Sun, Coffee, Users, Calendar, Sparkles, Heart } from 'lucide-react';

const visionItems = [
  {
    icon: <Sun size={24} />,
    title: 'Morning Rituals',
<<<<<<< HEAD
    description: 'Waking up together, sharing breakfast, starting each day as a couple',
=======
    description: 'Waking up together, sharing breakfast, starting each day as a team',
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
  },
  {
    icon: <Coffee size={24} />,
    title: 'Simple Moments',
<<<<<<< HEAD
    description: 'Tea dates, cooking maggie together, the beautiful mundane of life together',
=======
    description: 'Coffee runs, grocery shopping, the beautiful mundane of life together',
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
  },
  {
    icon: <Users size={24} />,
    title: 'Building Community',
    description: 'Friends, family, creating memories with the people we love',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Growing Careers',
    description: 'Pursuing our ambitions while coming home to each other every night',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Celebrating Wins',
<<<<<<< HEAD
    description: 'Being there in person for every event, every milestone, every joy',
=======
    description: 'Being there in person for every promotion, every milestone, every joy',
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
  },
  {
    icon: <Heart size={24} />,
    title: 'A Future Family',
    description: 'When the time is right, building something beautiful together',
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine mb-4">
            If We Stay Together Here
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            This is what I imagine for us—a life built on closeness, presence, 
            and the magic of everyday love.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border-2 border-primary/10 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blush flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-wine">{item.icon}</div>
                </div>
                <h3 className="font-display text-lg font-semibold text-wine mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 gradient-romantic rounded-3xl">
            <p className="font-script text-2xl md:text-3xl text-wine">
              "Not just surviving together—
              <br />
              but truly living, side by side."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
