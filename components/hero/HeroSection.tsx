import { LeafeHeroSection } from "@/public/icons"
import { Button } from "../ui/button"
import Image from "next/image"
import GirlShopping from '@/public/hero/shoppingGirl.webp'

export default function HeroSection() {
    return (
        <div className="w-full flex flex-row bg-[#F4F6F5] rounded-3xl p-12">
            <div className="w-2/4 flex flex-col gap-10">
                <p className="flex flex-col gap-6 font-black text-7xl uppercase text-black">
                    <span>Let's</span>
                    <span>Explore</span>
                    <span>Unique</span>
                    <span>Clothes.</span>
                </p>
                <p className="text-2xl text-[#191818]">Live for Influential and Innovative fashion!</p>
                <div className="flex items-center gap-6">
                    <LeafeHeroSection />
                    <Button 
                        variant={"default"} 
                        className="bg-black text-2xl font-light py-8 px-8"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className="w-2/4 flex object-cover">
                <Image 
                    src={GirlShopping} 
                    className="w-full"
                    height={0} 
                    width={0} 
                    alt="shopping_girl" 
                />
            </div>
        </div>
    )
}