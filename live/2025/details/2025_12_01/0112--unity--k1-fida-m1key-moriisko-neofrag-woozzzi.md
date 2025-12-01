### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [112](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [76]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  880.9<br />
<br />
Final Rank Value (880.9) = Starting Rank Value (911.9) + Head To Head Adjustments (-31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.370[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 911.9
- 400 + ( ( 0.269 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 911.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       35 | 2025-11-29 | BRUTE            | W   | 1.000      | 0.449        | 0.008 (0.003)    | 0.092 (0.041)    | 1 (1.000) |     9.01 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           37 |       55 | 2025-11-28 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -2.92 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           36 |      201 | 2025-11-21 | FUT              | L   | 1.000      | -            | -                | -                | -         |    -1.53 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           35 |      211 | 2025-11-21 | ECSTATIC         | L   | 1.000      | -            | -                | -                | -         |    -3.08 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           34 |      243 | 2025-11-20 | Haemus           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.53 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           33 |      250 | 2025-11-20 | Acend            | W   | 1.000      | 0.339        | -                | 0.268 (0.091)    | 1 (1.000) |    18.71 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           32 |      950 | 2025-10-27 | NOVAQ            | L   | 0.965      | -            | -                | -                | -         |   -13.09 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           31 |     1156 | 2025-10-23 | ALLINNERS        | W   | 0.940      | 0.384        | 0.005 (0.002)    | 0.373 (0.135)    | 0 (0.000) |    13.45 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           30 |     1188 | 2025-10-22 | HubaBuba         | W   | 0.932      | 0.384        | 0.001 (0.000)    | 0.149 (0.053)    | 0 (0.000) |     7.08 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           29 |     1312 | 2025-10-16 | 1win             | L   | 0.892      | -            | -                | -                | -         |    -7.63 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           28 |     1357 | 2025-10-15 | Nexus            | W   | 0.885      | 0.384        | 0.003 (0.001)    | 0.840 (0.286)    | 0 (0.000) |    19.00 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           27 |     1409 | 2025-10-13 | FAVBET           | L   | 0.872      | -            | -                | -                | -         |    -6.67 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           26 |     1522 | 2025-10-09 | Tricked          | W   | 0.846      | 0.384        | -                | 0.245 (0.080)    | 0 (0.000) |    10.49 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           25 |     1708 | 2025-10-06 | Betera           | L   | 0.824      | -            | -                | -                | -         |    -6.50 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           24 |     1840 | 2025-10-03 | kONO             | L   | 0.806      | -            | -                | -                | -         |   -12.58 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           23 |     1882 | 2025-10-02 | KHAN             | W   | 0.798      | 0.344        | 0.001 (0.000)    | 0.384 (0.105)    | 0 (0.000) |    12.28 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           22 |     2013 | 2025-09-28 | BRUTE            | L   | 0.773      | -            | -                | -                | -         |   -16.69 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           21 |     2039 | 2025-09-28 | 1win             | L   | 0.771      | -            | -                | -                | -         |    -9.39 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           20 |     2085 | 2025-09-27 | ECLOT            | L   | 0.766      | -            | -                | -                | -         |    -4.48 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           19 |     2174 | 2025-09-25 | Leo              | L   | 0.753      | -            | -                | -                | -         |   -12.38 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           18 |     2204 | 2025-09-24 | Dark Tigers      | W   | 0.747      | -            | -                | -                | 0 (0.000) |     1.48 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           17 |     2218 | 2025-09-24 | NIP Impact       | W   | 0.744      | 0.384        | 0.046 (0.013)    | 0.330 (0.094)    | -         |     8.45 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           16 |     2405 | 2025-09-17 | KHAN             | L   | 0.699      | -            | -                | -                | -         |   -14.36 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           15 |     2430 | 2025-09-16 | Wildcard Academy | W   | 0.692      | 0.384        | 0.001 (0.000)    | -                | -         |     2.50 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           14 |     2442 | 2025-09-15 | m1x              | L   | 0.687      | -            | -                | -                | -         |   -17.78 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           13 |     2492 | 2025-09-14 | SINNERS          | L   | 0.679      | -            | -                | -                | -         |    -2.64 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           12 |     2526 | 2025-09-13 | ECLOT            | L   | 0.674      | -            | -                | -                | -         |    -5.91 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           11 |     2582 | 2025-09-12 | GLORE            | W   | 0.667      | 0.327        | 0.001 (0.000)    | -                | 1 (0.667) |     2.03 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           10 |     3263 | 2025-08-17 | VP.Prodigy       | L   | 0.493      | -            | -                | -                | -         |    -8.22 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|            9 |     3393 | 2025-08-14 | SKYFURY          | W   | 0.473      | -            | -                | -                | -         |     1.56 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|            8 |     3501 | 2025-08-12 | MOUZ NXT         | W   | 0.459      | 0.278        | 0.003 (0.000)    | 0.328 (0.042)    | -         |     6.36 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|            7 |     4372 | 2025-06-19 | FAVBET           | L   | 0.100      | -            | -                | -                | -         |    -1.45 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            6 |     4392 | 2025-06-18 | RUBY             | W   | 0.092      | 0.435        | 0.049 (0.002)    | 1.000 (0.040)    | -         |     1.80 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            5 |     4445 | 2025-06-15 | NOVAQ            | L   | 0.072      | -            | -                | -                | -         |    -1.02 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            4 |     4510 | 2025-06-13 | CPH Wolves       | L   | 0.060      | -            | -                | -                | -         |    -1.07 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            3 |     4536 | 2025-06-12 | ComeBack         | W   | 0.054      | -            | -                | -                | -         |     0.36 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            2 |     4633 | 2025-06-07 | Preasy           | L   | 0.019      | -            | -                | -                | -         |    -0.54 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            1 |     4641 | 2025-06-06 | Leo              | L   | 0.013      | -            | -                | -                | -         |    -0.23 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,932.39)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      1.000 | $4,759.00      | $4,759.00       |
| 2025-09-14 |      0.680 | $1,182.00      | $803.90         |
| 2025-08-17 |      0.493 | $750.00        | $369.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
