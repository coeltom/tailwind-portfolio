import { ReactTyped } from 'react-typed';
import coding from '../assets/coding.svg';
const Home = () => {
  return (
    <div className="h-[90vh] flex flex-col md:flex-row px-10 md:px-40 justify-between items-center">
      <h1 className="flex flex-col w-full h-full">
        Hi! I'm Tomas,
        <ReactTyped
          className="text-3xl font-bold text-[#f2f2f2]"
          strings={['Web Developer', 'Frontend Developer']}
          typeSpeed={130}
          backSpeed={150}
          loop></ReactTyped>
      </h1>
      <img className="w-[450px] h-full my-auto" src={coding} alt="" />
    </div>
  );
};

export default Home;
