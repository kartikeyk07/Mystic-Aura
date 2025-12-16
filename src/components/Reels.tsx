import { Play, X, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// NOTE: Add your MP4 files to `public/videos/` (e.g. public/videos/reel-1.mp4)
// NOTE: Add thumbnails to `public/images/` (e.g. public/images/reel-1.jpg)
// A fallback image is used if a thumbnail is missing: `/images/reel-fallback.jpg`
const reels = [
  {
    id: 1,
    title: "Christmas bauble",
    thumbnail: "/images/reel-1.png",
    duration: "0:45",
    videoSrc: "/videos/reel-1.mp4",
  },
  {
    id: 2,
    title: "Mithai Candle Box",
    thumbnail: "/images/reel-2.png",
    duration: "0:32",
    videoSrc: "/videos/reel-2.mp4",
  },
  {
    id: 3,
    title: " Urli Candle",
    thumbnail: "/images/reel-3.png",
    duration: "1:15",
    videoSrc: "/videos/reel-3.mp4",
  },
  {
    id: 4,
    title: "Floating candles",
    thumbnail: "/images/reel-4.png",
    duration: "0:58",
    videoSrc: "/videos/reel-4.mp4",
  },
];

export default function Reels() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true); // default muted to allow autoplay
  const [showPlayToUnmute, setShowPlayToUnmute] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePlayer();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // When a reel is selected, try to autoplay it (muted unless unmuted by user)
  useEffect(() => {
    const v = videoRef.current;
    if (selectedId !== null && v) {
      v.muted = isMuted;
      const p = v.play();
      if (p && p.catch) {
        p.catch(() => {
          // autoplay blocked
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(false);
    }
  }, [selectedId, isMuted]);

  // keep the DOM video element in sync with React state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, selectedId]);

  function openPlayer(id: number) {
    // start muted to respect autoplay policies; user can unmute
    setIsMuted(true);
    setShowPlayToUnmute(false);
    setSelectedId(id);
  }

  function closePlayer() {
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (err) {
        /* ignore */
      }
    }
    setShowPlayToUnmute(false);
    setSelectedId(null);
  }

  function toggleMute(e?: React.MouseEvent) {
    if (e) e.stopPropagation();
    const next = !isMuted;
    setIsMuted(next);
    // if unmuting, try to resume playback (user gesture may be required in some browsers)
    if (!next && videoRef.current) {
      videoRef.current.muted = false; // ensure immediate change
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {
        // autoplay with sound blocked; show prompt to the user to manually start playback
        setShowPlayToUnmute(true);
      });
    } else {
      setShowPlayToUnmute(false);
    }
  }

  function togglePlay(e?: React.MouseEvent) {
    if (e) e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) {
        p.catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Behind The Scenes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our Craft in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch the artistry behind every candle. From hand-pouring to the final touches,
            each step is a labor of love.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              role="button"
              tabIndex={0}
              onClick={() => openPlayer(reel.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openPlayer(reel.id);
              }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-warm transform transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* If this reel is selected, play inline */}
              {selectedId === reel.id ? (
                <div
                  className="absolute inset-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(e);
                  }}
                >
                  <video
                    ref={videoRef}
                    src={reel.videoSrc}
                    poster={reel.thumbnail ?? "/images/reel-fallback.jpg"}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onEnded={closePlayer}
                    onError={() => {
                      console.warn("Video failed to load:", reel.videoSrc);
                      closePlayer();
                    }}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute(e);
                      }}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="bg-background/80 rounded-full p-2"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closePlayer();
                      }}
                      aria-label="Close video"
                      className="bg-background/80 rounded-full p-2"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* If unmuting was blocked by the browser, show an explicit play-with-sound prompt */}
                  {showPlayToUnmute && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(false);
                          setShowPlayToUnmute(false);
                          if (videoRef.current) {
                            videoRef.current.muted = false;
                            videoRef.current
                              .play()
                              .catch(() => setShowPlayToUnmute(true));
                          }
                        }}
                        aria-label="Play with sound"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                      >
                        <Play size={16} />
                        <span>Play with sound</span>
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-cream text-lg font-medium mb-1">{reel.title}</h3>
                    <span className="text-cream/70 text-sm">{reel.duration}</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={reel.thumbnail ?? "/images/reel-fallback.jpg"}
                    alt={reel.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/reel-fallback.jpg";
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  {/* Play Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === reel.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-cream text-lg font-medium mb-1">{reel.title}</h3>
                    <span className="text-cream/70 text-sm">{reel.duration}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
