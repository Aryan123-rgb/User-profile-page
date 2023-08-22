"use client";

import { useState } from "react";

export default function EditExperience({
  setIsEditingExperience,
  experience,
  setExperiences,
  experiences,
}) {
  const [startYearInput, setStartYearInput] = useState(experience.startYear);
  const [endYearInput, setEndYearInput] = useState(experience.endYear);
  const [jobRoleInput, setJobRoleInput] = useState(experience.jobRole);
  const [jobTypeInput, setJobTypeInput] = useState(experience.jobType);
  const [companyNameInput, setCompanyNameInput] = useState(
    experience.companyName
  );

  const handleExperienceSave = async() => {
    const newExperience = {
      startYear: startYearInput,
      endYear: endYearInput,
      jobRole: jobRoleInput,
      jobType: jobTypeInput,
      companyName: companyNameInput,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: experience?._id,
          startYear: startYearInput,
          endYear: endYearInput,
          jobRole: jobRoleInput,
          jobType: jobTypeInput,
          companyName: companyNameInput,
        }),
      });
      if (response.ok) {
        const data = await response.json();
      }
    } catch (error) {
      console.log(error);
    }

    const updatedExperiences = experiences.map((exp) =>
      exp === experience ? newExperience : exp
    );

    setExperiences(updatedExperiences);
    resetInputs();
    setIsEditingExperience(false);
  };

  const resetInputs = () => {
    setStartYearInput("");
    setEndYearInput("");
    setJobRoleInput("");
    setJobTypeInput("");
    setCompanyNameInput("");
  };

  const handleRemoveExperience = () => {
    const updatedExperience = experiences.filter((exp) => exp !== experience);
    setExperiences(updatedExperience);
    setIsEditingExperience(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-[30rem] max-h-[80vh] overflow-auto">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <input
            type="text"
            value={startYearInput}
            onChange={(e) => setStartYearInput(e.target.value)}
            placeholder="Start Year"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <input
            type="text"
            value={endYearInput}
            onChange={(e) => setEndYearInput(e.target.value)}
            placeholder="End Year"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <input
            type="text"
            value={jobRoleInput}
            onChange={(e) => setJobRoleInput(e.target.value)}
            placeholder="Job Role"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <input
            type="text"
            value={jobTypeInput}
            onChange={(e) => setJobTypeInput(e.target.value)}
            placeholder="Job Type"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <input
            type="text"
            value={companyNameInput}
            onChange={(e) => setCompanyNameInput(e.target.value)}
            placeholder="Company Name"
            className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleExperienceSave}
              className="text-white bg-[#341f97] py-2 px-8 rounded-[2rem]"
            >
              Save
            </button>
            <button
              onClick={handleRemoveExperience}
              className="text-white bg-[red] py-2 px-8 rounded-[2rem] ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
