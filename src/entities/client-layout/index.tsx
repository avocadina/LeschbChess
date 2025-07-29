"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return <>{children}</>;
}
