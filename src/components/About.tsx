import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-600">Photo Placeholder</span>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With experience in React, Node.js, Python, and various databases, I bring ideas to life 
              through clean code and innovative solutions.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;