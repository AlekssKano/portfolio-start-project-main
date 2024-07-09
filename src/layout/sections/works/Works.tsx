import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./work/tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImage from './../../../assets/images/proj-1.png'
import timerImage from './../../../assets/images/proj-2.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'


const tabsItems: Array<{status:TabsStatusType, title: string }>= [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]
const worksData = [
    {
        title: "Social Network",
        src: socialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et " +
            "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        type: "spa"
    },
    {
        title: "Timer",
        src: timerImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore " +
            "magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        type: "react"
    }
]
export const Works = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
let filteredWorks = worksData

    if(currentFilterStatus === "landing"){
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if(currentFilterStatus === "react"){
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if(currentFilterStatus === "spa"){
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType){
        setCurrentFilterStatus(value)
    }
    return (
        <S.Works>
           <Container>
               <SectionTitle>My Works</SectionTitle>
               <TabMenu tabsItems={tabsItems}
                        changeFilterStatus={changeFilterStatus}
                        currentFilterStatus={currentFilterStatus}/>
               <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={'wrap'}>
                   {filteredWorks.map((w) => {
                       return <Work title={w.title}
                                    src={w.src}
                                    text={w.text}/>
               })}

               </FlexWrapper>
           </Container>
        </S.Works>
    );
};
