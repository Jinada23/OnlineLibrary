using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineLibrary.Domain
{
    public class SoldBook
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int UserId { get; set; }
        public DateTime SoldDate { get; set; }
        public decimal TotalSum { get; set; }
        public Book Book { get; set; }
        public User User { get; set; }
    }
}
