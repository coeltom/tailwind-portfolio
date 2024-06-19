import { ReactTyped } from 'react-typed';
import coding from '../assets/coding.svg';
const Home = () => {
  return (
    <div className="h-[90vh] flex flex-col md:flex-row px-40 justify-between items-center">
      <h1 className="flex flex-col">
        Hi! I'm Tomas Coelho,
        <ReactTyped
          className="text-3xl font-bold text-[#f2f2f2]"
          strings={['Web Developer', 'Frontend Developer']}
          typeSpeed={70}
          backSpeed={50}
          loop></ReactTyped>
      </h1>
      <img className="w-[450px]" src={coding} alt="" />
    </div>
  );
};

export default Home;
