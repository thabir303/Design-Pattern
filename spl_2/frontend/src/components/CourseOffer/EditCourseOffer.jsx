import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourseOffer = () => {
  const [courseNames, setCourseNames] = useState([]);
  const [newCourseNames, setNewCourseNames] = useState([]);
  const [error, setError] = useState(null);
  const { batchNo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourseOffer();
  }, []);

  const fetchCourseOffer = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/course-offers/${batchNo}`);
      setCourseNames(response.data.courseNames);
      setNewCourseNames(response.data.courseNames);
    } catch (error) {
      console.error('Error fetching course offer:', error);
      setError('Failed to fetch course offer');
    }
  };

  const handleCourseNameChange = (index, value) => {
    const updatedCourseNames = [...newCourseNames];
    updatedCourseNames[index] = value;
    setNewCourseNames(updatedCourseNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/course-offers/${batchNo}`, {
        courseNames: newCourseNames,
      });
      navigate('/course-offers');
    } catch (error) {
      console.error('Error updating course offer:', error);
      setError('Failed to update course offer');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Edit Course Offer</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="courseNames" className="block text-gray-700 font-bold mb-2">
            Course Names
          </label>
          {newCourseNames.map((courseName, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={courseName}
                onChange={(e) => handleCourseNameChange(index, e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCourseOffer;