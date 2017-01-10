## compute_input.py

import sys

#Read data from stdin
def read_in():
    return sys.stdin.readlines()[0]

def main():
    #get our data as a string from read_in()
    lines = read_in()

    #return evaluated
    exec(lines)

#start process
if __name__ == '__main__':
    main()