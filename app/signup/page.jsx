"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [password,setPassword] = useState('');
  const [certifications, setCertifications] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [skills, setSkills] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [suggestedSkills, setSuggestedSkills] = useState([
    "JavaScript",
    "ReactJS",
    "NodeJs",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "TypeScript",
    "ExpressJS",
    "MongoDB",
    "NextJS",
    "Go",
    "C++",
    "Docker",
    "Kubernetes",
    "Firebase",
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !about || !certifications) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
          about,
          certifications,
          skills : selectedSkills
        }),
        cache:'no-cache'
      });
      if(response.ok){
        const data = await response.json();
        console.log(data);
        router.push(`/profile/${data?._id}`)
      }
      else{
        console.log('Email Already exists')
        alert('Email Already exists');
        return;
      }
    } catch (error) {
      console.log(error);
      alert('Internal Server error.Try again after some time');
    }
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={about}
              onChange={(e) => setAbout(e.target.value)}
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
              onChange={(e) => setSkills(e.target.value)}
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
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
