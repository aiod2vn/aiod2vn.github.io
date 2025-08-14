import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SettingsPanel from '@/components/SettingsPanel';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield, Users, Star, CheckCircle } from 'lucide-react';

const Index = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onSettingsClick={() => setIsSettingsOpen(true)} />
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="floating-animation">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground text-shadow">
              Khai Phá Sức Mạnh{" "}
              <span className="gradient-text">AI</span>{" "}
              Trong Mọi Ngành Nghề
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Từ soạn thảo email đến phân tích hình ảnh, AIO-D2VN cung cấp bộ công cụ AI chuyên dụng, 
            tất cả ở cùng một nơi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg">
              Khám Phá Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="glass border-glass-border text-foreground px-8 py-4 text-lg">
              Xem Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="glass glass-hover rounded-2xl p-8">
              <Sparkles className="h-12 w-12 text-accent-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Đơn Giản & Mạnh Mẽ</h3>
              <p className="text-muted-foreground">
                Giao diện trực quan, dễ sử dụng nhưng không kém phần mạnh mẽ cho mọi nhu cầu công việc.
              </p>
            </div>
            
            <div className="glass glass-hover rounded-2xl p-8">
              <Zap className="h-12 w-12 text-accent-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Xử Lý Siêu Nhanh</h3>
              <p className="text-muted-foreground">
                AI tiên tiến giúp bạn hoàn thành công việc nhanh chóng và chính xác hơn bao giờ hết.
              </p>
            </div>
            
            <div className="glass glass-hover rounded-2xl p-8">
              <Shield className="h-12 w-12 text-accent-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Bảo Mật Tuyệt Đối</h3>
              <p className="text-muted-foreground">
                Dữ liệu của bạn được mã hóa và bảo vệ với công nghệ bảo mật hàng đầu thế giới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-shadow mb-6">
              Cách Hoạt Động
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chỉ với 3 bước đơn giản, bạn đã có thể sử dụng sức mạnh AI để tối ưu hóa công việc
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-teal">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Chọn Công Cụ</h3>
              <p className="text-muted-foreground">
                Lựa chọn công cụ AI phù hợp với nhu cầu của bạn từ thư viện đa dạng
              </p>
            </div>

            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-pink">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nhập Dữ Liệu</h3>
              <p className="text-muted-foreground">
                Cung cấp thông tin đầu vào qua text, hình ảnh hoặc tệp tin
              </p>
            </div>

            <div className="text-center">
              <div className="glass rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nhận Kết Quả</h3>
              <p className="text-muted-foreground">
                AI xử lý và trả về kết quả chất lượng cao trong vài giây
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-shadow mb-6">
              Công Cụ Nổi Bật
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Những công cụ AI được yêu thích nhất bởi cộng đồng người dùng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soạn Thảo Email",
                description: "Tạo email chuyên nghiệp với AI trong vài giây",
                category: "Văn phòng"
              },
              {
                title: "Phân Tích Hình Ảnh",
                description: "Trích xuất thông tin chi tiết từ hình ảnh",
                category: "Thiết kế"
              },
              {
                title: "Tổng Hợp Văn Bản",
                description: "Tóm tắt nội dung dài thành những điểm chính",
                category: "Học tập"
              },
              {
                title: "Dịch Thuật Thông Minh",
                description: "Dịch đa ngôn ngữ với độ chính xác cao",
                category: "Truyền thông"
              },
              {
                title: "Tạo Nội Dung Marketing",
                description: "Viết quảng cáo, post mạng xã hội chuyên nghiệp",
                category: "Marketing"
              },
              {
                title: "Phân Tích Tài Chính",
                description: "Đọc hiểu và phân tích báo cáo tài chính",
                category: "Kế toán"
              }
            ].map((tool, index) => (
              <div key={index} className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent-teal/20 text-accent-teal">
                    {tool.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                <Button variant="outline" size="sm" className="glass border-glass-border text-foreground">
                  Thử Ngay
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-shadow mb-6">
            Dành Cho Mọi Lĩnh Vực
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            AIO-D2VN phục vụ đa dạng ngành nghề với các công cụ chuyên biệt
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Giáo Dục", "Thiết Kế", "Văn Phòng", "Xây Dựng",
              "Truyền Thông", "Marketing", "Kế Toán", "Ngân Hàng"
            ].map((industry, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-6">
                <Users className="h-8 w-8 text-accent-teal mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-shadow mb-6">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Văn A",
                role: "Marketing Manager",
                content: "AIO-D2VN đã giúp tôi tiết kiệm 80% thời gian trong việc tạo nội dung marketing. Thật tuyệt vời!",
                rating: 5
              },
              {
                name: "Trần Thị B",
                role: "Graphic Designer", 
                content: "Công cụ phân tích hình ảnh rất chính xác và hữu ích cho công việc thiết kế của tôi.",
                rating: 5
              },
              {
                name: "Lê Minh C",
                role: "Content Creator",
                content: "Giao diện đẹp, dễ sử dụng và kết quả AI luôn vượt ngoài mong đợi. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass glass-hover rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-pink fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-shadow mb-6">
              Sẵn Sàng Bùng Nổ Năng Suất?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tham gia cùng hàng nghìn người dùng đã tin tưởng AIO-D2VN để tối ưu hóa công việc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg">
                Bắt Đầu Miễn Phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="glass border-glass-border text-foreground px-8 py-4 text-lg">
                Tìm Hiểu Thêm
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
