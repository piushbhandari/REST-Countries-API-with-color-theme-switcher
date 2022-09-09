import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { formatNumber } from "../utils/utilityFunctions";
import styles from "./Countries.module.css";
const Countries = () => {
  const { filteredCountries } = useGlobalContext();

  return (
    <ul className={styles.countries}>
      {filteredCountries.map((country) => {
        const {
          flags: png,
          name: common,
          population,
          region,
          capital,
        } = country;
        let formattedPopulation = formatNumber(population);
        return (
          <li key={common.common} className={`${styles.country}`}>
            <Link to={`/country/${common.common}`} className={styles.link}>
              <div className={styles.imgbox}>
                <img
                  className="fit-image"
                  src={png.png}
                  alt={`${common.common} flag`}
                />
              </div>
              <div className={styles.textbox}>
                <p className={`${styles.countryName} country-name`}>
                  {common.common}
                </p>
                <ul className={styles.stats}>
                  <li className={`${styles.stat} stat-text`}>
                    <span className="stat-text--bold">Population</span>:{" "}
                    {formattedPopulation}
                  </li>
                  <li className={`${styles.stat} stat-text`}>
                    {" "}
                    <span className="stat-text--bold">Region</span>: {region}
                  </li>
                  <li className={`${styles.stat} stat-text`}>
                    <span className="stat-text--bold">Capital</span>: {capital}
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Countries;
