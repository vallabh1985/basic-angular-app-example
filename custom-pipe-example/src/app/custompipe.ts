import {Pipe,PipeTransform} from '@angular/core';


@Pipe({name:'customPipe'})
export class customPipe implements PipeTransform{
    transform(value:string){
        return value + ' World';
    }
}