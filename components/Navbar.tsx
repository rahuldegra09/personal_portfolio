'use client'
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/logo.png'
import oggle from "@/public/toggle.png"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState,} from 'react';
import { routes } from '@/constants';
import { styles } from '@/styles';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleClick=(post:any)=> {
        console.log(post);
        if (active===post) setActive("");
        else setActive(post);
    };

    return (

        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-transparent" : "bg-black"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
{/* logo image */}
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link href="/" className=' flex gap-2 items-center'
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);  }} >
                    <Image src={logo} width={50} height={50} alt='logo' className=' object-contain ' />
                        <p className='text-cyan-100 text-[18px] gap-2 font-bold cursor-pointer flex '>Rahul <span className=''>|web developer|</span></p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {routes.map((post) => (
                        <li key={post.id}
                            className={`${active === post.title ? "text-green-400" : "text-slate-600"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(post.title)}>
                            <a href={`#${post.id}`}>{post.title}</a>
                        </li>
                    ))}
                </ul>
{/* toggler image */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image src={toggle ? logo : oggle} width={50} height={50} alt='oggle'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-pink-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex  flex-col gap-2  justify-end items-start'>
                            {routes.map((post) => (
                                <li key={post.id}
                                    className={`${active === post.title ? "text-blue-500 font-bold" : "text-gray-200"} font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(post.title); }}>
                                    <a href={`#${post.id}`}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                     </div>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar