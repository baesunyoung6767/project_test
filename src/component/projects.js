import './css/projects.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HorizontalScroll } from 'react-horizontal-scrolling-menu';

function projects() {
    return(
        <div className='projects'>
            <div className='projects_title'>Projects</div>
            <div className='projects_content'>
                <Card sx={{ maxWidth: 345 }} className='projects_card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="projects_card_content">
                        재가요양 서비스 대상자 스마트 약상자
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="projects_card_content">
                        재가요양 서비스 대상자들의 약 복용을 돕기 위해 진행된 프로젝트이다<br/>
                        잠금을 설치하여 약 복용 시간에만 해제가 되며 무게 판별을 통해 정확한 약 복용 여부를 판별한다
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} className='projects_card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="projects_card_content">
                        퍼스널 컬러 진단 웹 사이트
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="projects_card_content">
                        재가요양 서비스 대상자들의 약 복용을 돕기 위해 진행된 프로젝트이다<br/>
                        잠금을 설치하여 약 복용 시간에만 해제가 되며 무게 판별을 통해 정확한 약 복용 여부를 판별한다
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                
            </div>
        </div>
    );
}

export default projects;