import { useState } from 'react';
import { X, Palette, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');
  const [backgroundUrl, setBackgroundUrl] = useState('');

  const handleApply = () => {
    // In a real app, this would update the CSS variables
    console.log('Applying settings:', { primaryColor, backgroundUrl });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pointer-events-none">
      <div className="w-80 glass rounded-2xl p-6 slide-in pointer-events-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground text-shadow">
            Cài Đặt Giao Diện
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Color Picker */}
          <div className="space-y-2">
            <Label htmlFor="color-picker" className="flex items-center gap-2 text-foreground">
              <Palette className="h-4 w-4" />
              Chọn màu chủ đạo
            </Label>
            <div className="flex gap-2">
              <Input
                id="color-picker"
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-16 h-10 glass border-glass-border cursor-pointer"
              />
              <Input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 glass bg-glass border-glass-border text-foreground"
                placeholder="#8B5CF6"
              />
            </div>
          </div>

          {/* Background Image */}
          <div className="space-y-2">
            <Label htmlFor="bg-url" className="flex items-center gap-2 text-foreground">
              <Image className="h-4 w-4" />
              Dán link ảnh nền vào đây
            </Label>
            <Input
              id="bg-url"
              type="url"
              value={backgroundUrl}
              onChange={(e) => setBackgroundUrl(e.target.value)}
              className="glass bg-glass border-glass-border text-foreground"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Apply Button */}
          <Button
            onClick={handleApply}
            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Áp Dụng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;