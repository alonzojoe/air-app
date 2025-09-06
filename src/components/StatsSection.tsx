import { STATS_CONTENT } from "../constants";
const StatsSection = () => {
  return (
    <section id="stats">
      <div className="max-w-7xl mx-auto px-3 py-2 flex flex-wrap items-center justify-between my-20">
        {STATS_CONTENT.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-darktext font-bold text-xl md:text-5xl">
              {s.title}
            </h2>
            <p className="text-secondary text-md md:text-2xl">{s.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
