// import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Layout from './Shared/Layout';

function Root() {
  return (
    <Layout>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/course-offers"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                  >
                    Course Offer
                  </NavLink>
                  <NavLink
                    to="/batches"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                  >
                    Batch Create
                  </NavLink>
                  <NavLink
                    to="/class-slots"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                  >
                    Class Slots
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Layout>
  );
}

export default Root;