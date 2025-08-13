import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * Build Sprint 2:
 * - Replaces dummy data with live API data
 * - Stores and provides fiscal and citizenship data
 * - Ensures graphs can render using updated context
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = () => graphData;
  const getCitizenshipResults = () => graphData?.citizenshipResults ?? [];

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    try {
      const [fiscalRes, citizenshipRes] = await Promise.all([
        axios.get('https://asylum-be.onrender.com/fiscalSummary'),
        axios.get('https://asylum-be.onrender.com/citizenshipSummary'),
      ]);

      const combinedData = {
        ...fiscalRes.data,
        citizenshipResults: citizenshipRes.data,
      };

      setGraphData(combinedData);
    } catch (error) {
      console.error('Error fetching graph data:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () =>
    graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
    getFiscalData,
    getCitizenshipResults,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
