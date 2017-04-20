class Contact < MailForm::Base
  validates :name, :email, :message, presence: true
  validates :email, format: /@/
  validates :phone, length: { minimum: 10 }

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "Message from China Pacific Website",
      to: "your_email@example.org",
      from: %("#{name}" <#{email}>)
    }
  end
end
