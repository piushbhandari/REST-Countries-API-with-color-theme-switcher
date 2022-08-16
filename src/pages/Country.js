import React from "react";
import { useParams } from "react-router-dom";
import CountryDetail from "../components/Country detail/CountryDetail";
import { useGlobalContext } from "../utils/context";
import styles from "./Country.module.css";

const Country = () => {
  const { allCountries } = useGlobalContext();
  const { name } = useParams();
  const country = allCountries.find((country) => country.name.common === name);

  return <CountryDetail country={country} />;
};

export default Country;
