import Image from 'next/image';
import Lewis from '@/public/companies/Lewis.png'
import Amazon from '@/public/companies/Amazon.png'
import Him from '@/public/companies/H&M.png'
import LaCoste from '@/public/companies/LaCoste.png'
import Obey from '@/public/companies/Obey.png'
import Shopify from '@/public/companies/Shopify.png'

export default function CompaniesSection() {
    return (
        <div className="w-full flex flex-row items-center justify-between px-16 py-12 mt-10 mb-12 bg-[#EBD96B]">
            {companiesLogos.map(logo =>
                <div key={logo.id}>
                    <Image src={logo.src} alt={logo.alt} height={50} width={80} />
                </div>    
            )}
        </div>
    )
}

const companiesLogos = [
    { id: 1, src: Lewis, alt: 'Lewis_logo' },
    { id: 2, src: Amazon, alt: 'Amazon_logo' },
    { id: 3, src: Him, alt: 'Him_logo' },
    { id: 4, src: LaCoste, alt: 'LaCoste_logo' },
    { id: 5, src: Obey, alt: 'Obey_logo' },
    { id: 6, src: Shopify, alt: 'Shopify_logo' },

]