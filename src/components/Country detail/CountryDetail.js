import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import styles from "./CountryDetail.module.css";
import CountryStats from "./CountryStats";

const CountryDetail = ({ country }) => {
  console.log(country);
  const navigate = useNavigate();
  function goBack(e) {
    navigate(-1);
  }
  return (
    <main className={styles.main}>
      <div className={styles.cont}>
        <button type="button" className={styles.backbtn} onClick={goBack}>
          <BsArrow90DegLeft />
          <span>Back</span>
        </button>
        <CountryStats country={country} />
      </div>
    </main>
  );
};

export default CountryDetail;
