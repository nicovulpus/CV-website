import random
import sqlite3
import openai
import os
import random
from django.core.management.base import BaseCommand
from words.models import PickedWord 
import datetime


# Set your OpenAI API key
api_key = "sk-proj-lPkjSuXFMwAfbOU9Aft6T3BlbkFJtagHePKh4VqMIzeriq4h"
openai.api_key = api_key

def pick_random_word():
    # Connect to your SQLite database
    conn = sqlite3.connect('dictionary.db')
    cursor = conn.cursor()
    
    # Get the maximum ID from the EnglishWords table
    cursor.execute("SELECT MAX(id) FROM english_words")
    max_id = cursor.fetchone()[0]

    while True:
        # Generate a random ID between 1 and max_id
        random_id = random.randint(1, max_id)

        # Check if the random ID exists in the picked_words table
        cursor.execute("SELECT COUNT(*) FROM picked_words WHERE id = ?", (random_id,))
        count = cursor.fetchone()[0]

        if count == 0:
            # If the random ID does not exist in the picked_words table, retrieve the word
            cursor.execute("SELECT words FROM english_words WHERE id = ?", (random_id,))
            word = cursor.fetchone()[0]

            # Call OpenAI API to get definition
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You will receive an English word and you will return only the definition of this word and nothing else."},
                    {"role": "user", "content": word}
                ]
            )

            # Extract definition from response
            definition = response.choices[0].message["content"].strip()

            # Insert word, definition, and random ID into picked_words table
            cursor.execute("INSERT INTO picked_words (id, words, definitions) VALUES (?, ?, ?)", (random_id, word, definition))
            conn.commit()

            # Delete corresponding row from english_words table
            cursor.execute("DELETE FROM english_words WHERE id = ?", (random_id,))
            conn.commit()

            # Close the connection
            conn.close()

            # Return word, definition, and random ID
            return word, definition, random_id

# Call the function
word, definition, random_id = pick_random_word()
print("Random Word:", word)
print("Definition:", definition)
print("Random ID:", random_id)

