'use client';

interface CollectionLinkProps {
  href: string;
  platform: string;
  style: any;
}

export default function CollectionLink({ href, platform, style }: CollectionLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={style}
      className="hover:opacity-70 transition-opacity"
    >
      {platform}
    </a>
  );
} 