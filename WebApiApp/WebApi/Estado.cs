using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class Estado
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string EstadoOp { get; set; } = string.Empty;
    }
}
