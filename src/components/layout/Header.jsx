import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Trang chủ", path: "/" },
  { name: "Thực đơn", path: "/menu" },
  { name: "Combo tiệc", path: "/combo" },
  { name: "Liên hệ", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="text-xl font-vibes text-primary md:text-3xl">
          Tiệc Cưới Thu Thủy
        </div>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-orange-600 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop button */}
        <div className="hidden md:block">
          {/* <Button className="rounded-full px-5">Đặt tiệc ngay</Button> */}
        </div>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* <Button className="mt-3 rounded-full">Đặt tiệc ngay</Button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;