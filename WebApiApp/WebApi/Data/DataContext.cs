using Microsoft.EntityFrameworkCore;

namespace WebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Defectuoso> Defectuosos { get; set;}

        public DbSet<WebApiType> WebApiTypes  { get; set; }

        public DbSet<Estado> Estados { get; set; }
    }
}
