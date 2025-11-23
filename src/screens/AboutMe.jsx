import Lottie from "lottie-react";
import React from 'react'
import programmer from '../assets/Programmer.json';

const AboutMe = () => {
  return (
    <section className="w-full px-6 md:px-20 pt-10 pb-0 md:pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* image container */}
      <div className="w-full max-w-lg mt-16 md:mt-0">
        <Lottie animationData={programmer} loop={true}/>
      </div>

      {/* text container */}
      <div className="max-w-3xl">

        {/* first paragraph */}
        <p className="text-white/70 tracking-widest text-sm md:text-base mb-4">
            Full Stack Developer with over 2 years of hands-on experience building, maintaining, and enhancing product-based web applications. Proficient in HTML, CSS (Bootstrap, Tailwind), JavaScript, React JS, Node JS, Redux-Saga, PHP, REST APIs, MongoDB, PostgreSQL, MySQL, Git, and Linux.
        </p>

        {/* second paragraph */}
        <p className="text-white/70 tracking-widest text-sm md:text-base mb-4">
            A proactive problem solver, focused on implementing feature enhancements, resolving bugs, and optimizing performance. Passionate about delivering user-focused solutions and collaborating in cross-functional teams.
        </p>

        {/* third paragraph */}
        <p className="text-white/70 tracking-widest text-sm md:text-base mb-4">
            Emerging leader, having mentored interns and contributed to major product releases. Dedicated to efficient coding practices and continual learning.
        </p>
      </div>

    </section>
  )
}

export default AboutMe
