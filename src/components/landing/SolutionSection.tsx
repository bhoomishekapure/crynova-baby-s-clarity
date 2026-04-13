import productTag from "@/assets/product-tag.jpg";
import productDock from "@/assets/product-dock.jpg";
import productApp from "@/assets/product-app.jpg";

const solutions = [
  {
    title: "Smart Baby Tag",
    description: "A tiny, safe wearable that detects your baby's cries and runs AI classification fully on-device. LED indicators show the reason instantly.",
    image: productTag,
    leds: [
      { color: "bg-green-400", label: "Hunger" },
      { color: "bg-yellow-400", label: "Discomfort" },
      { color: "bg-red-400", label: "Pain" },
      { color: "bg-blue-400", label: "Sleepiness" },
    ],
  },
  {
    title: "Charging Dock",
    description: "Kept safely away from your baby. Charges the tag, syncs cry data, and connects to the mobile app — ensuring zero radiation near your child.",
    image: productDock,
  },
  {
    title: "Mobile App",
    description: "View detailed cry insights, patterns, and trends — but only when the tag is placed on the dock. Smart parenting made simple.",
    image: productApp,
  },
];

const SolutionSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">The Solution</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          A complete system designed around your baby's safety
        </h2>
        <p className="text-muted-foreground text-lg">
          Three components working together — smart tag, charging dock, and mobile app — to decode every cry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((item, i) => (
          <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={800}
              />
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
  </section>
);

export default SolutionSection;
