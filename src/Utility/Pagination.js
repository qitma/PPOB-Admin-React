const getCountPage = (totalCount, size) => {
  return Math.ceil(totalCount / size);
};

const getDataByPage = (data, page, size) => {
  let start = (page - 1) * size;
  let take = start + size;
  let newData = data.slice();
  console.log(`start :${start} take : ${take}`);
  console.log(newData);
  return newData.slice(start, take);
};

export default {
  getCountPage,
  getDataByPage
};
