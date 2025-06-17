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
      "A nutrient-rich meal packed with fresh, organic vegetables, quinoa, and grilled chicken. Perfect for a balanced diet and those seeking clean, wholesome nutrition.",
    buttonText: "SEE MORE",
    image: img1,
  },
  {
    id: 2,
    title: "Detox Smoothie",
    subtitle: "Green - Energy Boost Elixir",
    description:
      "A refreshing green smoothie made with kale, spinach, green apple, and ginger. Designed to detox your system and provide a natural energy lift throughout the day.",
    buttonText: "SEE MORE",
    image: img2,
  },
  {
    id: 3,
    title: "Artisan Bread",
    subtitle: "Whole - Wheat Rustic Loaf",
    description:
      "Handcrafted whole wheat bread made with natural sourdough starter. Baked to golden perfection, offering a hearty texture and rich, earthy flavor ideal for any meal.",
    buttonText: "SEE MORE",
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

export const blurVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};
