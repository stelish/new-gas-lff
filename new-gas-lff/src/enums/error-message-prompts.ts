export class ErrorMessagePrompts {
  DEFAULT_INVALID_CC:string = 'Please review and complete';
  DEFAULT_ERROR_CC:string = "There was a system error trying to book this package, please try again later.";

  PACKAGE_ALREADY_PURCHASED = "The package has already been successfully purchased.";

  DEFAULT_INVALID_SIGNIN:string = 'Please check following fields:'

  REGISTRATION_SYSTEM_ERROR_PROMPT:string = 'There was a system error trying to register. Please try again later.';
  REGISTRATION_FORM_ERROR_PROMPT:string = 'Please check all fields are correct.';
  REGISTRATION_FORM_ERROR_USERNAME_EXISTS_PROMPT:string = 'Your username is already registered in our system. Please log in with the username and password that you previously created or call us on 0800 352 266.';
  REGISTRATION_FORM_ERROR_EMAIL_EXISTS_PROMPT:string = 'Your email address is already registered in our system. Please log in with the username and password that you previously created or call us on 0800 352 266.';
}
