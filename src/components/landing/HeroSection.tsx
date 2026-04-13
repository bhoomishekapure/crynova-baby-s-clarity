import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-baby.jpg";

const HeroSection = () => (
  <section className="gradient-hero min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
      <div className="space-y-6 animate-fade-in">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          🍼 AI-Powered Baby Care
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          We Decode Baby Cries —{" "}
          <span className="text-gradient">Not Just Detect Them</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          CryNova listens, understands, and tells you exactly <strong>why</strong> your baby is crying — hunger, pain, sleep, or discomfort. Reduce stress, respond faster, and bond better.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="#pricing">Get Early Access</a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#demo">Watch Demo</a>
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400" /> Works Offline
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> Zero Radiation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" /> Real-time AI
          </span>
        </div>
      </div>
      <div className="relative animate-fade-in-right">
        <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />
        <img
          src={heroImage}
          alt="Mother lovingly holding her peaceful baby"
          className="relative rounded-3xl shadow-card w-full object-cover"
          width={1280}
          height={896}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
