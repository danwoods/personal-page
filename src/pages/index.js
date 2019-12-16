import A from "../images/a.png"
import B from "../images/b.png"
import C from "../images/c.png"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Favicon from "react-favicon"
import FilledFavicon from "../images/filled.ico"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import OpenFavicon from "../images/open.ico"
import React from "react"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { Helmet } from "react-helmet"
import { makeStyles, withStyles } from "@material-ui/core/styles"

// Constants //////////////////////////////////////////////////////////////////

const sectionListStyles = makeStyles({
  root: {
    flexDirection: "column",
  },
  item: {
    marginBottom: 0,
  },
})


const SectionList = ({ items }) => {
  const classes = sectionListStyles()

  return (
    <List className={classes.root}>
      {items.map(item => (
        <ListItem dense className={classes.item}>
          <ListItemText
            primary={item}
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
      ))}
    </List>
  )
}

const aboutSections = [
  {
    ImgComponent: () => (
      <div
        style={{
          backgroundImage: `url(${A})`,
          margin: 0,
          height: 200,
          width: 150,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          alignSelf: "center",
        }}
      />
    ),
    title: "Overview",
    TextComponent: () => (
      <SectionList
        items={[
          "Computer Science Degree",
          "10+ years Professional Web Development Experience",
        ]}
      />
    ),
  },
  {
    ImgComponent: () => (
      <div
        style={{
          backgroundImage: `url(${B})`,
          margin: 0,
          height: 200,
          width: 150,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          alignSelf: "center",
        }}
      />
    ),
    title: "Areas of Expertise",
    TextComponent: () => (
      <SectionList
        items={[
          "Web Application Architecture and Development",
          "E-commerce solutions",
          "Websites",
        ]}
      />
    ),
  },
  {
    ImgComponent: () => (
      <div
        style={{
          backgroundImage: `url(${C})`,
          margin: 0,
          height: 200,
          width: 150,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          alignSelf: "center",
        }}
      />
    ),
    title: "Personal",
    TextComponent: () => (
      <SectionList
        items={[
          "Married to Jennifer Woodson",
          "Musician",
          "Born in Murfreesboro, Tennessee",
        ]}
      />
    ),
  },
]

// Individual Section /////////////////////////////////////////////////////////
const aboutSectionStyles = makeStyles({
  root: {
    display: "flex",
    padding: `${24}px 0`,
    "&:nth-child(ODD)": {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
  },
  rootReverse: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
})
const AboutSection = ({ ImgComponent, title, TextComponent, idx }) => {
  const classes = aboutSectionStyles()
  return (
    <React.Fragment>
      <section
        className={classnames(classes.root, {
          [classes.rootReverse]: idx % 2 === 1,
        })}
      >
        <ImgComponent />
        <div style={{ padding: 8 }}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <TextComponent />
        </div>
      </section>
      <Divider style={{ height: 24, backgroundColor: "black" }} />
    </React.Fragment>
  )
}

// All Sections ///////////////////////////////////////////////////////////////

const aboutStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(100),
    width: "100%",
    margin: "auto",
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    padding: `0px ${theme.spacing(2)}px`,
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(9),
    },
  },
  contactLink: {
    position: "fixed",
    top: theme.spacing(1),
    right: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
  contactLinkText: {
    fontFamily: "courier",
    fontSize: 11,
    [theme.breakpoints.up("md")]: {
      fontSize: 13,
    },
  },
}))

export const About = props => {
  const classes = aboutStyles()
  const [favicon, setFavicon] = React.useState(0)
  React.useEffect(() => {
    setInterval(() => setFavicon(favicon => Number(!Boolean(favicon))), 3500)
  }, [])
  return (
    <div>
      <Favicon url={favicon === 1 ? FilledFavicon : OpenFavicon} />
      <Helmet title={"Dan Woodson"} />
      <CssBaseline />
      <div
        itemscope
        itemtype="http://schema.org/Person"
        style={{ visibility: "hidden" }}
      >
        <span itemprop="name" content="Dan Woodson"></span>
        <span itemprop="jobTitle" content="Software Architect"></span>
        <div
          itemprop="address"
          itemscope
          itemtype="http://schema.org/PostalAddress"
        >
          <span itemprop="addressLocality" content="Denver"></span>
          <span itemprop="addressRegion" content="CO"></span>
        </div>
        <span itemprop="url" content="https://danwoodson.com"></span>
        <span
          itemprop="knowsAbout"
          content="JavaScript, Software Architecture, Web Development, React"
        ></span>
      </div>
      <main className={classes.root}>
        <Typography variant="h1" className={classes.header} gutterBottom>
          {"Dan Woodson"}
        </Typography>
        <a
          href={
            "mailto:forhire@danwoodson.com?subject=Contacting%20from%20website"
          }
          className={classes.contactLink}
          target={"_blank"}
        >
          <Typography variant={"caption"} className={classes.contactLinkText}>
            {"CONTACT DAN"}
          </Typography>
        </a>
        {aboutSections.map((section, idx) => (
          <AboutSection {...section} idx={idx} />
        ))}
      </main>
    </div>
  )
}

export default About
