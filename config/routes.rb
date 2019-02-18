Rails.application.routes.draw do
  get '/contact', to: 'contact#index'
  get '/portfolio', to: 'portfolio#index'
  get '/projects', to: 'projects#index'
  get '/projects/chess', to: 'projects#chess'
  #get '/home/resume'
  #get '/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
end
