import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassSlotManager = () => {
  const [classSlots, setClassSlots] = useState([]);
  const [newClassSlot, setNewClassSlot] = useState({
    batchNo: '',
    day: '',
    startTime: '',
    endTime: '',
    courseId: '',
    teacherId: '',
    roomNo: '',
  });
  const [editClassSlot, setEditClassSlot] = useState(null);
  const [error, setError] = useState(null);
  const [showViewClassSlots, setShowViewClassSlots] = useState(false);

  useEffect(() => {
    fetchClassSlots();
  }, []);

  const fetchClassSlots = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/class-slots');
      setClassSlots(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching class slots:', error);
      setError('Failed to fetch class slots');
    }
  };

  const handleInputChange = (e) => {
    setNewClassSlot({ ...newClassSlot, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editClassSlot) {
        await axios.put(`http://localhost:5000/api/class-slots/${editClassSlot.batchNo}`, newClassSlot);
        setEditClassSlot(null);
      } else {
        await axios.post('http://localhost:5000/api/class-slots', newClassSlot);
        setShowViewClassSlots(true);
      }
      setNewClassSlot({
        batchNo: '',
        day: '',
        startTime: '',
        endTime: '',
        courseId: '',
        teacherId: '',
        roomNo: '',
      });
      fetchClassSlots();
    } catch (error) {
      console.error('Error creating/updating class slot:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Failed to create/update class slot');
      }
    }
  };

  const handleEdit = (classSlot) => {
    setEditClassSlot(classSlot);
    setNewClassSlot({
      batchNo: classSlot.batchNo,
      day: classSlot.day,
      startTime: classSlot.startTime,
      endTime: classSlot.endTime,
      courseId: classSlot.courseId,
      teacherId: classSlot.teacherId,
      roomNo: classSlot.roomNo,
    });
  };

  const handleDelete = async (batchNo) => {
    try {
      await axios.delete(`http://localhost:5000/api/class-slots/${batchNo}`);
      fetchClassSlots();
    } catch (error) {
      console.error('Error deleting class slot:', error);
      setError('Failed to delete class slot');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Class Slots</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {showViewClassSlots ? (
        <div>
          <h3 className="text-xl font-bold mb-4">Recently Created Class Slot</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Batch No</th>
                <th className="px-4 py-2 border">Day</th>
                <th className="px-4 py-2 border">Start Time</th>
                <th className="px-4 py-2 border">End Time</th>
                <th className="px-4 py-2 border">Course ID</th>
                <th className="px-4 py-2 border">Teacher ID</th>
                <th className="px-4 py-2 border">Room No</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="px-4 py-2 border">{newClassSlot.batchNo}</td>
                <td className="px-4 py-2 border">{newClassSlot.day}</td>
                <td className="px-4 py-2 border">{newClassSlot.startTime}</td>
                <td className="px-4 py-2 border">{newClassSlot.endTime}</td>
                <td className="px-4 py-2 border">{newClassSlot.courseId}</td>
                <td className="px-4 py-2 border">{newClassSlot.teacherId}</td>
                <td className="px-4 py-2 border">{newClassSlot.roomNo}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to="/class-slots"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setShowViewClassSlots(false)}
          >
            Back
          </Link>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="batchNo" className="block text-gray-700 font-bold mb-2">
                Batch No
              </label>
              <input
                type="text"
                name="batchNo"
                id="batchNo"
                value={newClassSlot.batchNo}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
                Day
              </label>
              <input
                type="text"
                name="day"
                id="day"
                value={newClassSlot.day}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="startTime" className="block text-gray-700 font-bold mb-2">
                Start Time
              </label>
              <input
                type="text"
                name="startTime"
                id="startTime"
                value={newClassSlot.startTime}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="endTime" className="block text-gray-700 font-bold mb-2">
                End Time
              </label>
              <input
                type="text"
                name="endTime"
                id="endTime"
                value={newClassSlot.endTime}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="courseId" className="block text-gray-700 font-bold mb-2">
              Course ID
              </label>
              <input
                type="text"
                name="courseId"
                id="courseId"
                value={newClassSlot.courseId}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="teacherId" className="block text-gray-700 font-bold mb-2">
                Teacher ID
              </label>
              <input
                type="text"
                name="teacherId"
                id="teacherId"
                value={newClassSlot.teacherId}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="roomNo" className="block text-gray-700 font-bold mb-2">
                Room No
              </label>
              <input
                type="text"
                name="roomNo"
                id="roomNo"
                value={newClassSlot.roomNo}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-400 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {editClassSlot ? 'Update' : 'Create'}
            </button>
          </form>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Batch No</th>
                <th className="px-4 py-2 border">Day</th>
                <th className="px-4 py-2 border">Start Time</th>
                <th className="px-4 py-2 border">End Time</th>
                <th className="px-4 py-2 border">Course ID</th>
                <th className="px-4 py-2 border">Teacher ID</th>
                <th className="px-4 py-2 border">Room No</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classSlots.map((classSlot) => (
                <tr key={classSlot.batchNo} className="border">
                  <td className="px-4 py-2 border">{classSlot.batchNo}</td>
                  <td className="px-4 py-2 border">{classSlot.day}</td>
                  <td className="px-4 py-2 border">{classSlot.startTime}</td>
                  <td className="px-4 py-2 border">{classSlot.endTime}</td>
                  <td className="px-4 py-2 border">{classSlot.courseId}</td>
                  <td className="px-4 py-2 border">{classSlot.teacherId}</td>
                  <td className="px-4 py-2 border">{classSlot.roomNo}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleEdit(classSlot)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(classSlot.batchNo)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ClassSlotManager;