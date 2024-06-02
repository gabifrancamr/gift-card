import styles, { layout } from "../styles";

const CardDeal = () => {
  return (
    <section>
      <div>
        <h2 className={styles.heading2}>
          Compre com confiança: <br className="md:block hidden" /> Gift Cards
          autênticos e entrega garantida
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sua Satisfação e Segurança São Nossa Prioridade.
        </p>
      </div>

      <div className="flex flex-wrap mt-12 gap-10 justify-center">
        <div className="card-security max-w-[400px] flex flex-col items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Gift Cards Autênticos
          </h4>
          <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center">
            Cada gift card que vendemos é autêntico e válido, proporcionando a
            você a tranquilidade de saber que está recebendo um produto de
            qualidade.
          </p>
        </div>

        <div className="card-security max-w-[400px] flex flex-col items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Entrega Instantânea por E-mail
          </h4>
          <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center">
            Após a confirmação do pagamento, você receberá o código do seu gift
            card diretamente no seu e-mail em questão de minutos. Sem esperas,
            sem complicações.
          </p>
        </div>

        <div className="card-security max-w-[400px] flex flex-col items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Suporte Especializado
          </h4>
          <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center">
            Nossa equipe de suporte está disponível para ajudá-lo com qualquer
            dúvida ou problema que possa surgir. Conte conosco para fornecer
            assistência rápida e eficaz sempre que precisar.
          </p>
        </div>

        <div className="card-security max-w-[400px] flex flex-col items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Política de Devolução em 7 Dias
          </h4>
          <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center">
            Em caso de qualquer engano na compra ou se você decidir cancelar seu
            pedido, oferecemos uma política de devolução em até 7 dias. Sua
            satisfação é nossa prioridade.
          </p>
        </div>
        <div className="card-security max-w-[400px] flex flex-col items-center p-6 rounded-[20px]">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 text-center">
            Garantia de Cancelamento e Reembolso
          </h4>
          <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center">
            Se o código PIN ainda não foi ativado, você pode solicitar o
            cancelamento ou reembolso do seu pedido. Após uma análise e
            verificação pelo distribuidor, faremos o reembolso conforme
            necessário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
