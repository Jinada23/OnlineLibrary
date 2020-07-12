using OnlineLibrary.Data;
using OnlineLibrary.Domain;
using System.Threading.Tasks;

namespace OnlineLibrary.Services.Books
{
    public class BooksService : IBooksService
    {
        private readonly OnlineLibraryContext _context;

        public BooksService(OnlineLibraryContext context)
        {
            _context = context;
        }
        public async Task<bool> SaveBook(Book book)
        {
            var props = book.GetType().GetProperties();

            foreach (var prop in props)
            {
                if (prop.GetValue(null) != null) return false;
            }

            _context.books.Add(book);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
