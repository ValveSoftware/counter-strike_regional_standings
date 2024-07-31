### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, Markoś, phr<br />
Global Rank: [77](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
<br />
Final Rank Value:  939.5<br />
<br />
Final Rank Value (939.5) = Starting Rank Value (910.2) + Head To Head Adjustments (29.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.2
- 400 + ( ( 0.247 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 910.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       25 | 2024-07-31 | Sampi             | W   | 1.000      | 0.143        | 0.028 (0.004)    | 1.000 (0.143)    | 0 (0.000) |    15.10 | b1elany, Furlan, kadziu, Markoś, phr     |
|           24 |      322 | 2024-07-22 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -15.95 | b1elany, Furlan, kadziu, Markoś, phr     |
|           23 |      386 | 2024-07-20 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.124 (0.046)    | 0.817 (0.303)    | 0 (0.000) |    26.09 | b1elany, Furlan, kadziu, Markoś, phr     |
|           22 |      484 | 2024-07-18 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.76 | b1elany, Furlan, kadziu, Markoś, phr     |
|           21 |      591 | 2024-07-16 | kONO              | W   | 1.000      | 0.371        | 0.029 (0.011)    | 0.537 (0.199)    | 0 (0.000) |    13.12 | b1elany, Furlan, kadziu, Markoś, phr     |
|           20 |      642 | 2024-07-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | 0.032 (0.012)    | 0.564 (0.209)    | 0 (0.000) |    14.43 | b1elany, Furlan, kadziu, Markoś, phr     |
|           19 |      699 | 2024-07-11 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -16.95 | b1elany, Furlan, kadziu, Markoś, splawik |
|           18 |      893 | 2024-06-15 | B8                | L   | 0.891      | -            | -                | -                | -         |    -6.14 | b1elany, Furlan, kadziu, phr, ultimate   |
|           17 |      953 | 2024-06-13 | GamerLegion       | W   | 0.880      | 0.435        | 0.177 (0.068)    | -                | 0 (0.000) |    23.06 | Furlan, kadziu, phr, splawik, ultimate   |
|           16 |      963 | 2024-06-13 | Enterprise        | L   | 0.878      | -            | -                | -                | -         |   -12.04 | b1elany, Furlan, kadziu, phr, ultimate   |
|           15 |     1016 | 2024-06-11 | Sampi             | W   | 0.864      | 0.435        | 0.028 (0.011)    | 1.000 (0.375)    | 0 (0.000) |    12.61 | Furlan, kadziu, phr, splawik, ultimate   |
|           14 |     1106 | 2024-06-09 | VP.Prodigy        | W   | 0.850      | 0.435        | 0.026 (0.010)    | 0.406 (0.150)    | 0 (0.000) |    14.18 | b1elany, Furlan, kadziu, phr, ultimate   |
|           13 |     1140 | 2024-06-08 | 3DMAX             | W   | 0.846      | 0.450        | 0.504 (0.192)    | 1.000 (0.381)    | 0 (0.000) |    25.84 | b1elany, Furlan, kadziu, phr, ultimate   |
|           12 |     1212 | 2024-06-07 | EYEBALLERS        | W   | 0.838      | 0.450        | -                | 0.513 (0.194)    | 0 (0.000) |    15.21 | b1elany, Furlan, kadziu, phr, ultimate   |
|           11 |     1221 | 2024-06-07 | CYBERSHOKE        | W   | 0.837      | 0.435        | 0.040 (0.014)    | 0.347 (0.126)    | 0 (0.000) |    14.42 | b1elany, Furlan, kadziu, phr, ultimate   |
|           10 |     1259 | 2024-06-06 | Enterprise        | W   | 0.833      | 0.450        | 0.040 (0.015)    | 0.622 (0.233)    | -         |    16.37 | b1elany, Furlan, kadziu, phr, ultimate   |
|            9 |     1334 | 2024-06-05 | Aurora Young Blud | L   | 0.825      | -            | -                | -                | -         |   -12.76 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            8 |     1370 | 2024-06-04 | Passion UA        | L   | 0.819      | -            | -                | -                | -         |    -5.34 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            7 |     1529 | 2024-05-29 | INFINITE          | L   | 0.780      | -            | -                | -                | -         |   -20.54 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            6 |     1540 | 2024-05-29 | Passion UA        | L   | 0.777      | -            | -                | -                | -         |    -6.32 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            5 |     1636 | 2024-05-24 | Enterprise        | L   | 0.744      | -            | -                | -                | -         |   -10.37 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            4 |     1638 | 2024-05-24 | MOUZ NXT          | L   | 0.744      | -            | -                | -                | -         |    -6.75 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            3 |     1693 | 2024-05-22 | Zero Tenacity     | L   | 0.731      | -            | -                | -                | -         |    -4.76 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            2 |     1730 | 2024-05-21 | NAVI Junior       | L   | 0.726      | -            | -                | -                | -         |   -19.93 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            1 |     1766 | 2024-05-20 | Sampi             | L   | 0.719      | -            | -                | -                | -         |   -11.48 | ANeraX, b1elany, Furlan, phr, ultimate   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,060.98)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.905 | $2,500.00      | $2,262.44       |
| 2024-06-16 |      0.899 | $2,000.00      | $1,798.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
