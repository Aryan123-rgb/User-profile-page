"use client";

import { useState } from "react";

export default function EditEducation({
  education,
  setIsEditingEducation,
  setEducations,
  educations,
}) {
  const [university, setUniversity] = useState(education.university);
  const [degree, setDegree] = useState(education.degree);
  const [year, setYear] = useState(education.year);
  const [description, setDescription] = useState(education.description);

  const handleAddEducation = () => {
    const newEducation = {
      university,
      degree,
      year,
      description,
    };

    const updatedEducation = educations.map((education) =>
      education === education ? newEducation : education
    );

    setEducations(updatedEducation);
    setUniversity("");
    setDegree("");
    setYear("");
    setDescription("");
    setIsEditingEducation(false);
  };

  const handleRemoveEducation = () => {
    const updatedEducations = educations.filter((edu) => edu !== education);
    setEducations(updatedEducations);
    setIsEditingEducation(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[30rem] max-h-[80vh] overflow-auto">
        <h3 className="text-2xl font-semibold mb-2">Add Education</h3>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="University"
          className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
          className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4 resize-none"
          rows={4}
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddEducation}
            className="text-white bg-[#341f97] py-2 px-8 rounded-[2rem]"
          >
            Add Education
          </button>
          <button
            onClick={handleRemoveEducation}
            className="text-white bg-[red] py-2 px-8 rounded-[2rem] ml-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
