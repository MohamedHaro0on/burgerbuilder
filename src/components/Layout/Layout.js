import React from "react";
import Aux from "../../HOC/Auxulliary"
import classes from "./Layout.module.css"
const Layout = (props) => (
    <Aux>
        <div> ToolBar  , SideDrawer , BackDrop </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)
export default Layout;