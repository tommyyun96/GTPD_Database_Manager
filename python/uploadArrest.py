import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys
import xlrd 
import pyodbc 


conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=130.207.68.107;'
                      'Database=CrimeAnalytics;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()




filePath = './ExcelFiles/GT2-Arr.xls'
with pd.ExcelFile(filePath) as xls:
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(filePath, sheet_name=sheet_name)
tableColumns = df.columns.tolist()

query = "INSERT INTO [CrimeAnalytics].[dbo].[APD_Arr] ([Watch]\
      ,[rpt_date]\
      ,[offense_id]\
      ,[suffix]\
      ,[ucr]\
      ,[beat]\
      ,[Code_Literal]\
      ,[last_name]\
      ,[first_name]\
      ,[race]\
      ,[sex]\
      ,[dob]\
      ,[Age])\
VALUES\
"

df = df.fillna('NULL')
df.replace("\'","",regex=True, inplace=True)


for index, row in df.iterrows():
    tempQuery='('

    for col in tableColumns:
        if(row[col] == 'NULL'):
            tempQuery+='NULL, '
        elif(type(row[col]) == str or type(row[col]) == pd._libs.tslibs.timestamps.Timestamp):
            tempQuery+="'"+str(row[col])+"', "
        else:
            tempQuery+=str(row[col])+', '
    tempQuery = tempQuery[:-2]
    tempQuery+='),'
    query+= tempQuery
query = query[:-1]


'''
check the current table with duplicates
delete the duplicates
add the data to the table
'''



try:
    cursor.execute(query)
    conn.commit()
    print("Arrest Added")
except:
    print("Unexpected error:", sys.exc_info()[0])

#Duplicate entries, maybe set all of the entries as a primary key?



# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Off.xls', index=False)