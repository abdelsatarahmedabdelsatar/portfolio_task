"use client"

import { propsTitleType } from "@/types/types";
import { twMerge } from "tailwind-merge";

twMerge


export default function AnimatedTitle({ title, direction }: propsTitleType) {

    return (
        <>
            <h1 className={twMerge("text-opacity-10 absolute scrolled-x-title font-semibold text-stone-700 scroll-title", direction == "ltr" ? "animate-rightAnimation" : "animate-leftAnimation")}>{title}</h1>
        </>
    );
}
