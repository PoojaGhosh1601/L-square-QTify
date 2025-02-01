import React, { useEffect, useState } from "react";
//@ts-ignore
import Swiper, { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import style from "../Carousal.module.css";

export const CarousalRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState();
  useEffect(() => {
    swiper.on("slideChange", () => {
        //@ts-ignore
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={style.RightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};
