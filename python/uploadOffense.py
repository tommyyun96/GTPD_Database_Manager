import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys
import xlrd 


filePath = './ExcelFiles/GT2-Off.xls'

  
df = pd.read_excel(filePath, sheet_name='GT2-Off')



# df = df.replace(504, 'yes')
# df = df.replace("893 PEACHTREE ST NE @BULLDOG", 'check')
# df.replace(504, 'yes', inplace=True)


# df['beat'][2] = 'Test'

# df = df.fillna('yes')
# print(df['beat'][1])
# print(df['location'][4])
# print(df['beat'][2])

columns = df.columns
for i in columns:
    print(i + ": " + str(type(df[i][1])))

df.to_excel('./ExcelFiles/GT2-Off.xls', index=False)