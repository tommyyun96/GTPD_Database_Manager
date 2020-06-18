import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

df = pd.read_excel('filePath', sheetname='APD Off')

print("Column headings:")
print(df.columns)