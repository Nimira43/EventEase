using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivitiyValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
  public EditActivitiyValidator() : base(x => x.ActivityDto)
  {
    RuleFor(x => x.ActivityDto.Id)
      .NotEmpty().WithMessage("Id is required.");
  }
}
