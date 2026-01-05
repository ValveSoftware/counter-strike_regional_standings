### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, fEAR, jackasmo, jambo, KRIMZ<br />
Global Rank: [30](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [22]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1434.5<br />
<br />
Final Rank Value (1434.5) = Starting Rank Value (1530.7) + Head To Head Adjustments (-96.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.559[<sup>1</sup>](#table2)
- Bounty Collected: 0.505[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.966[<sup>2</sup>](#table1)

The average of these factors is 0.570<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1530.7
- 400 + ( ( 0.570 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1530.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      125 | 2025-12-20 | Friendly Campers | L   | 1.000      | -            | -                | -                | -         |   -18.96 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           63 |      132 | 2025-12-20 | illwill          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.50 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           62 |      147 | 2025-12-19 | Lazer Cats       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.55 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           61 |      153 | 2025-12-19 | MOUZ NXT         | W   | 1.000      | 0.339        | -                | 0.832 (0.282)    | 1 (1.000) |     3.92 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           60 |      160 | 2025-12-19 | CYBERSHOKE       | L   | 1.000      | -            | -                | -                | -         |   -24.04 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           59 |      176 | 2025-12-18 | G2 Ares          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.21 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           58 |      457 | 2025-12-01 | Passion UA       | L   | 0.966      | -            | -                | -                | -         |   -13.72 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           57 |      475 | 2025-11-30 | Imperial         | L   | 0.960      | -            | -                | -                | -         |   -17.01 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           56 |      497 | 2025-11-29 | B8               | L   | 0.955      | -            | -                | -                | -         |    -7.45 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           55 |      530 | 2025-11-29 | 3DMAX            | W   | 0.952      | 0.809        | 0.523 (0.403)    | 0.515 (0.397)    | 1 (0.952) |    20.02 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           54 |      579 | 2025-11-26 | NRG              | W   | 0.934      | 0.624        | 0.048 (0.028)    | 0.634 (0.369)    | 1 (0.934) |    14.72 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           53 |      602 | 2025-11-25 | Imperial         | W   | 0.926      | 0.624        | 0.109 (0.063)    | 0.590 (0.341)    | 1 (0.926) |    12.74 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           52 |      617 | 2025-11-24 | Fluxo            | L   | 0.922      | -            | -                | -                | -         |   -20.56 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           51 |      631 | 2025-11-24 | RED Canids       | W   | 0.920      | 0.624        | -                | 0.323 (0.185)    | 1 (0.920) |     2.17 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           50 |     1431 | 2025-10-29 | GamerLegion      | L   | 0.746      | -            | -                | -                | -         |   -10.84 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           49 |     1447 | 2025-10-28 | MIBR             | W   | 0.741      | 1.000        | 0.092 (0.068)    | 0.272 (0.201)    | 1 (0.741) |     4.22 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           48 |     1503 | 2025-10-27 | FlyQuest         | L   | 0.733      | -            | -                | -                | -         |   -17.07 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           47 |     1549 | 2025-10-26 | Aurora           | L   | 0.727      | -            | -                | -                | -         |    -4.33 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           46 |     1849 | 2025-10-17 | 3DMAX            | L   | 0.664      | -            | -                | -                | -         |    -5.30 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           45 |     1881 | 2025-10-16 | HEROIC           | L   | 0.658      | -            | -                | -                | -         |    -9.37 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           44 |     1919 | 2025-10-15 | TYLOO            | W   | 0.652      | 1.000        | 0.170 (0.111)    | -                | 1 (0.652) |     2.67 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           43 |     1950 | 2025-10-14 | paiN             | W   | 0.644      | 1.000        | 0.386 (0.248)    | 0.300 (0.193)    | -         |    11.24 | blameF, fEAR, jackasmo, jambo, KRIMZ  |
|           42 |     2271 | 2025-10-05 | 9INE             | W   | 0.590      | -            | -                | -                | -         |     8.41 | blameF, CYPHER, fEAR, jackasmo, jambo |
|           41 |     2303 | 2025-10-05 | OG               | W   | 0.586      | -            | -                | -                | -         |     4.61 | blameF, CYPHER, fEAR, jackasmo, jambo |
|           40 |     2334 | 2025-10-04 | BIG              | W   | 0.582      | 0.333        | 0.122 (0.024)    | -                | -         |     5.45 | blameF, CYPHER, fEAR, jackasmo, jambo |
|           39 |     2356 | 2025-10-04 | Metizport        | W   | 0.580      | -            | -                | -                | -         |     1.42 | blameF, CYPHER, fEAR, jackasmo, jambo |
|           38 |     2598 | 2025-09-28 | Phantom          | L   | 0.538      | -            | -                | -                | -         |   -15.26 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           37 |     2647 | 2025-09-27 | Monte            | W   | 0.532      | -            | -                | -                | -         |     3.89 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           36 |     2660 | 2025-09-27 | Phantom          | W   | 0.531      | -            | -                | -                | -         |     0.35 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           35 |     2775 | 2025-09-24 | ENCE             | L   | 0.512      | -            | -                | -                | -         |   -11.19 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           34 |     2782 | 2025-09-23 | Nemiga           | W   | 0.507      | 0.486        | 0.085 (0.021)    | 0.673 (0.166)    | -         |     1.51 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           33 |     2797 | 2025-09-22 | GUN5             | W   | 0.501      | 0.486        | -                | 0.816 (0.199)    | -         |     3.49 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           32 |     2879 | 2025-09-19 | Friendly Campers | L   | 0.481      | -            | -                | -                | -         |    -8.96 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           31 |     2915 | 2025-09-18 | Alliance         | L   | 0.474      | -            | -                | -                | -         |   -11.06 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           30 |     3030 | 2025-09-14 | ECSTATIC         | L   | 0.448      | -            | -                | -                | -         |    -9.99 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           29 |     3059 | 2025-09-14 | Nemiga           | W   | 0.446      | -            | -                | -                | -         |     1.10 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           28 |     3092 | 2025-09-13 | RUBY             | W   | 0.441      | 0.384        | -                | 0.962 (0.163)    | -         |     0.70 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           27 |     3115 | 2025-09-13 | Oramond          | W   | 0.439      | -            | -                | -                | -         |     1.06 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           26 |     3195 | 2025-09-11 | ex-Zero Tenacity | W   | 0.427      | -            | -                | -                | -         |     0.59 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           25 |     3337 | 2025-09-08 | Insilio          | W   | 0.408      | -            | -                | -                | -         |     0.14 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           24 |     3474 | 2025-09-01 | M80              | L   | 0.360      | -            | -                | -                | -         |    -6.58 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           23 |     3488 | 2025-08-31 | Monte            | W   | 0.353      | -            | -                | -                | -         |     2.00 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           22 |     3497 | 2025-08-31 | GamerLegion      | W   | 0.352      | 0.561        | 0.239 (0.047)    | -                | -         |     5.84 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           21 |     3506 | 2025-08-30 | Monte            | W   | 0.348      | -            | -                | -                | -         |     1.99 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           20 |     3528 | 2025-08-30 | EYEBALLERS       | W   | 0.345      | -            | -                | -                | -         |     4.55 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           19 |     3540 | 2025-08-29 | ENCE             | W   | 0.341      | -            | -                | -                | -         |     3.24 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           18 |     3561 | 2025-08-29 | ECSTATIC         | W   | 0.339      | -            | -                | -                | -         |     3.26 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           17 |     3607 | 2025-08-27 | Natus Vincere    | L   | 0.328      | -            | -                | -                | -         |    -1.22 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           16 |     3722 | 2025-08-21 | OG               | L   | 0.286      | -            | -                | -                | -         |    -7.37 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           15 |     3762 | 2025-08-20 | Tricked          | W   | 0.278      | -            | -                | -                | -         |     0.05 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           14 |     3811 | 2025-08-17 | Gentle Mates     | L   | 0.261      | -            | -                | -                | -         |    -4.20 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           13 |     3859 | 2025-08-16 | ENCE             | W   | 0.253      | -            | -                | -                | -         |     2.59 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           12 |     3907 | 2025-08-15 | BetBoom          | W   | 0.246      | 0.624        | 0.229 (0.035)    | -                | -         |     3.86 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           11 |     4001 | 2025-08-13 | PARIVISION       | L   | 0.233      | -            | -                | -                | -         |    -3.72 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|           10 |     4104 | 2025-08-11 | ECSTATIC         | W   | 0.220      | -            | -                | -                | -         |     2.10 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            9 |     4151 | 2025-08-10 | PARIVISION       | L   | 0.212      | -            | -                | -                | -         |    -3.39 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            8 |     4165 | 2025-08-09 | 9INE             | W   | 0.207      | -            | -                | -                | -         |     2.32 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            7 |     4177 | 2025-08-08 | Sashi            | W   | 0.201      | -            | -                | -                | -         |     1.40 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            6 |     4194 | 2025-08-07 | Legacy           | L   | 0.195      | -            | -                | -                | -         |    -1.24 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            5 |     4262 | 2025-08-02 | ECSTATIC         | L   | 0.160      | -            | -                | -                | -         |    -3.56 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            4 |     4284 | 2025-08-01 | SPARTA           | W   | 0.153      | -            | -                | -                | -         |     0.13 | blameF, CYPHER, fEAR, jambo, KRIMZ    |
|            3 |     4598 | 2025-07-15 | Passion UA       | L   | 0.041      | -            | -                | -                | -         |    -1.27 | blameF, fEAR, jambo, KRIMZ, zeRRoFIX  |
|            2 |     4606 | 2025-07-15 | Sashi            | L   | 0.040      | -            | -                | -                | -         |    -0.99 | blameF, fEAR, jambo, KRIMZ, zeRRoFIX  |
|            1 |     4618 | 2025-07-14 | Friendly Campers | W   | 0.035      | -            | -                | -                | -         |     0.41 | blameF, fEAR, jambo, KRIMZ, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,801.06)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      1.000 | $1,117.00      | $1,117.00       |
| 2025-12-02 |      0.974 | $10,000.00     | $9,744.70       |
| 2025-11-01 |      0.767 | $18,750.00     | $14,382.78      |
| 2025-10-19 |      0.679 | $45,000.00     | $30,535.33      |
| 2025-10-05 |      0.590 | $5,500.00      | $3,245.06       |
| 2025-09-24 |      0.514 | $5,856.00      | $3,010.98       |
| 2025-09-14 |      0.448 | $3,000.00      | $1,343.98       |
| 2025-09-01 |      0.361 | $10,000.00     | $3,614.70       |
| 2025-08-31 |      0.353 | $4,917.00      | $1,737.55       |
| 2025-08-10 |      0.214 | $5,000.00      | $1,068.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
