import A from '../images/a.png'
import B from '../images/b.png'
import C from '../images/c.png'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Favicon from 'react-favicon'
import FilledFavicon from '../images/filled.ico'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import OpenFavicon from '../images/open.ico'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import { Helmet } from 'react-helmet'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { ProjectList } from '../components/ProjectList'
import { Layout } from '../components/layout'
import MagazinesLogo from '../images/magazines-logo.png'
import RachioLogo from '../images/rachio-logo.png'
import SimpleBoothLogo from '../images/simplebooth-logo-01.png'
import SimpleSubLogo from '../images/simplesubwater-logo-01.png'
import Profile from '../images/profile.jpg'

// Constants //////////////////////////////////////////////////////////////////

const sectionListStyles = makeStyles({
  root: {
    flexDirection: 'column',
  },
  item: {
    marginBottom: 0,
  },
})

const SectionList = ({ items }) => {
  const classes = sectionListStyles()

  return (
    <List className={classes.root}>
      {items.map((item, idx) => (
        <ListItem dense className={classes.item}>
          <ListItemText
            primary={item}
            primaryTypographyProps={{ variant: 'h6' }}
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
          backgroundImage: `url(${Profile})`,
          border: '16px solid black',
          margin: 0,
          marginRight: 16,
          height: 300,
          width: 250,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          alignSelf: 'center',
        }}
      />
    ),
    title: (
      <Typography
        variant={'h1'}
        style={{ fontWeight: 'bold', fontSize: '4rem' }}
      >
        {'Dan Woodson'}
      </Typography>
    ),
    TextComponent: () => (
      <SectionList
        items={[
          'Consulting Developer',
          '10+ years Professional Web Development Experience',
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
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          alignSelf: 'center',
        }}
      />
    ),
    title: 'Areas of Focus',
    TextComponent: () => (
      <SectionList
        items={[
          'Web Application Architecture and Development',
          'E-commerce solutions',
          'IoT frontends',
        ]}
      />
    ),
  },
  {
    ImgComponent: () => (
      <div
        style={{
          display: 'none',
          backgroundImage: `url(${Profile})`,
          border: '16px solid black',
          margin: 0,
          marginRight: 16,
          height: 300,
          width: 250,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          alignSelf: 'center',
        }}
      />
    ),
    title: 'Previous Work',
    TextComponent: () => <ProjectList projects={projects} />,
  },
]

// Individual Section /////////////////////////////////////////////////////////

const aboutSectionStyles = makeStyles({
  root: {
    display: 'flex',
    // padding: `${24}px 0`,
  },
  rootReverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
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
      <Divider />
    </React.Fragment>
  )
}

const linkStyles = makeStyles(theme => ({
  contactLink: {
    position: 'fixed',
    top: theme.spacing(1),
    right: theme.spacing(1),
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
  contactLinkText: {
    fontFamily: 'courier',
    fontSize: 11,
    [theme.breakpoints.up('md')]: {
      fontSize: 13,
    },
  },
}))

const Link = props => {
  const classes = linkStyles()

  return (
    <a
      href={props.href}
      className={classnames(classes.contactLink, props.className)}
      target={'_blank'}
      title={props.title}
    >
      <Typography variant={'caption'} className={classes.contactLinkText}>
        {`[${props.text}]`}
      </Typography>
    </a>
  )
}

const Schema = () => (
  <div
    itemScope={true}
    itemtype={'http://schema.org/Person'}
    style={{ visibility: 'hidden' }}
  >
    <span itemprop="name" content="Dan Woodson"></span>
    <span itemprop="jobTitle" content="Software Architect"></span>
    <div
      itemprop="address"
      itemScope={true}
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
)

// All Sections ///////////////////////////////////////////////////////////////

const aboutStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(100),
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    padding: `0px ${theme.spacing(2)}px`,
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(9),
    },
  },
  link: {},
  emailLink: {
    top: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
  resumeLink: {
    top: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(5),
    },
  },
}))

const projects = [
  {
    title: 'Magazines.com',
    author: 'Dan',
    img: MagazinesLogo,
    content: 'Magazines.com',
  },
  {
    title: 'Rachio',
    author: 'Dan',
    img: RachioLogo,
    content: 'Rachio',
  },
  {
    title: 'SimpleBooth',
    author: 'Dan',
    img: SimpleBoothLogo,
    content: 'SimpleBooth',
  },
  {
    title: 'SimpleSub Water',
    author: 'Dan',
    img: SimpleSubLogo,
    content: 'SimpleSUB Water',
  },
].reverse()

export const About = () => {
  const classes = aboutStyles()
  const [favicon, setFavicon] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => setFavicon(favicon => Number(!favicon)), 3500)
  }, [])

  return (
    <div style={{ backgroundColor: 'rgba(239, 239, 239, 1)' }}>
      <Favicon url={favicon === 1 ? FilledFavicon : OpenFavicon} />
      <Helmet title={'Dan Woodson'} />
      <CssBaseline />
      <Schema />
      <Layout>
        <main className={classes.root}>
          <Link
            className={classes.emailLink}
            href={
              'mailto:woodson.dan@gmail.com?subject=Contacting%20from%20website'
            }
            text={'contact'}
            title={'contact'}
          />
          <Link
            className={classes.resumeLink}
            href={'/dan-woodson_resume.pdf'}
            text={'resume'}
            title={'resume'}
          />
          {aboutSections.map((section, idx) => (
            <AboutSection {...section} idx={idx} />
          ))}
          {/*} <ProjectList projects={projects} /> */}
        </main>
      </Layout>
    </div>
  )
}

export default About
