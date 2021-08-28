import React from "react";

import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const TodoHeader: React.FC = () => {
    const classes = useStyles();
    return (
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ToDo Application
          </Typography>
          <Button color="inherit">ToDo</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Testing</Button>
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