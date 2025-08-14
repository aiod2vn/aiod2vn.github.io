import { useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onSettingsClick: () => void;
}

const Navigation = ({ onSettingsClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              AIO-D2VN
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-accent-teal transition-colors text-shadow">
              Trang Chủ
            </a>
            <a href="/features" className="text-foreground hover:text-accent-teal transition-colors text-shadow">
              Tính Năng
            </a>
            <a href="/about" className="text-foreground hover:text-accent-pink transition-colors text-shadow">
              Về Chúng Tôi
            </a>
            <a href="/contact" className="text-foreground hover:text-accent-purple transition-colors text-shadow">
              Liên Hệ
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              Khám Phá Công Cụ
            </Button>
          </div>

          {/* Settings & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSettingsClick}
              className="glass-hover text-foreground"
            >
              <Settings className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-hover text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              <a href="/" className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors">
                Trang Chủ
              </a>
              <a href="/features" className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors">
                Tính Năng
              </a>
              <a href="/about" className="block px-3 py-2 text-foreground hover:text-accent-pink transition-colors">
                Về Chúng Tôi
              </a>
              <a href="/contact" className="block px-3 py-2 text-foreground hover:text-accent-purple transition-colors">
                Liên Hệ
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  Khám Phá Công Cụ
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;