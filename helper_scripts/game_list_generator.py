import sqlite3
import json
import sys 

DB_NAME = "Lists.db"

def create_game_object(id, title, status, recommendation, review, studio, genre):
    """
    Creates a dictionary representing a game object with the specified attributes.
    """
    return {
        "id": id,
        "title": title,
        "status": status,
        "recommendation": recommendation,
        "review": review,
        "studio": studio,
        "genre": genre,
    }


def create_database(db_name):
    """
    Creates a new SQLite database with a table named 'games' if it doesn't exist.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    c.execute(
        """CREATE TABLE IF NOT EXISTS games (
              id INTEGER PRIMARY KEY,
              title TEXT NOT NULL,
              status TEXT,
              recommendation INTEGER,
              review TEXT,
              studio TEXT,
              genre TEXT
            )"""
    )
    conn.commit()
    conn.close()


def insert_game(db_name, game_object):
    """
    Inserts a game object (dictionary) into the 'games' table of the SQLite database.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    # Use placeholder values (?) and tuple for data to prevent SQL injection
    c.execute(
        """INSERT INTO games (id, title, status, recommendation, review, studio, genre)
              VALUES (?, ?, ?, ?, ?, ?, ?)""",
        (
            game_object["id"],
            game_object["title"],
            game_object["status"],
            game_object["recommendation"],
            game_object["review"],
            game_object["studio"],
            json.dumps(game_object["genre"]),
        ),
    )  # Convert genre list to JSON string
    conn.commit()
    conn.close()


def main():
    """
    Prompts the user for game information and stores it in a SQLite database.
    """
    db_name = DB_NAME
    create_database(db_name)  # Create the database if it doesn't exist

    num_games = int(input("Enter the number of games: "))
    for _ in range(num_games):
        title = input("Enter game title: ")
        
        status = input("Enter game status (finished, playing, etc.): ")
        status = None if status == "" else status
        
        try:
            recommendation = int(input("Enter recommendation rating (out of 5): "))
        except:
            recommendation = None
            
        review = input("Enter your review (optional): ")
        review = None if review == "" else review
        
        studio = input("Enter game studio: ")
        genre = input("Enter game genres (comma-separated): ").split(",")

        # Find the latest ID by querying the database (prevents conflicts)
        conn = sqlite3.connect(db_name)
        c = conn.cursor()
        c.execute("SELECT MAX(id) FROM games")
        max_id_result = c.fetchone()
        max_id = max_id_result[0] if max_id_result else 0
        conn.close()

        new_id = max_id + 1

        game_object = create_game_object(
            new_id, title, status, recommendation, review, studio, genre
        )
        insert_game(db_name, game_object)

    print("Games successfully recorded in", db_name, "!")


def export_games_to_json(db_name, output_file):
    """
    Extracts game data from the 'games' table of the SQLite database and exports it as a JSON file.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    c.execute("SELECT * FROM games ORDER BY title ASC")  # Fetch all game data

    games = []
    count = 1
    for row in c:
        # Create a game object dictionary with database column values
        game_object = {
            "id": count,
            "title": row[1],
            "status": row[2],
            "recommendation": row[3],
            "review": row[4],
            "studio": row[5],
            "genre": json.loads(row[6]),  # Convert JSON string back to a list
        }
        games.append(game_object)
        count += 1

    conn.close()

    with open(output_file, "w") as outfile:
        json.dump(games, outfile, indent=4)

    print(f"Games successfully exported to {output_file}!")


def load_games_from_json(db_name, json_file):
    """
    Loads game data from a JSON file and appends it to the 'games' table of the SQLite database.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    with open(json_file, "r") as infile:
        games_data = json.load(infile)

    for game in games_data:
        # Extract data from the game object
        id = game["id"]
        title = game["title"]
        status = game.get("status")  # Handle optional 'status' key
        recommendation = game.get(
            "recommendation"
        )  # Handle optional 'recommendation' key
        review = game.get("review")  # Handle optional 'review' key
        studio = game.get("studio")  # Handle optional 'studio' key
        genre = json.dumps(game["genre"])  # Convert genre list to JSON string

        # Insert the game data into the database
        c.execute(
            """INSERT OR IGNORE INTO games (id, title, status, recommendation, review, studio, genre)
              VALUES (?, ?, ?, ?, ?, ?, ?)""",
            (id, title, status, recommendation, review, studio, genre),
        )

    conn.commit()
    conn.close()

    print(f"Games successfully appended to {db_name}!")


if __name__ == "__main__":
    arg = sys.argv[1]
    if arg == "entry":
        main()
    elif arg == "load_json":
        load_games_from_json(db_name, "../src/data/gamesList.json")
    elif arg == "create_db":
        create_database(DB_NAME)
    elif arg == "export_json":
        export_games_to_json(DB_NAME, "../src/data/gamesList.json")
