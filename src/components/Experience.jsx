import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import symfony from '../assets/symfony.jpg';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: symfony,
      title: 'Symfony',
      style: 'shadow-gray-300',
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 7,
      src: nextjs,
      title: 'NextJs',
      style: 'shadow-white',
    },
    {
      id: 8,
      src: node,
      title: 'NodeJs',
      style: 'shadow-green-200',
    },
    {
      id: 9,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expérience
          </p>
          <p className="p-6">Quelques technologies que j'aime utiliser...</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt={tech.src} className="w-20 mx-auto" />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
