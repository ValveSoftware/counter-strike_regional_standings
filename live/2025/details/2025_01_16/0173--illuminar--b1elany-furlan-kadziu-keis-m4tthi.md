### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, keis, m4tthi<br />
Global Rank: [173](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  669.1<br />
<br />
Final Rank Value (669.1) = Starting Rank Value (670.6) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.6
- 400 + ( ( 0.137 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 670.6


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
|           22 |     1718 | 2024-10-05 | NAVI Junior       | L   | 0.510      | -            | -                | -                | -         |    -1.63 | b1elany, Furlan, kadziu, keis, m4tthi |
|           21 |     2345 | 2024-09-18 | Passion UA        | L   | 0.396      | -            | -                | -                | -         |    -0.84 | b1elany, Furlan, kadziu, Melavi, phr  |
|           20 |     3186 | 2024-08-23 | Young Ninjas      | L   | 0.224      | -            | -                | -                | -         |    -3.04 | b1elany, Furlan, kadziu, Melavi, phr  |
|           19 |     3294 | 2024-08-21 | Anonymo           | L   | 0.210      | -            | -                | -                | -         |    -1.87 | b1elany, Furlan, kadziu, Markoś, phr  |
|           18 |     3319 | 2024-08-20 | GenOne            | W   | 0.204      | 0.143        | 0.019 (0.001)    | 0.571 (0.017)    | 0 (0.000) |     4.51 | b1elany, Furlan, kadziu, Markoś, phr  |
|           17 |     3321 | 2024-08-20 | ECLOT             | L   | 0.203      | -            | -                | -                | -         |    -0.15 | b1elany, Furlan, kadziu, Markoś, phr  |
|           16 |     3349 | 2024-08-19 | ECSTATIC          | L   | 0.198      | -            | -                | -                | -         |    -1.00 | b1elany, Furlan, kadziu, Markoś, phr  |
|           15 |     3356 | 2024-08-19 | ALTERNATE aTTaX   | W   | 0.197      | 0.371        | 0.075 (0.005)    | 0.684 (0.050)    | 0 (0.000) |     5.72 | b1elany, Furlan, kadziu, Markoś, phr  |
|           14 |     3437 | 2024-08-15 | Insilio           | L   | 0.172      | -            | -                | -                | -         |    -1.82 | b1elany, Furlan, kadziu, Markoś, phr  |
|           13 |     3455 | 2024-08-15 | GUN5              | L   | 0.170      | -            | -                | -                | -         |    -0.50 | b1elany, Furlan, kadziu, Markoś, phr  |
|           12 |     3492 | 2024-08-13 | los kogutos       | L   | 0.159      | -            | -                | -                | -         |    -0.26 | b1elany, Furlan, kadziu, Markoś, phr  |
|           11 |     3500 | 2024-08-13 | AMKAL             | L   | 0.159      | -            | -                | -                | -         |    -2.34 | b1elany, Furlan, kadziu, Markoś, phr  |
|           10 |     3513 | 2024-08-13 | SINNERS           | L   | 0.157      | -            | -                | -                | -         |    -0.40 | b1elany, Furlan, kadziu, Markoś, phr  |
|            9 |     3580 | 2024-08-11 | HAVU              | W   | 0.145      | 0.435        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.29 | b1elany, Furlan, kadziu, Markoś, phr  |
|            8 |     3588 | 2024-08-11 | TSM               | L   | 0.143      | -            | -                | -                | -         |    -1.09 | b1elany, Furlan, kadziu, Markoś, phr  |
|            7 |     3643 | 2024-08-08 | Aurora Young Blud | L   | 0.126      | -            | -                | -                | -         |    -0.69 | b1elany, Furlan, kadziu, Markoś, phr  |
|            6 |     3660 | 2024-08-08 | NAVI Junior       | W   | 0.124      | 0.333        | 0.204 (0.008)    | 1.000 (0.041)    | 0 (0.000) |     3.48 | b1elany, Furlan, kadziu, Markoś, phr  |
|            5 |     3696 | 2024-08-07 | EYEBALLERS        | L   | 0.118      | -            | -                | -                | -         |    -0.94 | b1elany, Furlan, kadziu, Markoś, phr  |
|            4 |     3756 | 2024-08-06 | kONO              | L   | 0.110      | -            | -                | -                | -         |    -0.65 | b1elany, Furlan, kadziu, Markoś, phr  |
|            3 |     3881 | 2024-08-02 | 9 Pandas          | L   | 0.083      | -            | -                | -                | -         |    -1.09 | b1elany, Furlan, kadziu, Markoś, phr  |
|            2 |     3972 | 2024-07-31 | Sampi             | W   | 0.070      | 0.143        | 0.042 (0.000)    | 0.283 (0.003)    | 0 (0.000) |     1.90 | b1elany, Furlan, kadziu, Markoś, phr  |
|            1 |     4269 | 2024-07-22 | ex-Enterprise     | L   | 0.009      | -            | -                | -                | -         |    -0.07 | b1elany, Furlan, kadziu, Markoś, phr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($509.64)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
