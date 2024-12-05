import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { hashSync } from "bcrypt";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({
    users,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  data.password = hashSync(data.password, 10);
  // console.log(data)
  console.log('Name:', data.fullName);
  console.log('Email:', data.email);
  console.log('Password:', data.password);
  console.log('token:', data.token);

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
