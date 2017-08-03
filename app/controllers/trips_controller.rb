class TripsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    clean_old_trips
    trip = Trip.create!(trip_params)
    render json: trip.to_json
  end

end