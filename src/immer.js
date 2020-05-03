import { produce } from 'immer';

let book = Map({ title: "football"});

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);
console.log(book);
console.log(updated);