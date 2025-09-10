import React from 'react';

interface Skill {
  name: string;
  logo: string;
}

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const skills: Skill[] = [
    { name: 'React', logo: '/images/skills/react-logo.svg' },
    { name: 'TypeScript', logo: '/images/skills/typescript-logo.svg' },
    { name: 'Node.js', logo: '/images/skills/nodejs-logo.svg' },
    { name: 'Python', logo: '/images/skills/python-logo.svg' },
    { name: 'JavaScript', logo: '/images/skills/javascript-logo.svg' },
    { name: 'HTML5', logo: '/images/skills/html5-logo.svg' },
    { name: 'CSS3', logo: '/images/skills/css3-logo.svg' },
    { name: 'MongoDB', logo: '/images/skills/mongodb-logo.svg' },
    { name: 'PostgreSQL', logo: '/images/skills/postgresql-logo.svg' },
    { name: 'Git', logo: '/images/skills/git-logo.svg' },
    { name: 'Docker', logo: '/images/skills/docker-logo.svg' },
    { name: 'AWS', logo: '/images/skills/aws-logo.svg' }
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
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
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