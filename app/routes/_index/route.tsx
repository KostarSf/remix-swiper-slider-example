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
  const content = useSliderContent(productCards);

  return <LandingSlider content={content} />;
}

/**
 * Мемоизирует список карточек для слайдера, чтобы они не пересоздавались при
 * каждом ререндере. По идее не должно повлиять на интерактивность карточек.
 */
function useSliderContent(productCards: ProductCardInfo[]) {
  return useMemo(
    () => productCards.map((card) => <ProductCard data={card} key={card.id} />),
    [productCards]
  );
}
