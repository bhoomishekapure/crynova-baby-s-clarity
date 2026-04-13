import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DemoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-24 pb-16 gradient-hero">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book a Demo</h1>
            <p className="text-muted-foreground">
              See CryNova in action. Fill out the form and our team will schedule a personalized demo for you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-card rounded-2xl p-8 shadow-card text-center animate-fade-in">
              <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mint-foreground">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">Thank you!</h2>
              <p className="text-muted-foreground">We'll reach out within 24 hours to schedule your demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Request Demo
              </Button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DemoPage;
