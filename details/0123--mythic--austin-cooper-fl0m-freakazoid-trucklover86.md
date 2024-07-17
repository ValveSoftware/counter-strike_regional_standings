### Roster Details<br />
Team Name: Mythic<br />
Roster: Austin, Cooper, fl0m, freakazoid, Trucklover86<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  826.1<br />
<br />
Final Rank Value (826.1) = Starting Rank Value (850.8) + Head To Head Adjustments (-24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.8
- 400 + ( ( 0.210 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 850.8


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
|           51 |       19 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.21 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           50 |       26 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.80 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           49 |       73 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -16.17 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           48 |       76 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -17.66 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           47 |      337 | 2024-06-15 | Wildcard         | L   | 0.989      | -            | -                | -                | -         |    -9.11 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           46 |      412 | 2024-06-13 | LAG              | W   | 0.976      | 0.371        | 0.020 (0.007)    | 0.417 (0.151)    | 0 (0.000) |    16.04 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           45 |      699 | 2024-06-06 | Legacy           | L   | 0.929      | -            | -                | -                | -         |    -6.16 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           44 |      764 | 2024-06-05 | Elevate          | L   | 0.923      | -            | -                | -                | -         |    -8.03 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           43 |      819 | 2024-06-04 | BOSS             | W   | 0.916      | 0.477        | 0.022 (0.009)    | 0.345 (0.151)    | 0 (0.000) |    12.25 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           42 |      829 | 2024-06-04 | Perseverance     | W   | 0.914      | 0.384        | -                | 0.268 (0.094)    | 0 (0.000) |    11.61 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           41 |     1147 | 2024-05-22 | M80              | L   | 0.828      | -            | -                | -                | -         |    -2.11 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           40 |     1214 | 2024-05-20 | Elevate          | W   | 0.816      | 0.384        | 0.042 (0.013)    | 0.583 (0.183)    | 0 (0.000) |    19.32 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           39 |     1380 | 2024-05-15 | Perseverance     | W   | 0.783      | 0.477        | -                | 0.268 (0.100)    | 0 (0.000) |    11.10 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           38 |     1386 | 2024-05-15 | Perseverance     | L   | 0.782      | -            | -                | -                | -         |   -13.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           37 |     1433 | 2024-05-14 | Party Astronauts | L   | 0.776      | -            | -                | -                | -         |    -8.13 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           36 |     1441 | 2024-05-14 | Party Astronauts | W   | 0.776      | 0.477        | 0.063 (0.023)    | 0.604 (0.224)    | 0 (0.000) |    16.73 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           35 |     1511 | 2024-05-12 | Perseverance     | L   | 0.761      | -            | -                | -                | -         |   -13.53 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           34 |     1528 | 2024-05-11 | Nouns            | W   | 0.755      | 0.270        | 0.087 (0.018)    | 0.566 (0.116)    | 0 (0.000) |    17.61 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           33 |     1529 | 2024-05-11 | Wildcard         | W   | 0.755      | 0.270        | 0.064 (0.013)    | 0.553 (0.113)    | 0 (0.000) |    16.88 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           32 |     1900 | 2024-04-24 | BOSS             | W   | 0.643      | 0.477        | 0.022 (0.007)    | 0.345 (0.106)    | 0 (0.000) |    12.15 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           31 |     1901 | 2024-04-24 | BOSS             | L   | 0.643      | -            | -                | -                | -         |    -8.19 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           30 |     2173 | 2024-04-15 | NRG              | L   | 0.582      | -            | -                | -                | -         |    -6.66 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           29 |     2174 | 2024-04-15 | NRG              | L   | 0.582      | -            | -                | -                | -         |    -6.99 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           28 |     2229 | 2024-04-11 | Carpe Diem       | L   | 0.556      | -            | -                | -                | -         |   -12.04 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           27 |     2232 | 2024-04-11 | Carpe Diem       | W   | 0.556      | -            | -                | -                | 0 (0.000) |     5.51 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           26 |     2263 | 2024-04-10 | LAG              | L   | 0.549      | -            | -                | -                | -         |    -6.51 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           25 |     2268 | 2024-04-10 | LAG              | L   | 0.549      | -            | -                | -                | -         |    -6.82 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           24 |     2633 | 2024-03-27 | Wildcard         | L   | 0.456      | -            | -                | -                | -         |    -4.73 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           23 |     2636 | 2024-03-27 | Wildcard         | L   | 0.455      | -            | -                | -                | -         |    -4.90 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           22 |     2673 | 2024-03-26 | Limitless        | W   | 0.450      | -            | -                | -                | -         |     4.02 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           21 |     2678 | 2024-03-26 | Limitless        | L   | 0.449      | -            | -                | -                | -         |   -10.37 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           20 |     2754 | 2024-03-20 | Nouns            | W   | 0.410      | 0.477        | 0.087 (0.017)    | 0.566 (0.111)    | -         |     8.68 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           19 |     2759 | 2024-03-20 | Nouns            | L   | 0.409      | -            | -                | -                | -         |    -4.27 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           18 |     2775 | 2024-03-19 | M80              | W   | 0.403      | 0.477        | 0.097 (0.019)    | -                | -         |     3.18 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           17 |     2778 | 2024-03-19 | M80              | W   | 0.403      | 0.477        | 0.097 (0.019)    | -                | -         |     3.27 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           16 |     2867 | 2024-03-14 | Take Flyte       | W   | 0.370      | -            | -                | -                | -         |     4.16 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           15 |     2871 | 2024-03-14 | Take Flyte       | W   | 0.369      | -            | -                | -                | -         |     4.29 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           14 |     2904 | 2024-03-13 | Perseverance     | L   | 0.362      | -            | -                | -                | -         |    -6.78 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           13 |     2946 | 2024-03-12 | Wildcard         | W   | 0.356      | -            | -                | -                | -         |     7.43 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           12 |     3117 | 2024-03-05 | MIGHT            | L   | 0.310      | -            | -                | -                | -         |    -8.10 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           11 |     3119 | 2024-03-05 | MIGHT            | L   | 0.309      | -            | -                | -                | -         |    -8.22 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           10 |     3332 | 2024-02-24 | NRG              | L   | 0.242      | -            | -                | -                | -         |    -3.42 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            9 |     3421 | 2024-02-20 | Party Astronauts | L   | 0.216      | -            | -                | -                | -         |    -2.22 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            8 |     3446 | 2024-02-19 | OMiT             | W   | 0.210      | -            | -                | -                | -         |     2.86 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            7 |     3447 | 2024-02-19 | NRG              | L   | 0.209      | -            | -                | -                | -         |    -3.04 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            6 |     3514 | 2024-02-16 | FLUFFY AIMERS    | W   | 0.189      | -            | -                | -                | -         |     2.63 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            5 |     3517 | 2024-02-16 | E-Xolos LAZER    | W   | 0.189      | -            | -                | -                | -         |     2.42 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            4 |     3572 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.176      | -            | -                | -                | -         |     2.48 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            3 |     3574 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.176      | -            | -                | -                | -         |     2.52 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            2 |     3613 | 2024-02-13 | Elevate          | W   | 0.170      | -            | -                | -                | -         |     4.24 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            1 |     3615 | 2024-02-13 | Elevate          | L   | 0.169      | -            | -                | -                | -         |    -1.11 | Cooper, fl0m, freakazoid, hate, Trucklover86   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,595.70)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $750.00        | $747.16         |
| 2024-06-09 |      0.950 | $3,000.00      | $2,848.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
