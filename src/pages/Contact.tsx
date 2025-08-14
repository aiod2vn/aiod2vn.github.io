import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SettingsPanel from '@/components/SettingsPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation onSettingsClick={() => setIsSettingsOpen(true)} />
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-shadow mb-6">
              Liên Hệ <span className="gradient-text">Với Chúng Tôi</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Có câu hỏi hay cần hỗ trợ? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-accent-teal" />
                <h2 className="text-2xl font-bold text-foreground">Gửi Tin Nhắn</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Họ và tên *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass bg-glass border-glass-border text-foreground"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email của bạn *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass bg-glass border-glass-border text-foreground"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Chủ đề
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass bg-glass border-glass-border text-foreground"
                    placeholder="Tôi cần hỗ trợ về..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Nội dung tin nhắn *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass bg-glass border-glass-border text-foreground resize-none"
                    placeholder="Vui lòng mô tả chi tiết vấn đề của bạn..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Gửi Tin Nhắn
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Thông Tin Liên Lạc
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-teal/20 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent-teal" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">support@aio-d2vn.com</p>
                      <p className="text-muted-foreground">business@aio-d2vn.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-pink/20 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent-pink" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Điện thoại</h3>
                      <p className="text-muted-foreground">+84 (0) 123 456 789</p>
                      <p className="text-muted-foreground">+84 (0) 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent-purple" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Địa chỉ</h3>
                      <p className="text-muted-foreground">
                        Tầng 10, Tòa nhà ABC<br />
                        123 Đường Nguyễn Du, Quận 1<br />
                        TP. Hồ Chí Minh, Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Giờ làm việc</h3>
                      <p className="text-muted-foreground">
                        Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                        Thứ 7: 9:00 - 17:00<br />
                        Chủ nhật: Nghỉ
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Hỗ Trợ Nhanh
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass-hover rounded-lg cursor-pointer">
                    <div>
                      <h3 className="font-semibold text-foreground">Hướng dẫn sử dụng</h3>
                      <p className="text-sm text-muted-foreground">Tài liệu chi tiết về cách sử dụng</p>
                    </div>
                    <Button variant="outline" size="sm" className="glass border-glass-border">
                      Xem
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 glass-hover rounded-lg cursor-pointer">
                    <div>
                      <h3 className="font-semibold text-foreground">FAQ</h3>
                      <p className="text-sm text-muted-foreground">Câu hỏi thường gặp</p>
                    </div>
                    <Button variant="outline" size="sm" className="glass border-glass-border">
                      Xem
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 glass-hover rounded-lg cursor-pointer">
                    <div>
                      <h3 className="font-semibold text-foreground">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Chat trực tiếp với support</p>
                    </div>
                    <Button variant="outline" size="sm" className="glass border-glass-border">
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;