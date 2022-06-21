import React from 'react'
import MediumCard from '../components/mediumCard'
import SmallCard from '../components/smallCard'
import { projects } from '../Data'

function Works() {
    return (
        <div className="px-2  min-h-[calc(100vh-5rem)] max-w-6xl mx-auto  overflow-y-scroll scrollbar-hide">
            {/* Some Things I’ve Built */}
            <div>
                {/* title */}
                <div className="mt-6">
                    <h1 className="text-color3 text-xl  sm:text-2xl flex items-center  font-semibold font-popi space-x-4 tracking-wider">
                        <span className="text-xl pt-1 text-color1  font-mono font-extralight mr-1 ">
                            02.
                        </span>{' '}
                        Some Things I’ve Built
                        <div className="bg-[#ccd6f6] h-[.03rem] block opacity-10 z-50  overflow-hidden md:w-[300px]" />
                    </h1>
                </div>
                {/* Main project Container  */}
                <div className=" md:pt-4 md:px-10 ">
                    {projects.map(
                        (project, i) =>
                            project.image_path && (
                                <MediumCard
                                    id={i}
                                    key={project.name}
                                    name={project.name}
                                    image_path={project.image_path}
                                    description={project.description}
                                    github_url={project.github_url}
                                    deployed_url={project.deployed_url}
                                    key_techs={project.key_techs}
                                />
                            )
                    )}
                </div>
                {/* All project Container  */}
                <div className="mt-20 pb-5 md:px-10">
                    <h1 className="text-center text-3xl text-color3  font-bold font-popi pt-4 pb-10">
                        Other Noteworthy Projects
                    </h1>
                    <div className="grid grid-cols-1 md:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  ">
                        {projects.map((project) => (
                            <SmallCard
                                key={project.name}
                                name={project.name}
                                description={project.description}
                                github_url={project.github_url}
                                deployed_url={project.deployed_url}
                                key_techs={project.key_techs}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
