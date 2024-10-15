### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [42](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [28]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  1071.8<br />
<br />
Final Rank Value (1071.8) = Starting Rank Value (910.9) + Head To Head Adjustments (160.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.485[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.9
- 400 + ( ( 0.263 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 910.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       55 | 2024-10-11 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.80 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |      991 | 2024-09-13 | Gaimin Gladiators | L   | 0.986      | -            | -                | -                | -         |   -21.70 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     1154 | 2024-09-07 | Zero Tenacity     | W   | 0.947      | 0.384        | 0.117 (0.043)    | 0.861 (0.313)    | 0 (0.000) |    13.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     1178 | 2024-09-06 | BetBoom           | W   | 0.941      | 0.384        | 0.191 (0.069)    | 0.446 (0.161)    | 0 (0.000) |    19.16 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     1225 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.933      | 0.384        | 0.078 (0.028)    | 0.787 (0.282)    | 0 (0.000) |    10.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     1317 | 2024-09-02 | GamerLegion       | W   | 0.913      | 0.384        | 0.250 (0.088)    | 0.610 (0.214)    | 0 (0.000) |    15.38 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     1399 | 2024-08-29 | Insilio           | W   | 0.887      | 0.384        | 0.038 (0.013)    | 0.690 (0.235)    | 0 (0.000) |     9.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     1514 | 2024-08-27 | fnatic            | L   | 0.873      | -            | -                | -                | -         |    -7.25 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     1576 | 2024-08-26 | Eternal Fire      | L   | 0.868      | -            | -                | -                | -         |    -0.39 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     1592 | 2024-08-26 | HEROIC            | W   | 0.867      | 0.143        | 0.256 (0.032)    | 0.433 (0.054)    | 0 (0.000) |    25.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     1685 | 2024-08-23 | paiN              | L   | 0.847      | -            | -                | -                | -         |    -1.64 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     1717 | 2024-08-22 | 9 Pandas          | W   | 0.840      | 0.143        | -                | 0.677 (0.081)    | 0 (0.000) |    15.23 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     1773 | 2024-08-21 | Passion UA        | W   | 0.833      | 0.143        | 0.192 (0.023)    | 1.000 (0.119)    | 0 (0.000) |    16.61 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     1804 | 2024-08-21 | Johnny Speeds     | W   | 0.832      | 0.143        | 0.115 (0.014)    | 0.982 (0.117)    | 0 (0.000) |    15.88 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     1839 | 2024-08-19 | 500               | W   | 0.821      | -            | -                | -                | 0 (0.000) |     6.59 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     1845 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.821      | 0.143        | 0.133 (0.016)    | -                | -         |    21.76 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     1850 | 2024-08-19 | BLEED             | W   | 0.821      | 0.143        | 0.067 (0.008)    | 0.470 (0.055)    | -         |    16.78 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     2338 | 2024-08-03 | Johnny Speeds     | L   | 0.714      | -            | -                | -                | -         |    -6.76 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     2367 | 2024-08-02 | BLEED             | W   | 0.708      | -            | -                | -                | -         |    16.57 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     2408 | 2024-08-01 | AMKAL             | W   | 0.702      | -            | -                | -                | -         |    14.80 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     2421 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.700      | -            | -                | -                | -         |    -2.95 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     2453 | 2024-07-31 | 3DMAX             | L   | 0.695      | -            | -                | -                | -         |    -1.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     2477 | 2024-07-31 | FaZe              | L   | 0.693      | -            | -                | -                | -         |    -0.27 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,847.19)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-07 |      0.947 | $20,000.00     | $18,938.10      |
| 2024-08-25 |      0.861 | $5,000.00      | $4,307.13       |
| 2024-08-04 |      0.720 | $5,000.00      | $3,601.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
