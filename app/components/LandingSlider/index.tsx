import { useHydrated } from "remix-utils";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import swipercss from "./swiper-bundle.min.css";
import type { LandingSliderProps } from "./types";

/**
 * Чтобы Swiper правильно работал, надо:
 *
 * - В remix.config.js прописать паттерн импорта для бандла
 * - Вручную вставить css файл, с которым работает библиотека,
 *   в роут, где она применяется
 *
 *  !! Если будем обновлять Свайпер, нужно будет удостовериться, что мы также
 *     подтянем самый новый файлик со стилями. В css файлике указана его версия.
 */

export { swipercss as sliderStyles };

export const LandingSlider = ({
  content,
  mobileSlidesCount = 3,
  pcSlidesCount = 5,
}: LandingSliderProps) => {
  const hydrate = useHydrated();

  const highestSlidesCount = Math.max(mobileSlidesCount, pcSlidesCount);
  const canLoop = content.length >= highestSlidesCount * 2;

  if (!hydrate) {
    return (
      <SliderPlaceholder
        content={content.slice(0, highestSlidesCount)}
        mobileSlidesCount={mobileSlidesCount}
        pcSlidesCount={pcSlidesCount}
      />
    );
  }

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      autoplay={{
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      loop={canLoop}
      centerInsufficientSlides={!canLoop}
      speed={750}
      slidesPerView={3}
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
      }}
      // enabled={false}
    >
      {content.map((item) => (
        <SwiperSlide key={item.key} className='px-2 md:px-3'>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

/**
 * Заполнитель для слайдера, который показывается, пока не загрузились скрипты.
 * Существует для того, чтобы убрать визуальный лаг в момент загрузки страницы.
 *
 * Возможно, можно как-то переработать для большей оптимальности,
 * либо постараться исправить визуальный лаг и вообще это убрать
 */
const SliderPlaceholder = ({
  content,
  mobileSlidesCount = 3,
  pcSlidesCount = 5,
}: LandingSliderProps) => {
  return (
    <>
      <div
        className='grid px-2 gap-4 md:hidden'
        style={{
          gridTemplateColumns: `repeat(${mobileSlidesCount}, minmax(0, 1fr));`,
        }}
      >
        {...content.slice(0, mobileSlidesCount)}
      </div>
      <div
        className='hidden px-3 gap-6 md:grid'
        style={{
          gridTemplateColumns: `repeat(${pcSlidesCount}, minmax(0, 1fr));`,
        }}
      >
        {...content.slice(0, pcSlidesCount)}
      </div>
    </>
  );
};
