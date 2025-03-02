import css from "./Karta_Samochoda.module.css";
function Karta_Samochoda({ dani }) {
  return (
    <li className={css.li_border}>
      <p>{dani.marka}</p>
      <div className={css.div_zdjecie}>
        <img src={dani.zdjecie} alt="auto" className={css.zdjecie_samochodu} />
      </div>
      <p>{dani.cena} $</p>
      <p>{dani.cechy_silnika.zuzycie_paliwa} l/100km</p>
    </li>
  );
}
export default Karta_Samochoda;
