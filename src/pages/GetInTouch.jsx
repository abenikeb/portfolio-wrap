import { FiMail, FiPhone, FiGithub } from 'react-icons/fi'
import ContactButton from '../components/ContactButton'

function GetInTouch() {
    return (
        <div className="pt-20 pb-10">
            <div className=" flex w-full  justify-center items-center space-x-4 ">
                <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden md:w-[300px]" />{' '}
                <h1 className="text-color3 text-xl  sm:text-2xl flex items-center  font-semibold font-popi space-x-4 tracking-wider ">
                    Get In Touch
                </h1>
                <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden md:w-[300px]" />
            </div>
            <div className="flex w-full flex-wrap  justify-center items-center space-x-4">
                <ContactButton title="GitHub" Icon={FiGithub} />
                <ContactButton title="0941248799" Icon={FiPhone} />
                <ContactButton title="Mail Me" Icon={FiMail} />
            </div>
        </div>
    )
}

export default GetInTouch
