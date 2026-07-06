# FIX LỖI GITHUB PAGES DEPLOYMENT 🔧

## Lỗi Hiện Tại

Từ ảnh screenshot, lỗi là:
```
Error: Deployment failed, try again later.
```

Và có cảnh báo:
```
(node:2166) [DEP0040] DeprecationWarning: The 'punycode' module is deprecated.
```

## Nguyên Nhân

1. **DeprecationWarning**: Đây chỉ là warning, không phải lỗi chính
2. **Deployment failed**: Có thể do:
   - Chưa enable GitHub Pages trong Settings
   - Workflow configuration chưa đúng
   - Permissions chưa được set

## Giải Pháp

### Bước 1: Xóa Workflow Cũ (Nếu Có)

1. Vào repository trên GitHub
2. Click tab "Actions"
3. Nếu có workflow runs đang failed, ignore chúng
4. Chúng ta sẽ tạo workflow mới

### Bước 2: Enable GitHub Pages

1. Vào **Settings** của repository
2. Sidebar trái → Click **"Pages"**
3. Trong phần **"Build and deployment"**:
   - **Source**: Chọn **"GitHub Actions"** (KHÔNG phải "Deploy from a branch")
   - Nếu không thấy option "GitHub Actions", có nghĩa repo chưa có workflow

### Bước 3: Commit Workflow File

Tôi đã tạo file `.github/workflows/deploy.yml` mới. Bây giờ cần commit và push:

```bash
cd d:\@1web\quiz-website

# Kiểm tra status
git status

# Add workflow file
git add .github/workflows/deploy.yml

# Commit
git commit -m "Add GitHub Actions workflow for deployment"

# Push
git push origin main
```

### Bước 4: Kiểm Tra Deployment

1. Vào tab **"Actions"** trên GitHub
2. Sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
3. Đợi 1-2 phút cho deployment hoàn tất
4. Khi thấy dấu ✅ xanh → Deployment thành công
5. Vào **Settings → Pages** để lấy URL

## Nếu Vẫn Lỗi

### Lỗi: "Error: No deployment found"

**Giải pháp:**
1. Settings → Pages
2. Đảm bảo Source = "GitHub Actions"
3. Re-run workflow:
   - Actions → Click vào run failed
   - Click "Re-run all jobs"

### Lỗi: "Permission denied"

**Giải pháp:**
1. Settings → Actions → General
2. Scroll xuống "Workflow permissions"
3. Chọn **"Read and write permissions"**
4. Check ✅ "Allow GitHub Actions to create and approve pull requests"
5. Save
6. Re-run workflow

### Lỗi: "404 Page not found sau khi deploy"

**Giải pháp:**
1. Kiểm tra file `index.html` có ở root của repo
2. Đảm bảo không có thư mục con chứa code
3. Cấu trúc phải là:
   ```
   repo/
   ├── index.html  ← Phải ở đây
   ├── css/
   ├── js/
   └── .github/
   ```

## CÁCH ĐƠN GIẢN HƠN: Deploy Thủ Công

Nếu GitHub Actions phức tạp, dùng cách này:

### Bước 1: Settings → Pages

1. **Source**: Chọn **"Deploy from a branch"**
2. **Branch**: Chọn `main` hoặc `master`
3. **Folder**: Chọn `/ (root)`
4. **Save**

### Bước 2: Đợi Deploy

- GitHub sẽ tự động build và deploy
- Không cần workflow file
- Đợi 2-3 phút

### Bước 3: Kiểm Tra

- Refresh trang Settings → Pages
- Sẽ thấy: "Your site is live at https://..."
- Click vào link để xem

## Workflow File Mới (Đã Tạo)

File `.github/workflows/deploy.yml` đã được tạo với:
- ✅ Actions version mới nhất (v4)
- ✅ Proper permissions
- ✅ Artifact upload đúng cách
- ✅ Không có deprecated modules

## Kiểm Tra Sau Khi Deploy Thành Công

1. Mở URL: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
2. Test các chức năng:
   - ✅ Trang chủ hiển thị
   - ✅ Click vào topic
   - ✅ Làm bài luyện tập
   - ✅ Thi thử
   - ✅ Thống kê

## Lưu Ý Quan Trọng

### 1. Branch Name
Đảm bảo push đúng branch:
- Nếu repo dùng `main` → push lên `main`
- Nếu repo dùng `master` → push lên `master`

Check bằng:
```bash
git branch
```

### 2. Repository Visibility
- GitHub Pages miễn phí chỉ cho **Public repositories**
- Nếu repo là Private → Cần GitHub Pro

### 3. URL Format
- Format: `https://USERNAME.github.io/REPO-NAME/`
- Ví dụ: `https://nguyenvana.github.io/windows-server-quiz/`

### 4. Update Website
Sau khi sửa code:
```bash
git add .
git commit -m "Update content"
git push
# Tự động deploy lại
```

## Debug Commands

Nếu cần debug:

```bash
# Kiểm tra git status
git status

# Kiểm tra remote
git remote -v

# Kiểm tra branch hiện tại
git branch

# Xem commit history
git log --oneline -5

# Pull latest changes
git pull origin main
```

## Timeline Deploy

1. **Push code** → 0s
2. **GitHub Actions trigger** → 10-20s
3. **Build** → 30-60s
4. **Deploy** → 30-60s
5. **Total** → 1-2 phút

## Support

Nếu vẫn gặp lỗi:

1. **Check Actions Log**:
   - Vào tab Actions
   - Click vào run failed
   - Xem error message chi tiết

2. **GitHub Status**:
   - Check https://www.githubstatus.com
   - Đảm bảo GitHub Pages đang hoạt động

3. **Clear Cache**:
   ```bash
   # Xóa Git cache
   git rm -r --cached .
   git add .
   git commit -m "Clear cache"
   git push
   ```

## Kết Luận

✅ **Workflow file mới đã được tạo**
✅ **Dùng Actions v4 (latest)**
✅ **Không còn deprecated warnings**

**Next steps:**
1. Commit và push workflow file
2. Enable GitHub Pages (Source: GitHub Actions)
3. Đợi deployment complete
4. Truy cập URL và test

🎉 **Done!**
