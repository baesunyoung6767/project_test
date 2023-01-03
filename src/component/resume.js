import './css/resume.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const resume_items = [
    [1,"2019","동의대학교 산업융합시스템공학부 입학","학과 취업동아리 활동","전공 멘토링 활동","교내 도서관 근로","2019 AI 아이디어 경진대회 장려상"],
    [2,"2020", "컴퓨터공학과 전과", "컴퓨터능력활용평가 1급", "HSK 4급", "모각코 스터디 활동 수료"],
    [3,"2021", "BOS 교내 진로 동아리 멘티 활동", "학점 4점대 달성", "전공 학습 증진 프로그램 참여", "파란사다리 온라인 어학연수"],
    [4,"2022", "인공지능 그랜드 ICT 연구센터 근로", "교내 알고리즘 동아리", "인공지능 전문인력 양성과정 수료","대외 동아리 PROJECT 활동", "BOB 취업 동아리 활동", "BOS 진로 동아리 멘토"],
    [5,"2023", "모각코 웹 스터디", "정보처리기사 자격증"]
];

function useResume() {

    const get_content = (items) => {
        const result = [];
        for (let i = 2; i<items.length; i++) {
            result.push(<div key={i} style={{lineHeight:"35px"}}>{items[i]}</div>)
        }
        return result;
    }

    const grid_item = resume_items.map((items)=>{
        return (
            <div style={{borderBottom:"solid 1px gray", margin:"0px 100px 0px 100px"}}>
                <Box sx={{ flexGrow: 1 }} className='resum_content'>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={10} className='resume_item_year'>
                        <div style={{marginRight:'25px'}}>{items[1]}</div>
                        </Grid>
                        <Grid item xs={6}>
                           {get_content(items)}
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    })

    return(
        <div className='resume'>
            <div className='resume_title'>Resume</div>
            {grid_item}
        </div>
    );
}

export default useResume;