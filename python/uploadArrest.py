import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import sys


print("Arrest")

# It then imports the "APD GT2-Arr" Excel file of APD Arrests into a table that is 
# a precursor to APD Arrests, called "APD Import-Arrests". It then looks for and 
# deletes arrests in APD Arrests that were just imported into APD Import-Arrests 
# (so all old data can be replaced with new), and only then does it append the data
#  from APD Import-Arrests into the final APD Arrests table.

# Retrieve APD Arrest table
# Use insert ... on duplicate key update