# HƯỚNG DẪN DEPLOY NHANH ⚡

## ✅ ĐÃ SỬA LỖI - LÀM THEO CÁC BƯỚC SAU

---

## CÁCH 1: GITHUB ACTIONS (Khuyên Dùng) 🚀

### Bước 1: Commit Workflow File Mới

```bash
cd d:\@1web\quiz-website

git add .github/workflows/deploy.yml
git add .gitignore
git commit -m "Fix deployment: Add new workflow file"
git push origin main
```

Nếu branch của bạn là `master` thay vì `main`:
```bash
git push origin master
```

### Bước 2: Enable GitHub Actions trên GitHub

1. Mở repository trên GitHub
2. Click **Settings** (tab bánh răng)
3. Sidebar trái → Click **Pages**
4. Trong phần **"Build and deployment"**:
   - **Source**: Chọn **"GitHub Actions"** ← QUAN TRỌNG!
   - (Không phải "Deploy from a branch")
5. Không cần click Save, tự động lưu

### Bước 3: Đợi Deploy

1. Click tab **Actions** (ở trên cùng)
2. Sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
3. Đợi 1-2 phút
4. Khi thấy dấu ✅ màu xanh → Deploy thành công!

### Bước 4: Lấy URL

1. Quay lại **Settings → Pages**
2. Sẽ thấy: 
   ```
   Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```
3. Click vào link để xem website

---

## CÁCH 2: DEPLOY FROM BRANCH (Đơn Giản Hơn) 🎯

Nếu GitHub Actions phức tạp, dùng cách này:

### Bước 1: Settings → Pages

1. Mở repository trên GitHub
2. Click **Settings**
3. Sidebar trái → Click **Pages**
4. Trong phần **"Build and deployment"**:
   - **Source**: Chọn **"Deploy from a branch"**
   - **Branch**: Chọn `main` (hoặc `master`)
   - **Folder**: Chọn `/ (root)`
5. Click **Save**

### Bước 2: Đợi

- Đợi 2-3 phút
- Refresh trang
- Sẽ thấy link website

---

## NẾU GẶP LỖI PERMISSIONS ⚠️

### Fix Permissions:

1. **Settings → Actions → General**
2. Scroll xuống phần **"Workflow permissions"**
3. Chọn: ✅ **"Read and write permissions"**
4. Check: ✅ **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**
6. Quay lại **Actions** tab → Click **Re-run all jobs**

---

## KIỂM TRA KẾT QUẢ ✅

Sau khi deploy thành công, mở URL và test:

1. ✅ Trang chủ hiển thị 13 topic cards
2. ✅ Click vào topic → Chuyển sang practice mode
3. ✅ Làm bài và nộp → Hiển thị kết quả
4. ✅ Thi thử hoạt động với timer
5. ✅ Thống kê lưu và hiển thị
6. ✅ Console không có lỗi (F12)

---

## TIMELINE ⏱️

- **Commit & Push**: 1 phút
- **GitHub Actions Build**: 1-2 phút
- **Deploy**: 1 phút
- **Total**: 3-4 phút

---

## UPDATE WEBSITE SAU NÀY 🔄

Khi muốn cập nhật nội dung:

```bash
# 1. Sửa code trong thư mục local
# 2. Commit và push:

git add .
git commit -m "Update questions"
git push origin main

# 3. Tự động deploy lại (1-2 phút)
```

---

## URL CỦA BẠN 🔗

Sau khi deploy, URL sẽ có dạng:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

**Ví dụ**:
- Username: `nguyenvana`
- Repo: `windows-server-quiz`
- URL: `https://nguyenvana.github.io/windows-server-quiz/`

---

## COMMANDS THAM KHẢO 📋

```bash
# Kiểm tra branch hiện tại
git branch

# Kiểm tra remote
git remote -v

# Kiểm tra status
git status

# Add tất cả files
git add .

# Commit
git commit -m "Your message"

# Push
git push origin main
# hoặc
git push origin master

# Pull latest
git pull origin main
```

---

## TÓM TẮT NHANH 🎯

### Cho GitHub Actions:
```bash
cd d:\@1web\quiz-website
git add .github/workflows/deploy.yml
git commit -m "Add deployment workflow"
git push origin main
```
→ Settings → Pages → Source: "GitHub Actions"

### Cho Deploy from Branch:
→ Settings → Pages → Source: "Deploy from a branch" → Branch: main → Save

---

## SOS 🆘

**Lỗi "Deployment failed"?**
→ Đọc file `GITHUB-PAGES-FIX.md`

**Lỗi Permissions?**
→ Settings → Actions → General → Read and write permissions

**404 Not Found?**
→ Đảm bảo `index.html` ở root của repo

**Workflow không chạy?**
→ Actions → Re-run all jobs

---

## DONE! ✨

Làm theo các bước trên là website sẽ live trong vài phút!

**Good luck!** 🚀
