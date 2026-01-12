import { motion } from 'framer-motion';
import { Heart, Feather } from 'lucide-react';

const FinalLetter = () => {
  return (
    <section className="py-20 md:py-32 gradient-dream relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-wine/10 rounded-tl-3xl m-8" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-wine/10 rounded-br-3xl m-8" />

      <div className="container max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Feather size={40} className="mx-auto text-wine/60 mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-wine">
            A Message From My Heart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed space-y-6">
            <p className="font-script text-2xl text-wine">My dearest love,</p>

            <p>
              If you've read this far, you know how much you mean to me. 
              Every word here was written with a heart full of love and 
              eyes often blurred by tears—happy tears, grateful tears, 
              and yes, sometimes scared tears too.
            </p>

            <p>
              Three years together. Three years of learning what it means 
              to truly love someone. You've made me laugh harder than anyone, 
              held me when I fell apart, and believed in me when I couldn't 
              believe in myself.
            </p>

            <p>
              I'm not writing this to pressure you. I'm not writing this 
              to make you feel guilty or to take away your freedom to choose. 
              Your dreams matter. Your happiness matters. YOU matter—more 
              than I can ever express.
            </p>

            <p>
              But I had to tell you how I feel. I had to be honest about 
              my fears, my hopes, and my love for you. Because that's what 
              we've always been—honest with each other.
            </p>

            <p>
              Whatever you decide, wherever life takes us, please know this: 
              meeting you was the best thing that ever happened to me. 
              Loving you has made me a better person. And no distance, 
              no circumstance, no fear can ever change that.
            </p>

            <div className="pt-6 space-y-4">
              <p>
<<<<<<< HEAD
                I dream of growing old with you.Every day together. Of holding your hand through 
=======
                I dream of growing old with you. Of lazy Sundays and 
                adventurous Saturdays. Of holding your hand through 
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
                every storm and dancing with you in every rain.
              </p>

              <p>
                But more than anything, I want you to be happy. 
                Even if that happiness leads you somewhere far away.
              </p>
            </div>

            <div className="pt-8 text-center">
              <Heart size={32} className="mx-auto text-primary fill-primary/50 animate-heartbeat mb-4" />
              <p className="font-script text-2xl md:text-3xl text-wine">
                No matter what you choose,
                <br />
<<<<<<< HEAD
                I love you Keerthana.
=======
                I love you.
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
              </p>
              <p className="font-script text-xl text-rose-gold mt-4">
                Always and forever ❤️
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalLetter;
