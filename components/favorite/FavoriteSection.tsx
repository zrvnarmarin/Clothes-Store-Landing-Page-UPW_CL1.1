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
        <section className="w-full flex flex-col gap-14 mb-16 mt-10 p-2 max-w-screen-lg">
            <div>
                <div className="relative text-center md:text-start px-2">
                    <div className="z-50 flex flex-col gap-6 font-black text-3xl sm:text-4xl uppercase text-black">
                        Young&apos;s Favorite
                    <div className="z-10 absolute top-4 left-32 sm:top-6 sm:left-48 ">
                        <LeafeArrivalsSection />
                    </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {categories.map(arrival =>
                    <div key={arrival.id} className="flex flex-col gap-8">
                        <div className="">
                            <Image 
                                src={arrival.src} 
                                alt={arrival.alt}
                                width={0}
                                height={128} // Set the height to 128 pixels
                                layout="responsive"
                                objectFit="cover"
                                className="h-24 rounded-2xl object-contain"
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
