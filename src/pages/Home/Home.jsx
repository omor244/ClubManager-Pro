import Banner from '../../components/Banner/Banner'
import FeaturedClubs from '../../components/FeaturedClubs/FeaturedClubs'
import HowClubSphereWorks from '../../components/Home/HowClubSphereWorks'
import WhyJoinAClub from '../../components/Home/WhyJoinAClub'



const Home = () => {
  return (
    <div>
      <div className='mt-[-20px]'>
       <Banner />
      </div>
      <div>
        <FeaturedClubs />
        <HowClubSphereWorks />
        <WhyJoinAClub />
      </div>
    </div>
  )
}

export default Home
