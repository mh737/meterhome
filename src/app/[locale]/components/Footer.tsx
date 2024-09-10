"use client";

import Image from "next/image";
import { Link as NavLink } from "../../../navigation";
import { useTranslations } from "next-intl";

function Footbar() {
  const t = useTranslations("NavPage");

  return (
    <>
      <footer className="  !text-slate-100">
        <div className="w-full md:w-[90%] md:flex ml-auto mr-auto mt-32 ">
          <div className="md:w-[50%] mb-14 md:mb-0">
            <div className="text-slate-300">Contact</div>
            <ul>
              <NavLink href="/">
                <li className="text-2xl">Find US</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">General Enquiry</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">Feedback</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">Request a Test Ride</li>
              </NavLink>
            </ul>
          </div>
          <div className="md:w-[50%] w-full">
            <div className="text-slate-300">Explore METER</div>
            <ul>
              <NavLink href="/">
                <li className="text-2xl">METER HK Offcial Online Store</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">Subscribe to our newsletter</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">METERLIMITED.com</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[90%] md:flex ml-auto mr-auto mt-32 mb-32">
          <div className="md:w-[50%]">
            <ul>
              <NavLink href="/">
                <li className="text-2xl inline-block mr-3">FB</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl inline-block">IG</li>
              </NavLink>
            </ul>
          </div>
          <div className="md:w-[50%]">
            <ul className="md:text-end">
              <NavLink href="/">
                <li className="text-2xl inline-block mr-3">English</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl inline-block">Chinese</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footbar;
