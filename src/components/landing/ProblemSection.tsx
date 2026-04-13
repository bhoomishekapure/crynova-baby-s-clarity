import { AlertTriangle, Baby, HeartCrack } from "lucide-react";

const stats = [
  { value: "80%", label: "of parents struggle to understand why their baby cries", icon: HeartCrack, color: "bg-peach" },
  { value: "25M+", label: "babies born every year in India alone", icon: Baby, color: "bg-baby-blue" },
  { value: "1 in 5", label: "mothers experience postpartum stress from helplessness", icon: AlertTriangle, color: "bg-lavender" },
];

const ProblemSection = () => (
  <section className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">The Problem</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          Every cry is a message. But most parents are left guessing.
        </h2>
        <p className="text-muted-foreground text-lg">
          Imagine your baby crying at 3 AM. You've tried feeding, changing, rocking and nothing works. 
          The helplessness is overwhelming. <strong className="text-foreground">No tool today tells parents WHY their baby cries.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-card hover-lift text-center">
            <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className="text-foreground" size={28} />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
