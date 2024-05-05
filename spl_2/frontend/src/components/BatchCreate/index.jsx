import { Routes, Route, Link } from 'react-router-dom';
import BatchList from './BatchList';
import BatchForm from './BatchForm';
import EditBatchForm from './EditBatchForm';

const Batch = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/batches"></Link>
          </li>
          <li>
            <Link to="/class-slots">
                <button>Class Slots</button> <br /></Link> {/* Add the new link */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BatchList />} />
        <Route path="/new" element={<BatchForm />} />
        <Route path="/:batchId/edit" element={<EditBatchForm />} />
      </Routes>
    </div>
  );
};

export default Batch;