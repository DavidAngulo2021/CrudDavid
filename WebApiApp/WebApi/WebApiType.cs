using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class WebApiType
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Productoname { get; set; } = string.Empty;

    }
}
