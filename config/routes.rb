Rails.application.routes.draw do
  get '/'     => 'chats#index'
  get 'chats' => 'chats#index'
end