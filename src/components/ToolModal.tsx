import { useState, useRef } from 'react';
import { X, Upload, Copy, Download, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: {
    title: string;
    type: 'text' | 'image' | 'email';
  };
}

const ToolModal = ({ isOpen, onClose, tool }: ToolModalProps) => {
  const [inputText, setInputText] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log('File uploaded:', file.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    const items = Array.from(e.clipboardData?.items || []);
    const imageItem = items.find(item => item.type.indexOf('image') !== -1);
    
    if (imageItem) {
      const file = imageItem.getAsFile();
      if (file) {
        handleFileUpload(file);
      }
    }
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (tool.type === 'email') {
      setResult(`Kính gửi [Tên người nhận],

Tôi viết email này để ${inputText.toLowerCase()}.

Tôi hy vọng bạn đang có một ngày tốt lành. Qua email này, tôi muốn chia sẻ với bạn về một cơ hội thú vị mà tôi nghĩ bạn sẽ quan tâm.

Chúng tôi hiện đang phát triển một dự án mới và rất mong được hợp tác với bạn. Dự án này không chỉ mang lại giá trị thiết thực mà còn tạo ra những trải nghiệm tuyệt vời cho người dùng.

Tôi rất mong được nghe phản hồi từ bạn và hy vọng chúng ta có thể sắp xếp một cuộc gặp để thảo luận chi tiết hơn.

Trân trọng,
[Tên của bạn]`);
    } else if (tool.type === 'image') {
      setResult('Hình ảnh đã được xử lý thành công! Kết quả được tối ưu hóa với chất lượng cao.');
    } else {
      setResult(`Đây là kết quả được tạo ra từ AI cho nội dung: "${inputText}"`);
    }
    
    setIsProcessing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    console.log('Content copied to clipboard');
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.title.toLowerCase().replace(/\s+/g, '-')}-result.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl glass rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground text-shadow">
            {tool.title}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {tool.type === 'image' ? (
            <div className="space-y-4">
              <Label className="text-foreground text-shadow">
                Tải lên hình ảnh hoặc dán từ clipboard
              </Label>
              <div
                ref={dropZoneRef}
                className="border-2 border-dashed border-glass-border rounded-lg p-8 text-center glass-hover cursor-pointer"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current?.click()}
                onPaste={(e) => handlePaste(e as any)}
                tabIndex={0}
              >
                <Upload className="h-12 w-12 text-accent-teal mx-auto mb-4" />
                <p className="text-foreground text-shadow mb-2">
                  Kéo và thả file vào đây, hoặc nhấn để chọn file
                </p>
                <p className="text-muted-foreground text-sm">
                  Hỗ trợ PNG, JPG, GIF. Hoặc nhấn Ctrl+V để dán từ clipboard
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                  }}
                />
              </div>
              
              {uploadedFile && (
                <div className="glass rounded-lg p-4">
                  <p className="text-foreground">
                    <strong>File đã chọn:</strong> {uploadedFile.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Kích thước: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="input-text" className="text-foreground text-shadow">
                {tool.type === 'email' ? 'Nội dung chính của bạn:' : 'Nhập nội dung:'}
              </Label>
              <Textarea
                id="input-text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="glass bg-glass border-glass-border text-foreground min-h-[120px]"
                placeholder={tool.type === 'email' ? 
                  "Ví dụ: giới thiệu sản phẩm mới cho khách hàng" : 
                  "Nhập nội dung cần xử lý..."
                }
              />
            </div>
          )}

          <Button
            onClick={handleProcess}
            disabled={isProcessing || (!inputText.trim() && !uploadedFile)}
            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                Đang xử lý...
              </>
            ) : (
              tool.type === 'email' ? 'Tạo Email' : 'Tạo ra'
            )}
          </Button>

          {result && (
            <div className="space-y-4">
              <Label className="text-foreground text-shadow">
                Kết quả:
              </Label>
              <div className="glass rounded-lg p-4 bg-glass border-glass-border">
                <pre className="text-foreground whitespace-pre-wrap text-sm">
                  {result}
                </pre>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className="flex-1 glass border-glass-border text-foreground"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Sao chép nội dung
                </Button>
                <Button
                  onClick={handleDownload}
                  className="flex-1 bg-accent-teal hover:bg-accent-teal/80 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Tải về máy
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolModal;