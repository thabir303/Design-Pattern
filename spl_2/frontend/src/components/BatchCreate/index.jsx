import { Routes, Route, Link, useLocation } from 'react-router-dom';
import BatchList from './BatchList';
import BatchForm from './BatchForm';
import EditBatchForm from './EditBatchForm';

const Batch = () => {
  const location = useLocation();
  const isBatchesPath = location.pathname === '/batches';

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/batches"></Link>
          </li>
          {isBatchesPath && (
            <li>
              <Link to="/class-slots">
                <button></button>
                <br />
              </Link>
            </li>
          )}
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