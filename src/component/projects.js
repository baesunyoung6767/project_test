import './css/projects.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ScrollHorizontal from 'react-scroll-horizontal';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router';

const title_content = [
    ["재가 요양 서비스 대상자", "재가요양 서비스 대상자들의 약 복용을 돕기 위해 진행된 프로젝트이다. 잠금을 설치하여 약 복용 시간에만 해제가 되며 무게 판별을 통해 정확한 약 복용 여부를 판별한다."], 
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."],
    ["퍼스널 컬러 진단 웹 사이트", "사람들에게 많은 인기를 끌었던 퍼스널 컬러 진단을 OpenCV를 이용해서 웹에서 보다 쉽게 접근하여 진단을 받을 수 있도록 편이성 및 재미를 제공하는 것이 목적이다."]
];

const card_item = title_content.map((item, index)=>{
    let navigate = useNavigate();

    return (
        <div>
        <Card sx={{ maxWidth: 345 }} className='projects_card' key={index}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="projects_card_content">
                {item[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="projects_card_content">
                {item[1]}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{navigate(`/detail_project/${item[0]}`);}}>Learn More</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </div>
    )
})

function projects() {

    return(
        <div className='projects'>
            <div className='projects_title'>Projects</div>
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

export default projects;