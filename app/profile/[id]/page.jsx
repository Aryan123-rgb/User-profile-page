"use client";

import Link from "next/link";
import { useState } from "react";
import Profile from "@/components/Profile";

export default function ProfilePage() {
  const [active, setActive] = useState('profile');
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-white w-1/6 h-full p-4 text-blue-400">
        <h2 className="text-3xl font-semibold mb-16 text-[#2d3436] ml-6 mt-5 border-4 border-[#dfe6e9] px-10 rounded-lg p-1 w-fit">
          Dashboard
        </h2>
        <ul>
          <li className="mb-8">
            <Link
              href=""
              className={`text-2xl font-normal mb-6 text-[#0c2461] ml-10 mt-5 border-[#0c2461] px-8 rounded-lg p-2 w-fit ${active === 'profile' ? 'border-[1.5px]' : ''} `}
              onClick={()=>setActive('profile')}
            >
              My Profile
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/profile/connections/123"
              className={`text-xl font-normal mb-6 text-[#0c2461] ml-6 mt-5 border-[#0c2461] px-8 rounded-lg p-2 w-fit ${active === 'connections' ? 'border-[1.5px]' : ''} `}
              onClick={()=>setActive('connections')}
            >
              My Connections
            </Link>
          </li>
        </ul>
        <div className="mt-[43rem]">
          <Link href="#" className="text-center text-[#0c2461] ml-8 text-[1.1rem]">
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 ">{/* Your main content goes here */}
      <Profile/>
      </div>
    </div>
  );
}
