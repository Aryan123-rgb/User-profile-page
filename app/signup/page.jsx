"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [phone, setPhone] = useState("+91 ");
  const [skills, setSkills] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [suggestedSkills, setSuggestedSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "Java",
    // Add more suggested skills here
  ]);

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    setSkills(value);
  };

  const handleSkillClick = (selectedSkill) => {
    if (!selectedSkills.includes(selectedSkill)) {
      setSelectedSkills([...selectedSkills, selectedSkill]);
    }
    setSkills("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const filteredSkills = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(skills.toLowerCase())
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-[520px]">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full sm:w-1/2 pr-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 pl-2 mt-4 sm:mt-0">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              rows="3"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 resize-none"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={skills}
              onChange={handleSkillsChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your skills"
            />
            {skills && filteredSkills.length > 0 && (
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
          <div className="mb-4">
            <label
              htmlFor="certifications"
              className="block text-sm font-medium text-gray-700"
            >
              Certifications
            </label>
            <input
              type="text"
              id="certifications"
              name="certifications"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your certifications"
            />
          </div>
          <Link href={"/profile/123"}>
            {" "}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
