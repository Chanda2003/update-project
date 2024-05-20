
const instialstate={
    card:[],
    
}



export const ReducerAction=(state=instialstate,action)=>{
    switch(action.type){
        case "ADD_CART":

           const Iteamindex=state.card.findIndex((iteam)=>iteam.id===action.payload.id)


           if(Iteamindex>=0){
            state.card[Iteamindex].quantity +=1
           }
           else{
            const temp={...action.payload,quantity:1}

             return {...state,
                card:[...state.card,temp],
               
            }

           }
                case "REV_CART":
                    const data= state.card.filter((ele)=>ele.id !== action.payload)
                    return{
                        ...state,card:data
                    }

                    case "REV_ONE":
                      
                    const Iteamindex_One=state.card.findIndex((iteam)=>iteam.id === action.payload.id)
                    if(state.card[Iteamindex_One].quantity >= 1){
                        const deliteam=state.card[Iteamindex_One].quantity -= 1                        
                    // console.log([...state.card,deliteam])
                    return{
                        ...state,card:[...state.card]
                    }
                    }
                    else if(state.card[Iteamindex_One].quantity === 1){

                        const data= state.card.filter((ele)=>ele.id !== action.payload)
                        return{
                            ...state,card:data
                        }
                    }

                    case "REMOVE_CARD":
                        return{...state,card:[]}
            default :
            return state

    }

}