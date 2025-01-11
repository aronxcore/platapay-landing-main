import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Footer = () => {
  return (
    <footer className="bg-[#2e1844]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-[#ffffff]">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-[#f5f5f5] hover:text-[#9f71b1]">Features</Link></li>
              <li><Link to="/pricing" className="text-[#f5f5f5] hover:text-[#9f71b1]">Pricing</Link></li>
              <li><Link to="/security" className="text-[#f5f5f5] hover:text-[#9f71b1]">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[#ffffff]">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#f5f5f5] hover:text-[#9f71b1]">About</Link></li>
              <li><Link to="/careers" className="text-[#f5f5f5] hover:text-[#9f71b1]">Careers</Link></li>
              <li><Link to="/contact" className="text-[#f5f5f5] hover:text-[#9f71b1]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[#ffffff]">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-[#f5f5f5] hover:text-[#9f71b1]">Blog</Link></li>
              <li><Link to="/help-center" className="text-[#f5f5f5] hover:text-[#9f71b1]">Help Center</Link></li>
              <li><Link to="/documentation" className="text-[#f5f5f5] hover:text-[#9f71b1]">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[#ffffff]">Subscribe</h3>
            <p className="text-[#f5f5f5] mb-4">Stay updated with our latest news</p>
            <div className="flex gap-2">
              <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#ffffff] border-[transparent] text-[#191919] placeholder:text-[#191919] placeholder:opacity-40"
              />
              <Button className="font-bold bg-[#7fba59] border-2 border-[transparent] hover:bg-[#517f3a] text-[#ffffff]">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#5a2c7f]">
          <p className="text-center text-[#f5f5f5]">
            © {new Date().getFullYear()} PlataPay. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#9f71b1]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#9f71b1]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#9f71b1]">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};