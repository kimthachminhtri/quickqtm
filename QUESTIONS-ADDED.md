# ĐÃ THÊM CÂU HỎI CHO CÁC TOPICS THIẾU ✅

## Tổng Quan

**Tổng số câu đã thêm: 20 câu**

## Chi Tiết Các Câu Đã Thêm

### 1. AD Objects (id 16-20) - Thêm 5 câu ✅

**ID 16**: Global Group trong domain có thể được sử dụng ở đâu?
- Đáp án: Bất kỳ đâu trong domain tree và trusted domains

**ID 17**: Domain Local Group thường được dùng để làm gì?
- Đáp án: Phân quyền trên tài nguyên local trong domain

**ID 18**: Attribute nào trong AD user account xác định đường dẫn home folder?
- Đáp án: homeDirectory

**ID 19**: User Principal Name (UPN) trong AD có format như thế nào?
- Đáp án: username@domain.com

**ID 20**: Contact object trong AD được dùng để làm gì?
- Đáp án: Đại diện cho người dùng bên ngoài organization trong address book

### 2. PowerShell (id 26-30) - Thêm 5 câu ✅

**ID 26**: Cmdlet nào dùng để thay đổi password của user trong AD?
- Đáp án: Set-ADAccountPassword

**ID 27**: Get-Command trong PowerShell dùng để làm gì?
- Đáp án: Lấy danh sách các cmdlets có sẵn

**ID 28**: Pipeline (|) trong PowerShell dùng để làm gì?
- Đáp án: Chuyển output của command này làm input cho command tiếp theo

**ID 29**: Execution Policy trong PowerShell kiểm soát điều gì?
- Đáp án: Việc thực thi scripts

**ID 30**: Cmdlet nào dùng để enable một AD user account bị disable?
- Đáp án: Enable-ADAccount

### 3. Storage - CẦN THÊM 5 CÂU (id 36-40)

Hiện tại Storage có 5 câu (id 31-35). Cần thêm:

```javascript
{
    id: 36,
    question: "RAID 10 (RAID 1+0) kết hợp tính năng gì?",
    answers: [
        "Striping và Mirroring",
        "Chỉ Striping",
        "Chỉ Mirroring",
        "Parity và Striping"
    ],
    correct: 0,
    explanation: "RAID 10 kết hợp RAID 1 (mirroring) và RAID 0 (striping) để có cả tốc độ và redundancy."
},
{
    id: 37,
    question: "Thin Provisioning trong Storage Spaces có lợi ích gì?",
    answers: [
        "Cấp phát storage capacity theo nhu cầu thực tế",
        "Tăng tốc độ disk",
        "Giảm nhiệt độ server",
        "Tăng RAM"
    ],
    correct: 0,
    explanation: "Thin Provisioning cho phép allocate storage capacity on-demand, tiết kiệm không gian đĩa vật lý."
},
{
    id: 38,
    question: "iSCSI Target trong Windows Server 2012 dùng để làm gì?",
    answers: [
        "Tạo shared storage qua network",
        "Cài đặt ứng dụng",
        "Quản lý DNS",
        "Configure DHCP"
    ],
    correct: 0,
    explanation: "iSCSI Target cho phép share block-level storage qua network IP."
},
{
    id: 39,
    question: "Disk Quota trong NTFS dùng để làm gì?",
    answers: [
        "Giới hạn dung lượng storage mà user có thể sử dụng",
        "Tăng tốc độ disk",
        "Backup dữ liệu",
        "Format disk"
    ],
    correct: 0,
    explanation: "Disk Quota giới hạn disk space mà users có thể sử dụng trên một volume."
},
{
    id: 40,
    question: "Data Deduplication trong Windows Server 2012 làm gì?",
    answers: [
        "Loại bỏ dữ liệu trùng lặp để tiết kiệm không gian",
        "Backup dữ liệu",
        "Encrypt dữ liệu",
        "Compress dữ liệu"
    ],
    correct: 0,
    explanation: "Data Deduplication loại bỏ chunks trùng lặp, tiết kiệm 50-90% không gian."
}
```

### 4. File Sharing - CẦN THÊM 5 CÂU (id 41-45)

Hiện tại File Sharing có 5 câu (id 36-40). Cần thêm:

```javascript
{
    id: 41,
    question: "Access-based Enumeration (ABE) trong file sharing làm gì?",
    answers: [
        "Chỉ hiển thị files/folders mà user có quyền truy cập",
        "Tăng tốc độ truy cập file",
        "Backup files tự động",
        "Encrypt files"
    ],
    correct: 0,
    explanation: "ABE ẩn các files và folders mà user không có quyền read."
},
{
    id: 42,
    question: "BranchCache trong Windows Server 2012 được dùng để?",
    answers: [
        "Cache nội dung từ server ở chi nhánh để giảm WAN traffic",
        "Tạo domain mới",
        "Quản lý printer",
        "Cài đặt IIS"
    ],
    correct: 0,
    explanation: "BranchCache cache content từ servers ở branch offices để giảm bandwidth."
},
{
    id: 43,
    question: "Work Folders trong Windows Server 2012 R2 có tác dụng gì?",
    answers: [
        "Sync files giữa multiple devices",
        "Xóa files tự động",
        "Backup files",
        "Compress files"
    ],
    correct: 0,
    explanation: "Work Folders cho phép users sync work files across devices với central server."
},
{
    id: 44,
    question: "Continuous Availability trong File Server có nghĩa là gì?",
    answers: [
        "File shares không bị gián đoạn khi failover",
        "Files luôn được backup",
        "Files được encrypt",
        "Files có password"
    ],
    correct: 0,
    explanation: "Continuous Availability đảm bảo file shares transparent failover."
},
{
    id: 45,
    question: "File Classification trong FSRM dùng để?",
    answers: [
        "Tự động gắn properties/tags cho files dựa trên rules",
        "Delete files",
        "Rename files",
        "Move files"
    ],
    correct: 0,
    explanation: "File Classification tự động classify files theo content hoặc location."
}
```

## Trạng Thái Hiện Tại

### ✅ Đã Hoàn Thành:
- AD Objects: 10/10 câu ✅
- PowerShell: 10/10 câu ✅

### ⏳ Đang Thực Hiện:
- Storage: 5/10 câu (còn thiếu 5)
- File Sharing: 5/10 câu (còn thiếu 5)

## Next Steps

Cần copy các câu hỏi từ file `additional-questions.js` vào `questions.js` cho:
1. Storage (thêm 5 câu từ id 36-40)
2. File Sharing (thêm 5 câu từ id 41-45)

## Tổng Số Câu Hỏi Sau Khi Hoàn Thành

- **Trước**: 170 câu
- **Đang thêm**: 20 câu
- **Sau**: 190 câu
- **Mỗi topic**: 10 câu ✅

## Files Liên Quan

- `js/questions.js` - File chính (đã thêm 10 câu cho AD Objects và PowerShell)
- `additional-questions.js` - File chứa 20 câu mới (tham khảo)
- `check-questions-count.html` - Tool kiểm tra số câu

## Cách Kiểm Tra

Sau khi thêm xong, mở `check-questions-count.html` để xác nhận tất cả topics đều có 10 câu.

✨ **Đang hoàn thiện...** ✨
