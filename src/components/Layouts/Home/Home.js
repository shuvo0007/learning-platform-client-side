import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Cards from './Cards'

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className='grid grid-cols-3 gap-4 px-96 pt-16'>
        {
          allCourses.map(course => <Cards key={course.id} course={course}></Cards>)
        }
      </div>
    </div>
  );
};

export default Home;