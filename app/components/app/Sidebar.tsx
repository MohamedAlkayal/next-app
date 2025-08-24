import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-mirage-950 border-e border-white/10 p-4 hidden md:block flex-shrink-0 fixed h-full">
            <div className="text-white">
                <div className="h-12 w-12 hidden md:block relative">
                    <Image
                        src="/media/images/logo.svg"
                        alt="Logo"
                        fill
                        priority
                        className="object-contain" />
                </div>
                <ul className="mt-12 text-white/90">
                    <li className="flex items-center gap-3 mb-5 cursor-pointer hover:text-white/80">
                        <Icon icon="lucide:home" className="text-xl" />
                        <p className="font-light">Home</p>
                    </li>
                    <li className="flex items-center gap-3 mb-9 cursor-pointer hover:text-white/80">
                        <Icon icon="lucide:compass" className="text-xl" />
                        <p className="font-light">Discover</p>
                    </li>
                    <li className="mb-3 text-white/60 uppercase text-sm">your stuff</li>
                    <li className="flex items-center gap-3 mb-5 cursor-pointer hover:text-white/80">
                        <Icon icon="lucide:list" className="text-xl" />
                        <p className="font-light">My Queue</p>
                    </li>
                    <li className="flex items-center gap-3 mb-5 cursor-pointer hover:text-white/80">
                        <Icon icon="lucide:headphones" className="text-xl" />
                        <p className="font-light">My Podcasts</p>
                    </li>
                    <li className="flex items-center gap-3 mb-5 cursor-pointer hover:text-white/80">
                        <Icon icon="lucide:clock" className="text-xl" />
                        <p className="font-light">Recents</p>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
