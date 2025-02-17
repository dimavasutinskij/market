import Banner from "@/components/Banner";
import TeamCard from "./_components/TeamCard";


const team = [
  {
    id: 0,
    name: "Giovani Bacardo",
    job: "Farmer",
    imageUrl: "/doctor-farmer.png",
  },
  {
    id: 1,
    name: "Scott Lawrence",
    job: "Designer",
    imageUrl: "/designer-farmer.png",
  },
  {
    id: 2,
    name: "John Loreno",
    job: "Nutritionist",
    imageUrl: "/nutritionist.png",
  },
]

export default function OurTeam() {

  return (
    <main className="overflow-hidden">
      <Banner bgUrl="/team-bg.jpg" title="Our Team" />
      <section className="x-paddings-2 y-paddings">
        <span className="subtitle text-secondary block text-center">Team</span>
        <h2 className='heading-3 !leading-[45px] text-primary text-center'>
        Our Organic Experts
        </h2>
        <p className='paragraph mt-6 text-body-text max-w-[700px] text-center mx-auto'>
          With their deep knowledge and dedication to sustainability, they are the driving force behind our commitment to providing you with the highest quality organic products. Meet our team members:
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          {team.map((member) => (
            <TeamCard member={member} />
          ))}
        </div>
      </section>
    </main>
  )
}