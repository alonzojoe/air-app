import { NEWS_CONTENT } from "../constants";

const NewsSection = () => {
  return (
    <section id="news">
      <div className="max-w-7xl mx-auto px-3 py-2 mb-20">
        <div className="text-center lg:text-left mb-10 mt-20">
          <h2 className="text-darktext text-3xl lg:text-4xl font-bold">
            {NEWS_CONTENT.title}
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {NEWS_CONTENT.items.map((item, index) => (
            <div
              className="border-0 border-white shadow-md hover:shadow-2xl rounded-lg p-0"
              key={index}
            >
              <img
                className="w-full h-auto rounded-t-lg"
                src={item.img}
                alt={`news-${index + 1}`}
              />
              <div className="flex flex-col p-5 space-y-5">
                <span className="text-sm">{item.type}</span>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm text-secondary">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
