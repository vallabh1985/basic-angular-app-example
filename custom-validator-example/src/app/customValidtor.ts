import {AbstractControl,ValidatorFn} from '@angular/forms';


export function restictedNameCheck(control:AbstractControl):{[key:string]:any} | null {
    if(control.value.trim() =='admin'){
        return {'NameNotAllowed':true};
    }

    return null;
}


export function validationWithParam(myparam:RegExp): ValidatorFn
{
    return (control:AbstractControl):{[key:string]:any} | null => {
        const notAllowed= myparam.test(control.value);
        return notAllowed ? {'ParamNameNotAllowed': {myvariable: control.value}} : null;
    };
}
