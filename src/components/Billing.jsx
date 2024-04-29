import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'
import { GiftCard } from './NetflixCard'

import netflix from '../assets/images/Frame 9.png'
import spotify from '../assets/images/logospot.png'

import { tutorial } from '../constants'

const Billing = () => {
  return (
    <section id="howItWorks" className={`${layout.sectionReverse} items-start md:gap-20`}>
      <div className={`w-full ${layout.sectionImgReverse}`}>
        <div className="flex flex-col  gap-4">
          <GiftCard img={netflix} title="Netflix" />
          <div className="hidden md:block">
            <GiftCard img={spotify} title="Spotify" />
          </div>
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`flex-1 flex justify-center md:items-start flex-col w-full`}>
        <h2 className={`${styles.heading2}`}>Compra rápida <br className="hidden md:block" />e fácil.</h2>
        <div className="flex flex-col items-center">
        {tutorial.map((item) => (
          <div key={item.id} className="mt-5 feature-card items-center p-6 rounded-[20px]">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{item.title}</h4>
            <p className={`${styles.paragraph} w-full md:max-w-[470px] mt-5 font-poppins text-dimWhite text-[16px] leading-[24px] mb-1`}>{item.content}</p> 
          </div>
        ))}
        
        </div>

      
      </div>
    </section>
  )
}

export default Billing
