import Utility from "../../../utility/pagination";

export const fakeFetchPromoGroups = page => {
  const request = JSON.parse(localStorage.getItem("PromoGroups"));
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

export const fakeCreatePromoGroups = post => {
  let datas = JSON.parse(localStorage.getItem("PromoGroups"));
  let newData = {
    ...post,
    id: datas[datas.length - 1].id + 1
  };
  datas.push(newData);
  localStorage.setItem("PromoGroups", JSON.stringify(datas));
  const response = {
    data: newData
  };
  console.log(response);
  return new Promise(resolve => {
    setTimeout(() => resolve(response), 1000);
  });
};

export default {
  fakeFetchPromoGroups,
  fakeCreatePromoGroups
};
