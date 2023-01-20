import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/ko-/',
      style: 'rounded-tr-md bg-blue-600',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Didi518',
      style: 'bg-[#333333]',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:kevin.ouali@gmail.com',
      style: 'bg-[#6fc2b0]',
    },
    {
      id: 4,
      child: (
        <>
          Mon CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/cv.pdf',
      style: 'rounded-br-md bg-[#565f69]',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] l-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-gray-500' +
              ' ' +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
