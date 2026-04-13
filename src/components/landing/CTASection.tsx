import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 gradient-hero">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Let's Talk — Get in touch to learn more
      </h2>
      <p className="text-muted-foreground text-lg mb-8">
        Whether you're a parent, investor, or healthcare provider — we'd love to connect and show you how CryNova can make a difference.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" size="xl" asChild>
          <Link to="/demo">Book a Demo</Link>
        </Button>
        <Button variant="hero-outline" size="xl" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button variant="default" size="xl" asChild>
          <Link to="/buy">Buy Now</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
