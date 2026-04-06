### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: Cliqq, Matz, millert, Schwarz, teme<br />
Global Rank: [134](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  945.0<br />
<br />
Final Rank Value (945.0) = Starting Rank Value (817.8) + Head To Head Adjustments (127.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.275[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.8
- 400 + ( ( 0.214 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 817.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      438 | 2026-03-28 | rottweilers       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.68 | Cliqq, HENU, millert, Schwarz, teme  |
|           62 |      520 | 2026-03-26 | Bebop             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.51 | Cliqq, HENU, millert, Schwarz, teme  |
|           61 |      564 | 2026-03-25 | EC BANGA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.40 | Cliqq, Matz, millert, Schwarz, teme  |
|           60 |      857 | 2026-03-20 | TNC               | L   | 1.000      | -            | -                | -                | -         |   -11.82 | Cliqq, Matz, millert, Schwarz, teme  |
|           59 |      909 | 2026-03-19 | BIG Academy       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.07 | Cliqq, Matz, millert, Schwarz, teme  |
|           58 |      941 | 2026-03-18 | MASONIC           | W   | 1.000      | 0.384        | -                | 0.519 (0.200)    | 0 (0.000) |    17.79 | Cliqq, Matz, millert, Schwarz, teme  |
|           57 |     1030 | 2026-03-16 | Dziuseppe         | L   | 1.000      | -            | -                | -                | -         |   -28.30 | Cliqq, Matz, millert, Schwarz, teme  |
|           56 |     1163 | 2026-03-13 | Bebop             | L   | 1.000      | -            | -                | -                | -         |   -14.39 | Cliqq, Matz, millert, Schwarz, teme  |
|           55 |     1219 | 2026-03-12 | Lilmix            | L   | 1.000      | -            | -                | -                | -         |   -17.62 | Cliqq, Matz, millert, Schwarz, teme  |
|           54 |     1242 | 2026-03-12 | Metizport         | L   | 1.000      | -            | -                | -                | -         |    -9.82 | Cliqq, Matz, millert, Schwarz, teme  |
|           53 |     1374 | 2026-03-09 | Ursa              | W   | 1.000      | 0.384        | 0.020 (0.008)    | 0.700 (0.269)    | 0 (0.000) |    17.41 | Cliqq, Matz, millert, Schwarz, teme  |
|           52 |     1543 | 2026-03-06 | NOVAQ             | L   | 0.993      | -            | -                | -                | -         |   -10.21 | Cliqq, Matz, millert, Schwarz, teme  |
|           51 |     1611 | 2026-03-05 | TNC               | W   | 0.985      | 0.384        | 0.025 (0.010)    | 1.000 (0.379)    | 0 (0.000) |    21.27 | Cliqq, Matz, millert, Schwarz, teme  |
|           50 |     1649 | 2026-03-04 | Sashi             | L   | 0.980      | -            | -                | -                | -         |    -5.01 | Cliqq, Matz, millert, Schwarz, teme  |
|           49 |     1743 | 2026-03-02 | Omega             | W   | 0.966      | 0.384        | 0.025 (0.009)    | 0.588 (0.218)    | -         |    23.07 | Cliqq, Matz, millert, Schwarz, teme  |
|           48 |     1791 | 2026-03-01 | WW                | W   | 0.959      | 0.371        | 0.034 (0.012)    | 0.864 (0.307)    | -         |    26.91 | Cliqq, Matz, millert, Schwarz, teme  |
|           47 |     1862 | 2026-02-27 | INFINITE          | L   | 0.947      | -            | -                | -                | -         |   -19.85 | Cliqq, Matz, millert, Schwarz, teme  |
|           46 |     1876 | 2026-02-27 | MASONIC           | L   | 0.946      | -            | -                | -                | -         |    -9.78 | Cliqq, Matz, millert, Schwarz, teme  |
|           45 |     1881 | 2026-02-27 | Lazer Cats        | W   | 0.945      | 0.371        | 0.011 (0.004)    | -                | -         |    20.23 | Cliqq, Matz, millert, Schwarz, teme  |
|           44 |     1952 | 2026-02-26 | CSDIILIT          | W   | 0.939      | 0.384        | -                | 0.654 (0.236)    | -         |    11.25 | Cliqq, Matz, millert, Schwarz, teme  |
|           43 |     1996 | 2026-02-25 | Aurora Young Blud | L   | 0.932      | -            | -                | -                | -         |   -24.05 | Cliqq, Matz, millert, Schwarz, teme  |
|           42 |     2062 | 2026-02-23 | TNC               | W   | 0.921      | 0.384        | 0.025 (0.009)    | 1.000 (0.354)    | -         |    21.75 | Cliqq, Matz, millert, Schwarz, teme  |
|           41 |     2087 | 2026-02-23 | UNiTY             | L   | 0.919      | -            | -                | -                | -         |   -11.09 | Cliqq, Matz, millert, Schwarz, teme  |
|           40 |     2252 | 2026-02-20 | home              | W   | 0.899      | -            | -                | -                | -         |     6.20 | Cliqq, HENU, millert, Schwarz, teme  |
|           39 |     2267 | 2026-02-20 | home              | W   | 0.898      | -            | -                | -                | -         |     6.55 | Cliqq, HENU, millert, Schwarz, teme  |
|           38 |     2334 | 2026-02-18 | BASEMENT BOYS     | L   | 0.888      | -            | -                | -                | -         |   -16.72 | Cliqq, Matz, millert, Schwarz, teme  |
|           37 |     2353 | 2026-02-18 | ARCRED            | W   | 0.886      | 0.384        | 0.016 (0.006)    | 0.704 (0.240)    | -         |    24.64 | Cliqq, HENU, millert, Schwarz, teme  |
|           36 |     2401 | 2026-02-17 | Rebels            | L   | 0.881      | -            | -                | -                | -         |    -5.09 | Cliqq, HENU, millert, Schwarz, teme  |
|           35 |     2417 | 2026-02-17 | Lazer Cats        | L   | 0.880      | -            | -                | -                | -         |    -9.22 | Cliqq, Matz, millert, Schwarz, teme  |
|           34 |     2458 | 2026-02-16 | OlyBet            | W   | 0.873      | -            | -                | -                | -         |    20.17 | Cliqq, HENU, millert, Schwarz, teme  |
|           33 |     2470 | 2026-02-16 | VP.Prodigy        | W   | 0.872      | -            | -                | -                | -         |    20.69 | Cliqq, Matz, millert, Schwarz, teme  |
|           32 |     2515 | 2026-02-15 | BASEMENT BOYS     | W   | 0.867      | -            | -                | -                | -         |    12.91 | Cliqq, HENU, millert, Schwarz, teme  |
|           31 |     2534 | 2026-02-15 | CSDIILIT          | W   | 0.865      | 0.384        | -                | 0.654 (0.217)    | -         |    10.71 | Cliqq, Matz, millert, Schwarz, teme  |
|           30 |     2555 | 2026-02-14 | MOUZ NXT          | L   | 0.861      | -            | -                | -                | -         |    -3.62 | Cliqq, HENU, millert, Schwarz, teme  |
|           29 |     2614 | 2026-02-13 | TNC               | W   | 0.855      | 0.384        | 0.025 (0.008)    | 1.000 (0.328)    | -         |    20.28 | Cliqq, HENU, millert, Schwarz, teme  |
|           28 |     4158 | 2025-11-30 | BASEMENT BOYS     | L   | 0.353      | -            | -                | -                | -         |    -5.37 | Blick, Cliqq, millert, Schwarz, teme |
|           27 |     4233 | 2025-11-28 | HAVU              | L   | 0.340      | -            | -                | -                | -         |    -1.95 | Blick, Cliqq, millert, Schwarz, teme |
|           26 |     4251 | 2025-11-27 | The Last Resort   | W   | 0.333      | 0.384        | 0.015 (0.002)    | -                | -         |     6.75 | Blick, Cliqq, millert, Schwarz, teme |
|           25 |     4260 | 2025-11-26 | BASEMENT BOYS     | L   | 0.328      | -            | -                | -                | -         |    -5.00 | Blick, Cliqq, millert, Schwarz, teme |
|           24 |     4324 | 2025-11-24 | MOUZ NXT          | L   | 0.313      | -            | -                | -                | -         |    -0.68 | Blick, Cliqq, millert, Schwarz, teme |
|           23 |     4346 | 2025-11-23 | smuuttikusilkki   | W   | 0.307      | -            | -                | -                | -         |     1.43 | Blick, Cliqq, millert, Schwarz, teme |
|           22 |     4365 | 2025-11-22 | HAVU              | L   | 0.301      | -            | -                | -                | -         |    -1.57 | Blick, Cliqq, millert, Schwarz, teme |
|           21 |     4386 | 2025-11-22 | The Last Resort   | W   | 0.299      | 0.344        | 0.015 (0.002)    | -                | -         |     6.32 | Blick, Cliqq, millert, Schwarz, teme |
|           20 |     4405 | 2025-11-21 | AaB               | L   | 0.294      | -            | -                | -                | -         |    -6.42 | Blick, Cliqq, millert, Schwarz, teme |
|           19 |     4443 | 2025-11-20 | Square Sausages   | W   | 0.288      | -            | -                | -                | -         |     0.78 | Blick, Cliqq, millert, Schwarz, teme |
|           18 |     4811 | 2025-11-07 | JiJieHao          | L   | 0.200      | -            | -                | -                | -         |    -0.82 | Blick, Cliqq, millert, Schwarz, teme |
|           17 |     4904 | 2025-11-06 | ARCRED            | W   | 0.194      | -            | -                | -                | -         |     5.78 | Blick, Cliqq, millert, Schwarz, teme |
|           16 |     4991 | 2025-11-03 | Nuclear TigeRES   | L   | 0.173      | -            | -                | -                | -         |    -0.23 | Blick, Cliqq, millert, Schwarz, teme |
|           15 |     5019 | 2025-11-02 | Oramond           | L   | 0.165      | -            | -                | -                | -         |    -2.04 | Blick, Cliqq, millert, Schwarz, teme |
|           14 |     5079 | 2025-10-31 | Hashiras          | W   | 0.151      | -            | -                | -                | -         |     2.60 | Blick, Cliqq, millert, Schwarz, teme |
|           13 |     5088 | 2025-10-30 | Eternal Fire      | W   | 0.147      | -            | -                | -                | -         |     1.35 | Blick, Cliqq, millert, Schwarz, teme |
|           12 |     5100 | 2025-10-29 | GenOne            | L   | 0.142      | -            | -                | -                | -         |    -1.55 | Blick, Cliqq, millert, Schwarz, teme |
|           11 |     5105 | 2025-10-29 | MASONIC           | L   | 0.141      | -            | -                | -                | -         |    -0.56 | Blick, Cliqq, millert, Schwarz, teme |
|           10 |     5151 | 2025-10-28 | Eternal Fire      | W   | 0.132      | -            | -                | -                | -         |     1.20 | Blick, Cliqq, millert, Schwarz, teme |
|            9 |     5172 | 2025-10-27 | Nemesis           | L   | 0.128      | -            | -                | -                | -         |    -0.11 | Blick, Cliqq, millert, Schwarz, teme |
|            8 |     5243 | 2025-10-26 | RUBY              | L   | 0.120      | -            | -                | -                | -         |    -2.71 | Blick, Cliqq, millert, Schwarz, teme |
|            7 |     5275 | 2025-10-25 | ALGO              | W   | 0.114      | -            | -                | -                | -         |     0.44 | Blick, Cliqq, millert, Schwarz, teme |
|            6 |     5390 | 2025-10-23 | Nuclear TigeRES   | L   | 0.101      | -            | -                | -                | -         |    -0.13 | Blick, Cliqq, millert, Schwarz, teme |
|            5 |     5422 | 2025-10-22 | NIP Impact        | W   | 0.094      | -            | -                | -                | -         |     1.18 | Blick, Cliqq, millert, Schwarz, teme |
|            4 |     5484 | 2025-10-18 | Universe          | L   | 0.068      | -            | -                | -                | -         |    -1.63 | Blick, Cliqq, millert, Schwarz, teme |
|            3 |     5495 | 2025-10-18 | TMVG              | W   | 0.066      | -            | -                | -                | 1 (0.066) |     0.41 | Blick, Cliqq, millert, Schwarz, teme |
|            2 |     5513 | 2025-10-17 | Universe          | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.45 | Blick, Cliqq, millert, Schwarz, teme |
|            1 |     5525 | 2025-10-17 | CSDIILIT          | W   | 0.059      | -            | -                | -                | 1 (0.059) |     0.46 | Blick, Cliqq, millert, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($376.05)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-28 |      0.341 | $871.00        | $297.11         |
| 2025-10-18 |      0.068 | $1,162.00      | $78.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
