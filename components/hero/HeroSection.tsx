import { LeafeHeroSection } from "@/public/icons"
import { Button } from "../ui/button"
import Image from "next/image"
import GirlShopping from '@/public/hero/shoppingGirl.webp'

export default function HeroSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#F4F6F5] lg:rounded-3xl px-2 py-8 lg:p-12 xl:mx-24">
            <div className="flex flex-col gap-10">
                <p className="flex flex-col gap-4 sm:text-center md:text-center lg:gap-6 font-black text-6xl lg:text-8xl uppercase text-black">
                    Let&apos;s
                    Explore
                    Unique
                    Clothes.
                </p>
                <p className="text-xl md:text-2xl text-center text-[#191818]">Live for Influential and Innovative fashion!</p>
                <div className="flex items-center justify-center gap-6">
                    <div className="hidden sm:block"><LeafeHeroSection /></div>
                    <Button 
                        variant={"default"} 
                        className="bg-black text-2xl font-light py-8 px-8"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className="hidden md:flex object-cover">
                <Image 
                    src={GirlShopping} 
                    className="w-full"
                    height={0} 
                    width={0} 
                    alt="shopping_girl" 
                />
            </div>
        </section>
    )
}