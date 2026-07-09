function Resume() {

  return (
    <div className="h-full">
      <div className="w-full border-t border-foreground/10 mt-5"></div>
      <div className="mt-5 w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
        <div className="text-foreground/70 font-bold lg:min-w-20 lg:max-w-20 pb-2">May 2025 - Present</div>
        <div className="space-y-2">
          <div className="font-bold">Full Stack Software Developer - Nagios</div>
          <div className="ml-3 text-foreground/80">
            <ul className="list-disc space-y-2">
              <li>
                Moved into a technical lead role. As such, Continued my role as a tech-lead paired with product maintainers to overhaul legacy apps while helping on other projects as needed.
              </li>
              <li>
                Co-led the rewrite of Nagios' network analysis product, conveniently named Nagios Network Analyzer.
                Brand new <b> Laravel + React </b> app with <b> MySQL and InfluxDB</b>. Implemented auth, RBAC, CRUD, dashboarding, broadcasting, etc.
              </li>
              <li>
                Co-led the rewrite of Nagios' orchestrator app, Nagios Fusion.
                Another brand new <b> Laravel + React </b> app with <b> MySQL and InfluxDB</b>. Did auth, comprehensive RBAC (Discord-inspired), licensing, CRUD, dashboarding, notifications, broadcasting. Lead designer.
              </li>
              <li>
                Implemented a <b>Grafana</b>-like dashboarding system with additional opinionated tools geared specifically to the Nagios' suite of products.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
        <div className="text-foreground/70 font-bold lg:min-w-20 lg:max-w-20 pb-2">August 2023 - May 2025</div>
        <div className="space-y-2">
          <div className="font-bold">Junior Developer - Nagios</div>
          <div className="ml-3 text-foreground/80">
            <ul className="list-disc space-y-2">
              <li>Led and was the primary contributor to the frontend overhaul of <b>Nagios'</b> second largest product, rewriting a PHP codebase to a <b>Vite + React app</b> leveraging <b>TailwindCSS, shadcn, React Router</b>, etc. Essentially wrote Kibana from scratch in React.</li>
              <li>Co-led the complete overhaul of the same product, converting an <b>Elasticsearch</b> backend to <b>Opensearch</b>, and redoing the UI and UX.</li>
              <li>Developed numerous features and resolved even more bugs, consistently working with frontend and backend code.</li>
              <li>Implemented page exporting by bundling a script with <b>Puppeteer</b> and Node using <b>esbuild</b> and <b>Node SEA</b>.</li>
              <li>Implemented user-preference tracking.</li>
              <li>Got realy good at frontend work, including design. Learned how to use Figma. Consequently responsible for many design decisions.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
        <div className="text-foreground/70 font-bold lg:min-w-20 lg:max-w-20 pb-2">September 2020 - May 2023</div>
        <div className="space-y-2">
          <div className="font-bold">Bachelor of Science in Computer Science - U of M</div>
          <div className="ml-3 text-foreground/80">
            <ul className="list-disc space-y-2">
              <li>Implemented K-means clustering using Cuda, OpenMP, and MPI in C</li>
              <li>Created many browser-based games using typescript and gfx libraries</li>
              <li>Worked within a team to develop an automated drone simulation in C++ and JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
