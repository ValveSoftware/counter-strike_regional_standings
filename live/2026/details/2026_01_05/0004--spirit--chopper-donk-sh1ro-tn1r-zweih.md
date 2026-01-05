### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, sh1ro, tN1R, zweih<br />
Global Rank: [4](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [3]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1849.0<br />
<br />
Final Rank Value (1849.0) = Starting Rank Value (1812.0) + Head To Head Adjustments (37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.907[<sup>1</sup>](#table2)
- Bounty Collected: 0.738[<sup>2</sup>](#table1)
- Opponent Network: 0.341[<sup>2</sup>](#table1)
- LAN Wins: 0.862[<sup>2</sup>](#table1)

The average of these factors is 0.712<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1812.0
- 400 + ( ( 0.712 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1812.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      229 | 2025-12-13 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -10.72 | chopper, donk, sh1ro, tN1R, zweih   |
|           30 |      260 | 2025-12-11 | Falcons       | W   | 1.000      | 1.000        | 0.922 (0.922)    | 0.422 (0.422)    | 1 (1.000) |    17.94 | chopper, donk, sh1ro, tN1R, zweih   |
|           29 |      370 | 2025-12-05 | MOUZ          | W   | 0.994      | 1.000        | 0.574 (0.571)    | 0.398 (0.396)    | 1 (0.994) |    16.36 | chopper, donk, sh1ro, tN1R, zweih   |
|           28 |      397 | 2025-12-04 | FaZe          | W   | 0.987      | 1.000        | 0.634 (0.626)    | 0.579 (0.572)    | 1 (0.987) |    13.90 | chopper, donk, sh1ro, tN1R, zweih   |
|           27 |      407 | 2025-12-04 | Liquid        | W   | 0.986      | 1.000        | 0.552 (0.544)    | 0.406 (0.401)    | 1 (0.986) |     9.31 | chopper, donk, sh1ro, tN1R, zweih   |
|           26 |      893 | 2025-11-14 | Vitality      | L   | 0.853      | -            | -                | -                | -         |    -7.71 | chopper, donk, sh1ro, tN1R, zweih   |
|           25 |      929 | 2025-11-12 | The MongolZ   | W   | 0.843      | 0.687        | 1.000 (0.579)    | 0.401 (0.232)    | 1 (0.843) |    12.87 | chopper, donk, sh1ro, tN1R, zweih   |
|           24 |      961 | 2025-11-12 | Falcons       | L   | 0.838      | -            | -                | -                | -         |    -8.70 | chopper, donk, sh1ro, tN1R, zweih   |
|           23 |     1255 | 2025-11-05 | The MongolZ   | L   | 0.793      | -            | -                | -                | -         |   -12.27 | chopper, donk, sh1ro, tN1R, zweih   |
|           22 |     1266 | 2025-11-04 | HEROIC        | W   | 0.791      | 1.000        | 0.362 (0.286)    | 0.340 (0.268)    | 1 (0.791) |     5.34 | chopper, donk, sh1ro, tN1R, zweih   |
|           21 |     1288 | 2025-11-04 | Falcons       | L   | 0.785      | -            | -                | -                | -         |    -9.03 | chopper, donk, sh1ro, tN1R, zweih   |
|           20 |     1314 | 2025-11-03 | paiN          | W   | 0.779      | 1.000        | 0.386 (0.300)    | 0.300 (0.233)    | 1 (0.779) |     4.71 | chopper, donk, sh1ro, tN1R, zweih   |
|           19 |     2032 | 2025-10-10 | FaZe          | L   | 0.620      | -            | -                | -                | -         |    -8.98 | chopper, donk, sh1ro, tN1R, zweih   |
|           18 |     2237 | 2025-10-06 | G2            | W   | 0.594      | 1.000        | 0.442 (0.262)    | 0.387 (0.230)    | 1 (0.594) |     5.67 | chopper, donk, sh1ro, tN1R, zweih   |
|           17 |     2308 | 2025-10-05 | HOTU          | W   | 0.586      | 1.000        | -                | 0.590 (0.346)    | 1 (0.586) |     2.63 | chopper, donk, sh1ro, tN1R, zweih   |
|           16 |     2366 | 2025-10-04 | Inner Circle  | W   | 0.578      | 1.000        | -                | 0.534 (0.309)    | 1 (0.578) |     1.44 | chopper, donk, sh1ro, tN1R, zweih   |
|           15 |     3471 | 2025-09-01 | G2            | L   | 0.361      | -            | -                | -                | -         |    -8.72 | chopper, donk, sh1ro, zont1x, zweih |
|           14 |     3487 | 2025-08-31 | Liquid        | W   | 0.354      | -            | -                | -                | -         |     3.39 | chopper, donk, sh1ro, zont1x, zweih |
|           13 |     3507 | 2025-08-30 | FURIA         | L   | 0.348      | -            | -                | -                | -         |    -3.50 | chopper, donk, sh1ro, zont1x, zweih |
|           12 |     3587 | 2025-08-28 | FlyQuest      | W   | 0.333      | -            | -                | -                | -         |     0.59 | chopper, donk, sh1ro, zont1x, zweih |
|           11 |     3742 | 2025-08-20 | HEROIC        | L   | 0.281      | -            | -                | -                | -         |    -7.32 | chopper, donk, sh1ro, zont1x, zweih |
|           10 |     3819 | 2025-08-17 | The MongolZ   | W   | 0.260      | 0.769        | 1.000 (0.200)    | -                | -         |     4.41 | chopper, donk, sh1ro, zont1x, zweih |
|            9 |     3862 | 2025-08-16 | MOUZ          | W   | 0.253      | -            | -                | -                | -         |     3.69 | chopper, donk, sh1ro, zont1x, zweih |
|            8 |     3901 | 2025-08-15 | Virtus.pro    | W   | 0.247      | -            | -                | -                | -         |     0.18 | chopper, donk, sh1ro, zont1x, zweih |
|            7 |     4158 | 2025-08-09 | G2            | W   | 0.207      | -            | -                | -                | -         |     1.51 | chopper, donk, sh1ro, zont1x, zweih |
|            6 |     4210 | 2025-08-06 | Passion UA    | W   | 0.187      | -            | -                | -                | -         |     0.01 | chopper, donk, sh1ro, zont1x, zweih |
|            5 |     4243 | 2025-08-03 | MOUZ          | W   | 0.167      | -            | -                | -                | -         |     2.45 | chopper, donk, sh1ro, zont1x, zweih |
|            4 |     4263 | 2025-08-02 | Natus Vincere | W   | 0.160      | 1.000        | 0.812 (0.130)    | -                | -         |     3.04 | chopper, donk, sh1ro, zont1x, zweih |
|            3 |     4321 | 2025-07-29 | MOUZ          | W   | 0.134      | -            | -                | -                | -         |     1.96 | chopper, donk, sh1ro, zont1x, zweih |
|            2 |     4343 | 2025-07-28 | Aurora        | W   | 0.126      | -            | -                | -                | -         |     1.86 | chopper, donk, sh1ro, zont1x, zweih |
|            1 |     4382 | 2025-07-27 | HEROIC        | W   | 0.119      | -            | -                | -                | -         |     0.71 | chopper, donk, sh1ro, zont1x, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($338,280.97)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.79) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $80,000.00     | $80,000.00      |
| 2025-11-16 |      0.866 | $25,000.00     | $21,641.62      |
| 2025-11-09 |      0.819 | $47,000.00     | $38,471.88      |
| 2025-10-12 |      0.634 | $58,000.00     | $36,752.19      |
| 2025-09-01 |      0.361 | $10,000.00     | $3,614.70       |
| 2025-08-24 |      0.306 | $20,000.00     | $6,114.45       |
| 2025-08-17 |      0.260 | $287,813.00    | $74,865.18      |
| 2025-08-03 |      0.167 | $460,000.00    | $76,820.96      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
