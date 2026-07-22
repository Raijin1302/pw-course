# 📚 TỔNG HỢP KIẾN THỨC GIT & JAVASCRIPT

---

## PHẦN 1: TỔNG HỢP KIẾN THỨC TRỌNG TÂM GIT

### 1. Git & Quy ước 4 vùng làm việc
* **Vùng Local:** Thư mục mới tạo trên máy tính, chưa chạy lệnh `git init`. Toàn bộ file chưa được Git theo dõi (untracked).
* **Working Directory:** Nơi chứa các file đang làm việc sau khi đã khởi tạo Git (`git init`).
* **Staging Area:** Vùng chuẩn bị, chứa các file đã được đánh dấu (lệnh `git add`) để chờ commit.
* **Repository:** Kho lưu trữ chính thức, lưu lại lịch sử các bản chụp (snapshot/commit) của dự án.

```bash
git init                 # Khởi tạo Git repository
git add <file_name>      # Đưa file chỉ định vào Staging Area
git add .                # Đưa toàn bộ file thay đổi vào Staging Area
git commit -m "message"  # Lưu snapshot từ Staging Area vào Repository
```

---

## PHẦN 2: KHAI BÁO BIẾN & CÁC KIỂU DỮ LIỆU CƠ BẢN 

### 1. Khai báo biến với `let` và in ra Console (`01-hello-world.js`)
* **Lý thuyết:** Từ khóa `let` dùng để khai báo một biến số. Giá trị của biến khai báo bằng `let` có thể thay đổi được trong quá trình chạy chương trình. Hàm `console.log()` dùng để in giá trị ra màn hình console, có thể truyền nhiều tham số cách nhau bởi dấu phẩy `,`.

```javascript
let myName = "Phong"

console.log("Hello world!", myName)
// Kết quả in ra: Hello world! Phong
```

### 2. Hằng số `const` và quy tắc bất biến (`03-const.js`)
* **Lý thuyết:** Từ khóa `const` (Constant) dùng để khai báo hằng số. Khác với `let`, giá trị của `const` bắt buộc phải gán ngay khi khai báo và không thể gán lại (re-assign) giá trị mới sau đó. Nếu cố tình gán lại, chương trình sẽ báo lỗi `TypeError: Assignment to constant variable.`.

```javascript
const slogan = "K24 Playwright TypeScript"

console.log(slogan)

// LỖI SAI: Cố tình gán lại giá trị cho hằng số const
slogan = "dsadsadasdsad" // -> Chương trình sẽ báo lỗi tại dòng này!

console.log(slogan)
```

### 3. Kiểu dữ liệu Số - `Number` & Các giá trị đặc biệt (`04-number.js`)
* **Lý thuyết:** Trong JavaScript, kiểu `Number` chứa cả số nguyên và số thập phân. Ngoài ra có 2 giá trị đặc biệt cần lưu ý:
  * **`Infinity` (Vô cực):** Xuất hiện khi thực hiện phép chia một số dương cho `0`.
  * **`NaN` (Not a Number):** Xuất hiện khi thực hiện phép toán không hợp lệ giữa số và chuỗi (ví dụ: lấy số nhân với một chuỗi chữ cái).

```javascript
// Infinity (Vô cực)
const infinityNum = 100 / 0
console.log(infinityNum) // -> Infinity

// NaN (Not a Number)
const myNaN = 100 * "ABC"
console.log(myNaN) // -> NaN

console.log(myAge, myGrade, myNaN)
```

### 4. Kiểu dữ liệu Chuỗi - `String` & Template Literals (`05-string.js`)
* **Lý thuyết:** Có thể khai báo chuỗi bằng nháy đơn `'...'` hoặc nháy kép `"..."`. Tuy nhiên, cách hiện đại và tiện lợi nhất là dùng **Template Literals** với dấu nháy ngược (backtick) `` `...` ``. Khi dùng dấu này, ta có thể nhúng trực tiếp biến vào trong chuỗi thông qua cú pháp `${tên_biến}` mà không cần dùng dấu `+` để nối chuỗi.

```javascript
const name = "Hoan"
const message = "Hello"

// Nối chuỗi thông minh bằng Template Literals (dấu backtick)
const tpltStr = `${message}${name} Age : 10`

console.log(name, message, tpltStr)
// Kết quả tpltStr: "Hello Hoan Age : 10"
```

### 5. Kiểu dữ liệu Logic - `Boolean` (`06-boolean.js`)
* **Lý thuyết:** Kiểu dữ liệu `Boolean` chỉ nhận 1 trong 2 giá trị duy nhất là `true` (đúng) hoặc `false` (sai). Thường được dùng để lưu trạng thái hoặc kiểm tra điều kiện logic.

```javascript
const isActive = true
const isDisable = false

console.log(isActive, isDisable)
// Kết quả in ra: true false
```

---

## PHẦN 3: CẤU TRÚC ĐIỀU KIỆN & VÒNG LẶP (LESSON 04)

### 1. Câu lệnh rẽ nhánh `if - else if - else` (`03.condition.js`)
* **Lý thuyết:** Câu lệnh điều kiện dùng để thực thi các khối code khác nhau dựa trên các điều kiện logic.
* **Toán tử logic `&&` (AND):** Đòi hỏi tất cả các điều kiện kết hợp phải đều đúng (`true`). Ngay khi chương trình tìm thấy khối `if` hoặc `else if` có điều kiện đúng, nó sẽ thực thi khối code đó và bỏ qua toàn bộ các nhánh bên dưới.

```javascript
// Giả sử điểm số của học sinh (thang điểm 10)
let diem = 7.5

if (diem >= 8.0 && diem <= 10) {
    console.log("Giỏi")
} else if (diem >= 6.5 && diem < 8.0) {
    console.log("Khá") // -> Với diem = 7.5, code sẽ chạy vào nhánh này!
} else if (diem >= 5.0 && diem < 6.5) {
    console.log("Trung bình")
} else if (diem >= 0 && diem < 5.0) {
    console.log("Yếu")
} else {
    console.log("Vui lòng nhập từ 0 đến 10.")
}
```

### 2. Vòng lặp `for` & Kỹ thuật nối chuỗi trong vòng lặp (`04.loopfor.js`)
* **Lý thuyết:** Vòng lặp `for` cho phép lặp một đoạn code theo số lần định trước. Cú pháp: `for (khởi_tạo ; điều_kiện_dừng ; bước_nhảy)`.
* **Kỹ thuật cộng dồn chuỗi (`+=`):** Khi khởi tạo một chuỗi rỗng `let str = ""`, ta có thể dùng toán tử `+=` bên trong vòng lặp để nối liên tiếp các giá trị vào đuôi chuỗi ban đầu.

```javascript
let str = ""

// Vòng lặp chạy từ i = 0 đến i = 8 (điều kiện i < 9)
for (let i = 0; i < 9; i++) {
    str += i // Tương đương với: str = str + i (nối chữ số i vào chuỗi str)
}

console.log(str)
// Expected output: "012345678"
```