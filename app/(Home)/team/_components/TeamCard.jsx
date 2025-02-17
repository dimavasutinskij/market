import { Facebook, Star, Twitter } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'

const TeamCard = ({ member }) => {
  return (
    <div className='rounded-2xl overflow-hidden border shadow-md relative bg-[#F9F8F8] hover:bg-white'>
      <Image 
        src={member.imageUrl}
        alt={member.name}
        height={485}
        width={449}
        className='w-[449px] h-[485px] object-cover mx-auto'
      />
      <div className='p-6 mt-4 flex gap-4 items-center'>
          <div>
            <h4 className='heading-6 text-primary'>{member.name}</h4>
            <span className="text-[25px] font-['Yellowtail'] text-secondary block">{member.job}</span>
          </div>
          <div className='ml-auto flex gap-2 items-center'>
            <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
              <Facebook />
            </Link>
            <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
              <Twitter />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default TeamCard