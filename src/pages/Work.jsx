import ProjectCard from '../components/ProjectCard';

const Work = () => {
  const projects = [
    {
      title: 'Weather App',
      description:
        'Simple weather app that displays basic information using the OpenWeatherMap API.',
      ghub: 'https://github.com/coeltom/weather-app',
      link: 'https://weather.tomascoe.dev',
    },
    {
      title: 'Movies',
      description:
        'Basic JS movie search app that displays info from the OMDB API.',
      ghub: 'https://github.com/coeltom/movies',
      link: 'https://movies.tomascoe.dev',
    },
  ];

  return (
    <div className="my-16 px-14">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Work;
