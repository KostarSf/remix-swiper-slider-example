import type { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { LandingSlider, sliderStyles } from "~/components/LandingSlider";
import { ProductCard } from "~/components/ProductCard";
import type { ProductCardInfo } from "~/modules/products.types";
import type { loader } from "./server";

export const links: LinksFunction = () => [
  /** Стили слайдера обязательно нужно вставить в роут, где он находится */
  { rel: "stylesheet", href: sliderStyles },
];

export { loader } from "./server";

export default function Index() {
  const { productCards } = useLoaderData<typeof loader>();

  const content = useMemo(
    () => createSliderContent(productCards),
    [productCards]
  );

  return (
    <div>
      <LandingSlider content={content} />
    </div>
  );
}

function createSliderContent(productCards: ProductCardInfo[]) {
  return productCards.map((card) => <ProductCard data={card} key={card.id} />);
}
