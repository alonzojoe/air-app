import { TRACKING_CONTENT } from "../constants";

const TrackingSection = () => {
  return (
    <section id="tracking">
      <div className="max-w-7xl mx-auto px-3 py-2 mt-20 grid items-center grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
        <div className="flex flex-col space-y-5">
          <h3 className="text-darktext text-4xl md:text-5xl font-bold">
            {TRACKING_CONTENT.title}
          </h3>
          <p className="text-secondary text-base">
            {TRACKING_CONTENT.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
            {TRACKING_CONTENT.items.map((item) => (
              <div
                className="flex flex-col space-y-2 text-darktext"
                key={item.id}
              >
                <img className="w-[32px] h-auto" src={item.icon} alt="check" />
                <h5 className="font-bold text-lg">{item.title}</h5>
                <p className="text-secondary text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          className="w-[100%] h-auto"
          height={601}
          width={598}
          src={TRACKING_CONTENT.imgRight}
          alt="tracking-img"
        />
      </div>
    </section>
  );
};

export default TrackingSection;
