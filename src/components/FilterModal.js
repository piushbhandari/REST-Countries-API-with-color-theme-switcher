import React, { useState } from "react";
import { useGlobalContext } from "../utils/context";
import styles from "./FilterModal.module.css";
const FilterModal = () => {
  const { setNewRegion, toggleModal } = useGlobalContext();
  const [region, setRegion] = useState("");
  function chooseRegion(e) {
    e.preventDefault();
    const val = e.target.value;
    setRegion(val);
    setNewRegion(val);
    toggleModal();
  }
  return (
    <aside className={styles.aside}>
      <ul className={styles.regionList}>
        <li className={styles.region}>
          <button
            value="Africa"
            onClick={chooseRegion}
            className={`${styles.regionBtn} input-text`}
          >
            Africa
          </button>
        </li>
        <li className={styles.region}>
          <button
            value="America"
            onClick={chooseRegion}
            className={`${styles.regionBtn} input-text`}
          >
            America
          </button>
        </li>
        <li className={styles.region}>
          <button
            value="Asia"
            onClick={chooseRegion}
            className={`${styles.regionBtn} input-text`}
          >
            Asia
          </button>
        </li>
        <li className={styles.region}>
          <button
            value="Europe"
            onClick={chooseRegion}
            className={`${styles.regionBtn} input-text`}
          >
            Europe
          </button>
        </li>
        <li className={styles.region}>
          <button
            value="Oceana"
            onClick={chooseRegion}
            className={`${styles.regionBtn} input-text`}
          >
            Oceana
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default FilterModal;
