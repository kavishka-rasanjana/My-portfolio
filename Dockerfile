# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["MyPortfolioAPI.csproj", "./"]
RUN dotnet restore "MyPortfolioAPI.csproj"
COPY . .
RUN dotnet publish "MyPortfolioAPI.csproj" -c Release -o /app/publish

# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyPortfolioAPI.dll"]