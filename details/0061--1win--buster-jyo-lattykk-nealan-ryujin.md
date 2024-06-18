### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [61](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  1054.0<br />
<br />
Final Rank Value (1054.0) = Starting Rank Value (975.6) + Head To Head Adjustments (78.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.450[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.6
- 400 + ( ( 0.283 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 975.6


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
|           34 |      313 | 2024-06-08 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -8.31 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           33 |      320 | 2024-06-08 | Quixal          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.75 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           32 |      328 | 2024-06-08 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |    -7.05 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           31 |      439 | 2024-06-06 | FAVBET          | L   | 1.000      | -            | -                | -                | -         |   -24.78 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           30 |      622 | 2024-06-01 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -19.21 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           29 |      680 | 2024-05-30 | V1dar           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.53 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           28 |      767 | 2024-05-26 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -13.69 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |      788 | 2024-05-25 | FURIA           | W   | 1.000      | 0.435        | 0.245 (0.106)    | 0.521 (0.227)    | 0 (0.000) |    28.54 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |      816 | 2024-05-23 | ECSTATIC        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.62 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |      995 | 2024-05-18 | SINNERS         | W   | 0.995      | 0.435        | 0.045 (0.020)    | 0.782 (0.338)    | 0 (0.000) |    14.40 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |     1069 | 2024-05-16 | Zero Tenacity   | W   | 0.981      | 0.435        | 0.153 (0.065)    | 1.000 (0.426)    | 0 (0.000) |    16.46 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |     1193 | 2024-05-13 | Permitta        | W   | 0.963      | 0.435        | 0.039 (0.016)    | 0.885 (0.370)    | 0 (0.000) |    10.15 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |     1294 | 2024-05-09 | Sashi           | L   | 0.934      | -            | -                | -                | -         |    -6.34 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |     1318 | 2024-05-08 | Nemiga          | W   | 0.927      | 0.396        | 0.486 (0.179)    | 0.694 (0.255)    | 0 (0.000) |    23.19 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |     1330 | 2024-05-07 | BLEED           | W   | 0.922      | 0.396        | 0.347 (0.127)    | 0.946 (0.346)    | 0 (0.000) |    24.61 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |     1379 | 2024-05-05 | ex-Guild Eagles | W   | 0.907      | 0.396        | -                | 0.391 (0.140)    | 0 (0.000) |    11.80 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |     1423 | 2024-05-02 | Soda            | W   | 0.889      | -            | -                | -                | -         |     0.93 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |     1430 | 2024-05-02 | 500             | W   | 0.888      | 0.396        | -                | 0.292 (0.103)    | -         |     7.19 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |     1494 | 2024-04-29 | ECLOT           | L   | 0.869      | -            | -                | -                | -         |    -7.31 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |     1498 | 2024-04-29 | SINNERS         | L   | 0.868      | -            | -                | -                | -         |   -12.11 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |     1511 | 2024-04-28 | Sangal          | L   | 0.862      | -            | -                | -                | -         |    -9.73 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |     1543 | 2024-04-27 | Nemiga          | L   | 0.855      | -            | -                | -                | -         |    -5.06 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |     1591 | 2024-04-25 | Permitta        | W   | 0.842      | 0.435        | 0.039 (0.014)    | 0.885 (0.324)    | -         |    12.64 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |     1629 | 2024-04-23 | HAVU            | W   | 0.829      | -            | -                | -                | -         |     4.86 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |     1669 | 2024-04-21 | Nemiga          | L   | 0.814      | -            | -                | -                | -         |    -4.87 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |     1690 | 2024-04-20 | esmagaB         | W   | 0.809      | -            | -                | -                | -         |     5.32 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     1863 | 2024-04-16 | ENCE Academy    | W   | 0.782      | -            | -                | -                | -         |     6.82 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     1889 | 2024-04-15 | Lazer Cats      | W   | 0.773      | -            | -                | -                | -         |     1.42 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     2054 | 2024-04-09 | Aurora          | L   | 0.735      | -            | -                | -                | -         |    -0.73 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     2075 | 2024-04-08 | 9 Pandas        | W   | 0.729      | 0.143        | 0.114 (0.012)    | -                | -         |    16.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     2089 | 2024-04-08 | Aurora          | W   | 0.728      | 0.143        | 0.526 (0.055)    | -                | -         |    22.34 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     2679 | 2024-03-11 | Insilio         | L   | 0.542      | -            | -                | -                | -         |    -8.81 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     2700 | 2024-03-10 | VP.Prodigy      | W   | 0.535      | 0.372        | 0.033 (0.007)    | 0.518 (0.103)    | -         |     6.67 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     2828 | 2024-03-05 | ARCRED          | L   | 0.503      | -            | -                | -                | -         |   -10.24 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,475.09)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-09 |      0.934 | $8,000.00      | $7,475.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
