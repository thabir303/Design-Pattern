import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BatchList = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/batches');
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  const handleEdit = (batchNo) => {
    navigate(`/batches/${batchNo}/edit`);
    console.log('Edit:', batchNo);
  };

  const handleDelete = async (batchNo) => {
    try {
      await axios.delete(`http://localhost:5000/api/batches/${batchNo}`);
      fetchBatches(); // Refresh the list after successful deletion
    } catch (error) {
      console.error('Error deleting batch:', error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Batches</h1>
        <Link
          to="/batches/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Batch No</th>
              <th className="px-4 py-2 border">Coordinator</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(batches) &&
              batches.map((batch) => (
                <tr key={batch._id} className="border-b">
                  <td className="px-4 py-2 border">{batch.batchNo}</td>
                  <td className="px-4 py-2 border">{batch.coordinatorName}</td>
                  <td className="px-4 py-2 border">{batch.isActive ? 'Active' : 'Inactive'}</td>
                  <td className="px-4 py-2 border whitespace-nowrap">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2 md:mr-4"
                      onClick={() => handleEdit(batch.batchNo)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(batch.batchNo)}
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

export default BatchList;
