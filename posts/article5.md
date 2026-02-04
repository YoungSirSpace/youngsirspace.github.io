# Notes of Linear Algebra (Part.1)

## Matrix

Linear equation form $\quad{}Ax=b$

The equation can be solved in ordere (top to bottom), when $A$ is a triangular matrix. If $A$ is ***"invertible"***, we can write $x$ as $A^{-1}b$.

## Independence and Dependence

For victors, $u$, $v$, $w$, there are:

Independence $\quad{}w$ is not in the plane of $u$ and $v$

Dependence $\quad{}w$ is in the plane of $u$ and $v$

By extension, if there are $n$ victors,

$$\alpha_{1}, \alpha_{2}, \alpha_{3}, \cdots, \alpha_{n}$$

and $n$ constants,

$$k_{1}, k_{2}, k_{3}, \cdots, k_{n}$$

we say the victors are ***linearly independent*** if and only if the equation

$$\displaystyle\sum_{i=1}^{n} k_{i}\alpha_{i}=\mathbf{0}\quad(\text{$\mathbf{0}$ means the zero vector})$$

implies

$$k_{1}=k_{2}=k_{3}=\cdots=k_{n}=0$$

We need to know that:

Independent columns: $Ax=\mathbf{0}$ has one solution. $A$ is an ***invertible matrix***.

Dependent columns: $Cx=\mathbf{0}$ has many solutions. $C$ is a ***singular matrix***.
