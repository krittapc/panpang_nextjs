import connectMongoDB from "@/libs/mongodb";
import Expansion from "@/models/expansion";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    internetNO,
    province,
    latlongCust,
    latlongSP,
    custName,
    channel,
    amount,
    tm,
    custZone,
    problem,
    dealer,
    contact,
  } = await request.json();
  await connectMongoDB();
  await Expansion.create({
    internetNO,
    province,
    latlongCust,
    latlongSP,
    custName,
    channel,
    amount,
    tm,
    custZone,
    problem,
    dealer,
    contact,
  });   
  return NextResponse.json({ message: "Expansion Created" }, { status: 201 });
}
