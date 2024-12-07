import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  customer1,
  customer2,
} from "../assets/images";

import {
  shieldTick,
  support,
  truckFast,
  facebook,
  twitter,
  instagram,
} from "../assets/icons";

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

//================================================

export interface IService {
  imgURL: string;
  label: string;
  subtext: string;
}

export const services: IService[] = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

//================================================

export interface IReview {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}
export const reviews: IReview[] = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

//================================================

export interface IFooterLink {
  title: string;
  links: { name: string; link: string }[];
}

export const footerLinks: IFooterLink[] = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "airakaz.fr", link: "https://www.airakaz.fr" },
      { name: "+xxxxxxx", link: "tel:+105" },
    ],
  },
];

export interface ISocialMedia {
  src: string;
  alt: string;
}

export const socialMedia: ISocialMedia[] = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
