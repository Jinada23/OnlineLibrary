using OnlineLibrary.Domain;
using System.Threading.Tasks;

namespace OnlineLibrary.Services.Books
{
    public interface IBooksService
    {
        Task<bool> SaveBook(Book book);
    }
}