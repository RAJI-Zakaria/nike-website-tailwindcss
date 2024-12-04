import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/images";

//================================================

export interface INavLink {
  href: string;
  label: string;
}
export const navLinks: INavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

//================================================

export interface IStatistic {
  value: string;
  label: string;
}

export const statistics: IStatistic[] = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

//================================================

export interface IShoe {
  thumbnail: string;
  bigShoe: string;
}

export const shoes: IShoe[] = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

//================================================

export interface IProduct {
  imgURL: string;
  name: string;
  price: string;
}

export const products: IProduct[] = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];
