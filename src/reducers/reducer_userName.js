/**
 * Created by einav on 3/21/17.
 */
export default function  (store = 'Mighty1617', action) {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            console.log("here");
            return action.payload;
    }
    return store;

}