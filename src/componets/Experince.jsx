import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="flex gap-4 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-quaternary flex-shrink-0" />
        <div className="w-[2px] flex-1 bg-tertiary" />
      </div>

      {/* Card content */}
      <div className="pb-10 md:pb-14">
        <h3 className="text-white font-bold text-lg md:text-2xl">
          {experience.title}
        </h3>
        <p className="text-quaternary font-semibold text-sm md:text-lg mt-1">
          {experience.company_name}
        </p>
        <p className="text-slate-400 text-xs md:text-sm mt-1">
          {experience.date}
        </p>
        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.details.map((detail, i) => (
            <li
              key={i}
              className="text-secondary text-xs md:text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experince = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Experience</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experince, "experience");