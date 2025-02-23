import React from "react";

interface TagProps {
  tag: string;
}   


export default function Tag({ tag }: TagProps) {
  return (
    <div className="font-sans subpixel-antialiased rounded-full bg-sky-800/50 text-sky-400 px-4 py-1">
        <p
        className="font-semibold text-xs leading-5"
        >{tag}</p>
    </div>
  );
}