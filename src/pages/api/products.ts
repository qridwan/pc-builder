// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getProductsJson } from "@/utils/getProductsJson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | { error: string }>
) {
  try {
    // Get the products data
    const productsData = await getProductsJson();

    // Check if there are query parameters for title and category
    const { title, category } = req.query;
    console.log("title: ", title);

    if (title && typeof title === "string") {
      // Search for products with a matching title
      const filteredProducts = productsData.filter((product: IProduct) =>
        product.name.toLowerCase().includes(title.toLowerCase())
      );
      return res.status(200).json(filteredProducts);
    }

    if (category && typeof category === "string") {
      // Search for products with a matching category
      const filteredProducts = productsData.filter(
        (product: IProduct) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
      return res.status(200).json(filteredProducts);
    }

    // If there are no query parameters, return all products
    res.status(200).json(productsData);
  } catch (error) {
    // If there's an error, return an error response
    res.status(500).json({ error: "Failed to fetch products data" });
  }
}
