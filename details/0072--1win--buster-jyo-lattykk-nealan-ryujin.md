### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
Final Rank Value:  1011.6<br />
<br />
Final Rank Value (1011.6) = Starting Rank Value (951.3) + Head To Head Adjustments (60.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.3
- 400 + ( ( 0.257 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 951.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      613 | 2024-06-08 | Monte           | L   | 0.940      | -            | -                | -                | -         |   -14.55 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           33 |      620 | 2024-06-08 | Quixal          | W   | 0.940      | -            | -                | -                | 0 (0.000) |     0.86 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           32 |      628 | 2024-06-08 | AMKAL           | L   | 0.939      | -            | -                | -                | -         |    -7.63 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           31 |      739 | 2024-06-06 | FAVBET          | L   | 0.927      | -            | -                | -                | -         |   -21.78 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           30 |      920 | 2024-06-01 | Insilio         | L   | 0.893      | -            | -                | -                | -         |   -16.28 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           29 |      978 | 2024-05-30 | V1dar           | W   | 0.880      | -            | -                | -                | 0 (0.000) |     1.60 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           28 |     1065 | 2024-05-26 | 9 Pandas        | L   | 0.853      | -            | -                | -                | -         |   -11.21 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |     1086 | 2024-05-25 | FURIA           | W   | 0.846      | 0.435        | 0.253 (0.093)    | 0.483 (0.178)    | 0 (0.000) |    24.92 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |     1114 | 2024-05-23 | ECSTATIC        | W   | 0.834      | -            | -                | -                | 0 (0.000) |     0.65 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |     1293 | 2024-05-18 | SINNERS         | W   | 0.800      | 0.435        | 0.058 (0.020)    | 0.744 (0.259)    | 0 (0.000) |    13.39 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |     1367 | 2024-05-16 | Zero Tenacity   | W   | 0.786      | 0.435        | 0.154 (0.052)    | 1.000 (0.342)    | 0 (0.000) |    14.47 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |     1491 | 2024-05-13 | Permitta        | W   | 0.767      | 0.435        | 0.039 (0.013)    | 0.794 (0.265)    | 0 (0.000) |     9.38 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |     1592 | 2024-05-09 | Sashi           | L   | 0.739      | -            | -                | -                | -         |    -5.07 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |     1616 | 2024-05-08 | Nemiga          | W   | 0.732      | 0.396        | 0.498 (0.145)    | 0.725 (0.210)    | 0 (0.000) |    18.84 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |     1628 | 2024-05-07 | BLEED           | W   | 0.727      | 0.396        | 0.156 (0.045)    | 0.538 (0.155)    | 0 (0.000) |    16.58 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |     1677 | 2024-05-05 | ex-Guild Eagles | W   | 0.712      | 0.396        | -                | 0.298 (0.084)    | 0 (0.000) |     9.00 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |     1721 | 2024-05-02 | Soda            | W   | 0.694      | -            | -                | -                | -         |     0.82 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |     1728 | 2024-05-02 | 500             | W   | 0.693      | -            | -                | -                | -         |     5.42 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |     1792 | 2024-04-29 | ECLOT           | L   | 0.673      | -            | -                | -                | -         |    -4.77 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |     1796 | 2024-04-29 | SINNERS         | L   | 0.673      | -            | -                | -                | -         |    -8.21 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |     1809 | 2024-04-28 | Sangal          | L   | 0.667      | -            | -                | -                | -         |    -6.53 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |     1841 | 2024-04-27 | Nemiga          | L   | 0.659      | -            | -                | -                | -         |    -3.61 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |     1889 | 2024-04-25 | Permitta        | W   | 0.647      | 0.435        | 0.039 (0.011)    | 0.794 (0.223)    | -         |    10.44 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |     1927 | 2024-04-23 | HAVU            | W   | 0.633      | -            | -                | -                | -         |     4.25 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |     1967 | 2024-04-21 | Nemiga          | L   | 0.619      | -            | -                | -                | -         |    -3.32 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |     1988 | 2024-04-20 | Portugal        | W   | 0.614      | -            | -                | -                | -         |     4.18 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     2161 | 2024-04-16 | ENCE Academy    | W   | 0.586      | -            | -                | -                | -         |     5.25 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     2187 | 2024-04-15 | Lazer Cats      | W   | 0.578      | -            | -                | -                | -         |     1.52 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     2352 | 2024-04-09 | Aurora          | L   | 0.540      | -            | -                | -                | -         |    -0.38 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     2373 | 2024-04-08 | 9 Pandas        | W   | 0.534      | 0.143        | 0.126 (0.010)    | -                | -         |    11.68 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     2387 | 2024-04-08 | Aurora          | W   | 0.532      | 0.143        | 0.514 (0.039)    | 0.813 (0.062)    | -         |    16.46 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     2976 | 2024-03-11 | Insilio         | L   | 0.347      | -            | -                | -                | -         |    -5.34 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     2997 | 2024-03-10 | VP.Prodigy      | W   | 0.340      | 0.372        | 0.039 (0.005)    | 0.498 (0.063)    | -         |     4.82 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     3125 | 2024-03-05 | ARCRED          | L   | 0.308      | -            | -                | -                | -         |    -5.50 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,180.92)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.854 | $5,000.00      | $4,268.10       |
| 2024-05-09 |      0.739 | $8,000.00      | $5,912.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
