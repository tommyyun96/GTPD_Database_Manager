import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys
import xlrd 


filePath = './ExcelFiles/GT2-Off.xls'

  
df = pd.read_excel(filePath, sheet_name='GT2-Off')

print(df.columns)