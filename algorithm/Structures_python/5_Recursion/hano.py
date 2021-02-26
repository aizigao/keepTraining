def moveTower(height, formPole, toPole, withPole):
    if height >= 1:
        moveTower(height-1, formPole, withPole, toPole)
        moveDisk(formPole, toPole)
        moveTower(height-1, withPole, toPole, formPole)


def moveDisk(fp, tp):
    print("moving disk from", fp, "to", tp)


moveTower(3, "A", "B", "C")
