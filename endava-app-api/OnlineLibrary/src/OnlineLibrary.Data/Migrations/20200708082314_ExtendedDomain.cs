using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineLibrary.Data.Migrations
{
    public partial class ExtendedDomain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "RentPrice",
                table: "books",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "SalePrice",
                table: "books",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RentPrice",
                table: "books");

            migrationBuilder.DropColumn(
                name: "SalePrice",
                table: "books");
        }
    }
}
