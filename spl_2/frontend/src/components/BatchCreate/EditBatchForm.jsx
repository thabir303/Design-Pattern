import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBatchForm = () => {
  const [batchNo, setBatchNo] = useState("");
  const [coordinatorId, setCoordinatorId] = useState("");
  const [coordinatorName, setCoordinatorName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { batchId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBatch();
  }, []);

  const fetchBatch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/batches/${batchId}`
      );
      const { batchNo, coordinatorId, coordinatorName, isActive } =
        response.data;
      setBatchNo(batchNo);
      setCoordinatorId(coordinatorId);
      setCoordinatorName(coordinatorName);
      setIsActive(isActive);
    } catch (error) {
      console.error("Error fetching batch:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/batches/${batchId}`, {
        batchNo,
        coordinatorId,
        coordinatorName,
        isActive,
      });
      navigate("/batches");
    } catch (error) {
      console.error("Error updating batch:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Edit Batch</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="coordinatorId" className="block font-bold mb-2">
            Coordinator ID
          </label>
          <input
            type="text"
            id="coordinatorId"
            value={coordinatorId}
            onChange={(e) => setCoordinatorId(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coordinatorName" className="block font-bold mb-2">
            Coordinator Name
          </label>
          <input
            type="text"
            id="coordinatorName"
            value={coordinatorName}
            onChange={(e) => setCoordinatorName(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isActive" className="block font-bold mb-2">
            Status
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="mr-2"
            />
            <span>{isActive ? "Active" : "Inactive"}</span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditBatchForm;