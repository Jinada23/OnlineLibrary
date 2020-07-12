using OnlineLibrary.Data;
using OnlineLibrary.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace OnlineLibrary.Services.Users
{
    public class UsersService : IUsersService
    {
        private readonly OnlineLibraryContext _context;

        public UsersService(OnlineLibraryContext context)
        {
            _context = context;
        }

        public async Task<bool> RegisterUser(User user)
        {
       

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
