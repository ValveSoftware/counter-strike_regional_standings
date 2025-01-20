### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [13](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1377.0<br />
<br />
Final Rank Value (1377.0) = Starting Rank Value (1423.5) + Head To Head Adjustments (-46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.733[<sup>1</sup>](#table2)
- Bounty Collected: 0.505[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.623[<sup>2</sup>](#table1)

The average of these factors is 0.517<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1423.5
- 400 + ( ( 0.517 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1423.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       34 | 2025-01-14 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -22.10 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           61 |      366 | 2024-12-06 | MOUZ           | L   | 0.928      | -            | -                | -                | -         |    -3.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           60 |      394 | 2024-12-05 | G2             | L   | 0.921      | -            | -                | -                | -         |    -1.26 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           59 |      406 | 2024-12-05 | paiN           | W   | 0.917      | 1.000        | 0.257 (0.236)    | 0.640 (0.587)    | 1 (0.917) |    16.08 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           58 |      420 | 2024-12-04 | MIBR           | L   | 0.915      | -            | -                | -                | -         |   -13.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           57 |      680 | 2024-11-22 | G2             | W   | 0.830      | 0.143        | 1.000 (0.119)    | -                | 1 (0.830) |    25.23 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           56 |      698 | 2024-11-21 | Eternal Fire   | W   | 0.824      | 0.143        | 0.337 (0.040)    | -                | 1 (0.824) |    13.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           55 |      707 | 2024-11-21 | TSM            | W   | 0.822      | -            | -                | -                | 1 (0.822) |     1.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           54 |     1102 | 2024-11-03 | OG             | W   | 0.704      | 0.898        | 0.171 (0.108)    | 0.289 (0.183)    | 1 (0.704) |     2.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           53 |     1117 | 2024-11-02 | The MongolZ    | L   | 0.699      | -            | -                | -                | -         |    -1.65 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |     1254 | 2024-10-26 | BESTIA         | W   | 0.653      | 0.477        | 0.156 (0.049)    | 0.622 (0.194)    | -         |     4.58 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |     1333 | 2024-10-21 | OG             | W   | 0.619      | 0.477        | 0.171 (0.051)    | -                | -         |     1.83 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |     1341 | 2024-10-21 | Falcons        | W   | 0.617      | -            | -                | -                | -         |     2.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |     1377 | 2024-10-19 | Nemiga         | L   | 0.605      | -            | -                | -                | -         |   -12.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |     1405 | 2024-10-18 | SAW            | W   | 0.599      | 0.500        | 0.259 (0.078)    | 0.441 (0.132)    | -         |     8.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |     1430 | 2024-10-17 | Sashi          | W   | 0.592      | 0.500        | -                | 0.617 (0.183)    | -         |     2.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |     1464 | 2024-10-16 | Nemiga         | L   | 0.586      | -            | -                | -                | -         |   -12.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |     1489 | 2024-10-15 | TSM            | W   | 0.579      | 0.500        | -                | 0.412 (0.119)    | -         |     1.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |     1528 | 2024-10-12 | Spirit Academy | L   | 0.558      | -            | -                | -                | -         |   -14.97 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1551 | 2024-10-10 | CYBERSHOKE     | W   | 0.546      | 0.435        | -                | 0.661 (0.157)    | -         |     0.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1682 | 2024-10-06 | Passion UA     | L   | 0.517      | -            | -                | -                | -         |   -12.66 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1719 | 2024-10-05 | PARIVISION     | W   | 0.510      | -            | -                | -                | -         |     1.06 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1781 | 2024-10-03 | Rhyno          | W   | 0.499      | -            | -                | -                | -         |     0.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1920 | 2024-09-29 | SAW            | L   | 0.471      | -            | -                | -                | -         |    -8.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1947 | 2024-09-28 | B8             | L   | 0.466      | -            | -                | -                | -         |   -11.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1961 | 2024-09-28 | BetBoom        | L   | 0.464      | -            | -                | -                | -         |   -12.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1992 | 2024-09-27 | 9z             | W   | 0.459      | -            | -                | -                | -         |     1.28 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     2004 | 2024-09-27 | Nemiga         | W   | 0.458      | -            | -                | -                | -         |     4.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     2012 | 2024-09-27 | CYBERSHOKE     | W   | 0.457      | 0.435        | -                | 0.661 (0.131)    | -         |     0.69 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     2042 | 2024-09-26 | Aurora         | W   | 0.452      | -            | -                | -                | -         |     1.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     2063 | 2024-09-26 | Monte          | W   | 0.450      | -            | -                | -                | -         |     1.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     2106 | 2024-09-25 | Zero Tenacity  | W   | 0.444      | -            | -                | -                | -         |     1.87 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     2159 | 2024-09-24 | Zero Tenacity  | W   | 0.437      | -            | -                | -                | -         |     1.88 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     2480 | 2024-09-13 | Zero Tenacity  | L   | 0.364      | -            | -                | -                | -         |    -9.99 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2616 | 2024-09-08 | The MongolZ    | L   | 0.330      | -            | -                | -                | -         |    -0.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2645 | 2024-09-07 | Wildcard       | W   | 0.325      | 0.889        | 0.230 (0.066)    | 0.636 (0.183)    | 1 (0.325) |     4.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2663 | 2024-09-06 | Spirit         | L   | 0.319      | -            | -                | -                | -         |    -0.38 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2680 | 2024-09-06 | 9z             | W   | 0.317      | -            | -                | -                | 1 (0.317) |     0.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2706 | 2024-09-05 | G2             | L   | 0.312      | -            | -                | -                | -         |    -0.39 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2752 | 2024-09-04 | The MongolZ    | W   | 0.304      | 0.889        | 1.000 (0.270)    | 0.647 (0.175)    | 1 (0.304) |     8.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     3009 | 2024-08-27 | Falcons        | L   | 0.251      | -            | -                | -                | -         |    -0.91 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     3061 | 2024-08-26 | Falcons        | L   | 0.246      | -            | -                | -                | -         |    -7.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     3080 | 2024-08-26 | fnatic         | W   | 0.245      | -            | -                | -                | -         |     1.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     3419 | 2024-08-16 | SINNERS        | L   | 0.177      | -            | -                | -                | -         |    -4.75 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     3494 | 2024-08-13 | Zero Tenacity  | W   | 0.159      | -            | -                | -                | -         |     0.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     3542 | 2024-08-12 | Nemiga         | L   | 0.153      | -            | -                | -                | -         |    -3.32 | Djoko, Ex3rcice, Graviti, Maka, wasiNk |
|           16 |     3625 | 2024-08-09 | PARIVISION     | W   | 0.132      | -            | -                | -                | -         |     0.19 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           15 |     3649 | 2024-08-08 | Falcons        | L   | 0.125      | -            | -                | -                | -         |    -0.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           14 |     3689 | 2024-08-07 | GUN5           | W   | 0.119      | -            | -                | -                | -         |     0.48 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           13 |     3704 | 2024-08-07 | 9z             | L   | 0.117      | -            | -                | -                | -         |    -3.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           12 |     3804 | 2024-08-04 | Johnny Speeds  | L   | 0.098      | -            | -                | -                | -         |    -2.70 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           11 |     3829 | 2024-08-03 | fnatic         | W   | 0.093      | -            | -                | -                | -         |     0.51 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           10 |     3871 | 2024-08-02 | UNPAID         | W   | 0.085      | -            | -                | -                | -         |     0.25 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            9 |     3908 | 2024-08-01 | Betera         | W   | 0.079      | -            | -                | -                | -         |     0.04 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            8 |     3946 | 2024-07-31 | Cloud9         | W   | 0.073      | -            | -                | -                | -         |     0.24 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            7 |     4069 | 2024-07-28 | The MongolZ    | W   | 0.052      | 0.650        | 1.000 (0.034)    | -                | 1 (0.052) |     1.51 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            6 |     4077 | 2024-07-28 | Aurora         | W   | 0.051      | -            | -                | -                | 1 (0.051) |     0.03 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            5 |     4095 | 2024-07-27 | ENCE           | W   | 0.045      | -            | -                | -                | -         |     0.31 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            4 |     4122 | 2024-07-26 | Eternal Fire   | L   | 0.037      | -            | -                | -                | -         |    -0.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            3 |     4164 | 2024-07-25 | Revenant       | W   | 0.031      | -            | -                | -                | -         |     0.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            2 |     4173 | 2024-07-25 | AMKAL          | W   | 0.029      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            1 |     4202 | 2024-07-24 | AMKAL          | W   | 0.023      | -            | -                | -                | -         |     0.03 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98,561.35)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.984 | $20,000.00     | $19,670.26      |
| 2024-11-03 |      0.706 | $70,000.00     | $49,401.26      |
| 2024-10-20 |      0.611 | $10,000.00     | $6,113.59       |
| 2024-10-13 |      0.566 | $2,000.00      | $1,131.21       |
| 2024-10-06 |      0.519 | $5,000.00      | $2,596.36       |
| 2024-09-28 |      0.465 | $5,000.00      | $2,327.13       |
| 2024-09-26 |      0.452 | $12,500.00     | $5,647.15       |
| 2024-09-22 |      0.426 | $12,000.00     | $5,110.04       |
| 2024-09-14 |      0.372 | $1,000.00      | $372.13         |
| 2024-07-28 |      0.052 | $120,000.00    | $6,192.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
