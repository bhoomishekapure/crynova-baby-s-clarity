import { Brain, DollarSign, Shield, Wifi, WifiOff, Zap } from "lucide-react";

const features = [
  { icon: Brain, title: "Explains WHY", description: "Not just detection. CryNova tells you the specific reason behind each cry.", color: "bg-lavender" },
  { icon: WifiOff, title: "Works Offline", description: "AI runs entirely on-device. No internet, no cloud, no delays.", color: "bg-mint" },
  { icon: Shield, title: "Zero Radiation", description: "No RF signals near your baby. The dock handles all wireless communication.", color: "bg-baby-blue" },
  { icon: Zap, title: "Real-Time AI", description: "Instant classification the moment your baby starts crying.", color: "bg-peach" },
  { icon: DollarSign, title: "Affordable", description: "Starting at just ₹1,499 — premium baby tech that every family can access.", color: "bg-lavender" },
  { icon: Wifi, title: "Smart Sync", description: "Data syncs only through the dock, giving you insights when you need them.", color: "bg-mint" },
];

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">Features & USP</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          Why parents love CryNova
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-card hover-lift">
            <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
              <feature.icon className="text-foreground" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
