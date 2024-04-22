import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} items-start md:gap-20`}>
      <div className={layout.sectionImgReverse}>
        <img src="/heroCard.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo} w-full`}>
        <h2 className={styles.heading2}>Compra rápida <br className="sm:block hidden" />e fácil.</h2>
        <div className="flex flex-col items-center">
        <div className="mt-5 feature-card items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">Escolha seu Gift Card</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-dimWhite text-[16px] leading-[24px] mb-1`}>Navegue pela nossa seleção de gift cards para PlayStation, Xbox, Nintendo, Steam, serviços de streaming, restaurantes e muito mais. Encontre o presente perfeito para quem você ama!</p> 
        </div>

        <div className="mt-8 feature-card items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">Faça seu pedido</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-dimWhite text-[16px] leading-[24px] mb-1`}>Clique no gift card desejado e siga as instruções para concluir o processo de compra. Aceitamos diversos métodos de pagamento seguros para sua conveniência.</p> 
        </div>

        <div className="mt-8 feature-card items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">Receba seu código por e-mail</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins text-dimWhite text-[16px] leading-[24px] mb-1`}>Após a confirmação do pagamento, você receberá o código do seu gift card diretamente no seu e-mail cadastrado. Não há necessidade de esperar pelo correio ou se preocupar com prazos de entrega!</p> 
        </div>

        <div className="mt-8 feature-card items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">Resgate e desfrute</h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite text-[16px] leading-[24px] mb-1`}>Use o código recebido para resgatar o seu gift card na plataforma correspondente. É rápido, fácil e conveniente!</p> 
        </div>
        </div>

       

        {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div> */}
      </div>
    </section>
  )
}

export default Billing
