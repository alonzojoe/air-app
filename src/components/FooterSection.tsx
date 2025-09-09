import { FOOTER_CONTENT } from "../constants";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const SOCIALS = [FaTwitter, FaFacebookF, FaInstagram, FaGithub];

const FooterSection = () => {
  return (
    <footer className="bg-bg-dark">
      <div className="max-w-7xl mx-auto px-3 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 lg:gap-20 lg:grid-cols-4">
        {FOOTER_CONTENT.links.map((l, index) => (
          <ul className="flex flex-col space-y-7" key={index}>
            <li className="text-white text-lg font-bold">
              <a href="#">{l.title}</a>
            </li>
            {l.links.map((link, idx) => (
              <li className="text-ftgray text-base" key={idx}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        ))}
        <ul className="flex flex-col space-y-7">
          <li className="text-white text-lg font-bold">
            <a href="#">{FOOTER_CONTENT.title}</a>
          </li>
          <li>
            <img
              className="w-[150px] h-auto cursor-pointer"
              src={FOOTER_CONTENT.appstore}
              alt="appstore"
            />
          </li>
          <li>
            <img
              className="w-[150px] h-auto cursor-pointer"
              src={FOOTER_CONTENT.playstore}
              alt="playstore"
            />
          </li>
        </ul>
      </div>
      <div className="max-w-7xl border-t pt-10 border-t-secondary mx-auto px-3 pb-10 flex flex-wrap items-center justify-between">
        <p className="text-ftgray text-sm">{FOOTER_CONTENT.footer}</p>
        <div className="flex items-center gap-3">
          {SOCIALS.map((Icon) => (
            <div className="bg-bluegray p-2 h-[30px] w-[30px] flex items-center justify-center rounded-full">
              <a href="#">
                <Icon className="text-white text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
