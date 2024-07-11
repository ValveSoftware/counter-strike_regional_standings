### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, motm, SLIGHT, Sonic, stanislaw<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  1020.0<br />
<br />
Final Rank Value (1020.0) = Starting Rank Value (958.3) + Head To Head Adjustments (61.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.468[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.3
- 400 + ( ( 0.265 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 958.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |      149 | 2024-06-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -14.09 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           73 |      173 | 2024-06-15 | Mythic           | W   | 1.000      | 0.371        | -                | 0.359 (0.133)    | 0 (0.000) |     9.99 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           72 |      247 | 2024-06-13 | Final Form       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.92 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           71 |      358 | 2024-06-09 | M80              | L   | 0.989      | -            | -                | -                | -         |    -6.34 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           70 |      417 | 2024-06-08 | Nouns            | W   | 0.983      | 0.477        | 0.086 (0.040)    | 0.484 (0.227)    | 0 (0.000) |    17.50 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           69 |      427 | 2024-06-08 | Party Astronauts | L   | 0.981      | -            | -                | -                | -         |   -14.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           68 |      476 | 2024-06-07 | LAG              | W   | 0.976      | 0.384        | 0.021 (0.008)    | 0.396 (0.149)    | 0 (0.000) |     9.51 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           67 |      532 | 2024-06-06 | M80              | L   | 0.969      | -            | -                | -                | -         |    -5.70 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           66 |      545 | 2024-06-06 | NRG              | L   | 0.968      | -            | -                | -                | -         |   -17.53 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           65 |      552 | 2024-06-06 | M80              | L   | 0.967      | -            | -                | -                | -         |    -6.50 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           64 |      568 | 2024-06-06 | NRG              | W   | 0.967      | -            | -                | -                | 0 (0.000) |    12.17 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           63 |      603 | 2024-06-05 | Party Astronauts | W   | 0.962      | 0.477        | 0.062 (0.028)    | 0.589 (0.270)    | 0 (0.000) |    15.10 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           62 |      657 | 2024-06-04 | Strife           | W   | 0.955      | -            | -                | -                | 0 (0.000) |     5.47 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           61 |      947 | 2024-05-23 | M80              | L   | 0.875      | -            | -                | -                | -         |    -5.71 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           60 |      961 | 2024-05-22 | One More         | W   | 0.869      | -            | -                | -                | 0 (0.000) |     3.70 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           59 |      965 | 2024-05-22 | One More         | W   | 0.869      | -            | -                | -                | 0 (0.000) |     3.84 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           58 |      973 | 2024-05-22 | LAG              | W   | 0.868      | -            | -                | -                | -         |     8.25 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           57 |     1021 | 2024-05-21 | Carpe Diem       | W   | 0.861      | -            | -                | -                | -         |     7.41 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           56 |     1027 | 2024-05-21 | Carpe Diem       | W   | 0.861      | -            | -                | -                | -         |     7.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           55 |     1084 | 2024-05-19 | Limitless        | W   | 0.848      | -            | -                | -                | -         |     3.81 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           54 |     1142 | 2024-05-17 | Nouns            | L   | 0.836      | -            | -                | -                | -         |   -13.62 | Grizz, JBa, motm, SLIGHT, stanislaw      |
|           53 |     1212 | 2024-05-15 | BOSS             | W   | 0.822      | 0.477        | 0.021 (0.008)    | 0.349 (0.137)    | -         |     7.77 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           52 |     1223 | 2024-05-15 | BOSS             | W   | 0.822      | 0.477        | 0.021 (0.008)    | 0.349 (0.137)    | -         |     8.27 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           51 |     1268 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.816      | -            | -                | -                | -         |     7.16 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           50 |     1272 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.816      | -            | -                | -                | -         |     7.59 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           49 |     1318 | 2024-05-13 | Nouns            | W   | 0.809      | 0.477        | 0.086 (0.033)    | 0.484 (0.187)    | -         |    15.00 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           48 |     1320 | 2024-05-13 | Nouns            | L   | 0.809      | -            | -                | -                | -         |   -10.50 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           47 |     1363 | 2024-05-11 | Elevate          | L   | 0.795      | -            | -                | -                | -         |   -10.18 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           46 |     1365 | 2024-05-11 | Mythic           | L   | 0.795      | -            | -                | -                | -         |   -17.20 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           45 |     1415 | 2024-05-09 | MIGHT            | W   | 0.782      | -            | -                | -                | -         |     2.15 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           44 |     1419 | 2024-05-09 | MIGHT            | W   | 0.782      | -            | -                | -                | -         |     2.20 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           43 |     1431 | 2024-05-08 | Limitless        | W   | 0.776      | -            | -                | -                | -         |     3.56 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           42 |     1434 | 2024-05-08 | Limitless        | W   | 0.775      | -            | -                | -                | -         |     3.69 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           41 |     1548 | 2024-05-02 | Party Astronauts | W   | 0.735      | 0.477        | 0.062 (0.022)    | 0.589 (0.206)    | -         |    13.25 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           40 |     1549 | 2024-05-02 | Party Astronauts | L   | 0.735      | -            | -                | -                | -         |   -10.01 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           39 |     1712 | 2024-04-25 | NRG              | W   | 0.689      | 0.477        | 0.026 (0.008)    | 0.478 (0.157)    | -         |     9.54 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           38 |     1714 | 2024-04-25 | NRG              | L   | 0.689      | -            | -                | -                | -         |   -12.46 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           37 |     1754 | 2024-04-23 | Elevate          | W   | 0.676      | 0.477        | 0.041 (0.013)    | 0.596 (0.192)    | -         |    13.05 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           36 |     1756 | 2024-04-23 | Elevate          | L   | 0.676      | -            | -                | -                | -         |    -8.30 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           35 |     1948 | 2024-04-17 | Elevate          | L   | 0.635      | -            | -                | -                | -         |    -8.10 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           34 |     2201 | 2024-04-08 | Cloud9           | L   | 0.577      | -            | -                | -                | -         |    -2.71 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           33 |     2230 | 2024-04-08 | Virtus.pro       | L   | 0.571      | -            | -                | -                | -         |    -0.24 | horvy, motm, SLIGHT, Sonic, stanislaw    |
|           32 |     2469 | 2024-03-27 | Mythic           | W   | 0.495      | -            | -                | -                | -         |     5.55 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           31 |     2472 | 2024-03-27 | Mythic           | W   | 0.495      | -            | -                | -                | -         |     5.78 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           30 |     2508 | 2024-03-26 | LAG              | W   | 0.489      | -            | -                | -                | -         |     6.35 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           29 |     2512 | 2024-03-26 | LAG              | L   | 0.489      | -            | -                | -                | -         |    -9.29 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|           28 |     2708 | 2024-03-14 | Take Flyte       | W   | 0.409      | -            | -                | -                | -         |     3.34 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           27 |     2710 | 2024-03-14 | Take Flyte       | W   | 0.409      | -            | -                | -                | -         |     3.44 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           26 |     2734 | 2024-03-13 | M80              | W   | 0.403      | 0.477        | 0.218 (0.042)    | -                | -         |    10.63 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           25 |     2736 | 2024-03-13 | M80              | L   | 0.402      | -            | -                | -                | -         |    -2.04 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           24 |     2782 | 2024-03-12 | Mythic           | L   | 0.395      | -            | -                | -                | -         |    -8.16 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           23 |     3015 | 2024-03-03 | M80              | L   | 0.333      | -            | -                | -                | -         |    -1.73 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           22 |     3035 | 2024-03-02 | BESTIA           | W   | 0.327      | -            | -                | -                | 1 (0.327) |     6.00 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           21 |     3056 | 2024-03-01 | RED Canids       | L   | 0.321      | -            | -                | -                | -         |    -2.44 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           20 |     3136 | 2024-02-25 | Liquid           | L   | 0.290      | -            | -                | -                | -         |    -0.25 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           19 |     3141 | 2024-02-25 | BOSS             | L   | 0.289      | -            | -                | -                | -         |    -6.17 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           18 |     3159 | 2024-02-24 | NRG              | W   | 0.282      | -            | -                | -                | -         |     3.61 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           17 |     3160 | 2024-02-24 | Party Astronauts | W   | 0.282      | -            | -                | -                | -         |     4.85 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           16 |     3171 | 2024-02-24 | OMiT             | W   | 0.282      | -            | -                | -                | -         |     2.70 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           15 |     3208 | 2024-02-22 | NRG              | L   | 0.268      | -            | -                | -                | -         |    -5.06 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           14 |     3557 | 2024-02-04 | Elevate          | L   | 0.149      | -            | -                | -                | -         |    -1.65 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           13 |     3581 | 2024-02-03 | Nouns            | W   | 0.143      | -            | -                | -                | -         |     2.32 | Infinite, JBa, motm, SLIGHT, stanislaw   |
|           12 |     3614 | 2024-02-02 | NRG              | W   | 0.135      | -            | -                | -                | -         |     1.68 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           11 |     3619 | 2024-02-02 | Carpe Diem       | W   | 0.134      | -            | -                | -                | -         |     1.21 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|           10 |     3883 | 2024-01-20 | M80              | L   | 0.049      | -            | -                | -                | -         |    -0.24 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            9 |     3927 | 2024-01-19 | Liquid           | L   | 0.043      | -            | -                | -                | -         |    -0.03 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            8 |     3932 | 2024-01-19 | M80              | W   | 0.042      | -            | -                | -                | -         |     1.12 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            7 |     3989 | 2024-01-18 | Nouns            | W   | 0.036      | -            | -                | -                | -         |     0.59 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            6 |     3992 | 2024-01-18 | NRG              | W   | 0.035      | -            | -                | -                | -         |     0.44 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            5 |     3994 | 2024-01-18 | MIGHT            | W   | 0.035      | -            | -                | -                | -         |     0.10 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            4 |     4041 | 2024-01-17 | Mythic           | W   | 0.029      | -            | -                | -                | -         |     0.33 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            3 |     4095 | 2024-01-16 | Liquid           | L   | 0.022      | -            | -                | -                | -         |    -0.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            2 |     4146 | 2024-01-15 | ex-CatEvil       | W   | 0.015      | -            | -                | -                | -         |     0.02 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |
|            1 |     4189 | 2024-01-13 | M80              | W   | 0.003      | -            | -                | -                | -         |     0.08 | Infinite, JBa, SLIGHT, Sonic, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,783.79)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-06-09 |      0.989 | $15,000.00     | $14,836.86      |
| 2024-04-14 |      0.612 | $4,000.00      | $2,446.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
