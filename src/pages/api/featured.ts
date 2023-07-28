import type { NextApiRequest, NextApiResponse } from "next";
import { getProductsJson } from "@/utils/getProductsJson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | { error: string }>
) {
  try {
    // Get the products data
    const productsData = await getProductsJson();

    // Shuffle the products data
    const shuffledData = shuffleProductArray(productsData);

    // Scale the random number to be between 1 and 20
    const randomNumber = Math.random();
    const min = 1;
    const max = 20;
    const scaledNumber = Math.floor(randomNumber * (max - min + 1)) + min;

    // Return the data as the response
    res.status(200).json(shuffledData.slice(scaledNumber, scaledNumber + 6));
  } catch (error) {
    // If there's an error, return an error response
    res.status(500).json({ error: "Failed to fetch freatured products data" });
  }
}

function shuffleProductArray(array: IProduct[]): IProduct[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
