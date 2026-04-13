import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "CryNova Device",
    price: "₹1,499",
    period: "one-time",
    description: "Smart baby tag + charging dock",
    features: ["Smart Baby Tag", "Charging Dock", "LED Cry Indicators", "Offline AI Classification", "Zero Radiation Design", "1 Year Warranty"],
    cta: "Buy Now",
    href: "/buy",
    highlight: true,
  },
  {
    name: "App Subscription",
    price: "₹199",
    period: "/month",
    description: "Unlock detailed insights & trends",
    features: ["Cry Pattern Analytics", "Weekly Reports", "Growth Tracking", "Personalized Tips", "Priority Support"],
    cta: "Subscribe",
    href: "/buy",
    highlight: false,
  },
  {
    name: "B2B / Hospitals",
    price: "Custom",
    period: "pricing",
    description: "For hospitals, clinics & nurseries",
    features: ["Bulk Device Orders", "Dashboard for Staff", "API Integration", "Custom Branding", "Dedicated Support", "SLA Agreement"],
    cta: "Contact Us",
    href: "/contact",
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">Pricing</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground text-lg">
          Premium baby care technology that every family can afford.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 ${
              plan.highlight
                ? "gradient-primary text-primary-foreground shadow-hover scale-105"
                : "bg-card shadow-card"
            } hover-lift`}
          >
            <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "" : "text-foreground"}`}>{plan.name}</h3>
            <p className={`text-sm mb-4 ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`text-sm ml-1 ${plan.highlight ? "opacity-70" : "text-muted-foreground"}`}>{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <Check size={16} className={plan.highlight ? "" : "text-primary"} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlight ? "hero-outline" : "hero"}
              size="lg"
              className={`w-full ${plan.highlight ? "border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary" : ""}`}
              asChild
            >
              <Link to={plan.href}>{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
