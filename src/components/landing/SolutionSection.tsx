import { useState } from "react";
import { X } from "lucide-react";
import productTag from "@/assets/product-tag.jpg";
import productTagLabeled from "@/assets/product-tag-labeled.jpg";
import productDock from "@/assets/product-dock.jpg";
import dockFeatures from "@/assets/dock_features.jpg";
import mobileAppFeatures from "@/assets/mobile_app_features.jpg";
import productApp from "@/assets/product-app.jpg";

const solutions = [
  {
    title: "Smart Baby Tag",
    description: "A tiny, safe wearable that detects your baby's cries and runs AI classification fully on device. LED indicators show the reason instantly.",
    image: productTag,
    labeledImage: productTagLabeled,
    modalTitle: "Smart Baby Tag Features",
    modalSubtitle: "Compact, safe, and powered by on device AI",
    leds: [
      { color: "bg-green-400", label: "Hunger" },
      { color: "bg-yellow-400", label: "Discomfort" },
      { color: "bg-red-400", label: "Pain" },
      { color: "bg-blue-400", label: "Sleepiness" },
    ],
  },
  {
    title: "Charging Dock",
    description: "Kept safely away from your baby. Charges the tag, syncs cry data, and connects to the mobile app, ensuring zero radiation near your child.",
    image: productDock,
    labeledImage: dockFeatures,
    modalTitle: "Charging Dock Features",
    modalSubtitle: "Safe, smart, and always connected",
  },
  {
    title: "Mobile App",
    description: "View detailed cry insights, patterns, and trends, but only when the tag is placed on the dock. Smart parenting made simple.",
    image:  productApp,
    labeledImage:  mobileAppFeatures,
    modalTitle: "Mobile App Features",
    modalSubtitle: "All your baby's insights in one place",
  },
];

const SolutionSection = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">The Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            A complete system designed around your baby's safety
          </h2>
          <p className="text-muted-foreground text-lg">
            Three components working together. Smart tag, charging dock, and mobile app to decode every cry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group">
              <div
                className={`aspect-square overflow-hidden relative ${item.labeledImage ? "cursor-pointer" : ""}`}
                onClick={() => item.labeledImage && setActiveModal(i)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {item.labeledImage && (
                  <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="bg-foreground/70 text-background text-xs px-3 py-1 rounded-full">Click to view features</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {item.leds && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.leds.map((led, j) => (
                      <span key={j} className="flex items-center gap-1.5 text-xs text-foreground bg-muted px-3 py-1 rounded-full">
                        <span className={`w-2.5 h-2.5 rounded-full ${led.color}`} />
                        {led.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && solutions[activeModal].labeledImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-card rounded-2xl shadow-card max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-foreground/10 hover:bg-foreground/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setActiveModal(null)}
            >
              <X size={18} className="text-foreground" />
            </button>
            <img
              src={solutions[activeModal].labeledImage!}
              alt={`${solutions[activeModal].title} features diagram`}
              className="w-full h-auto"
              width={1024}
              height={1024}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-foreground mb-1">{solutions[activeModal].modalTitle}</h3>
              <p className="text-sm text-muted-foreground">{solutions[activeModal].modalSubtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionSection;
