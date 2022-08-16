from inertia import render


def home(request):
    return render(request, 'Events/Index', props={
        'events': ['An event', 'another event', 'Yet another event']
    })


def contact(request):
    return render(request, 'Contact', props={
        'supportEmail': 'test@example.org'
    })
