import React from 'react'
import Banner from '../../Banner/Banner'
import Catergory from '../../Catergory/Catergory'
import CoursesBody from '../../CoursesBody/CoursesBody'
import Footer from '../../Footer/Footer'
export default function Content() {
  return (
    <div className="content__type container" >
      <Banner />
      <Catergory />
      <CoursesBody />
    </div>
  )
}
