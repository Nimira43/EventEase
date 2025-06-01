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
        for (int i = 0; i < length; i++)
        {
          
        }
      }
      catch (System.Exception)
      { 

      }

      return await context.Activities.ToListAsync(cancellationToken);
    }
  }
}
