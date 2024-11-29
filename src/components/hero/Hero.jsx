import "./hero.scss"
import logo from '../.././shared/assets/logo.png'
import { useTranslation } from "react-i18next";


const herodata = [
  {
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.",
    logo: "logo",
    t:"SAINT PETERSBURG"
  },
]


const Hero = () => {
  const { t, i18n } = useTranslation(); 
  return (
    <div id="hero">
      <div className="">

        {herodata.map((h, index) => (
          <div key={index}>

            <div className="porten">
              <div>
                <img src={logo} alt="" />
                <div className="line"></div>
                <h5>{t(h.t)}</h5>
              </div>
            </div>
            <p> {t(h.p)}</p>
          </div>))}
      </div>
    </div>
  )
}

export default Hero