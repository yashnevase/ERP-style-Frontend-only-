import React, { useState } from 'react';

const PartyList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [partyDetails, setPartyDetails] = useState({
    partyName: '',
    partyType: '',
    contactPerson: '',
    mobileNo: '',
    emailId: '',
    gstNo: '',
    panNo: ''
  });
  const [partyRecords, setPartyRecords] = useState([]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPartyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (Object.values(partyDetails).every(detail => detail.trim())) {
      setPartyRecords([...partyRecords, partyDetails]);
      setPartyDetails({
        partyName: '',
        partyType: '',
        contactPerson: '',
        mobileNo: '',
        emailId: '',
        gstNo: '',
        panNo: ''
      });
      toggleDrawer();
    }
  };

  const handleDelete = (index) => {
    const newRecords = partyRecords.filter((_, i) => i !== index);
    setPartyRecords(newRecords);
  };

  return (
    <div className="relative min-h-screen">
      <button
        className="absolute top-0 right-4 px-4 py-2 text-white bg-[#3c50e0] rounded-md hover:bg-blue-800 shadow-md"
        onClick={toggleDrawer}
      >
        + Add New Party
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative w-11/12 max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 font-mono hover:text-red-700"
              onClick={toggleDrawer}
            >
              x
            </button>
            <h2 className="btn-ghost text-xl text-[#64748b] mb-4 font-bold">Add Party Details</h2>

            {/* Party Information Inputs */}
            <input
              type="text"
              name="partyName"
              value={partyDetails.partyName}
              onChange={handleInputChange}
              placeholder="Party Name"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="partyType"
              value={partyDetails.partyType}
              onChange={handleInputChange}
              placeholder="Party Type"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="contactPerson"
              value={partyDetails.contactPerson}
              onChange={handleInputChange}
              placeholder="Contact Person"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="mobileNo"
              value={partyDetails.mobileNo}
              onChange={handleInputChange}
              placeholder="Mobile No"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="email"
              name="emailId"
              value={partyDetails.emailId}
              onChange={handleInputChange}
              placeholder="E-mail Id"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="gstNo"
              value={partyDetails.gstNo}
              onChange={handleInputChange}
              placeholder="GST No"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="panNo"
              value={partyDetails.panNo}
              onChange={handleInputChange}
              placeholder="PAN No"
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
              <th className="px-6 py-3">Party Name</th>
              <th className="px-6 py-3">Party Type</th>
              <th className="px-6 py-3">Contact Person</th>
              <th className="px-6 py-3">Mobile No</th>
              <th className="px-6 py-3">E-mail Id</th>
              <th className="px-6 py-3">GST No</th>
              <th className="px-6 py-3">PAN No</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {partyRecords.map((record, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">{record.partyName}</td>
                <td className="px-6 py-4">{record.partyType}</td>
                <td className="px-6 py-4">{record.contactPerson}</td>
                <td className="px-6 py-4">{record.mobileNo}</td>
                <td className="px-6 py-4">{record.emailId}</td>
                <td className="px-6 py-4">{record.gstNo}</td>
                <td className="px-6 py-4">{record.panNo}</td>
                <td className="px-6 py-4">
                  <button
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    onClick={() => handleDelete(index)}
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

export default PartyList;
