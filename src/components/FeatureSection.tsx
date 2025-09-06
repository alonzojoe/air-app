import { FEATURES_CONTENT } from "../constants";

const FeatureSection = () => {
  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-3 py-5 mt-20">
        <div className="text-center flex flex-col space-y-7 mx-5 lg:mx-20 mb-10">
          <h2 className="text-darktext text-3xl lg:text-5xl font-bold">
            {FEATURES_CONTENT.title}
          </h2>
          <p className="text-secondary text-base">
            {FEATURES_CONTENT.subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
