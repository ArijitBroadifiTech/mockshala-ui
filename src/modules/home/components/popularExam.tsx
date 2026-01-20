import { homeQueryKey } from '@/api'
import { QUERY_CONFIG } from '@/api/config'
import { homeAPI } from '@/api/services/getHomeData'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { IMAGE_BASE_URL } from '@/api/url'
import * as React from "react"

function PopularExam() {
  const { data: popularTestData } = useQuery({
    queryKey: homeQueryKey.popularTests(),
    queryFn: homeAPI.getPopularTestData,
    ...QUERY_CONFIG.static,
  })

  const [api, setApi] = React.useState<CarouselApi | null>(null)

  return (
    <div className=" w-full px-4 py-2 max-w-7xl mx-auto md:mt-20 space-y-4">
      {/* HEADER */}
        <div className='md:text-start mb-8 space-y-2'>
            <h3 className='py-1 text-2xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Popular Tests</h3>
            <p className='text-gray-600 dark:text-gray-300 max-w-2xl'>
                Choose your exam and start preparing today
            </p>
        </div>

    

      {/* CAROUSEL WRAPPER */}
      <div className="relative group">
        {/* LEFT BUTTON */}
        <button
          onClick={() => api?.scrollPrev()}
          className="
            absolute -left-3 top-1/2 -translate-y-1/2 z-20
            h-9 w-9 rounded-full
            bg-white/70 backdrop-blur-md
            shadow-lg border border-white/40
            flex items-center justify-center
            text-gray-700
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:scale-110
          "
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => api?.scrollNext()}
          className="
            absolute -right-3 top-1/2 -translate-y-1/2 z-20
            h-9 w-9 rounded-full
            bg-white/70 backdrop-blur-md
            shadow-lg border border-white/40
            flex items-center justify-center
            text-gray-700
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:scale-110
          "
        >
          <ChevronRight />
        </button>

        {/* CAROUSEL */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="w-full px-5"
        >
          <CarouselContent className='mx-auto'>
            {popularTestData?.data.map((item) => (
              <CarouselItem
                key={item._id}
                className="basis-1/1 sm:basis-1/2 lg:basis-1/4 xl:basis-1/5 p-4"
              >
                {/* GLASS CARD */}
                <div
                  className="
                    relative group/card h-64
                    rounded-3xl
                    bg-white/60 backdrop-blur-xl
                    border border-white/40
                    shadow-md
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-xl
                  "
                >
                  {/* GRADIENT GLOW */}
                  <div
                    className="
                      absolute inset-0 rounded-3xl
                      bg-linear-to-br from-blue-100/40 to-sky-200/20
                      opacity-0 group-hover/card:opacity-100
                      transition-opacity duration-500
                      pointer-events-none
                    "
                  />

                  {/* IMAGE */}
                  <div className="relative h-32 flex items-center justify-center border-b border-white/30">
                    <img
                      src={IMAGE_BASE_URL + item.image}
                      alt={item.name}
                      className="h-24 object-contain transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-between h-[calc(100%-8rem)] p-4">
                    <h1 className="
                      text-sm font-semibold text-center
                      text-gray-700
                      group-hover/card:text-blue-700
                      transition-colors
                    ">
                      {item.name}
                    </h1>

                    <button
                      className="
                        mx-auto mt-3 flex items-center gap-1
                        px-5 py-1.5 text-sm font-medium
                        rounded-full
                        bg-blue-500/10 text-blue-600
                        backdrop-blur
                        transition-all duration-300
                        group-hover/card:bg-blue-600
                        group-hover/card:text-white
                        group-hover/card:shadow-md
                      "
                    >
                      View Tests
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* VIEW ALL */}
      <div className="flex justify-center pt-6">
        <Button
          variant="ghost"
          className="
            px-6 py-2 rounded-full
            border border-blue-200
            bg-blue-100/70 backdrop-blur
            text-blue-700 font-medium
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:shadow-lg hover:-translate-y-1
          "
        >
          View All Tests
          <ArrowRight />
        </Button>
      </div>
    </div>
    
  )
}


export default PopularExam
