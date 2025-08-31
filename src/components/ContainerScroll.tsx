"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
export const ContainerScroll = ({
  titleComponent,
  children
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
      <div className="py-10 md:py-40 w-full relative">
        <Header titleComponent={titleComponent} />
        <Card>
          {children}
        </Card>
      </div>
    </div>;
};
export const Header = ({
  titleComponent
}: any) => {
  return;
};
export const Card = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border border-white/20 p-2 md:p-6 bg-white/10 backdrop-blur-xl rounded-[30px] shadow-2xl">
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm md:rounded-2xl md:p-4 border border-white/10">
        {children}
      </div>
    </div>;
};