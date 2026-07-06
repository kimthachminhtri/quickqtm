# SỬA SỐ CÂU HỎI CHO MỖI TOPIC 📝

## Vấn Đề Phát Hiện

Một số topics có ít hơn 10 câu hỏi (có thể chỉ 5 câu).

## Cách Kiểm Tra

### Bước 1: Mở File Kiểm Tra

Mở file `check-questions-count.html` trong trình duyệt để xem chi tiết số câu hỏi mỗi topic.

File này sẽ hiển thị:
- ✅ Topics có đủ 10 câu (màu xanh)
- ⚠️ Topics thiếu câu hỏi (màu vàng)
- ❌ Topics không có câu hỏi (màu đỏ)

### Bước 2: Xem Kết Quả

Sau khi mở `check-questions-count.html`, bạn sẽ thấy bảng chi tiết với:
- Tên topic
- Số câu hiện tại
- Trạng thái (đủ/thiếu/không có)

## Tổng Số Câu Hỏi Hiện Tại

**Total: 170 câu hỏi** (theo file questions.js)

**Với 19 topics:**
- Trung bình: 170 ÷ 19 = **8.9 câu/topic**
- Nên có: 19 × 10 = **190 câu** (để mỗi topic có 10 câu)
- **Thiếu: 20 câu**

## Giải Pháp

### Option 1: Chấp Nhận Hiện Trạng (Dễ Nhất)

Một số topics có 5-10 câu là bình thường. Không cần phải đều đặn 10 câu mỗi topic.

**Ưu điểm:**
- Không cần sửa gì
- Website vẫn hoạt động tốt
- User vẫn có thể luyện tập

**Nhược điểm:**
- Một số topics sẽ có ít câu hỏi để ôn

### Option 2: Thêm Câu Hỏi Cho Topics Thiếu

Nếu muốn mỗi topic có đủ 10 câu, cần thêm câu hỏi vào `questions.js`.

**Các bước:**

#### 1. Xác định topics thiếu
Mở `check-questions-count.html` để xem topics nào < 10 câu.

#### 2. Tìm tài liệu tham khảo
- Windows Server 2012 documentation
- Microsoft Learn
- Exam prep materials

#### 3. Viết câu hỏi mới

Template cho câu hỏi:
```javascript
{
    id: XXX,  // ID duy nhất
    question: "Câu hỏi ở đây?",
    answers: [
        "Đáp án A",
        "Đáp án B",
        "Đáp án C",
        "Đáp án D"
    ],
    correct: 0,  // Index của đáp án đúng (0-3)
    explanation: "Giải thích tại sao đáp án này đúng."
}
```

#### 4. Thêm vào questions.js

Mở `js/questions.js` và thêm câu hỏi mới vào topic tương ứng.

**Ví dụ:** Nếu topic `powershell` chỉ có 5 câu, thêm 5 câu nữa:

```javascript
powershell: [
    // ... 5 câu hiện có
    {
        id: 16,
        question: "Cmdlet nào dùng để tạo user mới trong AD?",
        answers: [
            "Create-ADUser",
            "New-ADUser",
            "Add-ADUser",
            "Make-ADUser"
        ],
        correct: 1,
        explanation: "New-ADUser là cmdlet chuẩn để tạo user mới trong Active Directory."
    },
    // ... thêm 4 câu nữa
]
```

### Option 3: Điều Chỉnh Logic App

Thay vì luôn lấy 10 câu, có thể điều chỉnh để lấy số câu tùy theo topic.

**Sửa trong `app.js`:**

```javascript
function startPractice(topic) {
    // ...
    const availableQuestions = questionBank[topic] || questionBank.all;
    const questionCount = Math.min(10, availableQuestions.length);
    
    currentQuestions = getQuestionsByTopic(topic, questionCount);
    // ...
}
```

Nhưng cách này không tốt vì user sẽ thấy mỗi topic có số câu khác nhau.

## Khuyến Nghị

### Ngắn Hạn (Bây Giờ):
✅ **Chấp nhận hiện trạng** - Website vẫn hoạt động tốt với 170 câu

### Dài Hạn (Nếu Muốn Hoàn Thiện):
1. Mở `check-questions-count.html`
2. Xác định topics thiếu
3. Viết thêm câu hỏi dần dần
4. Mục tiêu: 190 câu (10 câu/topic)

## Tạm Thời Fix Hiển Thị

Nếu một topic có ít hơn 10 câu, app sẽ tự động lấy số câu có sẵn.

**Trong `getQuestionsByTopic()` đã có logic:**
```javascript
return shuffled.slice(0, Math.min(count, shuffled.length));
```

Nghĩa là:
- Nếu topic có 5 câu, user yêu cầu 10 câu → Lấy 5 câu
- Nếu topic có 12 câu, user yêu cầu 10 câu → Lấy 10 câu

## Cách Thêm Câu Hỏi Nhanh (Template)

Để thêm câu hỏi nhanh, có thể dùng AI (ChatGPT, Claude):

**Prompt:**
```
Tạo 5 câu hỏi trắc nghiệm về PowerShell trong Windows Server 2012.
Mỗi câu có 4 đáp án, 1 đáp án đúng, và giải thích chi tiết.
Format JSON như sau:
{
    "question": "...",
    "answers": ["A", "B", "C", "D"],
    "correct": 0,
    "explanation": "..."
}
```

## Timeline

### Nếu muốn hoàn thiện:
- ⏱️ Xác định topics thiếu: **5 phút**
- ⏱️ Viết 1 câu hỏi: **2-3 phút**
- ⏱️ Tổng cộng cần: **40-60 phút** (để viết 20 câu thiếu)

## Kết Luận

**Không cần phải lo lắng quá nhiều!**

Website vẫn hoạt động tốt với số câu hỏi hiện tại. User vẫn có thể:
- ✅ Luyện tập theo từng topic
- ✅ Làm thi thử
- ✅ Xem thống kê
- ✅ Review đáp án

Chỉ cần lưu ý:
- 📝 Một số topics có thể có 5-9 câu thay vì 10
- 📝 User vẫn có thể luyện tập bình thường
- 📝 Có thể thêm câu dần dần về sau

**Mở `check-questions-count.html` để xem chi tiết!** 📊
