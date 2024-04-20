"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";

function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);
  
  if (!mounted) {
    return;
  }

  return <NextUIProvider>{children}</NextUIProvider>;
}
export default Provider;
