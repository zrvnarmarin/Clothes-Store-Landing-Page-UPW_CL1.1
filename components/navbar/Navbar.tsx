import { LogoIcon } from "@/public/icons"
import { Button } from "../ui/button"
import Link from "next/link"
import { AlignCenter } from "lucide-react"

const navElemenets = [
    { key: 2, href: '/catalogue', text: 'Catalogue' },
    { key: 3, href: '/fashion', text: 'Fashion' },
    { key: 4, href: '/favorite', text: 'Favorite' },
    { key: 5, href: '/lifestyle', text: 'Lifestyle' }
]

export default function DesktopNavbar() {
    return (
        <header className="w-full px-2 xl:px-24 py-8">
            <nav className="p-2">
                <ul className="flex flex-row flex-wrap items-center justify-between">
                    <li>
                        <Link href='/' className="flex gap-3 items-center font-black text-4xl">
                            <LogoIcon />
                            <p className="text-2xl lg:text-4xl">FASHION</p>
                        </Link>
                    </li>
                    <div className="hidden md:flex flex-row items-center justify-between gap-8 lg:gap-16">
                        {navElemenets.map(navElement => 
                            <li key={navElement.key} className="uppercase text-md lg:text-xl font-medium lg:font-normal">
                                <Link href={navElement.href}>{navElement.text}</Link>
                            </li>    
                        )}
                        <li className="uppercase font-medium">
                            <Button variant={'default'}>SIGN UP</Button>
                        </li>
                    </div>
                    <li className="md:hidden">
                        <button>
                            <AlignCenter />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}