import React, { useState } from "react";
import styles from "./Formbox.module.css";
import { BsChevronDown, BsChevronUp, BsSearch } from "react-icons/bs";
import FilterModal from "./FilterModal";
import { useGlobalContext } from "../utils/context";

const Formbox = () => {
  const { currentRegion, toggleModal, isFilterModal } = useGlobalContext();
  const [isModal, setModal] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  function openFilterModal(e) {
    e.preventDefault();
    setModal(!isModal);
    toggleModal();
  }
  function handleInput(e) {
    const name = e.target.name;
    const val = e.target.value;
    setCurrentInput(val);
  }
  return (
    <section className={styles.section__search}>
      <form className={styles.formbox}>
        <BsSearch className={styles.search} />
        <input
          onChange={handleInput}
          className="input-text"
          type="text"
          name="search"
          value={currentInput}
          placeholder="Search for a country..."
        />
      </form>
      <div className={styles.filterContainer}>
        <button
          onClick={openFilterModal}
          className={`${styles.filterbtn} input-text`}
          type="button"
        >
          <span>{currentRegion ? currentRegion : "Filter by Region"}</span>
          {isFilterModal ? <BsChevronUp /> : <BsChevronDown />}
        </button>
        {isFilterModal && <FilterModal />}
      </div>
    </section>
  );
};

export default Formbox;
