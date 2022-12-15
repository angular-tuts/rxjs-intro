import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

//An observable is a collection of items emitted over time. It connects an observer to a source of data or events
//An Observer observes notifications from the observable. It provides methods for reaction to the notifications next(), error(), complete()
//When you hear of observer, think of a set of functions to observe and response to emitted items in error or completion
// Subscriber is an observer that can unsubscribe from an observerble 
// A Subscription tells the observable that the subscriber is ready for notifications
//the observable subscribe method returns a subscription and we use that subscription to unscubscribe
//We use creation functions like from(), of(), fromEvent() inerval ... to create observables
//We can create observables from anything
// of() from() and take() automatically completes and unsubscribe 




  constructor() { }

  ngOnInit(): void {
    // Observables have three methods; next(argument), error(argument) and complete()
    // When subscribing. We are implementing the next method; then do some operation with it
    // example subscribe((response) => console.log(response))

    // creating observables with of() function
    
    // THis observable emits 4 numbers then completes.
    of(2, 4, 6, 8).subscribe(item => console.log(item));


    //Observable using from() function.
    //Passing an observer/subscriber in the subscribe

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log('resulting item .. ', item),
      error: (err) => console.log("error orcurred", err),
      complete: () => console.log("complete")
    });

    //Creating observables of strings
    of('Apple 1', 'Apple 2', 'Apple 3').subscribe({
      next: (item) => console.log('resulting item .. ', item),
      error: (err) => console.log("error orcurr", err),
      complete: () => console.log('No more apples. go home')
    });
  }


}
