from abc import abstractmethod, ABCMeta

''' 
创建Student类，一个Model类
'''


class Student():
    _rollNo = ""
    _name = ""

    def getRollNo(self):
        return self._rollNo

    def setRollNo(self, inRollNo):
        self._rollNo = inRollNo

    def getName(self):
        return self._name

    def setName(self, inName):
        self._name = inName


# 创建视图StudentView


class StudentView():
    def printStudentDetails(self, inStudentName, inStudentRollNo):
        print("Student :")
        print("Name : {0}".format(inStudentName))
        print("Roll No : {0}".format(inStudentRollNo))
# 创建控制器


class StudentController():
    def __init__(self, inModel, inView):
        self._model = inModel
        self._view = inView

    def setStudentName(self, inName):
        self._model.setName(inName)

    def setStudentRollNo(self, inRollNo):
        self._model.setRollNo(inRollNo)

    def getStudentRollNo(self):
        return model.getRollNo()

    def updateView(self):
        self._view.printStudentDetails(
            self._model.getName(), self._model.getRollNo())


# 调用输出
if __name__ == '__main__':
    def retrieveStudentFromDatabase():
        student = Student()
        student.setName("Robert")
        student.setRollNo("10")
        return student
    model = retrieveStudentFromDatabase()
    view = StudentView()
    controller = StudentController(model, view)
    controller.updateView()
    # 更新模型数据
    controller.setStudentName("John")
    controller.updateView()
