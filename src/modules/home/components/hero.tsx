import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { homeQueryKey } from "@/api";
import { homeAPI } from "@/api/services/getHomeData";
import { DATA_TYPE_CONFIG } from "@/api/config";
import { IMAGE_BASE_URL } from "@/api/url";

export default function Hero() {

  const sliderRef = React.useRef(null)

  const { data: bannerData } = useQuery({
    queryKey: homeQueryKey.banner(),
    queryFn: homeAPI.getBannerData,

    ...DATA_TYPE_CONFIG.banner,
    refetchOnWindowFocus: false, // ✅ VERY IMPORTANT
    refetchOnReconnect: false,
  });

  React.useEffect(() => {
    if (bannerData) {
      console.log("Banner data:", bannerData);
    }
  }, [bannerData]);

  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div>
      {/* for Mobile Screen */}
      <div className="relative w-full flex md:hidden">
        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          opts={{ loop: true }}
          className="w-full relative"
          // onMouseEnter={() => autoplay.current.stop()}
          // onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent>
            {bannerData?.data.map((item) => (
              <CarouselItem key={item._id}>
                {/* HERO SLIDE */}
                <div className="relative w-full">
                  <img
                    src={IMAGE_BASE_URL + item.imageForMobile}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="left-6 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-6 bg-white/80 hover:bg-white" />

          {/* DOTS */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all z-20",
                  current === index
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white",
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* for Large Screen */}
      <div ref={sliderRef} className="relative w-full hidden md:flex">
        <Carousel
          setApi={setApi}
          plugins={[autoplay.current]}
          opts={{ loop: true }}
          className="w-full relative"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent>
            {bannerData?.data.map((item) => (
              <CarouselItem key={item._id}>
                {/* HERO SLIDE */}
                <div className="relative w-full">
                  <img
                    src={IMAGE_BASE_URL + item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="left-6 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-6 bg-white/80 hover:bg-white" />

          {/* DOTS */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all z-20",
                  current === index
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white",
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
