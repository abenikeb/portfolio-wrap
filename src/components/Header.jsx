import { useEffect, useState } from 'react'
import NavbarLink from './NavbarLink'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'

function Header() {
    const [yAxis, setYaxis] = useState()
    const [open, setOpen] = useState()

    const handleScroll = () => {
        const position = window.scrollY.toFixed(0)
        setYaxis(position)
    }

    useEffect(() => window.addEventListener('scroll', handleScroll), [])

    const handelClick = () => {
        setOpen(!open)
    }

    return (
        <div
            className={`flex flex-row md:px-20 z-[9999] items-center justify-between h-20 w-full  fixed top-0 bg-[#091628] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  ${
                yAxis >= 50 ? 'shadow-2xl' : ''
            } `}
        >
            <img className="w-20 h-20" src="/images/n.png" alt="logo" />
            <div className="hidden sm:flex-row sm:space-x-4 sm:flex ">
                <NavbarLink number={1} title="About" />
                <NavbarLink number={2} title="Testimonials" />
                <NavbarLink number={3} title="Work" />
                <NavbarLink number={4} title="Skill" />
                <NavbarLink number={5} title="Contact" />
            </div>
            <div className="block sm:hidden">
                {open ? (
                    <MenuAlt1Icon
                        className=" h-81 w-8 text-color1 mr-3 cursor-pointer an"
                        onClick={handelClick}
                    />
                ) : (
                    <XIcon
                        className=" h-81 w-8 text-color1 mr-3 cursor-pointer an"
                        onClick={handelClick}
                    />
                )}
            </div>
        </div>
    )
}

export default Header
