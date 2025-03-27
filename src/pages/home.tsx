import { GithubButton} from '@/components/github-button'
import { LinkedinButton} from '@/components/linkedin-button'
import { EmailButton } from '@/components/email-button'

function Home() {

  return (
    <div>
      <div className="mt-10 text-foreground/80">
        <p>I currently work at <a className="underline text-foreground/90 hover:text-foreground transition-colors" href="https://www.nagios.com/" target="_blank" rel="noreferrer">Nagios</a> as a full-stack software developer.</p>
        <br/>
        <p>I graduated from the U of M in 2023 with a BS in Computer Science.</p>
        <br/>
        <p>I'm dedicated to learning as much as I can wherever I go.</p>
        <br/>
        <p>I'm a classically trained cellist.</p>
      </div>
      <hr className="my-4 border-t border-foreground/20"></hr>
      <div className="flex items-center gap-2">
        <GithubButton link={"https://github.com/gxwesterman"} />
        <LinkedinButton />
        <EmailButton />
      </div>
    </div>
  )
}

export default Home
