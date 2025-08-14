import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  isPopular?: boolean;
  onClick: () => void;
}

const ToolCard = ({ title, description, icon: Icon, category, isPopular, onClick }: ToolCardProps) => {
  return (
    <Card 
      className="glass glass-hover cursor-pointer border-glass-border p-6 relative group"
      onClick={onClick}
    >
      {isPopular && (
        <Badge className="absolute -top-2 -right-2 bg-accent-pink text-white border-0">
          Phổ Biến
        </Badge>
      )}
      
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Icon className="h-6 w-6 text-accent-teal" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground text-shadow mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <Badge variant="secondary" className="glass border-glass-border text-xs">
            {category}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;