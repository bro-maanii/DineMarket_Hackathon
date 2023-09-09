"use client";
import Image from "next/image";
import logo from "/public/img(Home)/Logo.webp";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center  sm:px-20  py-8 px-3 shadow-md">
      <Image src={logo} alt="logo" />
      <div>
        <ul className="hidden md:flex sm:gap-x-7 ">
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
            <Link href="/Female">Female</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold active:font-semibold ">
            <Link href="/Male">Male</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
            <Link href="/Kids">Kids</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/All-Products">All Products</Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Search className="h-6 md:w-6 " />
        <Input
          type="text"
          placeholder="What you looking for?"
          className="font-semibold text-black w-72 "
        />
      </div>
      <div className="hidden bg-gray-200 rounded-full h-9 w-9 md:flex md:justify-center md:items-center hover:shadow-lg bg-white-400">
        <ShoppingCart />
      </div>
      <div onClick={handleNav} className="md:hidden">
        <Menu absoluteStrokeWidth />
      </div>
      <div
        className={
          menu
            ? "fixed top-0 w-[60%] md:hidden h-screen bg-[#fbfdff] p-10 ease-in duration-500 left-0 "
            : "left-[-100%] hidden"
        }
      >
        <div className="grid grid-cols-1 gap-4">
        <div className=" bg-gray-200 rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg bg-white-400">
          <ShoppingCart />
        </div>
        <div>
          <ul className="flex flex-col justify-center items-center gap-y-4 ">
            <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
              <Link href="/" onClick={handleNav}>Home</Link>
            </li>
            <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
              <Link href="/Female" onClick={handleNav}>Female</Link>
            </li>
            <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold active:font-semibold ">
              <Link href="/Male" onClick={handleNav}>Male</Link>
            </li>
            <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
              <Link href="/Kids" onClick={handleNav}>Kids</Link>
            </li>
            <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  " onClick={handleNav}>
              <Link href="/All-Products">All Products</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Header;
