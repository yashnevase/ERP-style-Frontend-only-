import React, { useState } from 'react';

const BankList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountName: '',
    accountType: '',
    branchName: '',
    ifscCode: '',
    accountNo: '',
    bankName: '',
    branchCode: '',
    swiftCode: ''
  });
  const [bankRecords, setBankRecords] = useState([]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (Object.values(bankDetails).every(detail => detail.trim())) {
      setBankRecords([...bankRecords, bankDetails]);
      setBankDetails({
        accountName: '',
        accountType: '',
        branchName: '',
        ifscCode: '',
        accountNo: '',
        bankName: '',
        branchCode: '',
        swiftCode: ''
      });
      toggleDrawer();
    }
  };

  const handleDelete = (index) => {
    const newRecords = bankRecords.filter((_, i) => i !== index);
    setBankRecords(newRecords);
  };

  return (
    <div className="relative min-h-screen">
      <button
        className="absolute top-0 right-4 px-4 py-2 text-white bg-[#3c50e0] rounded-md hover:bg-blue-800 shadow-md"
        onClick={toggleDrawer}
      >
        + Add New Bank
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative w-11/12 max-w-md"> {/* Shrinking the container */}
            <button
              className="absolute top-2 right-2 text-gray-500 font-mono hover:text-red-700" 
              onClick={toggleDrawer}
            >
              x    
            </button>
            <h2 className="btn-ghost text-xl text-[#64748b] mb-4 font-bold">Add Bank Details</h2>

            {/* Bank Information Inputs */}
            <input
              type="text"
              name="accountName"
              value={bankDetails.accountName}
              onChange={handleInputChange}
              placeholder="Account Name"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="accountType"
              value={bankDetails.accountType}
              onChange={handleInputChange}
              placeholder="Account Type"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="branchName"
              value={bankDetails.branchName}
              onChange={handleInputChange}
              placeholder="Branch Name"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="ifscCode"
              value={bankDetails.ifscCode}
              onChange={handleInputChange}
              placeholder="IFSC Code"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="accountNo"
              value={bankDetails.accountNo}
              onChange={handleInputChange}
              placeholder="Account No"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleInputChange}
              placeholder="Bank Name"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="branchCode"
              value={bankDetails.branchCode}
              onChange={handleInputChange}
              placeholder="Branch Code"
              className="border border-gray-300 rounded p-2 mb-2 w-full text-gray-600"
            />
            <input
              type="text"
              name="swiftCode"
              value={bankDetails.swiftCode}
              onChange={handleInputChange}
              placeholder="SWIFT Code"
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
              <th className="px-6 py-3">Account Name</th>
              <th className="px-6 py-3">Bank Name</th>
              <th className="px-6 py-3">Account Type</th>
              <th className="px-6 py-3">Branch Name</th>
              <th className="px-6 py-3">IFSC Code</th>
              <th className="px-6 py-3">Account No</th>
              <th className="px-6 py-3">Branch Code</th>
              <th className="px-6 py-3">SWIFT Code</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bankRecords.map((record, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">{record.accountName}</td>
                <td className="px-6 py-4">{record.bankName}</td>
                <td className="px-6 py-4">{record.accountType}</td>
                <td className="px-6 py-4">{record.branchName}</td>
                <td className="px-6 py-4">{record.ifscCode}</td>
                <td className="px-6 py-4">{record.accountNo}</td>
                <td className="px-6 py-4">{record.branchCode}</td>
                <td className="px-6 py-4">{record.swiftCode}</td>
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

export default BankList;
