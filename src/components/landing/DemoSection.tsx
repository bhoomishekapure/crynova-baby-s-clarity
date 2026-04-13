const DemoSection = () => (
  <section id="demo" className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">See It In Action</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          Watch CryNova decode a baby's cry
        </h2>
        <p className="text-muted-foreground text-lg">
          See how our AI identifies the reason behind each cry in real-time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-card bg-foreground/5 aspect-video flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse_glow cursor-pointer">
              <svg className="ml-1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: "hsl(0 0% 100%)" }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm">Demo video coming soon — click to play</p>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Full product demo showcasing real-time cry classification, LED feedback, and app insights.
        </p>
      </div>
    </div>
  </section>
);

export default DemoSection;
