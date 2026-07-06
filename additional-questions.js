// ===== CÂU HỎI BỔ SUNG CHO CÁC TOPICS THIẾU =====

// AD Objects - Thêm 5 câu (từ câu 16-20)
const adObjectsAdditional = [
    {
        id: 16,
        question: "Global Group trong domain có thể được sử dụng ở đâu?",
        answers: [
            "Chỉ trong domain đó",
            "Trong cùng forest",
            "Trong cùng domain tree",
            "Bất kỳ đâu trong domain tree và trusted domains"
        ],
        correct: 3,
        explanation: "Global Group có thể được dùng trong domain của nó và các trusted domains trong forest."
    },
    {
        id: 17,
        question: "Domain Local Group thường được dùng để làm gì?",
        answers: [
            "Phân quyền trên tài nguyên local trong domain",
            "Tạo user mới",
            "Cài đặt phần mềm",
            "Backup dữ liệu"
        ],
        correct: 0,
        explanation: "Domain Local Group dùng để gán permissions cho tài nguyên (files, folders, printers) trong domain."
    },
    {
        id: 18,
        question: "Attribute nào trong AD user account xác định đường dẫn home folder?",
        answers: [
            "homePath",
            "homeDirectory",
            "userPath",
            "folderPath"
        ],
        correct: 1,
        explanation: "homeDirectory attribute chỉ định đường dẫn UNC đến home folder của user."
    },
    {
        id: 19,
        question: "User Principal Name (UPN) trong AD có format như thế nào?",
        answers: [
            "username@domain.com",
            "domain\\username",
            "username.domain",
            "domain/username"
        ],
        correct: 0,
        explanation: "UPN có format giống email: username@domain.com, dùng để đăng nhập vào domain."
    },
    {
        id: 20,
        question: "Contact object trong AD được dùng để làm gì?",
        answers: [
            "Đại diện cho người dùng bên ngoài organization trong address book",
            "Tạo user account mới",
            "Quản lý computer",
            "Cài đặt printer"
        ],
        correct: 0,
        explanation: "Contact object đại diện cho external users trong global address list, không có security principal."
    }
];

// PowerShell - Thêm 5 câu (từ câu 21-25)
const powershellAdditional = [
    {
        id: 21,
        question: "Cmdlet nào dùng để thay đổi password của user trong AD?",
        answers: [
            "Change-ADPassword",
            "Set-ADAccountPassword",
            "Update-Password",
            "Reset-ADPassword"
        ],
        correct: 1,
        explanation: "Set-ADAccountPassword dùng để đổi password cho AD user account."
    },
    {
        id: 22,
        question: "Get-Command trong PowerShell dùng để làm gì?",
        answers: [
            "Chạy một command",
            "Lấy danh sách các cmdlets có sẵn",
            "Xóa command",
            "Tạo command mới"
        ],
        correct: 1,
        explanation: "Get-Command liệt kê tất cả cmdlets, functions, và commands có sẵn trong PowerShell."
    },
    {
        id: 23,
        question: "Pipeline (|) trong PowerShell dùng để làm gì?",
        answers: [
            "Kết thúc command",
            "Chuyển output của command này làm input cho command tiếp theo",
            "Tạo biến mới",
            "Comment code"
        ],
        correct: 1,
        explanation: "Pipeline operator (|) cho phép pass output của cmdlet này làm input cho cmdlet kế tiếp."
    },
    {
        id: 24,
        question: "Execution Policy trong PowerShell kiểm soát điều gì?",
        answers: [
            "Quyền truy cập file",
            "Việc thực thi scripts",
            "Network access",
            "User permissions"
        ],
        correct: 1,
        explanation: "Execution Policy xác định xem PowerShell scripts có được phép chạy hay không và yêu cầu chữ ký."
    },
    {
        id: 25,
        question: "Cmdlet nào dùng để enable một AD user account bị disable?",
        answers: [
            "Enable-ADUser",
            "Enable-ADAccount",
            "Set-ADUser -Enable",
            "Unlock-ADAccount"
        ],
        correct: 1,
        explanation: "Enable-ADAccount dùng để enable lại các AD accounts (user/computer) đã bị disable."
    }
];

// Storage - Thêm 5 câu (từ câu 36-40)
const storageAdditional = [
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
        explanation: "iSCSI Target cho phép share block-level storage qua network IP, cho phép server khác mount như local disk."
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
        explanation: "Disk Quota cho phép administrators giới hạn disk space mà users có thể sử dụng trên một volume."
    },
    {
        id: 40,
        question: "Deduplic thể hiện gì trong Windows Server 2012?",
        answers: [
            "Data Deduplication - Loại bỏ dữ liệu trùng lặp để tiết kiệm không gian",
            "Backup dữ liệu",
            "Encrypt dữ liệu",
            "Compress dữ liệu"
        ],
        correct: 0,
        explanation: "Data Deduplication phát hiện và loại bỏ các sub-file chunks trùng lặp, tiết kiệm tới 50-90% không gian."
    }
];

// File Sharing - Thêm 5 câu (từ câu 41-45)
const fileSharingAdditional = [
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
        explanation: "ABE ẩn các files và folders mà user không có quyền read, tạo trải nghiệm clean hơn."
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
        explanation: "BranchCache cache content từ file/web servers ở branch offices để cải thiện performance và giảm bandwidth."
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
        explanation: "Work Folders cho phép users sync work files across devices (PC, laptop, tablet) với central server."
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
        explanation: "Continuous Availability (với SMB 3.0) đảm bảo file shares transparent failover không gián đoạn sessions."
    },
    {
        id: 45,
        question: "Classification trong File Server Resource Manager dùng để?",
        answers: [
            "Tự động gắn properties/tags cho files dựa trên rules",
            "Delete files",
            "Rename files",
            "Move files"
        ],
        correct: 0,
        explanation: "File Classification tự động classify files theo content hoặc location, hỗ trợ management và policies."
    }
];

console.log('=== ADDITIONAL QUESTIONS LOADED ===');
console.log('AD Objects: +5 questions (id 16-20)');
console.log('PowerShell: +5 questions (id 21-25)');
console.log('Storage: +5 questions (id 36-40)');
console.log('File Sharing: +5 questions (id 41-45)');
console.log('Total additional: 20 questions');
