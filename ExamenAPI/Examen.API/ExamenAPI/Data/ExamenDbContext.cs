using ExamenAPI.Modelos;
using Microsoft.EntityFrameworkCore;

namespace ExamenAPI.Data
{
    public class ExamenDbContext : DbContext
    {

        public ExamenDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Tienda> Tienda { get; set; }

        public DbSet<Articulos> Articulos { get; set; }

    }
}
