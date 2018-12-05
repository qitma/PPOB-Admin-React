import types from "./types";

export const fetchSupplierStart = () => {
    return {
      type: types.FETCH_SUPPLIER
    };
  };
  
export const fetchSupplierSuccess = supplier => {
    return {
      type: types.FETCH_SUPPLIER_SUCCESS,
      payload: supplier
    };
  };
  
export const fetchSupplierFailure = error => {
    return {
      type: types.FETCH_SUPPLIER_FAILURE,
      payload: error
    };
  };

export default {
    fetchSupplierStart,
    fetchSupplierSuccess,
    fetchSupplierFailure
}