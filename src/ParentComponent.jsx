// ParentComponent.jsx
import React, { useState, useEffect } from 'react';
import UnitList from '/src/pages/master/UnitList';
import Supplier from '/src/pages/purchase/supplier';
import { supabase } from "/src/createClient";

const ParentComponent = () => {
  const [units, setUnits] = useState([]);

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

  return (
    <div>
      <UnitList units={units} setUnits={setUnits} />
      <Supplier units={units} />
    </div>
  );
};

export default ParentComponent;
