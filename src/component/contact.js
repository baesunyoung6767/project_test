import './css/contact.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function contact() {
    return(
        <div className='contact'>
            <div className='contact_title'>Contact</div>
            <div>
                <div className='contact_form'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={5}>
                            <div className='form_item'>email</div>
                            <div className='form_item'>name</div>
                            <div className='form_item'>title</div>
                            <div className='form_item'>contents</div>
                            </Grid>
                            <Grid item xs={11}>
                            <form>
                                <input type="text" name="email"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="email"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="email"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="email"  style={{width:'250px', height:'150px'}}/>
                            </form>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="outlined" className='form_btn'>SEND</Button>
                </div>
            </div>
        </div>
    );
}

export default contact;