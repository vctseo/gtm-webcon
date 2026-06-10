import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Plus, Search, Clock, Trash2, Copy, Edit, FileCode, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSavedScripts, deleteScript, type SavedScript } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [search, setSearch] = useState("");
  const [savedScripts, setSavedScripts] = useState<SavedScript[]>(() => getSavedScripts());
  const { toast } = useToast();

  const filteredSaved = useMemo(() => {
    if (!search) return savedScripts;
    const q = search.toLowerCase();
    return savedScripts.filter(
      (s) =>
        s.websiteName.toLowerCase().includes(q) ||
        s.templateName.toLowerCase().includes(q)
    );
  }, [savedScripts, search]);

  const handleDelete = (id: string, name: string) => {
    deleteScript(id);
    setSavedScripts(getSavedScripts());
    toast({ title: "Đã xóa", description: `Script "${name}" đã được xóa.` });
  };

  const handleCopyScript = async (script: string, name: string) => {
    await navigator.clipboard.writeText(script);
    toast({ title: "Đã copy!", description: `Script "${name}" đã được copy vào clipboard.` });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <FileCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-none">GTM Script Manager</h1>
              <p className="text-xs text-gray-500">Quản lý script Google Tag Manager</p>
            </div>
          </div>
          <Link href="/new">
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Tạo script mới
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="space-y-3">
        {/* #1 — Kho & Liên hệ */}
        <Link href="/template/warehouse-contact">
          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-5 py-4 cursor-pointer hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm group">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white">1</div>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg">🏪</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-snug">[Trang Chủ] Trang trí trang chủ, popup</p>
              <p className="text-xs text-blue-200 mt-0.5">4 script tổng hợp: địa chỉ bảo hành, nút Zalo/gọi cố định, footer liên hệ và popup đăng nhập</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </Link>

        {/* #2 — Bulk Copy Tool */}
        <Link href="/bulk-replace">
          <div className="flex items-center gap-4 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl px-5 py-4 cursor-pointer hover:from-violet-700 hover:to-violet-600 transition-all shadow-sm group">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white">2</div>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-snug">[Trang sản phẩm] Trang trí trang sản phẩm</p>
              <p className="text-xs text-violet-200 mt-0.5">Nhập tên thương hiệu + số điện thoại → thay thế 20 vị trí trong script tổng hợp → copy & dán vào GTM</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </Link>

        {/* #3 — Sản phẩm trang chủ (tổng hợp) */}
        <Link href="/template/home-product">
          <div className="flex items-center gap-4 bg-gradient-to-r from-pink-600 to-rose-500 rounded-xl px-5 py-4 cursor-pointer hover:from-pink-700 hover:to-rose-600 transition-all shadow-sm group">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white">3</div>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg">🛍️</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-snug">[Sản phẩm trang chủ] Tổng hợp 3 script</p>
              <p className="text-xs text-pink-100 mt-0.5">Widget bán chạy + banner Gợi Ý Hôm Nay + bo góc thẻ & nút xem giá sỉ</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </Link>

        {/* #4 — Sản phẩm bán chạy hôm nay */}
        <Link href="/template/home-bestseller">
          <div className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-5 py-4 cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all shadow-sm group">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white">4</div>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg">🔥</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-snug">🔥 Sản phẩm bán chạy hôm nay</p>
              <p className="text-xs text-orange-100 mt-0.5">Widget cuộn ngang 6 sản phẩm bán chạy từ lưới trang chủ, thanh tiến trình Đã Bán X%</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </Link>

        {/* #5 — Gợi Ý Hôm Nay banner */}
        <Link href="/template/home-goi-y-banner">
          <div className="flex items-center gap-4 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl px-5 py-4 cursor-pointer hover:from-amber-600 hover:to-orange-500 transition-all shadow-sm group">
            <div className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white">5</div>
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg">✨</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-snug">✨ Gợi Ý Hôm Nay — Banner trang chủ</p>
              <p className="text-xs text-amber-100 mt-0.5">Banner gradient GỢI Ý HÔM NAY / Dành riêng cho bạn, hiện phía trên section gợi ý</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </Link>

        </div>

        {/* Saved Scripts Section */}
        <section>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <h2 className="text-base font-semibold text-gray-900">Script đã lưu</h2>
              <Badge variant="secondary" className="text-xs">{savedScripts.length}</Badge>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Tìm script..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-8 text-sm"
              />
            </div>
          </div>

          {filteredSaved.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <FileCode className="w-10 h-10 mx-auto mb-3 opacity-40" />
              {savedScripts.length === 0 ? (
                <>
                  <p className="text-sm font-medium">Chưa có script nào được lưu</p>
                  <p className="text-xs mt-1">Chọn một template ở trên để bắt đầu tạo script</p>
                </>
              ) : (
                <p className="text-sm">Không tìm thấy script phù hợp</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSaved.map((saved) => (
                <Card key={saved.id} className="group">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <CardTitle className="text-sm font-semibold text-gray-900 leading-snug truncate">
                          {saved.websiteName || "Chưa đặt tên"}
                        </CardTitle>
                        <CardDescription className="text-xs truncate">{saved.templateName}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => handleCopyScript(saved.generatedScript, saved.websiteName)}
                          title="Copy script"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </Button>
                        <Link href={`/edit/${saved.id}`}>
                          <Button size="icon" variant="ghost" className="h-7 w-7" title="Chỉnh sửa">
                            <Edit className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDelete(saved.id, saved.websiteName)}
                          title="Xóa"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400">
                        {new Date(saved.updatedAt).toLocaleDateString("vi-VN", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs gap-1.5"
                        onClick={() => handleCopyScript(saved.generatedScript, saved.websiteName)}
                      >
                        <Copy className="w-3 h-3" />
                        Copy script
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
