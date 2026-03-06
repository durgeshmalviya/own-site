const Project = ({ darkMode }) => {
    return (
        <section id="projects" className="container mx-auto px-4 py-10 ">
            <div className="max-w-6xl mx-auto ">

                {/* Title */}
                <div data-aos="fade-up" className="relative mb-6">
                    <h2 className="text-3xl font-black text-gray-700">
                        Current Projects & Active Maintenance
                    </h2>
                    <span className="absolute right-0 w-[90%] bg-gray-300 h-[1px]" />
                </div>

                {/* Description */}
                <p
                    data-aos="fade-up"
                    className="text-gray-600 font-medium max-w-3xl mb-10 leading-relaxed"
                >
                    I maintain and continuously optimize deployed production websites,
                    focusing on SEO, performance, UX, security, marketing visibility,
                    and new feature rollout.
                </p>

                <div
                    className="
  grid
  grid-cols-3
  md:grid-cols-1
  lg:grid-cols-3
  gap-8
  w-full
  overflow-x-hidden
    overflow-hidden
  
"
                >
<a
  href="https://mathmagic.co.in"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col"
>

  <div className="relative w-full h-[220px] overflow-hidden border-b">
    <iframe
      src="https://mathmagic.co.in"
      title="MathMagic"
      className="absolute top-0 left-0 w-[1200px] h-[800px] scale-[0.35] origin-top-left pointer-events-none"
      loading="lazy"
    />
  </div>

  <div className="p-6 flex flex-col justify-between flex-grow">
    <div>
      <h3 className="font-bold text-xl text-gray-800">
        MathMagic.co.in
      </h3>

      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        Educational learning platform — ongoing SEO enrichment,
        performance tuning and UX improvements.
      </p>
    </div>

    <span className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm w-fit">
      Live Site →
    </span>
  </div>

</a>

<a
  href="https://www.maestrofilms.in"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col"
>

  <div className="relative w-full h-[220px] overflow-hidden border-b">
    <iframe
      src="https://www.maestrofilms.in"
      title="Maestro Films"
      className="absolute top-0 left-0 w-[1200px] h-[800px] scale-[0.35] origin-top-left pointer-events-none"
      loading="lazy"
    />
  </div>

  <div className="p-6 flex flex-col justify-between flex-grow">
    <div>
      <h3 className="font-bold text-xl text-gray-800">
        MaestroFilms.in
      </h3>

      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        Media & film production brand — SEO improvements,
        performance tuning and UI/UX refinements.
      </p>
    </div>

    <span className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm w-fit">
      Live Site →
    </span>
  </div>

</a> <a
  href="https://cpct.in"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition flex flex-col"
>

  <div className="relative w-full h-[220px] overflow-hidden border-b">
    <iframe
      src="https://cpct.in"
      title="CPCT"
      className="absolute top-0 left-0 w-[1200px] h-[800px] scale-[0.35] origin-top-left pointer-events-none"
      loading="lazy"
    />
  </div>

  <div className="p-6 flex flex-col justify-between flex-grow">
    <div>
      <h3 className="font-bold text-xl text-gray-800">
        CPCT.in
      </h3>

      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        CPCT exam preparation platform providing practice material
        and structured learning resources.
      </p>
    </div>

    <span className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm w-fit">
      Live Site →
    </span>
  </div>

</a>
                </div>

            </div>

        </section>
    );
};

export default Project;