import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-async-pipe-example',
  templateUrl: './async-pipe-example.component.html',
  styleUrls: ['./async-pipe-example.component.scss']
})
export class AsyncPipeExampleComponent implements OnInit {



  // https://www.youtube.com/watch?v=2T3F5TfrYwI
  constructor() { }

  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '1', name: 'Mike', isActive: true },

  ]

  
  //Converting data into stream with of
  users$ = of(this.users)

  //Transforming the stream we have to use a pipe functions
  //pipe can take multiple functions
  usernames$ = this.users$.pipe( map((users) => users.map( (user) => user.name)))

  //Another way of converting data into stream with Behavior Subject
  //-  Behavior Subject is a stream that we can update
  // - We give it a model type or null after we fetch data, but initially it is  set to null
  // - We can update it with the next method.
  usersbehavior$ = new BehaviorSubject< {id: string; name: string} | null>(null)


//From event from RxJs while working with events from the DOM
documentClik$ = fromEvent(document, 'click')



//We can combiine all of our streams into one
data$ = combineLatest()

  ngOnInit(): void {
    console.log ("user before adding data", this.usersbehavior$.value)
  
      this.usersbehavior$.next({ id: "3", name: "Peter"})
      this.usersbehavior$.subscribe((user) => {
        console.log ("user after adding data",user)
      }
    )
  

    this.documentClik$.subscribe((e) => {
      console.log('e', e)
    })
  
}

    // IF YOU SUBSCRIBE LIKE THIS YOU MUST UNSUBCRIBE BUT IF USE ASYNC PIPE ANGULAR UNSUBSCRIBE BY ITSELF
    /* 
      this.users$.subscribe((data) => {
        console.log(data)
      })


    */

}

