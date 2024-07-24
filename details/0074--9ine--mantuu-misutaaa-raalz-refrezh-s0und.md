### Roster Details<br />
Team Name: 9INE<br />
Roster: mantuu, misutaaa, raalz, refrezh, s0und<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [74](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  959.1<br />
<br />
Final Rank Value (959.1) = Starting Rank Value (860.8) + Head To Head Adjustments (98.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.8
- 400 + ( ( 0.228 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 860.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |        7 | 2024-07-24 | Sampi            | W   | 1.000      | 0.435        | 0.037 (0.016)    | 0.994 (0.432)    | 0 (0.000) |    13.64 | mantuu, misutaaa, raalz, refrezh, s0und |
|           23 |       16 | 2024-07-24 | Rebels           | W   | 1.000      | 0.371        | 0.053 (0.020)    | 0.661 (0.245)    | 0 (0.000) |    19.92 | mantuu, misutaaa, raalz, refrezh, s0und |
|           22 |       47 | 2024-07-23 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -8.37 | mantuu, misutaaa, raalz, refrezh, s0und |
|           21 |       77 | 2024-07-22 | FLuffy Gangsters | W   | 1.000      | 0.143        | -                | 0.235 (0.034)    | 0 (0.000) |     5.97 | mantuu, misutaaa, raalz, refrezh, s0und |
|           20 |      104 | 2024-07-21 | Enterprise       | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.646 (0.239)    | 0 (0.000) |    16.37 | mantuu, misutaaa, raalz, refrezh, s0und |
|           19 |      179 | 2024-07-19 | Insilio          | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.582 (0.216)    | 0 (0.000) |    19.16 | mantuu, misutaaa, raalz, refrezh, s0und |
|           18 |      203 | 2024-07-18 | K10              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.84 | mantuu, misutaaa, raalz, refrezh, s0und |
|           17 |      220 | 2024-07-18 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -4.06 | mantuu, misutaaa, raalz, refrezh, s0und |
|           16 |      274 | 2024-07-17 | Astralis Talent  | W   | 1.000      | 0.143        | 0.012 (0.002)    | -                | 0 (0.000) |     9.19 | mantuu, misutaaa, raalz, refrezh, s0und |
|           15 |      293 | 2024-07-17 | Endpoint         | W   | 1.000      | 0.371        | 0.015 (0.006)    | 0.466 (0.173)    | 0 (0.000) |    15.38 | mantuu, misutaaa, raalz, refrezh, s0und |
|           14 |      304 | 2024-07-17 | Rebels           | L   | 1.000      | -            | -                | -                | -         |    -9.77 | mantuu, misutaaa, raalz, refrezh, s0und |
|           13 |      342 | 2024-07-16 | CPH Wolves       | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.388 (0.129)    | 0 (0.000) |    14.42 | mantuu, misutaaa, raalz, refrezh, s0und |
|           12 |      393 | 2024-07-15 | B8               | L   | 1.000      | -            | -                | -                | -         |    -4.62 | mantuu, misutaaa, raalz, refrezh, s0und |
|           11 |      432 | 2024-07-13 | ROSOMAHA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.27 | mantuu, misutaaa, raalz, refrezh, s0und |
|           10 |      459 | 2024-07-11 | Endpoint         | L   | 1.000      | -            | -                | -                | -         |   -15.08 | mantuu, misutaaa, raalz, refrezh, s0und |
|            9 |      482 | 2024-07-10 | Sashi            | L   | 1.000      | -            | -                | -                | -         |    -4.34 | mantuu, misutaaa, n0te, raalz, s0und    |
|            8 |      502 | 2024-07-09 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |    -3.49 | mantuu, misutaaa, raalz, refrezh, s0und |
|            7 |      709 | 2024-06-13 | 3DMAX            | L   | 0.927      | -            | -                | -                | -         |    -4.60 | mantuu, misutaaa, raalz, refrezh, s0und |
|            6 |      826 | 2024-06-09 | 3DMAX            | W   | 0.900      | 0.450        | 0.175 (0.071)    | 1.000 (0.405)    | -         |    23.15 | mantuu, misutaaa, raalz, refrezh, s0und |
|            5 |      892 | 2024-06-08 | BLEED            | L   | 0.894      | -            | -                | -                | -         |    -3.04 | mantuu, misutaaa, raalz, refrezh, s0und |
|            4 |      947 | 2024-06-07 | Endpoint         | W   | 0.887      | 0.450        | 0.015 (0.006)    | 0.466 (0.186)    | -         |    14.08 | mantuu, misutaaa, raalz, refrezh, s0und |
|            3 |      971 | 2024-06-07 | Nexus            | W   | 0.885      | 0.500        | 0.018 (0.008)    | 0.480 (0.213)    | -         |    10.62 | mantuu, misutaaa, raalz, refrezh, s0und |
|            2 |     1029 | 2024-06-06 | EYEBALLERS       | L   | 0.879      | -            | -                | -                | -         |   -11.79 | mantuu, misutaaa, raalz, refrezh, s0und |
|            1 |     1066 | 2024-06-05 | Rebels           | L   | 0.874      | -            | -                | -                | -         |    -7.55 | mantuu, misutaaa, raalz, refrezh, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,380.66)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
