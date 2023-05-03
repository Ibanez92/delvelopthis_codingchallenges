# What's your exposure?

When you upload a picture to your computer, what you are actually doing is storing a data file composed of pixels. The data looks something like this:

$$ \begin{bmatrix} (red,\ green,\ blue)_{1,1} & \cdots & (red,\ green,\ blue)_{1,n} \\ \vdots & \cdots & \vdots \\ (red,\ green,\ blue)_{m,1} & \cdots & (red,\ green,\ blue)_{m,n} \end{bmatrix} $$

In normal cases, the colors are represented by numbers 0 - 255, where 0 is empty, and 255 is the full value. For black and white photographs, instead of having a red, green, blue color tuple, you are provided with just one number between 0 and 255 (0 = black, 255 = white). 

For this exercise, assume that you are given two matrices (a.k.a. two dimensional arrays) which represent the photo taken and what each pixel looks like after alteration. It is your job find out if the altered photo is "over-exposed", "under-exposed", or just right. (Over exposure occurs when too much light enters your camera, thereby causing the picture to appear more white). 

# Restrictions

1. The photo will be an $n\times n$ matrix where $2 \leq n \leq 32$.
2. Each pixel in the photo will be an integer in the interval [0, 255]. 
3. Each exposure number will be an integer in the interval [0, 255].
4. The function `checkExposure` should output "Over", "Under", or "No Change".

# Examples

```python
picture_taken = [
    [  0,   0,   0,   0,   0,   0],
    [  0, 150,   0,   0, 150,   0],
    [150, 230, 150, 150, 230, 150],
    [150, 230, 150, 150, 230, 150],
    [  0, 150,   0,   0, 150,   0],
    [  0,   0,   0,   0,   0,   0],
]

altered_pic = [
    [ 25,  25,  25,  25,  25,  25],
    [ 25, 175,  25,  25, 175,  25],
    [175, 255, 175, 175, 255, 175],
    [175, 255, 175, 175, 255, 175],
    [ 25, 150,  25,  25, 175,  25],
    [ 25,  25,  25,  25,  25,  25],
]

checkExposure(picture_taken, altered_pic)
# --> Over

```