import connectMongoDb from "@/libs/connect";
import UserModel from "@/models/user";
import { NextResponse } from "next/server";

// LOGIN REQUEST
export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDb();
  try {
    const userDoc = await UserModel.findOne({ email, password });
    if(!userDoc){
      return NextResponse.json({message:'not found'},{status:404})
    }
    return NextResponse.json(userDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}

// SIGNUP REQUEST
export async function PUT(request) {
  const { name, phone, email, password, about, certifications, skills } =
    await request.json();

  await connectMongoDb();

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return NextResponse.json(
      { message: "email already exists" },
      { status: 404 }
    );
  }

  try {
    const userDoc = await UserModel.create({
      name,
      email,
      password,
      phone,
      about,
      certifications,
      skills,
    });
    return NextResponse.json(userDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}
