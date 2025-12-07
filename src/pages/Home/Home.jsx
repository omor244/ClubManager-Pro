import Banner from '../../components/Banner/Banner'
import FeaturedClubs from '../../components/FeaturedClubs/FeaturedClubs'
import HowClubSphereWorks from '../../components/Home/HowClubSphereWorks'
import WhyJoinAClub from '../../components/Home/WhyJoinAClub'
import Heading from '../../components/Shared/Heading'


const Home = () => {
  return (
    <div>
      <div className='mt-[-20px]'>
       <Banner></Banner>
      </div>
      <div>
        <FeaturedClubs></FeaturedClubs>
        
        
        <HowClubSphereWorks></HowClubSphereWorks>

        <WhyJoinAClub></WhyJoinAClub>
      </div>
    
    </div>
  )
}

export default Home
