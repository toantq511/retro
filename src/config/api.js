export const api =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080/api"
		: "https://protected-tor-34893.herokuapp.com/api";
