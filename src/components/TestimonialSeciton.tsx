import { TESTIMONIAL_CONTENT } from "../constants";

const TestimonialSection = () => {
  return (
    <section id="testimonial">
      <div className="bg-lightgrey max-w-7xl mx-auto px-3 py-10 md:py-2 my-20">
        <div className="grid grid-cols-12 items-center gap-5 lg:gap-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex items-center justify-center">
            <img
              className="w-[200px] rounded-full h-auto"
              src={TESTIMONIAL_CONTENT.user}
              alt="avatar"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 flex flex-col space-y-10">
            <p className="text-secondary text-base">
              {TESTIMONIAL_CONTENT.testimonial}
            </p>
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col space-y-3">
                <h3 className="font-semibold text-lg text-darktext">
                  {TESTIMONIAL_CONTENT.name}
                </h3>
                <img
                  className="w-[120px] h-auto"
                  src={TESTIMONIAL_CONTENT.fb}
                  alt="fb"
                />
              </div>
              <img
                className="w-[90px] h-auto cursor-pointer"
                src={TESTIMONIAL_CONTENT.slider}
                alt="slider"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
