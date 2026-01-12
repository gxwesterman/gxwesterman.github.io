import Badge from '@/components/badge';
import { GithubButton } from '@/components/github-button';
import { WebsiteButton } from '@/components/website-button';
import { projects } from "@/lib/projects";

function Resume() {
  return (
    <div className="h-full">
      <section className="w-full pt-5">
        <div className="w-full border-t border-foreground/10 pt-5"></div>
        <div className="flex flex-col space-y-6 mb-6">
          {projects.map((project) => (
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl tracking-tighter">
                  {project.title}
                  <span className="ml-4 text-foreground/50">{project.date}</span>
                </h3>
                <div className="flex items-center gap-2">
                  <GithubButton link={project.github} />
                  <WebsiteButton link={project.website} />
                </div>
              </div>
              <div className="flex gap-2">
                {project.badges.map((badge) => (
                  <Badge>{badge}</Badge>
                ))}
              </div>
              <h3 className="text-foreground/80 text-lg tracking-tighter">{project.subtitle}</h3>
              <span className="text-foreground/80 tracking-tighter">{project.description}</span>
              <div className="border border-border rounded-lg overflow-hidden mt-5">
                <img src={project.img} alt="g3-chat" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resume
