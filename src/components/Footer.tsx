import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground/5 border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gradient mb-3">CryNova</h3>
          <p className="text-sm text-muted-foreground">
            AI-powered baby cry decoder. Because every cry has a reason.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/#features" className="hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/demo" className="hover:text-primary transition-colors">Book Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-primary" /> by CryNova Team · © 2026
      </div>
    </div>
  </footer>
);

export default Footer;
