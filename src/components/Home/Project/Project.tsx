import { projectData } from "@/Data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
    return (
        <div className="pt-16 pb-16 bg-[#050709]">
            <SectionHeading>My Projects</SectionHeading>
            <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                {projectData.map((project, i) => {
                    return (
                        <div
                            key={project.id}
                            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duraion-300"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay={`${i * 150}`}
                        >
                            <Link href={project.url} target="_blank">
                                <Image
                                    src={project.image}
                                    alt="Projec"
                                    className="w-full"
                                    height={200}
                                    width={300}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;