import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  const domainsStrings = domains.join('|');
  const reg = new RegExp(`^[^@]{6,}@gmail\.${domainsStrings}$`);

  return (control) => {
    return control.value === '' || reg.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
