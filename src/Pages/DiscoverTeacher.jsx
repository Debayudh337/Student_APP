import React from 'react'
import NavTop from '../Components/NavTop'
import NavBottom from '../Components/NavBottom'
import SearchInput from '../Components/SearchInput'
import SliderFilter from '../Components/SliderFilter.jsx'
import PageHeader from '../Components/PageHeader'
import TeacherProfile from '../Components/TeacherProfile'
import './DiscoverTeacher.css'

function DiscoverTeacher() {
  const [filterOpen, setFilterOpen] = React.useState(false);

  return (
    <div className="discover-teacher">
      <NavTop />
      <PageHeader heading="Discover Teacher" />
      <SliderFilter className={filterOpen ? "slider-filter open" : "slider-filter closed"} />
      <div className="center-search-container">
        <SearchInput /> {/* Horizontally centered */}
      </div>
      <div className="discover-teacher-content">
        <div className="teacher-profiles-container">
          <TeacherProfile teacherId={1} />
          <TeacherProfile teacherId={2} />
          <TeacherProfile teacherId={3} />
          <TeacherProfile teacherId={4} />  
          <TeacherProfile teacherId={5} />
          <TeacherProfile teacherId={6} />
          <TeacherProfile teacherId={7} />
          <TeacherProfile teacherId={8} />
          {/* Add more TeacherProfiles as needed */}
        </div>
      </div>
      <NavBottom />
    </div>
  );
}




export default DiscoverTeacher