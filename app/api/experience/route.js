import connectMongoDb from "@/libs/connect";
import UserModel from "@/models/user";
import UserExperienceModel from "@/models/userExperience";
import { NextResponse } from "next/server";

// ADD EXPERIENCE
export async function POST(request) {
  const { user, startYear, endYear, jobRole, jobType,companyName } = await request.json();
  await connectMongoDb();
  try {
    const userExperienceDoc = await UserExperienceModel.create({
      user,
      startYear,
      endYear,
      jobRole,
      jobType,
      companyName
    });
    const populatedDoc = await UserExperienceModel.populate(userExperienceDoc, {
      path: "user",
      select: "name email",
    });
    return NextResponse.json(userExperienceDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}

// EDIT EXPERIENCE REQUEST
export async function PUT(request) {
  const { id, startYear, endYear, jobRole, jobType,companyName } = await request.json();
  await connectMongoDb();

  try {
    const updatedExperienceDoc = await UserExperienceModel.findByIdAndUpdate(
      id,
      { startYear, endYear, jobRole, jobType,companyName },
      { new: true }
    );
    return NextResponse.json(updatedExperienceDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}

// GET ALL EXPERIENCE INFO
export async function PATCH(request) {
  const { id } = await request.json();
  await connectMongoDb();
  try {
    const userExpDocInfo = await UserExperienceModel.find({ user: id }).sort({
      createdAt: -1,
    });
    return NextResponse.json(userExpDocInfo);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 404 });
  }
}

// DELETE EXPERIENCE INFO
export async function DELETE(request){
  const {id} = await request.json();
  await connectMongoDb();
  try {
    await UserExperienceModel.findByIdAndDelete(id);
    return NextResponse.json('delete successfull');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 404 });
  }
}
