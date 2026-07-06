// Ngân hàng câu hỏi trắc nghiệm Windows Server 2012
// Dựa trên nội dung từ tài liệu đã trích xuất

const questionBank = {
    // Bài 1: Cài đặt và triển khai Windows Server 2012
    installation: [
        {
            id: 1,
            question: "Cấu hình RAM tối thiểu để cài đặt Windows Server 2012 là bao nhiêu?",
            answers: [
                "256 MB",
                "512 MB",
                "1 GB",
                "2 GB"
            ],
            correct: 1,
            explanation: "Theo tài liệu, cấu hình tối thiểu yêu cầu 512 MB RAM."
        },
        {
            id: 2,
            question: "Dung lượng ổ đĩa tối thiểu để cài đặt Windows Server 2012 là?",
            answers: [
                "16 GB",
                "32 GB",
                "64 GB",
                "128 GB"
            ],
            correct: 1,
            explanation: "Windows Server 2012 yêu cầu tối thiểu 32 GB dung lượng ổ đĩa."
        },
        {
            id: 3,
            question: "Kiến trúc bộ xử lý được hỗ trợ cho Windows Server 2012 là?",
            answers: [
                "x86",
                "x86-64",
                "ARM",
                "PowerPC"
            ],
            correct: 1,
            explanation: "Windows Server 2012 chỉ hỗ trợ kiến trúc x86-64 (64-bit)."
        },
        {
            id: 4,
            question: "NIC Teaming trong Windows Server 2012 được sử dụng để?",
            answers: [
                "Tăng tốc độ mạng và cung cấp khả năng dự phòng",
                "Quản lý nhiều card mạng riêng biệt",
                "Giảm băng thông mạng",
                "Chỉ để dự phòng, không tăng băng thông"
            ],
            correct: 0,
            explanation: "NIC Teaming giúp tăng băng thông và cung cấp khả năng chịu lỗi cho kết nối mạng."
        },
        {
            id: 5,
            question: "Server Core là gì?",
            answers: [
                "Phiên bản Windows Server có giao diện đầy đủ",
                "Phiên bản Windows Server tối giản không có GUI",
                "Một dịch vụ trong Windows Server",
                "Phần mềm quản trị server từ xa"
            ],
            correct: 1,
            explanation: "Server Core là phiên bản cài đặt tối giản không có giao diện đồ họa."
        },
        {
            id: 6,
            question: "Tốc độ CPU tối thiểu cho Windows Server 2012 là?",
            answers: [
                "1.0 GHz",
                "1.4 GHz",
                "2.0 GHz",
                "2.4 GHz"
            ],
            correct: 1,
            explanation: "Windows Server 2012 yêu cầu processor tốc độ tối thiểu 1.4 GHz."
        },
        {
            id: 7,
            question: "Lệnh nào dùng để đổi tên server trong Server Core?",
            answers: [
                "hostname",
                "netdom renamecomputer",
                "rename-computer",
                "set-computername"
            ],
            correct: 1,
            explanation: "Netdom renamecomputer được dùng để đổi tên computer trong Server Core."
        },
        {
            id: 8,
            question: "GUI (Graphical User Interface) trong Windows Server 2012 có thể?",
            answers: [
                "Không thể thêm/xóa",
                "Thêm/xóa được thông qua Features",
                "Chỉ thêm được",
                "Chỉ xóa được"
            ],
            correct: 1,
            explanation: "GUI là một feature có thể add hoặc remove trên Windows Server 2012."
        },
        {
            id: 9,
            question: "Để cấu hình địa chỉ IP tĩnh trong Server Core, dùng lệnh?",
            answers: [
                "ipconfig",
                "netsh interface ipv4 set address",
                "set-ipaddress",
                "config-ip"
            ],
            correct: 1,
            explanation: "Netsh interface ipv4 set address dùng để cấu hình IP tĩnh trong Server Core."
        },
        {
            id: 10,
            question: "Windows Server 2012 có mấy phiên bản chính?",
            answers: [
                "2 phiên bản",
                "3 phiên bản",
                "4 phiên bản: Essentials, Standard, Datacenter, Foundation",
                "5 phiên bản"
            ],
            correct: 2,
            explanation: "Windows Server 2012 có 4 phiên bản: Foundation, Essentials, Standard, và Datacenter."
        }
    ],

    // Bài 2: Active Directory
    "active-directory": [
        {
            id: 11,
            question: "Active Directory là gì?",
            answers: [
                "Dịch vụ lưu trữ file",
                "Dịch vụ thư mục để quản lý tài nguyên mạng",
                "Dịch vụ DNS",
                "Dịch vụ DHCP"
            ],
            correct: 1,
            explanation: "Active Directory là dịch vụ thư mục tập trung để quản lý users, computers và các tài nguyên mạng."
        },
        {
            id: 12,
            question: "Domain Controller (DC) là gì?",
            answers: [
                "Máy tính cá nhân trong domain",
                "Máy chủ lưu trữ cơ sở dữ liệu Active Directory",
                "Thiết bị mạng switch",
                "Máy chủ web"
            ],
            correct: 1,
            explanation: "Domain Controller là máy chủ quản lý và lưu trữ thông tin về tất cả các đối tượng trong domain."
        },
        {
            id: 13,
            question: "Để nâng cấp server lên Domain Controller, cần cài đặt role nào?",
            answers: [
                "DHCP Server",
                "DNS Server",
                "Active Directory Domain Services (AD DS)",
                "File Services"
            ],
            correct: 2,
            explanation: "Cần cài đặt role AD DS và sau đó promote server lên Domain Controller."
        },
        {
            id: 14,
            question: "Additional Domain Controller được sử dụng để?",
            answers: [
                "Tạo domain mới",
                "Cung cấp khả năng dự phòng và cân bằng tải cho DC chính",
                "Thay thế hoàn toàn DC chính",
                "Chỉ để backup dữ liệu"
            ],
            correct: 1,
            explanation: "Additional DC giúp tăng khả năng chịu lỗi và phân tán tải xác thực."
        },
        {
            id: 15,
            question: "Child Domain là gì?",
            answers: [
                "Domain con trong cấu trúc domain tree",
                "Domain độc lập",
                "Một OU trong domain",
                "Một Group trong Active Directory"
            ],
            correct: 0,
            explanation: "Child Domain là domain con kế thừa namespace từ parent domain."
        },
        {
            id: 16,
            question: "Forest trong Active Directory là gì?",
            answers: [
                "Một domain đơn lẻ",
                "Tập hợp của một hoặc nhiều domain trees",
                "Một OU",
                "Một site"
            ],
            correct: 1,
            explanation: "Forest là collection của một hoặc nhiều domain trees chia sẻ common schema và global catalog."
        },
        {
            id: 17,
            question: "Global Catalog (GC) trong AD lưu trữ?",
            answers: [
                "Chỉ objects trong một domain",
                "Partial replica của tất cả objects trong forest",
                "Chỉ user accounts",
                "DNS records"
            ],
            correct: 1,
            explanation: "Global Catalog chứa partial replica (một tập các attributes) của tất cả objects trong forest."
        },
        {
            id: 18,
            question: "FSMO Roles có mấy vai trò?",
            answers: [
                "3 roles",
                "4 roles",
                "5 roles",
                "6 roles"
            ],
            correct: 2,
            explanation: "FSMO có 5 roles: Schema Master, Domain Naming Master, RID Master, PDC Emulator, Infrastructure Master."
        },
        {
            id: 19,
            question: "Site trong Active Directory được định nghĩa dựa trên?",
            answers: [
                "OU structure",
                "Physical network topology và IP subnets",
                "Domain names",
                "User groups"
            ],
            correct: 1,
            explanation: "Site đại diện cho physical network locations, được định nghĩa bởi one hoặc nhiều IP subnets."
        },
        {
            id: 20,
            question: "Ntds.dit là file chứa?",
            answers: [
                "DNS records",
                "Active Directory database",
                "System logs",
                "User profiles"
            ],
            correct: 1,
            explanation: "Ntds.dit là file database chính của Active Directory chứa tất cả objects và attributes."
        }
    ],

    // Bài 3: Đối tượng trong Active Directory
    "ad-objects": [
        {
            id: 11,
            question: "OU (Organizational Unit) trong Active Directory được sử dụng để?",
            answers: [
                "Tổ chức và quản lý các đối tượng trong domain",
                "Tạo user account",
                "Cấu hình DNS",
                "Quản lý DHCP scope"
            ],
            correct: 0,
            explanation: "OU giúp tổ chức các đối tượng và áp dụng Group Policy một cách có cấu trúc."
        },
        {
            id: 12,
            question: "Có mấy loại Group trong Active Directory?",
            answers: [
                "1 loại",
                "2 loại: Security và Distribution",
                "3 loại",
                "4 loại"
            ],
            correct: 1,
            explanation: "Có 2 loại: Security Groups (dùng để phân quyền) và Distribution Groups (dùng cho email)."
        },
        {
            id: 13,
            question: "Group scope nào có phạm vi rộng nhất?",
            answers: [
                "Domain Local",
                "Global",
                "Universal",
                "Local"
            ],
            correct: 2,
            explanation: "Universal Group có thể chứa members từ bất kỳ domain nào trong forest."
        },
        {
            id: 14,
            question: "Delegate Control được sử dụng để?",
            answers: [
                "Xóa OU",
                "Ủy quyền quản trị cho user hoặc group trên một OU",
                "Tạo user mới",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "Delegate Control cho phép gán quyền quản trị cho người dùng trên một OU cụ thể."
        },
        {
            id: 15,
            question: "User Profile là gì?",
            answers: [
                "Thông tin cá nhân của user",
                "Tập hợp các cài đặt và files của user",
                "Mật khẩu user",
                "Địa chỉ email"
            ],
            correct: 1,
            explanation: "User Profile chứa desktop settings, documents và các cài đặt cá nhân của user."
        }
    ],

    // Bài 4: PowerShell
    powershell: [
        {
            id: 16,
            question: "Lệnh PowerShell nào dùng để tạo user mới trong AD?",
            answers: [
                "Add-ADUser",
                "Create-ADUser",
                "New-ADUser",
                "Make-ADUser"
            ],
            correct: 2,
            explanation: "New-ADUser là cmdlet để tạo user account mới trong Active Directory."
        },
        {
            id: 17,
            question: "Lệnh nào dùng để tạo OU mới?",
            answers: [
                "New-OU",
                "New-ADOrganizationalUnit",
                "Create-OU",
                "Add-OU"
            ],
            correct: 1,
            explanation: "New-ADOrganizationalUnit dùng để tạo OU mới trong Active Directory."
        },
        {
            id: 18,
            question: "Cmdlet nào dùng để lấy thông tin user từ AD?",
            answers: [
                "Get-User",
                "Get-ADUser",
                "Show-User",
                "List-ADUser"
            ],
            correct: 1,
            explanation: "Get-ADUser dùng để truy vấn và hiển thị thông tin user trong AD."
        },
        {
            id: 19,
            question: "File extension của PowerShell Script là gì?",
            answers: [
                ".bat",
                ".cmd",
                ".ps1",
                ".psh"
            ],
            correct: 2,
            explanation: "PowerShell script files có extension .ps1"
        },
        {
            id: 20,
            question: "Import-CSV trong PowerShell dùng để làm gì?",
            answers: [
                "Xuất dữ liệu ra file CSV",
                "Nhập dữ liệu từ file CSV",
                "Xóa file CSV",
                "Tạo file CSV mới"
            ],
            correct: 1,
            explanation: "Import-CSV đọc dữ liệu từ file CSV để xử lý trong PowerShell."
        }
    ],

    // Bài 6-7: Dịch vụ mạng (DHCP & DNS)
    networking: [
        {
            id: 21,
            question: "DHCP Server được sử dụng để?",
            answers: [
                "Phân giải tên miền",
                "Cấp phát địa chỉ IP tự động cho client",
                "Quản lý file sharing",
                "Backup dữ liệu"
            ],
            correct: 1,
            explanation: "DHCP tự động cấp phát IP address, subnet mask, gateway và DNS cho client."
        },
        {
            id: 22,
            question: "DHCP Scope là gì?",
            answers: [
                "Tên của DHCP server",
                "Dải địa chỉ IP mà DHCP server có thể cấp phát",
                "Thời gian cho thuê IP",
                "Địa chỉ gateway"
            ],
            correct: 1,
            explanation: "Scope là dải địa chỉ IP liên tục mà DHCP server quản lý và cấp phát."
        },
        {
            id: 23,
            question: "DHCP Relay Agent dùng để làm gì?",
            answers: [
                "Backup DHCP database",
                "Chuyển tiếp DHCP requests giữa các subnet",
                "Tạo DHCP scope mới",
                "Xóa DHCP lease"
            ],
            correct: 1,
            explanation: "DHCP Relay Agent chuyển tiếp DHCP broadcast qua router đến DHCP server ở subnet khác."
        },
        {
            id: 24,
            question: "DNS Server có chức năng chính là gì?",
            answers: [
                "Cấp phát địa chỉ IP",
                "Phân giải tên miền thành địa chỉ IP",
                "Quản lý user account",
                "Share files"
            ],
            correct: 1,
            explanation: "DNS (Domain Name System) phân giải hostname thành IP address."
        },
        {
            id: 25,
            question: "Forward Lookup Zone trong DNS dùng để?",
            answers: [
                "Phân giải IP thành hostname",
                "Phân giải hostname thành IP",
                "Backup DNS database",
                "Cấu hình DHCP"
            ],
            correct: 1,
            explanation: "Forward Lookup Zone chuyển đổi tên miền sang địa chỉ IP."
        },
        {
            id: 26,
            question: "Reverse Lookup Zone dùng để?",
            answers: [
                "Phân giải hostname thành IP",
                "Phân giải IP thành hostname",
                "Tạo DNS record mới",
                "Xóa DNS cache"
            ],
            correct: 1,
            explanation: "Reverse Lookup Zone chuyển đổi địa chỉ IP thành tên miền."
        },
        {
            id: 27,
            question: "Record type 'A' trong DNS lưu trữ thông tin gì?",
            answers: [
                "IPv6 address",
                "IPv4 address",
                "Mail server",
                "Alias name"
            ],
            correct: 1,
            explanation: "A Record (Address Record) map hostname với IPv4 address."
        },
        {
            id: 28,
            question: "Record type 'MX' trong DNS dùng cho?",
            answers: [
                "IPv6 address",
                "Alias name",
                "Mail server",
                "Name server"
            ],
            correct: 2,
            explanation: "MX Record (Mail Exchange) chỉ định mail server cho domain."
        },
        {
            id: 29,
            question: "CNAME record dùng để?",
            answers: [
                "Tạo alias cho một hostname khác",
                "Lưu địa chỉ IP",
                "Chỉ định mail server",
                "Cấu hình DNS server"
            ],
            correct: 0,
            explanation: "CNAME (Canonical Name) tạo tên thay thế cho một hostname."
        },
        {
            id: 30,
            question: "IPv6 address có độ dài bao nhiêu bit?",
            answers: [
                "32 bit",
                "64 bit",
                "128 bit",
                "256 bit"
            ],
            correct: 2,
            explanation: "IPv6 address có độ dài 128 bit, gấp 4 lần IPv4 (32 bit)."
        }
    ],

    // Bài 9: Quản lý ổ đĩa
    storage: [
        {
            id: 31,
            question: "RAID 0 cung cấp tính năng gì?",
            answers: [
                "Dự phòng dữ liệu (fault tolerance)",
                "Tăng hiệu suất đọc/ghi (striping)",
                "Cả dự phòng và tăng hiệu suất",
                "Không có lợi ích gì"
            ],
            correct: 1,
            explanation: "RAID 0 sử dụng striping để tăng tốc độ nhưng không có khả năng dự phòng."
        },
        {
            id: 32,
            question: "RAID 1 hoạt động theo nguyên tắc nào?",
            answers: [
                "Striping",
                "Mirroring (sao lưu gương)",
                "Parity",
                "Concatenation"
            ],
            correct: 1,
            explanation: "RAID 1 sử dụng mirroring, sao chép dữ liệu lên 2 ổ đĩa để đảm bảo an toàn."
        },
        {
            id: 33,
            question: "RAID 5 yêu cầu tối thiểu bao nhiêu ổ đĩa?",
            answers: [
                "2 ổ",
                "3 ổ",
                "4 ổ",
                "5 ổ"
            ],
            correct: 1,
            explanation: "RAID 5 cần tối thiểu 3 ổ đĩa để hoạt động với striping và parity."
        },
        {
            id: 34,
            question: "Storage Spaces trong Windows Server 2012 cho phép?",
            answers: [
                "Chỉ tạo RAID 0",
                "Tạo virtual disk từ physical disk pool",
                "Chỉ quản lý 1 ổ đĩa",
                "Không hỗ trợ redundancy"
            ],
            correct: 1,
            explanation: "Storage Spaces tạo và quản lý storage pool, virtual disk với nhiều tùy chọn resiliency."
        },
        {
            id: 35,
            question: "Thin Provisioning là gì?",
            answers: [
                "Cấp phát toàn bộ dung lượng ngay lập tức",
                "Cấp phát dung lượng theo nhu cầu sử dụng",
                "Xóa dữ liệu tự động",
                "Backup dữ liệu"
            ],
            correct: 1,
            explanation: "Thin Provisioning cấp phát dung lượng động khi có dữ liệu ghi vào, tiết kiệm không gian."
        }
    ],

    // Bài 10: File Sharing & Permissions
    "file-sharing": [
        {
            id: 36,
            question: "NTFS Permission nào cho phép user đọc file nhưng không sửa đổi?",
            answers: [
                "Full Control",
                "Modify",
                "Read & Execute",
                "Write"
            ],
            correct: 2,
            explanation: "Read & Execute cho phép đọc file và chạy executable nhưng không sửa đổi."
        },
        {
            id: 37,
            question: "Share Permission khác với NTFS Permission như thế nào?",
            answers: [
                "Hoàn toàn giống nhau",
                "Share chỉ áp dụng khi truy cập qua mạng",
                "NTFS chỉ áp dụng khi truy cập qua mạng",
                "Không có sự khác biệt"
            ],
            correct: 1,
            explanation: "Share Permission chỉ có hiệu lực khi truy cập thư mục qua network share."
        },
        {
            id: 38,
            question: "Shadow Copies được sử dụng để?",
            answers: [
                "Backup toàn bộ server",
                "Tạo snapshot của shared folders tại các thời điểm",
                "Sao chép file tự động",
                "Xóa file tự động"
            ],
            correct: 1,
            explanation: "Shadow Copies (Previous Versions) cho phép khôi phục file/folder về trạng thái trước đó."
        },
        {
            id: 39,
            question: "Offline Files cho phép user làm gì?",
            answers: [
                "Xóa file trên server",
                "Làm việc với network files khi không có kết nối mạng",
                "Share file với người khác",
                "Backup file tự động"
            ],
            correct: 1,
            explanation: "Offline Files cache network files locally để user có thể làm việc khi offline."
        },
        {
            id: 40,
            question: "Effective Permissions là gì?",
            answers: [
                "Chỉ NTFS permissions",
                "Chỉ Share permissions",
                "Kết hợp của NTFS và Share permissions (restrictive nhất)",
                "Permissions của administrator"
            ],
            correct: 2,
            explanation: "Effective Permissions là kết quả của cả NTFS và Share permissions, áp dụng quyền hạn chế nhất."
        }
    ],

    // Bài 11: Group Policy
    "group-policy": [
        {
            id: 41,
            question: "GPO (Group Policy Object) được sử dụng để?",
            answers: [
                "Tạo user account",
                "Áp dụng cấu hình và chính sách tập trung",
                "Cấu hình DHCP",
                "Quản lý DNS"
            ],
            correct: 1,
            explanation: "GPO cho phép quản trị viên áp dụng settings và policies một cách tập trung."
        },
        {
            id: 42,
            question: "GPO có thể được link tới?",
            answers: [
                "Chỉ Domain",
                "Chỉ OU",
                "Domain, OU, và Site",
                "Chỉ User"
            ],
            correct: 2,
            explanation: "GPO có thể được link tới Site, Domain hoặc OU trong Active Directory."
        },
        {
            id: 43,
            question: "Lệnh nào dùng để force update Group Policy trên client?",
            answers: [
                "gpresult",
                "gpupdate /force",
                "gpedit",
                "gprefresh"
            ],
            correct: 1,
            explanation: "gpupdate /force buộc client apply GPO ngay lập tức thay vì chờ chu kỳ refresh."
        },
        {
            id: 44,
            question: "Trong cấu trúc GPO, Computer Configuration áp dụng cho?",
            answers: [
                "Chỉ user",
                "Chỉ computer",
                "Cả user và computer",
                "Không áp dụng cho ai"
            ],
            correct: 1,
            explanation: "Computer Configuration áp dụng settings cho computer account, không phụ thuộc user đăng nhập."
        },
        {
            id: 45,
            question: "User Configuration trong GPO áp dụng cho?",
            answers: [
                "Chỉ computer",
                "Chỉ user account",
                "Cả user và computer",
                "Chỉ administrator"
            ],
            correct: 1,
            explanation: "User Configuration áp dụng settings cho user khi họ đăng nhập vào bất kỳ computer nào."
        },
        {
            id: 46,
            question: "Security Filtering trong GPO cho phép?",
            answers: [
                "Xóa GPO",
                "Chỉ định GPO áp dụng cho user/group cụ thể",
                "Backup GPO",
                "Tạo GPO mới"
            ],
            correct: 1,
            explanation: "Security Filtering kiểm soát GPO chỉ áp dụng cho các user/group được chọn."
        },
        {
            id: 47,
            question: "Software Restriction Policies dùng để?",
            answers: [
                "Cài đặt phần mềm tự động",
                "Giới hạn phần mềm nào được phép chạy",
                "Backup phần mềm",
                "Update phần mềm"
            ],
            correct: 1,
            explanation: "Software Restriction Policies kiểm soát các ứng dụng được phép thực thi trên hệ thống."
        },
        {
            id: 48,
            question: "Thứ tự ưu tiên áp dụng GPO từ thấp đến cao là?",
            answers: [
                "Site -> Domain -> OU",
                "OU -> Domain -> Site",
                "Domain -> OU -> Site",
                "Domain -> Site -> OU"
            ],
            correct: 0,
            explanation: "Thứ tự áp dụng GPO: Local -> Site -> Domain -> OU (LSDOU)."
        },
        {
            id: 49,
            question: "Block Inheritance trong GPO có tác dụng gì?",
            answers: [
                "Xóa tất cả GPO",
                "Chặn GPO từ parent container áp dụng xuống",
                "Backup GPO",
                "Copy GPO"
            ],
            correct: 1,
            explanation: "Block Inheritance ngăn GPO từ level cao hơn (parent) áp dụng xuống OU con."
        },
        {
            id: 50,
            question: "Enforced (No Override) trong GPO có ý nghĩa gì?",
            answers: [
                "Xóa GPO",
                "Buộc GPO luôn được áp dụng, không bị block",
                "Tắt GPO",
                "Copy GPO"
            ],
            correct: 1,
            explanation: "Enforced đảm bảo GPO luôn được áp dụng, vượt qua Block Inheritance."
        }
    ],

    // Bài 12: Windows Deployment Services (WDS)
    wds: [
        {
            id: 51,
            question: "Windows Deployment Services (WDS) được sử dụng để?",
            answers: [
                "Cài đặt Windows tự động qua mạng LAN",
                "Backup Windows Server",
                "Cấu hình DNS Server",
                "Quản lý DHCP"
            ],
            correct: 0,
            explanation: "WDS cho phép triển khai cài đặt Windows tự động qua mạng cho nhiều máy client."
        },
        {
            id: 52,
            question: "Để WDS hoạt động, cần có dịch vụ nào trên mạng?",
            answers: [
                "Chỉ DNS Server",
                "DHCP Server và DNS Server",
                "Chỉ DHCP Server",
                "Không cần dịch vụ gì"
            ],
            correct: 1,
            explanation: "WDS yêu cầu DHCP Server để cấp phát IP và DNS Server để phân giải tên miền."
        },
        {
            id: 53,
            question: "File nào chứa images cài đặt Windows trong WDS?",
            answers: [
                "setup.exe",
                "install.wim",
                "boot.iso",
                "windows.img"
            ],
            correct: 1,
            explanation: "File install.wim chứa image của các phiên bản Windows để cài đặt."
        },
        {
            id: 54,
            question: "Boot.wim trong WDS dùng để?",
            answers: [
                "Cài đặt Windows",
                "Boot máy client vào môi trường cài đặt",
                "Backup dữ liệu",
                "Cấu hình DHCP"
            ],
            correct: 1,
            explanation: "Boot.wim chứa Windows PE để boot máy client qua mạng vào môi trường cài đặt."
        },
        {
            id: 55,
            question: "Client boot vào WDS bằng cách nào?",
            answers: [
                "Boot từ USB",
                "Boot từ DVD",
                "Boot từ card mạng (PXE Boot)",
                "Boot từ hard drive"
            ],
            correct: 2,
            explanation: "Client sử dụng PXE (Preboot Execution Environment) để boot qua card mạng."
        },
        {
            id: 56,
            question: "Image Group trong WDS dùng để?",
            answers: [
                "Nhóm các boot images",
                "Tổ chức và phân loại install images",
                "Backup images",
                "Delete images"
            ],
            correct: 1,
            explanation: "Image Group giúp tổ chức và quản lý các install images theo nhóm logic."
        },
        {
            id: 57,
            question: "Windows Assessment and Deployment Kit (ADK) được sử dụng để?",
            answers: [
                "Backup Windows",
                "Tạo unattended answer file cho cài đặt tự động",
                "Cấu hình DNS",
                "Quản lý user"
            ],
            correct: 1,
            explanation: "ADK chứa các công cụ như Windows SIM để tạo answer file tự động hóa quá trình cài đặt."
        },
        {
            id: 58,
            question: "WDS Server có thể được integrated với?",
            answers: [
                "Chỉ Workgroup",
                "Active Directory Domain",
                "Chỉ Standalone",
                "Không tích hợp được"
            ],
            correct: 1,
            explanation: "WDS có thể integrated với Active Directory để quản lý tập trung và authentication."
        },
        {
            id: 59,
            question: "PXE Response Settings trong WDS có tác dụng gì?",
            answers: [
                "Cấu hình DHCP",
                "Quyết định WDS response cho client nào (known/unknown)",
                "Backup images",
                "Delete clients"
            ],
            correct: 1,
            explanation: "PXE Response Settings kiểm soát WDS server sẽ response cho known computers, unknown computers hay cả hai."
        },
        {
            id: 60,
            question: "Remote Installation Folder trong WDS lưu trữ?",
            answers: [
                "Chỉ boot images",
                "Boot images và install images",
                "Chỉ install images",
                "Không lưu trữ gì"
            ],
            correct: 1,
            explanation: "RemoteInstall folder là nơi lưu trữ tất cả boot images và install images của WDS."
        }
    ],

    // Bài 13: Internet Information Services (IIS)
    iis: [
        {
            id: 61,
            question: "IIS (Internet Information Services) là gì?",
            answers: [
                "Web Server của Microsoft",
                "DNS Server",
                "DHCP Server",
                "Mail Server"
            ],
            correct: 0,
            explanation: "IIS là Web Server của Microsoft, dùng để host websites và web applications."
        },
        {
            id: 62,
            question: "Port mặc định của HTTP là?",
            answers: [
                "21",
                "80",
                "443",
                "8080"
            ],
            correct: 1,
            explanation: "HTTP sử dụng port 80 làm mặc định."
        },
        {
            id: 63,
            question: "Port mặc định của HTTPS là?",
            answers: [
                "80",
                "443",
                "8080",
                "8443"
            ],
            correct: 1,
            explanation: "HTTPS sử dụng port 443 làm mặc định."
        },
        {
            id: 64,
            question: "Default Document trong IIS là gì?",
            answers: [
                "Tên domain của website",
                "File được load mặc định khi truy cập website",
                "Thư mục chứa website",
                "Certificate của website"
            ],
            correct: 1,
            explanation: "Default Document là file (như index.html, default.aspx) được tự động load khi truy cập root của website."
        },
        {
            id: 65,
            question: "Host Header trong IIS dùng để?",
            answers: [
                "Backup website",
                "Host nhiều website trên cùng IP với tên miền khác nhau",
                "Cấu hình DNS",
                "Tạo certificate"
            ],
            correct: 1,
            explanation: "Host Header cho phép chạy nhiều website trên cùng IP address bằng cách phân biệt qua tên miền."
        },
        {
            id: 66,
            question: "Application Pool trong IIS dùng để?",
            answers: [
                "Backup website",
                "Cách ly các web applications",
                "Tạo DNS record",
                "Quản lý user"
            ],
            correct: 1,
            explanation: "Application Pool cách ly các web applications để tăng bảo mật và ổn định."
        },
        {
            id: 67,
            question: "Directory Browsing trong IIS cho phép?",
            answers: [
                "Xem danh sách files trong thư mục khi không có default document",
                "Backup website",
                "Tạo virtual directory",
                "Cấu hình SSL"
            ],
            correct: 0,
            explanation: "Directory Browsing cho phép user xem danh sách files/folders khi không tìm thấy default document."
        },
        {
            id: 68,
            question: "Virtual Directory trong IIS là gì?",
            answers: [
                "Thư mục backup",
                "Thư mục ảo trỏ tới physical folder ở location khác",
                "Thư mục DNS",
                "Thư mục user"
            ],
            correct: 1,
            explanation: "Virtual Directory cho phép map URL path tới physical folder không nằm trong website root."
        },
        {
            id: 69,
            question: "IIS Manager được dùng để?",
            answers: [
                "Quản lý DNS",
                "Quản lý và cấu hình IIS websites",
                "Quản lý DHCP",
                "Quản lý AD"
            ],
            correct: 1,
            explanation: "IIS Manager là công cụ GUI để quản lý websites, application pools, và cấu hình IIS."
        },
        {
            id: 70,
            question: "Bindings trong IIS định nghĩa?",
            answers: [
                "User permissions",
                "IP address, port, và host name cho website",
                "DNS records",
                "DHCP scope"
            ],
            correct: 1,
            explanation: "Bindings xác định IP address, port, protocol (HTTP/HTTPS), và hostname để truy cập website."
        }
    ],

    // Bài 14: Certificate Services & SSL/TLS
    certificates: [
        {
            id: 71,
            question: "Active Directory Certificate Services (AD CS) được sử dụng để?",
            answers: [
                "Cấp phát và quản lý chứng chỉ số",
                "Quản lý Active Directory",
                "Cấu hình DNS",
                "Backup dữ liệu"
            ],
            correct: 0,
            explanation: "AD CS là Certificate Authority (CA) để tạo và quản lý digital certificates."
        },
        {
            id: 72,
            question: "SSL/TLS được sử dụng để?",
            answers: [
                "Tăng tốc độ website",
                "Mã hóa kết nối giữa client và server",
                "Backup dữ liệu",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "SSL/TLS mã hóa dữ liệu truyền tải giữa browser và web server, bảo mật thông tin."
        },
        {
            id: 73,
            question: "Certificate Request File có extension là?",
            answers: [
                ".cer",
                ".crt",
                ".csr",
                ".pfx"
            ],
            correct: 2,
            explanation: ".csr (Certificate Signing Request) là file yêu cầu chứng chỉ gửi tới CA."
        },
        {
            id: 74,
            question: "Root CA là gì?",
            answers: [
                "CA ở cấp cao nhất trong hệ thống PKI",
                "CA phụ",
                "Web Server",
                "DNS Server"
            ],
            correct: 0,
            explanation: "Root CA là Certificate Authority gốc, ở đỉnh của chuỗi tin cậy PKI."
        },
        {
            id: 75,
            question: "HTTPS sử dụng giao thức mã hóa nào?",
            answers: [
                "FTP",
                "SSH",
                "SSL/TLS",
                "IPSec"
            ],
            correct: 2,
            explanation: "HTTPS = HTTP + SSL/TLS, sử dụng SSL/TLS để mã hóa dữ liệu."
        },
        {
            id: 76,
            question: "Certificate Authority Web Enrollment dùng để?",
            answers: [
                "Backup certificates",
                "Request và download certificates qua web interface",
                "Delete certificates",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "CA Web Enrollment cho phép users request và download certificates thông qua trình duyệt web."
        },
        {
            id: 77,
            question: "Subordinate CA là gì?",
            answers: [
                "Root CA",
                "CA con được issue certificate từ Root CA",
                "Web Server",
                "DNS Server"
            ],
            correct: 1,
            explanation: "Subordinate CA (Issuing CA) nhận certificate từ Root CA và issue certificates cho end entities."
        },
        {
            id: 78,
            question: "PKI (Public Key Infrastructure) bao gồm?",
            answers: [
                "Chỉ certificate",
                "CA, certificates, policies, procedures",
                "Chỉ Root CA",
                "Chỉ web server"
            ],
            correct: 1,
            explanation: "PKI là hệ thống hoàn chỉnh gồm CA, digital certificates, policies và procedures để quản lý public key encryption."
        },
        {
            id: 79,
            question: "Certificate Template trong AD CS dùng để?",
            answers: [
                "Backup certificate",
                "Định nghĩa loại và thuộc tính của certificate",
                "Delete certificate",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "Certificate Template định nghĩa settings, policies và permissions cho các loại certificates khác nhau."
        },
        {
            id: 80,
            question: "Certificate Revocation List (CRL) là gì?",
            answers: [
                "Danh sách certificates đang active",
                "Danh sách certificates đã bị thu hồi",
                "Danh sách CA",
                "Danh sách user"
            ],
            correct: 1,
            explanation: "CRL là danh sách các certificates đã bị revoke trước khi hết hạn vì lý do bảo mật."
        }
    ],

    // Bài 15: RODC & Advanced AD Features
    "advanced-ad": [
        {
            id: 81,
            question: "RODC (Read-Only Domain Controller) là gì?",
            answers: [
                "Domain Controller chỉ đọc, không ghi",
                "Domain Controller thông thường",
                "DNS Server",
                "DHCP Server"
            ],
            correct: 0,
            explanation: "RODC chứa bản sao read-only của AD database, thích hợp cho chi nhánh với bảo mật thấp."
        },
        {
            id: 82,
            question: "RODC thường được đặt ở đâu?",
            answers: [
                "Data center chính",
                "Chi nhánh với bảo mật vật lý kém",
                "Trong cloud",
                "Trên máy client"
            ],
            correct: 1,
            explanation: "RODC phù hợp cho chi nhánh không có bảo mật vật lý tốt, giảm thiểu rủi ro khi bị đánh cắp."
        },
        {
            id: 83,
            question: "Active Directory Recycle Bin dùng để?",
            answers: [
                "Xóa user account",
                "Khôi phục đối tượng AD đã xóa",
                "Backup AD",
                "Tạo user mới"
            ],
            correct: 1,
            explanation: "AD Recycle Bin cho phép khôi phục các đối tượng đã xóa với tất cả attributes."
        },
        {
            id: 84,
            question: "AD DS Snapshots là gì?",
            answers: [
                "Screenshot của Active Directory",
                "Bản snapshot của AD database tại một thời điểm",
                "Backup file",
                "Export AD data"
            ],
            correct: 1,
            explanation: "AD DS Snapshots tạo point-in-time snapshot của AD database để khôi phục hoặc so sánh."
        },
        {
            id: 85,
            question: "Fine-Grained Password Policy cho phép?",
            answers: [
                "Đặt cùng một password policy cho toàn domain",
                "Đặt password policy khác nhau cho từng OU hoặc group",
                "Xóa password",
                "Reset password"
            ],
            correct: 1,
            explanation: "Fine-Grained Password Policy (PSO) cho phép áp dụng password policy khác nhau cho từng nhóm user."
        },
        {
            id: 86,
            question: "Password Settings Object (PSO) được áp dụng cho?",
            answers: [
                "Chỉ OU",
                "User và Global Security Groups",
                "Chỉ Computer",
                "Domain"
            ],
            correct: 1,
            explanation: "PSO có thể áp dụng trực tiếp cho user accounts hoặc global security groups."
        },
        {
            id: 87,
            question: "RODC có cache password của user không?",
            answers: [
                "Có, tất cả passwords",
                "Có, nhưng chỉ những users được phép (Password Replication Policy)",
                "Không bao giờ",
                "Tùy vào DNS"
            ],
            correct: 1,
            explanation: "RODC chỉ cache passwords của users được allow trong Password Replication Policy."
        },
        {
            id: 88,
            question: "Để enable AD Recycle Bin, functional level tối thiểu là?",
            answers: [
                "Windows Server 2003",
                "Windows Server 2008",
                "Windows Server 2008 R2",
                "Windows Server 2012"
            ],
            correct: 2,
            explanation: "AD Recycle Bin yêu cầu forest functional level tối thiểu là Windows Server 2008 R2."
        },
        {
            id: 89,
            question: "Lệnh PowerShell nào để mount AD DS Snapshot?",
            answers: [
                "Mount-ADSnapshot",
                "ntdsutil snapshot mount",
                "dsamain -dbpath",
                "Get-ADSnapshot"
            ],
            correct: 2,
            explanation: "Sử dụng dsamain.exe với -dbpath để mount AD DS snapshot as LDAP server."
        },
        {
            id: 90,
            question: "RODC có thể là DNS Server không?",
            answers: [
                "Không bao giờ",
                "Có, với read-only DNS zones",
                "Có, giống writable DC",
                "Chỉ khi có internet"
            ],
            correct: 1,
            explanation: "RODC có thể host read-only copies của DNS zones để phục vụ DNS queries."
        }
    ],

    // Bài 16: VPN Services
    vpn: [
        {
            id: 91,
            question: "VPN (Virtual Private Network) được sử dụng để?",
            answers: [
                "Tạo kết nối an toàn qua Internet",
                "Tăng tốc độ Internet",
                "Backup dữ liệu",
                "Cấu hình DNS"
            ],
            correct: 0,
            explanation: "VPN tạo tunnel mã hóa qua mạng công cộng để kết nối an toàn."
        },
        {
            id: 92,
            question: "PPTP VPN sử dụng port nào?",
            answers: [
                "1723",
                "1701",
                "500",
                "443"
            ],
            correct: 0,
            explanation: "PPTP (Point-to-Point Tunneling Protocol) sử dụng TCP port 1723."
        },
        {
            id: 93,
            question: "L2TP/IPSec sử dụng port nào?",
            answers: [
                "1723",
                "1701 và 500",
                "443",
                "22"
            ],
            correct: 1,
            explanation: "L2TP sử dụng UDP port 1701, IPSec sử dụng UDP port 500."
        },
        {
            id: 94,
            question: "SSTP VPN sử dụng port nào?",
            answers: [
                "1723",
                "1701",
                "443",
                "80"
            ],
            correct: 2,
            explanation: "SSTP (Secure Socket Tunneling Protocol) sử dụng TCP port 443 (HTTPS)."
        },
        {
            id: 95,
            question: "Client-to-Site VPN là gì?",
            answers: [
                "Kết nối giữa 2 site offices",
                "Kết nối từ máy client cá nhân tới mạng công ty",
                "Kết nối LAN",
                "Kết nối Internet"
            ],
            correct: 1,
            explanation: "Client-to-Site VPN (Remote Access VPN) cho phép user từ xa kết nối vào mạng công ty."
        },
        {
            id: 96,
            question: "Site-to-Site VPN là gì?",
            answers: [
                "Kết nối client tới server",
                "Kết nối giữa 2 văn phòng/chi nhánh",
                "Kết nối Internet",
                "Kết nối LAN"
            ],
            correct: 1,
            explanation: "Site-to-Site VPN kết nối 2 mạng LAN ở các địa điểm khác nhau qua Internet."
        },
        {
            id: 97,
            question: "Routing and Remote Access Service (RRAS) dùng để?",
            answers: [
                "Cấu hình DNS",
                "Cấu hình VPN và routing trên Windows Server",
                "Backup dữ liệu",
                "Quản lý user"
            ],
            correct: 1,
            explanation: "RRAS là role service để cấu hình VPN server, NAT, và routing trên Windows Server."
        },
        {
            id: 98,
            question: "VPN Reconnect (IKEv2) có ưu điểm gì?",
            answers: [
                "Tự động reconnect khi mất kết nối tạm thời",
                "Tốc độ nhanh hơn",
                "Không cần password",
                "Miễn phí"
            ],
            correct: 0,
            explanation: "IKEv2 với VPN Reconnect tự động khôi phục VPN connection khi network briefly interrupted."
        },
        {
            id: 99,
            question: "Demand-Dial Interface trong RRAS dùng để?",
            answers: [
                "Kết nối VPN client",
                "Tạo Site-to-Site VPN connection",
                "Backup VPN",
                "Delete VPN"
            ],
            correct: 1,
            explanation: "Demand-Dial Interface thiết lập persistent hoặc on-demand connection giữa 2 routers (Site-to-Site VPN)."
        },
        {
            id: 100,
            question: "VPN Server cần role nào được cài đặt?",
            answers: [
                "DNS Server",
                "Remote Access role với DirectAccess and VPN",
                "DHCP Server",
                "File Services"
            ],
            correct: 1,
            explanation: "Cần cài đặt Remote Access role và chọn DirectAccess and VPN (RAS) role service."
        }
    ],

    // Bài 17: Network Policy Server (NPS) & RADIUS
    nps: [
        {
            id: 101,
            question: "NPS (Network Policy Server) là gì?",
            answers: [
                "RADIUS server của Microsoft",
                "DNS Server",
                "DHCP Server",
                "Web Server"
            ],
            correct: 0,
            explanation: "NPS là implementation của RADIUS server trên Windows Server."
        },
        {
            id: 102,
            question: "RADIUS được sử dụng để?",
            answers: [
                "Xác thực, ủy quyền và accounting cho network access",
                "Backup dữ liệu",
                "Cấu hình DNS",
                "Share files"
            ],
            correct: 0,
            explanation: "RADIUS (Remote Authentication Dial-In User Service) cung cấp AAA cho network access."
        },
        {
            id: 103,
            question: "Network Policy trong NPS dùng để?",
            answers: [
                "Xóa user",
                "Định nghĩa điều kiện và quyền truy cập mạng",
                "Backup NPS",
                "Cấu hình IP"
            ],
            correct: 1,
            explanation: "Network Policy xác định conditions và constraints cho phép user kết nối vào mạng."
        },
        {
            id: 104,
            question: "Connection Request Policy trong NPS dùng để?",
            answers: [
                "Chặn tất cả kết nối",
                "Xác định RADIUS server nào xử lý authentication request",
                "Tạo VPN",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "Connection Request Policy quyết định NPS xử lý request locally hay forward tới RADIUS server khác."
        },
        {
            id: 105,
            question: "RADIUS Client trong NPS là gì?",
            answers: [
                "Máy client cuối",
                "Network access server (như VPN, wireless AP) kết nối tới NPS",
                "User account",
                "DNS Server"
            ],
            correct: 1,
            explanation: "RADIUS Client là network device (VPN server, switch, AP) gửi authentication requests tới RADIUS server."
        },
        {
            id: 106,
            question: "Shared Secret trong RADIUS dùng để?",
            answers: [
                "Password của user",
                "Mã hóa communication giữa RADIUS client và server",
                "Tên miền",
                "IP address"
            ],
            correct: 1,
            explanation: "Shared Secret là password dùng để authenticate và encrypt messages giữa RADIUS client và server."
        },
        {
            id: 107,
            question: "NPS Accounting ghi lại thông tin gì?",
            answers: [
                "Chỉ username",
                "Connection details, duration, data transferred",
                "Chỉ IP address",
                "Không ghi lại gì"
            ],
            correct: 1,
            explanation: "RADIUS Accounting logs chi tiết về sessions: user, time, duration, bytes transferred."
        },
        {
            id: 108,
            question: "NPS có thể tích hợp với dịch vụ nào để authenticate?",
            answers: [
                "Chỉ local accounts",
                "Active Directory Domain Services",
                "Chỉ LDAP",
                "Không tích hợp được"
            ],
            correct: 1,
            explanation: "NPS tích hợp với AD DS để authenticate users against domain accounts."
        },
        {
            id: 109,
            question: "Remote RADIUS Server Group trong NPS dùng để?",
            answers: [
                "Backup NPS",
                "Forward requests tới nhóm RADIUS servers khác",
                "Delete users",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "Remote RADIUS Server Group cho phép NPS forward authentication requests tới các RADIUS servers khác."
        },
        {
            id: 110,
            question: "NPS Templates giúp?",
            answers: [
                "Backup NPS",
                "Tạo và apply cấu hình nhất quán",
                "Delete policies",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "NPS Templates cho phép tạo reusable configurations cho shared secrets, RADIUS clients, và các settings khác."
        }
    ],

    // Bài 18: Network Access Protection (NAP)
    nap: [
        {
            id: 111,
            question: "NAP (Network Access Protection) được sử dụng để?",
            answers: [
                "Kiểm tra và đảm bảo client đáp ứng yêu cầu bảo mật trước khi truy cập mạng",
                "Backup network",
                "Tăng tốc độ mạng",
                "Cấu hình router"
            ],
            correct: 0,
            explanation: "NAP kiểm tra health status của client (antivirus, updates, firewall) trước khi cho phép truy cập mạng."
        },
        {
            id: 112,
            question: "NAP có thể tích hợp với dịch vụ nào?",
            answers: [
                "Chỉ VPN",
                "Chỉ DHCP",
                "DHCP, VPN, 802.1X",
                "Chỉ DNS"
            ],
            correct: 2,
            explanation: "NAP có thể tích hợp với DHCP, VPN, và 802.1X để enforce health policies."
        },
        {
            id: 113,
            question: "Health Policy trong NAP định nghĩa?",
            answers: [
                "Tốc độ mạng",
                "Các yêu cầu bảo mật client phải đáp ứng",
                "Địa chỉ IP",
                "Tên miền"
            ],
            correct: 1,
            explanation: "Health Policy xác định các yêu cầu như firewall enabled, antivirus updated, Windows updates."
        },
        {
            id: 114,
            question: "Remediation Server trong NAP dùng để?",
            answers: [
                "Xóa client khỏi mạng",
                "Giúp client noncompliant trở nên compliant",
                "Backup dữ liệu",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "Remediation Server cung cấp updates, patches để client đáp ứng health requirements."
        },
        {
            id: 115,
            question: "System Health Validator (SHV) trong NAP có vai trò gì?",
            answers: [
                "Backup health data",
                "Kiểm tra health requirements trên server",
                "Delete noncompliant clients",
                "Cấu hình network"
            ],
            correct: 1,
            explanation: "SHV là component trên NPS server kiểm tra health statements từ clients."
        },
        {
            id: 116,
            question: "System Health Agent (SHA) trong NAP là gì?",
            answers: [
                "Service trên server",
                "Component trên client thu thập health information",
                "Network device",
                "DNS record"
            ],
            correct: 1,
            explanation: "SHA chạy trên client, thu thập health status và báo cáo lên NPS server."
        },
        {
            id: 117,
            question: "NAP Enforcement Point là gì?",
            answers: [
                "Client computer",
                "Network access device thực thi NAP policies (VPN, DHCP server, switch)",
                "User account",
                "DNS Server"
            ],
            correct: 1,
            explanation: "NAP Enforcement Point là infrastructure device áp dụng network access restrictions dựa trên health status."
        },
        {
            id: 118,
            question: "Restricted Network trong NAP là gì?",
            answers: [
                "Full network access",
                "Limited network chỉ cho phép truy cập remediation servers",
                "Không có network",
                "Internet access"
            ],
            correct: 1,
            explanation: "Restricted Network cô lập noncompliant clients, chỉ cho phép access tới remediation resources."
        },
        {
            id: 119,
            question: "NAP có bao nhiêu enforcement methods chính?",
            answers: [
                "2 methods",
                "3 methods",
                "4 methods: IPSec, 802.1X, VPN, DHCP",
                "5 methods"
            ],
            correct: 2,
            explanation: "NAP có 4 enforcement methods: IPSec, 802.1X (wired/wireless), VPN, và DHCP."
        },
        {
            id: 120,
            question: "Statement of Health (SoH) trong NAP chứa?",
            answers: [
                "User password",
                "Client health status information",
                "Network topology",
                "DNS records"
            ],
            correct: 1,
            explanation: "SoH là data packet chứa health status của client (firewall, antivirus, updates) gửi tới NPS."
        }
    ],

    // Bài 19: DFS (Distributed File System)
    dfs: [
        {
            id: 121,
            question: "DFS (Distributed File System) được sử dụng để?",
            answers: [
                "Tổ chức và quản lý shared folders trên nhiều server",
                "Backup dữ liệu",
                "Cấu hình DNS",
                "Quản lý user"
            ],
            correct: 0,
            explanation: "DFS tạo namespace logic để tổ chức shared folders từ nhiều server khác nhau."
        },
        {
            id: 122,
            question: "DFS Namespace là gì?",
            answers: [
                "DNS namespace",
                "Virtual view của shared folders từ nhiều server",
                "Active Directory namespace",
                "IP address range"
            ],
            correct: 1,
            explanation: "DFS Namespace tạo cấu trúc thư mục ảo thống nhất cho các shared folders phân tán."
        },
        {
            id: 123,
            question: "DFS Replication dùng để?",
            answers: [
                "Backup dữ liệu",
                "Đồng bộ dữ liệu giữa các server",
                "Xóa dữ liệu",
                "Mã hóa dữ liệu"
            ],
            correct: 1,
            explanation: "DFS Replication tự động đồng bộ files và folders giữa các server members."
        },
        {
            id: 124,
            question: "DFS có mấy loại namespace?",
            answers: [
                "1 loại",
                "2 loại: Domain-based và Standalone",
                "3 loại",
                "4 loại"
            ],
            correct: 1,
            explanation: "DFS có Domain-based namespace (tích hợp AD) và Standalone namespace."
        },
        {
            id: 125,
            question: "Domain-based DFS Namespace có ưu điểm gì so với Standalone?",
            answers: [
                "Nhanh hơn",
                "High availability và tích hợp AD",
                "Ít tốn tài nguyên hơn",
                "Không có ưu điểm"
            ],
            correct: 1,
            explanation: "Domain-based namespace có high availability, multiple namespace servers, và integrate với AD."
        },
        {
            id: 126,
            question: "Folder Target trong DFS là gì?",
            answers: [
                "Thư mục DNS",
                "UNC path của actual shared folder",
                "User folder",
                "Backup folder"
            ],
            correct: 1,
            explanation: "Folder Target là UNC path (\\\\server\\share) trỏ tới physical shared folder."
        },
        {
            id: 127,
            question: "DFS Replication sử dụng thuật toán nào?",
            answers: [
                "Full file copy",
                "Remote Differential Compression (RDC)",
                "Simple copy",
                "Không có thuật toán"
            ],
            correct: 1,
            explanation: "DFS-R sử dụng RDC để chỉ replicate các block dữ liệu thay đổi, tiết kiệm bandwidth."
        },
        {
            id: 128,
            question: "Replication Group trong DFS Replication là?",
            answers: [
                "User group",
                "Tập hợp các servers tham gia replication",
                "DNS group",
                "Security group"
            ],
            correct: 1,
            explanation: "Replication Group là collection của servers (members) replicate cùng một set of folders."
        },
        {
            id: 129,
            question: "DFS có thể replicate theo mấy topology?",
            answers: [
                "1 topology",
                "2 topologies: Full mesh và Hub/Spoke",
                "3 topologies",
                "Không có topology"
            ],
            correct: 1,
            explanation: "DFS-R hỗ trợ Full Mesh (all-to-all) và Hub and Spoke (hub-to-spokes) topologies."
        },
        {
            id: 130,
            question: "Referral trong DFS Namespace là gì?",
            answers: [
                "DNS record",
                "List of folder targets client có thể access",
                "User list",
                "Backup file"
            ],
            correct: 1,
            explanation: "Referral là ordered list các folder targets mà client nhận được khi access DFS folder."
        }
    ],

    // Bài 20: File Server Resource Manager (FSRM)
    fsrm: [
        {
            id: 131,
            question: "FSRM (File Server Resource Manager) được sử dụng để?",
            answers: [
                "Quản lý và giám sát storage trên file server",
                "Backup files",
                "Tạo user account",
                "Cấu hình DNS"
            ],
            correct: 0,
            explanation: "FSRM cung cấp công cụ quản lý quota, file screening, và storage reports."
        },
        {
            id: 132,
            question: "Quota trong FSRM dùng để?",
            answers: [
                "Giới hạn dung lượng lưu trữ",
                "Tăng dung lượng ổ đĩa",
                "Backup dữ liệu",
                "Xóa files"
            ],
            correct: 0,
            explanation: "Quota giới hạn dung lượng lưu trữ cho users hoặc folders."
        },
        {
            id: 133,
            question: "File Screening trong FSRM cho phép?",
            answers: [
                "Backup files",
                "Chặn hoặc giám sát các loại file cụ thể",
                "Mã hóa files",
                "Share files"
            ],
            correct: 1,
            explanation: "File Screening kiểm soát loại file nào được phép lưu trữ (vd: chặn .mp3, .exe)."
        },
        {
            id: 134,
            question: "Storage Reports trong FSRM cung cấp?",
            answers: [
                "Thống kê về file usage, quotas, file types",
                "Backup reports",
                "User reports",
                "DNS reports"
            ],
            correct: 0,
            explanation: "Storage Reports tạo báo cáo chi tiết về việc sử dụng storage, quota usage, file groups."
        },
        {
            id: 135,
            question: "File Group trong FSRM là gì?",
            answers: [
                "User group",
                "Tập hợp các file extensions để apply file screening",
                "Security group",
                "DNS group"
            ],
            correct: 1,
            explanation: "File Group là collection của file name patterns dùng để classify files cho screening."
        },
        {
            id: 136,
            question: "Hard Quota khác Soft Quota như thế nào?",
            answers: [
                "Giống nhau",
                "Hard quota chặn ghi khi đạt limit, Soft quota chỉ cảnh báo",
                "Soft quota chặn ghi",
                "Không có sự khác biệt"
            ],
            correct: 1,
            explanation: "Hard Quota prevents users from saving files khi exceed limit, Soft Quota chỉ generate notifications."
        },
        {
            id: 137,
            question: "File Management Task trong FSRM dùng để?",
            answers: [
                "Backup files",
                "Tự động hóa tác vụ trên files (expire, delete old files)",
                "Tạo users",
                "Cấu hình DNS"
            ],
            correct: 1,
            explanation: "File Management Tasks tự động run actions trên files dựa trên conditions (age, size, last access)."
        },
        {
            id: 138,
            question: "FSRM có thể gửi notification qua?",
            answers: [
                "Chỉ email",
                "Email, Event log, Command, Report",
                "Chỉ Event log",
                "Không gửi notification"
            ],
            correct: 1,
            explanation: "FSRM có thể send notifications qua email, event log, run command, hoặc generate reports."
        },
        {
            id: 139,
            question: "Active File Screening khác Passive File Screening?",
            answers: [
                "Giống nhau",
                "Active blocks file saves, Passive chỉ monitors và reports",
                "Passive blocks files",
                "Không có sự khác biệt"
            ],
            correct: 1,
            explanation: "Active screening prevents users from saving blocked file types, Passive screening chỉ monitors và logs."
        },
        {
            id: 140,
            question: "Classification Property trong FSRM dùng để?",
            answers: [
                "Xóa files",
                "Gán metadata properties cho files để management",
                "Backup files",
                "Share files"
            ],
            correct: 1,
            explanation: "Classification assigns properties to files để organize, manage, và apply policies dựa trên file content/metadata."
        }
    ],

    // Bài 21: Auditing & Security
    auditing: [
        {
            id: 141,
            question: "Auditing trong Windows Server dùng để?",
            answers: [
                "Giám sát và ghi log các hoạt động hệ thống",
                "Backup dữ liệu",
                "Tăng tốc độ server",
                "Cấu hình network"
            ],
            correct: 0,
            explanation: "Auditing theo dõi và log các sự kiện bảo mật như file access, logon events."
        },
        {
            id: 142,
            question: "Object Access Auditing giám sát?",
            answers: [
                "User login",
                "File và folder access",
                "Network traffic",
                "DNS queries"
            ],
            correct: 1,
            explanation: "Object Access Auditing ghi log khi user truy cập files, folders, registry keys."
        },
        {
            id: 143,
            question: "EFS (Encrypting File System) dùng để?",
            answers: [
                "Backup files",
                "Mã hóa files và folders trên NTFS",
                "Share files",
                "Delete files"
            ],
            correct: 1,
            explanation: "EFS mã hóa files/folders trên NTFS volume để bảo vệ dữ liệu."
        },
        {
            id: 144,
            question: "BitLocker khác EFS như thế nào?",
            answers: [
                "BitLocker mã hóa toàn bộ ổ đĩa, EFS mã hóa từng file",
                "Giống hệt nhau",
                "BitLocker mã hóa files, EFS mã hóa ổ đĩa",
                "Không có sự khác biệt"
            ],
            correct: 0,
            explanation: "BitLocker mã hóa full-disk encryption, EFS mã hóa file-level encryption."
        },
        {
            id: 145,
            question: "Event Viewer hiển thị log nào?",
            answers: [
                "Chỉ Application log",
                "Application, Security, System logs",
                "Chỉ Security log",
                "Không có log nào"
            ],
            correct: 1,
            explanation: "Event Viewer hiển thị nhiều log channels: Application, Security, System, và các custom logs."
        },
        {
            id: 146,
            question: "Advanced Audit Policy Configuration cho phép?",
            answers: [
                "Xóa audit logs",
                "Cấu hình chi tiết subcategories của auditing",
                "Backup logs",
                "Không có tác dụng"
            ],
            correct: 1,
            explanation: "Advanced Audit Policies cung cấp granular control với nhiều subcategories để audit specific events."
        },
        {
            id: 147,
            question: "SACL (System Access Control List) trong auditing định nghĩa?",
            answers: [
                "File permissions",
                "Audit entries cho objects",
                "User groups",
                "DNS records"
            ],
            correct: 1,
            explanation: "SACL chứa audit entries (ACEs) xác định events nào được audit khi users access objects."
        },
        {
            id: 148,
            question: "EFS Recovery Agent dùng để?",
            answers: [
                "Xóa encrypted files",
                "Khôi phục encrypted files khi user mất key",
                "Backup files",
                "Share files"
            ],
            correct: 1,
            explanation: "Recovery Agent có thể decrypt và recover EFS-encrypted files nếu user mất private key."
        },
        {
            id: 149,
            question: "Global Object Access Auditing cho phép?",
            answers: [
                "Xóa objects",
                "Apply audit policy tự động cho tất cả objects",
                "Backup objects",
                "Create objects"
            ],
            correct: 1,
            explanation: "Global Object Access Auditing tự động apply audit settings cho files/registry mà không cần set SACL riêng."
        },
        {
            id: 150,
            question: "Logon Auditing giám sát?",
            answers: [
                "File access",
                "User logon/logoff events",
                "Network traffic",
                "DNS queries"
            ],
            correct: 1,
            explanation: "Logon Auditing tracks authentication events: successful/failed logons, logoffs, account lockouts."
        }
    ],

    // Bài 22: Folder Redirection & Roaming Profiles
    "folder-redirection": [
        {
            id: 151,
            question: "Folder Redirection dùng để?",
            answers: [
                "Chuyển user folders (Documents, Desktop) lên network share",
                "Backup folders",
                "Xóa folders",
                "Tạo shortcuts"
            ],
            correct: 0,
            explanation: "Folder Redirection chuyển hướng user folders lên server để dữ liệu được backup và access từ nhiều máy."
        },
        {
            id: 152,
            question: "Roaming Profile là gì?",
            answers: [
                "Profile backup",
                "User profile được lưu trên server và follow user",
                "Local profile",
                "Temporary profile"
            ],
            correct: 1,
            explanation: "Roaming Profile lưu user profile trên server, cho phép user có cùng profile trên mọi máy."
        },
        {
            id: 153,
            question: "Folder Redirection được cấu hình thông qua?",
            answers: [
                "Registry",
                "Group Policy",
                "Command line",
                "PowerShell"
            ],
            correct: 1,
            explanation: "Folder Redirection được cấu hình và triển khai thông qua Group Policy."
        },
        {
            id: 154,
            question: "Những folder nào có thể redirect?",
            answers: [
                "Chỉ Documents",
                "AppData, Desktop, Documents, Pictures, Music, Videos",
                "Chỉ Desktop",
                "Không folder nào"
            ],
            correct: 1,
            explanation: "Có thể redirect nhiều special folders: AppData, Desktop, Start Menu, Documents, Pictures, Music, Videos, Favorites."
        },
        {
            id: 155,
            question: "Mandatory Profile là gì?",
            answers: [
                "Profile có thể sửa đổi",
                "Read-only profile, mọi thay đổi bị discard khi logoff",
                "Local profile",
                "Roaming profile"
            ],
            correct: 1,
            explanation: "Mandatory Profile là read-only roaming profile, user changes không được lưu lại."
        },
        {
            id: 156,
            question: "Offline Files kết hợp với Folder Redirection có lợi ích gì?",
            answers: [
                "Không có lợi ích",
                "Cho phép access redirected folders khi offline",
                "Xóa files tự động",
                "Backup files"
            ],
            correct: 1,
            explanation: "Offline Files cache redirected folders locally để users làm việc khi mất kết nối network."
        },
        {
            id: 157,
            question: "Profile path trong AD user properties trỏ tới?",
            answers: [
                "Local drive",
                "UNC path của roaming profile trên server",
                "Desktop",
                "Documents"
            ],
            correct: 1,
            explanation: "Profile path chứa UNC path (\\\\server\\share\\username) tới roaming profile location."
        },
        {
            id: 158,
            question: "Grant user exclusive rights to folder trong Folder Redirection có tác dụng gì?",
            answers: [
                "Xóa folder",
                "Chỉ user và System có quyền access folder",
                "Share folder công khai",
                "Backup folder"
            ],
            correct: 1,
            explanation: "Option này set permissions để chỉ user owner và SYSTEM account có thể access redirected folder."
        },
        {
            id: 159,
            question: "Folder Redirection có thể áp dụng cho?",
            answers: [
                "Chỉ administrators",
                "User Configuration trong GPO",
                "Computer Configuration",
                "Không áp dụng được"
            ],
            correct: 1,
            explanation: "Folder Redirection settings nằm trong User Configuration\\Policies\\Windows Settings\\Folder Redirection."
        },
        {
            id: 160,
            question: "Super-Mandatory Profile khác Mandatory Profile?",
            answers: [
                "Giống hệt nhau",
                "Super-Mandatory prevents logon nếu profile không load được",
                "Super-Mandatory có thể sửa đổi",
                "Không có sự khác biệt"
            ],
            correct: 1,
            explanation: "Super-Mandatory Profile (.man extension) prevents user logon nếu roaming profile không available."
        }
    ],

    // Câu hỏi tổng hợp
    all: []
};

// Debug: Check all topics before combining
console.log('=== Checking QuestionBank Topics ===');
const allTopics = ['installation', 'active-directory', 'ad-objects', 'powershell', 'networking', 
                   'storage', 'file-sharing', 'group-policy', 'wds', 'iis', 'certificates', 
                   'advanced-ad', 'vpn', 'nps', 'nap', 'dfs', 'fsrm', 'auditing', 'folder-redirection'];

allTopics.forEach(topic => {
    const questions = questionBank[topic];
    if (!questions) {
        console.error(`ERROR: Topic "${topic}" is undefined!`);
    } else if (!Array.isArray(questions)) {
        console.error(`ERROR: Topic "${topic}" is not an array!`);
    } else {
        console.log(`✓ Topic "${topic}": ${questions.length} questions`);
    }
});

// Tổng hợp tất cả câu hỏi vào category 'all' - with safe filtering
try {
    questionBank.all = [
        ...(questionBank.installation || []),
        ...(questionBank['active-directory'] || []),
        ...(questionBank['ad-objects'] || []),
        ...(questionBank.powershell || []),
        ...(questionBank.networking || []),
        ...(questionBank.storage || []),
        ...(questionBank['file-sharing'] || []),
        ...(questionBank['group-policy'] || []),
        ...(questionBank.wds || []),
        ...(questionBank.iis || []),
        ...(questionBank.certificates || []),
        ...(questionBank['advanced-ad'] || []),
        ...(questionBank.vpn || []),
        ...(questionBank.nps || []),
        ...(questionBank.nap || []),
        ...(questionBank.dfs || []),
        ...(questionBank.fsrm || []),
        ...(questionBank.auditing || []),
        ...(questionBank['folder-redirection'] || [])
    ];
    
    console.log(`✓ Total questions in 'all' category: ${questionBank.all.length}`);
} catch (e) {
    console.error('ERROR combining questions:', e);
    questionBank.all = [];
}

// Hàm trộn ngẫu nhiên câu hỏi
function shuffleArray(array) {
    if (!Array.isArray(array)) {
        console.error('shuffleArray: Input is not an array:', array);
        return [];
    }
    
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Hàm lấy câu hỏi theo topic
function getQuestionsByTopic(topic, count = 10) {
    console.log(`getQuestionsByTopic called: topic="${topic}", count=${count}`);
    
    // Get questions for the topic
    let questions = questionBank[topic];
    
    // If topic not found, try 'all' as fallback
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        console.warn(`Topic "${topic}" not found or empty, using 'all' as fallback`);
        questions = questionBank.all;
    }
    
    // If still no questions, return empty array
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        console.error(`No questions available for topic "${topic}"`);
        return [];
    }
    
    console.log(`Found ${questions.length} questions for topic "${topic}"`);
    
    // Shuffle and return requested count
    const shuffled = shuffleArray(questions);
    const result = shuffled.slice(0, Math.min(count, shuffled.length));
    
    console.log(`Returning ${result.length} shuffled questions`);
    return result;
}

console.log('=== questions.js loaded successfully ===');
