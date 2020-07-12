using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineLibrary.Data;
using OnlineLibrary.Domain;
using OnlineLibrary.WebApi.Models.Books;
using OnlineLibrary.Services.Books;

namespace EndavaOnlineLibrary.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {

        private readonly OnlineLibraryContext _context;
        private readonly IBooksService _booksService;

        public BookController(IBooksService booksService, OnlineLibraryContext context)
        {
            _context = context;
            _booksService = booksService;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _context.books.ToList();
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateBookViewModel model)
        {
            var book = new Book
            {
                Title = model.Title,
                Author = model.Author,
                SalePrice = model.SalePrice,
                RentPrice = model.RentPrice
            };

            bool isSucces = await _booksService.SaveBook(book);

            if (isSucces)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
