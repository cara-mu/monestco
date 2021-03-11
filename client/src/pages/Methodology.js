import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../styles/Methodology.css';
import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";
import logo4 from "../assets/4.svg";
import logo5 from "../assets/5.svg";
import logo6 from "../assets/6.svg";
import logo7 from "../assets/7.svg";
import logo8 from "../assets/8.svg";
import logo9 from "../assets/9.svg";
import logo10 from "../assets/10.svg";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    color:"black",
    boxShadow:"none",
    background:"transparent",
    marginTop:100,    
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      marginTop: 100
    },
  },
  menuButton: {
    color:"black",
    left:0,
    padding:0,
    position:"fixed",
    paddingLeft:15,
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:0,
    background:"white",
    borderColor:"transparent",
    [theme.breakpoints.up('sm')]: {
        marginTop:100,
        background:"transparent",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft:30,
  },
}));

function Methodology(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
        <div className={classes.toolbar} />
        <List>
            <ListItem button key="Overview">
                <ListItemText primary="Overview"/>
            </ListItem>
            <ListItem button key="Scope of Brand">
                <ListItemText primary="Scope of Brand" className="listItem"/>
            </ListItem>
            <ListItem button key="Research Principles">
                <ListItemText primary="Research Principles" className="listItem"/>
            </ListItem>
            <ListItem button key="Research Methodology">
                <ListItemText primary="Research Methodology"/>
            </ListItem>
            <ListItem button key="Diversity and Inclusion" >
                <ListItemText primary="Diversity and Inclusion"className="listItem" />
            </ListItem>
            <ListItem button key="Worker Exploitation" >
                <ListItemText primary="Worker Exploitation" className="listItem"/>
            </ListItem>
            <ListItem button key="Waste and Pollution">
                <ListItemText primary="Waste and Pollution"  className="listItem"/>
            </ListItem>
            <ListItem button key="Sustainable Materials">
                <ListItemText primary="Sustainable Materials"  className="listItem"/>
            </ListItem>
            <ListItem button key="Information Sources">
                <ListItemText primary="Information Sources"/>
            </ListItem>
        </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <div className="leftIcon">
                        INDEX
                    </div>
                </IconButton>
                <Typography variant="h6" noWrap style={{marginLeft:28}}>
                    Methodology
                </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
                </Hidden>
            </nav>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
                <div className="row">
                    <div className="col-12  d-md-flex justify-content-between " >
                        <img src={logo1}></img>
                        <img src={logo2}></img>
                        <img src={logo3}></img>
                        <img src={logo4}></img>
                    </div>
                    <div className="col-12  d-md-flex justify-content-between">
                        <img src={logo5}></img>
                        <img src={logo6}></img>
                        <img src={logo7}></img>
                        <div></div>
                    </div>
                    <div className="col-12  d-md-flex justify-content-between">
                        <img src={logo8}></img>
                        <img src={logo9}></img>
                        <img src={logo10}></img>
                        <div></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

Methodology.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
  export default Methodology;