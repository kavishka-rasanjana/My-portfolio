namespace MyPortfolioAPI.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public List<string> Tags { get; set; } = new List<string>();
        public string? GitUrl { get; set; }  
        public string? DemoUrl { get; set; }
    }
}