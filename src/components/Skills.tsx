import React from 'react';

interface Skill {
  name: string;
  logo: string;
}

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const skills: Skill[] = [
    { name: 'React', logo: 'react-logo.svg' },
    { name: 'TypeScript', logo: 'typescript-logo.svg' },
    { name: 'Node.js', logo: 'nodejs-logo.svg' },
    { name: 'Python', logo: 'python-logo.svg' },
    { name: 'JavaScript', logo: 'javascript-logo.svg' },
    { name: 'HTML5', logo: 'html5-logo.svg' },
    { name: 'CSS3', logo: 'css3-logo.svg' },
    { name: 'MongoDB', logo: 'mongodb-logo.svg' },
    { name: 'PostgreSQL', logo: 'postgresql-logo.svg' },
    { name: 'Git', logo: 'git-logo.svg' },
    { name: 'Docker', logo: 'docker-logo.svg' },
    { name: 'AWS', logo: 'aws-logo.svg' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                <span className="text-xs text-gray-600">Logo</span>
              </div>
              <span className="text-sm font-medium text-gray-800 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;