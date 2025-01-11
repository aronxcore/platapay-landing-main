import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Agents", href: "/agents" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2e1844] backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2372c9ea-123c-43e1-852b-7147a6eb465d.png" 
              alt="PlataPay Logo" 
              className="h-8 w-auto" 
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
                <Link
                key={item.name}
                to={item.href}
                className="text-lg text-[#ffffff] hover:text-[#9f71b1] transition-colors flex items-center justify-center"
                >
                {item.name}
                </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4" 
               role="navigation" 
               aria-label="Authentication">
            <Button 
              variant="outline" 
              className="font-bold text-md bg-[#517f3a] border-2 border-[#3b5f2d] text-[#ffffff] hover:bg-[#7fba59]"
              asChild
              aria-label="Login to your account"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              variant="default"
              className="font-bold text-md bg-[#7fba59] border-[#transparent] hover:bg-[#517f3a] text-[#ffffff]"
              asChild
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-plata-light" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-plata-dark border-plata-input">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-[#ffffff] hover:text-[#9f71b1] transition-colors px-4 py-2 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 space-y-4">
                    <Button 
                      variant="ghost" 
                      className="w-full bg-[#7d4e9b] border-2 border-[#7d4e9b] text-[#ffffff] hover:bg-[#5a2c7f]"
                      asChild
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button 
                      className="w-full bg-[#5a2c7f] hover:bg-[#7d4e9b] text-[#ffffff]"
                      asChild
                    >
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};