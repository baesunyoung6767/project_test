import './css/projects.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { GoMarkGithub } from "react-icons/go";
import {Link} from "react-router-dom";

const title_content = [
    [1,"재가 요양 서비스 대상자 스마트 약통", "재가요양 서비스 대상자들의 약 복용을 돕기 위해 진행된 프로젝트이다. 잠금을 설치하여 약 복용 시간에만 해제가 되며 무게 판별을 통해 정확한 약 복용 여부를 판별한다.", "https://github.com/CapstoneDesign5"], 
    [2,"퍼스널 컬러 진단 웹 사이트 MyTone", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다.", "https://github.com/Project-MyTone"],
    [3,"안드로이드 기반 헬스장 관리 애플리케이션", "헬스장 관리를 용이하게 하기 위해 회원 등록 및 관리뿐만 아니라 회원권, PT등 운동 예약 관리까지 구현한 관리자용 애플리케이션이다.", "https://github.com/baesunyoung6767/gym_management_AndroidStudioProjects"],
    [4,"CMS기반 워드프레스 활용 웹 구현", "현재 많은 사람들에게 각광받고 있는 CMS기반 워드프레스를 이용하여 자기 소개 및 팀 소개, 최종 프로젝트 발표 내용을 웹으로 구현하였다.", ""],
    [5,"메타버스 활용 음성 기반 블록 히트 모션 감지", "시각장애인도 다양한 기능을 즐길 수 있도록 기울기 센서와 tts를 활용하여 메타버스 속에서 이벤트가 발생할 때마다 음성이 출력되도록 구현하였다.", ""],
    [6,"주거 침입 범죄예방을 위한 안드로이드 연동 도어락", "주거 침입 범죄를 예방하고자 스마트폰 앱과 연동하여 도어락 제어가 가능하도록 하였으며 카메라 인식 기능을 탑재하여 보안을 강화하였다.", "https://github.com/winterCapstoneDesign"]
];

function useProjects() {
    let navigate = useNavigate();

    const card_item = title_content.map((item)=>{
        return (
            <div>
            <Card sx={{ maxWidth: 345 }} className='projects_card' key={item[0]}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={item[5]}
                    // title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="projects_card_content">
                    {item[1]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="projects_card_content">
                    {item[2]}
                    </Typography>
                </CardContent>
                <CardActions>
                    <GoMarkGithub className='project_github_icon' onClick={()=>window.open(item[3])}></GoMarkGithub>
                </CardActions>
            </Card>
            </div>
        )
    })


    return(
        <div className='projects'>
            <div className='projects_title'>Projects</div>
            {/* <Snow></Snow> */}
            <div className='projects_content'>
                    {card_item}
            </div>
        </div>
    );
}

// function LeftArrow() {
//     const { scrollPrev } = React.useContext(VisibilityContext);
  
//     return (
//       <LeftBtn props="left" onClick={() => scrollPrev()}>
//         Left
//       </LeftBtn>
//     );
// }
  
// function RightArrow() {
//     const { scrollNext } = React.useContext(VisibilityContext);
  
//     return (
//       <RightBtn props="right" onClick={() => scrollNext()}>
//         Right
//       </RightBtn>
//     );
// }

export default useProjects;