import g3chat from '@/assets/projects/g3-chat.png'
import Badge from '@/components/badge';
import { GithubButton } from '@/components/github-button';
import { WebsiteButton } from '@/components/website-button';

function Resume() {

  return (
    <div className="h-full">
      <section className="w-full pt-5">
        <div className="w-full border-t border-foreground/10 pt-5"></div>
        <div className="flex flex-col space-x-6">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl tracking-tighter">
                G3 Chat
                <span className="ml-4 text-foreground/50">March 2025</span>
              </h3>
              <div className="flex items-center gap-2">
                <GithubButton link={"https://github.com/gxwesterman/g3.chat"} />
                <WebsiteButton link={"https://g3-chat.vercel.app"} />
              </div>
            </div>
            <div className="flex gap-2">
              <Badge>NextJS</Badge>
              <Badge>React</Badge>
              <Badge>InstantDB</Badge>
              <Badge>Vercel</Badge>
            </div>
            <h3 className="text-foreground/80 text-lg tracking-tighter">AI Chatbot meant to mimic T3 Chat</h3>
            <span className="text-foreground/80 tracking-tighter">
              I completely reverse-engineered T3 Chat, front to back.
              T3 Chat is a chatbot made by Ping Labs that perports to be 2x faster than ChatGPT and 10x faster than DeepSeek.
              But it's closed source.
              I was able to replicate its speed and its frontend state and design and made it open source.
            </span>
            <div className="border border-border rounded-lg overflow-hidden mt-5">
              <img src={g3chat} alt="g3-chat" />
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Resume
