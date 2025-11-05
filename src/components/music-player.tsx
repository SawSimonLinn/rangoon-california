"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check localStorage for user preference, but don't auto-play on first load
    const playingPreference = localStorage.getItem("musicPlaying");
    const userHasInteracted = localStorage.getItem("userHasInteracted");

    if (playingPreference !== null && userHasInteracted) {
      setIsPlaying(JSON.parse(playingPreference));
      setHasUserInteracted(true);
    }
  }, []);

  // Handle audio loading and setup
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleCanPlay = () => {
        console.log("🎵 Audio loaded and ready");
        setIsLoaded(true);
      };

      const handlePlay = () => {
        console.log("▶️ Audio started playing");
        setIsPlaying(true);
      };

      const handlePause = () => {
        console.log("⏸️ Audio paused");
        setIsPlaying(false);
      };

      const handleError = (e: any) => {
        console.error("❌ Audio loading error:", e);
        console.error("Audio error code:", audio.error?.code);
        console.error("Audio error message:", audio.error?.message);
        setIsLoaded(false);
      };

      const handleLoadedData = () => {
        console.log("📁 Audio data loaded");
        // Only try to play if user has previously interacted
        if (isPlaying && hasUserInteracted) {
          console.log("🚀 Attempting auto-play...");
          audio.play().catch((error) => {
            console.error("Auto-play failed:", error);
            setIsPlaying(false);
          });
        }
      };

      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("loadeddata", handleLoadedData);
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("error", handleError);

      // Set volume
      audio.volume = 0.3;
      console.log("🔊 Audio volume set to:", audio.volume);
      console.log("📍 Audio src:", audio.src);

      return () => {
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("loadeddata", handleLoadedData);
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("error", handleError);
      };
    }
  }, []);

  // Handle play/pause when state changes
  useEffect(() => {
    const audio = audioRef.current;
    console.log(
      "🎮 State changed - isPlaying:",
      isPlaying,
      "isLoaded:",
      isLoaded,
      "hasUserInteracted:",
      hasUserInteracted
    );

    if (audio && isLoaded && hasUserInteracted) {
      if (isPlaying) {
        console.log("▶️ Attempting to play...");
        audio.play().catch((error) => {
          console.error("Play failed:", error);
          setIsPlaying(false);
        });
      } else {
        console.log("⏸️ Pausing audio...");
        audio.pause();
      }
    }
  }, [isPlaying, isLoaded, hasUserInteracted]);

  // Force auto-play after a short delay (only if user has interacted before)
  useEffect(() => {
    if (isLoaded && isPlaying && hasUserInteracted) {
      const timer = setTimeout(() => {
        const audio = audioRef.current;
        if (audio && !audio.currentTime && isPlaying) {
          console.log("🔄 Retry auto-play after delay...");
          audio.play().catch((error) => {
            console.log("Delayed auto-play also failed:", error);
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, isPlaying, hasUserInteracted]);

  const togglePlayPause = () => {
    // Mark that user has interacted
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      localStorage.setItem("userHasInteracted", "true");
    }

    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    localStorage.setItem("musicPlaying", JSON.stringify(newPlayingState));

    const audio = audioRef.current;
    if (audio && isLoaded) {
      if (newPlayingState) {
        audio.play().catch((error) => {
          console.error("Failed to play audio:", error);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  };

  const audioSrc = "/music/background-music.mp3";

  console.log("🎵 Music Player Debug:", {
    isPlaying,
    isLoaded,
    audioSrc,
    audioExists: !!audioRef.current,
  });

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="bg-background/80 backdrop-blur-sm rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform"
          aria-label={isPlaying ? "Pause music" : "Play music"}
          disabled={!isLoaded}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>
      </div>
    </>
  );
};

export default MusicPlayer;
