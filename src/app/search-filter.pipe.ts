import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(!value)return null;
      if(!args)return value;

      args = args.toLowerCase();

      return value.filter(function(data:any){
     if(
      args.startsWith('a')
     ){
      return JSON.stringify(data).toLowerCase().includes(args) || JSON.stringify(data).toLowerCase().includes('true');
     }
     else if(
       args.startsWith('u')

     ){
      return JSON.stringify(data).toLowerCase().includes(args) || JSON.stringify(data).toLowerCase().includes('false');

     }
     else{
      return JSON.stringify(data).toLowerCase().includes(args);

     }
      });
  }

}