interface IProduct {
  name: string;
  image: string; // URL of the PNG image
  category:
    | "CPU"
    | "Motherboard"
    | "RAM"
    | "GPU"
    | "Power Supply Unit"
    | "Storage Device"
    | "Monitor";
  price: number;
  status: "In Stock" | "Out of stock";
  average_rating: number; // Rating between 0 to 5
  description: string;
  features: string[];
  reviews: { message: string; rating: number }[];
  color: string; // Hex color code depending on the category
}
