Clone tải xuống toàn bộ source base dự án, thực hiện bài kiểm tra ngay trong source-base này.

- Tắt các extension sử dụng AI trong quá trình code như: github Copilot, Tabnine, Codeium...
- Không mở tab nào khác ngoài tab của source-base này và tab từ website bootstrap, tailwindcss.

```
npm i
npm run dev
```

## 1. Xây dựng bộ định tuyến bao gồm các trang: (1 điểm)

- Hiển thị danh sách sản phẩm
- Thêm sản phẩm
- Sửa sản phẩm
- Đăng ký
- Đăng nhập

## 2. Trang danh sách sản phẩm (2 điểm)

- Hiện thị danh sách sản phẩm dạng bảng bao gồm: tên, giá, mô tả, nút bấm thêm, sửa, xóa
- Tính năng xoá có confirm trước khi xoá

## 3. Trang thêm sản phẩm (2 điểm)

- Validation: tên sản phẩm tối thiểu 6 ký tự, giá không âm. (1đ)
- Thêm sản phẩm thành công và chuyển hướng về trang danh sách sản phẩm. (1đ)

## 4. Trang sửa sản phẩm (2 điểm)

- Validation: tên sản phẩm tối thiểu 6 ký tự, giá không âm. (0.5đ)
- Điền được dữ liệu sản phẩm cần sửa vào form. (0.5đ)
- Sửa sản phẩm thành công và chuyển hướng về trang danh sách sản phẩm. (1đ)

## 5. Đăng ký, đăng nhập: (3 điểm)

- Validation: email đúng định dạng, password tối thiếu 6 ký tự, tối đa 255 ký tự. (1đ)
- Đăng ký thành công, chuyển sang trang đăng nhập. (1đ)
- Đăng nhập thành công, chuyển sang trang danh sách sản phẩm. (1đ)
