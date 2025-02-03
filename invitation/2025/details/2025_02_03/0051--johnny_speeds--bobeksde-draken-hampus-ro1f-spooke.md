### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [51](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1043.5<br />
<br />
Final Rank Value (1043.5) = Starting Rank Value (1018.9) + Head To Head Adjustments (24.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.506[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.268[<sup>2</sup>](#table1)

The average of these factors is 0.319<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1018.9
- 400 + ( ( 0.319 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1018.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      945 | 2024-11-23 | Alliance          | W   | 0.720      | 0.377        | 0.038 (0.010)    | 0.404 (0.110)    | 1 (0.720) |     7.13 | bobeksde, draken, hampus, Ro1f, spooke   |
|           50 |      999 | 2024-11-21 | Kappa Bar         | W   | 0.707      | -            | -                | -                | 1 (0.707) |     4.31 | bobeksde, draken, hampus, Ro1f, spooke   |
|           49 |     1001 | 2024-11-21 | Alliance          | W   | 0.706      | 0.377        | 0.038 (0.010)    | 0.404 (0.108)    | 1 (0.706) |     7.22 | bobeksde, draken, hampus, Ro1f, spooke   |
|           48 |     1278 | 2024-11-10 | OG                | W   | 0.634      | 0.354        | 0.166 (0.037)    | -                | 0 (0.000) |     7.86 | bobeksde, draken, hampus, Ro1f, spooke   |
|           47 |     1312 | 2024-11-08 | Metizport         | L   | 0.621      | -            | -                | -                | -         |    -4.48 | bobeksde, draken, hampus, Ro1f, spooke   |
|           46 |     1357 | 2024-11-06 | ECLOT             | L   | 0.604      | -            | -                | -                | -         |    -5.65 | bobeksde, draken, hampus, Ro1f, spooke   |
|           45 |     1369 | 2024-11-05 | showmakerz        | W   | 0.600      | -            | -                | -                | 0 (0.000) |     0.55 | bobeksde, draken, hampus, Ro1f, spooke   |
|           44 |     1387 | 2024-11-04 | HOTU              | W   | 0.593      | 0.384        | -                | 0.383 (0.087)    | 0 (0.000) |     3.31 | bobeksde, draken, hampus, Ro1f, spooke   |
|           43 |     1399 | 2024-11-03 | Insilio           | W   | 0.587      | 0.354        | -                | 0.591 (0.123)    | 0 (0.000) |     2.46 | bobeksde, draken, hampus, Ro1f, spooke   |
|           42 |     1454 | 2024-11-01 | OG                | W   | 0.573      | 0.384        | 0.166 (0.037)    | -                | 0 (0.000) |     7.20 | bobeksde, draken, hampus, Ro1f, spooke   |
|           41 |     1467 | 2024-10-31 | ECSTATIC          | L   | 0.568      | -            | -                | -                | -         |   -10.21 | bobeksde, draken, hampus, Ro1f, spooke   |
|           40 |     1470 | 2024-10-31 | Metizport         | W   | 0.567      | 0.333        | 0.185 (0.035)    | 0.791 (0.149)    | 0 (0.000) |    14.00 | bobeksde, draken, hampus, Ro1f, spooke   |
|           39 |     1501 | 2024-10-30 | 9 Pandas          | L   | 0.559      | -            | -                | -                | -         |    -7.25 | bobeksde, draken, hampus, Ro1f, spooke   |
|           38 |     1509 | 2024-10-29 | Endpoint          | W   | 0.555      | 0.333        | -                | 0.463 (0.086)    | 0 (0.000) |     4.36 | bobeksde, draken, hampus, Ro1f, spooke   |
|           37 |     1513 | 2024-10-29 | Gaimin Gladiators | L   | 0.554      | -            | -                | -                | -         |   -10.31 | bobeksde, draken, hampus, Ro1f, spooke   |
|           36 |     1518 | 2024-10-29 | Rare Atom         | W   | 0.553      | 0.333        | 0.060 (0.011)    | 0.433 (0.080)    | -         |     7.80 | bobeksde, draken, hampus, Ro1f, spooke   |
|           35 |     1573 | 2024-10-26 | Nexus             | W   | 0.533      | 0.354        | 0.412 (0.078)    | 0.767 (0.145)    | -         |    13.83 | bobeksde, draken, hampus, Ro1f, spooke   |
|           34 |     1644 | 2024-10-21 | UNiTY             | W   | 0.499      | -            | -                | -                | -         |     5.64 | bobeksde, draken, hampus, Ro1f, spooke   |
|           33 |     1658 | 2024-10-20 | moneyF            | L   | 0.493      | -            | -                | -                | -         |   -10.62 | bobeksde, draken, hampus, Ro1f, spooke   |
|           32 |     1782 | 2024-10-16 | WW                | W   | 0.465      | -            | -                | -                | -         |     1.04 | bobeksde, draken, hampus, Ro1f, spooke   |
|           31 |     1817 | 2024-10-13 | Insilio           | L   | 0.447      | -            | -                | -                | -         |   -12.46 | bobeksde, draken, hampus, Ro1f, spooke   |
|           30 |     1966 | 2024-10-07 | Preasy            | W   | 0.405      | -            | -                | -                | -         |     2.18 | bobeksde, draken, hampus, Ro1f, spooke   |
|           29 |     1978 | 2024-10-06 | EYEBALLERS        | W   | 0.400      | -            | -                | -                | -         |     3.12 | bobeksde, draken, hampus, Ro1f, spooke   |
|           28 |     1986 | 2024-10-06 | fightclub         | W   | 0.399      | -            | -                | -                | -         |     0.40 | bobeksde, draken, hampus, Ro1f, spooke   |
|           27 |     2021 | 2024-10-05 | ENCE Academy      | W   | 0.392      | -            | -                | -                | -         |     2.41 | bobeksde, draken, hampus, Ro1f, spooke   |
|           26 |     2054 | 2024-10-04 | NAVI Junior       | W   | 0.386      | 0.333        | 0.202 (0.026)    | 1.000 (0.129)    | -         |     6.81 | bobeksde, draken, hampus, Ro1f, spooke   |
|           25 |     2086 | 2024-10-03 | Partizan          | W   | 0.380      | 0.333        | 0.115 (0.015)    | -                | -         |     8.46 | bobeksde, draken, hampus, Ro1f, spooke   |
|           24 |     2189 | 2024-10-01 | los kogutos       | L   | 0.364      | -            | -                | -                | -         |    -4.82 | bobeksde, draken, hampus, Ro1f, spooke   |
|           23 |     2200 | 2024-09-30 | MOUZ NXT          | W   | 0.360      | -            | -                | -                | -         |     0.38 | bobeksde, draken, hampus, Ro1f, spooke   |
|           22 |     2206 | 2024-09-30 | Gaimin Gladiators | L   | 0.359      | -            | -                | -                | -         |    -7.07 | bobeksde, draken, hampus, Ro1f, spooke   |
|           21 |     2259 | 2024-09-28 | ARCRED            | W   | 0.347      | -            | -                | -                | -         |     2.36 | bobeksde, draken, hampus, Ro1f, spooke   |
|           20 |     2272 | 2024-09-28 | moneyF            | L   | 0.345      | -            | -                | -                | -         |    -7.46 | bobeksde, draken, hampus, Ro1f, spooke   |
|           19 |     2493 | 2024-09-23 | Nemiga            | L   | 0.314      | -            | -                | -                | -         |    -2.47 | bobeksde, draken, hampus, Ro1f, spooke   |
|           18 |     2500 | 2024-09-23 | 9INE              | L   | 0.313      | -            | -                | -                | -         |    -7.01 | bobeksde, draken, hampus, Ro1f, spooke   |
|           17 |     2503 | 2024-09-23 | GameAgents        | W   | 0.312      | -            | -                | -                | -         |     1.80 | bobeksde, draken, hampus, Ro1f, spooke   |
|           16 |     2575 | 2024-09-20 | devils.one        | W   | 0.292      | -            | -                | -                | -         |     1.34 | bobeksde, draken, hampus, Ro1f, spooke   |
|           15 |     2594 | 2024-09-19 | CYBERSHOKE        | W   | 0.288      | -            | -                | -                | -         |     2.29 | bobeksde, draken, hampus, Ro1f, spooke   |
|           14 |     2608 | 2024-09-19 | Alliance          | W   | 0.286      | -            | -                | -                | -         |     3.47 | bobeksde, draken, hampus, Ro1f, spooke   |
|           13 |     2720 | 2024-09-15 | 9 Pandas          | W   | 0.259      | 0.443        | 0.167 (0.019)    | 0.865 (0.099)    | -         |     4.95 | bobeksde, draken, hampus, Ro1f, spooke   |
|           12 |     2729 | 2024-09-15 | K27               | W   | 0.258      | -            | -                | -                | -         |     0.61 | bobeksde, draken, hampus, Ro1f, spooke   |
|           11 |     2794 | 2024-09-13 | Rebels            | L   | 0.245      | -            | -                | -                | -         |    -5.61 | bobeksde, draken, hampus, Ro1f, spooke   |
|           10 |     3495 | 2024-08-23 | Rebels            | L   | 0.105      | -            | -                | -                | -         |    -2.40 | bobeksde, dex, draken, Ro1f, spooke      |
|            9 |     3507 | 2024-08-22 | Zero Tenacity     | W   | 0.100      | -            | -                | -                | -         |     1.57 | bobeksde, dex, draken, Ro1f, spooke      |
|            8 |     3565 | 2024-08-21 | ARCRED            | L   | 0.093      | -            | -                | -                | -         |    -2.29 | bobeksde, dex, draken, Ro1f, spooke      |
|            7 |     3604 | 2024-08-21 | Cloud9            | L   | 0.091      | -            | -                | -                | -         |    -1.53 | bobeksde, dex, draken, Ro1f, spooke      |
|            6 |     3712 | 2024-08-17 | ECSTATIC          | L   | 0.065      | -            | -                | -                | -         |    -1.25 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            5 |     3815 | 2024-08-13 | kONO              | L   | 0.039      | -            | -                | -                | -         |    -0.82 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            4 |     3867 | 2024-08-12 | TSM               | L   | 0.032      | -            | -                | -                | -         |    -0.75 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            3 |     3908 | 2024-08-10 | ex-Enterprise     | W   | 0.019      | -            | -                | -                | -         |     0.15 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            2 |     3961 | 2024-08-08 | TSM               | W   | 0.006      | -            | -                | -                | -         |     0.05 | bobeksde, chawzyyy, draken, Ro1f, spooke |
|            1 |     3995 | 2024-08-07 | Metizport         | L   | 0.000      | -            | -                | -                | -         |     0.00 | bobeksde, chawzyyy, draken, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,932.32)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.726 | $1,000.00      | $725.89         |
| 2024-11-23 |      0.720 | $11,343.00     | $8,171.39       |
| 2024-11-09 |      0.627 | $4,848.00      | $3,039.20       |
| 2024-10-31 |      0.568 | $2,000.00      | $1,135.48       |
| 2024-10-06 |      0.400 | $5,000.00      | $1,999.52       |
| 2024-10-05 |      0.392 | $5,000.00      | $1,959.43       |
| 2024-09-24 |      0.319 | $8,000.00      | $2,551.77       |
| 2024-09-14 |      0.254 | $1,000.00      | $253.59         |
| 2024-08-12 |      0.032 | $3,000.00      | $96.07          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
