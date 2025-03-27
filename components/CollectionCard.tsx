"use client";

import { Collection } from '../data/collections'
import Link from 'next/link'

interface Props {
  collection: Collection
}

export default function CollectionCard({ collection }: Props) {
  return (
    <Link 
      href={`/collection/${collection.id}`}
      className="block aspect-square bg-neutral-900 hover:bg-neutral-800 transition-colors"
    >
      <div className="w-full h-full p-8">
      </div>
    </Link>
  );
} 