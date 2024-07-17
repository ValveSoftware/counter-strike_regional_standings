### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [35](../standings_global.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
Final Rank Value:  1225.4<br />
<br />
Final Rank Value (1225.4) = Starting Rank Value (1261.5) + Head To Head Adjustments (-36.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.546[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.209[<sup>2</sup>](#table1)
- LAN Wins: 0.307[<sup>2</sup>](#table1)

The average of these factors is 0.401<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1261.5
- 400 + ( ( 0.401 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1261.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       98 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.500        | 0.058 (0.029)    | 0.744 (0.372)    | 0 (0.000) |     6.86 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |      438 | 2024-06-13 | Astralis          | L   | 0.972      | -            | -                | -                | -         |    -0.93 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |      464 | 2024-06-12 | FaZe              | L   | 0.966      | -            | -                | -                | -         |    -0.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |      504 | 2024-06-10 | 3DMAX             | L   | 0.953      | -            | -                | -                | -         |   -17.17 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |      513 | 2024-06-10 | RUSH B            | W   | 0.952      | -            | -                | -                | 0 (0.000) |     5.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |      516 | 2024-06-10 | Aurora            | W   | 0.952      | 0.143        | 0.514 (0.070)    | 0.813 (0.111)    | 0 (0.000) |    20.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |      552 | 2024-06-09 | SINNERS           | L   | 0.946      | -            | -                | -                | -         |   -21.05 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |      559 | 2024-06-09 | Monte             | W   | 0.946      | -            | -                | -                | -         |     6.64 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |      564 | 2024-06-09 | 9 Pandas          | L   | 0.945      | -            | -                | -                | -         |   -18.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      572 | 2024-06-09 | PARIVISION        | W   | 0.945      | 0.143        | -                | 0.424 (0.057)    | -         |     6.88 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      781 | 2024-06-05 | Sangal            | L   | 0.921      | -            | -                | -                | -         |   -18.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |      836 | 2024-06-04 | RUSH B            | L   | 0.914      | -            | -                | -                | -         |   -25.86 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |      885 | 2024-06-02 | Zero Tenacity     | L   | 0.900      | -            | -                | -                | -         |   -19.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |      952 | 2024-05-31 | Sangal            | W   | 0.887      | 0.143        | 0.232 (0.029)    | 0.893 (0.113)    | -         |     8.23 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |      958 | 2024-05-31 | fnatic            | L   | 0.886      | -            | -                | -                | -         |    -7.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |      961 | 2024-05-31 | FAVBET            | W   | 0.886      | -            | -                | -                | -         |     1.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1333 | 2024-05-17 | Aurora            | L   | 0.792      | -            | -                | -                | -         |    -5.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1354 | 2024-05-16 | Eternal Fire      | L   | 0.788      | -            | -                | -                | -         |    -2.27 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1370 | 2024-05-16 | Aurora            | W   | 0.785      | 0.769        | 0.514 (0.310)    | 0.813 (0.491)    | -         |    20.34 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1814 | 2024-04-28 | Virtus.pro        | L   | 0.667      | -            | -                | -                | -         |    -1.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1829 | 2024-04-27 | Eternal Fire      | W   | 0.661      | 0.889        | 1.000 (0.587)    | 0.401 (0.236)    | 1 (0.661) |    19.28 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     1861 | 2024-04-26 | Imperial          | W   | 0.653      | 0.889        | 0.386 (0.224)    | 0.607 (0.353)    | 1 (0.653) |    15.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     1910 | 2024-04-24 | Virtus.pro        | L   | 0.640      | -            | -                | -                | -         |    -1.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     1932 | 2024-04-23 | 3DMAX             | L   | 0.633      | -            | -                | -                | -         |   -10.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2165 | 2024-04-16 | Sampi             | L   | 0.586      | -            | -                | -                | -         |   -15.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2283 | 2024-04-10 | 9 Pandas          | W   | 0.548      | 0.500        | 0.126 (0.034)    | 0.591 (0.162)    | -         |     4.58 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2335 | 2024-04-09 | 3DMAX             | L   | 0.541      | -            | -                | -                | -         |    -9.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2445 | 2024-04-05 | PGE Turow         | W   | 0.512      | -            | -                | -                | -         |     0.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2479 | 2024-04-04 | Betera            | W   | 0.507      | -            | -                | -                | -         |     0.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2522 | 2024-04-03 | PERA              | W   | 0.500      | 0.500        | -                | 0.454 (0.113)    | -         |     2.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2767 | 2024-03-20 | FURIA             | L   | 0.407      | -            | -                | -                | -         |    -1.55 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2784 | 2024-03-19 | paiN              | L   | 0.400      | -            | -                | -                | -         |    -2.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     2792 | 2024-03-18 | Cloud9            | L   | 0.394      | -            | -                | -                | -         |    -7.38 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     2806 | 2024-03-17 | GamerLegion       | W   | 0.388      | -            | -                | -                | 1 (0.388) |     1.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     2823 | 2024-03-17 | KOI               | W   | 0.386      | -            | -                | -                | 1 (0.386) |     4.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     2911 | 2024-03-13 | System5           | W   | 0.361      | -            | -                | -                | -         |     0.46 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     2995 | 2024-03-10 | OG                | W   | 0.341      | 0.535        | 0.210 (0.038)    | -                | -         |     3.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     3036 | 2024-03-08 | Cloud9            | W   | 0.328      | 0.535        | 0.119 (0.021)    | -                | -         |     4.25 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3070 | 2024-03-07 | Liquid            | W   | 0.320      | 0.535        | 0.494 (0.085)    | 0.510 (0.087)    | -         |     8.47 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3126 | 2024-03-05 | Monte             | W   | 0.308      | -            | -                | -                | -         |     3.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3290 | 2024-02-26 | RUSH B            | W   | 0.255      | -            | -                | -                | -         |     0.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3504 | 2024-02-17 | fnatic            | W   | 0.193      | -            | -                | -                | 1 (0.193) |     5.32 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3528 | 2024-02-16 | Enterprise        | W   | 0.187      | -            | -                | -                | 1 (0.187) |     1.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3560 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.180      | -            | -                | -                | 1 (0.180) |     0.21 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3598 | 2024-02-14 | 9 Pandas          | L   | 0.173      | -            | -                | -                | -         |    -3.84 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3609 | 2024-02-14 | Virtus.pro        | L   | 0.172      | -            | -                | -                | -         |    -0.35 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3734 | 2024-02-04 | Rhyno             | W   | 0.107      | -            | -                | -                | -         |     0.77 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     3764 | 2024-02-03 | KOI               | W   | 0.100      | -            | -                | -                | -         |     1.30 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     3819 | 2024-02-01 | AL QATRAO         | W   | 0.087      | -            | -                | -                | -         |     0.14 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     3820 | 2024-02-01 | Agency            | W   | 0.087      | -            | -                | -                | -         |     0.02 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     3825 | 2024-02-01 | AL QATRAO         | L   | 0.086      | -            | -                | -                | -         |    -2.59 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4064 | 2024-01-20 | 9 Pandas          | W   | 0.007      | -            | -                | -                | -         |     0.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,119.64)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $10,000.00     | $9,936.29       |
| 2024-06-09 |      0.948 | $6,500.00      | $6,159.44       |
| 2024-05-12 |      0.760 | $12,000.00     | $9,122.94       |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |
| 2024-03-10 |      0.341 | $20,000.00     | $6,827.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
