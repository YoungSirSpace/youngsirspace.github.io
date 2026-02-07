# Notes of Linear Algebra (Part.1)

The book I use to teach myself is *Introduction to Linear Algebra (5th Edition)*, whose writer is Gilbert Strang, printed by the Tsinghua University Press.

## Matrix

Linear equation form $\quad{}Ax=b$

The equation can be solved in order (top to bottom), when $A$ is a triangular matrix. If $A$ is ***"invertible"***, we can write $x$ as $A^{-1}b$.

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

### Elimination

>**Example 1** Permanent failure with no solution
>
>$$
>\begin{cases}
>x - 2y = 1 \\\\
>3x - 6y = 11
>\end{cases}
>$$
>
>substract 3 times eqn.1 to eqn.2
>
>$$
>\begin{cases}
>x - 2y = 1 \\\\
>0y = 8
>\end{cases}
>$$

Zero is never allowed as a pivot.

>**Example 2** Failure with infinitely many solutions
>
>$$
>\begin{cases}
>x - 2y = 1 \\\\
>3x - 6y = 3
>\end{cases}
>$$
>
>substract 3 times eqn.1 to eqn.2
>
>$$
>\begin{cases}
>x - 2y = 1 \\\\
>0y = 0
>\end{cases}
>$$

>**Example 3** A row change
>
>Permutation
>
>$$
>\begin{cases}
>0x + 2y = 4 \\\\
>3x - 2y = 5
>\end{cases}
>$$
>
>exchange
>
>$$
>\begin{cases}
>3x - 2y = 5 \\\\
>2y = 4
>\end{cases}
>$$

In these three cases, example 1 and 2 are ***singular***. Example 3 is ***nonsingular***.

### Gaussian elimination

from $\begin{bmatrix}a_{11} & a_{12} & \cdots & a_{1n}\\\\a_{21} & a_{22} & \cdots & a_{2n}\\\\ \vdots  & \vdots  & \ddots & \vdots\\\\a_{n1} & a_{n2} & \cdots & a_{nn}\end{bmatrix}$， we swift it into $\begin{bmatrix}x_{11} & x_{12} & \cdots & x_{1n}\\\\& x_{22} & \cdots & x_{2n}\\\\ & & \ddots & \vdots\\\\ & & & x_{nn}\end{bmatrix}$

the key is to create zeros below every pivot by using the equations from up to bottom in order.

The ***identity matrix*** $I$ has 1's on the diagonal otherwise 0's. Then $Ib=b$ for all $b$. The ***elementary matrix*** or ***elimination matrix*** $E_{ij}$ has the extra nonzero entry -$l$ in the $i,j$ position. Then $E_{ij}$ subtracts a multiple $l$ of row $j$ from row $i$.

The ***row exchange matrix***, also called ***permutation matrix***, $P_{ij}$ is the identity matrix with rows $i$ and $j$ reversed. It need to multiply the target matrixon the *left*, like $P_{ij}A$

### The Argumented Matrix

For linear equation $Ax=b$, we can include $b$ as an extra column and follow it through elimination. The matrix $A$ is enlarged or "argumented" by the extra column $b$:

$$
\text{Argumented matrix} \quad{} \begin{bmatrix}A & b\end{bmatrix}
$$

Elimination acts on the whole rows of matrix. When $A$ is swifted into $I$, the swifted $b$ is the solution of $x$.

## Rules for Matrix Operations

$$
\lim\limits_{D \to D_{1}} \iint_{D_{1}} \mathrm{e}^{-(x^{2} + y^{2})}\,\mathrm{d}x{d}y = \lim\limits_{A \to \infty} \int_0^A mathrm{e}^{-x^{2}}\,\mathrm{d}x \times \int_0^A mathrm{e}^{-y^{2}}\,\mathrm{d}y
$$
