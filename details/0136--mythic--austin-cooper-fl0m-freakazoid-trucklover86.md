### Roster Details<br />
Team Name: Mythic<br />
Roster: Austin, Cooper, fl0m, freakazoid, Trucklover86<br />
Global Rank: [136](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
<br />
Final Rank Value:  756.5<br />
<br />
Final Rank Value (756.5) = Starting Rank Value (794.5) + Head To Head Adjustments (-38.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.5
- 400 + ( ( 0.191 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 794.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      488 | 2024-07-17 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.08 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           52 |      493 | 2024-07-17 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.54 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           51 |      549 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.24 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           50 |      556 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.83 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           49 |      603 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.54 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           48 |      606 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -16.97 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           47 |      867 | 2024-06-15 | Wildcard         | L   | 0.894      | -            | -                | -                | -         |    -8.31 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           46 |      942 | 2024-06-13 | LAG              | W   | 0.882      | 0.371        | 0.013 (0.004)    | 0.344 (0.112)    | 0 (0.000) |    14.54 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           45 |     1229 | 2024-06-06 | Legacy           | L   | 0.835      | -            | -                | -                | -         |    -6.59 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           44 |     1294 | 2024-06-05 | Elevate          | L   | 0.828      | -            | -                | -                | -         |    -7.31 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           43 |     1349 | 2024-06-04 | BOSS             | W   | 0.822      | 0.477        | 0.014 (0.006)    | 0.334 (0.131)    | 0 (0.000) |    11.56 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           42 |     1359 | 2024-06-04 | Perseverance     | W   | 0.820      | 0.384        | -                | 0.248 (0.078)    | 0 (0.000) |    10.86 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           41 |     1677 | 2024-05-22 | M80              | L   | 0.733      | -            | -                | -                | -         |    -1.63 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           40 |     1744 | 2024-05-20 | Elevate          | W   | 0.721      | 0.384        | 0.028 (0.008)    | 0.505 (0.140)    | 0 (0.000) |    16.99 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           39 |     1910 | 2024-05-15 | Perseverance     | W   | 0.688      | 0.477        | -                | 0.248 (0.081)    | 0 (0.000) |     9.95 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           38 |     1916 | 2024-05-15 | Perseverance     | L   | 0.688      | -            | -                | -                | -         |   -12.00 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           37 |     1963 | 2024-05-14 | Party Astronauts | L   | 0.681      | -            | -                | -                | -         |    -7.18 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           36 |     1971 | 2024-05-14 | Party Astronauts | W   | 0.681      | 0.477        | 0.042 (0.014)    | 0.532 (0.173)    | 0 (0.000) |    14.67 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           35 |     2041 | 2024-05-12 | Perseverance     | L   | 0.667      | -            | -                | -                | -         |   -11.64 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           34 |     2058 | 2024-05-11 | Nouns            | W   | 0.661      | 0.270        | 0.058 (0.010)    | 0.546 (0.097)    | 0 (0.000) |    15.21 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           33 |     2059 | 2024-05-11 | Wildcard         | W   | 0.661      | 0.270        | 0.055 (0.010)    | 0.501 (0.089)    | 0 (0.000) |    14.58 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           32 |     2430 | 2024-04-24 | BOSS             | W   | 0.548      | 0.477        | 0.014 (0.004)    | 0.334 (0.087)    | 0 (0.000) |    10.53 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           31 |     2431 | 2024-04-24 | BOSS             | L   | 0.548      | -            | -                | -                | -         |    -6.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           30 |     2703 | 2024-04-15 | NRG              | L   | 0.488      | -            | -                | -                | -         |    -5.60 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           29 |     2704 | 2024-04-15 | NRG              | L   | 0.488      | -            | -                | -                | -         |    -5.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           28 |     2759 | 2024-04-11 | Carpe Diem       | L   | 0.462      | -            | -                | -                | -         |    -9.64 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           27 |     2762 | 2024-04-11 | Carpe Diem       | W   | 0.461      | -            | -                | -                | 0 (0.000) |     4.96 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           26 |     2793 | 2024-04-10 | LAG              | L   | 0.455      | -            | -                | -                | -         |    -5.65 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           25 |     2798 | 2024-04-10 | LAG              | L   | 0.455      | -            | -                | -                | -         |    -5.87 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           24 |     3163 | 2024-03-27 | Wildcard         | L   | 0.361      | -            | -                | -                | -         |    -3.81 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           23 |     3166 | 2024-03-27 | Wildcard         | L   | 0.361      | -            | -                | -                | -         |    -3.92 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           22 |     3203 | 2024-03-26 | Limitless        | W   | 0.355      | -            | -                | -                | -         |     3.53 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           21 |     3208 | 2024-03-26 | Limitless        | L   | 0.355      | -            | -                | -                | -         |    -7.80 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           20 |     3284 | 2024-03-20 | Nouns            | W   | 0.315      | 0.477        | 0.058 (0.009)    | 0.546 (0.082)    | -         |     6.64 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           19 |     3289 | 2024-03-20 | Nouns            | L   | 0.315      | -            | -                | -                | -         |    -3.32 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           18 |     3305 | 2024-03-19 | M80              | W   | 0.309      | 0.477        | 0.065 (0.010)    | -                | -         |     2.73 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           17 |     3308 | 2024-03-19 | M80              | W   | 0.308      | 0.477        | 0.065 (0.010)    | -                | -         |     2.79 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           16 |     3397 | 2024-03-14 | Take Flyte       | W   | 0.275      | -            | -                | -                | -         |     3.33 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           15 |     3401 | 2024-03-14 | Take Flyte       | W   | 0.275      | -            | -                | -                | -         |     3.41 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           14 |     3434 | 2024-03-13 | Perseverance     | L   | 0.268      | -            | -                | -                | -         |    -4.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           13 |     3476 | 2024-03-12 | Wildcard         | W   | 0.261      | -            | -                | -                | -         |     5.44 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           12 |     3647 | 2024-03-05 | MIGHT            | L   | 0.215      | -            | -                | -                | -         |    -5.45 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           11 |     3649 | 2024-03-05 | MIGHT            | L   | 0.215      | -            | -                | -                | -         |    -5.51 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           10 |     3862 | 2024-02-24 | NRG              | L   | 0.147      | -            | -                | -                | -         |    -2.00 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            9 |     3951 | 2024-02-20 | Party Astronauts | L   | 0.121      | -            | -                | -                | -         |    -1.22 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            8 |     3976 | 2024-02-19 | Akimbo           | W   | 0.116      | -            | -                | -                | -         |     1.64 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            7 |     3977 | 2024-02-19 | NRG              | L   | 0.114      | -            | -                | -                | -         |    -1.57 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            6 |     4044 | 2024-02-16 | FLUFFY AIMERS    | W   | 0.095      | -            | -                | -                | -         |     1.36 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            5 |     4047 | 2024-02-16 | E-Xolos LAZER    | W   | 0.094      | -            | -                | -                | -         |     1.32 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            4 |     4102 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.082      | -            | -                | -                | -         |     1.18 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            3 |     4104 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.082      | -            | -                | -                | -         |     1.19 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            2 |     4143 | 2024-02-13 | Elevate          | W   | 0.075      | -            | -                | -                | -         |     1.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            1 |     4145 | 2024-02-13 | Elevate          | L   | 0.075      | -            | -                | -                | -         |    -0.54 | Cooper, fl0m, freakazoid, hate, Trucklover86   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,241.27)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.902 | $750.00        | $676.27         |
| 2024-06-09 |      0.855 | $3,000.00      | $2,565.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
