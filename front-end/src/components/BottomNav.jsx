import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Search, Receipt, AccountBox } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // background: 'black',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

function ButtonNav() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState('/');

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='Home' icon={<Home />} value='/' />
      <BottomNavigationAction label='Search' icon={<Search />} value='/search' />
      <BottomNavigationAction label='Bill' icon={<Receipt />} value='/bill' />
      <BottomNavigationAction label='Profile' icon={<AccountBox />} value='/profile' />
    </BottomNavigation>
  );
}

export default ButtonNav;
