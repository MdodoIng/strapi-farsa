// components/Carousel.tsx
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Dots from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  const length = React.Children.count(children);
  console.log(length);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden w-full z-10 rounded-[10px]" ref={emblaRef}>
        <div className="flex -z-10">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
};
export default Carousel;
