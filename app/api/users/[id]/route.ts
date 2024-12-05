import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log("HHH",id)

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  console.log("OOO",user)

  return NextResponse.json(
    user,
  );
}