import axios from "axios"

export const CATEGORIES_REQUEST = "CATEGORIES_REQUEST"
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS"
export const CATEGORIES_FAILURE = "CATEGORIES_FAILURE"
export const ITEMS_REQUEST = "ITEMS_REQUEST"
export const ITEMS_SUCCESS = "ITEMS_SUCCESS"
export const ITEMS_FAILURE = "ITEMS_FAILURE"

export const getCategories = () => {
	function request() { return { type: CATEGORIES_REQUEST } }
    function success(response) {
		return { type: CATEGORIES_SUCCESS, data: response } 
	}
	function failure(error) { return { type: CATEGORIES_FAILURE, error } }
	return (dispatch) => {
		dispatch(request())
		return axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category")
			.then(response => {
				return dispatch(success(response.data))
			})
			.catch(err => {
				return dispatch(failure(err.toString()))
			})
	}
}

export const getItems = (category) => {
	function request() { return { type: ITEMS_REQUEST } }
    function success(response) {
		return { type: ITEMS_SUCCESS, data: response } 
	}
	function failure(error) { return { type: ITEMS_FAILURE, error } }
	
	return (dispatch) => {
		dispatch(request())
		return axios.get("https://stream-restaurant-menu-svc.herokuapp.com/item?category=" + category)
			.then(response => {
				return dispatch(success(response.data))
			})
			.catch(err => {
				return dispatch(failure(err.toString()))
			})
	}
}