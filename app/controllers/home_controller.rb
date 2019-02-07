class HomeController < ApplicationController
  def index
  end

  def resume
    send_file(
      "#{Rails.root}/public/files/Resume.pdf",
      filename: "adam-petersen-resume.pdf",
      type: "application/pdf"
    )
  end
end
