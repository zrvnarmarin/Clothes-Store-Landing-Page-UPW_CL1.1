import { LeafeArrivalsSection } from "@/public/icons"
import GirlOne from '@/public/arrivals/girl01.webp'
import GirlTwo from '@/public/arrivals/girl02.webp' // Corrected the import name
import { RightArrow } from "@/public/icons"
import Image from "next/image"
import { Fragment } from 'react'

const categories = [
    { id: 1, src: GirlOne, alt: 'girl_shopping', categoryText: 'Trending On Instagram' },
    { id: 2, src: GirlTwo, alt: 'girl_shopping', categoryText: 'All Under $40' },
]

export default function FavoriteSection() {
    return (
        <section className="w-full flex flex-col gap-14 mb-32 mt-32">
            <div>
                <div className="relative">
                    <div className="z-50 flex flex-col gap-6 font-black text-4xl text-black">
                        <p>Young's Favorite</p>
                        <div className="z-10 absolute top-0 left-0 ">
                            <LeafeArrivalsSection />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                {categories.map(arrival =>
                    <div key={arrival.id} className="flex flex-col gap-8">
                        <div className="relative w-full bg-red-500">
                            <Image 
                                src={arrival.src} 
                                alt={arrival.alt} // Use the alt prop from the data
                                width={500}
                                height={300}
                                layout="responsive" // Use responsive layout
                                objectFit="cover" // Maintain aspect ratio and cover the container
                                className="w-full h-96 rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-2xl text-[#191919]">{arrival.categoryText}</p>
                                <p className="font-normal text-lg text-[#7F7F7F]">Explore Now!</p>
                            </div>
                            <RightArrow />
                        </div>
                    </div>    
                )}
            </div>
        </section>
    )
}
