import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys
import xlrd 
import pyodbc 





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



# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Sus.xls', index=False)