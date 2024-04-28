import React from "react";

const Skills = () => {
  const SkillsData = [
    {
      section: "Languages",
      data: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        },
      ],
    },
    {
      section: "Frameworks",
      data: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
        },

        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        },
        {
          name: "Spring",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
      ],
    },
    {
      section: "Stylings",
      data: [
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
        },
        {
          name: "SASS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
        },
      ],
    },
    {
      section: "Databases",
      data: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg",
        },
      ],
    },
    {
      section: "Tools",
      data: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
        },
        {
          name: "Slack",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
        },
        {
          name: "Jira",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
        },
        {
          name: "Github",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          name: "Bitbucket",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
        },
      ],
    },
  ];
  return (
    <div className="pt-[7%] px-[10%]">
      <div className="text-[30px] font-bold mb-4">Skills</div>
      <div className="grid grid-cols-3 gap-8">
        {SkillsData.map((skills, id) => (
          <div
            className="w-[100%] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-lg rounded-xl border border-white border-opacity-20 p-4 h-full"
            key={id}
          >
            <div className="text-[1.5rem]">{skills.section}</div>
            <div className="grid grid-cols-3 justify-between mt-4 gap-[30px]">
              {skills.data.map((data, id) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={id}
                >
                  <img
                    style={{
                      width: "3vw",
                    }}
                    src={data.icon}
                  />
                  <div>{data.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
