import { FormGroup, ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(passValue: string,repassValue:string ) :ValidatorFn {

    
    return(control) => {
        const group = control as FormGroup
        const passCtr1 = group.get(passValue)
        const rePassCtr2 = group.get(repassValue)

        return passCtr1?.value === rePassCtr2?.value ? null : {matchPasswordsValidator:true}
        
    }

}