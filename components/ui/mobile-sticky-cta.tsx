"use client";

import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  const whatsappHref = "https://wa.me/9391682898";

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 block rounded-full bg-brand-ink p-2 shadow-soft sm:hidden">
      <div className="flex items-center gap-2">
        <Button className="flex-1" href={whatsappHref}>
          <span className="inline-flex items-center gap-2">
            <MessageCircleMore className="h-4 w-4" />
            Get in Touch
          </span>
        </Button>
      </div>
    </div>
  );
}
