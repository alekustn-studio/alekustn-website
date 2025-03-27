import { collection1 } from '../../../data/collections/1';
import { collection2 } from '../../../data/collections/2';
import { collection3 } from '../../../data/collections/3';
import { collection4 } from '../../../data/collections/4';
import { collection5 } from '../../../data/collections/5';
import { collection6 } from '../../../data/collections/6';
import { collection7 } from '../../../data/collections/7';
import { collection8 } from '../../../data/collections/8';
import { collection9 } from '../../../data/collections/9';
import { collection10 } from '../../../data/collections/10';
import { collection11 } from '../../../data/collections/11';
import { collection12 } from '../../../data/collections/12';
import { collection13 } from '../../../data/collections/13';
import { CollectionData } from '../../../types/collection';
import CollectionTemplate from '../../../templates/CollectionTemplate';

interface Props {
  params: {
    id: string;
  };
}

export default function Collection({ params }: Props) {
  const collectionId = parseInt(params.id);
  const collections: { [key: number]: CollectionData } = {
    1: collection1,
    2: collection2,
    3: collection3,
    4: collection4,
    5: collection5,
    6: collection6,
    7: collection7,
    8: collection8,
    9: collection9,
    10: collection10,
    11: collection11,
    12: collection12,
    13: collection13
  };

  return <CollectionTemplate data={collections[collectionId] || collection1} />;
} 