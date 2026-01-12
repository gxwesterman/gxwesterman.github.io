import g3chat from '@/assets/projects/g3-chat.png'
import cheli from '@/assets/projects/cheli.png';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  website: string;
  github: string;
  badges: string[];
  img: string;
}

export const projects: Project[] = [
  {
    title: 'G3 Chat',
    subtitle: 'AI Chatbot meant to mimic T3 Chat',
    description: `
      I completely reverse-engineered T3 Chat, front to back. T3 Chat is a chatbot made by Ping Labs that perports to be 2x faster than ChatGPT and 10x faster than DeepSeek. But it's closed source. I was able to replicate its speed and its frontend state and design and made it open source.
    `,
    date: 'March 2025',
    website: 'https://g3-chat.vercel.app',
    github: 'https://github.com/gxwesterman/g3.chat',
    badges: [
      'NextJS',
      'React',
      'InstantDB',
      'Vercel'
    ],
    img: g3chat,
  },
  {
    title: 'Cheli',
    subtitle: 'Minimalistic Music Quiz App',
    description: `
      Cute little music education app. Created as a joint solution to my desire to improve my sight-reading and to play with more advanced animations.
    `,
    date: 'April 2025',
    website: 'https://cheli.vercel.app',
    github: 'https://github.com/gxwesterman/cheli',
    badges: [
      'NextJS',
      'React',
      'Framer Motion',
      'Vercel'
    ],
    img: cheli,
  },
]