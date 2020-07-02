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






df = df.fillna('NULL')
df.race.replace(['U', 'UNK'], ['NULL', 'NULL'], inplace=True)
df.sex.replace(['U', 'UNK'], ['NULL', 'NULL'], inplace=True)
df.first_name.replace(['U', 'UNK', 'UKNOWN', 'NULL'], ['UNKNOWN', 'UNKNOWN', 'UNKNOWN', 'UNKNOWN'], inplace=True)
df.last_name.replace(['U', 'UNK', 'UKNOWN', 'NULL'], ['UNKNOWN', 'UNKNOWN', 'UNKNOWN', 'UNKNOWN'], inplace=True)




# TO SAVE THE EDITED FILE
df.to_excel('./ExcelFiles/GT2-Sus.xls', index=False)