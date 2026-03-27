import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
  <div className="mx-auto max-w-6xl px-4 py-10">
    <div className="space-y-8">
      {/* Brand */}
      <div className="text-center">
        <h3 className="font-playfair text-2xl font-semibold text-white">
          Tiệc Cưới Thu Thủy
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-white/75">
          Dịch vụ nấu tiệc cưới tại nhà, thực đơn đa dạng, phục vụ chỉn chu và tận nơi.
        </p>
      </div>

      {/* 2 cột mobile */}
      <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-sm">
        <div>
          <h4 className="mb-3 text-base font-semibold">Liên kết</h4>
          <ul className="space-y-2 text-white/80">
            <li><a href="/" className="hover:text-[#f08a3e]">Trang chủ</a></li>
            <li><a href="/thuc-don" className="hover:text-[#f08a3e]">Thực đơn</a></li>
            <li><a href="/combo" className="hover:text-[#f08a3e]">Combo tiệc</a></li>
            <li><a href="/lien-he" className="hover:text-[#f08a3e]">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-base font-semibold">Liên hệ</h4>
          <ul className="space-y-2 text-white/80">
            <li>0909 123 456</li>
            <li>An Lộc, Bình Long, Đồng Nai</li>
            <li>06:00 - 20:00</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-5 text-center text-xs text-white/55">
        © 2026 VivaViet Wedding. All rights reserved.
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;