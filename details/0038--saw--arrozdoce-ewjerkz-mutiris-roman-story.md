### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [38](../standings_global.md)<br />
Regional Rank: [27]( ../standings_europe.md)<br />
Final Rank Value:  1230.7<br />
<br />
Final Rank Value (1230.7) = Starting Rank Value (1265.4) + Head To Head Adjustments (-34.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.546[<sup>1</sup>](#table2)
- Bounty Collected: 0.551[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.339[<sup>2</sup>](#table1)

The average of these factors is 0.410<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1265.4
- 400 + ( ( 0.410 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1265.4


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
|           54 |      274 | 2024-06-13 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -0.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           53 |      300 | 2024-06-12 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -0.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           52 |      340 | 2024-06-10 | 3DMAX             | L   | 0.992      | -            | -                | -                | -         |   -17.86 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |      349 | 2024-06-10 | RUSH B            | W   | 0.992      | -            | -                | -                | 0 (0.000) |     5.83 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |      352 | 2024-06-10 | Aurora            | W   | 0.991      | 0.143        | 0.518 (0.073)    | 0.853 (0.121)    | 0 (0.000) |    21.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |      388 | 2024-06-09 | SINNERS           | L   | 0.986      | -            | -                | -                | -         |   -22.31 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |      395 | 2024-06-09 | Monte             | W   | 0.985      | 0.143        | 0.188 (0.026)    | 0.668 (0.094)    | 0 (0.000) |    13.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |      400 | 2024-06-09 | 9 Pandas          | L   | 0.985      | -            | -                | -                | -         |   -18.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |      408 | 2024-06-09 | PARIVISION        | W   | 0.985      | -            | -                | -                | -         |     7.44 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |      617 | 2024-06-05 | Sangal            | L   | 0.961      | -            | -                | -                | -         |   -18.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |      672 | 2024-06-04 | RUSH B            | L   | 0.953      | -            | -                | -                | -         |   -26.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |      721 | 2024-06-02 | Zero Tenacity     | L   | 0.940      | -            | -                | -                | -         |   -20.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |      788 | 2024-05-31 | Sangal            | W   | 0.926      | 0.143        | 0.231 (0.031)    | 0.853 (0.113)    | -         |     8.62 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |      794 | 2024-05-31 | fnatic            | L   | 0.926      | -            | -                | -                | -         |    -8.15 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |      797 | 2024-05-31 | FAVBET            | W   | 0.925      | -            | -                | -                | -         |     1.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1169 | 2024-05-17 | Aurora            | L   | 0.832      | -            | -                | -                | -         |    -5.69 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     1190 | 2024-05-16 | Eternal Fire      | L   | 0.827      | -            | -                | -                | -         |    -2.31 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     1206 | 2024-05-16 | Aurora            | W   | 0.825      | 0.769        | 0.518 (0.328)    | 0.853 (0.541)    | -         |    21.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1650 | 2024-04-28 | Virtus.pro        | L   | 0.706      | -            | -                | -                | -         |    -1.81 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1665 | 2024-04-27 | Eternal Fire      | W   | 0.700      | 0.889        | 1.000 (0.622)    | 0.430 (0.268)    | 1 (0.700) |    20.50 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1697 | 2024-04-26 | Imperial          | W   | 0.693      | 0.889        | 0.390 (0.240)    | 0.646 (0.398)    | 1 (0.693) |    16.91 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1746 | 2024-04-24 | Virtus.pro        | L   | 0.679      | -            | -                | -                | -         |    -1.46 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1768 | 2024-04-23 | 3DMAX             | L   | 0.672      | -            | -                | -                | -         |   -11.30 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     2001 | 2024-04-16 | Slovakia          | L   | 0.625      | -            | -                | -                | -         |   -16.68 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     2119 | 2024-04-10 | 9 Pandas          | W   | 0.587      | 0.500        | 0.125 (0.037)    | 0.625 (0.184)    | -         |     4.81 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2171 | 2024-04-09 | 3DMAX             | L   | 0.581      | -            | -                | -                | -         |   -10.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2281 | 2024-04-05 | PGE Turow         | W   | 0.551      | -            | -                | -                | -         |     0.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2315 | 2024-04-04 | Betera            | W   | 0.547      | -            | -                | -                | -         |     0.89 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2358 | 2024-04-03 | PERA              | W   | 0.540      | 0.500        | -                | 0.433 (0.117)    | -         |     2.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2603 | 2024-03-20 | FURIA             | L   | 0.447      | -            | -                | -                | -         |    -1.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2620 | 2024-03-19 | paiN              | L   | 0.440      | -            | -                | -                | -         |    -2.33 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2628 | 2024-03-18 | Cloud9            | L   | 0.433      | -            | -                | -                | -         |    -7.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2642 | 2024-03-17 | GamerLegion       | W   | 0.428      | -            | -                | -                | 1 (0.428) |     2.10 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2659 | 2024-03-17 | KOI               | W   | 0.426      | -            | -                | -                | 1 (0.426) |     4.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     2747 | 2024-03-13 | System5           | W   | 0.401      | -            | -                | -                | -         |     0.47 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     2831 | 2024-03-10 | OG                | W   | 0.380      | 0.535        | 0.215 (0.044)    | -                | -         |     3.91 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     2872 | 2024-03-08 | Cloud9            | W   | 0.368      | -            | -                | -                | -         |     5.24 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     2906 | 2024-03-07 | Liquid            | W   | 0.360      | 0.535        | 0.494 (0.095)    | 0.546 (0.105)    | -         |     9.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     2962 | 2024-03-05 | Monte             | W   | 0.347      | 0.500        | 0.188 (0.033)    | 0.668 (0.116)    | -         |     5.52 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     3126 | 2024-02-26 | RUSH B            | W   | 0.295      | -            | -                | -                | -         |     0.87 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3340 | 2024-02-17 | fnatic            | W   | 0.233      | -            | -                | -                | 1 (0.233) |     6.40 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3364 | 2024-02-16 | Enterprise        | W   | 0.227      | -            | -                | -                | 1 (0.227) |     1.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3396 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.219      | -            | -                | -                | 1 (0.219) |     0.28 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3434 | 2024-02-14 | 9 Pandas          | L   | 0.213      | -            | -                | -                | -         |    -4.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3445 | 2024-02-14 | Virtus.pro        | L   | 0.212      | -            | -                | -                | -         |    -0.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3570 | 2024-02-04 | Rhyno             | W   | 0.146      | -            | -                | -                | -         |     1.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3600 | 2024-02-03 | KOI               | W   | 0.140      | -            | -                | -                | -         |     1.74 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     3655 | 2024-02-01 | AL QATRAO         | W   | 0.127      | -            | -                | -                | -         |     0.20 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     3656 | 2024-02-01 | Agency            | W   | 0.127      | -            | -                | -                | -         |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     3661 | 2024-02-01 | AL QATRAO         | L   | 0.126      | -            | -                | -                | -         |    -3.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     3900 | 2024-01-20 | 9 Pandas          | W   | 0.046      | -            | -                | -                | -         |     0.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     3957 | 2024-01-19 | Zero Tenacity     | W   | 0.039      | -            | -                | -                | -         |     0.37 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     4007 | 2024-01-18 | Virtus.pro        | L   | 0.034      | -            | -                | -                | -         |    -0.06 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4014 | 2024-01-18 | fnatic            | W   | 0.033      | -            | -                | -                | -         |     0.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,104.45)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      0.987 | $6,500.00      | $6,416.90       |
| 2024-05-12 |      0.800 | $12,000.00     | $9,598.27       |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |
| 2024-03-10 |      0.381 | $20,000.00     | $7,619.84       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
