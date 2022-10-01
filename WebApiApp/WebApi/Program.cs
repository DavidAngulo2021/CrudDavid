using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;

// variable para compartir recursos de origen cruzado
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opcions =>
{
    // uso para la conexion a la base de datos  //
    opcions.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

});

    // Enable Cors
builder.Services.AddCors(options =>
{

    options.AddPolicy(name: myAllowSpecificOrigins,
        builder =>
        {

            builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader();
        });

});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(myAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
