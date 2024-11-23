import React from 'react'
import NavTop from '../Components/NavTop'
import NavBottom from '../Components/NavBottom'
import SearchInput from '../Components/SearchInput'
import SliderFilter from '../Components/SliderFilter.jsx'
import PageHeader from '../Components/PageHeader'
import './DiscoverTeacher.css'

function DiscoverTeacher() {
  return (
    <div className="discover-teacher">
      <NavTop />
      <PageHeader heading="Discover Teacher" />
      <SliderFilter />
      <div className="center-search-container">
          <SearchInput /> {/* This will be horizontally centered */}
        </div>
      <NavBottom />
    </div>
  )
}

export default DiscoverTeacher