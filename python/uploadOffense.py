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



filePath = './ExcelFiles/GT2-Off.xls'
with pd.ExcelFile(filePath) as xls:
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(filePath, sheet_name=sheet_name)
tableColumns = [
    'offense_id',
    'suffix',
    'location',
    'apt_office_prefix',
    'apt_office_num',
    'beat',
    'occur_date',
    'occur_time',
    'poss_date',
    'poss_time',
    'rpt_date',
    'rpt_time',
    'dispo_code',
    'dispo_date',
    'gang_related',
    'location_type',
    'relationship_of_parties',
    'offense',
    'ucr',
    'num_victims',
]

query = "INSERT INTO [CrimeAnalytics].[dbo].[APD_Off] ([offense_id]\
      ,[suffix]\
      ,[location]\
      ,[apt_office_prefix]\
      ,[apt_office_num]\
      ,[beat]\
      ,[occur_date]\
      ,[occur_time]\
      ,[poss_date]\
      ,[poss_time]\
      ,[rpt_date]\
      ,[rpt_time]\
      ,[dispo_code]\
      ,[dispo_date]\
      ,[gang_related]\
      ,[location_type]\
      ,[relationship_of_parties]\
      ,[offense]\
      ,[ucr]\
      ,[num_victims])\
VALUES\
"




# df = df.replace(504, 'yes')
# df = df.replace("893 PEACHTREE ST NE @BULLDOG", 'check')
# df.replace(504, 'yes', inplace=True)
# df['beat'][2] = 'Test'

df = df.fillna('NULL')

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
# print(query)

try:
    cursor.execute(query)
    conn.commit()
except:
    print("Unexpected error:", sys.exc_info()[0])

#Duplicate entries, maybe set all of the entries as a primary key?



# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Off.xls', index=False)