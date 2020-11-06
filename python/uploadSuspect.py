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

filePath = './ExcelFiles/GT2-Sus.xls'

with pd.ExcelFile(filePath) as xls:
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(filePath, sheet_name=sheet_name)


tableColumns = df.columns.tolist()



df = df.fillna('NULL')
df.race.replace(['U', 'UNK'], ['NULL', 'NULL'], inplace=True)
df.sex.replace(['U', 'UNK'], ['NULL', 'NULL'], inplace=True)
df.first_name.replace(['U', 'UNK', 'UKNOWN', 'NULL'], ['UNKNOWN', 'UNKNOWN', 'UNKNOWN', 'UNKNOWN'], inplace=True)
df.last_name.replace(['U', 'UNK', 'UKNOWN', 'NULL'], ['UNKNOWN', 'UNKNOWN', 'UNKNOWN', 'UNKNOWN'], inplace=True)
df.replace("\'","",regex=True, inplace=True)


query = "INSERT INTO [CrimeAnalytics].[dbo].[APD_Sus] ([offense_id]\
      ,[rpt_date]\
      ,[location]\
      ,[beat]\
      ,[ucr]\
      ,[suffix]\
      ,[name_type]\
      ,[last_name]\
      ,[first_name]\
      ,[race]\
      ,[sex])\
VALUES\
"




df = df.fillna('NULL')

for index, row in df.iterrows():
    tempQuery="("

    for col in tableColumns:

        if(row[col] == 'NULL'):
            tempQuery+="NULL, "
        elif(type(row[col]) == str or type(row[col]) == pd._libs.tslibs.timestamps.Timestamp):
            tempQuery+="'"+str(row[col])+"', "
        else:
            tempQuery+=str(row[col])+", "
    tempQuery = tempQuery[:-2]
    tempQuery+="),"
    query+= tempQuery
query = query[:-1]

f=open("Log.txt", 'a')
f.write(query)


f.close()


try:
    cursor.execute(query)
    conn.commit()
    print("Suspect Added")
except:
    print("Unexpected error:", sys.exc_info()[0])


# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Sus.xls', index=False)