import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function CommunitySection() {
    return (
        <section className="w-full flex flex-col items-center gap-4 py-8 px-2 md:py-32 bg-[#E5C643]">
            <h2 className="text-start sm:text-center gap-6 font-black text-3xl md:text-4xl text-white uppercase">
                Join shopping community to get monthly promo
            </h2>
            <p className="font-normal text-start sm:text-center text-xl md:text-3xl text-white">
                Type your email down below and be young wild generation
            </p>
            <div className="flex items-center justify-center w-fit bg-white rounded-lg p-2 my-6">
                <Input 
                    placeholder="Add your email here" 
                    className="px-8 text-sm md:text-lg py-4 outline-none border-none focus:outline-none" 
                />
                <Button 
                    variant={"default"} 
                    className="bg-black font-medium text-white text-2xl uppercase px-8 py-6 rounded-lg"
                >
                    Send
                </Button>
            </div>
        </section>
    )
}