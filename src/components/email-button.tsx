import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"

export function EmailButton() {

  return (
    <a href="mailto:gxweste@gmail.com" target="_blank">
      <Button variant="ghost" size="icon" className="hover:cursor-pointer h-8 w-8">
        <Mail />
      </Button>
    </a>
  )
}
