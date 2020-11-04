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
# 
# f=open("Log.txt", 'a')



filePath = './ExcelFiles/GT2-Off.xls'
with pd.ExcelFile(filePath) as xls:
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(filePath, sheet_name=sheet_name)
tableColumns = df.columns.tolist()
print(tableColumns)
# f.close()

query = "INSERT INTO [CrimeAnalytics].[dbo].[APD_Off] ([offense_id]\
      ,[rpt_date]\
      ,[suffix]\
      ,[ucr]\
      ,[beat]\
      ,[last_name]\
      ,[first_name]\
      ,[race]\
      ,[sex]\
      ,[dob]\
      ,[Age]\
      ,[Watch]\
VALUES\
"




# df = df.replace(504, 'yes')
# df = df.replace("893 PEACHTREE ST NE @BULLDOG", 'check')
# df.replace(504, 'yes', inplace=True)
# df['beat'][2] = 'Test'

df = df.fillna('NULL')
i = 0

for index, row in df.iterrows():
    tempQuery='('

    for col in tableColumns:
        # f.write(col+'\n')
        # f.write(str(row[col])+'\n')

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
f=open("Log.txt", 'a')
f.write(query)


f.close()

# try:
#     cursor.execute(query)
#     conn.commit()
# except:
#     print("Unexpected error:", sys.exc_info()[0])

#Duplicate entries, maybe set all of the entries as a primary key?



# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Off.xls', index=False)