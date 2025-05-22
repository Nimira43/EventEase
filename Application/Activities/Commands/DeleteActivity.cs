using System;
using MediatR;

namespace Application.Activities.Commands;

public class DeleteActivity
{
  public class Command : IRequest
  {
    public required string Id { get; set; }
  }
}
