import axios from 'axios'

const reducer = (state=[], action) => {
	switch(action.type) {
		case RECEIVE_TEAS:
			return action.teas
	}
	return state
}

const RECEIVE_TEAS = 'RECEIVE_TEAS';

export const receiveTeas = teas => ({
	type: RECEIVE_TEAS, teas
})

export const fetchTeas = () => 
	dispatch =>
		axios.get('/api/teas')
		.then(res => res.data)
		.then(teas => dispatch(receiveTeas(teas)))
		.catch(err => console.error(err))

export default reducer