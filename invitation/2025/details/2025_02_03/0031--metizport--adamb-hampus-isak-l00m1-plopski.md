### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [31](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1148.9<br />
<br />
Final Rank Value (1148.9) = Starting Rank Value (1293.4) + Head To Head Adjustments (-144.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.577[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.234[<sup>2</sup>](#table1)
- LAN Wins: 0.649[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1293.4
- 400 + ( ( 0.461 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1293.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      337 | 2025-01-15 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.72 | adamb, hampus, isak, L00m1, Plopski |
|           46 |      422 | 2024-12-22 | PORTUGAL          | L   | 0.914      | -            | -                | -                | -         |   -24.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           45 |      426 | 2024-12-22 | Zero Tenacity     | W   | 0.913      | 0.387        | 0.078 (0.028)    | 0.715 (0.253)    | 0 (0.000) |     8.12 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           44 |      539 | 2024-12-14 | 9INE              | L   | 0.860      | -            | -                | -                | -         |   -20.98 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           43 |      566 | 2024-12-13 | Monte             | W   | 0.852      | 0.435        | 0.077 (0.029)    | 0.635 (0.235)    | 0 (0.000) |     8.98 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           42 |      595 | 2024-12-11 | Insilio           | W   | 0.839      | 0.435        | -                | 0.591 (0.215)    | -         |     1.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           41 |      608 | 2024-12-10 | Chimera           | L   | 0.832      | -            | -                | -                | -         |   -20.98 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           40 |      637 | 2024-12-08 | FLuffy Gangsters  | W   | 0.818      | 0.435        | -                | 0.608 (0.216)    | -         |     2.14 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           39 |      711 | 2024-12-05 | Fire Flux         | W   | 0.799      | 0.435        | -                | 0.972 (0.337)    | -         |     3.78 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           38 |      765 | 2024-12-03 | moneyF            | L   | 0.785      | -            | -                | -                | -         |   -20.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           37 |     1066 | 2024-11-17 | Partizan          | L   | 0.679      | -            | -                | -                | -         |   -13.14 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           36 |     1071 | 2024-11-17 | Nexus             | L   | 0.678      | -            | -                | -                | -         |    -9.63 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           35 |     1097 | 2024-11-16 | The Huns          | W   | 0.672      | 0.617        | 0.058 (0.024)    | 0.655 (0.272)    | 1 (0.672) |     4.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |     1126 | 2024-11-15 | Canada            | W   | 0.665      | -            | -                | -                | 1 (0.665) |     0.46 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |     1132 | 2024-11-15 | Norway            | W   | 0.665      | -            | -                | -                | 1 (0.665) |     0.79 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |     1144 | 2024-11-14 | los kogutos       | W   | 0.661      | 0.617        | 0.070 (0.028)    | 0.779 (0.318)    | 1 (0.661) |     4.30 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |     1190 | 2024-11-13 | Turkey            | L   | 0.652      | -            | -                | -                | -         |   -19.82 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |     1197 | 2024-11-13 | Mindfreak         | W   | 0.652      | -            | -                | -                | 1 (0.652) |     1.00 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |     1293 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.627      | 0.432        | 0.071 (0.019)    | -                | 1 (0.627) |     4.17 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1312 | 2024-11-08 | Johnny Speeds     | W   | 0.621      | 0.432        | 0.106 (0.028)    | 0.706 (0.189)    | 1 (0.621) |     4.48 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1328 | 2024-11-07 | Kappa Bar         | W   | 0.615      | -            | -                | -                | 1 (0.615) |     1.35 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1470 | 2024-10-31 | Johnny Speeds     | L   | 0.567      | -            | -                | -                | -         |   -14.00 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     1489 | 2024-10-30 | ECSTATIC          | W   | 0.560      | 0.333        | 0.081 (0.015)    | 1.000 (0.187)    | -         |     2.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     1494 | 2024-10-30 | Iberian Soul      | W   | 0.560      | -            | -                | -                | -         |     2.21 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     1841 | 2024-10-12 | Aurora            | L   | 0.439      | -            | -                | -                | -         |   -11.94 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     1865 | 2024-10-10 | fnatic            | W   | 0.425      | 0.435        | 0.176 (0.032)    | -                | -         |     3.77 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     1942 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.411      | 0.435        | 0.066 (0.012)    | 0.643 (0.115)    | -         |     2.40 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     1968 | 2024-10-07 | Monte             | L   | 0.405      | -            | -                | -                | -         |    -9.99 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     2049 | 2024-10-04 | CYBERSHOKE        | W   | 0.387      | -            | -                | -                | -         |     0.95 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     2094 | 2024-10-03 | Zero Tenacity     | L   | 0.379      | -            | -                | -                | -         |    -9.27 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           17 |     2171 | 2024-10-01 | G2 Ares           | W   | 0.367      | -            | -                | -                | -         |     0.24 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           16 |     2508 | 2024-09-23 | moneyF            | L   | 0.311      | -            | -                | -                | -         |    -8.93 | adamb, L00m1, nilo, Plopski, Sapec  |
|           15 |     2696 | 2024-09-16 | 9INE              | W   | 0.265      | -            | -                | -                | -         |     0.71 | adamb, L00m1, nilo, Plopski, Sapec  |
|           14 |     2852 | 2024-09-11 | Zero Tenacity     | L   | 0.232      | -            | -                | -                | -         |    -5.86 | adamb, L00m1, nilo, Plopski, Sapec  |
|           13 |     2906 | 2024-09-09 | Zero Tenacity     | L   | 0.219      | -            | -                | -                | -         |    -5.58 | adamb, L00m1, nilo, Plopski, Sapec  |
|           12 |     3052 | 2024-09-04 | Sampi             | W   | 0.186      | -            | -                | -                | -         |     0.70 | adamb, L00m1, nilo, Plopski, Sapec  |
|           11 |     3114 | 2024-09-02 | FAVBET            | W   | 0.172      | -            | -                | -                | -         |     0.55 | adamb, L00m1, nilo, Plopski, Sapec  |
|           10 |     3266 | 2024-08-28 | Nemiga            | W   | 0.139      | 0.384        | 0.480 (0.026)    | -                | -         |     1.79 | adamb, L00m1, nilo, Plopski, Sapec  |
|            9 |     3331 | 2024-08-27 | ex-Enterprise     | W   | 0.131      | -            | -                | -                | -         |     0.28 | adamb, L00m1, nilo, Plopski, Sapec  |
|            8 |     3511 | 2024-08-22 | Complexity        | L   | 0.100      | -            | -                | -                | -         |    -1.84 | adamb, L00m1, nilo, Plopski, Sapec  |
|            7 |     3582 | 2024-08-21 | 9INE              | L   | 0.092      | -            | -                | -                | -         |    -2.67 | adamb, L00m1, nilo, Plopski, Sapec  |
|            6 |     3631 | 2024-08-20 | TSM               | L   | 0.084      | -            | -                | -                | -         |    -2.48 | adamb, L00m1, nilo, Plopski, Sapec  |
|            5 |     3648 | 2024-08-19 | Sashi             | L   | 0.080      | -            | -                | -                | -         |    -2.14 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     3764 | 2024-08-15 | PARIVISION        | L   | 0.052      | -            | -                | -                | -         |    -1.51 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     3865 | 2024-08-12 | Sampi             | W   | 0.032      | -            | -                | -                | -         |     0.12 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     3966 | 2024-08-08 | moneyF            | W   | 0.005      | -            | -                | -                | -         |     0.01 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     3995 | 2024-08-07 | Johnny Speeds     | W   | 0.000      | -            | -                | -                | -         |     0.00 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,915.24)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.914 | $6,557.00      | $5,996.03       |
| 2024-12-15 |      0.867 | $2,000.00      | $1,733.18       |
| 2024-11-17 |      0.680 | $15,000.00     | $10,200.72      |
| 2024-11-09 |      0.627 | $24,239.00     | $15,195.35      |
| 2024-10-13 |      0.447 | $2,000.00      | $894.12         |
| 2024-09-26 |      0.333 | $500.00        | $166.61         |
| 2024-09-14 |      0.254 | $500.00        | $126.79         |
| 2024-08-25 |      0.120 | $5,000.00      | $602.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
