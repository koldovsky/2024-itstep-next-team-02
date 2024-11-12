import { Prisma } from "@prisma/client";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  size,
  color,
  discountPercent,
  description,
}: {
  productId: number;
  size?: "S" | "M" | "L";
  color?: "red" | "blue" | "green";
  discountPercent?: number;
  description: string;
}) => {
  return {
    productId,
    price: randomNumber(100, 600),
    size,
    color,
    inStock: randomNumber(10, 100),
    discountPercent,
    description,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Test Admin",
        email: "user@gmail.com",
        password: hashSync("111111", 10),
        role: "USER",
      },
      {
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
        name: "Gaming Headset",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 2,
      },
      {
        name: "Mechanical Keyboard",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        categoryId: 2,
        rating: 10,
        reviews: 100,
      },
      {
        name: "Gaming Mouse",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 2,
      },
      {
        name: "Gaming Chair",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "VR Headset",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Gaming Console",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Controller",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Gaming Monitor",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 3,
      },
      {
        name: "Graphics Card",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
      {
        name: "Processor",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
      {
        name: "RAM",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
      {
        name: "Hard Drive",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 4,
      },
      {
        name: "Gaming Laptop",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 5,
      },
      {
        name: "Gaming PC",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 5,
      },
      {
        name: "Cooling System",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 5,
      },
      {
        name: "Power Supply Unit",
        imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
        rating: 10,
        reviews: 100,
        categoryId: 5,
      },
    ],
  });

  const gamepad1 = await prisma.product.create({
    data: {
      name: "Game Pad test1",
      imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  const gamepad2 = await prisma.product.create({
    data: {
      name: "Game Pad test2",
      imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  const gamepad3 = await prisma.product.create({
    data: {
      name: "Game Pad test3",
      imageUrl: "https://hotline.ua/img/tx/238/238399127_s265.jpg",
      rating: 10,
      reviews: 100,
      categoryId: 1,
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Game Pad test1 variations"
      generateProductItem({ productId: gamepad1.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad1.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad1.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test2 variations"
      generateProductItem({ productId: gamepad2.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad2.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad2.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test3 variations"
      generateProductItem({ productId: gamepad3.id, color: "red", size: "S", description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad3.id, color: "green", size: "L", discountPercent: 0.7, description: 'a;sdfioaogagd'}),
      generateProductItem({ productId: gamepad3.id, color: "blue", size: "M", discountPercent: 0.5, description: 'a;sdfioaogagd'}),

      // Game Pad test3"
      generateProductItem({ productId: 1, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 2, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 3, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 4, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 5, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 6, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 7, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 8, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 9, description: 'a;sdfioaogagd' }),
      generateProductItem({ productId: 10, description: 'a;sdfioaogagd' }),
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

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
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
