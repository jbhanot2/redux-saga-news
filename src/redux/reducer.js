export const reducer = (state={} , action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return {...state, loading: true}
        case "NEWS_RECEIVED":
            console.log(action.json)
            return {...state, loading: false, news: action.json}    
        default :
            return {...state, loading: false}
    }
}