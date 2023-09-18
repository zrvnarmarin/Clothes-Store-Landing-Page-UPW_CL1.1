import Image from 'next/image'
import GooglePlay from '@/public/downloadApp/Rectangle 18.svg'
import AppleStore from '@/public/downloadApp/Rectangle 55.svg'

export default function DownloadAppSection() {
    return (
        <section className='w-full flex flex-row justify-center mb-10 px-2 md:px-16'>
            <div className='flex flex-col items-center gap-4'>
                <h2 className="text-start sm:text-center gap-6 font-black text-3xl md:text-4xl text-black uppercase">
                    <span>Download App &</span>
                    <span>Get The Voucher!</span>
                </h2>
                <p className='text-[#7C7C7C] text-lg'>
                    Get 30% off for the first transaction using Rondovision mobile app for now.
                </p>
                <div className='flex flex-row flex-wrap gap-4'>
                    <div className='flex'>
                        <Image src={GooglePlay} width={170} height={55} alt='Google Play icon' />
                    </div>
                    <div className='flex'>
                        <Image src={AppleStore} width={170} height={55} alt='Apple App Store icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}