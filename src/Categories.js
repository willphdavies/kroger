import React from "react"
import { connect } from 'react-redux'
import { getCategories, getItems } from "./store/app.actions"

class Categories extends React.Component {
	constructor(props) {
		super(props)
		this.loadItems = this.loadItems.bind(this)
	}
	componentDidMount() {
		this.props.getCategories()
	}
	loadItems(ev, category) {
		ev.preventDefault()
		this.props.getItems(category)
	}
	render() {
		return (
			<div className="Categories">
				<ul>
				{
					this.props.categories.data.map(item => {
						return (
							<li key={item.id}>
								<a href="#" value={item.id} onClick={((e) => this.loadItems(e, item.short_name))}>{ item.name }</a>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		categories: state.categories
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getCategories: () => {
			dispatch(getCategories())
		},
		getItems: (category) => {
			dispatch(getItems(category))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)