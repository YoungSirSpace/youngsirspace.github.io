# Notes of Linear Algebra (Part.1)

The book I use to teach myself is *Introduction to Linear Algebra (5th Edition)*, whose writer is Gilbert Strang, printed by the Tsinghua University Press.

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

## Linear Equations

An example of scalar multiplication $\quad{}3\begin{bmatrix}1\\\\3\end{bmatrix}=\begin{bmatrix}3\\\\9\end{bmatrix}$

Four steps to understanding elimination using matrices

>1.Elimination goes from $A$ to u triangular $U$ by a sequences of matrix steps $E_{ij}$.
>
>2.The triangular system is solved by ***back substitution***: working bottom to top.
>
>3.In matrix language $A$ is factored into $LU$, which means (lower triangular) (upper triangular).
>
>4.Elimination succeeds ***if*** $A$ ***is invertible***. (But it may need row changes).

Elimination

