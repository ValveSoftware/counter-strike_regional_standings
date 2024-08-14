### Roster Details<br />
Team Name: 9INE<br />
Roster: mantuu, misutaaa, raalz, refrezh, s0und<br />
Global Rank: [76](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [55]( ../standings_europe.md)<br />
<br />
Final Rank Value:  943.2<br />
<br />
Final Rank Value (943.2) = Starting Rank Value (898.4) + Head To Head Adjustments (44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.4
- 400 + ( ( 0.253 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 898.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       41 | 2024-08-13 | Sampi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.92 | mantuu, misutaaa, raalz, refrezh, s0und |
|           36 |      242 | 2024-08-07 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.87 | mantuu, misutaaa, raalz, refrezh, s0und |
|           35 |      249 | 2024-08-07 | Permitta          | W   | 1.000      | 0.143        | 0.036 (0.005)    | -                | 0 (0.000) |    16.72 | mantuu, misutaaa, raalz, refrezh, s0und |
|           34 |      325 | 2024-08-04 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -3.21 | mantuu, misutaaa, raalz, refrezh, s0und |
|           33 |      378 | 2024-08-03 | Into the Breach   | W   | 1.000      | 0.426        | -                | 0.346 (0.147)    | 0 (0.000) |    12.29 | mantuu, misutaaa, raalz, refrezh, s0und |
|           32 |      402 | 2024-08-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -10.36 | mantuu, misutaaa, raalz, refrezh, s0und |
|           31 |      411 | 2024-08-02 | Into the Breach   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.92 | mantuu, misutaaa, raalz, refrezh, s0und |
|           30 |      455 | 2024-08-01 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -8.53 | mantuu, misutaaa, raalz, refrezh, s0und |
|           29 |      502 | 2024-07-31 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |   -22.35 | mantuu, misutaaa, raalz, refrezh, s0und |
|           28 |      507 | 2024-07-31 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -17.11 | mantuu, misutaaa, raalz, refrezh, s0und |
|           27 |      568 | 2024-07-29 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -16.88 | mantuu, misutaaa, raalz, refrezh, s0und |
|           26 |      634 | 2024-07-27 | Aurora Young Blud | W   | 1.000      | 0.435        | 0.019 (0.008)    | 0.594 (0.258)    | 0 (0.000) |    14.59 | mantuu, misutaaa, raalz, refrezh, s0und |
|           25 |      705 | 2024-07-25 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -9.33 | mantuu, misutaaa, raalz, refrezh, s0und |
|           24 |      730 | 2024-07-24 | Sampi             | W   | 1.000      | 0.435        | 0.024 (0.010)    | 0.981 (0.426)    | 0 (0.000) |    12.38 | mantuu, misutaaa, raalz, refrezh, s0und |
|           23 |      739 | 2024-07-24 | Rebels            | W   | 1.000      | 0.371        | 0.036 (0.013)    | 0.585 (0.217)    | 0 (0.000) |    17.66 | mantuu, misutaaa, raalz, refrezh, s0und |
|           22 |      770 | 2024-07-23 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -8.90 | mantuu, misutaaa, raalz, refrezh, s0und |
|           21 |      800 | 2024-07-22 | FLuffy Gangsters  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.42 | mantuu, misutaaa, raalz, refrezh, s0und |
|           20 |      827 | 2024-07-21 | Enterprise        | W   | 1.000      | 0.371        | 0.042 (0.015)    | 0.687 (0.254)    | 0 (0.000) |    14.55 | mantuu, misutaaa, raalz, refrezh, s0und |
|           19 |      902 | 2024-07-19 | Insilio           | W   | 1.000      | 0.371        | 0.021 (0.008)    | 0.505 (0.187)    | 0 (0.000) |    16.61 | mantuu, misutaaa, raalz, refrezh, s0und |
|           18 |      926 | 2024-07-18 | K10               | W   | 1.000      | -            | -                | -                | -         |     7.41 | mantuu, misutaaa, raalz, refrezh, s0und |
|           17 |      943 | 2024-07-18 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -5.49 | mantuu, misutaaa, raalz, refrezh, s0und |
|           16 |      997 | 2024-07-17 | Astralis Talent   | W   | 1.000      | -            | -                | -                | -         |     7.33 | mantuu, misutaaa, raalz, refrezh, s0und |
|           15 |     1016 | 2024-07-17 | Endpoint          | W   | 1.000      | 0.371        | 0.042 (0.016)    | 0.591 (0.219)    | -         |    15.29 | mantuu, misutaaa, raalz, refrezh, s0und |
|           14 |     1027 | 2024-07-17 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -12.64 | mantuu, misutaaa, raalz, refrezh, s0und |
|           13 |     1065 | 2024-07-16 | CPH Wolves        | W   | 1.000      | -            | -                | -                | -         |    12.19 | mantuu, misutaaa, raalz, refrezh, s0und |
|           12 |     1116 | 2024-07-15 | B8                | L   | 0.999      | -            | -                | -                | -         |    -6.10 | mantuu, misutaaa, raalz, refrezh, s0und |
|           11 |     1155 | 2024-07-13 | ROSOMAHA          | W   | 0.984      | -            | -                | -                | -         |     3.48 | mantuu, misutaaa, raalz, refrezh, s0und |
|           10 |     1182 | 2024-07-11 | Endpoint          | L   | 0.971      | -            | -                | -                | -         |   -14.58 | mantuu, misutaaa, raalz, refrezh, s0und |
|            9 |     1205 | 2024-07-10 | Sashi             | L   | 0.964      | -            | -                | -                | -         |    -5.68 | mantuu, misutaaa, n0te, raalz, s0und    |
|            8 |     1225 | 2024-07-09 | Johnny Speeds     | L   | 0.958      | -            | -                | -                | -         |    -5.07 | mantuu, misutaaa, raalz, refrezh, s0und |
|            7 |     1432 | 2024-06-13 | 3DMAX             | L   | 0.786      | -            | -                | -                | -         |    -1.47 | mantuu, misutaaa, raalz, refrezh, s0und |
|            6 |     1549 | 2024-06-09 | 3DMAX             | W   | 0.760      | 0.450        | 0.508 (0.174)    | 1.000 (0.342)    | -         |    22.55 | mantuu, misutaaa, raalz, refrezh, s0und |
|            5 |     1615 | 2024-06-08 | BLEED             | L   | 0.753      | -            | -                | -                | -         |    -2.14 | mantuu, misutaaa, raalz, refrezh, s0und |
|            4 |     1670 | 2024-06-07 | Endpoint          | W   | 0.746      | 0.450        | 0.042 (0.014)    | 0.591 (0.198)    | -         |    12.26 | mantuu, misutaaa, raalz, refrezh, s0und |
|            3 |     1694 | 2024-06-07 | Nexus             | W   | 0.745      | 0.500        | 0.013 (0.005)    | 0.548 (0.204)    | -         |     7.71 | mantuu, misutaaa, raalz, refrezh, s0und |
|            2 |     1752 | 2024-06-06 | EYEBALLERS        | L   | 0.738      | -            | -                | -                | -         |   -11.61 | mantuu, misutaaa, raalz, refrezh, s0und |
|            1 |     1789 | 2024-06-05 | Rebels            | L   | 0.733      | -            | -                | -                | -         |    -9.18 | mantuu, misutaaa, raalz, refrezh, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,029.33)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-17 |      0.812 | $2,500.00      | $2,029.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
