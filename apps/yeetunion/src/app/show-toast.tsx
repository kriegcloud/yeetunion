"use client";

import { Button } from "@ye/ui/primitives/button";
import { useToast } from "@ye/ui/primitives/toast";

export const ShowToast = () => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Hello, World!",
          description: "This is a toast message.",
        });
      }}
    >
      Show Toast
    </Button>
  );
};
