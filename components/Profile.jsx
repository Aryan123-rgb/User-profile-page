"use client";

import { useState } from "react";
import EditSkills from "./EditSkills";
import EditExperience from "./EditExperience";
import AddExperience from "./AddExperience";
import AddEducation from "./AddEducation";

export default function Profile() {
  const [name, setName] = useState("Vishnu Swaroop");
  const [email, setEmail] = useState("vishnu@oruphones.com");
  const [phone, setPhone] = useState("+91 8955225575");
  const [about, setAbout] = useState(
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates ipsa dolore maxime quae unde eos, molestias quisquam quasi minima tempore fugit, autem fugiat, quidem repellendus explicabo vitae doloribus quas expedita?`
  );
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isAddingEducation,setIsAddingEducation] = useState(false);

  const [editingfield, setEditingField] = useState("");
  const [editingfieldValue, setEditingFieldValue] = useState("");
  const [editingExperience, setEditingExperience] = useState("");

  const handleEditBio = (field) => {
    if (field === "name") {
      setEditingField("Your Name");
      setEditingFieldValue(name);
    } else if (field === "email") {
      setEditingField("Email");
      setEditingFieldValue(email);
    } else if (field === "phone") {
      setEditingField("Phone");
      setEditingFieldValue(phone);
    } else if (field === "about") {
      setEditingField("About");
      setEditingFieldValue(about);
    }
    setIsEditing(true);
  };

  const handleSave = (field) => {
    if (field === "Your Name") {
      setName(editingfieldValue);
    } else if (field === "Email") {
      setEmail(editingfieldValue);
    } else if (field === "Phone") {
      setPhone(editingfieldValue);
    } else if (field === "About") {
      setAbout(editingfieldValue);
    }
    setIsEditing(false);
  };

  const [skills, setskills] = useState([
    "Javascript",
    "ReactJS",
    "NodeJS",
    "TypeScript",
    "Java",
    "Python",
    "C++",
    "HTML",
    "CSS",
    "ExpressJS",
    "Mongoose",
    "MongoDB",
  ]);

  const [experiences, setExperiences] = useState([
    {
      startYear: "2019",
      endYear: "2021",
      jobRole: "Frontend Developer",
      jobType: "Full-time",
      companyName: "TechCo",
    },
    {
      startYear: "2022",
      endYear: "2023",
      jobRole: "Backend Developer",
      jobType: "Contract",
      companyName: "CodeCorp",
    },
  ]);

  const handleEditExperience = (experience) => {
    setEditingExperience(experience);
    setIsEditingExperience(true);
  };

  const [educations, setEducations] = useState([
    {
      university: "IIIT HYDERABAD",
      degree: "Bachelor of Computer Science",
      year: "2015-2019",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi quam doloremque, ipsam nesciunt minima, ducimus nobis sunt alias iure et culpa blanditiis autem cupiditate laborum pariatur ratione rerum dolores!",
    },
  ]);

  return (
    <>
      <div className="flex h-screen bg-white">
        <div className="w-1/2 p-8">
          {/* Profile Image */}
          <div className="flex justify-between items-start mb-6">
            <div className="rounded-full h-32 w-32 bg-gray-300"></div>
            <button className="p-2 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem] mt-12">
              Upload Photo
            </button>
          </div>

          {/* Name, Email, Phone Number */}
          <div className="border-2 border-[#dfe6e9] bg-white p-8 pt-6 rounded-lg">
            <div className="flex justify-between items-end mb-[2.5rem]">
              <div className="flex-col items-center">
                <h3 className="text-xl mb-2 text-[#636e72]">Your Name</h3>
                <p className="text-[#2d3436] font-semibold text-2xl">{name}</p>
              </div>
              <button
                className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]"
                onClick={() => handleEditBio("name")}
              >
                Edit
              </button>
            </div>
            <div className="flex justify-between items-end mb-[2.5rem]">
              <div className="flex-col items-center">
                <h3 className="text-xl mb-2 text-[#636e72]">Email</h3>
                <p className="text-[#2d3436] font-semibold text-2xl">{email}</p>
              </div>
              <button
                className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]"
                onClick={() => handleEditBio("email")}
              >
                Edit
              </button>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                <p className="text-gray-600">{phone}</p>
              </div>
              <button
                className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]"
                onClick={() => handleEditBio("phone")}
              >
                Edit
              </button>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white p-6 rounded-lg border-2 border-[#dfe6e9] relative mb-6 mt-6">
            <h3 className="text-3xl font-semibold mb-2">
              About <span className="text-[#341f97]">Vishnu</span>{" "}
            </h3>
            <p className="text-gray-600 mt-[2rem] text-[18px] w-full">
              {" "}
              {about}{" "}
            </p>
            <button
              className="absolute right-4 top-5 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]"
              onClick={() => handleEditBio("about")}
            >
              Edit
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white p-4 border-2 border-[#dfe6e9] rounded-lg relative">
            <h3 className="text-3xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-600 p-2 m-1 rounded-lg"
                >
                  {skill}
                </div>
              ))}
              {/* ... Add more skills */}
            </div>
            <button
              className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]"
              onClick={() => setIsEditingSkills(true)}
            >
              Edit
            </button>
          </div>
        </div>

        {/* Professional Info */}
        <div className="w-1/2 p-8">
          <div className="bg-white border-2 border-[#dfe6e9] p-4 rounded-lg relative mb-14">
            <h3 className="text-2xl font-semibold mb-2">
              Professional Details
            </h3>
            <p className="text-gray-600">
              These are the professional details of the user.
            </p>
            <div className="absolute top-4 right-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 48 48"
                fill="#54a0ff"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 4 L30 17 L45 17 L33 29 L36 44 L24 35 L12 44 L15 29 L3 17 L18 17 Z"></path>
              </svg>
            </div>
            <div className="absolute top-10 right-[1.4rem] transform rotate-45 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="#341f97"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 4 L30 17 L45 17 L33 29 L36 44 L24 35 L12 44 L15 29 L3 17 L18 17 Z"></path>
              </svg>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white border-2 border-[#dfe6e9] p-4 rounded-lg relative mb-6">
            <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
            <ul className="text-gray-600">
              <li>Certified React Developer</li>
              <li>JavaScript Fundamentals</li>
              {/* ... Add more certifications */}
            </ul>
            <button className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
              Edit
            </button>
          </div>

          {/* Experience */}
          <div className="bg-white p-4 relative mb-6">
            <h3 className="text-2xl font-semibold mb-2 flex justify-between">
              Experience
              <button
                className="text-black bg-[#ecf0f1] py-1 px-4 rounded-[2rem] text-sm font-normal"
                onClick={() => setIsAddingExperience(true)}
              >
                Add Experience
              </button>
            </h3>
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="border-2 border-[#dfe6e9] rounded-lg p-2 px-4 mt-4 relative"
              >
                <p className="text-black font-[400] text-xl mb-[5px]">
                  {experience.endYear - experience.startYear} years (
                  {experience.startYear}-{experience.endYear}){" "}
                  <span className="ml-4">{experience.jobType}</span>
                </p>
                <p className="text-gray-600">
                  {experience.companyName}
                  <span className="ml-4">--{experience.jobRole}</span>
                </p>
                <button
                  className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-1 px-4 rounded-[2rem] text-sm"
                  onClick={() => handleEditExperience(experience)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-white p-4 relative mb-6">
            <h3 className="text-2xl font-semibold mb-2 flex justify-between">
              Education
              <button
                className="text-black bg-[#ecf0f1] py-1 px-4 rounded-[2rem] text-sm font-normal"
                onClick={()=>setIsAddingEducation(true)}
              >
                Add Education
              </button>
            </h3>
            {educations.map((education, index) => (
              <div
                key={index}
                className="border-2 border-[#dfe6e9] rounded-lg p-4 px-4 mt-6 relative"
              >
                <p className="text-[#341f97] font-[400] text-3xl mb-[10px]">
                  {education.university}
                </p>
                <div className="flex justify-between">
                <p className="text-black text-xl ">
                  {education.degree}{" "}
                  
                </p>
                <span className="text-black text-xl">{education.year}</span>{" "}
                </div>
                <p className="text-gray-600 mt-2">{education.description}</p>
                <button
                  className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-2 px-4 rounded-[2rem]"
                  // onClick={() => handleEditEducation(education)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[30rem] max-h-[80vh] overflow-auto">
            <h3 className="text-2xl font-semibold mb-2">Edit Details</h3>
            <h4 className="mt-4 text-xl mb-2">{editingfield}</h4>
            <textarea
              value={editingfieldValue}
              onChange={(e) => setEditingFieldValue(e.target.value)}
              className="border-2 border-gray-300 p-2 mb-8 rounded-lg w-full resize-none"
              rows={editingfield === "About" ? "8" : "1"}
            />
            <div className="flex justify-between">
              <button
                className="text-white bg-[#341f97] py-2 px-8 rounded-[2rem]"
                onClick={() => handleSave(editingfield)}
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem] ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isEditingSkills === true ? (
        <EditSkills
          setIsEditingSkills={setIsEditingSkills}
          skills={skills}
          setskills={setskills}
        />
      ) : null}
      {isAddingExperience === true ? (
        <AddExperience
          setIsAddingExperience={setIsAddingExperience}
          experiences={experiences}
          setExperiences={setExperiences}
        />
      ) : null}
      {isEditingExperience === true ? (
        <EditExperience
          setIsEditingExperience={setIsEditingExperience}
          experience={editingExperience}
          setExperiences={setExperiences}
          experiences={experiences}
        />
      ) : null}
      {isAddingEducation === true ? (
        <AddEducation 
          setIsAddingEducation={setIsAddingEducation}
          setEducations={setEducations}
          educations={educations}
        />
      ) : null}
    </>
  );
}
