import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./css/footer.css"

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className="footer">
            <BottomNavigation style={{width: "100%",backgroundColor: "#3f51b5"}}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction style={{color:"white"}} label="Recents" icon={<RestoreIcon style={{color:"white"}}/>}/>
                <BottomNavigationAction style={{color:"white"}} label="Favorites" icon={<FavoriteIcon style={{color:"white"}} />}/>
                <BottomNavigationAction style={{color:"white"}} label="Nearby" icon={<LocationOnIcon style={{color:"white"}} />}/>
            </BottomNavigation>
        </div>
    );
}
