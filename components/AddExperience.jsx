"use client";

import { useState } from "react";

export default function AddExperience({
  setIsAddingExperience,
  experiences,
  setExperiences
}) {
  const [startYearInput, setStartYearInput] = useState("2023");
  const [endYearInput, setEndYearInput] = useState("2024");
  const [jobRoleInput, setJobRoleInput] = useState("Full Stack developer");
  const [jobTypeInput, setJobTypeInput] = useState("Internship");
  const [companyNameInput, setCompanyNameInput] = useState("Google");

  const handleExperienceSave = () => {
    const newExperience = {
      startYear: startYearInput,
      endYear: endYearInput,
      jobRole: jobRoleInput,
      jobType: jobTypeInput,
      companyName: companyNameInput
    };

    setExperiences([newExperience,...experiences])
    resetInputs();
    setIsAddingExperience(false);
  };

  const resetInputs = () => {
    setStartYearInput("");
    setEndYearInput("");
    setJobRoleInput("");
    setJobTypeInput("");
    setCompanyNameInput("");
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
              Add Experience
            </button>
            <button
              onClick={() => setIsAddingExperience(false)}
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
