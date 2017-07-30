import { observable, action } from 'mobx';
import TripApi from '../services/TripApi';

class TripStore {
  @observable trip = {};
  @observable checkins = [];

  constructor() {
    this.tripApi = new TripApi();
  }
}

const store = new TripStore();
export default store;