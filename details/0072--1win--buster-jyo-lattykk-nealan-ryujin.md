### Roster Details<br />
Team Name: 1WIN<br />
Roster: buster, Jyo, lattykk, neaLaN, Ryujin<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [72](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  969.9<br />
<br />
Final Rank Value (969.9) = Starting Rank Value (903.8) + Head To Head Adjustments (66.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.417[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.8
- 400 + ( ( 0.249 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 903.8


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
|           35 |        0 | 2024-07-24 | BC.Game         | W   | 1.000      | 0.435        | -                | 0.122 (0.053)    | 0 (0.000) |     5.03 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           34 |      901 | 2024-06-08 | Monte           | L   | 0.893      | -            | -                | -                | -         |   -13.57 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           33 |      908 | 2024-06-08 | Quixal          | W   | 0.893      | -            | -                | -                | 0 (0.000) |     1.05 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           32 |      916 | 2024-06-08 | AMKAL           | L   | 0.892      | -            | -                | -                | -         |    -7.08 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           31 |     1027 | 2024-06-06 | FAVBET          | L   | 0.879      | -            | -                | -                | -         |   -20.27 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           30 |     1208 | 2024-06-01 | Insilio         | L   | 0.846      | -            | -                | -                | -         |   -15.19 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           29 |     1266 | 2024-05-30 | V1dar           | W   | 0.833      | -            | -                | -                | 0 (0.000) |     1.86 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           28 |     1353 | 2024-05-26 | 9 Pandas        | L   | 0.805      | -            | -                | -                | -         |   -10.64 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           27 |     1374 | 2024-05-25 | FURIA           | W   | 0.799      | 0.435        | 0.355 (0.123)    | 0.563 (0.195)    | 0 (0.000) |    24.50 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           26 |     1402 | 2024-05-23 | ECSTATIC        | W   | 0.787      | -            | -                | -                | 0 (0.000) |     0.81 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           25 |     1581 | 2024-05-18 | SINNERS         | W   | 0.753      | 0.435        | 0.048 (0.016)    | 0.769 (0.252)    | 0 (0.000) |    12.75 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           24 |     1655 | 2024-05-16 | Zero Tenacity   | W   | 0.739      | 0.435        | 0.173 (0.056)    | 1.000 (0.321)    | 0 (0.000) |    14.55 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           23 |     1779 | 2024-05-13 | Permitta        | W   | 0.720      | 0.435        | 0.032 (0.010)    | 0.790 (0.247)    | 0 (0.000) |     9.44 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           22 |     1880 | 2024-05-09 | Sashi           | L   | 0.692      | -            | -                | -                | -         |    -4.20 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           21 |     1904 | 2024-05-08 | Nemiga          | W   | 0.685      | 0.396        | 0.415 (0.113)    | 0.707 (0.192)    | 0 (0.000) |    17.33 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           20 |     1916 | 2024-05-07 | BLEED           | W   | 0.680      | 0.396        | 0.126 (0.034)    | 0.482 (0.130)    | 0 (0.000) |    15.19 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           19 |     1965 | 2024-05-05 | ex-Guild Eagles | W   | 0.665      | 0.396        | -                | 0.265 (0.070)    | -         |     8.51 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           18 |     2009 | 2024-05-02 | Soda            | W   | 0.646      | -            | -                | -                | -         |     1.00 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           17 |     2016 | 2024-05-02 | 500             | W   | 0.646      | -            | -                | -                | -         |     5.46 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           16 |     2080 | 2024-04-29 | ECLOT           | L   | 0.626      | -            | -                | -                | -         |    -4.73 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           15 |     2084 | 2024-04-29 | SINNERS         | L   | 0.625      | -            | -                | -                | -         |    -7.63 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           14 |     2097 | 2024-04-28 | Sangal          | L   | 0.620      | -            | -                | -                | -         |    -6.03 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           13 |     2129 | 2024-04-27 | Nemiga          | L   | 0.612      | -            | -                | -                | -         |    -3.72 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           12 |     2177 | 2024-04-25 | Permitta        | W   | 0.600      | 0.435        | 0.032 (0.008)    | 0.790 (0.206)    | -         |    10.20 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           11 |     2215 | 2024-04-23 | HAVU            | W   | 0.586      | -            | -                | -                | -         |     4.23 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|           10 |     2255 | 2024-04-21 | Nemiga          | L   | 0.572      | -            | -                | -                | -         |    -3.45 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            9 |     2276 | 2024-04-20 | Portugal        | W   | 0.567      | -            | -                | -                | -         |     4.09 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            8 |     2449 | 2024-04-16 | ENCE Academy    | W   | 0.539      | -            | -                | -                | -         |     5.03 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            7 |     2475 | 2024-04-15 | Lazer Cats      | W   | 0.531      | -            | -                | -                | -         |     1.70 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            6 |     2640 | 2024-04-09 | Aurora          | L   | 0.492      | -            | -                | -                | -         |    -0.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            5 |     2661 | 2024-04-08 | 9 Pandas        | W   | 0.487      | 0.143        | 0.105 (0.007)    | -                | -         |    10.37 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            4 |     2675 | 2024-04-08 | Aurora          | W   | 0.485      | 0.143        | 0.423 (0.029)    | 0.783 (0.054)    | -         |    14.97 | buster, Jyo, lattykk, neaLaN, Ryujin  |
|            3 |     3264 | 2024-03-11 | Insilio         | L   | 0.300      | -            | -                | -                | -         |    -4.56 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            2 |     3285 | 2024-03-10 | VP.Prodigy      | W   | 0.293      | 0.372        | 0.033 (0.004)    | -                | -         |     4.16 | buster, lattykk, neaLaN, oz1k, Ryujin |
|            1 |     3413 | 2024-03-05 | ARCRED          | L   | 0.261      | -            | -                | -                | -         |    -4.65 | buster, lattykk, neaLaN, oz1k, Ryujin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,566.99)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.806 | $5,000.00      | $4,031.97       |
| 2024-05-09 |      0.692 | $8,000.00      | $5,535.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
