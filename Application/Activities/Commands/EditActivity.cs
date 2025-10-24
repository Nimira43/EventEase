using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
  public class Command : IRequest
  {
    public required Activity Activity { get; set; }
  }

  public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
  {
    public async Task Handle(Command request, CancellationToken cancellationToken)
    {
      var activity = await context.Activities
        .FindAsync([request.Activity.Id], cancellationToken)
          ?? throw new Exception("Cannot find activity.");

      mapper.Map(request.Activity, activity);

      await context.SaveChangesAsync(cancellationToken);
    }
  }
}

// using System;
// using AutoMapper;
// using Domain;
// using MediatR;
// using Persistence;

// namespace Application.Activities.Commands;

// public class EditActivity
// {
//   public class Command : IRequest<Activity>
//   {
//     public required Activity Activity { get; set; }
//   }

//   public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Activity>
//   {
//     public async Task<Activity> Handle(Command request, CancellationToken cancellationToken)
//     {
//       var activity = await context.Activities
//         .FindAsync([request.Activity.Id], cancellationToken)
//           ?? throw new Exception("Cannot find activity.");

//       mapper.Map(request.Activity, activity);

//       await context.SaveChangesAsync(cancellationToken);
      
//       return activity;
//     }
//   }
// }
