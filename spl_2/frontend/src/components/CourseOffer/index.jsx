import { Routes, Route } from 'react-router-dom';
import CourseOfferList from './CourseOfferList';
import CourseOfferForm from './CourseOfferForm';
import EditCourseOffer from './EditCourseOffer';

const CourseOffer = () => {
  return (
    <Routes>
      <Route path="/" element={<CourseOfferList />} />
      <Route path="/new" element={<CourseOfferForm />} />
      <Route path="/:batchNo/edit" element={<EditCourseOffer />} />
    </Routes>
  );
};

export default CourseOffer;