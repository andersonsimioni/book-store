using System.Data.Entity.Core;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using Server.DataLayer.Repositories.BookStore.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddConfiguration(Shared.Settings.SharedConfigurationProvider.GetConfiguration());

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var bookStoreConString = builder.Configuration.GetValue<string>("ConnectionStrings:BookStore");
builder.Services.AddDbContext<BookStoreContext>(c=>{
    if(string.IsNullOrEmpty(bookStoreConString)) throw new Exception("Unable to start application, connection string not found!");
    c.UseSqlServer(bookStoreConString);
});

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var allowOrigins = new []{"*", "http://localhost", "https://localhost", "https://127.0.0.1", "http://127.0.0.1", "http://127.0.0.1:3000"};
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins, policy  =>
    {
        policy.WithOrigins(allowOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    //Start Test Data
    var statements = System.IO.File.ReadAllText("../DataLayer/Repositories/BookStore/TestData.sql");
    using (SqlConnection connection = new SqlConnection(bookStoreConString))
    {
        SqlCommand command = new SqlCommand(statements, connection);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();