using System.Linq;

using Server.DataLayer.Repositories.BookStore.Models;

namespace Server.DataLayer.Extensions.BookStore;

public static class QueryableExtensions{

    public static IQueryable<T> Pagination<T>(this IQueryable<T> query, int page, int pageCount){
        if(page >= 0 && pageCount > 0) return query.Skip(page*pageCount).Take(pageCount);
        return query;
    }

}