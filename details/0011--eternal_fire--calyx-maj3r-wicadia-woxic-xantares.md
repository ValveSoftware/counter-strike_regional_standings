### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, MAJ3R, Wicadia, woxic, XANTARES<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1603.0<br />
<br />
Final Rank Value (1603.0) = Starting Rank Value (1657.0) + Head To Head Adjustments (-54.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.926[<sup>1</sup>](#table2)
- Bounty Collected: 0.585[<sup>2</sup>](#table1)
- Opponent Network: 0.277[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.621<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1657.0
- 400 + ( ( 0.621 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1657.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       10 | 2024-07-24 | DMS               | W   | 1.000      | 0.650        | -                | 0.461 (0.300)    | 1 (1.000) |     0.55 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |       17 | 2024-07-24 | Revenant          | W   | 1.000      | 0.650        | -                | 0.282 (0.183)    | 1 (1.000) |     0.56 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |     1025 | 2024-06-06 | BetBoom           | L   | 0.879      | -            | -                | -                | -         |   -19.88 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |     1042 | 2024-06-06 | BIG               | W   | 0.878      | 0.715        | 0.173 (0.108)    | 0.347 (0.218)    | 1 (0.878) |     4.39 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |     1050 | 2024-06-06 | FURIA             | L   | 0.877      | -            | -                | -                | -         |   -14.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |     1078 | 2024-06-05 | fnatic            | L   | 0.873      | -            | -                | -                | -         |   -20.71 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1101 | 2024-06-05 | Complexity        | L   | 0.871      | -            | -                | -                | -         |   -12.44 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1403 | 2024-05-23 | Liquid            | W   | 0.787      | 0.769        | 0.411 (0.248)    | 0.459 (0.277)    | -         |     7.18 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1447 | 2024-05-22 | GamerLegion       | W   | 0.779      | 0.769        | 0.205 (0.123)    | 0.309 (0.185)    | -         |     1.98 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1486 | 2024-05-21 | BetBoom           | W   | 0.773      | 0.769        | 0.333 (0.198)    | 0.642 (0.381)    | -         |     5.17 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1642 | 2024-05-16 | SAW               | W   | 0.740      | 0.769        | 0.121 (0.069)    | 0.500 (0.285)    | -         |     2.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1654 | 2024-05-16 | PARIVISION        | W   | 0.739      | 0.769        | -                | 0.429 (0.244)    | -         |     0.72 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     2117 | 2024-04-27 | SAW               | L   | 0.613      | -            | -                | -                | -         |   -17.94 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     2145 | 2024-04-26 | FaZe              | L   | 0.607      | -            | -                | -                | -         |    -6.05 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     2172 | 2024-04-25 | fnatic            | W   | 0.601      | 0.889        | 0.428 (0.229)    | 0.666 (0.356)    | 1 (0.601) |     6.23 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     2192 | 2024-04-24 | Imperial          | W   | 0.594      | 0.889        | 0.317 (0.167)    | 0.653 (0.345)    | 1 (0.594) |     3.16 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2214 | 2024-04-23 | Astralis          | L   | 0.586      | -            | -                | -                | -         |    -7.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2269 | 2024-04-20 | Sashi             | L   | 0.567      | -            | -                | -                | -         |   -16.99 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2319 | 2024-04-19 | Sashi             | W   | 0.560      | -            | -                | -                | -         |     0.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2329 | 2024-04-19 | BetBoom           | W   | 0.559      | -            | -                | -                | -         |     3.98 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2888 | 2024-03-29 | Natus Vincere     | L   | 0.420      | -            | -                | -                | -         |    -2.06 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2996 | 2024-03-23 | Virtus.pro        | W   | 0.379      | 1.000        | 0.595 (0.225)    | -                | 1 (0.379) |     7.79 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     3011 | 2024-03-22 | FaZe              | W   | 0.372      | 1.000        | 0.854 (0.318)    | -                | 1 (0.372) |     7.61 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     3028 | 2024-03-21 | MOUZ              | L   | 0.366      | -            | -                | -                | -         |    -2.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     3036 | 2024-03-21 | Vitality          | W   | 0.365      | 1.000        | 0.749 (0.273)    | -                | 1 (0.365) |     8.77 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     3075 | 2024-03-19 | GamerLegion       | W   | 0.352      | -            | -                | -                | 1 (0.352) |     0.13 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     3083 | 2024-03-18 | HEROIC            | L   | 0.346      | -            | -                | -                | -         |    -6.29 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     3106 | 2024-03-17 | paiN              | W   | 0.340      | -            | -                | -                | 1 (0.340) |     2.75 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3117 | 2024-03-17 | The MongolZ       | W   | 0.338      | -            | -                | -                | -         |     8.60 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3788 | 2024-02-17 | BetBoom           | W   | 0.146      | -            | -                | -                | -         |     1.40 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3822 | 2024-02-16 | FaZe              | L   | 0.139      | -            | -                | -                | -         |    -1.45 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3857 | 2024-02-15 | Falcons           | W   | 0.131      | -            | -                | -                | -         |     0.97 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3880 | 2024-02-14 | G2                | L   | 0.127      | -            | -                | -                | -         |    -0.54 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3890 | 2024-02-14 | Ninjas in Pyjamas | W   | 0.125      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3999 | 2024-02-05 | Natus Vincere     | L   | 0.068      | -            | -                | -                | -         |    -0.27 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     4011 | 2024-02-04 | FaZe              | L   | 0.061      | -            | -                | -                | -         |    -0.65 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     4056 | 2024-02-03 | Falcons           | W   | 0.052      | -            | -                | -                | -         |     0.37 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     4125 | 2024-01-31 | Rebels            | W   | 0.034      | -            | -                | -                | -         |     0.03 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     4133 | 2024-01-31 | BetBoom           | W   | 0.032      | -            | -                | -                | -         |     0.32 | Calyx, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($230,050.62)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.83) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-05-23 |      0.787 | $250,000.00    | $196,633.01     |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-03-31 |      0.434 | $45,000.00     | $19,521.14      |
| 2024-02-11 |      0.107 | $16,000.00     | $1,707.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
