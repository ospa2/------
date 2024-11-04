
def f(s ,p):
    if p==3 and s>=76:
        return 1
    elif p==3 and s<76:
        return 0
    elif p<3 and s>=76:
        return 0
    return f(s+1, p+1) + f(s+2, p+1) + f(s*3, p+1)
      
for i in range(1, 75):
    if f(i, 1):
        print(i)

 