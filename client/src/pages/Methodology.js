import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
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
    paddingLeft:16,
    marginTop:146,
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop:0,
    marginLeft:277,
    background:"white",
    position:'absolute',
    height:'auto',
    marginRight:10,
    [theme.breakpoints.up(1300)]: {
        width: drawerWidth,
        marginTop:0,
        background:"white",
        position:'absolute',
        height:'auto',
        marginRight:10,
    },
    [theme.breakpoints.down('md')]: {
        display:'none'
    },
    [theme.breakpoints.between(600,1300)]: {
        width: drawerWidth,
        marginTop:0,
        marginLeft:17,
        background:"white",
        position:'absolute',
        height:'auto',
        marginRight:10,
    },
    borderColor:"transparent",
    [theme.breakpoints.up('sm')]: {
        marginTop:330,
        background:"transparent",
        marginRight:10,
    },
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.between(600,1300) ]: {
        marginTop:10,
        background:"transparent",
    },
    [theme.breakpoints.up('sm')]: {
        marginTop:10,
        background:"transparent",
    },
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

    const preventDefault = (event) => event.preventDefault();

    const drawer = (
        <div>
        <div className={classes.toolbar} />
        <List>
            
            <ListItem button key="Overview"  component="a" href="#overview" onClick={()=>setMobileOpen(false)}
                    style={{
                    }}
                >
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                 }}
                 >Overview</Typography>} />
            </ListItem>
            
            <ListItem button key="Scope of Brand" component="a" href="#scope_of_brand" onClick={()=>setMobileOpen(false)} >
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }} 
                 className="text">Scope of Brand</Typography>} />
            </ListItem>
            <ListItem button key="Research Principles" component="a" href="#research_prinicple" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }}
                 className="text">Research Principles</Typography>} />
            </ListItem>
            <ListItem button key="Research Methodology" component="a" href="#research_methodology" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                 }}>Research Methodology</Typography>} />
            </ListItem>
            <ListItem button key="Diversity and Inclusion" component="a" href="#diversity" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }}
                 className="text">Diversity & Inclusion</Typography>} />
            </ListItem>
            <ListItem button key="Worker Exploitation" component="a" href="#exploitation" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }}
                 className="text">Worker Exploitation</Typography>} />
            </ListItem>
            <ListItem button key="Waste and Pollution" component="a" href="#waste" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }}
                 className="text">Waste and Pollution</Typography>} />
            </ListItem>
            <ListItem button key="Sustainable Materials" component="a" href="#materials" onClick={()=>setMobileOpen(false)}>
                 <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                    marginLeft:10,
                 }}
                 className="text">Sustainable Materials</Typography>} />
            </ListItem>
            <ListItem button key="Information Sources" component="a" href="#sources" onClick={()=>setMobileOpen(false)}>
                <ListItemText primary={<Typography style={{ 
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "20px",
                    lineHeight: "34px",
                    color: "#000000",
                 }}>Information Sources</Typography>} />
            </ListItem>
        </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={`method_page ${classes.root}`}>
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
                <p className="paragraph_text"></p>
                <p id="overview" className="method_head">Methodology</p>
                
                <div >
                <div className="apparel_div">
                    <p>Apparel</p>
                </div>
                <div className="tech_div">
                    <p>Tech</p>
                </div>
                <div className="fast_div">
                    <p>Fast Food</p>
                </div>
                <div className="beauty_div">
                    <p>Beauty</p>
                </div>
                </div>
                <p id="overview" className="heading" style={{marginBottom:25}}>Overview</p>

                <p className="par">Monest analyzes the social and environmental metrics of brands. Our goal is to educate and equip consumers with data to leverage their purchasing power and hold brands to higher ethical standards. 

                Monest aims to best inform consumers in making their purchasing decisions. While our scoring does not reflect the nature of each brand’s business model, we believe it is important to acknowledge the detrimental impacts of fast fashion brands and excessive consumption. Inherent to the fast fashion business model, the pressure to reduce costs and speed up production time results in cutting corners at the 
                expense of workers and the environment. To decrease demand for the production of new clothes, 
                we strongly encourage consumers to follow best practices by reducing consumption and shopping second hand when possible. </p>

                <p id="scope_of_brand" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Scope of Brands</p>

                <p className="par">Monest assesses brands at the forefront of the apparel industry with the power and influence to become catalysts 
                for social and environmental change. Consumer-facing brands are selected based on sector indices and benchmarks,
                 supplemented by top performing lists in the fashion sector and their respective markets. Factors such as market
                  capitalization, size, and North American recognition are prioritized in the selection process. </p>

                <p id="research_prinicple" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Research Principles</p>
                <p className="par">The following principles guide our approach to the research process: <br/>

                <b>Evidence-based</b>: The foundation of our research is built on a strong governance process. 
                Our research process identifies and avoids potential biases by following a detailed methodology that mitigates
                 the risk of subjectivity in qualitative research. We evaluate brands based on explicit statements of intent and 
                 published metrics of progress. Brands will not receive full scores for vague commitments without evidence to support their claims. 
                    <br/><br/>
                <b>Transparency: </b>Our methodology acknowledges the importance of publicly disclosing credible and comprehensive data. 
                We require brands to be transparent regarding their operations and supply chain practices in order to fulfill the 
                corresponding criteria. Transparency does not equal sustainability, but it does enable accountability and allows consumers to 
                make better informed decisions.<br/><br/>
                <b>Accuracy:</b> We set high standards of quality for our research and strive for accuracy by employing a diligent review process. 
                To accurately reflect the most relevant brand information and account for changes, scores will be responsively updated and 
                revised on an annual basis. In the future, we plan to implement a feedback system for users and stakeholders to notify 
                us of any inaccuracies to hold us accountable. </p>

                <p id="research_methodology" className="heading" style={{marginTop:50,marginBottom:36}}>Research Methodology</p>
                <p className="par">Our research methodology was created in 2020 and will be reviewed annually to ensure that it continues to reflect the most important issues and best practices within the apparel industry. 

                The foundation of our methodology centers around two core values:<br/>
                <b>1. Focusing on issues that matter most</b><br/>
                Our research methodology prioritizes the most pressing issues identified within the industry based on the views of industry experts and NGOs. Each criteria (or issue) is weighted in proportion to the materiality of their impacts on the environment and people affected.
                <br/>
                <b>2. Assessing actions brands have the power to change</b><br/>
                Taking a pragmatic approach, we only evaluate actions within the scope of a brand’s control. The scores are reflective of current brand performance and do not focus on historical incidences, which are instead showcased in our “In the News” section for users to consider. We believe that brands have the power to change for the better and designed our methodology to reflect a realistic roadmap of actions brands can work towards achieving.

                Apparel brands are assessed using a scoring system that evaluates each brand’s performance in the following four categories: Diversity & Inclusion, Worker Exploitation, Waste & Pollution, and Sustainable Materials. Each category highlights the most prevalent issues which consist of actions brands can take to address the specific issue:
                </p>
                <p id="diversity" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Diversity & Inclusion</p>
                <p className="par">Many brands with operations in North America have faced issues such as discrimination in their hiring practices, as well as a lack of diverse representation in executive leadership. In addition, many brands lack policies that ensure the wellbeing of underrepresented groups. 

                This category evaluates the brand on a corporate-level divided into four main issues: Discrimination, Gender Equality, Cultural Diversity, and Inclusivity. Brands are scored on their performance in the context of the workplace, executive leadership, and in their consumer-facing marketing and product design efforts.
                </p>
                <p id="exploitation" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Worker Exploitation</p>
                <p className="par">
                Clothing production is a manufacturing-intensive process that is commonly outsourced to suppliers in developing countries with less stringent regulations. Workers in factories around the world face unsafe working conditions and are victims of exploitative labour practices. 

                This category evaluates the brand’s global supply chains and treatment of workers across four main issues: Child Labour, Forced Labour, Living Wage, and Working Conditions. Brands are scored on their supply chain policies, the quality of their safeguards against labour risks, the traceability of their supply chains, and their commitment to eliminating worker exploitation. 
                </p>
                <p id="waste" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Waste & Pollution</p>
                <p className="par">
                The apparel industry is the second largest polluter in the world, accounting for 10% of the world’s carbon emissions. It is also the second largest consumer of the world’s water supply. From the production process to the textile waste that eventually ends up in landfills, apparel brands have opportunities to reduce their environmental impact at each step of the value chain.

                This category evaluates the brand’s environmental management across the entire value chain for the following issues: Air Pollution, Water Pollution and Waste, Packaging Waste, and Material Waste. Brands are scored on their commitments, initiatives and progress disclosed across their owned and operated facilities as well as their supply chain. 
                </p>
                <p id="materials" className="heading" style={{marginTop:50,marginBottom:36,color:"#797979"}}>Sustainable Materials</p>
                <p className="par"> The greatest sustainability risks within textile production occur in the growing and extracting of raw materials. Cotton is the most common material used in the production of clothes, but the harvesting process is rampant with interconnected environmental and socio-economic risks. Furthermore, the lack of governance surrounding where materials are sourced from raises concerns for habitat biodiversity and animal welfare.

                This category evaluates the brand’s sourcing practices across the most prevalent issues within the industry: Cotton Farming, Deforestation, and Animal Welfare. Brands are scored on their commitment to using more sustainable materials and reducing unethical practices in those areas. 

                </p>
                <p id="sources" className="heading" style={{marginTop:50,marginBottom:36}}>Information Sources</p>
                <p className="par">Brands are assessed on publicly available information from direct and indirect sources.
                <br/>
                <b>1.Direct data sources</b> include all materials published by the brand or parent brand. This includes all information available on websites, annual reports, corporate responsibility reports, press releases and other direct publications. 
                <br/>
                <b>2.Indirect data sources</b> supplement the research based on direct sources and include relevant information published by external organizations. This includes material sourced from credible third-party reports, certifications, standard systems and multi-stakeholder groups such as the following: 
                </p>
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