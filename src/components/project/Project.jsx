import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { SiVercel, SiJavascript, SiTailwindcss, SiVuedotjs, SiMysql, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDocker, FaPython } from "react-icons/fa";

const Project = ({ darkMode }) => {
    return (
        <>
            <section id="projects" className="mt-0 container mx-auto px-4">
                <div className="card-wrapper mx-auto w-[90%] sm:w-full mt-5">
                    <div className="card-box flex flex-wrap items-center justify-center grid-cols-3 gap-8 w-full md:grid-cols-2 sm:gap-12 sm:grid-cols-1 sm:space-y-0 ">


                        <div data-aos="fade-up" className="relative mb-10">
                            <h2 className="text-3xl font-black text-gray-700">
                                Current Projects & Active Maintenance
                            </h2>
                            <span className="absolute right-0 w-[90%] bg-gray-300 h-[1.2px]" />
                        </div>


                        <p
                            data-aos="fade-up"
                            className="text-gray-600 font-medium max-w-3xl mb-8 leading-relaxed"
                        >
                            I maintain and continuously optimize deployed production websites,
                            focusing on SEO, performance, UX, security, marketing visibility, and
                            new feature rollout. Below are actively maintained projects with
                            long-term upgrade cycles.
                        </p>


                        <div
                            className="
          grid
          grid-cols-1
          sm:grid-cols-1
          lg:grid-cols-2
          gap-6
        "
                        >

                            <a
                                href="https://mathmagic.co.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                className="
            bg-white
            rounded-2xl
            border
            shadow-sm
            p-6
            hover:shadow-lg
            transition
            cursor-pointer
            flex
            flex-col
          "
                            >
                                <h3 className="font-bold text-xl text-gray-800">
                                    MathMagic.co.in
                                </h3>
                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    Educational learning platform (India) — ongoing SEO enrichment,
                                    performance tuning, UX improvements and visibility upgrades to
                                    improve organic reach and user onboarding.
                                </p>
                            </a>

                            <a
                                href="https://www.maestrofilms.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-delay="150"
                                className="
            bg-white
            rounded-2xl
            border
            shadow-sm
            p-6
            hover:shadow-lg
            transition
            cursor-pointer
            flex
            flex-col
          "
                            >
                                <h3 className="font-bold text-xl text-gray-800">
                                    MaestroFilms.in
                                </h3>
                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    Media & film production brand (India) — continuous optimization,
                                    SEO improvements, new feature rollout, performance tuning and modern
                                    UI/UX refinements to enhance brand visibility and conversions.
                                </p>
                            </a>


                        </div></div>
                </div>
            </section>

        </>
    );
};

export default Project;
