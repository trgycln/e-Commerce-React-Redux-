export const cardReducer =(state={cardItems:[]},action)=>{
	switch (action.type) {
		case "ADD_CARD":
			
			return {
				...state,
				cardItems:action.payload
			};
	
		default:
			return state;
	}
}
