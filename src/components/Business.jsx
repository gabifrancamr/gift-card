import { features } from "../constants"
import styles, { layout } from "../styles"
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Faça alguém feliz <br className="sm:block hidden"/>hoje mesmo! </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Na Gift Card Shop, entendemos a importância de presentear com algo especial. Por isso, oferecemos uma ampla seleção de gift cards para PlayStation, Xbox, Nintendo, Steam, serviços de streaming, restaurantes e muito mais! Com apenas alguns cliques, você pode encontrar o presente ideal para qualquer ocasião.</p>
        {/* <Button styles="mt-10" /> */}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
