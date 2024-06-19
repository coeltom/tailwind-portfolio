import profilePic from '../assets/profile-pic.png';

const AboutMe = () => {
  return (
    <div className=" h-[90vh] p-6 md:p-12 lg:p-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-full shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 mt-6 md:mt-0 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-[#f2f2f2] text-lg mb-4">
            As a web development enthusiast, I have pursued my passion for
            technology and programming by obtaining a Fontend web developer
            degree from Coderhouse. There, I learned and applied various skills
            and tools, such as Figma, GitHub, and Bootstrap, to design and
            develop user-friendly websites. I have also gained valuable
            experience as a Freelance Web Developer, working on projects for
            different clients and companies, such as Sweet&Fresh, a Mexican
            Import/Export business.
          </p>
          <p className="text-[#f2f2f2] text-lg mb-4">
            Additionally, I had the opportunity to work as an Account Manager at
            Hilti Italia, a leading provider of construction solutions, for
            three months, where I supported the sales and service team and
            managed customer relations. My goal is to deepen my knowledge and
            expertise in web development by joining a professional team that
            values innovation, collaboration, and quality.
          </p>
          <p className="text-[#f2f2f2] text-lg">
            Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
