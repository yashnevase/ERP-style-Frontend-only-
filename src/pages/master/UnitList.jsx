import React, { useState, useEffect } from 'react';
import { supabase } from "/src/createClient";

const UnitList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [UnitName, setUnitName] = useState('');
  const [units, setUnits] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track which unit is being edited
  const [editName, setEditName] = useState(''); // Store new unit name for editing

  useEffect(() => {
    fetchUnits().then((data) => setUnits(data));
  }, []);


  const fetchUnits = async () => {
    try {
      const { data } = await supabase.from('UnitList').select('*');
      return data;
    } catch (error) {
      console.error('Error fetching units:', error);
      return [];
    }
  };


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUnitName(e.target.value);
  };

  const handleSubmit = async () => {
    if (UnitName.trim()) {
      const { error } = await supabase
        .from('UnitList')
        .insert([{ Name: UnitName }]);

      if (error) {
        console.error('Error adding unit:', error);
      } else {
        fetchUnits();  // Refresh list after adding
        setUnitName('');
        toggleDrawer();
      }
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle dropdown open/close
  };

  const handleDelete = async (UnitName) => {
    try {
      const { error } = await supabase
        .from('UnitList')
        .delete()
        .eq('Name', UnitName);  // Use unitName instead of index

      if (error) {
        console.error('Error deleting record:', error);
      } else {
        fetchUnits();  // Refresh list after deletion
        setDeleteSuccess(true);
      }
    } catch (err) {
      console.error('Error during deletion:', err);
    }

    setTimeout(() => setDeleteSuccess(false), 3000);  // Hide delete success after 3 seconds
  };

  const handleEditSubmit = async (UnitName, newUnitName) => {
    try {
      const { error } = await supabase
        .from('UnitList')
        .update({ Name: newUnitName })  // Update the Name field
        .eq('Name', UnitName);

      if (error) {
        console.error('Error updating record:', error);
      } else {
        fetchUnits();  // Refresh the list after update
        setEditIndex(null);  // Hide edit input after submission
      }
    } catch (err) {
      console.error('Error during update:', err);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          className=" relative  px-4 py-2 text-white bg-[#3c50e0] rounded-md hover:bg-blue-800 shadow-md"
          onClick={toggleDrawer}
        >
          + Create New
        </button>
      </div>

      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center badge-ghost bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-700"
              onClick={toggleDrawer}
              aria-label="Close drawer"
            >
              x
            </button>
            <h2 className="text-xl text-[#64748b] mb-4 font-bold">Unit Name</h2>
            <input
              type="text"
              value={UnitName}
              onChange={handleInputChange}
              placeholder="Enter Unit name"
              className="border border-gray-300 rounded p-2 mb-4 w-full text-gray-600"
            />
            <button
              className="w-full px-4 py-2 text-white bg-[#3c50e0] rounded hover:bg-blue-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="flex mt-12">
        <table className="w-full text-sm text-left shadow-md">
          <thead className="text-xs text-[#edfcff] uppercase bg-[#1c2434]">
            <tr>
              <th scope="col" className="px-6 py-3">Unit`s</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit, index) => (
              <tr key={unit.id} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900 ">
                  {editIndex === index ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Enter new unit name"
                      className="border p-1 bg-white"
                    />
                  ) : (
                    unit.Name
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                      {editIndex === index ? (
                        <button
                          className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleEditSubmit(unit.Name, editName)}
                        >
                          Save
                        </button>
                      ) : (
                        <a
                          href="#"
                          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                          onClick={() => {
                            
                            setEditIndex(index);
                            setEditName(unit.Name); // Set current name in input
                          }}
                        >
                          Edit
                        </a>
                      )}

                      <button
                        className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        onClick={() => toggleDropdown(index)}
                      >
                        <span className="sr-only">Menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {openDropdown === index && (
                      <div
                        className="absolute  z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                      >
                        <div className="p-2">
                          <button
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                            role="menuitem"
                            onClick={() => handleDelete(unit.Name)}  // Pass the correct unit Name for deletion
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 
                                1v3M4 7h16"
                              />
                            </svg>
                            Delete Record
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show a delete success message */}
      {deleteSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
          Unit successfully deleted!
        </div>
      )}
    </div>
  );
};

export default UnitList;