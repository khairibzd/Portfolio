"use client";

import React from "react";
import { Frontend, Backend, Tools } from "./constant";

interface SkillComponents {
  [key: string]: () => JSX.Element;
}

const skillComponents: SkillComponents = {
  Frontend: Frontend,
  Backend: Backend,
  Tools: Tools,
};

const data = [
  {
    label: "Frontend",
  },
  {
    label: "Backend",
  },
  {
    label: "Tools",
  },
];

const Skills = () => {
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center justify-center py-5">
        <p className="font-bold text-3xl">Skills</p>
        <div className="h-[2px] w-20 bg-blue-500 rounded-full my-1"></div>
      </div>
      <div className="flex flex-col justify-center items-center px-3">
        {data.map(({ label }) => (
          <div key={label} className="flex flex-col m-1">
            <div className="flex flex-col">
              <span className="animate_in text-xl mt-1">{label}</span>
              <div className="w-16 h-[1px] bg-blue-500 rounded-full my-1"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
              {skillComponents[label] && <div>{skillComponents[label]()}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
