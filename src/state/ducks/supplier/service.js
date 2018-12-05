import Utility from "../../../utility/pagination";

export const fakeFetchSuppliers = page => {
    const request = JSON.parse(localStorage.getItem("Suppliers"));
    let newData = Utility.getDataByPage(request, page.page, page.size);
    const response = {
      data: newData,
      page: { ...page, count: request.length }
    };
  
    return new Promise(resolve => {
      setTimeout(() => resolve(response), 2000);
    });
  }

export default {
    fakeFetchSuppliers
}