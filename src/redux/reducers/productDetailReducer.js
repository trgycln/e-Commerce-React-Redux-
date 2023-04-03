
export const productDetailReducer =(state={product:{}},action)=>{
	switch (action.type) {
		case "GET_DETAİLS":
			
			return {
				product:action.payload
			};
	
		default:
			return state;
	}
}