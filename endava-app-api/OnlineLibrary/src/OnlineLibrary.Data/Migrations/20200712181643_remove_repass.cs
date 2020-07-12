using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineLibrary.Data.Migrations
{
    public partial class remove_repass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Repass",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Repass",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
