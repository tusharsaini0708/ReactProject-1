import _ from "lodash";

export function paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  // we first convert out items array to wapper in lodash so that we can chain events in that
  //valur event for again converting into normal array
  return _(items).slice(startIndex).take(pageSize).value();
}
