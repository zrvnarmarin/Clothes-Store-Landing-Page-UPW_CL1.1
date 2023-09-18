import Image from "next/image"
import GirlShopping from '@/public/hero/shoppingGirl.webp'
import { Button } from "../ui/button"

export default function SaleSection() {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#E0C340] to-[#F9DF56] px-2 py-8 lg:p-12">
            <div className="flex flex-col gap-6 md:gap-10 order-1 md:order-2">
                <p className="flex flex-col gap-4 sm:items-center lg:items-start lg:gap-6 font-black text-6xl lg:text-8xl uppercase text-black">
                    <span>Payday{" "}</span>
                    <span>Sale now</span>
                </p>
                <p className="text-xl md:text-3xl sm:text-center lg:text-start font-medium text-[#231300] md:pt-10 md:pb-6">
                    Spend minimal $100 get 30% off <br />
                    voucher code for your next purchase
                </p>
                <h2 className="text-2xl sm:text-center lg:text-start font-semibold">
                    1 June - 10 June 2021
                </h2>
                <p className="text-xl sm:text-center lg:text-start md:text-2xl text-black font-medium">*Terms & Conditions apply</p>
                <div className="flex justify-center lg:justify-start">
                    <Button
                        variant={"default"}
                        className="w-fit bg-black text-2xl font-light py-8 px-8 my-6"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className="flex object-cover order-2 md:order-1">
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