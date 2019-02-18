class ApplicationController < ActionController::Base
  before_action :log_connection

  def log_connection
    c = Connection.new
    c.ip = request.remote_ip
    c.path = request.path
    c.save
  end
end
