import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    {
      title: "О компании",
      href: "#about",
      action: () => scrollToSection("about")
    },
    {
      title: "Основные направления",
      items: [
        { title: "Портфельное управление", href: "/portfolio" },
        { title: "Трейдинг", href: "/trading" },
        { title: "Инновационные направления", href: "/innovations" }
      ]
    },
    {
      title: "Стратегия",
      href: "/strategy"
    },
    {
      title: "Безопасность",
      href: "/security"
    },
    {
      title: "Глоссарий",
      href: "/glossary"
    },
    {
      title: "Связаться с нами",
      href: "#contact",
      action: () => scrollToSection("contact")
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-gradient-primary max-sm:text-lg">IKS Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors hover:bg-accent/10">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-64">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={item.action || (() => {})}
                      className="text-foreground hover:text-primary transition-colors hover:bg-accent/10"
                    >
                      {item.href?.startsWith('/') ? (
                        <Link to={item.href}>{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </Button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - Auth & Theme */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Регистрация/Вход
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-accent/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <>
                      <div className="font-medium text-foreground py-2 text-base">{item.title}</div>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors text-base"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:text-primary hover:bg-accent/10"
                      onClick={item.action || (() => setIsMenuOpen(false))}
                    >
                      {item.href?.startsWith('/') ? (
                        <Link to={item.href} className="w-full text-left">{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </Button>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Регистрация/Вход
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base hover:bg-accent/10"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    setIsMenuOpen(false);
                  }}
                >
                  <Sun className="h-5 w-5 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-6">Переключить тему</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;