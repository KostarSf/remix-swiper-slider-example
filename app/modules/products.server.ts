import image1 from "~/assets/images/daniel-korpai-hbTKIbuMmBI-unsplash.jpg";
import image2 from "~/assets/images/grant-ritchie-n_wXNttWVGs-unsplash.jpg";
import image3 from "~/assets/images/kiran-ck-LSNJ-pltdu8-unsplash.jpg";
import image4 from "~/assets/images/olena-sergienko-ElfJDs4LAQk-unsplash.jpg";
import image5 from "~/assets/images/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg";
import image6 from "~/assets/images/varun-gaba-dcgB3CgidlU-unsplash.jpg";
import image7 from "~/assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import image8 from "~/assets/images/jeet-dhanoa-sR1BaDlRSKM-unsplash.jpg";
import image9 from "~/assets/images/mae-mu-GnWKTJlMYsQ-unsplash.jpg";
import image10 from "~/assets/images/pepi-stojanovski-tulxmkTXmRw-unsplash.jpg";
import image11 from "~/assets/images/rock-zhou--6cScQvixFY-unsplash.jpg";
import image12 from "~/assets/images/taras-chernus-eSIlQfibAo8-unsplash.jpg";
import image13 from "~/assets/images/tyrel-johnson-zI7O1I3UBPM-unsplash.jpg";
import image14 from "~/assets/images/wesley-tingey-sPBRRwT_fKA-unsplash.jpg";

import type { ProductCardInfo } from "./products.types";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

export function generateProductCards(count: number) {
  return Array.from(Array(count)).map((_, index) => generateProductCard(index));
}

function generateProductCard(id: number): ProductCardInfo {
  return {
    id,
    name: getRandomName(),
    price: getRandomPrice(),
    image: getRandomImage(),
  };
}

function getRandomName() {
  const number = Math.ceil(Math.random() * 10) * 10;
  return `ТОВАР NONAME ${number}`;
}

function getRandomPrice() {
  const price = Math.ceil(Math.random() * 100) * 100 + 1000;
  return `${price.toLocaleString("ru")} ₽`;
}

function getRandomImage() {
  const imageIndex = Math.floor(Math.random() * images.length);
  return images[imageIndex];
}
