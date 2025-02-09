using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext : DbContext
{
  public required DbSet<Activity> Activities { get; set; }
}
