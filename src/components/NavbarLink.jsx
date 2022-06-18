function NavbarLink({ number, title, onPress }) {
    return (
        <div className="fx space-x-1 mx-6 hover:border-b-2 border-color1 hover:transform-gpu hover:duration-200 ">
            <h2 className="text-base text-color1 font-medium ">{number}</h2>
            <h2 className="text-lg text-color3 font-popi font-medium ">
                {title}
            </h2>
            <div />
        </div>
    )
}

export default NavbarLink
