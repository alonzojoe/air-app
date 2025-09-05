import { HOME_CONTENT } from "../constants";
const HeroSection = () => {
  return (
    <section id="home" className="pt-36 lg:pt-42 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 md:gap-10 mb-20">
          <div className="flex flex-col space-y-6">
            <h1 className="text-darktext text-6xl font-bold tracking-tighter">
              {HOME_CONTENT.title}
            </h1>
            <p className="text-md text-secondary">{HOME_CONTENT.description}</p>
            <div className="flex items-center gap-5">
              <a href="#">
                <img
                  src={HOME_CONTENT.playstore}
                  height={56}
                  width={190}
                  alt="playstore"
                />
              </a>
              <a href="#">
                <img
                  src={HOME_CONTENT.appstore}
                  height={56.45}
                  width={169.34}
                  alt="playstore"
                />
              </a>
            </div>
          </div>
          <img
            src={HOME_CONTENT.hero}
            width={563.16}
            height={580}
            className="w-[100%] h-auto"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
