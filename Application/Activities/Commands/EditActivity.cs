using System;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
  public class Command : IRequest
  {
    public required Activity Activity { get; set; }
  }

  public class Handler(AppDbContext context) : IRequestHandler<Command>
  {
    public Task Handle(Command request, CancellationToken cancellationToken)
    {
      throw new NotImplementedException();
    }
  }
}
