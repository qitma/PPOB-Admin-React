import Utility from "../../../utility/pagination";

export const fakeFetchPromoUsers = page => {
  const request = JSON.parse(localStorage.getItem("PromoUsers"));
  //console.log(page)
  //console.log(request)
  let newData = Utility.getDataByPage(request, page.page, page.size);
  const response = {
    data: newData,
    page: { ...page, count: request.length }
  };
  //console.log(newData);
  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
};

export default {
  fakeFetchPromoUsers
};
