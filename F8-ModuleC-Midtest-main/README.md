được sử dụng các công cụ sau

- Bootstrap
- Tailwind CSS
- Google Fonts
- Font Awesome
- Boxicons

Yêu cầu

- Xây dựng ứng dụng quản lý sản phẩm với ReactJS và json-server bao gồm các tính năng sau:

Xây dựng bộ định tuyến, layout và giao diện cho ứng dụng

- Header: Hiển thị tên ứng dụng và menu điều hướng.
- Bộ định tuyến cho các trang: Trang chủ, trang đăng ký, trang đăng nhập.
- Xử lý đúng route "not found" khi người dùng nhập một route không tồn tại.
- Giao diện chung cho ứng dụng.

  Trang chủ.

- Danh sách sản phẩm dạng lưới bao gồm tối thiểu các thông tin sau: tên sản phẩm, giá sản phẩm, ảnh sản phẩm, nút xem chi tiết.
- Tính năng chuyển đổi layout: lưới hoặc danh sách.
- Tính năng lọc sản phẩm theo danh mục (dựa vào categoryId của sản phẩm và danh sách danh mục có ở json-server).
- Tìm kiếm sản phẩm.

  Trang đăng ký.

- Email: Kiểu email, bắt buộc nhập.
- Mật khẩu: Kiểu password, bắt buộc nhập, ít nhất 6 ký tự.
- Nếu đăng ký thất bại, hiển thị đúng thông báo lỗi json-server trả về.

Trang đăng nhập.

- Validation tương tự trang đăng ký.
- Nếu đăng nhập thất bại, hiển thị đúng thông báo lỗi json-server trả về.

  Private route.

- Duy trì phiên làm việc của người dùng, nếu người dùng có role là "admin" thì sẽ chuyển hướng đến trang quản lý sản phẩm, nếu không phải role "admin" thì chuyển hướng đến trang chủ.
- Tính năng đăng xuất.

  Trang quản lý sản phẩm.

- Danh sách sản phẩm dạng bảng.
- Chức năng xoá sản phẩm có confirm, sau khi xoá thành công sẽ cập nhật lại danh sách sản phẩm.

Trang thêm sản phẩm.

- Tên sản phẩm: Kiểu text, bắt buộc nhập.
- Giá: Kiểu number, bắt buộc nhập, giá trị lớn hơn hoặc bằng 0.
- Mô tả: Kiểu text, không bắt buộc nhập.
- Danh mục: Kiểu select, bắt buộc chọn, bao gồm các danh mục lấy từ json-server.
- Thêm thành công: reset form và hiển thị thông báo thêm sản phẩm thành công.

  Trang cập nhật sản phẩm.

- Yêu cầu đưa thông tin cũ của sản phẩm vào form cập nhật.
- Kiểm tra dữ liệu tương tự khi thêm sản phẩm.
- Cập nhật thành công, reset form, hiển thị thông báo cập nhật thành công.
