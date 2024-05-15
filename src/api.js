import axios from 'axios';

const baseUrl = "https://ckan0.cf.opendata.inter.prod-toronto.ca";

export const getPackage = async (id) => {
  try {
    const url = `${baseUrl}/api/3/action/package_show`;
    const response = await axios.get(url, { params: { id } });
    return response.data.result;
  } catch (error) {
    console.error('Error fetching package:', error);
    throw error;
  }
};

export const getResourceDump = async (resourceId) => {
  try {
    const url = `${baseUrl}/datastore/dump/${resourceId}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching resource dump:', error);
    throw error;
  }
};

export const getResourceData = async (resourceId) => {
  try {
    const url = `${baseUrl}/api/3/action/datastore_search`;
    const response = await axios.get(url, { params: { id: resourceId } });
    return response.data.result.records;
  } catch (error) {
    console.error('Error fetching resource data:', error);
    throw error;
  }
};

export const getResourceMetadata = async (resourceId) => {
  try {
    const url = `${baseUrl}/api/3/action/resource_show?id=${resourceId}`;
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching resource metadata:', error);
    throw error;
  }
};