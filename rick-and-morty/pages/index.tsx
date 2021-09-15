import { NextPage } from 'next';
import IntroTemplate from '../src/components/_templates/Intro';

const Home: NextPage = () => {
  return <IntroTemplate title="Rick and Morty FE Tech Test" />;
};

export default Home;
