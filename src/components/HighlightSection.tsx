import { HIGHLIGHT_CONTENT } from "../constants/index";

const HighlightSection = () => {
  return (
    <section id="highlight" className="bg-bg-dark">
      <div className="max-w-7xl mx-auto pt-20 px-3 py-2 grid items-center grid-cols-1 md:grid-cols-2 gap-10">
        <img
          className="w-[100%] h-auto"
          height={541}
          width={578}
          src={HIGHLIGHT_CONTENT.imgLeft}
          alt="app-highlight"
        />
        <div className="flex flex-col space-y-7">
          <h4 className="text-3xl font-bold text-white">
            {HIGHLIGHT_CONTENT.title}
          </h4>
          <p className="text-base text-white">
            {HIGHLIGHT_CONTENT.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 mb:mb-0">
            {HIGHLIGHT_CONTENT.items.map((item) => (
              <div className="flex flex-col space-y-4 text-white" key={item.id}>
                <img
                  className="w-[48px] h-auto"
                  src={item.icon}
                  alt={`item-${item.id}`}
                />
                <h5 className="text-lg font-bold">{item.title}</h5>
                <p className="text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
