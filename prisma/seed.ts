import { Prisma } from "@prisma/client";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        token: "11111",
        fullName: "Test Admin",
        email: "user@gmail.com",
        password: hashSync("111111", 10),
        role: "USER",
      },
      {
        token: "11111",
        fullName: "Test User",
        email: "admin@@gmail.com",
        password: hashSync("111111", 10),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        name: "Category1",
      },
      {
        name: "Category2",
      },
      {
        name: "Category3",
      },
      {
        name: "Category4",
      },
      {
        name: "Category5",
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Bag",
        imageUrl: "/images/goods/bag.png",
        rating: 10,
        reviews: 100,
        price: 50,
        inStock: 30,
        description: "Stylish and spacious bag for everyday use.",
        discountPercent: 10,
        categoryId: 2,
      },
      {
        name: "Chair",
        imageUrl: "/images/goods/chair.png",
        rating: 10,
        reviews: 100,
        price: 120,
        inStock: 20,
        description: "Comfortable and ergonomic chair for your home or office.",
        discountPercent: 15,
        categoryId: 2,
      },
      {
        name: "Coat",
        imageUrl: "/images/goods/coat.png",
        rating: 10,
        reviews: 100,
        price: 200,
        inStock: 10,
        description: "Warm and stylish coat, perfect for winter.",
        discountPercent: 20,
        categoryId: 2,
      },
      {
        name: "Cooler",
        imageUrl: "/images/goods/cooler.png",
        rating: 10,
        reviews: 100,
        price: 80,
        inStock: 25,
        description: "High-performance cooler for your PC.",
        discountPercent: 5,
        categoryId: 3,
      },
      {
        name: "Gamepad",
        imageUrl: "/images/goods/gamepad.png",
        rating: 10,
        reviews: 100,
        price: 60,
        inStock: 40,
        description: "Ergonomic gamepad for a seamless gaming experience.",
        discountPercent: 12,
        categoryId: 3,
      },
      {
        name: "Keyboard",
        imageUrl: "/images/goods/keyboard.png",
        rating: 10,
        reviews: 100,
        price: 90,
        inStock: 50,
        description: "Mechanical keyboard with RGB backlighting.",
        discountPercent: 10,
        categoryId: 3,
      },
      {
        name: "Main Gamepad",
        imageUrl: "/images/goods/main-gamepad.png",
        rating: 10,
        reviews: 100,
        price: 70,
        inStock: 35,
        description: "Premium quality gamepad with advanced features.",
        discountPercent: 8,
        categoryId: 3,
      },
      {
        name: "Monitor",
        imageUrl: "/images/goods/monitor.png",
        rating: 10,
        reviews: 100,
        price: 300,
        inStock: 15,
        description: "High-resolution monitor with stunning visuals.",
        discountPercent: 18,
        categoryId: 4,
      },
      {
        name: "Shell",
        imageUrl: "/images/goods/shell.png",
        rating: 10,
        reviews: 100,
        price: 40,
        inStock: 50,
        description: "Protective shell case for your gaming console.",
        discountPercent: 5,
        categoryId: 4,
      },
    ],
  });
  

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
