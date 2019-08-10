// 例子来源
// https://codepen.io/goldhand/pen/NNKwpg

/*************************************
 *     +--------------------+
 *     |       Subject      |
 *     |    (Observable)    |
 *     +--^------------+----+
 *        |            |
 *    Subscribe     FireEvent
 *        |            |
 *        |            |
 *     +--+------------v----+
 *     |                    |
 *     |      Observer      |
 *     |                    |
 *     +--------------------+
 *
 *****************************************/

(() => {
  // Observable --> Subject
  class Observable {
    constructor() {
      this.observers = [];
    }
    add(obj) {
      return this.observers.push(obj);
    }
    notify_observers(...args) {
      for (observer of this.observers) {
        observer.notify(this, ...args);
      }
    }
  }

  class Observer {
    constructor(observable) {
      observable.add(this);
    }
    notify(observable, ...args) {
      [...args].forEach(arg => {
        this.notifyFn(arg);
      });
    }
    notifyFn(arg) {
      console.log(arg);
    }
  }

  let subject = new Observable(),
    observer = new Observer(subject);

  subject.notify_observers("foo", "bar");

  class ObservableElement extends Observable {
    constructor(elem) {
      super();
      this.elem = elem;
      this.registerClick();
    }

    registerClick() {
      this.elem.addEventListener("click", e => {
        this.clickFn();
      });
    }

    clickFn() {
      this.notify_observers(this);
    }
  }

  class ElementAddObserver extends Observer {
    constructor(observable, resultsElem) {
      super(observable);
      this.results = resultsElem;
    }

    notifyFn(arg) {
      let li = new ObservableElement(document.createElement("li"));
      li.elem.innerText = "clicked";
      this.results.appendChild(li.elem);
      new ElementDeleteObserver(li);
    }
  }

  class ElementDeleteObserver extends Observer {
    notifyFn(arg) {
      arg.elem.remove();
    }
  }

  let buttonSubject = new ObservableElement(document.querySelector("button")),
    buttonObserver = new Observer(buttonSubject),
    buttonElementObserver = new ElementAddObserver(
      buttonSubject,
      document.querySelector("#results")
    );

  buttonSubject.notify_observers("come on click me");
})();
