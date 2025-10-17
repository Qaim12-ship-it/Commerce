import React from 'react'
import Heero from '../components/Heero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  return (
    <div>
      <Heero/>
      <LatestCollection/>
      <BestSeller/>
      <OutPolicy/>
 <NewsletterBox/>
    </div>
  )
}

export default Home
