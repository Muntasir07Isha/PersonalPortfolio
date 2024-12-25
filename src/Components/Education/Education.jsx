import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './educationModule.css';
import { FaUserGraduate } from 'react-icons/fa'; 
import { FaBriefcase } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa';

const timelineData = [


  {
    date: '10/2020 - 04/2022',
    title: 'Western Sydney University',
    subtitle: 'Diploma of Information Technology',
    location: 'Sydney Australia',
    description: 'Learned IT and Software Fundamentals',
    icon: <FaUserGraduate />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' } 
  },

  {
    date: '06/2022 - 3/2024',
    title: 'SISTC (Sydney International School of Techonolgy and Commerce)',
    subtitle: 'Bachelors of Information Technology',
    location: 'Sydney, Australia',
    description: 'Learned Software Development, Cloud Computing, and other Technologies.',
    icon: <FaUserGraduate />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
  },



  {
    date: '02/2023 - 10/2023',
    title: 'Design Away',
    subtitle: 'Technical Assistant',
    location: 'Sydney, Australia',
    description: ' Creating Websites and Web applications using React and JavaScript Maintaining and updating client websites.          ',
    icon: <FaBriefcase/>,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
  },




  {
    date: '7/2023 - 10/2023 ',
    title: 'Front End Developer',
    subtitle: 'Freelancer',
    location: 'Sydney, Australia',
    description: 'Mainly working as a front-end developer, designing beautiful and highly responsive and functional businesswebsites for clients using Html, CSS and JavaScript and Bootstrap. Developing and deploying highly responsive websites.',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }
  },


  {
    date: '6/2024 - Present',
    title: 'Junior Software Developer',
    subtitle: 'HaemaGlobal PTY LTD',
    location: 'Woolloomooloo, New South Wales, Australia ',
    description: 'I am currently working as a Junior Software Developer, specializing in building tailored web applications for medical clients at HaemaGlobal PTY LTD. In this role, I focus on developing intuitive and secure web solutions that meet the unique needs of our medical clients.',
    icon: <FaBriefcase />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' } 
  },


];




const Education = () => {
  return (
    <div className='timeline-header'>
      <h2>My Journey</h2>
      <div>
      <VerticalTimeline>
        {timelineData.map((item,index)=>(
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={item.iconStyle}
            icon={item.icon}
           
          >
            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
            <p>{item.location}</p>
          </VerticalTimelineElement>
        ))}
 



<VerticalTimelineElement
  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  icon={<FaSpinner />}
  className="end-timeline-element"
>
  <h3 className='vertical-timeline-element-title'>I Believe in Continious Learning</h3>
  <p>I am continiously pushing myself to Learn more Tech Stacks and improve myself. </p>
</VerticalTimelineElement>



<VerticalTimelineElement
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
          icon={<FaFlagCheckered />}
          className="closing-timeline-element"
        />
</VerticalTimeline>
      </div>
      
    </div>
  );
};

export default Education;
