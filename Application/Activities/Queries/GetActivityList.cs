using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
  public class Query : IRequest<List<Activity>> { }

  public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
  {
    public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
    {
      try
      {
        for (int i = 0; i < 10; i++)
        {
          cancellationToken.ThrowIfCancellationRequested();
          await Task.Delay(1000, cancellationToken);
        }
      }
      catch (System.Exception)
      {
        throw;
      }

      return await context.Activities.ToListAsync(cancellationToken);
    }
  }
}
