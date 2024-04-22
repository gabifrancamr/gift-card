import {Navbar, Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Stats, Testimonials} from './components'
import ProductSlider from './components/ProductSlider'
import styles from './styles'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <ProductSlider />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />  
      </div>
    </div>
  </div>
)

export default App

