import { PRICING_CONTENT } from "../constants";
import Check from "../assets/images/check.png";
import Warning from "../assets/images/warning.png";

const PricingSection = () => {
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="text-center flex flex-col space-y-7 mx-5 lg:mx-20 mb-10 mt-20">
          <h2 className="text-darktext text-3xl lg:text-4xl font-bold">
            {PRICING_CONTENT.title}
          </h2>
          <p className="text-secondary text-base">{PRICING_CONTENT.subTitle}</p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRICING_CONTENT.items.map((item) => (
              <div
                key={item.id}
                className="p-5 md:p-10 border border-white shadow-md hover:shadow-2xl"
              >
                <div className="flex flex-col space-y-5">
                  <div className="flex items-end gap-5">
                    <h2 className="font-bold text-darktext text-4xl">
                      {item.price}
                    </h2>
                    <span className="text-base text-textgray">
                      {item.month}
                    </span>
                  </div>
                  <p className="text-secondary text-base text-left leading-snug">
                    {item.description}
                  </p>
                  <hr className="text-textgray" />
                  <div className="flex flex-col space-y-3">
                    {item.features.map((f, index) => (
                      <div className="flex items-center gap-5" key={index}>
                        <img
                          className="w-[20px] h-auto"
                          src={Check}
                          alt="check"
                        />
                        <span className="text-base text-darktext">
                          {f.label}
                        </span>
                        {f.warning && (
                          <img
                            className="w-[18px] h-auto"
                            src={Warning}
                            alt="warning"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 w-full">
                    <button className="px-3 w-full py-2 font-semibold text-primary border border-primary cursor-pointer hover:text-white hover:bg-primary transition-all duration-300 ease-in-out">
                      {item.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
