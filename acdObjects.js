const aObject = { 
 name: "", gender: "y", 
 flag: "die", 
 child: [ 
 { 
 name: "Diệu", gender: "y", 
 spouse:"Đề", 
 child: [ 
 { 
 name: "Nguyễn Ngọc Dung", gender: "x", 
 child: [ 
 { flag: "me", name:"Nguyễn Công Thành",dob: "7/11/2000", gender: "xy", node: "I get a sample DDC Config File JSON that shows how to implement Trade-In Advisor with the Interactive Banne", child: [{ name: "Nguyễn Kim Vân", gender: "x",dob: "20/12/2025" }] }, 
 { name: "long", gender: "y",dob: "26/6/2005" } 
 ] 
 }, 
 { name: "loan", gender: "x", spouse:"Thắng",child: [{ name: "mạnh", gender: "y" }, { name: "Bích", gender: "x" }] }, 
 { name: "Hùng", flag: "die",gender: "y" }, 
 { name: "Phượng", gender: "x", spouse:"Sơn", child: [{ name: "Khoa", gender: "y" }, { name: "Hằng", gender: "x" }] }, 
 { name: "Dũng", gender: "y", spouse:"Nhường",child: [{ name: "quang", gender: "y" }, { name: "trang", gender: "x" }, { name: "Thành", gender: "y" }] }, 
 ] 
 }, { 
 name: "Thuận", gender: "y", 
 child: [] 
 }, { 
 name: "Dịu", gender: "y", 
 child: [] 
 }, 
 ] 
}; 

const cObject = { 
 name: "Hách", gender: "y", 
 child: [ 
 { 
 name: "Hưởng", gender: "y", 
 child: [ 
 { 
 name: "v.Anh", gender: "y", 
 child: [ 
 { name: "Đoàn", gender: "y" }, 
 { name: "Trương", gender: "y" }, 
 { name: "", gender: "x" } 
 ] 
 }, 
 { name: "Hiếu", gender: "x", child: [{ name: "linh", gender: "y" }, { name: "", gender: "y" }] }, 
 { name: "Huê", gender: "y", child: [{ name: "huy", gender: "y" }, { name: "ngoc", gender: "y" }] }, 
 ] 
 }, { 
 name: "Tiến", gender: "y", 
 child: [ 
 { name: "Thuận", gender: "y", flag:"die",spouse:"Hội", 
 child: [{ name: "Lê Thị Thu Huyền", gender: "x", 
 child: [{ name: "Nguyễn Kim Vân", gender: "x" }] }, { name: "Lê Thị Huyên", gender: "x" },{ name: "Lê Thị Hằng", gender: "x" }] }, 
 { name: "Hòa", gender: "x", spouse:"Thập", 
 child: [{ name: "Phương", gender: "x" }, { name: "Bắc", flag:"die", gender: "y" }, { name: "Khánh", gender: "y" }] }, 
 { name: "Xiêm", gender: "x", spouse:"Nhâm", 
 child: [{ name: "nhung", gender: "x" }, { name: "ngoc", gender: "x" }] }, 
 { name: "Thiêm(Mẩu)", gender: "x", 
 child: [{ name: "Chiến", gender: "y" }, { name: "My", gender: "x" }] }, 
 { name: "Năm", gender: "x", child: [{ name: "Bích", gender: "x" }, { name: "Trinh", gender: "x" }, { name: "Bắc", gender: "y" }] }, 
 ] 
 }, { 
 name: "Xuân", gender: "x", 
 child: [ 
 { name: "Đào", gender: "x", spouse:"Đông", 
 child: [{ name: "Vân Anh", gender: "x" }, { name: "Trường", gender: "y" }, { name: "bi", gender: "y" }] }, 
 { name: "vinh", gender: "y", spouse:"Tuyến", 
 child: [{ name: "x", gender: "y" }, { name: "x", gender: "y" }] }, 
 { name: "Vũ", gender: "y",spouse:"Hà", child: [{ name: "x", gender: "y" }, { name: "x", gender: "y" }] }, 
 ] 
 }, { 
 name: "Thái", gender: "x", 
 child: [ 
 { name: "thư", gender: "x", spouse:"Công",
child: [{ name: "trang", gender: "x" }, { name: "han", gender: "x" }, { name: "x", gender: "y" }] }, 
 { name: "nhàn", gender: "x", spouse:"Nguyên",child: [{ name: "bong", gender: "y" }, { name: "kendy", gender: "y" }, { name: "kendy", gender: "y" }] }, 
 { name: "Khải", gender: "y", child: [{ name: "x", gender: "y" }, { name: "x", gender: "y" }] }, 
 ] 
 }, { 
 name: "x", gender: "y", 
 child: [{ 
 name: "Mạnh", gender: "y", 
 child: [{ 
 name: "", gender: "x",spouse:"Độ", 
 child: [] 
 }] 
 }] 
 }, 
 ] 
}; 

const dObject = { 
 name: "", gender: "y", 
 child: [ 
 { 
 name: "Lương", gender: "x", 
 child: [ 
 { 
 name: "Hoa", gender: "x", 
 child: [ 
 { name: "long-quynh", gender: "y", child: [{ name: "van", gender: "y" }] }, 
 { name: "vu(hai)", gender: "y" }, 
 { name: "ba", gender: "y" } 
 ] 
 }, 
 { name: "Hồng", gender: "y", child: [{ name: "minh-trang(nhi,diem,thanh)", gender: "y" }, { name: "hai-thuan(hieu-hien-x)", gender: "y" }, { name: "van-dat(x-x)", gender: "y" }] }, 
 { name: "Hoàng", gender: "y",spouse:"Loan", 
 child: [{ name: "nhung(loan)", gender: "y" }, { name: "(trung)loan", gender: "y" }, { name: "dung()loan", gender: "y" }, { name: "dung()loan", gender: "y" }] }, 
 { name: "Hội", gender: "x", 
 child: [{ name: "Lê Thị Thu Huyền", gender: "x", 
 child: [{ name: "Nguyễn Kim Vân", gender: "x" }] }, { name: "Lê Thị Huyên", gender: "x" },{ name: "Lê Thị Hằng", gender: "x" }] 

 }, 
 { name: "Tỉnh", gender: "y" }, 
 { name: "Ngọ", gender: "y",spouse:"Nga", child: [{ name: "binh", gender: "y" }, { name: "doan", gender: "y" }] }, 
 { name: "Hòa", gender: "x", child: [{ name: "huong", gender: "y" }] }, 
 ] 
 }, 
 ] 
};