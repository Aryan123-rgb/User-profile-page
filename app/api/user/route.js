import connectMongoDb from "@/libs/connect";
import { NextResponse } from "next/server";


// LOGIN REQUEST
export async function POST(request) {
  const { email,password } = await request.json();
  await connectMongoDb();
  return NextResponse.json({ email,password });
}

//SIGNUP REQUEST
export async function PUT(request){
  
}
