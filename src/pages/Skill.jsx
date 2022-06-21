import { languages } from '../Data'

function Skill() {
    return (
        <div className="max-w-6xl  mx-auto   min-h-[70vh] md:pt-[4%] px-2  ">
            <h1 className="text-color3  text-3xl fx font-popi font-semibold  space-x-4 tracking-wider">
                <span className="text-2xl text-color1  font-mono font-normal mr-1 ">
                    02.
                </span>
                Skills
                <div className="bg-[#8CFFE2] h-[.02rem] block opacity-50    overflow-hidden w-[300px]" />
            </h1>
            <div className="md:pl-5 pt-6 md:pt-8 md:ml-10 ">
                <h1 className="text-base text-color2 font-popi font-normal py-4 ">
                    Here are a few technologies I’ve been working with recently:
                </h1>
                <div className="grid grid-cols-2 max-w-[400px] ">
                    {languages.map(({ Icon, name, level }) => (
                        <div
                            key={name}
                            className="fx select-none   duration-300  py-1 hover:font-semibold"
                        >
                            <Icon className="h-3 text-color1 " />
                            <h1 className="text-sm font-mono text-color2 font-medium ">
                                {name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill
