import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //Pagination on client side not on server
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  //_.slice(item,startIndex)
  //_.take()
}
