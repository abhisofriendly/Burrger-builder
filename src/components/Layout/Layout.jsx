import React from "react";
//import Aux from "../../hoc/Aux";
import styles from "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar,SideDrawer,Backgrop</div>
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
