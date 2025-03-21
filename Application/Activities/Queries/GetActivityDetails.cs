using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
  public class Query : IRequest<Activity>
  {
    public required string Id { get; set; }
  }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
