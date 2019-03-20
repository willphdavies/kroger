import {
	CATEGORIES_REQUEST,
	CATEGORIES_SUCCESS,
	CATEGORIES_FAILURE,
	ITEMS_REQUEST,
	ITEMS_SUCCESS,
	ITEMS_FAILURE
} from "./app.actions"
import { stat } from "fs";

export function app(state = {
	categories: {
		loading: false,
		data: []
	},
	items: {
		loading: false,
		data: []
	}
}, action) {
	switch (action.type) {
		case CATEGORIES_REQUEST:
			return {
				categories: {
					loading: true,
					data: []
				},
				items: state.items
			}
		case CATEGORIES_SUCCESS: 
			return {
				categories: {
					loading: false,
					data: action.data
				},
				items: state.items
			}
		case CATEGORIES_FAILURE: 
			return {
				categories: {
					loading: false,
					data: []
				},
				items: state.items
			}
		case ITEMS_REQUEST:
			return {
				categories: state.categories,
				items: {
					loading: true,
					data: []
				}
			}
		case ITEMS_SUCCESS:
			return {
				categories: state.categories,
				items: {
					loading: false,
					data: action.data
				}
			}
		case ITEMS_FAILURE:
			return {
				categories: state.categories,
				items: {
					loading: false,
					data: []
				}
			}
		default: 
			return state
	}
}