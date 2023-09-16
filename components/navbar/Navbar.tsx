import { LogoIcon } from "@/public/icons"
import { Button } from "../ui/button"
import Link from "next/link"


export default function DesktopNavbar() {
    return (
        <header className="w-full px-24 py-8">
            <nav className="p-2">
                <ul className="flex flex-row flex-wrap items-center justify-between">
                    <li>
                        <Link href='/' className="flex gap-2 items-center font-black text-4xl">
                            <LogoIcon />
                            <p>FASHION</p>
                        </Link>
                    </li>
                    <div className="flex flex-row items-center justify-between gap-16">
                        {navElemenets.map(navElement => 
                            <li key={navElement.key} className="uppercase text-xl font-normal">
                                <p>{navElement.text}</p>
                            </li>    
                        )}
                        <li className="uppercase font-medium">
                            <Button variant={'default'}>SIGN UP</Button>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

const navElemenets = [
    { key: 2, href: '/catalogue', text: 'Catalogue' },
    { key: 3, href: '/fashion', text: 'Fashion' },
    { key: 4, href: '/favorite', text: 'Favorite' },
    { key: 5, href: '/lifestyle', text: 'Lifestyle' }
]