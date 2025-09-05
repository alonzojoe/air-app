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
      <div className="max-w-7xl mx-auto bg-lightgrey/60 backdrop-blur-md px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={NAVBAR_CONTENT.logo} height={39} width={104} alt="logo" />
          <ul className="hidden md:flex items-center gap-10">
            {NAVBAR_CONTENT.links.map((l) => (
              <li
                className="font-semibold text-secondary transition-colors ease-in-out duration-300 hover:text-primary"
                key={l.id}
              >
                <a href={l.link}>{l.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
          <button className="text-secondary px-4 py-3 cursor-pointer">
            Login
          </button>
          <button className="bg-primary px-10 py-3 text-white rounded-lg cursor-pointer">
            Get Started
          </button>
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
          <div className="p-4 bg-lightgrey/60 backdrop-blur-md rounded-xl border border-gray-300 mt-2 mx-3">
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
              <button className="text-secondary block text-md mt-3 px-3 py-2 cursor-pointer">
                Login
              </button>
              <button className="bg-primary px-4 text-md py-2 mt-3 text-white rounded-lg cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
