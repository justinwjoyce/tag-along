import ActionCable from 'actioncable';

export default class TripApi {
  constructor() {
    // for use later on in article when we talk about websockets
    this.cable = ActionCable.createConsumer('/cable');
    this.subscription = false;
  }

  createTrip = (name) => {
    return fetch('/trips', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        trip: {name}
      })
    }).
    then(response => response.json());
  }
}