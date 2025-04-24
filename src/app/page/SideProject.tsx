import Image from 'next/image';
import React from 'react';
import Tag from '../components/Tag/Tag';

interface SideProjectProps {
    title : string;
    description : string;
    image: string;
    repository?: string;
    demo?: string;
    tags?: string[];
}

const SideProject = ({ title, description, image, repository, demo, tags }: SideProjectProps) => {
    return (
        <>
        <div className="flex flex-col gap-4 text-[#eaeaea9d]">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags && tags.map((tag, index) => (
                   <Tag key={index} tag={tag}/>
                ))}
            </div>
            {image && <Image src={image} alt={title} width={500} height={300} className="rounded-lg" />}
            <div className="flex flex-row gap-2" >
            {repository && <a href={repository} className="font-medium  underline hover:text-white"> Repository</a>}
            {demo && <a href={demo} className="font-medium hover:text-white underline">Demo</a>}
            </div>
        </div>
        </>
    );
}
export default SideProject;