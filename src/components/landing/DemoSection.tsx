import { useState } from "react";

const DemoSection = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  return (
    <section id="demo" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Watch CryNova decode a baby's cry
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our AI identifies the reason behind each cry in real time.
          </p>
        </div>

        {/* Two videos side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Left — Product Demo */}
          <div className="flex flex-col items-center">
            <VideoCard
              src="/demo-video.mp4"
              isPlaying={isPlaying1}
              onPlay={() => setIsPlaying1(true)}
              onPause={() => setIsPlaying1(false)}
            />
            <p className="text-center text-sm text-muted-foreground mt-3">
              Real-time cry classification, LED feedback & app insights.
            </p>
          </div>

          {/* Right — Pitch / Selling Video */}
          <div className="flex flex-col items-center">
            <VideoCard
              src="/Cry_Nova_pitch.mp4"
              isPlaying={isPlaying2}
              onPlay={() => setIsPlaying2(true)}
              onPause={() => setIsPlaying2(false)}
            />
            <p className="text-center text-sm text-muted-foreground mt-3">
              Our story, mission & why CryNova exists for every parent.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  src: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const VideoCard = ({ src, isPlaying, onPlay, onPause }: VideoCardProps) => (
  <div className="relative w-full">
    <div className="absolute left-1/2 top-10 h-48 w-48 -translate-x-[85%] rounded-full bg-primary/18 blur-3xl pointer-events-none" />
    <div className="absolute right-1/2 bottom-12 h-44 w-44 translate-x-[90%] rounded-full bg-accent/18 blur-3xl pointer-events-none" />

    <div className="relative w-full rounded-[2rem] overflow-hidden shadow-card bg-foreground/5 aspect-[9/16]">
      <video
        className="w-full h-full object-contain"
        controls
        controlsList="nodownload"
        playsInline
        poster="/placeholder.svg"
        onPlay={onPlay}
        onPause={onPause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 pointer-events-none">
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center animate-pulse_glow">
            <svg className="ml-1" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" style={{ color: "hsl(0 0% 100%)" }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default DemoSection;