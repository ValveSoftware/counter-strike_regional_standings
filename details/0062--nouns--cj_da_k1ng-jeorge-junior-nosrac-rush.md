### Roster Details<br />
Team Name: Nouns<br />
Roster: cJ dA K1nG, Jeorge, junior, nosraC, RUSH<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [62](../standings_global.md)<br />
Regional Rank: [15]( ../standings_americas.md)<br />
Final Rank Value:  1041.0<br />
<br />
Final Rank Value (1041.0) = Starting Rank Value (973.7) + Head To Head Adjustments (67.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.485[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 973.7
- 400 + ( ( 0.267 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 973.7


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
|           68 |       18 | 2024-07-16 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -24.13 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           67 |       22 | 2024-07-16 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.86 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           66 |       74 | 2024-07-15 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.38 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           65 |       79 | 2024-07-15 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.57 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           64 |      306 | 2024-06-16 | Legacy           | L   | 0.996      | -            | -                | -                | -         |   -11.84 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           63 |      313 | 2024-06-16 | Wildcard         | W   | 0.995      | 0.371        | 0.064 (0.024)    | 0.553 (0.204)    | 0 (0.000) |    14.91 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           62 |      414 | 2024-06-13 | Limitless        | W   | 0.975      | -            | -                | -                | 0 (0.000) |     2.46 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           61 |      581 | 2024-06-08 | Wildcard         | L   | 0.943      | -            | -                | -                | -         |   -15.85 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           60 |      638 | 2024-06-07 | Party Astronauts | W   | 0.936      | 0.477        | 0.063 (0.028)    | 0.604 (0.270)    | 0 (0.000) |    15.42 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           59 |      646 | 2024-06-07 | Elevate          | W   | 0.935      | 0.384        | 0.042 (0.015)    | 0.583 (0.209)    | 0 (0.000) |    15.03 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           58 |      651 | 2024-06-07 | Elevate          | L   | 0.935      | -            | -                | -                | -         |   -14.47 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           57 |      666 | 2024-06-07 | Party Astronauts | L   | 0.934      | -            | -                | -                | -         |   -15.24 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           56 |      695 | 2024-06-06 | Elevate          | W   | 0.930      | 0.477        | 0.042 (0.018)    | 0.583 (0.258)    | 0 (0.000) |    14.84 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           55 |      766 | 2024-06-05 | M80              | L   | 0.923      | -            | -                | -                | -         |    -5.95 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           54 |      815 | 2024-06-04 | NRG              | W   | 0.917      | 0.477        | -                | 0.515 (0.225)    | 0 (0.000) |    10.93 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           53 |      827 | 2024-06-04 | TSM Shimmer      | W   | 0.915      | -            | -                | -                | 0 (0.000) |     4.57 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           52 |     1096 | 2024-05-24 | M80              | L   | 0.843      | -            | -                | -                | -         |    -5.27 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           51 |     1110 | 2024-05-23 | NRG              | W   | 0.837      | 0.384        | -                | 0.515 (0.165)    | -         |    10.74 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           50 |     1126 | 2024-05-22 | Party Astronauts | W   | 0.830      | 0.384        | 0.063 (0.020)    | 0.604 (0.193)    | -         |    12.95 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           49 |     1173 | 2024-05-21 | FLUFFY AIMERS    | W   | 0.823      | -            | -                | -                | -         |     3.70 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           48 |     1176 | 2024-05-21 | FLUFFY AIMERS    | W   | 0.823      | -            | -                | -                | -         |     3.84 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           47 |     1253 | 2024-05-19 | FLUFFY AIMERS    | W   | 0.808      | -            | -                | -                | -         |     3.77 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           46 |     1274 | 2024-05-18 | NRG              | W   | 0.803      | -            | -                | -                | -         |    12.90 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           45 |     1275 | 2024-05-18 | M80              | W   | 0.802      | 0.303        | 0.219 (0.053)    | -                | -         |    21.58 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           44 |     1306 | 2024-05-17 | Wildcard         | W   | 0.796      | -            | -                | -                | -         |     4.32 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           43 |     1379 | 2024-05-15 | Limitless        | L   | 0.783      | -            | -                | -                | -         |   -17.14 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           42 |     1384 | 2024-05-15 | Limitless        | L   | 0.783      | -            | -                | -                | -         |   -18.13 | cJ dA K1nG, Jeorge, junior, nosraC, RUSH   |
|           41 |     1482 | 2024-05-13 | Wildcard         | L   | 0.769      | -            | -                | -                | -         |   -13.89 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           40 |     1484 | 2024-05-13 | Wildcard         | W   | 0.769      | 0.477        | 0.064 (0.024)    | 0.553 (0.203)    | -         |    10.41 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           39 |     1526 | 2024-05-11 | Elevate          | L   | 0.756      | -            | -                | -                | -         |   -10.47 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           38 |     1528 | 2024-05-11 | Mythic           | L   | 0.755      | -            | -                | -                | -         |   -17.61 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           37 |     1530 | 2024-05-11 | Elevate          | W   | 0.755      | -            | -                | -                | -         |    12.69 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           36 |     1575 | 2024-05-09 | BOSS             | W   | 0.743      | -            | -                | -                | -         |     6.88 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           35 |     1580 | 2024-05-09 | BOSS             | W   | 0.742      | -            | -                | -                | -         |     7.27 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           34 |     1600 | 2024-05-08 | Perseverance     | W   | 0.736      | -            | -                | -                | -         |     4.99 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           33 |     1602 | 2024-05-08 | Perseverance     | W   | 0.736      | -            | -                | -                | -         |     5.21 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           32 |     1919 | 2024-04-23 | Take Flyte       | L   | 0.636      | -            | -                | -                | -         |   -16.37 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           31 |     1921 | 2024-04-23 | Take Flyte       | W   | 0.636      | -            | -                | -                | -         |     3.58 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           30 |     2107 | 2024-04-17 | Elevate          | L   | 0.596      | -            | -                | -                | -         |    -8.05 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           29 |     2111 | 2024-04-17 | Perseverance     | W   | 0.595      | -            | -                | -                | -         |     4.01 | cJ dA K1nG, CLASIA, Jeorge, junior, nosraC |
|           28 |     2171 | 2024-04-15 | Limitless        | W   | 0.583      | -            | -                | -                | -         |     2.39 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           27 |     2172 | 2024-04-15 | Limitless        | W   | 0.583      | -            | -                | -                | -         |     2.45 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           26 |     2261 | 2024-04-10 | Elevate          | W   | 0.549      | 0.477        | -                | 0.583 (0.153)    | -         |    10.16 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           25 |     2267 | 2024-04-10 | Elevate          | W   | 0.549      | 0.477        | -                | 0.583 (0.153)    | -         |    10.64 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           24 |     2317 | 2024-04-09 | MIGHT            | W   | 0.543      | -            | -                | -                | -         |     1.45 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           23 |     2320 | 2024-04-09 | MIGHT            | W   | 0.543      | -            | -                | -                | -         |     1.47 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           22 |     2449 | 2024-04-04 | LAG              | L   | 0.509      | -            | -                | -                | -         |    -9.32 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           21 |     2454 | 2024-04-04 | LAG              | W   | 0.509      | -            | -                | -                | -         |     6.84 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           20 |     2493 | 2024-04-03 | Party Astronauts | L   | 0.503      | -            | -                | -                | -         |   -14.64 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           19 |     2543 | 2024-04-02 | BOSS             | W   | 0.496      | -            | -                | -                | -         |     4.69 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           18 |     2547 | 2024-04-02 | Party Astronauts | W   | 0.496      | -            | -                | -                | -         |     8.16 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           17 |     2622 | 2024-03-27 | NRG              | L   | 0.457      | -            | -                | -                | -         |    -9.16 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           16 |     2627 | 2024-03-27 | NRG              | W   | 0.456      | -            | -                | -                | -         |     5.29 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           15 |     2671 | 2024-03-26 | Party Astronauts | W   | 0.450      | -            | -                | -                | -         |     7.54 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           14 |     2675 | 2024-03-26 | Party Astronauts | W   | 0.450      | -            | -                | -                | -         |     7.84 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           13 |     2754 | 2024-03-20 | Mythic           | L   | 0.410      | -            | -                | -                | -         |    -8.68 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           12 |     2759 | 2024-03-20 | Mythic           | W   | 0.409      | -            | -                | -                | -         |     4.27 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           11 |     2866 | 2024-03-14 | M80              | W   | 0.370      | 0.477        | 0.097 (0.017)    | -                | -         |     1.70 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|           10 |     2869 | 2024-03-14 | M80              | W   | 0.369      | 0.477        | 0.097 (0.017)    | -                | -         |     1.73 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            9 |     3196 | 2024-03-02 | Legacy           | L   | 0.288      | -            | -                | -                | -         |    -3.01 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            8 |     3224 | 2024-03-01 | FURIA            | L   | 0.281      | -            | -                | -                | -         |    -0.21 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            7 |     3287 | 2024-02-26 | Liquid           | L   | 0.256      | -            | -                | -                | -         |    -0.29 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            6 |     3302 | 2024-02-25 | BOSS             | W   | 0.250      | -            | -                | -                | -         |     2.60 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            5 |     3306 | 2024-02-25 | Liquid           | W   | 0.249      | 0.143        | 0.494 (0.018)    | -                | -         |     7.58 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            4 |     3745 | 2024-02-03 | Wildcard         | L   | 0.103      | -            | -                | -                | -         |    -2.70 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            3 |     3806 | 2024-02-01 | BOSS             | W   | 0.090      | -            | -                | -                | -         |     0.94 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            2 |     3810 | 2024-02-01 | Elevate          | L   | 0.089      | -            | -                | -                | -         |    -0.98 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |
|            1 |     3815 | 2024-02-01 | Rocket           | W   | 0.088      | -            | -                | -                | -         |     0.19 | cJ dA K1nG, Jeorge, junior, MarKE, nosraC  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,381.15)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $4,000.00      | $3,984.83       |
| 2024-06-09 |      0.950 | $10,500.00     | $9,969.89       |
| 2024-05-24 |      0.843 | $5,000.00      | $4,214.84       |
| 2024-05-18 |      0.803 | $4,000.00      | $3,211.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
