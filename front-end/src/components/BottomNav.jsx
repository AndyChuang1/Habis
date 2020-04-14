import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BillIcon from '@material-ui/icons/Payment';
import ProfileIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    //width: 500,
  },
});

function ButtonNav({ navigation }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        switch(newValue) {
          case 0:
          return history.push('/')
          case 1:
          return history.push('/Search')
          case 2:
          return history.push('/Bill')
          case 3:
          return history.push('/Profile')
          default:
          return history.push('/')
      }
      }}
      showLabels
      className={classes.root}
      style={{width: 'auto', height: 'auto'}}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Bill" icon={<BillIcon />} />
      <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
    </BottomNavigation>
  );
}

export default ButtonNav;
