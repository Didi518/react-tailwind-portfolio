import React from 'react';
import fantasyPortfolio from '../assets/portfolio/fantasy-portfolio.png';
import installNode from '../assets/portfolio/installNode.jpg';
import kevflix from '../assets/portfolio/kevflix.png';
import oldPortfolio from '../assets/portfolio/old-portfolio.png';
import toktok from '../assets/portfolio/toktok.png';
import twitt from '../assets/portfolio/twittos.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fantasyPortfolio,
      alt: 'portfolio animé',
      demo: 'https://keke-portfolio.netlify.app/',
      code: 'https://github.com/Didi518',
    },
    {
      id: 2,
      src: installNode,
      alt: 'tuto nodeJs',
      demo: '',
      code: 'https://github.com/Didi518',
    },
    {
      id: 3,
      src: kevflix,
      alt: 'site basé sur The Movie Database',
      demo: 'https://mern-movies.vercel.app/',
      code: 'https://github.com/Didi518/mern-movie-app',
    },
    {
      id: 4,
      src: oldPortfolio,
      alt: 'exemple de portfolio',
      demo: 'https://app.netlify.com/sites/vermillion-bavarois-02b139/overview',
      code: 'https://github.com/Didi518',
    },
    {
      id: 5,
      src: toktok,
      alt: 'clone de Tiktok',
      demo: 'https://toktok-one.vercel.app/',
      code: 'https://github.com/Didi518/toktok',
    },
    {
      id: 6,
      src: twitt,
      alt: 'clone de Twitter',
      demo: 'https://keke-tweet.vercel.app/',
      code: 'https://github.com/Didi518/keke-tweet',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Quelques projets juste ici...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={portfolio.src}
                alt={portfolio.alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={portfolio.demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={portfolio.code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
