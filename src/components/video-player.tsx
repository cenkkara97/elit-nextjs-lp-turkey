"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  className?: string;
}

export default function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;

    setIsMuted(!isMuted);
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const volume = Number(event.target.value);

    videoRef.current.volume = volume;

    setVolume(volume);

    if (volume > 0) {
      setIsMuted(false);
      videoRef.current.muted = false;
    } else {
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      videoRef.current.parentElement?.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl ${className}`}
    >
      {!isPlaying && (
        <Image
          src={thumbnailUrl}
          alt="Video thumbnail"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      <video
        ref={videoRef}
        src={videoUrl}
        className={`absolute inset-0 w-full h-full ${
          isPlaying ? "block" : "hidden"
        }`}
        controls={false}
        preload="none"
        playsInline
      />

      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-16 h-16 flex items-center justify-center"
        >
          <Play className="w-8 h-8" />
        </button>
      )}

      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 flex items-center justify-between px-4 py-2">
          <button onClick={togglePlay} className="text-white">
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <div className="flex items-center space-x-2">
            <button onClick={toggleMute} className="text-white">
              {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={changeVolume}
              className="w-24"
            />
          </div>

          <button onClick={toggleFullscreen} className="text-white">
            {isFullscreen ? <Minimize2 /> : <Maximize2 />}
          </button>
        </div>
      )}
    </div>
  );
}
