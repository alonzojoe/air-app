import { HOME_CONTENT } from "../constants";
const HeroSection = () => {
  return (
    <section id="home" className="pt-10 lg:pt-15 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-0 md:gap-10">
          <div className="flex flex-col space-y-6 mt-10 md:mt-0 mb-20">
            <h1 className="text-center md:text-left text-darktext text-5xl md:text-6xl font-bold md:tracking-tighter tracking-normal">
              {HOME_CONTENT.title}
            </h1>
            <p className="text-center md:text-left text-md text-secondary">
              {HOME_CONTENT.description}
            </p>
            <div className="flex justify-center md:justify-start items-center gap-5">
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
