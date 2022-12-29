/* eslint-disable use-isnan */
const apiUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:7201' : 'https://localhost:7201'

export async function getCategories(){
    try {
        const response = await fetch(`${apiUrl}/Books/GetCategories`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getAuthors(){
    try {
        const response = await fetch(`${apiUrl}/Books/GetAuthors`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


export async function getBookByAuthor(author){
    try {
        if(author=='') return [];
        const response = await fetch(`${apiUrl}/Books/GetByAuthor?author=${author}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookByCategory(category){
    try {
        if(category=='') return [];
        const response = await fetch(`${apiUrl}/Books/GetByCategory?category=${category}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookByISBN(isbn){
    try {
        if(isbn=='') return [];
        const response = await fetch(`${apiUrl}/Books/GetByIsbn?isbn=${isbn}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export async function getBookByTitle(title){
    try {
        if(title == '') return [];
        const response = await fetch(`${apiUrl}/Books/GetByTitle?title=${title}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getBookByType(type){
    try {
        if(type == '') return [];
        const response = await fetch(`${apiUrl}/Books/GetByType?type=${type}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}