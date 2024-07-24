### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, Markoś, phr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  921.8<br />
<br />
Final Rank Value (921.8) = Starting Rank Value (905.9) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.9
- 400 + ( ( 0.250 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 905.9


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
|           24 |       80 | 2024-07-22 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -15.58 | b1elany, Furlan, kadziu, Markoś, phr     |
|           23 |      144 | 2024-07-20 | Johnny Speeds     | W   | 1.000      | 0.371        | 0.154 (0.057)    | 0.858 (0.318)    | 0 (0.000) |    26.44 | b1elany, Furlan, kadziu, Markoś, phr     |
|           22 |      242 | 2024-07-18 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.26 | b1elany, Furlan, kadziu, Markoś, phr     |
|           21 |      349 | 2024-07-16 | kONO              | W   | 1.000      | 0.371        | 0.036 (0.013)    | 0.559 (0.207)    | 0 (0.000) |    13.79 | b1elany, Furlan, kadziu, Markoś, phr     |
|           20 |      400 | 2024-07-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | 0.041 (0.015)    | 0.638 (0.236)    | 0 (0.000) |    14.79 | b1elany, Furlan, kadziu, Markoś, phr     |
|           19 |      457 | 2024-07-11 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -16.16 | b1elany, Furlan, kadziu, Markoś, splawik |
|           18 |      651 | 2024-06-15 | B8                | L   | 0.938      | -            | -                | -                | -         |    -6.44 | b1elany, Furlan, kadziu, phr, ultimate   |
|           17 |      711 | 2024-06-13 | GamerLegion       | W   | 0.927      | 0.435        | 0.205 (0.082)    | 0.309 (0.125)    | 0 (0.000) |    24.85 | Furlan, kadziu, phr, splawik, ultimate   |
|           16 |      721 | 2024-06-13 | Enterprise        | L   | 0.926      | -            | -                | -                | -         |   -11.92 | b1elany, Furlan, kadziu, phr, ultimate   |
|           15 |      774 | 2024-06-11 | Sampi             | W   | 0.911      | 0.435        | 0.037 (0.014)    | 0.994 (0.393)    | 0 (0.000) |    13.65 | Furlan, kadziu, phr, splawik, ultimate   |
|           14 |      864 | 2024-06-09 | VP.Prodigy        | W   | 0.898      | 0.435        | 0.033 (0.013)    | 0.462 (0.180)    | 0 (0.000) |    15.08 | b1elany, Furlan, kadziu, phr, ultimate   |
|           13 |      898 | 2024-06-08 | 3DMAX             | W   | 0.893      | 0.450        | 0.175 (0.070)    | 1.000 (0.402)    | 0 (0.000) |    24.09 | b1elany, Furlan, kadziu, phr, ultimate   |
|           12 |      970 | 2024-06-07 | EYEBALLERS        | W   | 0.885      | 0.450        | 0.007 (0.003)    | 0.571 (0.228)    | 0 (0.000) |    16.25 | b1elany, Furlan, kadziu, phr, ultimate   |
|           11 |      979 | 2024-06-07 | CYBERSHOKE        | W   | 0.884      | 0.435        | 0.050 (0.019)    | 0.294 (0.113)    | 0 (0.000) |    13.43 | b1elany, Furlan, kadziu, phr, ultimate   |
|           10 |     1017 | 2024-06-06 | Enterprise        | W   | 0.880      | 0.450        | 0.050 (0.020)    | 0.646 (0.256)    | 0 (0.000) |    17.96 | b1elany, Furlan, kadziu, phr, ultimate   |
|            9 |     1092 | 2024-06-05 | Aurora Young Blud | L   | 0.872      | -            | -                | -                | -         |   -14.11 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            8 |     1128 | 2024-06-04 | Passion UA        | L   | 0.866      | -            | -                | -                | -         |    -5.45 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            7 |     1287 | 2024-05-29 | INFINITE          | L   | 0.827      | -            | -                | -                | -         |   -21.67 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            6 |     1298 | 2024-05-29 | Passion UA        | L   | 0.824      | -            | -                | -                | -         |    -6.57 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            5 |     1394 | 2024-05-24 | Enterprise        | L   | 0.792      | -            | -                | -                | -         |   -10.40 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            4 |     1396 | 2024-05-24 | MOUZ NXT          | L   | 0.791      | -            | -                | -                | -         |    -7.02 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            3 |     1451 | 2024-05-22 | Zero Tenacity     | L   | 0.778      | -            | -                | -                | -         |    -5.10 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            2 |     1488 | 2024-05-21 | NAVI Junior       | L   | 0.773      | -            | -                | -                | -         |   -21.11 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            1 |     1524 | 2024-05-20 | Sampi             | L   | 0.766      | -            | -                | -                | -         |   -11.71 | ANeraX, b1elany, Furlan, phr, ultimate   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,273.77)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.952 | $2,500.00      | $2,380.66       |
| 2024-06-16 |      0.947 | $2,000.00      | $1,893.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
