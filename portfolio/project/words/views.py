from django.shortcuts import render
from .models import PickedWord , PickedDefinition
from django.core.cache import cache
import datetime
from words.management.commands.word_picker import pick_random_word


# Create your views here

def index(request):

    # Check if a word has already been picked for the day
    today = datetime.date.today().isoformat()
    cached_data = cache.get(today)

    if cached_data:
        # If a word has already been picked, retrieve it from the cache
        word, definition, _ = cached_data
    else:
        # If not, trigger the management command to fetch a new word
        from django.core.management import call_command
        call_command('fetch_word')

        # Retrieve the word and definition from the cache
        cached_data = cache.get(today)
        word, definition, _ = cached_data

    # Pass word and definition to the template context
    context = {
        'word': word,
        'definition': definition
    }
    # Render the template with the context
    return render(request, 'index.html', context=context)