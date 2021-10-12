import turtle

DIS = 30
ANG = 20


def drawtree(n):
    if n == 0:
        return

    turtle.left(ANG)
    turtle.forward(DIS)

    drawtree(n - 1)
    turtle.backward(DIS)
    turtle.right(ANG)

    turtle.right(ANG)
    turtle.forward(DIS)
    drawtree(n - 1)
    turtle.back(DIS)
    turtle.left(ANG)


turtle.left(90)
turtle.speed(0)
drawtree(5)
turtle.done()