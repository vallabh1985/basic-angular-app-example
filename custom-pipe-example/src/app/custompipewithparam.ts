import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'customPipeWithParam'})
export class customPipeWithParam implements PipeTransform{
    transform(value:string,param1:string){
        return value + ' -- ' + param1;
    }
}