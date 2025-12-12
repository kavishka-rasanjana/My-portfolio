var builder = WebApplication.CreateBuilder(args);

// 1. Services ටික එකතු කිරීම
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// *** මෙන්න මේ පේළිය තමයි ඔයාට මගහැරිලා තිබුනේ ***
builder.Services.AddAuthorization(); 

// Frontend එකට Data දෙන්න CORS Service එක දාමු
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// 2. Middleware ටික (වැඩ කරන පිළිවෙල)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS එක Authorization වලට කලින් තියෙන්න ඕන
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();