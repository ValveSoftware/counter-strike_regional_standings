### Roster Details<br />
Team Name: Perseverance<br />
Roster: CoJoMo, Gabe, mds, shutout, xaler<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  743.9<br />
<br />
Final Rank Value (743.9) = Starting Rank Value (783.6) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.6
- 400 + ( ( 0.179 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 783.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       21 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -15.68 | CoJoMo, Gabe, mds, shutout, xaler  |
|           42 |       27 | 2024-07-16 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -17.13 | CoJoMo, Gabe, mds, shutout, xaler  |
|           41 |      376 | 2024-06-14 | OMiT             | L   | 0.982      | -            | -                | -                | -         |   -12.58 | CoJoMo, Gabe, mds, shutout, xaler  |
|           40 |      829 | 2024-06-04 | Mythic           | L   | 0.914      | -            | -                | -                | -         |   -11.61 | CoJoMo, Gabe, Louie, mds, shutout  |
|           39 |     1130 | 2024-05-22 | BOSS             | L   | 0.829      | -            | -                | -                | -         |   -12.58 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           38 |     1133 | 2024-05-22 | BOSS             | W   | 0.829      | 0.477        | 0.022 (0.009)    | 0.345 (0.137)    | 0 (0.000) |    13.75 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           37 |     1178 | 2024-05-21 | NRG              | W   | 0.823      | 0.477        | 0.026 (0.010)    | 0.515 (0.202)    | 0 (0.000) |    19.50 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           36 |     1180 | 2024-05-21 | NRG              | L   | 0.822      | -            | -                | -                | -         |    -6.18 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           35 |     1213 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.816      | -            | -                | -                | -         |   -16.59 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           34 |     1218 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.816      | 0.477        | 0.005 (0.002)    | 0.142 (0.055)    | 0 (0.000) |     9.02 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           33 |     1380 | 2024-05-15 | Mythic           | L   | 0.783      | -            | -                | -                | -         |   -11.10 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           32 |     1386 | 2024-05-15 | Mythic           | W   | 0.782      | 0.477        | 0.015 (0.005)    | 0.341 (0.127)    | 0 (0.000) |    13.83 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           31 |     1448 | 2024-05-14 | Elevate          | L   | 0.775      | -            | -                | -                | -         |    -4.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           30 |     1452 | 2024-05-14 | Elevate          | L   | 0.775      | -            | -                | -                | -         |    -4.87 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           29 |     1504 | 2024-05-12 | NRG              | L   | 0.762      | -            | -                | -                | -         |    -7.25 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           28 |     1511 | 2024-05-12 | Mythic           | W   | 0.761      | 0.270        | 0.015 (0.003)    | 0.341 (0.070)    | 0 (0.000) |    13.53 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           27 |     1532 | 2024-05-11 | BOSS             | W   | 0.755      | 0.270        | 0.022 (0.004)    | 0.345 (0.070)    | 0 (0.000) |    14.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           26 |     1536 | 2024-05-11 | NRG              | L   | 0.755      | -            | -                | -                | -         |    -7.25 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           25 |     1540 | 2024-05-11 | Party Astronauts | W   | 0.754      | 0.270        | 0.063 (0.013)    | 0.604 (0.123)    | 0 (0.000) |    18.88 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           24 |     1600 | 2024-05-08 | Nouns            | L   | 0.736      | -            | -                | -                | -         |    -4.99 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           23 |     1602 | 2024-05-08 | Nouns            | L   | 0.736      | -            | -                | -                | -         |    -5.21 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           22 |     2111 | 2024-04-17 | Nouns            | L   | 0.595      | -            | -                | -                | -         |    -4.01 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           21 |     2262 | 2024-04-10 | MIGHT            | L   | 0.549      | -            | -                | -                | -         |   -13.61 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           20 |     2269 | 2024-04-10 | MIGHT            | W   | 0.549      | -            | -                | -                | 0 (0.000) |     3.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           19 |     2446 | 2024-04-04 | Carpe Diem       | W   | 0.509      | 0.477        | 0.008 (0.002)    | -                | 0 (0.000) |     6.28 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           18 |     2452 | 2024-04-04 | Carpe Diem       | W   | 0.509      | 0.477        | 0.008 (0.002)    | -                | 0 (0.000) |     6.56 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           17 |     2494 | 2024-04-03 | Limitless        | W   | 0.503      | 0.477        | -                | 0.214 (0.051)    | -         |     5.98 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           16 |     2497 | 2024-04-03 | Limitless        | W   | 0.502      | 0.477        | -                | 0.214 (0.051)    | -         |     6.23 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           15 |     2544 | 2024-04-02 | Party Astronauts | L   | 0.496      | -            | -                | -                | -         |    -3.37 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           14 |     2548 | 2024-04-02 | BOSS             | L   | 0.495      | -            | -                | -                | -         |    -6.36 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           13 |     2632 | 2024-03-27 | M80              | L   | 0.456      | -            | -                | -                | -         |    -0.99 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           12 |     2637 | 2024-03-27 | M80              | L   | 0.455      | -            | -                | -                | -         |    -1.00 | BeaKie, CoJoMo, Gabe, mds, shutout |
|           11 |     2758 | 2024-03-20 | LAG              | W   | 0.409      | 0.477        | 0.020 (0.004)    | 0.417 (0.081)    | -         |     9.23 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|           10 |     2760 | 2024-03-20 | LAG              | L   | 0.409      | -            | -                | -                | -         |    -3.69 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            9 |     2774 | 2024-03-19 | Party Astronauts | L   | 0.403      | -            | -                | -                | -         |    -2.71 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            8 |     2777 | 2024-03-19 | Party Astronauts | L   | 0.403      | -            | -                | -                | -         |    -2.77 | BeaKie, CoJoMo, Gabe, mds, X-23    |
|            7 |     2872 | 2024-03-14 | Wildcard         | L   | 0.369      | -            | -                | -                | -         |    -3.01 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            6 |     2874 | 2024-03-14 | Wildcard         | L   | 0.369      | -            | -                | -                | -         |    -3.09 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            5 |     2904 | 2024-03-13 | Mythic           | W   | 0.362      | -            | -                | -                | -         |     6.78 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            4 |     2945 | 2024-03-12 | bubibabu         | W   | 0.356      | -            | -                | -                | -         |     1.21 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            3 |     3371 | 2024-02-22 | MIGHT            | L   | 0.229      | -            | -                | -                | -         |    -5.66 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            2 |     3614 | 2024-02-13 | Take Flyte       | L   | 0.170      | -            | -                | -                | -         |    -2.93 | BeaKie, CoJoMo, Gabe, mds, shutout |
|            1 |     3617 | 2024-02-13 | Take Flyte       | W   | 0.169      | -            | -                | -                | -         |     2.44 | BeaKie, CoJoMo, Gabe, mds, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,519.22)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
