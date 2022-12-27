import './Footer.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    // backgroundColor:transparent
}));

function main() {
    return(
        <div className="footer">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default main;