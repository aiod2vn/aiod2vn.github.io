import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SettingsPanel from '@/components/SettingsPanel';
import ToolCard from '@/components/ToolCard';
import ToolModal from '@/components/ToolModal';
import { 
  Mail, Image, FileText, Languages, PenTool, Calculator, 
  Building, TrendingUp, GraduationCap, MessageSquare,
  Search, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Features = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Tất cả', 'Học tập', 'Thiết kế', 'Văn phòng', 'Xây dựng',
    'Truyền thông', 'Marketing', 'Kế toán', 'Ngân hàng', 'Tin tức'
  ];

  const tools = [
    {
      id: 1,
      title: 'Soạn Thảo Email',
      description: 'Tạo email chuyên nghiệp với AI trong vài giây. Hỗ trợ nhiều tone của giọng và mục đích khác nhau.',
      icon: Mail,
      category: 'Văn phòng',
      type: 'email' as const,
      isPopular: true
    },
    {
      id: 2,
      title: 'Tạo Hình Ảnh AI',
      description: 'Tạo ra những hình ảnh độc đáo từ mô tả văn bản với công nghệ AI tiên tiến nhất.',
      icon: Image,
      category: 'Thiết kế',
      type: 'image' as const,
      isPopular: true
    },
    {
      id: 3,
      title: 'Tóm Tắt Văn Bản',
      description: 'Tóm tắt tài liệu dài thành những điểm chính ngắn gọn và dễ hiểu.',
      icon: FileText,
      category: 'Học tập',
      type: 'text' as const
    },
    {
      id: 4,
      title: 'Dịch Thuật Thông Minh',
      description: 'Dịch đa ngôn ngữ với độ chính xác cao, giữ nguyên ý nghĩa và context.',
      icon: Languages,
      category: 'Truyền thông',
      type: 'text' as const
    },
    {
      id: 5,
      title: 'Thiết Kế Logo',
      description: 'Tạo logo chuyên nghiệp cho thương hiệu với nhiều phong cách khác nhau.',
      icon: PenTool,
      category: 'Thiết kế',
      type: 'image' as const,
      isPopular: true
    },
    {
      id: 6,
      title: 'Phân Tích Tài Chính',
      description: 'Đọc hiểu và phân tích báo cáo tài chính, đưa ra insights chi tiết.',
      icon: Calculator,
      category: 'Kế toán',
      type: 'text' as const
    },
    {
      id: 7,
      title: 'Báo Cáo Xây Dựng',
      description: 'Tạo báo cáo tiến độ xây dựng và phân tích dự án một cách chuyên nghiệp.',
      icon: Building,
      category: 'Xây dựng',
      type: 'text' as const
    },
    {
      id: 8,
      title: 'Phân Tích Thị Trường',
      description: 'Nghiên cứu thị trường, phân tích xu hướng và cơ hội kinh doanh.',
      icon: TrendingUp,
      category: 'Marketing',
      type: 'text' as const
    },
    {
      id: 9,
      title: 'Tạo Bài Giảng',
      description: 'Thiết kế bài giảng tương tác và nội dung giáo dục hấp dẫn.',
      icon: GraduationCap,
      category: 'Học tập',
      type: 'text' as const
    },
    {
      id: 10,
      title: 'Chatbot Thông Minh',
      description: 'Tạo chatbot hỗ trợ khách hàng 24/7 với khả năng hiểu ngữ cảnh.',
      icon: MessageSquare,
      category: 'Truyền thông',
      type: 'text' as const
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'Tất cả' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation onSettingsClick={() => setIsSettingsOpen(true)} />
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-shadow mb-6">
              Khám Phá <span className="gradient-text">Công Cụ AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Hơn 100+ công cụ AI chuyên nghiệp để tối ưu hóa mọi khía cạnh công việc của bạn
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Tìm kiếm công cụ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass bg-glass border-glass-border text-foreground"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-accent-teal" />
                  <h3 className="text-lg font-semibold text-foreground">Danh Mục</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'ghost'}
                      className={`w-full justify-start ${
                        selectedCategory === category 
                          ? 'bg-primary text-primary-foreground' 
                          : 'glass-hover text-foreground'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-glass-border">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tổng công cụ:</span>
                      <span className="text-foreground font-semibold">{tools.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Đang hiển thị:</span>
                      <span className="text-foreground font-semibold">{filteredTools.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Phổ biến:</span>
                      <span className="text-accent-pink font-semibold">
                        {tools.filter(t => t.isPopular).length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="lg:col-span-3">
              {filteredTools.length === 0 ? (
                <div className="text-center py-16">
                  <div className="glass rounded-2xl p-12">
                    <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Không tìm thấy công cụ phù hợp
                    </h3>
                    <p className="text-muted-foreground">
                      Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      category={tool.category}
                      isPopular={tool.isPopular}
                      onClick={() => setSelectedTool(tool)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tool Modal */}
      {selectedTool && (
        <ToolModal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          tool={selectedTool}
        />
      )}
    </div>
  );
};

export default Features;