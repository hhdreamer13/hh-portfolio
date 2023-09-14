/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const TypeShufflerWrapper = dynamic(() => import("./TypeShufflerWrapper"), {
  ssr: false,
});

import { projects } from "@/utils/projectsText";

const Project = () => {
  const textElementRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleTabClick = (idx) => {
    setSelectedProject(projects[idx]);
  };

  return (
    <div className='text-slate-50'>
      <div className='w-full text-center text-[#216c8b]'>
        {projects.map((project, index) => {
          console.log(project, selectedProject);
          return (
            <button
              key={project.id}
              className={`hover:text-[#fdec7b] border border-[#216c8b] px-2 py-1 ${
                project.id === selectedProject.id ? " text-slate-50" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {project.id}
            </button>
          );
        })}
      </div>

      <TypeShufflerWrapper
        ref={textElementRef.current}
        key={selectedProject.id}
        className='text-slate-50 flex flex-col gap-4 mt-5'
      >
        {selectedProject && (
          <>
            <h3 className=''>
              <span className='text-red-600'>@ </span>
              {selectedProject.employer}
            </h3>
            <p className='text-[#e8b785]'>{selectedProject.stack}</p>
            <ul className='list-inside list-disc marker:text-slate-600'>
              {selectedProject.description.map((desc, index) => (
                <li key={index} className='my-1'>
                  {desc}
                </li>
              ))}
            </ul>
            <a
              className='text-cyan-600 hover:text-[#216c8b] w-fit'
              href={selectedProject.link}
              target='_blank'
              rel='noreferrer'
            >
              Take a look
            </a>
          </>
        )}
      </TypeShufflerWrapper>
    </div>
  );
};

export default Project;
