import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const productWithItems = await prisma.product.findUnique({
    where: { id: parseInt(id) }, 
    include: {
      items: true, 
    },
  });

  if (!productWithItems) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(productWithItems.items);
}
