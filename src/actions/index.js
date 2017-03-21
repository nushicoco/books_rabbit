export function changeUserName(userName = "Mighty1617") {
    return {
        type:'CHANGE_USERNAME',
        payload: userName
    };
}