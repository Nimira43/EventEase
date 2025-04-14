using System;
using MediatR;

namespace Application.Activities.Commands;

public class EditActivity
{
  public class Command : IRequest
  {
    public required Activity Activity { get; set; }
  }
}
