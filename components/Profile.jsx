export default function Profile() {
  const DoubleStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 4 L30 17 L45 17 L33 29 L36 44 L24 35 L12 44 L15 29 L3 17 L18 17 Z"></path>
      {/* <path d="M24 9 L27 0 L21 0 Z" fill="currentColor" /> */}
    </svg>
  );
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
                <p className="text-[#2d3436] font-semibold text-2xl">
                  Vishnu Swaroop
                </p>
              </div>
              <button className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-end mb-[2.5rem]">
              <div className="flex-col items-center">
                <h3 className="text-xl mb-2 text-[#636e72]">Email</h3>
                <p className="text-[#2d3436] font-semibold text-2xl">
                  vishnu@oruphones.com
                </p>
              </div>
              <button className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                <p className="text-gray-600">+91 8955225575</p>
              </div>
              <button className="text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ipsa dolore maxime quae unde eos, molestias quisquam
              quasi minima tempore fugit, autem fugiat, quidem repellendus
              explicabo vitae doloribus quas expedita?
            </p>
            <button className="absolute right-4 top-5 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
              Edit
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white p-4 border-2 border-[#dfe6e9] rounded-lg relative">
            <h3 className="text-3xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap">
              <div className="bg-gray-100 text-gray-600 p-2 m-1 rounded-lg">
                JavaScript
              </div>
              <div className="bg-gray-100 text-gray-600 p-2 m-1 rounded-lg">
                React
              </div>
              <div className="bg-gray-100 text-gray-600 p-2 m-1 rounded-lg">
                Node.js
              </div>
              <div className="bg-gray-100 text-gray-600 p-2 m-1 rounded-lg">
                Typescript
              </div>
              {/* ... Add more skills */}
            </div>
            <button className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
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
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <div className="border-2 border-[#dfe6e9] rounded-lg p-2 px-4 mt-4">
              <p className="text-black font-[400] text-xl mb-[5px]">7 years  (2014-2021) <span className="ml-80">Full time</span>
              </p>
              <p className="text-gray-600 ">Flipkart <span className="ml-[23rem]">--Full Stack Developer</span></p>
            </div>
            <button className="absolute right-4 top-4 text-black bg-[#ecf0f1] py-2 px-8 rounded-[2rem]">
              Edit
            </button>
          </div>

          {/* Education */}
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">
              Bachelor of Computer Science - University of ABC (2015)
            </p>
            <button className="absolute right-4 top-4 text-blue-500 hover:text-blue-600">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
