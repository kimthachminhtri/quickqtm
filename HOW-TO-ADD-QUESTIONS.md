# HƯỚNG DẪN THÊM CÂU HỎI VÀO QUESTIONS.JS 📝

## Trạng Thái Hiện Tại

✅ **Đã thêm xong**: AD Objects (10 câu), PowerShell (10 câu)  
⏳ **Còn cần thêm**: Storage (5 câu), File Sharing (5 câu)

## Cách 1: Copy Từ File additional-questions.js (Khuyên Dùng)

### Bước 1: Mở 2 Files

1. Mở `js/questions.js` trong editor (VS Code, Notepad++, etc.)
2. Mở `additional-questions.js` để copy câu hỏi

### Bước 2: Thêm Câu Hỏi Cho Storage

#### Tìm storage section trong questions.js:

Tìm dòng này (khoảng dòng 506-570):
```javascript
    // Bài 9: Quản lý ổ đĩa
    storage: [
        {
            id: 31,
            // ... 5 câu hiện có
        }
    ],
```

#### Thêm 5 câu mới TRƯỚC dấu `],`:

Copy từ `additional-questions.js` section `storageAdditional` và paste vào trước `],`

**Kết quả:**
```javascript
    storage: [
        {
            id: 31,
            // ... câu 1 cũ
        },
        // ... câu 2-5 cũ
        {
            id: 35,
            // ... câu 5 cũ
        },
        {
            id: 36,
            question: "RAID 10 (RAID 1+0) kết hợp tính năng gì?",
            // ... copy từ additional-questions.js
        },
        {
            id: 37,
            // ... câu tiếp theo
        },
        {
            id: 38,
            // ... 
        },
        {
            id: 39,
            // ...
        },
        {
            id: 40,
            question: "Data Deduplication trong Windows Server 2012 làm gì?",
            // ... câu cuối
        }
    ],
```

### Bước 3: Thêm Câu Hỏi Cho File Sharing

#### Tìm file-sharing section (khoảng dòng 570-633):

```javascript
    // Bài 10: File Sharing & Permissions
    "file-sharing": [
        {
            id: 36,
            // ... 5 câu hiện có (id 36-40)
        }
    ],
```

**LƯU Ý**: File sharing hiện tại đã dùng id 36-40, cần đổi thành id mới!

#### Đổi ID của file-sharing cũ:

Đổi id từ 36-40 thành 41-45:
- id: 36 → 41
- id: 37 → 42
- id: 38 → 43
- id: 39 → 44
- id: 40 → 45

#### Thêm 5 câu mới (id 46-50):

Copy từ `additional-questions.js` section `fileSharingAdditional` nhưng đổi id từ 41-45 thành 46-50.

**Kết quả:**
```javascript
    "file-sharing": [
        {
            id: 41,  // Đã đổi từ 36
            question: "NTFS Permission gồm những quyền cơ bản nào?",
            // ...
        },
        // ... câu 42-45 (câu cũ đã đổi id)
        {
            id: 46,  // Câu mới
            question: "Access-based Enumeration (ABE) trong file sharing làm gì?",
            // ...
        },
        // ... câu 47-50 (câu mới)
    ],
```

### Bước 4: Save và Test

1. Save file `questions.js`
2. Mở `check-questions-count.html` trong trình duyệt
3. Kiểm tra xem tất cả topics đã có 10 câu chưa

---

## Cách 2: Sử Dụng Script Tự Động (Nâng Cao)

Nếu biết Node.js, có thể chạy script này:

```javascript
const fs = require('fs');

// Read questions.js
let content = fs.readFileSync('js/questions.js', 'utf8');

// Read additional questions
const additional = fs.readFileSync('additional-questions.js', 'utf8');

// Extract storage questions
const storageMatch = additional.match(/const storageAdditional = \[([\s\S]*?)\];/);
const storageQuestions = storageMatch[1];

// Extract file-sharing questions  
const fileSharingMatch = additional.match(/const fileSharingAdditional = \[([\s\S]*?)\];/);
const fileSharingQuestions = fileSharingMatch[1];

// Insert into questions.js
// ... (implementation details)

fs.writeFileSync('js/questions.js', content);
console.log('✅ Questions added successfully!');
```

---

## Cách 3: Chấp Nhận Hiện Trạng (Dễ Nhất)

Nếu không muốn sửa:
- AD Objects: 10 câu ✅
- PowerShell: 10 câu ✅
- Storage: 5 câu ⚠️
- File Sharing: 5 câu ⚠️

Website vẫn hoạt động tốt! User chỉ thấy ít câu hơn một chút cho 2 topics này.

---

## Template Để Copy-Paste

### Storage Question Template:
```javascript
        {
            id: XX,
            question: "Câu hỏi ở đây?",
            answers: [
                "Đáp án A",
                "Đáp án B",
                "Đáp án C",
                "Đáp án D"
            ],
            correct: 0,  // Index của đáp án đúng (0-3)
            explanation: "Giải thích ở đây."
        },
```

**Lưu ý**: 
- Câu cuối cùng trong array KHÔNG có dấu phẩy sau `}`
- Câu ở giữa CÓ dấu phẩy sau `}`

---

## Kiểm Tra Sau Khi Thêm

### 1. Syntax Check:
Mở `index.html` trong trình duyệt và check Console (F12):
- Không có lỗi màu đỏ → OK ✅
- Có lỗi syntax → Kiểm tra dấu phẩy, ngoặc {}[]

### 2. Count Check:
Mở `check-questions-count.html`:
- Storage: 10 câu ✅
- File Sharing: 10 câu ✅
- Total: 200 câu ✅

### 3. Function Check:
- Click vào Storage topic card
- Phải load được 10 câu
- Click vào File Sharing topic card  
- Phải load được 10 câu

---

## Lỗi Thường Gặp

### Lỗi 1: Syntax Error
```
Uncaught SyntaxError: Unexpected token
```
**Nguyên nhân**: Thiếu/thừa dấu phẩy hoặc ngoặc  
**Giải pháp**: Kiểm tra lại syntax, đảm bảo đúng format JSON

### Lỗi 2: Duplicate ID
```
Warning: Question id XX is duplicated
```
**Nguyên nhân**: 2 câu hỏi có cùng id  
**Giải pháp**: Đổi id cho unique

### Lỗi 3: Questions không load
**Nguyên nhân**: ID không theo thứ tự hoặc topic key sai  
**Giải pháp**: Kiểm tra lại topic key và id sequence

---

## Support

Nếu gặp khó khăn:
1. Check file `additional-questions.js` có 20 câu mẫu
2. Đọc file `QUESTIONS-ADDED.md` để xem câu hỏi chi tiết
3. Sử dụng `check-questions-count.html` để verify

---

## Timeline

- ⏱️ Thêm 5 câu cho Storage: **10-15 phút**
- ⏱️ Thêm 5 câu cho File Sharing: **10-15 phút**
- ⏱️ Test và verify: **5 phút**
- **Tổng**: 25-35 phút

---

## Kết Luận

✅ **Đã thêm**: 10 câu (AD Objects + PowerShell)  
⏳ **Còn lại**: 10 câu (Storage + File Sharing)  
🎯 **Mục tiêu**: 200 câu tổng cộng (20 topics × 10 câu)

**Chúc bạn thành công!** 🎉
