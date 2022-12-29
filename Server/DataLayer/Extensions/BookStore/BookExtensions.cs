using System.Linq;

using Server.DataLayer.Repositories.BookStore.Models;

namespace Server.DataLayer.Extensions.BookStore;

public static class BookExtensions
{
    public static IEnumerable<Book> GetBookById(this BookStoreContext context, int id)
    {
        return context.Books.Where(b=>b.BookId==id).Take(1).ToList();
    }

    public static IEnumerable<Book> GetBookByAuthor(this BookStoreContext context, string author, int page = -1, int pageCount = -1)
    {
        var nameToFind = author.ToLower().Replace(" ", "").Replace(".","");
        var query = context.Books.Where(b => string.Concat(b.FirstName, b.LastName).ToLower().Replace(" ", "").Replace(".","").Contains(nameToFind)); 
        return query.Pagination<Book>(page, pageCount).ToList();
    }

    public static IEnumerable<Book> GetBookByTitle(this BookStoreContext context, string title, int page = -1, int pageCount = -1)
    {
        var nameToFind = title.ToLower().Replace(" ", "").Replace(".","");
        var query =  context.Books.Where(b => b.Title.ToLower().Replace(" ", "").Replace(".","").Contains(nameToFind));
        return query.Pagination<Book>(page, pageCount).ToList();
    }

    public static IEnumerable<Book> GetBookByISBN(this BookStoreContext context, string isbn)
    {
        return context.Books.Where(b=>b.Isbn==isbn.ToString()).Take(1).ToList();
    }

    public static IEnumerable<Book> GetBookByCategory(this BookStoreContext context, string category, int page = -1, int pageCount = -1)
    {
        var nameToFind = category.ToLower().Replace(" ", "").Replace(".","");
        var query = context.Books.Where(b=>b.Category.ToLower().Replace(" ", "").Replace(".","").Contains(nameToFind));
        return query.Pagination<Book>(page, pageCount).ToList();
    }

    public static IEnumerable<Book> GetBookByType(this BookStoreContext context, string type, int page = -1, int pageCount = -1)
    {
        var nameToFind = type.ToLower().Replace(" ", "").Replace(".","");
        var query = context.Books.Where(b=>b.Type.ToLower().Replace(" ", "").Replace(".","").Contains(nameToFind));
        return query.Pagination<Book>(page, pageCount).ToList();
    }

    public static IEnumerable<string> GetCategoriesList(this BookStoreContext context){
        return context.Books.Select(b=>b.Category).Distinct().ToList();
    }

    public static IEnumerable<string> GetAuthorsList(this BookStoreContext context){
        return context.Books.Select(b=>string.Concat(b.FirstName, " ", b.LastName)).Distinct().ToList();
    }

}