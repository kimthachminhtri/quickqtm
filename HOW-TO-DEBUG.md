# HƯỚNG DẪN DEBUG LỖI 🔧

## Bước 1: Mở Website với Developer Console

1. Mở file `index.html` trong Chrome hoặc Edge
2. Nhấn **F12** để mở Developer Tools
3. Chọn tab **Console**

## Bước 2: Hard Refresh để Xóa Cache

- **Windows**: Nhấn `Ctrl + Shift + R` hoặc `Ctrl + F5`
- **Mac**: Nhấn `Cmd + Shift + R`

## Bước 3: Kiểm Tra Console Logs

Sau khi refresh, bạn sẽ thấy các logs sau trong console:

### ✅ Logs ĐÚNG (Website hoạt động tốt):

```
=== Checking QuestionBank Topics ===
✓ Topic "installation": 10 questions
✓ Topic "active-directory": 10 questions
✓ Topic "ad-objects": 10 questions
... (và các topics khác)
✓ Total questions in 'all' category: 170 questions
=== questions.js loaded successfully ===
=== DOM Loaded ===
✓ questions.js loaded successfully
✓ Available topics: (19) ['installation', 'active-directory', ...]
✓ Found 4 navigation links
✓ Submit button event listener added
=== Initialization Complete ===
```

### ❌ Logs LỖI (Có vấn đề):

**LỖI 1: Không load được questions.js**
```
ERROR: questionBank not found! questions.js may not be loaded.
```
→ **Giải pháp**: Kiểm tra file `js/questions.js` có tồn tại không

**LỖI 2: Topic bị thiếu**
```
ERROR: Topic "xxx" is undefined!
```
→ **Giải pháp**: Topic này chưa có câu hỏi trong questionBank

**LỖI 3: Không tìm thấy câu hỏi**
```
No questions available for topic "xxx"
```
→ **Giải pháp**: Topic rỗng hoặc không tồn tại

## Bước 4: Test Từng Chức Năng

### Test 1: Mở file test-debug.html

1. Mở file `test-debug.html` trong trình duyệt
2. Trang sẽ tự động hiển thị:
   - Số lượng câu hỏi cho mỗi topic
   - Test lấy câu hỏi
3. Kiểm tra xem có lỗi màu đỏ không

### Test 2: Test Trang Chủ

1. Quay lại `index.html`
2. Trang chủ phải hiển thị 13 cards chủ đề
3. Mở Console và check:
   - Không có lỗi màu đỏ
   - Có logs màu xanh như bên trên

### Test 3: Test Luyện Tập

1. Click vào một topic card (ví dụ: "Active Directory")
2. Trong Console, bạn sẽ thấy:
   ```
   Starting practice for topic: active-directory
   getQuestionsByTopic called: topic="active-directory", count=10
   Found 10 questions for topic "active-directory"
   Returning 10 shuffled questions
   ```
3. Màn hình phải chuyển sang trang luyện tập và hiển thị câu hỏi

### Test 4: Test Thi Thử

1. Click menu "Thi thử"
2. Chọn topic, số câu, thời gian
3. Click "Bắt đầu thi"
4. Trong Console sẽ thấy logs tương tự như Test 3

## Bước 5: Các Lỗi Thường Gặp

### Lỗi 1: "Cannot read properties of null"
**Nguyên nhân**: DOM element không tồn tại
**Giải pháp**: 
- Hard refresh (Ctrl + Shift + R)
- Kiểm tra file HTML có đầy đủ các elements không

### Lỗi 2: "getQuestionsByTopic is not defined"
**Nguyên nhân**: File questions.js không được load
**Giải pháp**:
- Kiểm tra đường dẫn file trong index.html
- Kiểm tra file questions.js có tồn tại không
- Hard refresh

### Lỗi 3: "questionBank is undefined"
**Nguyên nhân**: File questions.js có lỗi syntax hoặc không load được
**Giải pháp**:
- Mở file questions.js và kiểm tra syntax
- Xem tab Console có lỗi parse không
- Hard refresh

### Lỗi 4: Nút không click được
**Nguyên nhân**: JavaScript error đã dừng execution
**Giải pháp**:
- Kiểm tra Console có lỗi màu đỏ không
- Fix lỗi đó trước
- Hard refresh

### Lỗi 5: Không có câu hỏi
**Nguyên nhân**: 
- questionBank[topic] là undefined hoặc rỗng
- Spread operator (...) fail khi merge arrays
**Giải pháp**:
- Kiểm tra logs trong Console
- Xem topic nào bị undefined
- Kiểm tra file questions.js có đầy đủ topics không

## Bước 6: Report Lỗi

Nếu vẫn còn lỗi, hãy:

1. Chụp ảnh màn hình Console với lỗi
2. Chụp ảnh màn hình website
3. Mô tả:
   - Bạn đã làm gì (click vào đâu)
   - Lỗi gì xảy ra
   - Logs trong Console

## Công Cụ Debug Bổ Sung

### Test trong Console

Mở Console và gõ các lệnh sau để test:

```javascript
// Test 1: Check questionBank exists
console.log(typeof questionBank);
// Expected: "object"

// Test 2: List all topics
console.log(Object.keys(questionBank));
// Expected: Array of 20 topics

// Test 3: Count questions per topic
for (let topic in questionBank) {
    console.log(topic, ':', questionBank[topic].length);
}

// Test 4: Get questions
const testQ = getQuestionsByTopic('installation', 5);
console.log('Got', testQ.length, 'questions');
console.log(testQ[0]);

// Test 5: Test startPractice function
startPractice('active-directory');
```

## Files Đã Sửa

- ✅ `js/questions.js` - Thêm debug logs, error handling
- ✅ `js/app.js` - Thêm global error handler, debug logs
- ✅ `test-debug.html` - File test debug riêng

## Tổng Kết

Sau khi sửa, website sẽ có:
1. ✅ Debug logs chi tiết trong Console
2. ✅ Error handling toàn diện  
3. ✅ Fallback mechanisms khi có lỗi
4. ✅ Thông báo lỗi rõ ràng

**Hãy mở index.html, nhấn F12, và kiểm tra Console ngay!** 🚀
