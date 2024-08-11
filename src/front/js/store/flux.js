const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      // Use getActions to call a function within a fuction
      register: async (email, password) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/signup",
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );
          if (!response.ok) {
            return response;
          }
          const data = response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
	  
      login: async (email, password) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/login",
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          localStorage.setItem("token", data.token);
          console.log(data);
          return true;
        } catch (error) {
          console.log(error);
        }
      },

    logout: () => {
        localStorage.removeItem("token");
      },
    },
  };
};

export default getState;
