import { Component, OnInit } from '@angular/core';
import { map, of, tap, take } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Each emitted item can be piped through a set of operatorsComponent
    // The items can be transformed, filtered, process
    //We call the pipe() method of the observable then pass operators separated by commas 


    
    // of(2, 4, 6, 8).pipe(
    //   map(item => item * 2),
    //   tap(item => console.log(item)),
    //   take(3)
    // ).subscribe(item => console.log(item))


    //The map operator transforms each emitted item
    //Use map for making changes to eahc items

    
console.log("=====================================")

console.log("map()")
    of(2, 3).pipe(
      map(item => item * 3),
      map(item => item - 4)
    ).subscribe(x => console.log(x))

console.log("=====================================")
    //The tap is a utility operator that performs and operation that does not affect the emitted items
    //It is used for degubbing and performing actions outside of the floe of data (side effects)
    console.log("tap()")
     of(3, 9).pipe(
      tap(item => console.log(item)),
      map(item => item * 2),
      tap(item => console.log(item)),
     ).subscribe(item => console.log(item))


     console.log("=====================================")
     console.log("take()")

     //The take operator emits a specified number of strictInputAccessModifiers//
     // Use take for taking a specified number of items. Also use for limiting unlimited observables

     of(2, 4, 6)
     .pipe(
      take(2)
     ).subscribe(item => console.log(item))

  }




}
