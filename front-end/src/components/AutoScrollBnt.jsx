import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  flexContainer: {
    justifyContent: 'center', //置中style 因為root 是使用flex
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const { tab, setTab } = props;

  const classes = useStyles();
  // const [value, setValue] = React.useState(tab);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          classes={{ flexContainer: classes.flexContainer }} //套用上面的置中style
        >
          <Tab label="Delivery" {...a11yProps(0)} />
          <Tab label="Pick-UP" {...a11yProps(1)} />
          <Tab label="Stay-IN" {...a11yProps(2)} />
          {/* <Tab label="News" {...a11yProps(3)} />
          <Tab label="Item" {...a11yProps(4)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        Delivery
      </TabPanel>
      <TabPanel value={tab} index={1}>
        Pick-UP
      </TabPanel>
      <TabPanel value={tab} index={2}>
        Stay-IN
      </TabPanel>
      {/* <TabPanel value={tab} index={3}>
        News
      </TabPanel>
      <TabPanel value={tab} index={4}>
        Item
      </TabPanel> */}
    </div>
  );
}
