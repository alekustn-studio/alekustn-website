export interface CollectionData {
  id: number;
  title: string;
  description: string;
  images: string[];  // добавляем тип для массива изображений
  year: string;
  platform: string;
  link: string;
  tags: string[];
  iterations: number;
  technology: string;
} 