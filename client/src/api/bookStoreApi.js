/* eslint-disable use-isnan */
const apiUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:7201/' : 'https://localhost:7201/'

export async function GetCategories(){
    try {
        const response = await fetch(apiUrl.concat('Books/GetCategories'));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function GetAuthors(){
    try {
        const response = await fetch(apiUrl.concat('Books/GetAuthors'));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function GetBookByAuthor(author){
    try {
        if(author=='') return [];
        const response = await fetch(apiUrl.concat('Books/GetByAuthor?author='.concat(author)));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function GetBookByCategory(category){
    try {
        if(category=='') return [];
        const response = await fetch(apiUrl.concat('Books/GetByCategory?category='.concat(category)));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function GetBookByISBN(isbn){
    try {
        if(isbn=='') return [];
        const response = await fetch(apiUrl.concat('Books/GetByIsbn?isbn='.concat(isbn)));
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export async function GetBookByTitle(title){
    try {
        if(title == '') return [];
        const response = await fetch(apiUrl.concat('Books/GetByTitle?title='.concat(title)));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function GetBookByType(type){
    try {
        if(type == '') return [];
        const response = await fetch(apiUrl.concat('Books/GetByType?type='.concat(type)));
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}