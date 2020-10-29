import React, { useState } from 'react'
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ListItemIcon from "@material-ui/core/ListItemIcon";

function Navbar() {
    const [drawer, setDrawer] = useState(false);

    function handleClick(){
        setDrawer(drawer => !drawer);
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
                <div className="navbar__logo">Logo</div>
                <div className="spacer"/>
                <div className="navbar__navigation-items">
                    <ul>
                        <li>head1</li>
                        <li>head2</li>
                        <li>head3</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
