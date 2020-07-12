using System;


namespace OnlineLibrary.Domain
{
    public class Book
    {
        public int ID { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public decimal SalePrice { get; set; }
        public decimal RentPrice { get; set; }
    }
}
