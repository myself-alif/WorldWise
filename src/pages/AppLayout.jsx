import styles from "./AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";
import { useState } from "react";
import Button from "../components/Button";

export default function AppLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  function handleClick() {
    setIsSidebarVisible((val) => !val);
  }

  return (
    <div className={styles.app}>
      <Button type="sticky" onClick={handleClick}>
        {isSidebarVisible ? "Hide" : "Show"}
      </Button>
      {isSidebarVisible && <Sidebar />}
      <Map />
      <User />
    </div>
  );
}
