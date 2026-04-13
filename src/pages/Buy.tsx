import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Star, Shield, Zap, WifiOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productTag from "@/assets/product-tag.jpg";
import productDock from "@/assets/product-dock.jpg";
import productApp from "@/assets/product-app.jpg";

const images = [productTag, productDock, productApp];

const features = [
  "AI-powered cry classification (Hunger, Pain, Sleep, Discomfort)",
  "Works fully offline — no internet needed",
  "Zero RF radiation near baby",
  "LED instant feedback on the tag",
  "Charging dock with data sync",
  "Mobile app for insights & trends",
  "Compact & lightweight design",
  "1 Year manufacturer warranty",
];

const BuyPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card mb-4">
                <img
                  src={images[selectedImage]}
                  alt="CryNova product"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-primary shadow-soft" : "border-border"
                    }`}
                  >
                    <img src={img} alt="" className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">New Launch</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-2">
                  CryNova Smart Baby Care Kit
                </h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <span>4.9/5 (120+ reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-foreground">₹1,499</span>
                <span className="text-lg text-muted-foreground line-through">₹2,999</span>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">50% OFF</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Shield size={16} className="text-primary" /> 1 Year Warranty</span>
                <span className="flex items-center gap-1.5"><Zap size={16} className="text-primary" /> Fast Shipping</span>
                <span className="flex items-center gap-1.5"><WifiOff size={16} className="text-primary" /> Offline AI</span>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-foreground">Quantity:</label>
                  <div className="flex items-center border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-foreground font-medium min-w-[3rem] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="hero-outline"
                    size="xl"
                    className="flex-1"
                    onClick={() => setAddedToCart(true)}
                  >
                    <ShoppingCart size={20} />
                    {addedToCart ? "Added!" : "Add to Cart"}
                  </Button>
                  <Button variant="hero" size="xl" className="flex-1">
                    Buy Now
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Free shipping on all orders • 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BuyPage;
