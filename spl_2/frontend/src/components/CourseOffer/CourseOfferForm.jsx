import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseOfferForm = () => {
  const [semesterName, setSemesterName] = useState('');
  const [courseNames, setCourseNames] = useState([]);
  const [newCourseName, setNewCourseName] = useState('');
  const [semesters, setSemesters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSemesters();
  }, []);

  const fetchSemesters = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/semesters');
      setSemesters(response.data);
    } catch (error) {
      console.error('Error fetching semesters:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/course-offers', {
        semesterName,
        courseNames,
      });
      console.log('Course offer created:', response.data);
      navigate('/course-offers');
    } catch (error) {
      console.error('Error creating course offer:', error);
    }
  };

  const handleAddCourse = () => {
    if (newCourseName.trim()) {
      setCourseNames([...courseNames, newCourseName.trim()]);
      setNewCourseName('');
    }
  };

  const handleRemoveCourse = (index) => {
    const updatedCourseNames = [...courseNames];
    updatedCourseNames.splice(index, 1);
    setCourseNames(updatedCourseNames);
  };

  return (
    <div className='mt-8'>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Create Course Offer</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="semesterName" className="block text-gray-700 font-bold mb-2">
              Semester Name
            </label>
            <select
              id="semesterName"
              value={semesterName}
              onChange={(e) => setSemesterName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Semester</option>
              {semesters.map((semester) => (
                <option key={semester._id} value={semester.semesterName}>
                  {semester.semesterName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="courseNames" className="block text-gray-700 font-bold mb-2">
              Course Names
            </label>
            <div className="flex">
              <input
                type="text"
                id="newCourseName"
                value={newCourseName}
                onChange={(e) => setNewCourseName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter a course name"
              />
              <button
                type="button"
                onClick={handleAddCourse}
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
            <ul className="mt-2">
              {courseNames.map((course, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="mr-2">{course}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCourse(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Course Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseOfferForm;