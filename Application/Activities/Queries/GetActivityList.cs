using System;
using Domain;
using MediatR;

namespace Application.Activities.Queries;

public class GetActivityList
{
  public class Query : IRequest<List<Activity>> {}
}
