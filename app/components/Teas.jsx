import React, { Component } from 'react';

const createOptions = num => {
	const options = [];
	for (let i = 1; i <= num; i++) {
		options.push(<option key={i}>{i}</option>)
	}
	return options
}

const formatPrice = num => {
	let str = num.toString();
	return `$${str.slice(0,-2)}.${str.slice(str.length-2)}`;
}

const formatCategory = category => category.slice(0, 1).toUpperCase() + category.slice(1)

const Teas = props => (
	<div id="teas">
		{
			props.teas.map(t => (
				<div key={t.id}>
					<h3>{t.title}</h3>
					<h4>{formatPrice(t.price)}</h4>
					<h6>Tea Type: {formatCategory(t.category)}</h6>
					<p>{t.description}</p>
					<select>
						{createOptions(t.inventory)}
					</select>
					<button>Add To Cart</button>
				</div>
			))
		}
	</div>
)

import { connect } from 'react-redux';

export default connect(({ teas }) => ({ teas }))(Teas)