### Roster Details<br />
Team Name: Nouns<br />
Roster: cJ dA K1nG, Jeorge, junior, nosraC, RUSH<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [16]( ../standings_americas.md)<br />
Final Rank Value:  1007.5<br />
<br />
Final Rank Value (1007.5) = Starting Rank Value (923.4) + Head To Head Adjustments (84.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.468[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 923.4
- 400 + ( ( 0.259 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 923.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |       19 | 2024-07-23 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.38 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           71 |       21 | 2024-07-23 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.67 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           70 |       86 | 2024-07-21 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -14.39 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           69 |      109 | 2024-07-20 | LAG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.47 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           68 |      306 | 2024-07-16 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -23.93 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           67 |      310 | 2024-07-16 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.301 (0.143)    | 0 (0.000) |     7.07 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           66 |      362 | 2024-07-15 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.56 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           65 |      367 | 2024-07-15 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.77 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           64 |      594 | 2024-06-16 | Legacy           | L   | 0.949      | -            | -                | -                | -         |   -12.05 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           63 |      601 | 2024-06-16 | Wildcard         | W   | 0.947      | 0.371        | 0.069 (0.024)    | 0.557 (0.195)    | 0 (0.000) |    14.42 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           62 |      702 | 2024-06-13 | Limitless        | W   | 0.928      | -            | -                | -                | 0 (0.000) |     2.56 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           61 |      869 | 2024-06-08 | Wildcard         | L   | 0.896      | -            | -                | -                | -         |   -14.90 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           60 |      926 | 2024-06-07 | Party Astronauts | W   | 0.889      | 0.477        | 0.053 (0.022)    | 0.591 (0.251)    | 0 (0.000) |    14.55 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           59 |      934 | 2024-06-07 | Elevate          | W   | 0.888      | 0.384        | 0.035 (0.012)    | 0.563 (0.192)    | 0 (0.000) |    14.35 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           58 |      939 | 2024-06-07 | Elevate          | L   | 0.887      | -            | -                | -                | -         |   -13.71 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           57 |      954 | 2024-06-07 | Party Astronauts | L   | 0.886      | -            | -                | -                | -         |   -14.54 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           56 |      983 | 2024-06-06 | Elevate          | W   | 0.882      | 0.477        | 0.035 (0.015)    | 0.563 (0.237)    | -         |    14.21 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           55 |     1054 | 2024-06-05 | M80              | L   | 0.876      | -            | -                | -                | -         |    -4.62 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           54 |     1103 | 2024-06-04 | NRG              | W   | 0.869      | 0.477        | -                | 0.574 (0.238)    | -         |    10.56 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           53 |     1115 | 2024-06-04 | TSM Shimmer      | W   | 0.868      | -            | -                | -                | -         |     4.59 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           52 |     1384 | 2024-05-24 | M80              | L   | 0.796      | -            | -                | -                | -         |    -3.98 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           51 |     1398 | 2024-05-23 | NRG              | W   | 0.789      | 0.384        | -                | 0.574 (0.174)    | -         |    10.33 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           50 |     1414 | 2024-05-22 | Party Astronauts | W   | 0.782      | 0.384        | 0.053 (0.016)    | 0.591 (0.178)    | -         |    12.25 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           49 |     1461 | 2024-05-21 | FLUFFY AIMERS    | W   | 0.776      | -            | -                | -                | -         |     4.42 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           48 |     1464 | 2024-05-21 | FLUFFY AIMERS    | W   | 0.776      | -            | -                | -                | -         |     4.60 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           47 |     1541 | 2024-05-19 | FLUFFY AIMERS    | W   | 0.761      | -            | -                | -                | -         |     4.62 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           46 |     1562 | 2024-05-18 | NRG              | W   | 0.756      | -            | -                | -                | -         |    12.27 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           45 |     1563 | 2024-05-18 | M80              | W   | 0.755      | 0.303        | 0.238 (0.054)    | 0.614 (0.140)    | -         |    21.15 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           44 |     1594 | 2024-05-17 | Wildcard         | W   | 0.749      | -            | -                | -                | -         |     4.32 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           43 |     1667 | 2024-05-15 | Limitless        | L   | 0.735      | -            | -                | -                | -         |   -15.96 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           42 |     1672 | 2024-05-15 | Limitless        | L   | 0.735      | -            | -                | -                | -         |   -16.84 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           41 |     1770 | 2024-05-13 | Wildcard         | L   | 0.722      | -            | -                | -                | -         |   -12.72 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           40 |     1772 | 2024-05-13 | Wildcard         | W   | 0.722      | 0.477        | 0.069 (0.024)    | 0.557 (0.192)    | -         |    10.15 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           39 |     1814 | 2024-05-11 | Elevate          | L   | 0.708      | -            | -                | -                | -         |    -9.70 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           38 |     1816 | 2024-05-11 | Mythic           | L   | 0.708      | -            | -                | -                | -         |   -16.29 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           37 |     1818 | 2024-05-11 | Elevate          | W   | 0.708      | -            | -                | -                | -         |    12.10 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           36 |     1863 | 2024-05-09 | BOSS             | W   | 0.696      | -            | -                | -                | -         |     7.05 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           35 |     1868 | 2024-05-09 | BOSS             | W   | 0.695      | -            | -                | -                | -         |     7.45 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           34 |     1888 | 2024-05-08 | Perseverance     | W   | 0.689      | -            | -                | -                | -         |     5.02 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           33 |     1890 | 2024-05-08 | Perseverance     | W   | 0.688      | -            | -                | -                | -         |     5.25 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           32 |     2207 | 2024-04-23 | Take Flyte       | L   | 0.589      | -            | -                | -                | -         |   -14.87 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           31 |     2209 | 2024-04-23 | Take Flyte       | W   | 0.589      | -            | -                | -                | -         |     3.62 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           30 |     2395 | 2024-04-17 | Elevate          | L   | 0.549      | -            | -                | -                | -         |    -7.28 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           29 |     2399 | 2024-04-17 | Perseverance     | W   | 0.548      | -            | -                | -                | -         |     4.02 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           28 |     2459 | 2024-04-15 | Limitless        | W   | 0.536      | -            | -                | -                | -         |     2.49 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           27 |     2460 | 2024-04-15 | Limitless        | W   | 0.536      | -            | -                | -                | -         |     2.55 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           26 |     2549 | 2024-04-10 | Elevate          | W   | 0.502      | -            | -                | -                | -         |     9.42 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           25 |     2555 | 2024-04-10 | Elevate          | W   | 0.502      | -            | -                | -                | -         |     9.83 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           24 |     2605 | 2024-04-09 | MIGHT            | W   | 0.496      | -            | -                | -                | -         |     1.53 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           23 |     2608 | 2024-04-09 | MIGHT            | W   | 0.495      | -            | -                | -                | -         |     1.55 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           22 |     2737 | 2024-04-04 | LAG              | L   | 0.462      | -            | -                | -                | -         |    -8.43 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           21 |     2742 | 2024-04-04 | LAG              | W   | 0.462      | -            | -                | -                | -         |     6.24 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           20 |     2781 | 2024-04-03 | Party Astronauts | L   | 0.456      | -            | -                | -                | -         |   -13.04 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           19 |     2831 | 2024-04-02 | BOSS             | W   | 0.449      | -            | -                | -                | -         |     4.83 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           18 |     2835 | 2024-04-02 | Party Astronauts | W   | 0.448      | -            | -                | -                | -         |     7.42 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           17 |     2910 | 2024-03-27 | NRG              | L   | 0.409      | -            | -                | -                | -         |    -7.91 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           16 |     2915 | 2024-03-27 | NRG              | W   | 0.409      | -            | -                | -                | -         |     5.06 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           15 |     2959 | 2024-03-26 | Party Astronauts | W   | 0.403      | -            | -                | -                | -         |     6.78 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           14 |     2963 | 2024-03-26 | Party Astronauts | W   | 0.402      | -            | -                | -                | -         |     7.02 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           13 |     3042 | 2024-03-20 | Mythic           | L   | 0.362      | -            | -                | -                | -         |    -7.55 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           12 |     3047 | 2024-03-20 | Mythic           | W   | 0.362      | -            | -                | -                | -         |     3.91 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           11 |     3154 | 2024-03-14 | M80              | W   | 0.322      | 0.477        | 0.082 (0.013)    | -                | -         |     1.68 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           10 |     3157 | 2024-03-14 | M80              | W   | 0.322      | 0.477        | 0.082 (0.013)    | -                | -         |     1.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            9 |     3484 | 2024-03-02 | Legacy           | L   | 0.241      | -            | -                | -                | -         |    -2.71 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            8 |     3512 | 2024-03-01 | FURIA            | L   | 0.234      | -            | -                | -                | -         |    -0.06 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            7 |     3575 | 2024-02-26 | Liquid           | L   | 0.209      | -            | -                | -                | -         |    -0.35 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            6 |     3590 | 2024-02-25 | BOSS             | W   | 0.203      | -            | -                | -                | -         |     2.40 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            5 |     3594 | 2024-02-25 | Liquid           | W   | 0.202      | 0.143        | 0.411 (0.012)    | -                | -         |     6.04 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            4 |     4033 | 2024-02-03 | Wildcard         | L   | 0.056      | -            | -                | -                | -         |    -1.43 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            3 |     4094 | 2024-02-01 | BOSS             | W   | 0.042      | -            | -                | -                | -         |     0.51 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            2 |     4098 | 2024-02-01 | Elevate          | L   | 0.042      | -            | -                | -                | -         |    -0.45 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            1 |     4103 | 2024-02-01 | Rocket           | W   | 0.041      | -            | -                | -                | -         |     0.11 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,271.36)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $4,000.00      | $3,795.93       |
| 2024-06-09 |      0.902 | $10,500.00     | $9,474.03       |
| 2024-05-24 |      0.796 | $5,000.00      | $3,978.71       |
| 2024-05-18 |      0.756 | $4,000.00      | $3,022.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
