<<<<<<< HEAD
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";
=======
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
<<<<<<< HEAD
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3; // soft background volume
        await audioRef.current.play(); // required for browser policies
      }
      setIsPlaying(!isPlaying);
      setShowTooltip(false);
    } catch (error) {
      console.log("Playback blocked until user interaction");
=======
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a royalty-free romantic piano track
    audioRef.current = new Audio(
      'https://cdn.pixabay.com/audio/2024/11/01/audio_dc7cd85c8c.mp3'
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(false), 5000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
      setIsPlaying(!isPlaying);
      setShowTooltip(false);
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
    }
  };

  return (
<<<<<<< HEAD
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/romantic-piano.mp3"
        loop
        preload="auto"
      />

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <div className="bg-card text-card-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border flex items-center gap-2">
                <Music size={14} className="text-primary" />
                <span>Play soft music</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleMusic}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-rose transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </motion.button>
      </motion.div>
    </>
=======
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="bg-card text-card-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <Music size={14} className="text-primary" />
                <span>Play romantic music</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMusic}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-rose transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </motion.div>
>>>>>>> e9af1b112ce7c3e153bb37d06ee2d0619f9494d8
  );
};

export default MusicToggle;
