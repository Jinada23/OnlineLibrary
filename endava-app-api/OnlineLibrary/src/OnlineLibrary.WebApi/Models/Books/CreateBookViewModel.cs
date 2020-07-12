using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineLibrary.WebApi.Models.Books
{
    public class CreateBookViewModel
    {
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public decimal SalePrice { get; set; }
        [Required]
        public decimal RentPrice { get; set; }
    }
}
