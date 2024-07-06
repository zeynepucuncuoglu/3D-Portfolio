import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socials } from "../constants";

const SocialCard = ({
  index,
  icon,
  url,
}) => {
  
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[150px]'
  >
    <div className='mt-1'>
      <div className='mt-7 flex justify-between items-center gap-1 items-center'>
        <div className='flex-1 flex flex-col'>
         <div className="cursor-pointer" onClick={handleClick}>
          <img
            src={icon}
          />
         </div>
        </div>
      </div>
    </div>
  </motion.div>
);

}

const Socials = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Socials</p>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 px-6 sm:px-4 flex flex-wrap gap-7 sm:gap-4">
        {socials.map((social, index) => (
          <SocialCard key={social.site} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Socials, "");