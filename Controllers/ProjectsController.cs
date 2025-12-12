using Microsoft.AspNetCore.Mvc;
using MyPortfolioAPI.Models;

namespace MyPortfolioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProjects()
        {
            var projects = new List<Project>
            {
                // 1. E-Fine SL Project
                new Project { 
                    Id = 1, 
                    Title = "E-Fine SL", 
                    Description = "A complete traffic fine management system built with Flutter and Node.js.", 
                    ImageUrl = "/mobileapp.jpeg",
                    Tags = new List<string> { "Flutter", "Node.js", "MongoDB" },
                    // පහළ ලින්ක් වලට ඔයාගේ ඇත්ත Link දාන්න
                    GitUrl = "https://github.com/kavishka-rasanjana/My-portfolio.git", 
                    DemoUrl = "" 
                },

                // 2. Portfolio Project
                new Project { 
                    Id = 2, 
                    Title = "My Portfolio", 
                    Description = "Modern personal portfolio website featuring 3D animations and .NET backend.", 
                    ImageUrl = "/portfolio.png",
                    Tags = new List<string> { "C#", "SQL Server", "React" },
                    GitUrl = "https://github.com/kavishka-rasanjana/My-portfolio.git",
                    DemoUrl = "#" // Live තියෙනවා නම් ලින්ක් එක දාන්න
                },

                // 3. Pet Vaccine Reminder
                new Project { 
                    Id = 3, 
                    Title = "Pet Vaccine Reminder", 
                    Description = "Desktop application for managing pet vaccination schedules.", 
                    ImageUrl = "/pet.jpg",
                    Tags = new List<string> { "Java", "MySQL" },
                    GitUrl = "https://github.com/kavishka-rasanjana/pet-reminder.git",
                    DemoUrl = ""
                }
            };
            
            return Ok(projects);
        }
    }
}