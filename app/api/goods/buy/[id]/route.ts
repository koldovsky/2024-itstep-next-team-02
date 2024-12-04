import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
  
    const order = await prisma.order.create({
      data,
    });
  
    return NextResponse.json(order);
  }
  export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const good = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(
      good,
    );
  }
  