# INTRODUCTION

This API is a simple and user-friendly application programming interface designed to perform basic CRUD (Create, Read, Update, Delete) operations on a single attribute: a person's name. This API serves as a fundamental building block for managing and maintaining a list of names in a database.

The API functionalities includes:

1. Display names - Stored names in the database can be access by passing the id for each name. An endpoint that shows all the names and id has been created for the purpose of testing so that id for each name can be seen and used.
2. Delete names.
3. Add names.
4. Update names.

## Getting started

### Installation

Developers who are interested in using this API should have node installed on their local machines if not already installed.

### Clone the repository

Create and activate the virtual environment.

```
git clone https://github.com/LivingHopeDev/job-portal.git

```

To install all packages in the requirement, run `pip install -r requirements.txt`

To run the application, run the following commands

```
$env:FLASK_APP = "flaskr"
$env:FLASK_DEBUG = "True"
flask run

```

The application will run by default on `http://127.0.0.1:5000/`.

## API Reference

### Error Handling

All errors have been formatted and would be returned as JSON objects has soon below.

```
{
  "error": 405,
  "message": "method not allowed",
  "success": false
}

```

Other error handlers includes:
404: Not found
422: Unprocessable
400: Bad request

### Endpoints

To test for the endpoints, the developer should have installed Postman or thunder client or any other application with similar capability or use curl.

#### GET /categories

Returns a list of categories with a success value and the total number of categories.
Sample: `http://127.0.0.1:5000/categories`

```
{
 "categories": {
   "1": "Science",
   "2": "Art",
   "3": "Geography",
   "4": "History",
   "5": "Entertainment",
   "6": "Sports"
 },
 "success": true,
 "total_categories": 6
}

```

#### GET /questions

Returns a list of categories, with questions which is a list of dictionaries having answers, category, difficulty, id and question as the keys.

The result are paginated in groups of 10.

sample: `http://127.0.0.1:5000/questions`

```
{
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "questions": [
    {
      "answer": "Apollo 13",
      "category": "5",
      "difficulty": 4,
      "id": 2,
      "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
    },
    {
      "answer": "Tom Cruise",
      "category": "5",
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Maya Angelou",
      "category": "4",
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": "5",
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    },
    {
      "answer": "Muhammad Ali",
      "category": "4",
      "difficulty": 1,
      "id": 9,
      "question": "What boxer's original name is Cassius Clay?"
    },
    {
      "answer": "Brazil",
      "category": "6",
      "difficulty": 3,
      "id": 10,
      "question": "Which is the only team to play in every soccer World Cup tournament?"
    },
    {
      "answer": "Uruguay",
      "category": "6",
      "difficulty": 4,
      "id": 11,
      "question": "Which country won the first ever soccer World Cup in 1930?"
    },
    {
      "answer": "George Washington Carver",
      "category": "4",
      "difficulty": 2,
      "id": 12,
      "question": "Who invented Peanut Butter?"
    },
    {
      "answer": "Lake Victoria",
      "category": "3",
      "difficulty": 2,
      "id": 13,
      "question": "What is the largest lake in Africa?"
    },
    {
      "answer": "The Palace of Versailles",
      "category": "3",
      "difficulty": 3,
      "id": 14,
      "question": "In which royal palace would you find the Hall of Mirrors?"
    }
  ],
  "success": true,
  "total_questions": 21
}

```

#### DELETE /questions/{question_id}

Deletes the question of a given id if it exist and returns the id of the deleted question, success value and the questions left in the database are paginated in groups of 10 with the total number of the questions in the database.

sample: `http://127.0.0.1:5000/questions/21`

```
{
  "question deleted": 21,
  "questions": [
    {
      "answer": "Apollo 13",
      "category": "5",
      "difficulty": 4,
      "id": 2,
      "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
    },
    {
      "answer": "Tom Cruise",
      "category": "5",
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Maya Angelou",
      "category": "4",
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": "5",
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    },
    {
      "answer": "Muhammad Ali",
      "category": "4",
      "difficulty": 1,
      "id": 9,
      "question": "What boxer's original name is Cassius Clay?"
    },
    {
      "answer": "Brazil",
      "category": "6",
      "difficulty": 3,
      "id": 10,
      "question": "Which is the only team to play in every soccer World Cup tournament?"
    },
    {
      "answer": "Uruguay",
      "category": "6",
      "difficulty": 4,
      "id": 11,
      "question": "Which country won the first ever soccer World Cup in 1930?"
    },
    {
      "answer": "George Washington Carver",
      "category": "4",
      "difficulty": 2,
      "id": 12,
      "question": "Who invented Peanut Butter?"
    },
    {
      "answer": "Lake Victoria",
      "category": "3",
      "difficulty": 2,
      "id": 13,
      "question": "What is the largest lake in Africa?"
    },
    {
      "answer": "The Palace of Versailles",
      "category": "3",
      "difficulty": 3,
      "id": 14,
      "question": "In which royal palace would you find the Hall of Mirrors?"
    }
  ],
  "success": true,
  "total_question": 20
}

```

#### POST /questions

This endpoint adds a new question, answer, category, difficulty to the database. It returns a success value, paginated questions to update the frontend and the id of the newly created question.
sample: `http://127.0.0.1:5000/questions`

Json body sent

```
{
   "question": "test question",
   "answer": "test answer",
   "difficulty": 1,
   "category":3

}
```

```
{
 "questions": [
   {
     "answer": "Apollo 13",
     "category": "5",
     "difficulty": 4,
     "id": 2,
     "question": "What movie earned Tom Hanks his third straight Oscar nomination, in 1996?"
   },
   {
     "answer": "Tom Cruise",
     "category": "5",
     "difficulty": 4,
     "id": 4,
     "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
   },
   {
     "answer": "Maya Angelou",
     "category": "4",
     "difficulty": 2,
     "id": 5,
     "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
   },
   {
     "answer": "Edward Scissorhands",
     "category": "5",
     "difficulty": 3,
     "id": 6,
     "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
   },
   {
     "answer": "Muhammad Ali",
     "category": "4",
     "difficulty": 1,
     "id": 9,
     "question": "What boxer's original name is Cassius Clay?"
   },
   {
     "answer": "Brazil",
     "category": "6",
     "difficulty": 3,
     "id": 10,
     "question": "Which is the only team to play in every soccer World Cup tournament?"
   },
   {
     "answer": "Uruguay",
     "category": "6",
     "difficulty": 4,
     "id": 11,
     "question": "Which country won the first ever soccer World Cup in 1930?"
   },
   {
     "answer": "George Washington Carver",
     "category": "4",
     "difficulty": 2,
     "id": 12,
     "question": "Who invented Peanut Butter?"
   },
   {
     "answer": "Lake Victoria",
     "category": "3",
     "difficulty": 2,
     "id": 13,
     "question": "What is the largest lake in Africa?"
   },
   {
     "answer": "The Palace of Versailles",
     "category": "3",
     "difficulty": 3,
     "id": 14,
     "question": "In which royal palace would you find the Hall of Mirrors?"
   }
 ],
 "questions_id": 40,
 "success": true
}
```

#### POST /questions/search

This endpoint search for quetions that has a particular keyword inserted into the search box, it's case insensitive. It returns a success value, the list of qustions with the searched keyword and the total number of the questions associated with the keyword.

sample: `http://127.0.0.1:5000/questions/search`

Json body sent
{
"searchTerm": "autobiography"
}

```
{
  "questions": [
    {
      "answer": "Maya Angelou",
      "category": "4",
      "difficulty": 2,
      "id": 5,
      "question": "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
    }
  ],
  "success": true,
  "total_questions": 1
}
```

### GET /categories/{id}/questions

Returns a list of questions, in the given category, success value and category total_questions. Paginated questions to update the frontend.

sample: `http://127.0.0.1:5000/categories/6/questions`

```
{
  "current_category": "Sports",
  "questions": [
    {
      "answer": "Brazil",
      "category": "6",
      "difficulty": 3,
      "id": 10,
      "question": "Which is the only team to play in every soccer World Cup tournament?"
    },
    {
      "answer": "Uruguay",
      "category": "6",
      "difficulty": 4,
      "id": 11,
      "question": "Which country won the first ever soccer World Cup in 1930?"
    }
  ],
  "success": true,
  "total_questions": 2
}

```

### POST /quizzes

Accept the selected category as well as the question associated with the category and it returns the next question in the same category.

sample: `http://127.0.0.1:5000/quizzes`
JSON body sent

```
{
 "quiz_category": {"type": "click", "id": "1"}, "previous_questions": [2, 3, 4]
}
```

```
{
  "question": {
    "answer": "The Liver",
    "category": "1",
    "difficulty": 4,
    "id": 20,
    "question": "What is the heaviest organ in the human body?"
  },
  "success": true
}
```
