import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/utilityFunctions";
import styles from "./CountryStats.module.css";
const CountryStats = ({ country }) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;
  const flagImg = flags.svg;
  const countryName = name.common;
  const nativeName = name.nativeName;
  const formattedPopulation = formatNumber(population);
  const countryCapital = capital[0];
  const topLevelDomain = tld[0];
  const currency = Object.values(currencies)[0].name;
  let countryLanguages = [];
  for (let language in languages) {
    countryLanguages.push(languages[language]);
  }
  return (
    <section className={styles.statsection}>
      <div className={styles.imgbox}>
        <img className="fit-image" src={flagImg} alt={`${countryName} flag`} />
      </div>
      <div className={styles.textbox}>
        <h1 className={`${styles.title} primary-title`}>{countryName}</h1>
        <ul className={`${styles.stats} ${styles.stats1}`}>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Native Name</span>: Belgie
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Population</span>:{" "}
            {formattedPopulation}
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Region</span>: {region}
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Sub Region</span>: {subregion}
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Capital</span>:{" "}
            {countryCapital}
          </li>
        </ul>
        <ul className={`${styles.stats} ${styles.stats2}`}>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Top Level Domain</span>:{" "}
            {topLevelDomain}
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Currencies</span>: {currency}
          </li>
          <li className={`${styles.stat} stat-text--2`}>
            <span className="stat-text--bold--2">Languages</span>:{" "}
            {countryLanguages.join(",")}
          </li>
        </ul>
        <div className={styles.borderbox}>
          <p className="border-text">Border Countries:</p>
          <ul className={styles.borders}>
            <li className={styles.border}>
              <Link to="/">Japan</Link>
            </li>
            <li className={styles.border}>
              <Link to="/">Germany</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CountryStats;
