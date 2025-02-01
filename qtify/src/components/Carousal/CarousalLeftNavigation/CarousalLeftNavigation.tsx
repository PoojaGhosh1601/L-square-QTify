import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import styles from "../carousel.module.css";

export const CarousalLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(false);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
    return () => {
      swiper.off("slideChange");
    };
  }, [swiper]);

    // Cleanup function to remove event listener on unmount
    return (
      <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
      </div>
    );
  };