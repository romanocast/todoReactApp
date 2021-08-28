import React from "react";

import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const TodoHeader: React.FC = () => {
    const classes = useStyles();
    const history = useHistory(); 
    return (
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ToDo Application
          </Typography>
          <Button color="inherit"
                  onClick={() => {history.push('/todo')}}
                  >ToDo</Button>
          <Button color="inherit"
                  onClick={() => {history.push('/about')}}
                  >About</Button>
        </Toolbar>
      </AppBar>
    



      
    );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default TodoHeader