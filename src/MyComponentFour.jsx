import picture1 from "./assets/airWay.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import AnimateScroll from './AnimateScroll.jsx'

function MyComponentFour(){

    return(
        <div >
            <div className='imgText1'>
                <AnimateScroll type='slide-right'>
                <span className='t4'>Get to know more</span> <br />
                </AnimateScroll>
                <AnimateScroll type='slide-left'>
                <span className='t5'>About Me</span>
                </AnimateScroll>
            </div>
            <div className="imgText2">
                <img src={picture1} className="img2" />
                <AnimateScroll type='fade-up'>
                <div className="b1">
                    <span className="ic1"><FontAwesomeIcon icon={faAward} /> </span> <br />
                    <span className="t7">Experience</span> <br />
                    <span className="t8">2+ years</span> <br />
                    <span className="t8">FullStack Developer</span> <br />
                    <span className="t8">Web Development</span>
                </div>
                </AnimateScroll>
                <AnimateScroll type='fade-up'>
                <div className="b1">
                    <span className="ic1"><FontAwesomeIcon icon={faSchool} /></span> <br />
                    <span className="t7">Education</span> <br />
                    <span className="t8">University Of Ghana</span> <br />
                    <span className="t8">B.S.c (I.T)</span> <br />
                    <span className="t8">Software Engineering</span>
                </div>
                </AnimateScroll>
            </div>
            <div className='imgText1'  id="experience">
                <AnimateScroll type='slide-right'>
                <span className='t4'>Explore my</span> <br />
                </AnimateScroll>
                <AnimateScroll type='slide-left'>
                <span className='t5'>Experience</span>
                </AnimateScroll>
            </div>
            <div className="imgText3">
                <AnimateScroll type='fade-up'>
                <div className="b2">
                    <p className="t9">Frontend Development</p>
                    <li>HTML <br /><span className="t8">Experienced</span></li>
                    <li>CSS <br /><span className="t8">Experienced</span></li>
                    <li>JavaScrip <br /><span className="t8">Experienced</span></li>
                    <li>React.js <br /><span className="t8">Experienced</span></li>
                    <li>TypeScrip <br /><span className="t8">Basic</span></li>
                    <li>UI/UX <br /><span className="t8">Moderate</span></li>
                </div>
                </AnimateScroll>
                <AnimateScroll type='fade-up'>
                <div className="b2">
                    <p className="t9">Backend Development</p>
                    <li>Node JS <br /><span className="t8">Expeirienced</span></li>
                    <li>Express JS <br /><span className="t8">Expeirienced</span></li>
                    <li>REST APIs <br /><span className="t8">Expeirienced</span></li>
                    <li>SQL <br /><span className="t8">Experienced</span></li>
                    <li>MongoDB <br /><span className="t8">Expeirienced</span></li>
                    <li>JWT Authentication <br /><span className="t8">Expeirienced</span></li>

                </div>
                </AnimateScroll>
            </div>
        </div>
    );
}
export default MyComponentFour
