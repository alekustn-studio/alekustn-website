export interface Collection {
  id: string;
  name: string;
  description: string;
  link: string;
  platform: string;
}

export const collections: Collection[] = [
  {
    id: "collection-1",
    name: "Космические пейзажи",
    description: "Коллекция цифровых картин космических пейзажей",
    link: "https://foundation.app/",
    platform: "Foundation"
  },
  {
    id: "collection-2",
    name: "Абстрактные формы",
    description: "Серия абстрактных цифровых скульптур",
    link: "https://superrare.com/",
    platform: "SuperRare"
  }
] as const; 