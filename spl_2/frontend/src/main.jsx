import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root.jsx';
import CourseOffer from './components/CourseOffer/index.jsx';
import CourseOfferForm from './components/CourseOffer/CourseOfferForm.jsx';
import EditCourseOffer from './components/CourseOffer/EditCourseOffer.jsx'; // Import the new component
import Batch from './components/BatchCreate/index.jsx';
import ClassSlotManager from './components/BatchCreate/ClassSlotManager.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'course-offers',
        element: <CourseOffer />,
        children: [
          { path: 'new', element: <CourseOfferForm />, },
          { path: ':batchNo/edit', element: <EditCourseOffer />, }, // Add the new route
        ],
      },
      { path: 'batches/*', element: <Batch />, },
      { path: 'class-slots', element: <ClassSlotManager />, },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);