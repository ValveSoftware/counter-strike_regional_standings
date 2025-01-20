### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, MATYS<br />
Global Rank: [46](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1130.6<br />
<br />
Final Rank Value (1130.6) = Starting Rank Value (1144.0) + Head To Head Adjustments (-13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.574[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.476[<sup>2</sup>](#table1)

The average of these factors is 0.375<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1144.0
- 400 + ( ( 0.375 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1144.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       11 | 2025-01-14 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.34 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           38 |      476 | 2024-12-01 | Rare Atom         | L   | 0.883      | -            | -                | -                | -         |   -19.55 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           37 |      508 | 2024-11-30 | Cloud9            | L   | 0.877      | -            | -                | -                | -         |   -15.38 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           36 |      511 | 2024-11-29 | Wildcard          | L   | 0.876      | -            | -                | -                | -         |    -7.64 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           35 |      702 | 2024-11-20 | ECLOT             | W   | 0.810      | 0.143        | 0.286 (0.033)    | 1.000 (0.116)    | 1 (0.810) |    13.69 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           34 |      712 | 2024-11-19 | FaZe              | L   | 0.803      | -            | -                | -                | -         |    -0.57 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           33 |      726 | 2024-11-17 | BetBoom           | W   | 0.796      | 0.143        | 0.112 (0.013)    | 0.474 (0.054)    | 1 (0.796) |    11.84 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           32 |      744 | 2024-11-17 | Rebels            | W   | 0.790      | 0.143        | -                | 0.302 (0.034)    | 1 (0.790) |     4.12 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           31 |      756 | 2024-11-16 | Natus Vincere     | L   | 0.789      | -            | -                | -                | -         |    -0.74 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           30 |     1246 | 2024-10-26 | Falcons           | L   | 0.645      | -            | -                | -                | -         |    -0.73 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           29 |     1273 | 2024-10-25 | Cloud9            | W   | 0.637      | 0.477        | 0.075 (0.023)    | 0.341 (0.104)    | 0 (0.000) |     8.14 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           28 |     1300 | 2024-10-22 | The MongolZ       | L   | 0.620      | -            | -                | -                | -         |    -0.45 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           27 |     1303 | 2024-10-22 | 9z                | W   | 0.618      | 0.477        | 0.058 (0.017)    | 0.189 (0.056)    | 0 (0.000) |     6.07 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           26 |     1368 | 2024-10-19 | Nemiga            | L   | 0.597      | -            | -                | -                | -         |    -6.58 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           25 |     1409 | 2024-10-17 | PARIVISION        | W   | 0.586      | 0.624        | 0.024 (0.009)    | 0.246 (0.090)    | 1 (0.586) |     4.22 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           24 |     1442 | 2024-10-16 | UNPAID            | W   | 0.579      | 0.624        | 0.141 (0.051)    | 0.207 (0.075)    | 1 (0.579) |     5.58 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           23 |     1535 | 2024-10-10 | Metizport         | L   | 0.538      | -            | -                | -                | -         |    -4.72 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           22 |     2130 | 2024-09-24 | Into the Breach   | L   | 0.432      | -            | -                | -                | -         |   -10.54 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           21 |     2429 | 2024-09-14 | MOUZ              | L   | 0.364      | -            | -                | -                | -         |    -0.30 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           20 |     2481 | 2024-09-12 | BIG               | L   | 0.353      | -            | -                | -                | -         |    -2.45 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           19 |     2508 | 2024-09-11 | M80               | L   | 0.347      | -            | -                | -                | -         |    -5.10 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           18 |     2552 | 2024-09-10 | Astralis          | W   | 0.338      | 0.889        | 0.327 (0.098)    | 0.231 (0.070)    | 1 (0.338) |     7.58 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           17 |     2878 | 2024-08-29 | ECSTATIC          | L   | 0.258      | -            | -                | -                | -         |    -6.03 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           16 |     2972 | 2024-08-27 | Falcons           | L   | 0.246      | -            | -                | -                | -         |    -0.23 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           15 |     2984 | 2024-08-27 | Cloud9            | W   | 0.245      | 0.143        | -                | 0.341 (0.012)    | 0 (0.000) |     2.98 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           14 |     3045 | 2024-08-26 | OG                | W   | 0.239      | 0.143        | 0.171 (0.006)    | -                | 0 (0.000) |     1.90 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           13 |     3057 | 2024-08-26 | 3DMAX             | L   | 0.239      | -            | -                | -                | -         |    -1.40 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           12 |     3409 | 2024-08-15 | QUAZAR            | W   | 0.167      | -            | -                | -                | -         |     0.31 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           11 |     3415 | 2024-08-15 | Gaimin Gladiators | W   | 0.166      | 0.143        | -                | 0.873 (0.021)    | -         |     1.27 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           10 |     3425 | 2024-08-15 | Rebels            | W   | 0.165      | -            | -                | -                | -         |     0.71 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            9 |     3806 | 2024-08-03 | 3DMAX             | L   | 0.087      | -            | -                | -                | -         |    -0.48 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            8 |     3857 | 2024-08-02 | Nemiga            | W   | 0.078      | 0.143        | 0.507 (0.006)    | -                | -         |     1.65 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            7 |     3889 | 2024-08-01 | G2 Ares           | W   | 0.072      | -            | -                | -                | -         |     0.08 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            6 |     3952 | 2024-07-31 | Johnny Speeds     | L   | 0.064      | -            | -                | -                | -         |    -1.21 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            5 |     4043 | 2024-07-28 | HEROIC            | L   | 0.046      | -            | -                | -                | -         |    -0.63 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            4 |     4052 | 2024-07-28 | SAW               | W   | 0.045      | 0.435        | 0.257 (0.005)    | -                | -         |     1.05 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            3 |     4071 | 2024-07-27 | MOUZ NXT          | W   | 0.039      | -            | -                | -                | -         |     0.09 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            2 |     4100 | 2024-07-26 | Sampi             | W   | 0.031      | -            | -                | -                | -         |     0.30 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            1 |     4234 | 2024-07-22 | Passion UA        | W   | 0.006      | -            | -                | -                | -         |     0.10 | afro, blameF, bodyy, KRIMZ, MATYS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,030.48)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.897 | $10,000.00     | $8,972.10       |
| 2024-10-26 |      0.647 | $20,000.00     | $12,940.74      |
| 2024-10-19 |      0.600 | $25,000.00     | $14,997.31      |
| 2024-09-26 |      0.446 | $1,000.00      | $445.66         |
| 2024-09-22 |      0.420 | $7,000.00      | $2,938.11       |
| 2024-07-28 |      0.046 | $10,000.00     | $460.37         |
| 2024-07-22 |      0.006 | $50,000.00     | $276.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
