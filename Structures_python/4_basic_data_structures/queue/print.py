'''
TODO: 之后再看一遍
[link](https://runestone.academy/runestone/books/published/pythonds/BasicDS/SimulationPrintingTasks.html)
1. create a new print. Each task will be given a timeStamp upon its arrival. The queue is emtpy to start

2. For each second(currenSecond)
    - Does a new print task get created? if so, add it the queue with the currentSecond as the timestamp
    - if the printer is not busy and if a task is waiting,
        - remove the next task from the print queue and assign it to the printer
        - Subtract the timestamp from currentSecond to compute the waitting thme for that task
        - append the waitting time for the task to a list for later processing
        - Based on the number of pages in the pringt task, figure out how mucth time will be required
    - The print now does one second of printing if necessary, it also substracts one second fomr the time required for that task

    - if the task has been commpleted, in other words the time required has reahed zero, the printer is no longer busy.
3. after the simulation is complete, compute the average waiting time from the list of waiting times generated
'''

from pythonds.basic import Queue
import random


class Printer:
    def __init__(self, ppm):
        self.pagerate = ppm
        self.currentTask = None
        self.timeRemainning = 0

    def tick(self):
        if self.currentTask != None:
            self.timeRemainning = self.timeRemainning - 1
            if self.timeRemainning <= 0:
                self.currentTask = None

    def busy(self):
        return self.currentTask != None

    def startNext(self, newtask):
        self.currentTask = newtask
        self.timeRemainning = newtask.getPages() * 60 / self.pagerate


def newPrintTask():
    num = random.randrange(1, 181)
    if num == 180:
        return True
    else:
        return False


class Task:
    def __init__(self, time):
        self.timestamp = time
        self.pages = random.randrange(1, 20)

    def getStamp(self):
        return self.timestamp

    def getPages(self):
        return self.pages

    def waitTime(self, currenttime):
        return currenttime - self.timestamp


def simulation(numSeconds, pagesPerMinute):

    labprinter = Printer(pagesPerMinute)
    printQueue = Queue()
    waitingtimes = []

    # loop in numSeconds 
    for currentSecond in range(numSeconds):
        if newPrintTask():
            task = Task(currentSecond)
            printQueue.enqueue(task)

        if (not labprinter.busy()) and (not printQueue.isEmpty()):
            nexttask = printQueue.dequeue()
            waitingtimes.append(nexttask.waitTime(currentSecond))
            labprinter.startNext(nexttask)

        labprinter.tick()

    averageWait = sum(waitingtimes)/len(waitingtimes)
    print("Average Wait %6.2f secs %3d tasks remaining." %
          (averageWait, printQueue.size()))


for i in range(10):
    print('[simulation] %d:'%i)
    simulation(3600, 5)
