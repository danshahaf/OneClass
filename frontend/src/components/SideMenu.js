import React, { useState } from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faListCheck, faBriefcase, faChess } from '@fortawesome/free-solid-svg-icons';
import { faBook, faEnvelope, faUser, faCog, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Resizable } from 'react-resizable';


class pageObject {
  pageName;
  constructor(pageName, icon) {
    this.pageName = pageName;
    this.icon = icon;
  }
}

const SideMenu = ({ changePage }) => {
  const [currentPage, setCurrentPage] = useState('Classes');

  const classesPage = new pageObject('Classes', faBook);
  const opportuitiesPage = new pageObject('Opportuities', faBriefcase);
  const extracurricularsPage = new pageObject('Extracurriculars', faChess);
  const eventsPage = new pageObject('Events', faChess);
  const feedPage = new pageObject('Feed', faUser);
  const dispatchPage = new pageObject('Dispatch', faEnvelope);
  const calendarPage = new pageObject('Calendar', faCalendar);
  const tasksPage = new pageObject('Tasks', faListCheck);
  const profilePage = new pageObject('Profile', faUser);
  const settingsPage = new pageObject('Settings', faCog);
  const gradesPage = new pageObject('Grades', faCog);
  const pageList = [
    classesPage, opportuitiesPage, extracurricularsPage, eventsPage, feedPage, dispatchPage, calendarPage, tasksPage,
    profilePage, settingsPage, gradesPage
  ]
  

  return (
      <div className='side-menu'>
        {/* Add your side menu content here */}
        <ul className="menu-options">
          {pageList.map((_object, index) => (
            <li key={index} >
              <a href="#" onClick={() => changePage(_object.pageName)}>
                <FontAwesomeIcon icon={_object.icon} />
                {_object.pageName}
              </a>
            </li>
            ))}
        </ul>
      </div>
  );
};

export default SideMenu;
