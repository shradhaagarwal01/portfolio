import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaStar} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {MdSchool} from 'react-icons/md';



class Experience extends Component {
  render(){
  return (
    <div className="experience">
      <h2>WORK EXPERIENCE AND EDUCATION</h2>
      <p>My previous jobs and my qualifications.</p>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e6f1ff', color: '#a2aabc' }}
          date="08/2020 - 12/2020"
          iconStyle={{ background: '#233554', color: '#fff' }}
          icon={<MdWork/>}
        >
          <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">Coding Ninjas, India</h4>
          <p>
          Taking doubt sessions, Debugging codes<br/>
          Helping students in their assignments & various projects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e6f1ff', color: '#a2aabc' }}
          contentArrowStyle={{ borderRight: '7px solid  #e6f1ff' }}
          date="07/2019 - 07/2022"
          iconStyle={{ background: '#233554', color: '#fff' }}
          icon={<MdSchool/>}
        >
          <h3 className="vertical-timeline-element-title">Undergrad Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Jaypee University of Information Technology, Solan</h4>
          <p>
            Persuing B.Tech in Computer Science and Engineering.<br/>
            CGPA - 8.4
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e6f1ff', color: '#a2aabc' }}
          contentArrowStyle={{ borderRight: '7px solid  #e6f1ff' }}
          date="07/2018 - 07/2019"
          iconStyle={{ background: '#233554', color: '#fff' }}
          icon={<MdSchool/>}
        >
          <h3 className="vertical-timeline-element-title">Undergrad Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Jaypee University, Anoopshahr</h4>
          <p>
            B.Tech in Computer Science and Engineering, took lateral admission in JUIT, Solan in 2nd year.<br/>
            CGPA - 8.1
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e6f1ff', color: '#a2aabc' }}
          date="05/2016 - 05/2017"
          iconStyle={{ background: '#233554', color: '#fff' }}
          icon={<MdSchool/>}
        >
          <h3 className="vertical-timeline-element-title">XII Class</h3>
          <h4 className="vertical-timeline-element-subtitle">Gulab Rai Montessori Sr. Sec. School, Bareilly</h4>
          <p>
          Physics, Chemistry, Maths<br/>
          Percentage - 85.2
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#233554', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
  }
}

export default Experience;