import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CourseOfferList = () => {
  const [courseOffers, setCourseOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseOffers();
  }, []);

  const fetchCourseOffers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/course-offers');
      setCourseOffers(response.data);
    } catch (error) {
      console.error('Error fetching course offers:', error);
    }
  };

  const handleEdit = (semesterName) => {
    navigate(`/course-offers/${semesterName}/edit`);
  };

  const handleDelete = async (semesterName) => {
    try {
      await axios.delete(`http://localhost:5000/api/course-offers/${semesterName}`);
      fetchCourseOffers();
    } catch (error) {
      console.error('Error deleting course offer:', error);
    }
  };

  return (
    <div className='mt-8'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Course Offers</h1>
          <Link to="/course-offers/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New
          </Link>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Courses</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courseOffers) &&
              courseOffers.map((offer) => (
                <tr key={offer._id} className="border-b">
                  <td className="px-4 py-2">{offer.semesterName}</td>
                  <td className="px-4 py-2">
                    {offer.courseNames.map((course) => (
                      <span key={course}>{course}, </span>
                    ))}
                  </td>
                  <td className="px-4 py-2">Active</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2 md:mr-4"
                      onClick={() => handleEdit(offer.semesterName)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(offer.semesterName)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseOfferList;