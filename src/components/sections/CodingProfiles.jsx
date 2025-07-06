import "../styles/CodingProfiles.css";
import info from "../../data/info.js";
import {FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import useScrollReveal from "./useScrollReveal";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const CodingProfiles = () => {
  useScrollReveal();

  return (
    <section id="coding-profiles" className="section-animate">
      <h4 className="title">
        <LiaLaptopCodeSolid className='technologysymbol' /> Coding Profiles
        </h4>
      <div className="profiles-container">
        <a href={info.coding.leetcode} target="_blank" rel="noopener noreferrer" className="profile-card">
          <SiLeetcode className="profile-icon" />
          <span>LeetCode</span>
        </a>

        <a href={info.coding.codechef} target="_blank" rel="noopener noreferrer" className="profile-card">
          <SiCodechef className="profile-icon" />
          <span>CodeChef</span>
        </a>

        <a href={info.coding.hackerrank} target="_blank" rel="noopener noreferrer" className="profile-card">
          <FaHackerrank className="profile-icon" />
          <span>HackerRank</span>
        </a>

        <a href={info.coding.gfg} target="_blank" rel="noopener noreferrer" className="profile-card">
          <SiGeeksforgeeks className="profile-icon" />
          <span>GeeksforGeeks</span>
        </a>
      </div>

     
    </section>
  );
};

export default CodingProfiles;
