### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, Liazz, nettik, regali, Vexite<br />
Global Rank: [29](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  1093.6<br />
<br />
Final Rank Value (1093.6) = Starting Rank Value (1022.7) + Head To Head Adjustments (70.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.544[<sup>1</sup>](#table2)
- Bounty Collected: 0.429[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.319[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.7
- 400 + ( ( 0.343 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 1022.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       37 | 2025-05-01 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -0.75 | INS, Liazz, nettik, regali, Vexite   |
|           28 |       61 | 2025-04-30 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -0.40 | INS, Liazz, nettik, regali, Vexite   |
|           27 |      152 | 2025-04-22 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -1.35 | INS, Liazz, nettik, regali, Vexite   |
|           26 |      162 | 2025-04-22 | Virtus.pro    | W   | 1.000      | 1.000        | 0.396 (0.396)    | 0.458 (0.458)    | 1 (1.000) |    29.71 | INS, Liazz, nettik, regali, Vexite   |
|           25 |      175 | 2025-04-21 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -0.11 | INS, Liazz, nettik, regali, Vexite   |
|           24 |      266 | 2025-04-17 | SemperFi      | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.380 (0.054)    | 0 (0.000) |    12.69 | INS, Liazz, nettik, regali, Vexite   |
|           23 |      292 | 2025-04-15 | SemperFi      | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.380 (0.054)    | 0 (0.000) |    13.31 | INS, Liazz, nettik, regali, Vexite   |
|           22 |      315 | 2025-04-15 | Rooster       | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.485 (0.069)    | -         |     7.88 | INS, Liazz, nettik, regali, Vexite   |
|           21 |     1467 | 2025-03-05 | TYLOO         | L   | 0.793      | -            | -                | -                | -         |   -12.04 | dexter, INS, Liazz, regali, Vexite   |
|           20 |     1486 | 2025-03-04 | Aurora        | L   | 0.787      | -            | -                | -                | -         |    -0.37 | dexter, INS, Liazz, regali, Vexite   |
|           19 |     1496 | 2025-03-03 | paiN          | W   | 0.781      | 0.143        | 0.293 (0.033)    | 0.363 (0.041)    | 1 (0.781) |    21.66 | dexter, INS, Liazz, regali, Vexite   |
|           18 |     1529 | 2025-03-02 | Lynn Vision   | W   | 0.772      | 0.143        | 0.051 (0.006)    | 0.705 (0.078)    | 1 (0.772) |    11.48 | dexter, INS, Liazz, regali, Vexite   |
|           17 |     1561 | 2025-03-01 | M80           | L   | 0.765      | -            | -                | -                | -         |   -13.74 | dexter, INS, Liazz, regali, Vexite   |
|           16 |     1845 | 2025-02-16 | SAW           | L   | 0.680      | -            | -                | -                | -         |    -5.91 | dexter, INS, Liazz, regali, Vexite   |
|           15 |     1888 | 2025-02-15 | BIG           | L   | 0.672      | -            | -                | -                | -         |    -4.81 | dexter, INS, Liazz, regali, Vexite   |
|           14 |     1912 | 2025-02-14 | Falcons       | L   | 0.666      | -            | -                | -                | -         |    -0.12 | dexter, INS, Liazz, regali, Vexite   |
|           13 |     2272 | 2025-01-30 | Astralis      | L   | 0.567      | -            | -                | -                | -         |    -1.20 | dexter, INS, Liazz, regali, Vexite   |
|           12 |     2286 | 2025-01-29 | 3DMAX         | L   | 0.558      | -            | -                | -                | -         |    -0.45 | dexter, INS, Liazz, regali, Vexite   |
|           11 |     2385 | 2025-01-18 | Spirit        | L   | 0.487      | -            | -                | -                | -         |    -0.18 | dexter, INS, Liazz, regali, Vexite   |
|           10 |     2403 | 2025-01-14 | MIBR          | W   | 0.459      | 0.143        | 0.149 (0.010)    | 0.351 (0.023)    | -         |     9.91 | dexter, INS, Liazz, regali, Vexite   |
|            9 |     2832 | 2024-12-02 | MIBR          | L   | 0.177      | -            | -                | -                | -         |    -1.82 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     2852 | 2024-12-02 | paiN          | L   | 0.171      | -            | -                | -                | -         |    -0.74 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     2871 | 2024-11-30 | Liquid        | L   | 0.164      | -            | -                | -                | -         |    -0.21 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     2901 | 2024-11-30 | BIG           | W   | 0.158      | 0.143        | 0.289 (0.007)    | 0.467 (0.011)    | 1 (0.158) |     4.09 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     2908 | 2024-11-29 | Complexity    | W   | 0.157      | 0.143        | 0.393 (0.009)    | 0.799 (0.018)    | 1 (0.157) |     4.66 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3267 | 2024-11-13 | Lynn Vision   | W   | 0.045      | 0.143        | 0.051 (0.000)    | 0.705 (0.005)    | 1 (0.045) |     0.49 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3277 | 2024-11-12 | Adventurers   | W   | 0.044      | -            | -                | -                | 1 (0.044) |     0.07 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3314 | 2024-11-11 | ex-GR         | W   | 0.037      | -            | -                | -                | 1 (0.037) |     0.08 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3333 | 2024-11-11 | TALON         | L   | 0.033      | -            | -                | -                | -         |    -0.98 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,489.17)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-04-27 |      1.000 | $25,000.00     | $25,000.00      |
| 2025-03-05 |      0.795 | $6,500.00      | $5,166.84       |
| 2025-02-23 |      0.728 | $12,500.00     | $9,101.11       |
| 2025-01-31 |      0.574 | $2,500.00      | $1,435.39       |
| 2024-12-03 |      0.179 | $10,000.00     | $1,785.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
