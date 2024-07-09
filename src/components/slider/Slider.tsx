import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles'

type SlidePropsType = {
    text: string,
    userName: string
}
const Slide = () => {
    return (
        <S.Slide>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.</S.Text>
            <S.Name>@ivan ivanow</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} userName={""}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit."} userName={""}/>,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit."} userName={""}/>

];

export const Slider = () => (
   <S.Slider>
       <AliceCarousel
           mouseTracking
           items={items}
       />
   </S.Slider>

);



//
//
// export const Slider: React.FC = () => {
//     return (
//<S.Slider>
//<FlexWrapper>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={'active'}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };
