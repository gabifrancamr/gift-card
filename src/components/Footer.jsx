import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="giftCard" className="w-[40px] h-auto" />
            <span className="text-white font-poppins">Gift Card Shop</span>
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Para todos os gostos.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row xs:justify-between md:justify-end gap-10 flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={footerLink.id}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={`#${link.id}`}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 Gift Card Shop. All Rights Reserved
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
