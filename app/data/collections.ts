export interface Collection {
  id: string;
  name: string;
  image: string;
  description: string;
  platform: string;
  link: string;
}

export const collections: Collection[] = [
  {
    id: "collection-1",
    name: "Космические пейзажи",
    image: "/images/col1.jpg",
    description: "Коллекция цифровых картин космических пейзажей",
    platform: "Foundation",
    link: "https://foundation.app/"
  },
  {
    id: "collection-2",
    name: "Абстрактные формы",
    image: "/images/col2.jpg",
    description: "Серия абстрактных цифровых скульптур",
    platform: "SuperRare",
    link: "https://superrare.com/"
  }
]; 