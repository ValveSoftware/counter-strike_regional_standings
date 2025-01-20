### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, MATYS<br />
Global Rank: [46](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1132.6<br />
<br />
Final Rank Value (1132.6) = Starting Rank Value (1145.4) + Head To Head Adjustments (-12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.576[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.477[<sup>2</sup>](#table1)

The average of these factors is 0.376<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1145.4
- 400 + ( ( 0.376 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1145.4


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
|           40 |       28 | 2025-01-14 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.34 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           39 |      499 | 2024-12-01 | Rare Atom         | L   | 0.889      | -            | -                | -                | -         |   -19.75 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           38 |      531 | 2024-11-30 | Cloud9            | L   | 0.883      | -            | -                | -                | -         |   -15.19 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           37 |      534 | 2024-11-29 | Wildcard          | L   | 0.882      | -            | -                | -                | -         |    -7.75 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           36 |      725 | 2024-11-20 | ECLOT             | W   | 0.816      | 0.143        | 0.286 (0.033)    | 1.000 (0.117)    | 1 (0.816) |    13.73 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           35 |      735 | 2024-11-19 | FaZe              | L   | 0.809      | -            | -                | -                | -         |    -0.59 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           34 |      749 | 2024-11-17 | BetBoom           | W   | 0.802      | 0.143        | 0.112 (0.013)    | 0.425 (0.049)    | 1 (0.802) |    11.76 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           33 |      767 | 2024-11-17 | Rebels            | W   | 0.797      | 0.143        | -                | 0.336 (0.038)    | 1 (0.797) |     4.11 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           32 |      779 | 2024-11-16 | Natus Vincere     | L   | 0.795      | -            | -                | -                | -         |    -0.72 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           31 |     1269 | 2024-10-26 | Falcons           | L   | 0.651      | -            | -                | -                | -         |    -0.75 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           30 |     1296 | 2024-10-25 | Cloud9            | W   | 0.644      | 0.477        | 0.076 (0.023)    | 0.343 (0.105)    | 0 (0.000) |     8.44 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           29 |     1323 | 2024-10-22 | The MongolZ       | L   | 0.626      | -            | -                | -                | -         |    -0.46 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           28 |     1326 | 2024-10-22 | 9z                | W   | 0.624      | 0.477        | 0.059 (0.018)    | 0.190 (0.056)    | 0 (0.000) |     6.15 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           27 |     1391 | 2024-10-19 | Nemiga            | L   | 0.603      | -            | -                | -                | -         |    -6.65 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           26 |     1432 | 2024-10-17 | PARIVISION        | W   | 0.592      | 0.624        | 0.024 (0.009)    | 0.249 (0.092)    | 1 (0.592) |     4.38 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           25 |     1465 | 2024-10-16 | UNPAID            | W   | 0.586      | 0.624        | 0.141 (0.052)    | 0.209 (0.076)    | 1 (0.586) |     5.75 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           24 |     1558 | 2024-10-10 | Metizport         | L   | 0.544      | -            | -                | -                | -         |    -4.81 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           23 |     2153 | 2024-09-24 | Into the Breach   | L   | 0.438      | -            | -                | -                | -         |   -10.63 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           22 |     2452 | 2024-09-14 | MOUZ              | L   | 0.370      | -            | -                | -                | -         |    -0.32 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           21 |     2504 | 2024-09-12 | BIG               | L   | 0.359      | -            | -                | -                | -         |    -2.46 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           20 |     2531 | 2024-09-11 | M80               | L   | 0.353      | -            | -                | -                | -         |    -5.18 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           19 |     2575 | 2024-09-10 | Astralis          | W   | 0.344      | 0.889        | 0.328 (0.100)    | 0.231 (0.071)    | 1 (0.344) |     7.73 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           18 |     2901 | 2024-08-29 | ECSTATIC          | L   | 0.264      | -            | -                | -                | -         |    -6.18 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           17 |     2995 | 2024-08-27 | Falcons           | L   | 0.252      | -            | -                | -                | -         |    -0.24 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           16 |     3007 | 2024-08-27 | Cloud9            | W   | 0.251      | 0.143        | -                | 0.343 (0.012)    | 0 (0.000) |     3.09 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           15 |     3068 | 2024-08-26 | OG                | W   | 0.245      | 0.143        | 0.171 (0.006)    | -                | 0 (0.000) |     1.94 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           14 |     3080 | 2024-08-26 | 3DMAX             | L   | 0.245      | -            | -                | -                | -         |    -1.43 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           13 |     3432 | 2024-08-15 | QUAZAR            | W   | 0.173      | -            | -                | -                | -         |     0.32 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           12 |     3438 | 2024-08-15 | Gaimin Gladiators | W   | 0.172      | 0.143        | -                | 0.873 (0.021)    | -         |     1.32 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           11 |     3448 | 2024-08-15 | Rebels            | W   | 0.171      | -            | -                | -                | -         |     0.74 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           10 |     3829 | 2024-08-03 | 3DMAX             | L   | 0.093      | -            | -                | -                | -         |    -0.51 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            9 |     3880 | 2024-08-02 | Nemiga            | W   | 0.084      | 0.143        | 0.508 (0.006)    | -                | -         |     1.78 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            8 |     3912 | 2024-08-01 | G2 Ares           | W   | 0.078      | -            | -                | -                | -         |     0.09 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            7 |     3975 | 2024-07-31 | Johnny Speeds     | L   | 0.070      | -            | -                | -                | -         |    -1.33 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            6 |     4066 | 2024-07-28 | HEROIC            | L   | 0.052      | -            | -                | -                | -         |    -0.71 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            5 |     4075 | 2024-07-28 | SAW               | W   | 0.051      | 0.435        | 0.259 (0.006)    | -                | -         |     1.20 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            4 |     4094 | 2024-07-27 | MOUZ NXT          | W   | 0.045      | -            | -                | -                | -         |     0.10 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            3 |     4123 | 2024-07-26 | Sampi             | W   | 0.037      | -            | -                | -                | -         |     0.35 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            2 |     4257 | 2024-07-22 | Passion UA        | W   | 0.012      | -            | -                | -                | -         |     0.21 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            1 |     4289 | 2024-07-21 | MOUZ NXT          | W   | 0.004      | -            | -                | -                | -         |     0.01 | afro, blameF, bodyy, KRIMZ, MATYS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,781.60)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.903 | $10,000.00     | $9,033.17       |
| 2024-10-26 |      0.653 | $20,000.00     | $13,062.87      |
| 2024-10-19 |      0.606 | $25,000.00     | $15,149.97      |
| 2024-09-26 |      0.452 | $1,000.00      | $451.77         |
| 2024-09-22 |      0.426 | $7,000.00      | $2,980.86       |
| 2024-07-28 |      0.052 | $10,000.00     | $521.44         |
| 2024-07-22 |      0.012 | $50,000.00     | $581.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
