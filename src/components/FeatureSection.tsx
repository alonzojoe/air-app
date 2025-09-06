import { FEATURES_CONTENT } from "../constants";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-3 py-5">
        <div className="text-center flex flex-col space-y-7 mx-5 lg:mx-20 mb-10">
          <h2 className="text-darktext text-3xl lg:text-4xl font-bold">
            {FEATURES_CONTENT.title}
          </h2>
          <p className="text-secondary text-base">
            {FEATURES_CONTENT.subTitle}
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES_CONTENT.items.map((item) => (
            <div
              className="border border-white rounded-lg p-5 shadow-md hover:shadow-2xl flex flex-col space-y-5 items-start"
              key={item.id}
            >
              <img
                className="w-[80px] h-auto"
                src={item.icon}
                alt={`icon-${item.title}`}
              />
              <h3 className="text-darktext text-xl font-bold">{item.title}</h3>
              <p className="text-secondary text-lg leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
