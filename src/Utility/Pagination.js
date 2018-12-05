
const getCountPage = (totalCount, size) => {
  return Math.ceil(totalCount / size);
};

const getDataByPage = (data, page, size) => {
  let start = page * size;
  let take = start + size;
  let newData = data.slice();
  return newData.slice(start, take);
};

export default {
    getCountPage,
    getDataByPage
}
