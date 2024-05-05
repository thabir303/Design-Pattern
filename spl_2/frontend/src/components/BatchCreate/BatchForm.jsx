import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BatchForm = () => {
  const [batchNo, setBatchNo] = useState("");
  const [coordinatorId, setCoordinatorId] = useState("");
  const [coordinatorName, setCoordinatorName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/batches", {
        batchNo,
        coordinatorId,
        coordinatorName,
      });
      if (response.data.error) {
        setError(response.data.error);
      } else {
        console.log("Batch created:", response.data);
        navigate("/batches");
      }
    } catch (error) {
      console.error("Error creating batch:", error);
      setError("Failed to create batch");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center h-full">Create Batch</h1>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="batchNo" className="block text-gray-700 font-bold mb-2">
            Batch No
          </label>
          <input
            type="text"
            id="batchNo"
            value={batchNo}
            onChange={(e) => setBatchNo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Batch No"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coordinatorId" className="block text-gray-700 font-bold mb-2">
            Coordinator ID
          </label>
          <input
            type="text"
            id="coordinatorId"
            value={coordinatorId}
            onChange={(e) => setCoordinatorId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Coordinator ID"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coordinatorName" className="block text-gray-700 font-bold mb-2">
            Coordinator Name
          </label>
          <input
            type="text"
            id="coordinatorName"
            value={coordinatorName}
            onChange={(e) => setCoordinatorName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Coordinator Name"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
        >
          Create Batch
        </button>
      </form>
    </div>
  );
};

export default BatchForm;
