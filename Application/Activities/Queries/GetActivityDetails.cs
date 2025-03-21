using System;
using Domain;
using MediatR;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
  public class Query : IRequest<Activity>
  {
    public required string Id { get; set; }
  }
}
