import connectMongoDb from "@/libs/connect";
import UserModel from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const { field, value } = await req.json();
  try {
    await connectMongoDb();
    await UserModel.findOneAndUpdate({},{[field]:value})
    return NextResponse.json({message:'updated successfully'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "not ok" }, { status: 404 });
  }
}
