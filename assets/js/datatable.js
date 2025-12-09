import { datas, devices, cameras } from "./data.js";

$(document).ready(function () {
  $("#myDataTable").DataTable({
    data: datas,
    searching: false,
    autoWidth: false,
    scrollY: true,
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          // meta.row là chỉ mục hàng (bắt đầu từ 0), cộng 1 để lấy STT
          return meta.row + 1;
        },
        orderable: false,
        width: "5px",
        className: "dt-center",
      },
      {
        data: "account_name",
        orderable: false,
      },
      {
        data: "email",
        orderable: false,
      },
      {
        data: "phone",
        width: "80px",
        orderable: false,
        className: "dt-center",
      },
      {
        data: "address",
        orderable: false,
      },
      {
        data: "created_at",
        className: "dt-center",
        orderable: false,
      },
      {
        data: "device_count",
        className: "dt-center",
        orderable: false,
      },
      {
        data: null, // Đặt là null vì bạn sẽ tạo nội dung tùy chỉnh
        defaultContent: `<button class="btn btn-sm btn-edit"><i class="fa-solid fa-pen-to-square"></i></button> 
          <button class="btn btn-sm btn-delete"><i class="fa-solid fa-trash"></i></button>`,
        orderable: false, // Không cho phép sắp xếp cột này
      },
    ],
    dom: '<"top" >rt<"bottom d-flex flex-wrap justify-content-between align-items-center"ilp>',
    pagingType: "simple_numbers",
    language: {
      url: "//cdn.datatables.net/plug-ins/2.0.7/i18n/vi.json",
      info: "Hiển thị _START_ tới _END_ của _TOTAL_ tài khoản",
      infoEmpty: "Không có tài khoản nào được tìm thấy",
      infoFiltered: "(được lọc từ _MAX_ tài khoản)",
      lengthMenu: "Hiển thị _MENU_ tài khoản",
      // Định nghĩa lại các nút phân trang cho kiểu "simple_numbers"
      paginate: {
        next: "Sau",
        previous: "Trước",
      },
    },
  });

  $("#deviceDataTable").DataTable({
    data: devices,
    searching: false,
    autoWidth: false,
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          // meta.row là chỉ mục hàng (bắt đầu từ 0), cộng 1 để lấy STT
          return meta.row + 1;
        },
        orderable: false,
        width: "5px",
        className: "dt-center",
      },
      {
        data: "name",
        orderable: false,
      },
      {
        data: "MAC",
        orderable: false,
      },
      {
        data: "phoneTK",
        width: "80px",
        orderable: false,
        className: "dt-center",
      },
      {
        data: "emailTK",
        orderable: false,
      },
      {
        data: "countTK",
        className: "dt-center",
        orderable: false,
      },
      {
        data: "created_at",
        className: "dt-center",
        orderable: false,
      },
      {
        data: null, // Đặt là null vì bạn sẽ tạo nội dung tùy chỉnh
        defaultContent: `<button class="btn btn-sm btn-edit"><i class="fa-solid fa-pen-to-square"></i></button> 
          <button class="btn btn-sm btn-delete"><i class="fa-solid fa-trash"></i></button>`,
        orderable: false, // Không cho phép sắp xếp cột này
      },
    ],
    dom: '<"top" >rt<"bottom d-flex flex-wrap justify-content-between align-items-center"ilp>',
    pagingType: "simple_numbers",
    language: {
      url: "//cdn.datatables.net/plug-ins/2.0.7/i18n/vi.json",
      info: "Hiển thị _START_ tới _END_ của _TOTAL_ thiết bị",
      infoEmpty: "Không có thiết bị nào được tìm thấy",
      infoFiltered: "(được lọc từ _MAX_ thiết bị)",
      lengthMenu: "Hiển thị _MENU_ thiết bị",
      // Định nghĩa lại các nút phân trang cho kiểu "simple_numbers"
      paginate: {
        next: "Sau",
        previous: "Trước",
      },
    },
  });

  $("#cameraDatatable").DataTable({
    data: cameras,
    searching: false,
    autoWidth: false,
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          // meta.row là chỉ mục hàng (bắt đầu từ 0), cộng 1 để lấy STT
          return meta.row + 1;
        },
        orderable: false,
        width: "5px",
        className: "dt-center",
      },
      {
        data: "mac",
        orderable: false,
      },
      {
        data: "imei",
        orderable: false,
        className: "dt-center",
      },
      {
        data: "created_at",
        className: "dt-center",
        orderable: false,
      },
      {
        data: null, // Đặt là null vì bạn sẽ tạo nội dung tùy chỉnh
        defaultContent: `<button class="btn btn-sm btn-edit"><i class="fa-solid fa-pen-to-square"></i></button> 
          <button class="btn btn-sm btn-delete"><i class="fa-solid fa-trash"></i></button>`,
        orderable: false, // Không cho phép sắp xếp cột này
      },
    ],
    dom: '<"top" >rt<"bottom d-flex flex-wrap justify-content-between align-items-center"ilp>',
    pagingType: "simple_numbers",
    language: {
      url: "//cdn.datatables.net/plug-ins/2.0.7/i18n/vi.json",
      info: "Hiển thị _START_ tới _END_ của _TOTAL_ thiết bị",
      infoEmpty: "Không có thiết bị nào được tìm thấy",
      infoFiltered: "(được lọc từ _MAX_ thiết bị)",
      lengthMenu: "Hiển thị _MENU_ thiết bị",
      // Định nghĩa lại các nút phân trang cho kiểu "simple_numbers"
      paginate: {
        next: "Sau",
        previous: "Trước",
      },
    },
  });
});
