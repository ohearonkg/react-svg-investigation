import React from "react";

interface SpriteLoaderProps {
  spriteId: string;
}

export function SpriteLoader({ spriteId }: SpriteLoaderProps) {
  return (
    <svg>
      <use href={`/sample-sprite.svg#${spriteId}`} />
    </svg>
  );
}
