# words/management/commands/fetch_word.py
from django.core.management.base import BaseCommand
from django.core.cache import cache
from words.management.commands.word_picker import pick_random_word
import datetime

class Command(BaseCommand):
    help = 'Fetches a new word and definition and caches them for the day'

    def handle(self, *args, **kwargs):
        # Fetch a new word and definition
        word, definition, _ = pick_random_word()

        # Store the word and definition in the cache with today's date as the key
        today = datetime.date.today().isoformat()
        cache.set(today, (word, definition, _), timeout=None)

        self.stdout.write(self.style.SUCCESS(f'Successfully fetched and cached word for {today}'))
