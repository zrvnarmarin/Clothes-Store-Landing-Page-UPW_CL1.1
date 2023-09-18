import Image from 'next/image'
import MobileApp from '@/public/downloadApp/mobileApp.png'
import GooglePlay from '@/public/downloadApp/Rectangle 18.svg'
import AppleStore from '@/public/downloadApp/Rectangle 55.svg'

export default function DownloadAppSection() {
    return (
        <section className='w-full flex flex-row py-24 px-16'>
            <div className='flex flex-col items-center'>
                <h2 className="flex flex-col text-start gap-4 font-black text-4xl text-black uppercase">
                    <span>Download App &</span>
                    <span>Get The Voucher!</span>
                </h2>
                <p className='text-[#7C7C7C] text-lg'>
                    Get 30% off for the first transaction using Rondovision mobile app for now.
                </p>
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='flex'>
                        <Image src={GooglePlay} width={170} height={55} alt='Google Play icon' />
                    </div>
                    <div className='flex'>
                        <Image src={AppleStore} width={170} height={55} alt='Apple App Store icon' />
                    </div>
                </div>
            </div>
            <div>
               <Image src={MobileApp} width={100} height={100} alt='Mobile App' /> 
            </div>
        </section>
    )
}