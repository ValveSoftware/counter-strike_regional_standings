### Roster Details<br />
Team Name: SAW<br />
Roster: arrozdoce, ewjerkz, MUTiRiS, roman, story<br />
Global Rank: [33](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [24]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1198.0<br />
<br />
Final Rank Value (1198.0) = Starting Rank Value (1182.9) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.508[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.379<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1182.9
- 400 + ( ( 0.379 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1182.9


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
|           55 |       16 | 2024-07-31 | brazylijski luz   | W   | 1.000      | 0.500        | -                | 0.264 (0.132)    | 0 (0.000) |     4.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           54 |      128 | 2024-07-28 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.70 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           53 |      143 | 2024-07-27 | Passion UA        | W   | 1.000      | 0.435        | 0.172 (0.075)    | 1.000 (0.435)    | 0 (0.000) |    12.16 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           52 |      218 | 2024-07-25 | BC.Game           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.88 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           51 |      244 | 2024-07-24 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -22.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           50 |      406 | 2024-07-19 | RUSH B            | W   | 1.000      | 0.500        | -                | 0.308 (0.154)    | -         |     4.87 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           49 |      515 | 2024-07-17 | Sangal            | W   | 1.000      | 0.500        | 0.221 (0.111)    | 0.824 (0.412)    | -         |    16.98 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           48 |      628 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.721 (0.360)    | -         |     7.14 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           47 |      968 | 2024-06-13 | Astralis          | L   | 0.878      | -            | -                | -                | -         |    -1.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           46 |      994 | 2024-06-12 | FaZe              | L   | 0.871      | -            | -                | -                | -         |    -1.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           45 |     1034 | 2024-06-10 | 3DMAX             | L   | 0.858      | -            | -                | -                | -         |    -5.73 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           44 |     1043 | 2024-06-10 | RUSH B            | W   | 0.858      | -            | -                | -                | -         |     5.48 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           43 |     1046 | 2024-06-10 | Aurora            | W   | 0.857      | 0.143        | 0.433 (0.053)    | 0.800 (0.098)    | -         |    21.41 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           42 |     1082 | 2024-06-09 | SINNERS           | L   | 0.852      | -            | -                | -                | -         |   -18.71 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           41 |     1089 | 2024-06-09 | Monte             | W   | 0.851      | -            | -                | -                | -         |     7.42 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           40 |     1094 | 2024-06-09 | 9 Pandas          | L   | 0.851      | -            | -                | -                | -         |   -16.82 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           39 |     1102 | 2024-06-09 | PARIVISION        | W   | 0.851      | -            | -                | -                | -         |     9.47 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           38 |     1311 | 2024-06-05 | Sangal            | L   | 0.826      | -            | -                | -                | -         |   -15.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           37 |     1366 | 2024-06-04 | RUSH B            | L   | 0.819      | -            | -                | -                | -         |   -22.61 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           36 |     1415 | 2024-06-02 | Zero Tenacity     | L   | 0.806      | -            | -                | -                | -         |   -16.24 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           35 |     1482 | 2024-05-31 | Sangal            | W   | 0.792      | 0.143        | 0.221 (0.025)    | -                | -         |     8.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           34 |     1488 | 2024-05-31 | fnatic            | L   | 0.792      | -            | -                | -                | -         |    -4.76 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           33 |     1491 | 2024-05-31 | FAVBET            | W   | 0.791      | -            | -                | -                | -         |     2.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           32 |     1863 | 2024-05-17 | Aurora            | L   | 0.698      | -            | -                | -                | -         |    -3.01 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           31 |     1884 | 2024-05-16 | Eternal Fire      | L   | 0.693      | -            | -                | -                | -         |    -1.49 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           30 |     1900 | 2024-05-16 | Aurora            | W   | 0.691      | 0.769        | 0.433 (0.230)    | 0.800 (0.425)    | -         |    19.25 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           29 |     2344 | 2024-04-28 | Virtus.pro        | L   | 0.572      | -            | -                | -                | -         |    -1.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           28 |     2359 | 2024-04-27 | Eternal Fire      | W   | 0.566      | 0.889        | 0.759 (0.382)    | 0.462 (0.232)    | 1 (0.566) |    16.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           27 |     2391 | 2024-04-26 | Imperial          | W   | 0.559      | 0.889        | 0.245 (0.122)    | 0.685 (0.340)    | 1 (0.559) |    11.85 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           26 |     2440 | 2024-04-24 | Virtus.pro        | L   | 0.545      | -            | -                | -                | -         |    -0.92 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           25 |     2462 | 2024-04-23 | 3DMAX             | L   | 0.538      | -            | -                | -                | -         |    -1.31 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           24 |     2695 | 2024-04-16 | Sampi             | L   | 0.491      | -            | -                | -                | -         |   -12.75 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           23 |     2813 | 2024-04-10 | 9 Pandas          | W   | 0.453      | 0.500        | -                | 0.579 (0.131)    | -         |     3.63 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           22 |     2865 | 2024-04-09 | 3DMAX             | L   | 0.447      | -            | -                | -                | -         |    -0.94 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           21 |     2975 | 2024-04-05 | PGE Turow         | W   | 0.417      | -            | -                | -                | -         |     0.64 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           20 |     3009 | 2024-04-04 | Betera            | W   | 0.413      | -            | -                | -                | -         |     0.84 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           19 |     3052 | 2024-04-03 | PERA              | W   | 0.406      | -            | -                | -                | -         |     2.27 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           18 |     3297 | 2024-03-20 | FURIA             | L   | 0.313      | -            | -                | -                | -         |    -0.46 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           17 |     3314 | 2024-03-19 | paiN              | L   | 0.305      | -            | -                | -                | -         |    -2.08 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           16 |     3322 | 2024-03-18 | Cloud9            | L   | 0.299      | -            | -                | -                | -         |    -6.33 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           15 |     3336 | 2024-03-17 | GamerLegion       | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.95 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           14 |     3353 | 2024-03-17 | KOI               | W   | 0.292      | -            | -                | -                | 1 (0.292) |     3.41 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           13 |     3441 | 2024-03-13 | System5           | W   | 0.267      | -            | -                | -                | -         |     0.45 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           12 |     3525 | 2024-03-10 | OG                | W   | 0.246      | 0.535        | 0.144 (0.019)    | -                | -         |     2.13 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           11 |     3566 | 2024-03-08 | Cloud9            | W   | 0.233      | -            | -                | -                | -         |     2.43 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|           10 |     3600 | 2024-03-07 | Liquid            | W   | 0.226      | 0.535        | 0.323 (0.039)    | -                | -         |     5.78 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            9 |     3656 | 2024-03-05 | Monte             | W   | 0.213      | -            | -                | -                | -         |     1.88 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            8 |     3820 | 2024-02-26 | RUSH B            | W   | 0.160      | -            | -                | -                | -         |     0.66 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            7 |     4034 | 2024-02-17 | fnatic            | W   | 0.099      | -            | -                | -                | 1 (0.099) |     2.81 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            6 |     4058 | 2024-02-16 | Enterprise        | W   | 0.093      | -            | -                | -                | 1 (0.093) |     0.57 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            5 |     4090 | 2024-02-15 | Ninjas in Pyjamas | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.03 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            4 |     4128 | 2024-02-14 | 9 Pandas          | L   | 0.079      | -            | -                | -                | -         |    -1.80 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            3 |     4139 | 2024-02-14 | Virtus.pro        | L   | 0.077      | -            | -                | -                | -         |    -0.11 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            2 |     4264 | 2024-02-04 | Rhyno             | W   | 0.012      | -            | -                | -                | -         |     0.09 | arrozdoce, ewjerkz, MUTiRiS, roman, story |
|            1 |     4294 | 2024-02-03 | KOI               | W   | 0.006      | -            | -                | -                | -         |     0.07 | arrozdoce, ewjerkz, MUTiRiS, roman, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,590.64)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-16 |      0.899 | $10,000.00     | $8,991.16       |
| 2024-06-09 |      0.853 | $6,500.00      | $5,545.10       |
| 2024-05-12 |      0.666 | $12,000.00     | $7,988.79       |
| 2024-03-20 |      0.313 | $10,000.00     | $3,128.21       |
| 2024-03-10 |      0.247 | $20,000.00     | $4,937.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
