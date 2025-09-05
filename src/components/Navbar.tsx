import { useState } from "react";
import { NAVBAR_CONTENT } from "../constants";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => (prev = !prev));
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-100">
      <div className="max-w-8xl mx-auto bg-lightgrey/60 backdrop-blur-md px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={NAVBAR_CONTENT.logo} height={10} width={104} alt="logo" />
          <ul className="hidden md:flex items-center gap-10">
            {NAVBAR_CONTENT.links.map((l) => (
              <li
                className="text-secondary font-semibold transition-colors ease-in-out duration-300 hover:text-primary"
                key={l.id}
              >
                <a href={l.link}>{l.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-secondary hover:text-primary">
            Login
          </a>
          <a
            href="#"
            className="bg-primary text-white py-2 text-sm px-8 rounded-lg hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
        <div className="md:hidden">
          <span className="cursor-pointer" onClick={handleToggle}>
            {open ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <CgMenuRight className="text-4xl" />
            )}
          </span>
        </div>
      </div>
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] translate-y-0 opacity-100 scale-100"
            : "grid-rows-[0fr] -translate-y-2 opacity-0 scale-95"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-lightgrey/60 backdrop-blur-md rounded-xl border border-gray-300 mt-0 mx-3">
            <ul className="ml-3flex flex-col space-y-5">
              {NAVBAR_CONTENT.links.map((l) => (
                <li
                  className="font-semibold text-secondary transition-colors ease-in-out duration-300 hover:text-primary"
                  key={l.id}
                >
                  <a href={l.link}>{l.text}</a>
                </li>
              ))}
            </ul>
            <div>
              <a href="#" className="hover:text-primary block my-5">
                Login
              </a>

              <a
                href="#"
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
