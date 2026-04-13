import { Check, X } from "lucide-react";

const rows = [
  { feature: "Detects crying", crynova: true, others: true },
  { feature: "Explains WHY baby cries", crynova: true, others: false },
  { feature: "Works offline", crynova: true, others: false },
  { feature: "Zero radiation near baby", crynova: true, others: false },
  { feature: "On-device AI", crynova: true, others: false },
  { feature: "LED instant feedback", crynova: true, others: false },
  { feature: "Affordable (under ₹1500)", crynova: true, others: false },
  { feature: "Mobile app insights", crynova: true, others: true },
];

const ComparisonSection = () => (
  <section className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">Comparison</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          CryNova vs Other Solutions
        </h2>
        <p className="text-muted-foreground text-lg">
          Others detect crying. CryNova explains the reason.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden">
        <div className="grid grid-cols-3 bg-primary/5 p-4 font-semibold text-sm">
          <span className="text-foreground">Feature</span>
          <span className="text-center text-primary">CryNova</span>
          <span className="text-center text-muted-foreground">Others</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-3 p-4 border-t border-border items-center text-sm">
            <span className="text-foreground">{row.feature}</span>
            <span className="flex justify-center">
              {row.crynova ? (
                <span className="w-7 h-7 bg-mint rounded-full flex items-center justify-center">
                  <Check size={16} className="text-mint-foreground" />
                </span>
              ) : (
                <span className="w-7 h-7 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X size={16} className="text-destructive" />
                </span>
              )}
            </span>
            <span className="flex justify-center">
              {row.others ? (
                <span className="w-7 h-7 bg-mint rounded-full flex items-center justify-center">
                  <Check size={16} className="text-mint-foreground" />
                </span>
              ) : (
                <span className="w-7 h-7 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X size={16} className="text-destructive" />
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
