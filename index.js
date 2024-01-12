// Bài 1
document.getElementById("btn_ketQua").onclick = function () {
  var diemChuan = document.getElementById("txt_diemChuan").value * 1;
  if (diemChuan !== 30 && diemChuan !== 29 && diemChuan !== 25) {
    alert(
      "Điểm chuẩn của 3 môn thường tối đa 30đ. Nên có thể lấy các điểm chuẩn như sau: 30,25,29."
    );
  }
  var khuVuc = document.getElementById("sl_khuVuc").value;
  var doiTuong = document.getElementById("sl_doiTuong").value;
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;

  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
  }
  switch (doiTuong) {
    case "1":
      diemDoiTuong = 2.5;
      break;
    case "2":
      diemDoiTuong = 1.5;
      break;
    case "3":
      diemDoiTuong = 1;
      break;
    default:
      diemDoiTuong = 0;
  }

  var diemMon1 = document.getElementById("txt_diemMon1").value * 1;
  var diemMon2 = document.getElementById("txt_diemMon2").value * 1;
  var diemMon3 = document.getElementById("txt_diemMon3").value * 1;

  if (
    diemMon1 > 10 ||
    diemMon2 > 10 ||
    diemMon3 > 10 ||
    diemMon1 < 0 ||
    diemMon2 < 0 ||
    diemMon3 < 0
  ) {
    alert("Điểm các môn không quá 10! Và nhỏ hơn 0! Vui lòng nhập lại");
  }

  var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

  if (tongDiem >= diemChuan) {
    document.getElementById(
      "txt_ketQuaDiem"
    ).innerHTML = `Bạn đã đậu. Tổng điểm của bạn là ${tongDiem}`;
    document.getElementById("txt_ketQuaDiem").classList.remove("bg-danger");
    document.getElementById("txt_ketQuaDiem").classList.add("bg-success");
  } else {
    document.getElementById(
      "txt_ketQuaDiem"
    ).innerHTML = `Bạn đã rớt. Tổng điểm của bạn là ${tongDiem}`;
    document.getElementById("txt_ketQuaDiem").classList.remove("bg-success");
    document.getElementById("txt_ketQuaDiem").classList.add("bg-danger");
  }
};

// Bài 2
document.getElementById("btn_tinhTienDien").onclick = function () {
  var hoVaTen = document.getElementById("txt_hoVaTen").value;
  var soKW = document.getElementById("txt_soKW").value * 1;
  var tienDien = 0;
  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }
  document.getElementById(
    "txt_tienDien"
  ).innerHTML = `Họ tên: ${hoVaTen}. Tiện điện: ${tienDien.toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ`;
};

// Bài 3
document.getElementById("btn_TienThue").onclick = function () {
  var hoTen = document.getElementById("txt_hoTen").value;
  var tongThuNhapNam = document.getElementById("txt_TongThuNhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("txt_NguoiPhuThuoc").value * 1;

  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  console.log(thuNhapChiuThue)
  var thue = 0;
  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thue = 60000000 * 0.05 + 60000000 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  }

  document.getElementById(
    "txt_TongThue"
  ).innerHTML = `Thuế thu nhập cá nhân của ${hoTen} là: ${thue.toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ`;
};

// Bài 4
function toggleSoKetNoiInput() {
  var loaiKhachHang = document.getElementById("sl_loaiKhachHang").value;
  var txtSoKetNoi = document.getElementById("txt_soKetNoi");
  txtSoKetNoi.disabled = loaiKhachHang === "1";
  txtSoKetNoi.value = "";
}
document.getElementById("btn_tinhTienCap").onclick = function () {
  var loaiKhachHang = document.getElementById("sl_loaiKhachHang").value;
  var maKhachHang = document.getElementById("txt_maKhachHang").value;
  var soKetNoi = parseInt(document.getElementById("txt_soKetNoi").value) || 0;
  var soKenhCaoCap =
    parseInt(document.getElementById("txt_soKenhCaoCap").value) || 0;

  if (loaiKhachHang !== "1" && loaiKhachHang !== "2") {
    alert("Vui lòng chọn loại khách hàng.");
    return;
  }

  var phiXuLyHoaDon = 0;
  var phiDichVuCoBan = 0;
  var phiThueKenhCaoCap = 0;

  if (loaiKhachHang === "1") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang === "2") {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0);
    phiThueKenhCaoCap = 50 * soKenhCaoCap;
  }

  var tongTienCap = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

  document.getElementById(
    "txt_TienCap"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}. Tiền cáp: $${tongTienCap
    .toFixed(2)
    .toLocaleString()}`;
};
