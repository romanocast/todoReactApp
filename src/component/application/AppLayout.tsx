import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface AppProps {
    header: ReactElement
    body: ReactElement
}

const AppLayout: React.FC<AppProps> = (props: AppProps) => {
    return (
        //<h1>AppLayout</h1>
        <Grid container direction="column">
            
            <Grid item>
                {props.header}
            </Grid>

            <Grid container direction="row">
               {/* man kann nicht {0} nehmen sondern muss auto nehmen*/}
                <Grid item xs="auto" sm={1} lg={2}>
                </Grid>
                <Grid item xs={12} sm={10} lg={8}>
                    {props.body}
                </Grid>
                <Grid item xs="auto" sm={1} lg={2}>
                </Grid>
            </Grid>
           
        </Grid>
    );
}

export default AppLayout