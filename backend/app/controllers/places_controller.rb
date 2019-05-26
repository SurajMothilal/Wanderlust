class PlacesController < ApplicationController
    def index
        render(:json => PlaceService.new.get_places)
    end
end