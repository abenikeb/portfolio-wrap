import { AboutData as about } from '../Data.js'

function AboutPage() {
    return (
        <div className="max-w-6xl  mx-auto   min-h-[83vh] md:min-h-[70vh] md:pt-[4%] px-2      ">
            <h1 className="text-color3  text-3xl fx font-popi font-semibold  space-x-4 tracking-wider">
                <span className="text-2xl text-color1  font-mono font-normal mr-1 ">
                    02.
                </span>
                About
                <div className="bg-[#8CFFE2] h-[.02rem] block opacity-50    overflow-hidden w-[300px]" />
            </h1>
            <div className="flex flex-col sm:flex-grow md:flex-row xl:flex-grow  mx-auto md:mx-0  justify-between  relative w-[80%] mt-3">
                <div className="flex flex-1">
                    <p className="pt-6 text-color2 w-full  md:w-[80%] font-medium text-sm font-popi  break-words py-8">
                        {about.description}
                    </p>
                </div>
                <div className="w-72 h-72 rounded-full overflow-hidden  border-[2px] border-color1">
                    <img
                        src="https://avatars.githubusercontent.com/u/81810944?v=4"
                        alt="user"
                        className="w-[100%] h-[100%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
