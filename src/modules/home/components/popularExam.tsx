import { homeQueryKey } from '@/api'
import { QUERY_CONFIG } from '@/api/config'
import { homeAPI } from '@/api/services/getHomeData'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function PopularExam() {
    const {data: popularTestData} = useQuery({
        queryKey: homeQueryKey.popularTests(),
        queryFn: homeAPI.getPopularTestData,

        ...QUERY_CONFIG.static
    })

    console.log(popularTestData);
    
  return (
    <div>
        <div className="w-full  px-4 py-2 max-w-7xl mx-auto mt-20 space-y-5">
            {/* header */}
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 text-left'>
                    <h1 className='text-3xl text-secondary-foreground font-bold'>
                        Popular Exams</h1>
                    
                    <h3 className='text-gray-600'>Choose your exam and start preparing today</h3>
                </div>

                <div className='flex items-center'>
                    <Button variant={'ghost'} className='text-blue-600 '>
                        View All
                        <ArrowRight />
                    </Button>
                </div>
            </div>

            {/* exams */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default PopularExam