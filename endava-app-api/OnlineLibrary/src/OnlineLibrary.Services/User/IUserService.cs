using OnlineLibrary.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlineLibrary.Services.Users
{
    public interface IUsersService
    {
        Task<bool> RegisterUser(User user);
    }
}
