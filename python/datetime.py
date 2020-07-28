import datetime

a = '2010-01-31'

datee = datetime.datetime.strptime(a, "%Y-%m-%d")


datee.month
Out[9]: 1

datee.year
Out[10]: 2010

datee.day
Out[11]: 31