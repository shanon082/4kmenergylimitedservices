from django.shortcuts import render
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import ContactForm
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')  # This should point to an existing template

def about(request):
    return render(request, 'about.html')  

def services(request):
    return render(request, 'services.html')  

def contact(request):
    return render(request, 'contact.html')  

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.save()

            # Send email notification
            subject = f"New Contact Message from {message.name}"
            body = f"You have received a new message from {message.name}.\n\nEmail: {message.email}\n\nMessage:\n{message.message}"
            sender_email = message.email
            recipient_email = ["4kmconstructionlimitedservices@gmail.com"]  # Replace with actual email

            try:
                send_mail(subject, body, sender_email, recipient_email, fail_silently=False)
                success_message = "Message sent successfully!"
            except Exception as e:
                success_message = "Message saved, but email sending failed."

            return render(request, "contact.html", {"form": ContactForm(), "success_message": success_message})

    else:
        form = ContactForm()

    return render(request, "contact.html", {"form": form})

# Create your views here.
