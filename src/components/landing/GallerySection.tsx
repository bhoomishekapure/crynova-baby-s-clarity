import heroImage from "@/assets/hero-baby.jpg";
import productTag from "@/assets/product-tag.jpg";
import productDock from "@/assets/product-dock.jpg";
import productApp from "@/assets/product-app.jpg";

const images = [
  { src: heroImage, alt: "Parent and baby bonding moment" },
  { src: productTag, alt: "CryNova smart baby tag" },
  { src: productDock, alt: "CryNova charging dock" },
  { src: productApp, alt: "CryNova mobile app interface" },
];

const GallerySection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
          Designed with love, built with care
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-card group cursor-pointer">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
