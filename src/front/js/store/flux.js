const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      // Use getActions to call a function within a fuction
      register: async (email, password) => {
		try {
			const response = await fetch(process.env.BACKEND_URL + '/api/signup', {
				method: "POST",
				headers: { "Content-type": "application/json"},
				body: JSON.stringify({email, password}),
			});
			if (!response.ok){
				return false
			}
			const data = response.json();
			return data;

			
		} catch (error) {
			console.log(error);
		}
	  },
    },
  };
};

export default getState;
