class Fraction:
    def __init__(self, top, bottom):
        self.num = top
        self.den = bottom

    def show(self):
        print(self.num, '/', self.den)
    def __str__(self):
        return str(
            'like js value of tset'
        )


my_fraction = Fraction(3, 5)
my_fraction.show()
print(my_fraction)
