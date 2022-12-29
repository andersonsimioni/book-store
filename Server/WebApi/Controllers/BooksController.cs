using Microsoft.AspNetCore.Mvc;
using Server.DataLayer.Extensions.BookStore;
using Server.DataLayer.Repositories.BookStore.Models;

namespace Server.WebApi.Controllers;

[ApiController]
[Route("[Controller]")]
public class BooksController : Controller
{
    private readonly ILogger<BooksController> _logger;
    private readonly BookStoreContext _bookStoreContext;
    
    public BooksController(ILogger<BooksController> logger, BookStoreContext bookStoreContext)
    {   
        _logger = logger;
        _bookStoreContext = bookStoreContext;
    }
    
    [HttpGet("GetCategories")]
    public IActionResult GetCategories(){
        try
        {
            var categories = _bookStoreContext.GetCategoriesList();
            return Ok(categories);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get categories!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetAuthors")]
    public IActionResult GetAuthors(){
        try
        {
            var authors = _bookStoreContext.GetAuthorsList();
            return Ok(authors);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get authors!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetById")]
    public IActionResult GetById(int bookId){
        try
        {
            var book = _bookStoreContext.GetBookById(bookId);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by ID!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetByAuthor")]
    public IActionResult GetByAuthor(string author, int page, int pageCount){
        try
        {
            var book = _bookStoreContext.GetBookByAuthor(author, page, pageCount);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by Author!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetByCategory")]
    public IActionResult GetByCategory(string category, int page, int pageCount){
        try
        {
            var book = _bookStoreContext.GetBookByCategory(category, page, pageCount);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by Category!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetByISBN")]
    public IActionResult GetByISBN(string ISBN){
        try
        {
            var book = _bookStoreContext.GetBookByISBN(ISBN);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by ISBN!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetByTitle")]
    public IActionResult GetByTitle(string title, int page, int pageCount){
        try
        {
            var book = _bookStoreContext.GetBookByTitle(title, page, pageCount);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by Title!");
            return BadRequest("Internal Server Error");
        }
    }

    [HttpGet("GetByType")]
    public IActionResult GetByType(string type, int page, int pageCount){
        try
        {
            var book = _bookStoreContext.GetBookByType(type, page, pageCount);
            if(book == null) return NotFound("Book not found!");
            return Ok(book);
        }
        catch (System.Exception ex)
        {
            _logger.LogError(new EventId(), ex, "Error on get book by Title!");
            return BadRequest("Internal Server Error");
        }
    }
}