import pyodbc


#returns cursor which can be used to execute sql commands, like inserting and deleting from database
def connect2Database():

    server = 'tcp:testserver369.database.windows.net'
    database = 'Wildfires'
    username = 'johndimitriou'
    password = '23vaska@'
    driver = '{ODBC Driver 17 for SQL Server}'
    cnxn = pyodbc.connect(
        'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = cnxn.cursor()

    return cursor

def insertRow(Location, X, Y, Temperature, Wind, Humidity, Rain, Area):
    server = 'tcp:testserver369.database.windows.net'
    database = 'Wildfires'
    username = 'johndimitriou'
    password = '23vaska@'
    driver = '{ODBC Driver 17 for SQL Server}'
    cnxn = pyodbc.connect(
        'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = cnxn.cursor()

    sql_insert_query = "INSERT INTO Data (Location, X, Y, Temperature,Wind,Humidity,Rain, Area) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

    cursor.execute(sql_insert_query, (Location, X, Y, Temperature, Wind, Humidity, Rain, Area))
    cnxn.commit()

def printRows():
    c = connect2Database()
    c.execute("SELECT * FROM Data")

    row = c.fetchone()
    while row:
        print(row)
        row = c.fetchone()

if __name__ == '__main__':
    printRows()