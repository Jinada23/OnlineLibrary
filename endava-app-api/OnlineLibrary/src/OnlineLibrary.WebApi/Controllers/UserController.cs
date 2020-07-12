using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineLibrary.Data;
using OnlineLibrary.Domain;
using OnlineLibrary.WebApi.Models.Users;
using OnlineLibrary.Services.Users;

namespace OnlineLibrary.WebApi.Controllers
{
    //[Route("api/[controller]/)]
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {


        private readonly OnlineLibraryContext _context;
        private readonly IUsersService _userService;

        public UserController(IUsersService userService, OnlineLibraryContext context)
        {
            _context = context;
            _userService = userService;
        }

        [HttpGet]
        [Route("/user/list")]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }


        //Register
        [HttpPost]
        [Route("/user/register")]
        public async Task<IActionResult> Register(CreateUserViewModel model)
        {

            var isValid = ValidateModel(model);

            var user = new User
            {
                Name = model.Name,
                Email = model.Email,
                Password = model.Password,
                Phone = model.Phone
            };

            bool isSucces = await _userService.RegisterUser(user);

            if (isSucces && isValid)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        //public async Task<IActionResult> Login()

        public bool ValidateModel(CreateUserViewModel model)
        {
            var props = model.GetType().GetProperties();

            foreach (var prop in props)
            {
                if (prop.GetValue(null) == null) return false;
            }
            return true;


        }
    }
}
