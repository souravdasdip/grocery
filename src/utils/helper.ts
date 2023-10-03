export const Helper = {
  setData(key: string, val: unknown) {
    try {
      let tempval = JSON.stringify(val);
      localStorage.setItem(key, tempval);
    } catch (error) {
      console.error(error, "LocalStorage store error!");
    }
  },
  getData(key: string) {
    try {
      let value = localStorage.getItem(key);
      if (value) {
        let newvalue = JSON.parse(value);
        return newvalue;
      } else {
        return value;
      }
    } catch (error) {
      console.error(error, "LocalStorage error");
    }
  },
};
