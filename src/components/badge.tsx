import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm bg-secondary rounded-sm flex items-center py-1 px-2 text-foreground/70">
      {children}
    </div>
  )
}