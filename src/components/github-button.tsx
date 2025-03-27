import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export function GithubButton({ link }: { link: string }) {

  return (
    <a href={link} target="_blank">
      <Button variant="outline" size="icon" className="hover:cursor-pointer h-8 w-8">
        <Github/>
      </Button>
    </a>
  )
}
