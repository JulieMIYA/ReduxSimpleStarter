export default function(selectedBook='Javascript: The Goog Parts', action) {
    switch (action.type){
        case 'selectBook' : 
            console.log(action.title);
            return action.title;
        default : return selectedBook;
    }
}