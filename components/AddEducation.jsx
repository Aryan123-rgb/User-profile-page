"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function AddEducation({
  setIsAddingEducation,
  setEducations,
  educations,
}) {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const handleAddEducation = async () => {
    const newEducation = {
      university,
      degree,
      year,
      desc:description,
    };
    try {
      const response = await fetch("http://localhost:3000/api/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: id,
          university,
          degree,
          year,
          desc: description,
        }),
      });
      if (response.ok) {
        const data = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
    setEducations([newEducation, ...educations]);
    setUniversity("");
    setDegree("");
    setYear("");
    setDescription("");
    setIsAddingEducation(false);
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
            onClick={() => setIsAddingEducation(false)}
            className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem] ml-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
