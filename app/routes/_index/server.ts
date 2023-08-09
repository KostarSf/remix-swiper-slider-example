import { json } from "@remix-run/node";
import { generateProductCards } from "~/modules/products.server";

export const loader = () => {
  const productCards = generateProductCards(100);
  return json({ productCards });
};
