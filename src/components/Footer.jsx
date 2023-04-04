import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1  flex flex-col justify-start mr-8">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-1 w-full flex justify-between flex-wrap md:mt-0 mt-5">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-medium text-[18px] leading-[27px] text-white mb-5">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-3" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-2 border-t-[#3f3e45]">
      <p className="font-medium text-[18px] leading-[27px] text-white mb-5">
        2023 Hoobank. All Rights Reserved
      </p>
      <div className="flex md:mt-0 mt-5">
        {socialMedia.map((item, index) => (
          <img
            key={item.id}
            src={item.icon}
            alt={item.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
