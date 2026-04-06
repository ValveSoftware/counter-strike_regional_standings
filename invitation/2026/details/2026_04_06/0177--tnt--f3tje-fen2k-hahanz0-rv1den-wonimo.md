### Roster Details<br />
Team Name: TNT<br />
Roster: f3tje, fen2k, hahanz0, rv1den, wonimo<br />
Global Rank: [177](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  806.1<br />
<br />
Final Rank Value (806.1) = Starting Rank Value (728.0) + Head To Head Adjustments (78.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.0
- 400 + ( ( 0.168 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 728.0


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
|           14 |      346 | 2026-03-29 | QWENTRY           | L   | 1.000      | -            | -                | -                | -         |    -4.01 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|           13 |      412 | 2026-03-28 | Misa              | W   | 1.000      | 0.400        | 0.005 (0.002)    | 0.178 (0.071)    | 0 (0.000) |    15.19 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|           12 |      485 | 2026-03-27 | Phantom Academy   | W   | 1.000      | 0.400        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     5.92 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|           11 |     1075 | 2026-03-15 | Aurora Young Blud | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.225 (0.032)    | 0 (0.000) |    12.21 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|           10 |     1347 | 2026-03-09 | Misa              | L   | 1.000      | -            | -                | -                | -         |   -14.69 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            9 |     1495 | 2026-03-07 | The Last Resort   | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.433 (0.062)    | 0 (0.000) |    19.36 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            8 |     1571 | 2026-03-05 | eternal premium   | W   | 0.988      | 0.143        | 0.000 (0.000)    | 0.092 (0.013)    | 0 (0.000) |     5.04 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            7 |     2396 | 2026-02-17 | ex-Flame Sharks   | L   | 0.881      | -            | -                | -                | -         |   -15.81 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            6 |     2479 | 2026-02-15 | Hashiras          | W   | 0.870      | 0.384        | 0.002 (0.001)    | 0.454 (0.152)    | 0 (0.000) |    17.94 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            5 |     2494 | 2026-02-15 | ASTRAL            | W   | 0.868      | 0.384        | 0.000 (0.000)    | 0.533 (0.178)    | 0 (0.000) |    22.35 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            4 |     2576 | 2026-02-14 | Lavked            | L   | 0.860      | -            | -                | -                | -         |    -6.78 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            3 |     2661 | 2026-02-12 | Fire Flux         | W   | 0.848      | 0.384        | 0.006 (0.002)    | 0.177 (0.058)    | 0 (0.000) |    16.70 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            2 |     3900 | 2025-12-14 | eLITenergy        | L   | 0.447      | -            | -                | -                | -         |    -7.41 | f3tje, fen2k, hahanz0, rv1den, wonimo |
|            1 |     3929 | 2025-12-12 | Oxuji             | W   | 0.434      | 0.278        | 0.011 (0.001)    | 0.474 (0.057)    | 0 (0.000) |    12.03 | f3tje, fen2k, hahanz0, rv1den, wonimo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,835.47)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $7,500.00      | $7,500.00       |
| 2025-12-14 |      0.447 | $750.00        | $335.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
