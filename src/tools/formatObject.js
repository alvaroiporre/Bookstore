const formatObject = (data) => {
  let arr = [];
  for (const i in data) {
    let newObject = {
      item_id: i,
      title: data[i][0].title,
      author: data[i][0].author,
      category: data[i][0].category
    };
    arr.push(newObject);
  }
  return arr;
};

export default formatObject;
