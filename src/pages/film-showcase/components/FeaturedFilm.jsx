import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedFilm = ({ film, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video?.currentTime);
    const updateDuration = () => setDuration(video?.duration);
    const handleEnded = () => setIsPlaying(false);

    video?.addEventListener('timeupdate', updateTime);
    video?.addEventListener('loadedmetadata', updateDuration);
    video?.addEventListener('ended', handleEnded);

    return () => {
      video?.removeEventListener('timeupdate', updateTime);
      video?.removeEventListener('loadedmetadata', updateDuration);
      video?.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef?.current;
    if (isPlaying) {
      video?.pause();
    } else {
      video?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const video = videoRef?.current;
    const rect = e?.currentTarget?.getBoundingClientRect();
    const pos = (e?.clientX - rect?.left) / rect?.width;
    video.currentTime = pos * duration;
  };

  const toggleMute = () => {
    const video = videoRef?.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e?.target?.value);
    const video = videoRef?.current;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    const container = containerRef?.current;
    if (!isFullscreen) {
      if (container?.requestFullscreen) {
        container?.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds?.toString()?.padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div ref={containerRef} className="relative w-full h-full">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
        >
          <Icon name="X" size={24} />
        </Button>

        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={film?.thumbnail}
          onClick={togglePlay}
        >
          <source src={film?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          {/* Film Info */}
          <div className="mb-4">
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              {film?.title}
            </h2>
            <p className="text-white/80 text-sm">
              {film?.location} • {film?.duration} • {film?.category}
            </p>
          </div>

          {/* Progress Bar */}
          <div 
            className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause */}
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="text-white hover:bg-white/20"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
              </Button>

              {/* Volume */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20"
                >
                  <Icon name={isMuted ? "VolumeX" : "Volume2"} size={20} />
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Time */}
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* Share */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Icon name="Share" size={20} />
              </Button>

              {/* Fullscreen */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20"
              >
                <Icon name={isFullscreen ? "Minimize" : "Maximize"} size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFilm;