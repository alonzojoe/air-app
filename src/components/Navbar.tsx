import { NAVBAR_CONTENT } from "../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-100">
      <div className="max-w-7xl mx-auto bg-lightgrey/60 backdrop-blur-md px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={NAVBAR_CONTENT.logo} height={39} width={104} alt="logo" />
          <ul className="flex items-center gap-10">
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
        <div className="d-flex gap-3">
          <button className="text-secondary px-4 py-3 cursor-pointer">
            Login
          </button>
          <button className="bg-primary px-10 py-3 text-white rounded-lg cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
