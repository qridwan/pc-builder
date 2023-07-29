import fs from "fs";
import path from "path";

export const getProductsJson = async () => {
  const filePath = await path.join(process.cwd(), "public", "products.json");

  // Read the contents of the products.json file
  const fileContent = await fs.readFileSync(filePath, "utf-8");

  // Parse the JSON data
  const productsData = fileContent ? await JSON.parse(fileContent) : [];

  return productsData;
};
