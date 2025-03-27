import g3chat from '@/assets/projects/g3-chat.png'

function Resume() {

  console.log(g3chat);
  return (
    <div className="h-full">
      <div className="mt-10 w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
       <img src={g3chat} alt="g3-chat" />
      </div>
    </div>
  )
}

export default Resume
