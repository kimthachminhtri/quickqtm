# HƯỚNG DẪN TRIỂN KHAI LÊN HOSTING MIỄN PHÍ 🚀

## Ngày: 6 tháng 7, 2026

---

## 🌟 KHUYÊN DÙNG: GitHub Pages (Miễn Phí 100%)

### ✅ Ưu điểm:
- ✅ Hoàn toàn miễn phí
- ✅ Tốc độ nhanh, CDN toàn cầu
- ✅ HTTPS tự động
- ✅ Custom domain miễn phí
- ✅ Không giới hạn bandwidth
- ✅ Dễ cập nhật (git push)

### 📋 Yêu Cầu:
- Tài khoản GitHub (đăng ký miễn phí tại https://github.com)
- Git đã cài đặt (hoặc dùng GitHub Desktop)

---

## CÁCH 1: GITHUB PAGES (KHUYÊN DÙNG) 🎯

### Bước 1: Tạo Repository GitHub

1. **Đăng nhập GitHub**: https://github.com
2. **Click nút "New"** hoặc dấu "+" → "New repository"
3. **Đặt tên repository**: 
   - Ví dụ: `windows-server-quiz`
   - Hoặc dùng tên bất kỳ
4. **Chọn "Public"** (bắt buộc cho GitHub Pages miễn phí)
5. **KHÔNG check** "Add a README file"
6. **Click "Create repository"**

### Bước 2: Upload Code Lên GitHub

#### Cách 2A: Dùng Git Command Line

```bash
# Mở Terminal/Command Prompt trong thư mục quiz-website
cd d:\@1web\quiz-website

# Khởi tạo git repository
git init

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Tạo file .gitignore
echo "*.backup" > .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "Thumbs.db" >> .gitignore

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - Windows Server 2012 Quiz Website"

# Push lên GitHub (thay main bằng master nếu cần)
git branch -M main
git push -u origin main
```

#### Cách 2B: Dùng GitHub Desktop (Dễ hơn)

1. **Download GitHub Desktop**: https://desktop.github.com
2. **Cài đặt và đăng nhập**
3. **File → Add Local Repository**
4. **Chọn thư mục**: `d:\@1web\quiz-website`
5. **Nếu chưa có git, click "Create a repository"**
6. **Publish repository** → Chọn tên → Public → Publish

#### Cách 2C: Dùng GitHub Web (Không cần Git)

1. **Vào repository vừa tạo trên GitHub**
2. **Click "uploading an existing file"**
3. **Kéo thả TẤT CẢ files và folders** từ `d:\@1web\quiz-website`
4. **Scroll xuống, ghi "Initial commit"**
5. **Click "Commit changes"**

### Bước 3: Kích Hoạt GitHub Pages

1. **Vào repository trên GitHub**
2. **Click tab "Settings"** (bánh răng)
3. **Sidebar bên trái → Click "Pages"**
4. **Trong "Source":**
   - Branch: Chọn `main` (hoặc `master`)
   - Folder: Chọn `/ (root)`
5. **Click "Save"**
6. **Đợi 1-2 phút**
7. **Refresh trang → Sẽ thấy link:**
   ```
   Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Bước 4: Truy Cập Website

- **URL**: https://YOUR_USERNAME.github.io/YOUR_REPO/
- Ví dụ: https://nguyenvana.github.io/windows-server-quiz/

### Bước 5: Custom Domain (Tùy chọn)

Nếu bạn có tên miền riêng (ví dụ: quizserver.com):

1. **Settings → Pages → Custom domain**
2. **Nhập tên miền**: `quizserver.com`
3. **Save**
4. **Cấu hình DNS** tại nhà cung cấp domain:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

---

## CÁCH 2: NETLIFY (Dễ Nhất) 🌐

### ✅ Ưu điểm:
- Drag & drop, siêu dễ
- HTTPS miễn phí
- Custom domain
- Auto deploy khi update

### 📋 Bước Thực Hiện:

1. **Truy cập**: https://www.netlify.com
2. **Sign up** (dùng email hoặc GitHub)
3. **Click "Add new site" → "Deploy manually"**
4. **Kéo thả thư mục** `d:\@1web\quiz-website` vào khung
5. **Đợi deploy (1-2 phút)**
6. **Nhận được link**: https://random-name-123.netlify.app
7. **Custom domain**: Site settings → Domain management → Add custom domain

### Cập Nhật:
- Kéo thả lại thư mục mới vào là xong!

---

## CÁCH 3: VERCEL 🎨

### ✅ Ưu điểm:
- Cực nhanh
- HTTPS miễn phí
- Analytics miễn phí

### 📋 Bước Thực Hiện:

1. **Truy cập**: https://vercel.com
2. **Sign up** (khuyên dùng GitHub)
3. **Click "Add New..." → "Project"**
4. **Import từ GitHub** (nếu đã push lên GitHub)
   - Hoặc **Drag & Drop** thư mục vào
5. **Deploy** (tự động)
6. **Nhận link**: https://your-project.vercel.app

---

## CÁCH 4: RENDER 🔥

### ✅ Ưu điểm:
- Miễn phí không giới hạn
- Auto SSL

### 📋 Bước Thực Hiện:

1. **Truy cập**: https://render.com
2. **Sign up**
3. **Dashboard → New → Static Site**
4. **Connect repository** (từ GitHub)
5. **Deploy**

---

## CÁCH 5: FIREBASE HOSTING 🔥

### ✅ Ưu điểm:
- Google infrastructure
- Cực nhanh
- HTTPS miễn phí

### 📋 Bước Thực Hiện:

1. **Cài Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**:
   ```bash
   firebase login
   ```

3. **Khởi tạo** (trong thư mục quiz-website):
   ```bash
   cd d:\@1web\quiz-website
   firebase init hosting
   ```
   - Chọn "Create a new project" hoặc project có sẵn
   - Public directory: Nhấn Enter (dùng thư mục hiện tại)
   - Configure as SPA: No
   - Overwrite index.html: No

4. **Deploy**:
   ```bash
   firebase deploy
   ```

5. **Nhận link**: https://your-project.web.app

---

## SO SÁNH CÁC LỰA CHỌN 📊

| Platform | Dễ Dùng | Tốc Độ | HTTPS | Custom Domain | Cập Nhật | Khuyên Dùng |
|----------|---------|--------|-------|---------------|----------|-------------|
| **GitHub Pages** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ Miễn phí | Git push | ✅ #1 |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ Miễn phí | Drag & drop | ✅ #2 |
| **Vercel** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ Miễn phí | Git push | ⭐⭐⭐ |
| **Render** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | ✅ Miễn phí | Git push | ⭐⭐ |
| **Firebase** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ Miễn phí | CLI | ⭐⭐⭐ |

---

## KHUYẾN NGHỊ THEO TRƯỜNG HỢP 🎯

### 1. Nếu bạn biết dùng Git:
→ **GitHub Pages** (Tốt nhất, ổn định lâu dài)

### 2. Nếu bạn muốn siêu dễ, không cần Git:
→ **Netlify** (Kéo thả là xong)

### 3. Nếu bạn cần tốc độ cực nhanh:
→ **Vercel** hoặc **Firebase**

### 4. Nếu bạn muốn custom domain ngay:
→ **Netlify** hoặc **Vercel** (setup đơn giản nhất)

---

## CHUẨN BỊ FILE TRƯỚC KHI DEPLOY 📦

### 1. Tạo file `.gitignore`:

```
# Backup files
*.backup
*.bak
*~

# Debug files
test-debug.html
debug.html
test-buttons.html

# Documentation (optional - có thể giữ)
# *.md

# OS files
.DS_Store
Thumbs.db
desktop.ini

# Editor files
.vscode/
.idea/
*.swp
*.swo
```

### 2. Kiểm tra cấu trúc thư mục:

```
quiz-website/
├── index.html          ✅ Bắt buộc
├── css/
│   └── style.css      ✅ Bắt buộc
├── js/
│   ├── app.js         ✅ Bắt buộc
│   └── questions.js   ✅ Bắt buộc
├── README.md          ⭐ Khuyên có
└── .gitignore         ⭐ Khuyên có
```

### 3. Test local trước:
- Mở `index.html` trong trình duyệt
- Test tất cả chức năng
- Kiểm tra Console không có lỗi

---

## SAU KHI DEPLOY 🎉

### 1. Kiểm tra website:
- ✅ Trang chủ load đúng
- ✅ Tất cả 13 topic cards hiển thị
- ✅ Click vào topic → Load câu hỏi
- ✅ Nộp bài → Hiển thị kết quả
- ✅ Thi thử hoạt động
- ✅ Thống kê hoạt động

### 2. Test trên nhiều devices:
- Desktop
- Mobile (responsive)
- Tablet

### 3. Share link:
```
🎓 Windows Server 2012 Quiz
📚 170 câu hỏi - 17 chủ đề
🔗 https://your-username.github.io/your-repo/
```

---

## CẬP NHẬT WEBSITE SAU KHI DEPLOY 🔄

### GitHub Pages:
```bash
# Sửa code trong thư mục local
# Sau đó:
git add .
git commit -m "Update questions"
git push
# Đợi 1-2 phút là cập nhật
```

### Netlify:
- Kéo thả lại thư mục mới vào dashboard
- Hoặc connect với GitHub để auto deploy

### Vercel:
- Tự động deploy khi push lên GitHub
- Hoặc dùng Vercel CLI: `vercel --prod`

---

## TROUBLESHOOTING 🔧

### Lỗi: 404 Not Found
**Nguyên nhân**: File index.html không ở root
**Giải pháp**: Đảm bảo index.html nằm ở thư mục gốc

### Lỗi: CSS/JS không load
**Nguyên nhân**: Đường dẫn sai
**Giải pháp**: 
- Dùng relative path: `css/style.css` (không có `/` ở đầu)
- Kiểm tra cấu trúc thư mục

### Lỗi: Questions không hiển thị
**Nguyên nhân**: questions.js không load
**Giải pháp**: 
- Mở Console (F12)
- Check xem có lỗi không
- Đảm bảo file questions.js đã upload

### Lỗi: HTTPS không hoạt động
**Giải pháp**: Đợi 24-48 giờ cho SSL certificate provisioning

---

## VIDEO HƯỚNG DẪN 📺

### GitHub Pages:
https://www.youtube.com/results?search_query=github+pages+tutorial

### Netlify:
https://www.youtube.com/results?search_query=netlify+deploy+tutorial

---

## HỖ TRỢ 💬

Nếu gặp khó khăn, hãy:
1. Đọc kỹ error messages
2. Google error message
3. Hỏi ChatGPT hoặc search Stack Overflow
4. Check documentation của platform đang dùng

---

## KẾT LUẬN ✨

**Khuyên dùng nhất**: 
1. **GitHub Pages** - Nếu biết Git
2. **Netlify** - Nếu muốn đơn giản

Chúc bạn deploy thành công! 🚀

Website của bạn sẽ có URL đẹp và chạy nhanh trên hosting miễn phí!
