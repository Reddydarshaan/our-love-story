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
  We met when we were just kids in school, back in 7th class — two people who had
  no idea how important we would become in each other’s lives. When you proposed
  to me in 10th, I wasn’t ready. Not because I didn’t care, but because I was scared
  and unsure of myself. I asked you for time — four long years — and you gave it to
  me with patience I never truly understood back then.
</p>

<p>
  In those years, we didn’t drift apart. We grew closer. We became friends, shared
  conversations, laughter, silence, and trust. Somewhere along the way, you became
  my safe place. You stayed — without expectations, without pressure — and that
  taught me more about love than any words ever could.
</p>

<p>
  On January 17th, 2023, I finally found the courage to do what my heart had known
  for a long time. I chose you. Not out of fear, not out of habit — but with clarity,
  confidence, and love. That day wasn’t the start of our story, but it was the moment
  I promised to walk it with you, honestly and fully.
</p>

<p>
  Since then, you’ve been my calm and my strength. You believe in me even when I
  doubt myself. You’ve shown me patience, kindness, and what it truly means to stand
  by someone. With you, I learned that love isn’t just about feelings — it’s about
  showing up, every single day.
</p>

<p>
  I don’t take us for granted. Not our past, not our present, and not the future we
  still have to write. No matter where life takes us, a part of my heart will always
  belong to the girl who waited, believed, and loved me long before I learned how to
  love myself.
</p>

<p className="text-right pt-4">
  Forever yours Dachu❤️
</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
