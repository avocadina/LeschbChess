import React from "react";
import StoreProvider from "../store/store-provider";
import ClientLayout from "~/entities/client-layout";

interface Props {
  children: React.ReactNode;
}

export default function ClientRootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <ClientLayout>{children}</ClientLayout>
    </StoreProvider>
  );
}
