### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Global Rank: [23](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1302.1<br />
<br />
Final Rank Value (1302.1) = Starting Rank Value (1267.2) + Head To Head Adjustments (34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.556[<sup>1</sup>](#table2)
- Bounty Collected: 0.551[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.424[<sup>2</sup>](#table1)

The average of these factors is 0.453<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1267.2
- 400 + ( ( 0.453 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1267.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      574 | 2024-11-18 | ECLOT         | L   | 1.000      | -            | -                | -                | -         |   -21.64 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |      586 | 2024-11-17 | Cloud9        | L   | 0.996      | -            | -                | -                | -         |   -23.24 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |      599 | 2024-11-17 | MOUZ          | L   | 0.992      | -            | -                | -                | -         |    -2.84 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |      607 | 2024-11-16 | Rebels        | W   | 0.990      | -            | -                | -                | 1 (0.990) |     2.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     1189 | 2024-10-20 | Nemiga        | W   | 0.806      | 0.500        | 0.455 (0.183)    | 0.728 (0.293)    | 0 (0.000) |    11.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     1218 | 2024-10-19 | UNPAID        | L   | 0.799      | -            | -                | -                | -         |   -20.97 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     1265 | 2024-10-17 | Nemiga        | W   | 0.787      | 0.500        | 0.455 (0.179)    | 0.728 (0.286)    | 0 (0.000) |     9.38 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     1276 | 2024-10-17 | Fluxo         | W   | 0.785      | 0.624        | 0.110 (0.054)    | 0.643 (0.315)    | 1 (0.785) |     7.32 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     1297 | 2024-10-16 | SAW           | W   | 0.780      | 0.500        | 0.258 (0.101)    | 0.594 (0.232)    | 0 (0.000) |    15.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     1305 | 2024-10-16 | Nemiga        | W   | 0.779      | 0.624        | 0.455 (0.221)    | 0.728 (0.354)    | 1 (0.779) |    10.00 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     1326 | 2024-10-15 | Sashi         | W   | 0.773      | 0.500        | -                | 0.735 (0.284)    | 0 (0.000) |     4.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     1825 | 2024-09-27 | BetBoom       | L   | 0.654      | -            | -                | -                | -         |   -15.37 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     1887 | 2024-09-26 | Passion UA    | W   | 0.646      | 0.435        | 0.115 (0.032)    | 1.000 (0.281)    | -         |     4.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2446 | 2024-09-08 | HEROIC        | L   | 0.526      | -            | -                | -                | -         |    -2.05 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2485 | 2024-09-07 | FlyQuest      | W   | 0.519      | 0.889        | 0.161 (0.074)    | 0.498 (0.230)    | 1 (0.519) |     8.17 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2507 | 2024-09-06 | FaZe          | L   | 0.513      | -            | -                | -                | -         |    -0.88 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2528 | 2024-09-05 | HEROIC        | W   | 0.507      | 0.889        | 0.727 (0.328)    | 0.656 (0.296)    | 1 (0.507) |    14.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2581 | 2024-09-04 | Eternal Fire  | L   | 0.499      | -            | -                | -                | -         |    -3.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2612 | 2024-09-03 | FaZe          | W   | 0.493      | 0.889        | 0.780 (0.342)    | 0.524 (0.230)    | 1 (0.493) |    14.81 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     3046 | 2024-08-22 | UNPAID        | W   | 0.412      | -            | -                | -                | -         |     3.10 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3096 | 2024-08-21 | BC.Game       | W   | 0.406      | -            | -                | -                | -         |     1.26 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           19 |     3132 | 2024-08-21 | 1WIN          | W   | 0.404      | -            | -                | -                | -         |     0.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           18 |     3286 | 2024-08-15 | Nemiga        | L   | 0.366      | -            | -                | -                | -         |    -5.41 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           17 |     3378 | 2024-08-12 | Zero Tenacity | W   | 0.347      | -            | -                | -                | -         |     2.42 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           16 |     3528 | 2024-08-07 | Rebels        | W   | 0.313      | -            | -                | -                | -         |     0.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           15 |     3572 | 2024-08-06 | PARIVISION    | W   | 0.307      | -            | -                | -                | -         |     1.30 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           14 |     3579 | 2024-08-06 | los kogutos   | W   | 0.306      | -            | -                | -                | -         |     4.00 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           13 |     3616 | 2024-08-05 | 1WIN          | W   | 0.298      | -            | -                | -                | -         |     0.38 | Chill, LNZ, SaMey, xfl0ud, yxngstxr     |
|           12 |     3676 | 2024-08-03 | Passion UA    | W   | 0.286      | -            | -                | -                | -         |     3.72 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           11 |     3842 | 2024-07-30 | SINNERS       | W   | 0.259      | -            | -                | -                | -         |     2.55 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           10 |     3900 | 2024-07-28 | fnatic        | W   | 0.247      | 0.435        | 0.188 (0.020)    | -                | -         |     3.08 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            9 |     3916 | 2024-07-28 | Monte         | W   | 0.245      | -            | -                | -                | -         |     1.64 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            8 |     3937 | 2024-07-27 | B8            | W   | 0.238      | -            | -                | -                | -         |     2.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            7 |     3953 | 2024-07-26 | los kogutos   | W   | 0.233      | -            | -                | -                | -         |     3.27 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            6 |     4067 | 2024-07-23 | Apogee        | W   | 0.213      | -            | -                | -                | -         |     0.39 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            5 |     4168 | 2024-07-20 | fnatic        | L   | 0.191      | -            | -                | -                | -         |    -3.73 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            4 |     4296 | 2024-07-17 | SAW           | L   | 0.174      | -            | -                | -                | -         |    -1.52 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            3 |     4308 | 2024-07-17 | B8            | W   | 0.173      | -            | -                | -                | -         |     2.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            2 |     4405 | 2024-07-15 | RUSH B        | W   | 0.160      | -            | -                | -                | -         |     0.45 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|            1 |     4424 | 2024-07-15 | Rebels        | W   | 0.158      | -            | -                | -                | -         |     0.46 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54,673.54)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.806 | $17,000.00     | $13,704.98      |
| 2024-10-19 |      0.801 | $25,000.00     | $20,020.37      |
| 2024-09-28 |      0.660 | $2,000.00      | $1,320.48       |
| 2024-09-22 |      0.621 | $12,000.00     | $7,447.83       |
| 2024-08-06 |      0.307 | $22,000.00     | $6,746.78       |
| 2024-07-28 |      0.247 | $22,000.00     | $5,433.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
