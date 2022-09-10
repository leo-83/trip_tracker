Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    # this is where all of our routes will be 

    # manually 
    # http verb, url, to: 'controller#action', as: 'nickname'
    # get '/subs', to: 'subs#index'
    # get '/sub/:id', to: 'subs#show'
    # post '/subs', to: 'subs#create'
    # put '/sub/:id', to: 'subs#update'
    # delete '/sub/:id', to: 'subs#destroy'
    # :id - place holder for the actual id value 
      # custom routes - out side of the crud actions 
      # get '/url', to: 'controller#action'
      # get '/ordered-subs', to: 'subs#osubs'

    # rails g way 
    # resources :name ofcontroller 
    # handles the main CRUD actions 
    # only do two levels deep
    resources :users do
      resources :trips
    end
    resources :trips, except: [:index, :show, :create, :update, :destroy] do
      resources :locations
    end
    resources :locations, except: [:index, :show, :create, :update, :destroy] do
      resources :addresses 
    end
# model with a parent and child then we need to do a do block
# only do two levels deep
    # resources :parent1 do
    #   resources :child2
    # end
    # to view the routes 
  # in terminal - bundle exec rails routes 
  # recommends - first run your server - 
    # bundle exec rails s -p 3001
    # go to the url of http://localhost:3001/rails/info/routes
    
  end
end
