import { DOWNLOAD_CONTENT } from "../constants";

const DownloadSection = () => {
  return (
    <section id="download" className="bg-primary">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="text-center text-white flex flex-col space-y-7 mx-5 lg:mx-20 mt-20 mb-20">
          <h2 className=" text-3xl lg:text-4xl font-bold">
            {DOWNLOAD_CONTENT.title}
          </h2>
          <p className="text-base">{DOWNLOAD_CONTENT.description}</p>
          <div className="flex items-center justify-center gap-5">
            <input
              className="bg-white text-darktext border rounded-lg border-white outline-none focus:border-textgray w-90 py-2 px-3 placeholder:text-textgray"
              type="text"
              placeholder={DOWNLOAD_CONTENT.placeholder}
            />
            <button className="bg-bg-dark px-3 py-2 rounded-lg text-base">
              {DOWNLOAD_CONTENT.btn}
            </button>
          </div>
          <p className="text-sm">{DOWNLOAD_CONTENT.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
