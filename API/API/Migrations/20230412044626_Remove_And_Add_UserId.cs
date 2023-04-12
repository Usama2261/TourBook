using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class Remove_And_Add_UserId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "UserExperienceImages");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Experiences",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Experiences");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "UserExperienceImages",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
