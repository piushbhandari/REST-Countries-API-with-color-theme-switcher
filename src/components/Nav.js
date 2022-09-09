import React from "react";
import styles from "./Nav.module.css";
import { BsMoon } from "react-icons/bs";

const Nav = () => {
  function handleThemetoggle(e){

  }
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__cont}>
        <h1 className={`${styles.nav__logo} primary-header`}>
          Where in the world?
        </h1>
        <button type="" className={`${styles.theme__btn} theme-btn`} onClick={handleThemetoggle}>
          <BsMoon />
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

/*
        setURL(params, url):
        tl;dr: builds the url based on current filters.
            1. make a new URLSearchParams object passing in our filter object
            2. loop over that object and push it to the paramBuilder array only if the value of the current key is not empty
            3. call the buildNewUrl(url, params) function to get a url based on what we have in the paramBuilder variable
            4. set the url on the browser based on what buildNewUrl(url, params) returned

*/
function setURL(params, url) {
  const paramObject = new URLSearchParams(params);
  let paramBuilder = [];
  for (const [key, value] of paramObject) {
    if (value.length > 0) {
      paramBuilder.push({ [key]: value });
    }
  }
  let newUrl = buildNewUrl(url, paramBuilder);
  history.pushState(null, "", newUrl);
}

/*
            buildNewUrl(url, params):
            tl;dr: return a new URL with the params that got passed to us
            1. make a new URL object with the url that was passed to us
            2. for each value in the params, set it on the newURL
            3. return it
*/
function buildNewUrl(url, params) {
  let newUrl = new URL(url);

  params.forEach((param) => {
    newUrl.searchParams.set(Object.keys(param), Object.values(param));
  });
  return newUrl.href.replaceAll("#", "");
}

function updateFilterState() {
  let currentURL = window.location.href;
  setURL(currentFilters, currentURL);
  updateFunction();
}

/* 
        getParams(): 
        tl;dr: gets the current url and its filter parameters and sets them in our currentFilters variable, so on refresh our filter settings persist
            1. get the current url
            2. split up the url so that we only get the filter settings
            3. pass it in to a new object of URLSearchParams 
            4. loop over the newly created object and reset the currentFilters based on what we have

*/
function getParams() {
  let currentURL = window.location.href;
  let params = currentURL.split("?")[1];
  let formattedParam = new URLSearchParams(params);
  for (const [key, value] of formattedParam) {
    currentFilters = { ...currentFilters, [key]: value };
  }
}
function clearParams() {
  let clearedURL = currentURL.split("?")[0];
  history.pushState(null, "", clearedURL);
  updateFilterState();
}
