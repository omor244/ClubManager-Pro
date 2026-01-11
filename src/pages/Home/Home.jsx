import Banner from '../../components/Banner/Banner'
import FeaturedClubs from '../../components/FeaturedClubs/FeaturedClubs'
import HowClubSphereWorks from '../../components/Home/HowClubSphereWorks'
import WhyJoinAClub from '../../components/Home/WhyJoinAClub'
import ClubCategories from './ClubCategories'
import FAQ from './FAQ'
import StatsCounter from './StatsCounter'
import UpcomingEvents from './UpcomingEvents'



const Home = () => {
  return (
    <div>
      <div className='pt-10'>
       <Banner />
      </div>
      <div className='max-w-7xl mx-auto'>
        <FeaturedClubs />
        <HowClubSphereWorks />
        <WhyJoinAClub />
        <ClubCategories></ClubCategories>
        <StatsCounter></StatsCounter>
        <UpcomingEvents></UpcomingEvents>
        <FAQ></FAQ>
      </div>
    </div>
  )
}

export default Home
