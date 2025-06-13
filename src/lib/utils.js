import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import img1 from "../assets/at_fruit_slide1_h5 (1).webp";
import img2 from "../assets/at_fruit_slide2_h5.webp";
import img3 from "../assets/at_fruit_slide1_h5.webp";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const foodItems = [
  {
    id: 1,
    title: "Healthy Meal",
    subtitle: "Fresh - Organic Bowl Delight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed eros at nulla blandit porta sed nec nunc.",
    buttonText: "READ MORE",
    image: img1,
  },
  {
    id: 2,
    title: "Detox Smoothie",
    subtitle: "Green - Energy Boost Elixir",
    description:
      "Quisque vitae fermentum sem. Nulla facilisi. Praesent tincidunt, magna non feugiat dapibus, tellus justo blandit orci.",
    buttonText: "READ MORE",
    image: img2,
  },
  {
    id: 3,
    title: "Artisan Bread",
    subtitle: "Whole - Wheat Rustic Loaf",
    description:
      "Vestibulum euismod justo vel dignissim lacinia. Integer congue risus in bibendum consequat.",
    buttonText: "READ MORE",
    image: img3,
  },
];

export const navigation = [
  { name: "Home", pathName: "/" },
  { name: "Fridge", pathName: "/fridge" },
  { name: "Login", pathName: "/login" },
  { name: "register", pathName: "/signup" },
  { name: "Add food", pathName: "/add-food" },
  { name: "my items", pathName: "/my-items" },
];

export const getReadAbleDate = (isoDate) => {
  const converted = new Date(isoDate);

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  const formattedDate = converted.toLocaleDateString("en-GB", options);
  return formattedDate;
};
