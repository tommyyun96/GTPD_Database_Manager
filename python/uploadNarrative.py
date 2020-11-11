import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys
import xlrd 
import pyodbc 
import datetime


conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=130.207.68.107;'
                      'Database=CrimeAnalytics;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()


'''
Combine all expr to the first narrative and push the rest to supplemental table
'''


filePath = './ExcelFiles/GT2-Nar2.xls'
with pd.ExcelFile(filePath) as xls:
    for sheet_name in xls.sheet_names:
        df = pd.read_excel(filePath, sheet_name=sheet_name)
tableColumns = df.columns.tolist()

query = "INSERT INTO [CrimeAnalytics].[dbo].[APD Narratives] ([offense_id]\
      ,[suffix]\
      ,[narr_num]\
      ,[Zone]\
      ,[beat]\
      ,[rpt_date]\
      ,[ucr]\
      ,[location]\
      ,[apt_office_prefix]\
      ,[apt_office_num]\
      ,[occur_date]\
      ,[occur_time]\
      ,[poss_date]\
      ,[poss_time]\
      ,[rpt_officer_id]\
      ,[dispo_code]\
      ,[Full Name]\
      ,[Assignment]\
      ,[UC SM]\
      ,[UC SM Literal]\
      ,[COBRA YR WK]\
      ,[UC2]\
      ,[YC2 Literal]\
      ,[remarks1]\
      ,[TOT day]\
      ,[Avg Tm2]\
      ,[Avg Tm]\
      ,[Watch]\
      ,[DOO1]\
      ,[Day])\
VALUES\
"

df = df.fillna('NULL')
df.replace("\'","",regex=True, inplace=True)
df.replace("\n","",regex=True, inplace=True)

narratives = set()
for i in range(1,47):
    narratives.add('Expr'+str(i))

f=open("Log.txt",'w')

for index, row in df.iterrows():
    # narrative = ''
    tempQuery='('

    for col in tableColumns:
        if col in narratives:
            pass
            # if(row[col]!='NULL'):
            #     narrative+=str(row[col])
        else:
            # print(type(row[col]))
            if(row[col] == 'NULL'):
                tempQuery+='NULL, '
            elif(type(row[col]) == str or type(row[col]) == pd._libs.tslibs.timestamps.Timestamp or type(row[col]) == datetime.time):
                tempQuery+="'"+str(row[col])+"', "
            else:
                tempQuery+=str(row[col])+', '
    tempQuery = tempQuery[:-2]
    # tempQuery+="'"+narrative+"'),"
    tempQuery+="),"
    query+= tempQuery
query = query[:-1]
f.write(query)
f.close()


'''
check the current table with duplicates
delete the duplicates
add the data to the table
'''



# try:
#     cursor.execute(query)
#     conn.commit()
#     print("Arrest Added")
# except:
#     print("Unexpected error:", sys.exc_info()[0])

#Duplicate entries, maybe set all of the entries as a primary key?



# TO SAVE THE EDITED FILE
# df.to_excel('./ExcelFiles/GT2-Off.xls', index=False)