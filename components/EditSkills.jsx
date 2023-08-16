"use client";

import { useState } from "react";

export default function EditSkills({setIsEditingSkills,skills,setskills}) {
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([...skills]);
  const [suggestedSkills, setSuggestedSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "Java",
  ]);

  const filteredSkills = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(skillInput.toLowerCase())
  );

  const handleSkillClick = (selectedSkill) => {
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
    setSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleSkillsSave = () => {
    setskills(selectedSkills);
    setIsEditingSkills(false);
  }

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-[30rem] max-h-[80vh] overflow-auto">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Type to add a skill"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <div className="mb-4">
            {skillInput && filteredSkills.length > 0 && (
              <ul className="mt-2 border border-gray-300 rounded-md absolute bg-white">
                {filteredSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSkillClick(skill)}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {selectedSkills.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Selected Skills
              </label>
              <ul className="mt-2">
                {selectedSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="p-2 inline-block m-1 bg-gray-100 rounded-md cursor-pointer"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-between">
            <button
              onClick={handleSkillsSave}
              className="text-white bg-[#341f97] py-2 px-8 rounded-[2rem]"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditingSkills(false)}
              className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem] ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
