import { createStore } from "vuex";

import mutations from "./mutations";
import apiRequests from "./apiReguests";

const actions = {
  ...apiRequests,
};

export default createStore({
  state: {
    employee: "",
    loading: false,
    currentEmployee: "",
  },
  mutations,
  actions,
  modules: {},
});
