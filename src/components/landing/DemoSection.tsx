import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <section id="demo" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">See It In Action</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Watch CryNova decode a baby's cry
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our AI identifies the reason behind each cry in real time.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm mx-auto flex justify-center">
            <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-[85%] rounded-full bg-primary/18 blur-3xl"></div>
            <div className="absolute right-1/2 bottom-12 h-56 w-56 translate-x-[90%] rounded-full bg-accent/18 blur-3xl"></div>
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/12 blur-3xl"></div>

            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-card bg-foreground/5 aspect-[9/16] max-h-[65vh] mx-auto">
              <video 
                className="w-full h-full object-contain"
                controls
                controlsList="nodownload"
                playsInline
                poster="/placeholder.svg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 pointer-events-none">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center animate-pulse_glow">
                    <svg className="ml-1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: "hsl(0 0% 100%)" }}>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Full product demo showcasing real time cry classification, LED feedback, and app insights.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
