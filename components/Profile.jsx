export default function Profile () {
    return (
        <>
          <div className="flex h-screen  bg-gradient-to-b from-blue-500 to-white">
            {/* Profile Info */}
            <div className="w-2/3 p-8 ">
                {/* Profile Image */}
                <div className="rounded-full h-32 w-32 bg-gray-300 mx-auto mb-6"></div>

                {/* Name, Email, Phone Number */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-600 mb-1">Email: johndoe@example.com</p>
                    <p className="text-gray-600 mb-1">Phone: +1 123-456-7890</p>
                </div>

                {/* About Me */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">About Me</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dapibus leo.
                    </p>
                </div>

                {/* Skills */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Skills</h3>
                    <ul className="text-gray-600">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        {/* ... Add more skills */}
                    </ul>
                </div>
            </div>

            {/* Professional Info */}
            <div className="w-1/3 p-8">
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">Professional Info</h3>
                    <p className="text-gray-600">
                        Frontend Developer at ABC Company
                    </p>
                </div>

                {/* Certifications */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="text-gray-600">
                        <li>Certified React Developer</li>
                        <li>JavaScript Fundamentals</li>
                        {/* ... Add more certifications */}
                    </ul>
                </div>

                {/* Experience */}
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-600">
                        Senior Frontend Developer at XYZ Solutions (2 years)
                    </p>
                </div>

                {/* Education */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-600">
                        Bachelor of Computer Science - University of ABC (2015)
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}