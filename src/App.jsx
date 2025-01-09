import { BrowserRouter, Route, Routes } from "react-router-dom";



import Layout from "./components/Layout";
import Dashboard from "./pages/Home";
import PurchaseDashboard from './pages/purchase/PurchaseDashboard';
import Supplier from './pages/purchase/Supplier';
import PurchaseOrder from './pages/purchase/PurchaseOrder';
import PurchaseInvoice from './pages/purchase/PurchaseInvoice';
import SupplierPayment from './pages/purchase/SupplierPayment'; 

import SalesDashboard from './pages/sales/SalesDashboard';
import Customer from './pages/sales/Customer';
import SalesQuotaion from './pages/sales/SalesQuotaion';
import DeliveryChallan from './pages/sales/DeliveryChallan';
import SalesOrder from './pages/sales/SalesOrder';
import ProformaInvoice from './pages/sales/ProformaInvoice';
import SalesInvoice from './pages/sales/SalesInvoice';
import CustomerPayment from './pages/sales/CustomerPayment'; 

import SalesRegister from './pages/reports/SalesRegister';
import PurchaseRegister from './pages/reports/PurchaseRegister';
import AccountStatement from './pages/reports/AccountStatement';
import PaymentRegister from './pages/reports/PaymentRegister';
import SalesOrderHistory from './pages/reports/SalesOrderHistory';
import PurchaseOrderHistory from './pages/reports/PurchaseOrderHistory';
import OutstandingReport from './pages/reports/OutstandingReport';

import CategoryList from './pages/master/CategoryList';
import BinList from './pages/master/BinList';
import BankList from './pages/master/BankList';
import ItemList from './pages/master/ItemList';
import PartyList from './pages/master/PartyList';
import TermsConditions from './pages/master/TermsConditions';
import UnitList from './pages/master/UnitList'; 

// Example for other future routes


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="purchase/PurchaseDashboard" element={<PurchaseDashboard />} />
          <Route path="purchase/Supplier" element={<Supplier />} />
          <Route path="purchase/PurchaseOrder" element={<PurchaseOrder />} />
          <Route path="purchase/PurchaseInvoice" element={<PurchaseInvoice />} />
          <Route path="purchase/SupplierPayment" element={<SupplierPayment />} />

          <Route path="sales/SalesDashboard" element={<SalesDashboard />} />
          <Route path="sales/Customer" element={<Customer />} />
          <Route path="sales/SalesQuotaion" element={<SalesQuotaion />} />
          <Route path="sales/DeliveryChallan" element={<DeliveryChallan />} />
          <Route path="sales/SalesOrder" element={<SalesOrder />} />
          <Route path="sales/ProformaInvoice" element={<ProformaInvoice />} />
          <Route path="sales/SalesInvoice" element={<SalesInvoice />} />
          <Route path="sales/CustomerPayment" element={<CustomerPayment />} />

          <Route path="reports/SalesRegister" element={<SalesRegister />} />
          <Route path="reports/PurchaseRegister" element={<PurchaseRegister />} />
          <Route path="reports/AccountStatement" element={<AccountStatement />} />
          <Route path="reports/PaymentRegister" element={<PaymentRegister />} />
          <Route path="reports/SalesOrderHistory" element={<SalesOrderHistory />} />
          <Route path="reports/PurchaseOrderHistory" element={<PurchaseOrderHistory />} />
          <Route path="reports/OutstandingReport" element={<OutstandingReport />} />

          <Route path="master/CategoryList" element={<CategoryList />} />
          <Route path="master/BinList" element={<BinList />} />
          <Route path="master/BankList" element={<BankList />} />
          <Route path="master/ItemList" element={<ItemList />} />
          <Route path="master/PartyList" element={<PartyList />} />
          <Route path="master/TermsConditions" element={<TermsConditions />} />
          <Route path="master/UnitList" element={<UnitList />} />
          

          
          
           
          {/* Add more routes as necessary */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
