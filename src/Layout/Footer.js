import './Footer.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AiFillMail, AiOutlineGithub, AiFillPhone } from "react-icons/ai";

const Item1 = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color : 'white',
    backgroundColor : 'black',
    fontSize : '18px',
    fontWeight : 'bold',
    marginTop : '15px'
}));

const Item2 = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color : 'white',
    backgroundColor : 'black',
    fontSize : '13px',
    marginTop : '15px'
}));

function main() {
    return(
        <div className="footer">
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Item1> <AiFillMail className='icon'/> email </Item1>
                    <Item2> tjsdudqo1234@naver.com <br/> tjsdud6677@gmail.com </Item2>
                </Grid>
                <Grid item xs={4}>
                    <Item1> <AiFillPhone className='icon'/> phone</Item1>
                    <Item2> 010-8541-**** </Item2>
                </Grid>
                <Grid item xs={4}>
                    <Item1> <AiOutlineGithub className='icon'/> github</Item1>
                    <Item2> https://github.com/baesunyoung6767 </Item2>
                </Grid>
            </Grid>
        </div>
    );
}

export default main;