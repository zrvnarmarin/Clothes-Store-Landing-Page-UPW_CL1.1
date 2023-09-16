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
                <div className="relative">
                    <p className="z-50 flex flex-col gap-6 font-black text-4xl uppercase text-black">
                        New Arriwals
                    <div className="z-10 absolute top-0 left-0 ">
                        <LeafeArrivalsSection />
                    </div>
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-16">
                {arrivals.map(arrival =>
                    <div key={arrival.id} className="flex flex-col gap-8">
                        <div>
                            <Image src={arrival.src} alt="girl_shopping" height={400} width={370}  />
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
        </div>
    )
}