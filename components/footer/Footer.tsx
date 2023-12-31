import Link from 'next/link'
import { FacebookIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '@/public/footer/social_icons/SocialIcons'

export default function Footer() {
    return (
        <footer className="w-full flex flex-col lg:flex-row lg:gap-16 py-8 md:py-24 px-2 md:px-16 bg-black">
            <div className='flex flex-col gap-8'>
                <h2 className="text-center lg:text-start gap-6 font-black text-4xl text-white uppercase">
                    Fashion
                </h2>
                <p className="text-[#8E8E8E] text-lg text-center lg:text-start">
                    Complete your style with awesome clothes from us.
                </p>
                <div className='flex flex-row justify-center lg:justify-start gap-3'>
                    {socials.map(social => 
                        <Link href={social.href} 
                            className='h-12 w-18 bg-[#EBD96B] flex items-center  py-2 px-4 rounded-2xl' 
                            key={social.id}
                        >
                            {social.icon}
                        </Link>
                    )}
                </div>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:mt-0 md:gap-2'>
                {footerList.map((footerListArray, idx) => 
                    <div key={idx} className='grid grid-span-full gap-4 md:gap-6'>
                        {footerListArray.map(item => 
                            <div key={item.id}>
                                <p className={`${item.id === 1 ? 'text-[#D9D9D9]' : 'text-[#8E8E8E]'}`}>
                                    {item.text}
                                </p>
                            </div>    
                        )}
                    </div>
                )}
            </div>
        </footer>
    )
}

const socials = [
    { id: 1, icon: <FacebookIcon />, href: 'https://www.facebook.com' },
    { id: 2, icon: <InstagramIcon />, href: 'https://www.instagram.com' },
    { id: 3, icon: <TwitterIcon />, href: 'https://www.twitter.com' },
    { id: 4, icon: <LinkedinIcon />, href: 'https://www.linkedin.com' },
]

const footerList = [
    [
      { id: 1, text: 'Company' },
      { id: 2, text: 'About' },
      { id: 3, text: 'Contact Us' },
      { id: 4, text: 'Support' },
      { id: 5, text: 'Careers' }
    ],
    [
      { id: 1, text: 'Quick Link' },
      { id: 2, text: 'Share Location' },
      { id: 3, text: 'Orders Tracking' },
      { id: 4, text: 'Size Guide' },
      { id: 5, text: 'FAQs' }
    ],
    [
      { id: 1, text: 'Legal' },
      { id: 2, text: 'Terms & Conditions' },
      { id: 3, text: 'Privacy Policy' }
    ]
];
