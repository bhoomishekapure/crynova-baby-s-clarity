import { Baby, Brain, Lightbulb, Smartphone, Waves, Zap } from "lucide-react";

const steps = [
  { icon: Baby, label: "Baby Cries", color: "bg-peach" },
  { icon: Waves, label: "Tag Detects Sound", color: "bg-baby-blue" },
  { icon: Brain, label: "AI Classifies Reason", color: "bg-lavender" },
  { icon: Lightbulb, label: "LED Shows Why", color: "bg-mint" },
  { icon: Zap, label: "Dock Syncs Data", color: "bg-peach" },
  { icon: Smartphone, label: "App Shows Insights", color: "bg-baby-blue" },
];

const HowItWorksSection = () => (
  <section className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          From cry to clarity in seconds
        </h2>
        <p className="text-muted-foreground text-lg">
          A seamless flow that gives you answers — instantly and offline.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="relative">
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="text-foreground" size={32} />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-border" />
              )}
            </div>
            <span className="text-xs font-medium text-muted-foreground mb-1">Step {i + 1}</span>
            <span className="text-sm font-semibold text-foreground">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
