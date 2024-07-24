### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [26](../standings_global.md)<br />
Regional Rank: [2]( ../standings_asia.md)<br />
Final Rank Value:  1249.7<br />
<br />
Final Rank Value (1249.7) = Starting Rank Value (1237.6) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.447[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.503[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1237.6
- 400 + ( ( 0.414 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1237.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      230 | 2024-07-18 | FURIA              | L   | 1.000      | -            | -                | -                | -         |    -3.50 | aliStair, dexter, INS, Liazz, Vexite |
|           47 |      296 | 2024-07-17 | FaZe               | L   | 1.000      | -            | -                | -                | -         |    -1.48 | aliStair, dexter, INS, Liazz, Vexite |
|           46 |      867 | 2024-06-09 | Rooster            | W   | 0.897      | 0.333        | 0.014 (0.004)    | 0.298 (0.089)    | 0 (0.000) |     3.16 | aliStair, dexter, INS, Liazz, Vexite |
|           45 |      923 | 2024-06-08 | Mindfreak          | W   | 0.891      | 0.333        | -                | 0.210 (0.062)    | -         |     1.65 | aliStair, dexter, INS, Liazz, Vexite |
|           44 |      975 | 2024-06-07 | Rooster            | L   | 0.884      | -            | -                | -                | -         |   -25.11 | aliStair, dexter, INS, Liazz, Vexite |
|           43 |     1306 | 2024-05-28 | BIG                | L   | 0.821      | -            | -                | -                | -         |   -12.75 | aliStair, dexter, INS, Liazz, Vexite |
|           42 |     1328 | 2024-05-27 | Spirit             | L   | 0.814      | -            | -                | -                | -         |    -0.76 | aliStair, dexter, INS, Liazz, Vexite |
|           41 |     1456 | 2024-05-22 | Mindfreak          | W   | 0.778      | 0.333        | -                | 0.210 (0.055)    | -         |     1.05 | aliStair, dexter, INS, Liazz, Vexite |
|           40 |     1460 | 2024-05-22 | Mindfreak          | W   | 0.777      | 0.333        | -                | 0.210 (0.055)    | -         |     1.06 | aliStair, dexter, INS, Liazz, Vexite |
|           39 |     1533 | 2024-05-20 | Canon Event        | W   | 0.765      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |     1535 | 2024-05-20 | Canon Event        | W   | 0.765      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |     1900 | 2024-05-08 | Liquid             | L   | 0.686      | -            | -                | -                | -         |    -5.79 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |     1918 | 2024-05-07 | BetBoom            | W   | 0.680      | 0.889        | 0.333 (0.201)    | 0.642 (0.388)    | 1 (0.680) |    14.92 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |     1962 | 2024-05-05 | Ninjas in Pyjamas  | W   | 0.665      | 0.889        | 0.287 (0.170)    | 0.537 (0.318)    | 1 (0.665) |    18.37 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |     1976 | 2024-05-04 | PERA               | W   | 0.659      | 0.889        | 0.061 (0.036)    | 0.462 (0.271)    | 1 (0.659) |     2.94 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |     1994 | 2024-05-03 | HEROIC             | L   | 0.652      | -            | -                | -                | -         |    -2.41 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |     2022 | 2024-05-02 | BOSS               | W   | 0.645      | 0.889        | 0.018 (0.010)    | 0.378 (0.217)    | 1 (0.645) |     1.86 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |     2045 | 2024-05-01 | Natus Vincere      | L   | 0.638      | -            | -                | -                | -         |    -0.31 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     2289 | 2024-04-20 | Bad News Kangaroos | W   | 0.565      | 0.143        | 0.023 (0.002)    | -                | -         |     1.39 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     2335 | 2024-04-19 | Rooster            | W   | 0.558      | -            | -                | -                | -         |     1.49 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     2342 | 2024-04-19 | Mindfreak          | W   | 0.557      | -            | -                | -                | -         |     0.79 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     2588 | 2024-04-10 | FaZe               | L   | 0.498      | -            | -                | -                | -         |    -0.76 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     2602 | 2024-04-10 | Nemiga             | W   | 0.497      | 0.624        | 0.415 (0.129)    | 0.707 (0.219)    | 1 (0.497) |     6.71 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     2652 | 2024-04-09 | Virtus.pro         | L   | 0.491      | -            | -                | -                | -         |    -0.74 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     2683 | 2024-04-08 | Cloud9             | W   | 0.484      | 0.624        | 0.092 (0.028)    | 0.149 (0.045)    | 1 (0.484) |     5.86 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     2826 | 2024-04-03 | Arcade             | W   | 0.451      | -            | -                | -                | -         |     0.57 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     2830 | 2024-04-03 | Arcade             | W   | 0.451      | -            | -                | -                | -         |     0.57 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     2951 | 2024-03-27 | KZG                | W   | 0.405      | -            | -                | -                | -         |     0.57 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     2957 | 2024-03-27 | KZG                | W   | 0.404      | -            | -                | -                | -         |     0.58 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     3222 | 2024-03-13 | Rooster            | W   | 0.311      | 0.333        | 0.014 (0.001)    | -                | -         |     0.80 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     3230 | 2024-03-13 | Rooster            | W   | 0.311      | 0.333        | 0.014 (0.001)    | -                | -         |     0.81 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     3398 | 2024-03-06 | DXA                | W   | 0.265      | -            | -                | -                | -         |     0.38 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     3400 | 2024-03-06 | DXA                | W   | 0.264      | -            | -                | -                | -         |     0.38 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     3548 | 2024-02-28 | Lynn Vision        | L   | 0.218      | -            | -                | -                | -         |    -5.22 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     3549 | 2024-02-27 | ATOX               | W   | 0.217      | -            | -                | -                | 1 (0.217) |     0.86 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     3569 | 2024-02-27 | JiJieHao           | W   | 0.211      | -            | -                | -                | 1 (0.211) |     0.07 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     3586 | 2024-02-25 | The MongolZ        | L   | 0.203      | -            | -                | -                | -         |    -0.14 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     3591 | 2024-02-25 | ATOX               | W   | 0.202      | -            | -                | -                | 1 (0.202) |     0.80 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     3651 | 2024-02-23 | Rooster            | W   | 0.185      | -            | -                | -                | -         |     0.46 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3671 | 2024-02-22 | Rooster            | W   | 0.178      | -            | -                | -                | -         |     0.44 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3674 | 2024-02-21 | Bad News Kangaroos | W   | 0.177      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3699 | 2024-02-21 | Bad News Kangaroos | W   | 0.171      | -            | -                | -                | -         |     0.40 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3703 | 2024-02-21 | Bad News Kangaroos | W   | 0.171      | -            | -                | -                | -         |     0.40 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3756 | 2024-02-19 | Mindfreak          | W   | 0.157      | -            | -                | -                | -         |     0.22 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3774 | 2024-02-18 | Arcade             | W   | 0.151      | -            | -                | -                | -         |     0.20 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3777 | 2024-02-18 | MANTRA             | W   | 0.151      | -            | -                | -                | -         |     0.04 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3778 | 2024-02-17 | Arcade             | W   | 0.149      | -            | -                | -                | -         |     0.20 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3800 | 2024-02-16 | GR                 | W   | 0.143      | -            | -                | -                | -         |     0.19 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,647.76)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.897 | $3,250.00      | $2,916.51       |
| 2024-06-02 |      0.854 | $4,000.00      | $3,416.67       |
| 2024-05-12 |      0.713 | $23,500.00     | $16,755.97      |
| 2024-04-14 |      0.525 | $6,000.00      | $3,149.38       |
| 2024-02-17 |      0.149 | $2,750.00      | $409.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
