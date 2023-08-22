import connectMongoDb from "@/libs/connect";
import UserModel from "@/models/user";
import UserEducationModel from "@/models/userEducation";
import { NextResponse } from "next/server";

// ADD EDUCATION
export async function POST(request) {
  const { user, university, degree, year, desc } = await request.json();
  await connectMongoDb();
  try {
    const userEducationDoc = await UserEducationModel.create({
      user,
      university,
      degree,
      year,
      desc,
    });
    const populatedDoc = await UserEducationModel.populate(userEducationDoc, {
      path: "user",
      select: "name email",
    });
    return NextResponse.json(userEducationDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}

// EDIT EDUCATION REQUEST
export async function PUT(request) {
  const { id, university, degree, year, desc } = await request.json();
  await connectMongoDb();

  try {
    const updatedEducationDoc = await UserEducationModel.findByIdAndUpdate(
      id,
      { university, degree, year, desc },
      { new: true }
    );
    return NextResponse.json(updatedEducationDoc);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}

// GET ALL EDUCATION INFO
export async function PATCH(request) {
  const { id } = await request.json();
  await connectMongoDb();
  try {
    const userEduDocInfo = await UserEducationModel.find({ user: id }).sort({
      createdAt: -1,
    });
    return NextResponse.json(userEduDocInfo);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 404 });
  }
}

// DELETE EDUCATION INFO
export async function DELETE(request){
  const {id} = await request.json();
  await connectMongoDb();
  try {
    await UserEducationModel.findByIdAndDelete(id);
    return NextResponse.json('delete successfull');
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error" }, { status: 404 });
  }
}
