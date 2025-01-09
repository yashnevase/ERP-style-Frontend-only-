import React, { useState } from 'react';

const PurchaseInvoice = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [poDetails, setPoDetails] = useState({
    poNo: '',
    rackNo: '',
    storeName: ''
  });
  const [poRecords, setPoRecords] = useState([]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

    // State to track which dropdown is open
  
  const [openDropdown, setOpenDropdown] = useState(null);

  
  // Toggle function to open/close dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (Object.values(poDetails).every(detail => detail.trim())) {
      setPoRecords([...poRecords, poDetails]);
      setPoDetails({
        poNo: '',
        rackNo: '',
        storeName: ''
      });
      toggleDrawer();
    }
  };

  const handleDelete = (index) => {
    const newRecords = poRecords.filter((_, i) => i !== index);
    setPoRecords(newRecords);
  };

  return (
    <div className="relative min-h-screen">
      <button
        className="absolute top-0 right-4 px-4 py-2 text-white bg-[#3c50e0] rounded-md hover:bg-blue-800 shadow-md"
        onClick={toggleDrawer}
      >
        + Add New PO
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-full max-h-full"> {/* the container */}
            <button
              className="absolute top-2 right-2 text-gray-500 font-mono hover:text-red-700" 
              onClick={toggleDrawer}
            >
              x    
            </button>
            <h2 className="btn-ghost text-xl text-[#64748b] mb-4 font-bold">Add PO Details</h2>

            {/* PO Information Inputs */}
            <select className="select select-bordered w-full max-w-xs bg-white text-gray-500 my-px">
              <option disabled selected>Please Select Supplier</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input
              type="text"
              name="poNo"
              value={poDetails.poNo}
              onChange={handleInputChange}
              placeholder="PO No"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="rackNo"
              value={poDetails.rackNo}
              onChange={handleInputChange}
              placeholder="Rack No"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="storeName"
              value={poDetails.storeName}
              onChange={handleInputChange}
              placeholder="Store Name"
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

      <div className="flex">
        <table className="w-full mt-12 text-sm text-left shadow-md">
          <thead className="text-xs text-[#edfcff] uppercase bg-[#1c2434]">
            <tr>
              <th className="px-6 py-3">PO No</th>
              <th className="px-6 py-3">Rack No</th>
              <th className="px-6 py-3">Store Name</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
          {poRecords.map((record, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900">{record.poNo}</td>
              <td className="px-6 py-4">{record.rackNo}</td>
              <td className="px-6 py-4">{record.storeName}</td>
              <td className="px-6 py-4">
                <div className="relative">
                  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    <a
                      href="#"
                      className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                      onClick={() => toggleDropdown(index)}
                    >
                      Edit
                    </a>

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
                      className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                      style={{ position: 'absolute', zIndex: 1 }}
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Edit Record
                        </a>
                        <form method="POST" action="#">
                          <button
                            type="submit"
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                            role="menuitem"
                            onClick={() => handleDelete(index)} // Adjust this to your delete logic
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete Record
                          </button>
                        </form>
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
    </div>
  );
};

export default PurchaseInvoice;
