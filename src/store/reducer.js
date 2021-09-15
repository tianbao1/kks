const defaultState = {
    val: 'll',
    list: [
        'sssssss',
        'fffffff'
    ]
}
export default (state = defaultState, action) => {
    if (action.type == 'cg') {
        let newS = JSON.parse(JSON.stringify(state))
        newS.val = action.val
        return newS
    }
    if (action.type == 'add') {
        let newS = JSON.parse(JSON.stringify(state))
        newS.list.push(newS.val)
        newS.val = ''
        console.log(newS.list)
        return newS
    }
    if (action.type == 'del') {
        let newS = JSON.parse(JSON.stringify(state))
        newS.list.splice(action.index,1)
     
        return newS
    }
    return state
}