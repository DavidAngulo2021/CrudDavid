using System.ComponentModel.DataAnnotations;

namespace WebApi
{
    public class Defectuoso
    {
        public int Id { get; set; } 

        [StringLength(20)]
        public string Estado { get; set; } = string.Empty;


        [StringLength(200)]
        public string Comentario { get; set; } = string.Empty;

        public int WebApitypeid { get; set; }

        // Conexion entre tablas  //
        public WebApiType? WebApiType { get; set; } 
    }
}
