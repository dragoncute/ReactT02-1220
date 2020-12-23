- Họ tên: Trần Công Lực
- Ekino Vietnam
- Git: https://github.com/luctc-dev/ReactT02-1220


- SPA: Single Page Application

- Công việc Back & Front End (Phong cách truyền thống)
  - Xây dựng giao diện HTML
  -> Cung cấp mã nguồn HTML cho team Back End (Mã nguồn html tĩnh)
  -> Dựa vào mã nguồn để xử lý và đổ dữ liệu thức tế từ Database vào HTML
  -> User gủi một request lên Server -> Server trả về toàn bộ file HTML đã được tính toán và xử lí, đổ dữ liệu.

- Phong cách hiện đại (ReactJs)
  -> Back End và Front End sẽ được tách biệt hoàn toàn
  -> Back End sẽ không nhận mã nguồn HTML của Front End 
  -> Front End nhiệm vụ sẽ khó hơn một chút 
    1. Vừa code giao diện (HTML, CSS, ..)
    2. Vừa phải đảm nhiệm nhiệm vụ đổ dữ liệu thực tế vào trang Web

  -> Nhiệm vụ của Back End sẽ nhẹ bớt một chút. (Không cần phải xử lí HTML)


- Angular, VueJs, ReactJs, AngularJs (Gần tuyệt chủng)
  - Angular (Google xây dựng)
  - ReactJs (Facebook xây dựng)
  - VueJs (Nhân viên cũ của Google, Được tài trợ bởi Laravel)

- Độ khó: Angular < ReactJs < VueJs
- Độ phổ biến (Job): ReactJs < Angular < VueJs
- Tuổi: Angular < ReactJs < VueJs 
- Độ giống nhau
  ReactJs giống VueJs (70%)
  VueJs giống AngularJs

- Phỏng vấn bằng ReactJs (Lúc làm cho làm VueJs)
- Phỏng vấn ReactJs (Làm Angular)
- Phỏng vấn VueJs (Làm ReactJs)

```
npx create-react-app ten_project
```

- Babel là gì?
  - Trình biên dịch
- Webpack là gì? 
  - Tool giúp đóng gói mã nguồn
- Components
  - Trang Web tách ra thành nhiều thành phần nhỏ 
  - Ráp những thành phần nhỏ này lại 1 trang Web lớn

- Export/Import một module trong Js

- Props
  - Property (Thuộc tính của component)
- State
  - Trạng thái của component (Dữ liệu)

- React Hooks (Function)
  - Khuyến khích tạo component bằng function (Functional programming)

- Render (Từ dữ liệu 
  -> Thay đổi vào Object của ReactJs 
  -> Sử dụng Javascript DOM để hiện thị ra giao diện
)
- Rerender (Từ lần thứ 2 trở đi nếu dữ liệu thay đổi 
    -> re-render
  )

- Tập trung vào xử lí dữ liệu