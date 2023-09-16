import Image from "next/image"
import GirlShopping from '@/public/hero/shoppingGirl.webp'
import { Button } from "../ui/button"

export default function SaleSection() {
    return (
        <section className="w-full flex flex-row px-4 py-20 bg-gradient-to-r from-[#E0C340] to-[#F9DF56]">
            <div className="w-1/2">
                <Image 
                    src={GirlShopping} 
                    className="w-full object-cover" 
                    alt="girl_shopping" 
                    width={0} 
                    height={0} 
                />
            </div>  
            <div className="w-1/2 flex flex-col">
                <h1 className="flex flex-col gap-6 font-black text-8xl uppercase text-black">
                    <span>Payday</span>
                    <span>Sale Now</span>
                </h1>
                <p className="text-3xl font-medium text-[#231300] pt-10 pb-6">Spend minimal $100 get 30% off <br />
                    voucher code for your next purchase
                </p>
                <h2 className="text-2xl font-semibold">
                    1 June - 10 June 2021
                </h2>
                <p className="text-2xl text-black font-medium">*Terms & Conditions apply</p>
                <Button 
                    variant={"default"} 
                    className="w-fit bg-black text-2xl font-light py-8 px-8 my-6"
                >
                    Shop Now
                </Button>
            </div>
        </section>
    )
}