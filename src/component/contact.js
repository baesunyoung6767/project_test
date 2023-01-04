import './css/contact.css';
import React,{useState ,useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

function useContact() {
  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service1', 'template_tkahnvb', form.current, 'SVEidCMHNv0JJ7gYW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

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
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" name="email"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="name"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="title"  style={{width:'250px', height:'33px', marginBottom:'25px'}}/>
                                <input type="text" name="contents"  style={{width:'250px', height:'150px', marginBottom:'80px'}}/>
                            </form>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button  onClick={sendEmail} variant="outlined" className='form_btn'>SEND</Button>
                </div>
            </div>
        </div>
    );
}

export default useContact;