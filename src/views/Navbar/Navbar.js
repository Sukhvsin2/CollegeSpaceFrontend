import React, { useState } from 'react'
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link, Redirect, Route } from "react-router-dom"
import { Link as Link2 } from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom"

function Navbar(props) {
    const [drawer, setDrawer] = useState(false);

    function handleClick(){
        setDrawer(drawer => !drawer);
    }

    function logout() {
        localStorage.removeItem('token');
    }

    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div className="navbar__sidebar">
                    <IconButton onClick={handleClick} style={{marginTop: "5px"}}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawer} onClose={() => {
                        setDrawer(drawer => drawer = false)
                    }}>
                        <List component="nav">
                            <ListItem button> <ListItemIcon><AcUnitIcon/></ListItemIcon> list item 1</ListItem>
                            <ListItem button> <ListItemIcon><AcUnitIcon/></ListItemIcon> list item 1</ListItem>
                            <ListItem button> <ListItemIcon><AcUnitIcon/></ListItemIcon> list item 1</ListItem>
                            <ListItem button> <ListItemIcon><AcUnitIcon/></ListItemIcon> list item 1</ListItem>
                        </List>
                    </Drawer>
                </div>
                <div className="navbar__logo">
                    <Link to={'/'}>
                        Logo
                    </Link>
                </div>
                <div className="spacer"/>
                <div className="navbar__navigation-items">
                    <ul>
                        <Link to='/login'>
                            <li>Login</li>
                        </Link>
                        <Route  onClick={logout} to={{pathname: '/login'}}>
                            <Link2>Logout</Link2>
                        </Route>
                        <li>head3</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
