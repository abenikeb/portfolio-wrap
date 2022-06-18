import NavbarLink from './NavbarLink'

function Header() {
    return (
        <div className="flex flex-row px-12 items-center justify-between h-20 max-w-7xl mx-auto  ">
            <img className="w-20 h-20" src="/images/n.png" alt="logo" />
            <div className="flex flex-row space-x-4 ">
                <NavbarLink number={1} title="About" />
                <NavbarLink number={2} title="Testimonials" />
                <NavbarLink number={3} title="Work" />
                <NavbarLink number={4} title="Skill" />
                <NavbarLink number={5} title="Contact" />
            </div>
        </div>
    )
}

export default Header
