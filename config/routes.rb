Rails.application.routes.draw do
  get 'contact/index'
  get 'portfolio/index'
  get 'about/index'
  get 'projects/index'
  get 'projects/chess'
  get 'home/resume'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
end
