import { LeafeArrivalsSection } from "@/public/icons"
import GirlOne from '@/public/arrivals/girl01.webp'
import GirlwTwo from '@/public/arrivals/girl02.webp'
import GirlThree from '@/public/arrivals/girl03.webp'
import { RightArrow } from "@/public/icons"
import Image from 'next/image';

const arrivals = [
    { id: 1, src: GirlOne, alt: 'girl_shopping', categoryText: 'Hoodies & Sweetshirt' },
    { id: 2, src: GirlwTwo, alt: 'girl_shopping', categoryText: 'Coats & Parkas' },
    { id: 3, src: GirlThree, alt: 'girl_shopping', categoryText: 'Tees & T-Shirt' }
]

export default function ArrivalsSection() {
    return (
        <div className="flex flex-col gap-14 mb-32">
            <div>
                <div className="relative text-center md:text-start px-2">
                    <div className="z-50 flex flex-col gap-6 font-black text-3xl sm:text-4xl uppercase text-black">
                        New Arriwals
                    <div className="z-10 absolute top-4 left-32 sm:top-6 sm:left-48 ">
                        <LeafeArrivalsSection />
                    </div>
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-16">
                {arrivals.map(arrival =>
                    <div key={arrival.id} className="flex flex-col gap-8">
                        <div className="w-full">
                            <Image src={arrival.src} alt="girl_shopping" height={0} width={0}  />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-2xl text-[#191919]">{arrival.categoryText}</p>
                                <p className="font-normal text-lg text-center sm:text-start text-[#7F7F7F]">Explore Now!</p>
                            </div>
                            <RightArrow />
                        </div>
                    </div>    
                )}
            </div>
        </div>
    )
}