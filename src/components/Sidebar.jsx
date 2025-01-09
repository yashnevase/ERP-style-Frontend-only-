import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard,MdOutlineShoppingCart,MdOutlineAttachMoney } from "react-icons/md";
import {  FiFolder } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom"; // useLocation added

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard, subItems: null }, // Make sure this points to "/"
    { 
      name: "Purchase", 
      icon: MdOutlineShoppingCart, 
      subItems: [
        { name: "Purchase Dashboard", link: "/purchase/PurchaseDashboard" },
        { name: "Supplier", link: "/purchase/Supplier" },
        { name: "Purchase Order", link: "/purchase/PurchaseOrder" },
        { name: "Purchase Invoice", link: "/purchase/PurchaseInvoice" },
        { name: "Supplier Payment", link: "/purchase/SupplierPayment" },
      ],
    },
    { 
      name: "Sales", 
      icon: MdOutlineAttachMoney, 
      subItems: [
        { name: "Sales Dashboard", link: "/sales/SalesDashboard" },
        { name: "Customer", link: "/sales/Customer" },
        { name: "Sales Quotaion", link: "/sales/SalesQuotaion" },
        { name: "Delivery Challan ", link: "/sales/DeliveryChallan " },
        { name: "Sales Order ", link: "/sales/SalesOrder " },
        { name: "Proforma Invoice", link: "/sales/ProformaInvoice" },
        { name: "Sales Invoice", link: "/sales/SalesInvoice" },
        { name: "Customer Payment", link: "/sales/CustomerPayment" },

      ] 
    },
    { 
      name: "Reports", 
      icon: TbReportAnalytics, 
      subItems: [
        { name: "Sales Register", link: "/reports/SalesRegister" },
        { name: "Purchase Register", link: "/reports/PurchaseRegister" },
        { name: "Account Statement", link: "/reports/AccountStatement" },
        { name: "Payment Register", link: "/reports/PaymentRegister" },
        { name: "Sales Order History", link: "/reports/SalesOrderHistory" },
        { name: "Purchase Order History", link: "/reports/PurchaseOrderHistory" },
        { name: "Outstanding Report", link: "/reports/OutstandingReport" },
      ] 
    },
    { 
      name: "Master", 
      icon: FiFolder, 
      subItems: [
        { name: "Category List", link: "/master/CategoryList" },
        { name: "Unit List", link: "/master/UnitList" },
        { name: "Bank List", link: "/master/BankList" },
        { name: "Bin List", link: "/master/BinList" },
        { name: "Item List", link: "/master/ItemList" },
        { name: "Party List", link: "/master/PartyList" },
        { name: "Terms & Conditions", link: "/master/TermsConditions" },
      ] 
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);

  const location = useLocation(); // Hook to check the current path

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index, hasSubItems) => {
    if (hasSubItems) {
      setActiveMenu(activeMenu === index ? null : index);
    } else {
      setActiveMenu(null);
    }
  };

  return (
    <section className="flex gap-6">
      <div
        ref={sidebarRef}
        className={`bg-[#1c2434] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-[#8a99af] px-4`} 
        onClick={() => setOpen(true)}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div key={i}>
              <div
                className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#3a454e] rounded-md cursor-pointer`}
                onClick={() => handleMenuClick(i, !!menu?.subItems)}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <Link
                  to={menu.link}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  } ${location.pathname === menu.link ? "text-white" : ""} text-xl`} // Highlight active menu
                >
                  {menu?.name}
                </Link>
              </div>

              {menu?.subItems && activeMenu === i && (
                <div
                  className={`ml-6 mt-2 transition-all duration-500 ${
                    open ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
                  }`}
                >
                  {menu?.subItems.map((subItem, j) => (
                    <Link
                      to={subItem?.link}
                      key={j}
                      className={`flex items-center text-md gap-3.5 font-medium p-2 hover:bg-[#3a454e] rounded-md cursor-pointer" ${
                        location.pathname === subItem.link ? "text-white" : "" 
                      }`}  // Highlight active sub-menu
                    >
                      <h2>{subItem?.name}</h2>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
