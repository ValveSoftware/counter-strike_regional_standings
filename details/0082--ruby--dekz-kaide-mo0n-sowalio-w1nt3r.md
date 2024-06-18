### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0N, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  937.6<br />
<br />
Final Rank Value (937.6) = Starting Rank Value (979.0) + Head To Head Adjustments (-41.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 979.0
- 400 + ( ( 0.285 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 979.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       23 | 2024-06-16 | ARCRED          | W   | 1.000      | 0.450        | 0.048 (0.021)    | 0.346 (0.156)    | 0 (0.000) |    18.22 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           46 |       45 | 2024-06-15 | System5         | L   | 1.000      | -            | -                | -                | -         |   -27.63 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           45 |       57 | 2024-06-15 | Spirit Academy  | W   | 1.000      | 0.450        | 0.017 (0.007)    | -                | 0 (0.000) |     8.26 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           44 |       89 | 2024-06-14 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -8.68 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           43 |       97 | 2024-06-14 | LEON            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.45 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           42 |      240 | 2024-06-09 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -11.37 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           41 |      385 | 2024-06-07 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -13.09 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           40 |      494 | 2024-06-05 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |   -16.97 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           39 |      512 | 2024-06-05 | Rare Atom       | L   | 1.000      | -            | -                | -                | -         |   -27.59 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           38 |      563 | 2024-06-03 | Insilio         | W   | 1.000      | 0.372        | 0.032 (0.012)    | 0.578 (0.215)    | 0 (0.000) |    16.77 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           37 |      572 | 2024-06-03 | HAVU            | L   | 1.000      | -            | -                | -                | -         |   -24.66 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           36 |      610 | 2024-06-01 | Zero Tenacity   | W   | 1.000      | 0.372        | 0.153 (0.057)    | 1.000 (0.372)    | 0 (0.000) |    21.88 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           35 |      674 | 2024-05-30 | esmagaB         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.59 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           34 |      684 | 2024-05-30 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -1.72 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           33 |      728 | 2024-05-28 | MOUZ NXT        | L   | 1.000      | -            | -                | -                | -         |   -10.64 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           32 |      768 | 2024-05-26 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -10.03 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           31 |      779 | 2024-05-25 | B8              | L   | 1.000      | -            | -                | -                | -         |    -6.16 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           30 |      819 | 2024-05-23 | Nexus           | W   | 1.000      | 0.435        | -                | 0.397 (0.173)    | 0 (0.000) |     8.12 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           29 |      909 | 2024-05-21 | Endpoint        | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.490 (0.213)    | 0 (0.000) |    13.93 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           28 |     1248 | 2024-05-11 | 9 Pandas        | L   | 0.949      | -            | -                | -                | -         |    -9.83 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           27 |     1274 | 2024-05-10 | Nemiga          | W   | 0.941      | 0.435        | 0.486 (0.199)    | 0.694 (0.284)    | 0 (0.000) |    24.34 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           26 |     1331 | 2024-05-07 | Insilio         | W   | 0.922      | 0.435        | 0.032 (0.013)    | 0.578 (0.232)    | 0 (0.000) |    15.99 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           25 |     1374 | 2024-05-05 | HAVU            | W   | 0.908      | 0.435        | -                | 0.222 (0.088)    | -         |     6.75 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           24 |     1406 | 2024-05-03 | V1dar           | W   | 0.894      | -            | -                | -                | -         |     2.79 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           23 |     1461 | 2024-05-01 | GL Academy      | L   | 0.880      | -            | -                | -                | -         |   -19.61 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           22 |     1503 | 2024-04-29 | Permitta        | L   | 0.867      | -            | -                | -                | -         |   -13.64 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           21 |     1534 | 2024-04-27 | Astralis Talent | W   | 0.856      | -            | -                | -                | -         |     2.93 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           20 |     1696 | 2024-04-20 | Zero Tenacity   | L   | 0.808      | -            | -                | -                | -         |   -10.71 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           19 |     1776 | 2024-04-18 | Sashi           | L   | 0.796      | -            | -                | -                | -         |    -8.71 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           18 |     1785 | 2024-04-18 | Aurora          | W   | 0.795      | 0.143        | 0.526 (0.060)    | 0.874 (0.099)    | -         |    24.27 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           17 |     1792 | 2024-04-18 | NOM             | W   | 0.795      | -            | -                | -                | -         |     2.24 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           16 |     1839 | 2024-04-17 | JANO            | W   | 0.787      | -            | -                | -                | -         |     4.40 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           15 |     2484 | 2024-03-19 | Sashi           | L   | 0.596      | -            | -                | -                | -         |    -6.36 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           14 |     2541 | 2024-03-16 | Permitta        | W   | 0.576      | 0.372        | 0.039 (0.008)    | 0.885 (0.190)    | -         |     9.91 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           13 |     2677 | 2024-03-11 | Nexus           | L   | 0.542      | -            | -                | -                | -         |   -11.03 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           12 |     2713 | 2024-03-09 | Spirit Academy  | W   | 0.530      | -            | -                | -                | -         |     3.03 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           11 |     2740 | 2024-03-08 | ARCRED          | W   | 0.523      | 0.372        | 0.048 (0.009)    | -                | -         |     5.93 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|           10 |     2970 | 2024-02-27 | Spirit Academy  | L   | 0.456      | -            | -                | -                | -         |   -12.13 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            9 |     2974 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.456      | -            | -                | -                | -         |     7.97 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            8 |     3375 | 2024-02-09 | FORZE           | L   | 0.335      | -            | -                | -                | -         |    -5.26 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            7 |     3389 | 2024-02-08 | AMKAL           | L   | 0.330      | -            | -                | -                | -         |    -2.41 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            6 |     3391 | 2024-02-08 | ex-Guild Eagles | W   | 0.329      | -            | -                | -                | -         |     4.58 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            5 |     3559 | 2024-01-30 | Nemiga          | L   | 0.270      | -            | -                | -                | -         |    -1.31 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            4 |     3564 | 2024-01-30 | Permitta        | W   | 0.269      | -            | -                | -                | -         |     3.96 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            3 |     3571 | 2024-01-30 | The Suspect     | W   | 0.269      | -            | -                | -                | -         |     2.50 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            2 |     3927 | 2024-01-17 | AMKAL           | L   | 0.183      | -            | -                | -                | -         |    -1.38 | dekz, Kaide, mo0N, sowalio, w1nt3r           |
|            1 |     3992 | 2024-01-16 | Passion UA      | L   | 0.176      | -            | -                | -                | -         |    -2.31 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,483.48)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-10 |      1.000 | $3,300.00      | $3,300.00       |
| 2024-05-12 |      0.956 | $2,000.00      | $1,911.94       |
| 2024-03-25 |      0.636 | $2,000.00      | $1,271.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
