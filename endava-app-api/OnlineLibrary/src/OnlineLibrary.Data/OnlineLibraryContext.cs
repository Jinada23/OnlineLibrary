using Microsoft.EntityFrameworkCore;
using OnlineLibrary.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineLibrary.Data
{
    public class OnlineLibraryContext : DbContext
    {
        public OnlineLibraryContext(DbContextOptions<OnlineLibraryContext> options)
            : base(options)
        {

        }
        public DbSet<Book> books { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<SoldBook> SoldBooks { get; set; }
    }

}
