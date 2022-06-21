function ContactButton({ title, Icon }) {
    return (
        <button className="px-5 py-[6px] mt-8 text-[14px] border rounded-md border-color1 text-color1 hover:bg-color1 hover:bg-opacity-10 fx font-normal font-popi">
            <a href={'github_url'} target="_blank" rel="noreferrer">
                <Icon className="text-color1  h-5 w-5 mr-2 " />
            </a>
            {title}
        </button>
    )
}

export default ContactButton
