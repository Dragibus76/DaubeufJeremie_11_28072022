import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import styles from "./About.module.css";
import datadropdown from "../../utils/data/datadropdown.json";

export default function About() {
  return (
    <main>
      <Banner page={"about"} />
      <div className={styles.containerDropdown}>
        {datadropdown.map(({ summary, content }, index) => (
          <Dropdown key={index} summary={summary} content={content} />
        ))}
      </div>
    </main>
  );
}
