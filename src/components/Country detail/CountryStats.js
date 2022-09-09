import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import { formatNumber } from "../../utils/utilityFunctions";
import styles from "./CountryStats.module.css";
const CountryStats = ({ country }) => {
  const { countryAbbrevToBorders } = useGlobalContext();
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
    borders,
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
  borders ? borders.slice(0, 3): "";
  const borders__fullName = borders?.map((border) => {
    const fullName = countryAbbrevToBorders.find(
      (country) => Object.values(country)[0] === border
    );
    return fullName;
  });

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
          {borders ? (
            <ul className={styles.borders}>
              {borders__fullName.map((border) => {
                if (border !== undefined) {
                  return (
                    <li
                      className={styles.border}
                      key={Object.values(border)[0]}
                    >
                      <Link to={`/country/${Object.keys(border)[0]}`}>
                        {Object.keys(border)[0]}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          ) : (
            <p>no borders </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryStats;
