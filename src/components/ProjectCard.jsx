import React from 'react';

const ProjectCard = projects => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {project.description}
          </p>
          <a
            href={project.ghub}
            target="_blank"
            className="inline-flex font-medium items-center text-blue-600 hover:underline">
            See on Github
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
          <a
            href={project.link}
            target="_blank"
            className="inline-flex font-medium items-center text-blue-600 hover:underline ml-3">
            Live Demo
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
