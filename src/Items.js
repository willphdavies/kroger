import React from "react"
import { connect } from 'react-redux'
import { getItems } from "./store/app.actions"

class Items extends React.Component {

	render() {
		return (
			<div className="Items">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.items.data.map(item => {
								return (
									<tr>
										<td>{item.name}</td>
										<td>{item.description}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		items: state.items
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getItems: (category) => {
			dispatch(getItems(category))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Items)