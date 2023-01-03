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

function main() {
    const items = [
        { src: "img/main_img1.jpg" },
        { src: "img/main_img2.jpg" },
        { src: "img/main_img3.jpg" },
        { src: "img/main_img4.jpg" },
    ];

    const swiperStyle = {
        position : "relative",
        width : "300px",
        height : "350px",
    };

    return(
        <>
            <div className="main1">
                <div className="main1_item">
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <div style={{marginRight:'50px', width : '300px'}}>
                            <Swiper
                                style={swiperStyle}
                                effect={"fade"}
                                slidesPerView={4}
                                autoplay={{
                                delay: 2000,
                                disableOnInteraction:false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation, EffectFade, Pagination,Autoplay]}
                                className="mySwiper"
                                loop={true}
                            >
                                {items.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                    <img src={item.src} style={{width:"300px", height:"350px"}}/>
                                    </SwiperSlide>
                                );
                                })}
                            </Swiper>
                            </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div style={{marginLeft:'30px', width : '500px'}}>
                                <h2 className="main1_title">Hello!</h2>
                                <h3>Bae Sun Young</h3>
                                <p className="main1_item_content">
                                    안녕하세요 저는 동의대학교 컴퓨터공학과 학생입니다 <br/>
                                    웹 개발자를 목표로, 서버(node.js / springboot)와 클라이언트(react)를 공부하고 있습니다<br/>
                                    저의 이력서와 포트폴리오가 궁금하시다면 아래 버튼을 클릭해주세요
                                </p>
                            </div>
                        </Grid>
                    </Grid>
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