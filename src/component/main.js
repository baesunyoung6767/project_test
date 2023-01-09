import './css/main.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { AiOutlineMail, AiOutlineFileText, AiOutlineLaptop } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Box from '@mui/material/Box';
import Snow from './snow'

function main() {
    return(
        <>
            <div style={{width:"100%", height:"700px", backgroundImage:'url(img/main.jpg)', textAlign:'right'}}>
            <div className='main_text'>portfolio</div>
            </div>
            <div style={{width:'100%', height:'800px', alignItems:'center', display:'flex', backgroundColor:'#000033', position:'relative', overflow:'hidden', zIndex:'3'}}>
                <Snow></Snow>
                <div className='main1'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={16} className='main1_gird_Pitem'>
                            <Grid item xs={8} className='main1_grid_item'>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <img src="img/main1.png" style={{marginTop:'20px', width:"250px", height:"100%"}}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src="img/main2.jpg" style={{marginTop:'40px', width:"350px", height:"130px"}}/>
                                    </Grid>
                                </Grid>
                            </Grid> 
                            <Grid item xs={8} style={{alignItems:'center'}}>
                                <div className="main1_title">Hello</div> 
                                <div>Bae Sun Young</div>
                                <p className="main1_item_content">
                                    안녕하세요 저는 동의대학교 컴퓨터공학과 학생입니다. <br/>
                                    웹 개발자를 목표로, 서버(node.js / springboot)와 클라이언트(react)를 공부하고 있습니다.<br/>
                                    저의 이력서와 포트폴리오가 궁금하시다면 아래 버튼을 클릭해주세요!
                                </p>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className="main2">
                <div className="main2_item">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <div><AiOutlineFileText className='main2_icon'/></div>
                            <Button variant="outlined" style={{border:'none'}}>RESUME</Button>
                            <div className="main2_item_content">저의 이력서입니다<br/>공모전, 대외활동, 교내활동 등 확인하실 수 있습니다</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div><AiOutlineLaptop className='main2_icon'/></div>
                            <Button variant="outlined" style={{border:'none'}}>PROJECTS</Button>
                            <div className="main2_item_content">지금까지 진행했던 프로젝트입니다</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div><AiOutlineMail className='main2_icon'/></div>
                            <Button variant="outlined" style={{border:'none'}}>CONTACT</Button>
                            <div className="main2_item_content">궁금하신 점이 있다면 해당 페이지에서<br/>이메일을 통해 연락주세요</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default main;