import sqlite3
import json
import sys

DB_NAME = "Lists.db"

def create_game_object(id, title, provider, recommendation, review, link, topics):
    """
    Creates a dictionary representing a resources object with the specified attributes.
    """
    return {
        "id": id,
        "title": title,
        "provider": provider,
        "recommendation": recommendation,
        "review": review,
        "link": link,
        "topics": topics,
    }


def create_database(db_name):
    """
    Creates a new SQLite database with a table named 'resources' if it doesn't exist.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    c.execute(
        """CREATE TABLE IF NOT EXISTS resources (
              id INTEGER PRIMARY KEY,
              title TEXT NOT NULL,
              provider TEXT NOT NULL,
              recommendation INTEGER,
              review TEXT,
              link TEXT,
              topics TEXT
            )"""
    )
    conn.commit()
    conn.close()


def insert_game(db_name, resource_object):
    """
    Inserts a resource object (dictionary) into the 'resources' table of the SQLite database.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    # Use placeholder values (?) and tuple for data to prevent SQL injection
    c.execute(
        """INSERT INTO resources (id, title, provider, recommendation, review, link, topics)
              VALUES (?, ?, ?, ?, ?, ?, ?)""",
        (
            resource_object["id"],
            resource_object["title"],         
            resource_object["provider"],
            resource_object["recommendation"],
            resource_object["review"],
            resource_object["link"],
            json.dumps(resource_object["topics"]),
        ),
    )  # Convert genre list to JSON string
    conn.commit()
    conn.close()


def main():
    """
    Prompts the user for resource information and stores it in a SQLite database.
    """
    db_name = DB_NAME
    create_database(db_name)  # Create the database if it doesn't exist

    num_games = int(input("Enter the number of resources: "))
    for _ in range(num_games):
        title = input("Enter resource title: ")
        
        provider = input("Enter resource provider: ")
        
        try:
            recommendation = int(input("Enter recommendation rating (out of 5): "))
        except:
            recommendation = None
            
        review = input("Enter your review (optional): ")
        review = None if review == "" else review
        
        link = input("Enter resource URL: ")
        topics = input("Enter resource topics (comma-separated): ").split(",")

        # Find the latest ID by querying the database (prevents conflicts)
        conn = sqlite3.connect(db_name)
        c = conn.cursor()
        c.execute("SELECT MAX(id) FROM resources")
        print(c)
        max_id_result = c.fetchone()
        print( max_id_result )
        max_id = 0 if None in max_id_result else max_id_result[0]
        conn.close()
        
        new_id = max_id + 1

        game_object = create_game_object(
            new_id, title, provider, recommendation, review, link, topics
        )
        insert_game(db_name, game_object)

    print("resources successfully recorded in", db_name, "!")


def export_resources_to_json(db_name, output_file):
    """
    Extracts resource data from the 'resources' table of the SQLite database and exports it as a JSON file.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()
    c.execute("SELECT * FROM resources ORDER BY title ASC")  # Fetch all game data

    resources = []
    count = 1
    for row in c:
        # Create a game object dictionary with database column values
        game_object = {
            "id": count,
            "title": row[1],
            "provider": row[2],
            "recommendation": row[3],
            "review": row[4],
            "link": row[5],
            "topics": json.loads(row[6]),  # Convert JSON string back to a list
        }
        resources.append(game_object)
        count += 1

    conn.close()

    with open(output_file, "w") as outfile:
        json.dump(resources, outfile, indent=4)

    print(f"resources successfully exported to {output_file}!")


def load_games_from_json(db_name, json_file):
    """
    Loads resources data from a JSON file and appends it to the 'resources' table of the SQLite database.
    """
    conn = sqlite3.connect(db_name)
    c = conn.cursor()

    with open(json_file, "r") as infile:
        resources_data = json.load(infile)

    for resources in resources_data :
        # Extract data from the resources object
        id = resources["id"]
        title = resources["title"]
        provider = resources["provider"]
        recommendation = resources.get(
            "recommendation"
        )  # Handle optional 'recommendation' key
        review = resources.get("review")  # Handle optional 'review' key
        link = resources.get("link")  # Handle optional 'studio' key
        topics = json.dumps(resources["genre"])  # Convert genre list to JSON string

        # Insert the game data into the database
        c.execute(
            """INSERT OR IGNORE INTO resources (id, title, provider, recommendation, review, studio, genre)
              VALUES (?, ?, ?, ?, ?, ?, ?)""",
            (id, title, provider, recommendation, review, studio, genre),
        )

    conn.commit()
    conn.close()

    print(f"resources successfully appended to {db_name}!")


if __name__ == "__main__":
    # main()
    # create_database(db_name)
    # load_games_from_json(db_name, "../src/data/devResourceList.json")
    # export_resources_to_json(DB_NAME, '../src/data/devResourceList.json')
    try:
        arg = sys.argv[1]
    except:
        print('available args: entry, load_json, create_db, export_json')
        exit()
    if arg == "entry":
        main()
    elif arg == "load_json":
        load_games_from_json(db_name, "../src/data/devResourceList.json")
    elif arg == "create_db":
        create_database(DB_NAME)
    elif arg == "export_json":
        export_resources_to_json(DB_NAME, "../src/data/devResourceList.json")
