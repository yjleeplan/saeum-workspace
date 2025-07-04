export const addComma = (total: number) => {
  return total ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : total;
};
