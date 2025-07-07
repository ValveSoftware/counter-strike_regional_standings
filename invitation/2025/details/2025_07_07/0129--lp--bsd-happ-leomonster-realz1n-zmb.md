### Roster Details<br />
Team Name: LP<br />
Roster: bsd, happ, Leomonster, realz1n, zmb<br />
Global Rank: [129](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  704.0<br />
<br />
Final Rank Value (704.0) = Starting Rank Value (723.1) + Head To Head Adjustments (-19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.1
- 400 + ( ( 0.173 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 723.1


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
|           46 |       36 | 2025-06-25 | 2GAME           | L   | 1.000      | -            | -                | -                | -         |   -10.79 | bsd, happ, Leomonster, realz1n, zmb   |
|           45 |       39 | 2025-06-24 | Sharks          | W   | 1.000      | 0.371        | 0.059 (0.022)    | 0.688 (0.255)    | 0 (0.000) |    25.24 | bsd, happ, Leomonster, realz1n, zmb   |
|           44 |       50 | 2025-06-22 | Players         | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.228 (0.084)    | 0 (0.000) |    12.88 | bsd, happ, Leomonster, realz1n, zmb   |
|           43 |       86 | 2025-06-20 | JERSA           | W   | 1.000      | 0.371        | 0.007 (0.003)    | 0.192 (0.071)    | 0 (0.000) |    14.59 | bsd, happ, Leomonster, realz1n, zmb   |
|           42 |      103 | 2025-06-19 | ShindeN         | L   | 1.000      | -            | -                | -                | -         |   -14.38 | bsd, happ, Leomonster, realz1n, zmb   |
|           41 |      145 | 2025-06-16 | Dusty Roots     | W   | 1.000      | 0.371        | -                | 0.307 (0.114)    | 0 (0.000) |    13.16 | bsd, fokiu, happ, Leomonster, zmb     |
|           40 |      169 | 2025-06-15 | KRÜ             | L   | 1.000      | -            | -                | -                | -         |   -14.67 | bsd, fokiu, happ, Leomonster, zmb     |
|           39 |      514 | 2025-05-23 | ex-W7M          | L   | 0.902      | -            | -                | -                | -         |   -12.89 | bsd, happ, Leomonster, realz1n, zmb   |
|           38 |      633 | 2025-05-18 | MIBR Academy    | W   | 0.869      | -            | -                | -                | 0 (0.000) |    10.91 | bsd, happ, Leomonster, realz1n, zmb   |
|           37 |      649 | 2025-05-17 | Players         | W   | 0.862      | 0.333        | -                | 0.228 (0.065)    | 0 (0.000) |    12.00 | bsd, happ, Leomonster, realz1n, zmb   |
|           36 |      718 | 2025-05-14 | MAGICOS         | L   | 0.841      | -            | -                | -                | -         |   -14.93 | bsd, happ, Leomonster, realz1n, zmb   |
|           35 |      745 | 2025-05-13 | Flamengo        | W   | 0.835      | 0.333        | 0.005 (0.001)    | 0.402 (0.112)    | 0 (0.000) |    16.42 | bsd, happ, Leomonster, realz1n, zmb   |
|           34 |      749 | 2025-05-13 | Sharks          | L   | 0.834      | -            | -                | -                | -         |    -4.95 | bsd, happ, Leomonster, realz1n, zmb   |
|           33 |      942 | 2025-05-06 | Bounty Hunters  | L   | 0.788      | -            | -                | -                | -         |   -11.03 | Leomonster, r4ul, realz1n, remix, zmb |
|           32 |     1567 | 2025-04-08 | Floripa Stars   | W   | 0.602      | 0.450        | 0.001 (0.000)    | -                | 0 (0.000) |     8.42 | Leomonster, r4ul, realz1n, remix, zmb |
|           31 |     1571 | 2025-04-08 | Floripa Stars   | W   | 0.601      | 0.450        | 0.001 (0.000)    | -                | 0 (0.000) |     8.88 | Leomonster, r4ul, realz1n, remix, zmb |
|           30 |     1663 | 2025-04-04 | GameHunters     | L   | 0.574      | -            | -                | -                | -         |    -7.83 | Leomonster, r4ul, realz1n, remix, zmb |
|           29 |     1666 | 2025-04-04 | GameHunters     | W   | 0.574      | 0.450        | 0.005 (0.001)    | 0.340 (0.088)    | 0 (0.000) |    10.52 | Leomonster, r4ul, realz1n, remix, zmb |
|           28 |     1739 | 2025-04-02 | Bounty Hunters  | W   | 0.561      | 0.450        | 0.010 (0.002)    | 0.478 (0.121)    | -         |    10.36 | Leomonster, r4ul, realz1n, remix, zmb |
|           27 |     1743 | 2025-04-02 | Bounty Hunters  | L   | 0.561      | -            | -                | -                | -         |    -7.44 | Leomonster, r4ul, realz1n, remix, zmb |
|           26 |     1804 | 2025-04-01 | Keyd Stars      | L   | 0.555      | -            | -                | -                | -         |    -5.96 | Leomonster, r4ul, realz1n, remix, zmb |
|           25 |     1810 | 2025-04-01 | Keyd Stars      | L   | 0.555      | -            | -                | -                | -         |    -6.24 | Leomonster, r4ul, realz1n, remix, zmb |
|           24 |     1916 | 2025-03-29 | Bounty Hunters  | L   | 0.533      | -            | -                | -                | -         |    -7.04 | bsd, happ, Leomonster, realz1n, zmb   |
|           23 |     1975 | 2025-03-28 | X7              | W   | 0.527      | -            | -                | -                | -         |     2.89 | bsd, happ, Leomonster, realz1n, zmb   |
|           22 |     2018 | 2025-03-27 | Elevate         | L   | 0.522      | -            | -                | -                | -         |   -11.13 | bsd, happ, Leomonster, realz1n, zmb   |
|           21 |     2145 | 2025-03-25 | Sharks          | L   | 0.508      | -            | -                | -                | -         |    -2.89 | bnc, Leomonster, realz1n, remix, zmb  |
|           20 |     2146 | 2025-03-25 | Sharks          | L   | 0.508      | -            | -                | -                | -         |    -2.97 | bnc, Leomonster, realz1n, remix, zmb  |
|           19 |     2299 | 2025-03-19 | Yawara          | L   | 0.468      | -            | -                | -                | -         |    -7.68 | bnc, Leomonster, realz1n, remix, zmb  |
|           18 |     2300 | 2025-03-19 | Yawara          | L   | 0.468      | -            | -                | -                | -         |    -8.00 | bnc, Leomonster, realz1n, remix, zmb  |
|           17 |     2345 | 2025-03-18 | ODDIK           | L   | 0.461      | -            | -                | -                | -         |    -2.83 | bnc, Leomonster, realz1n, remix, zmb  |
|           16 |     2346 | 2025-03-18 | ODDIK           | L   | 0.461      | -            | -                | -                | -         |    -2.91 | bnc, Leomonster, realz1n, remix, zmb  |
|           15 |     2559 | 2025-03-09 | ex-W7M          | L   | 0.401      | -            | -                | -                | -         |    -6.86 | bnc, Leomonster, realz1n, remix, zmb  |
|           14 |     2606 | 2025-03-08 | BESTIA          | L   | 0.397      | -            | -                | -                | -         |    -5.26 | bnc, Leomonster, realz1n, remix, zmb  |
|           13 |     2609 | 2025-03-08 | BESTIA          | L   | 0.396      | -            | -                | -                | -         |    -5.44 | bnc, Leomonster, realz1n, remix, zmb  |
|           12 |     2690 | 2025-03-07 | MIBR Academy    | W   | 0.389      | -            | -                | -                | -         |     4.31 | bnc, Leomonster, realz1n, remix, zmb  |
|           11 |     2761 | 2025-03-06 | Floripa Stars   | W   | 0.382      | -            | -                | -                | -         |     4.95 | bnc, Leomonster, realz1n, remix, zmb  |
|           10 |     2831 | 2025-03-04 | ShindeN         | L   | 0.368      | -            | -                | -                | -         |    -6.52 | bnc, Leomonster, realz1n, remix, zmb  |
|            9 |     2858 | 2025-03-03 | paiN Academy    | W   | 0.361      | -            | -                | -                | -         |     2.50 | bnc, Leomonster, realz1n, remix, zmb  |
|            8 |     2913 | 2025-03-01 | Elevate         | L   | 0.347      | -            | -                | -                | -         |    -8.19 | bnc, Leomonster, realz1n, remix, zmb  |
|            7 |     2985 | 2025-02-26 | LaChampionsLiga | W   | 0.328      | -            | -                | -                | -         |     2.24 | bnc, Leomonster, realz1n, remix, zmb  |
|            6 |     3169 | 2025-02-20 | Legacy          | L   | 0.289      | -            | -                | -                | -         |    -0.18 | bnc, Leomonster, realz1n, remix, zmb  |
|            5 |     3280 | 2025-02-16 | ShindeN         | W   | 0.262      | -            | -                | -                | -         |     3.67 | bnc, Leomonster, realz1n, remix, zmb  |
|            4 |     3336 | 2025-02-14 | ODDIK           | L   | 0.249      | -            | -                | -                | -         |    -1.55 | bnc, Leomonster, realz1n, remix, zmb  |
|            3 |     3388 | 2025-02-12 | KRÜ             | W   | 0.234      | 0.371        | 0.005 (0.000)    | 0.423 (0.037)    | -         |     3.76 | bnc, Leomonster, realz1n, remix, zmb  |
|            2 |     3430 | 2025-02-10 | Bounty Hunters  | W   | 0.223      | 0.371        | 0.010 (0.001)    | 0.478 (0.039)    | -         |     3.79 | Leomonster, r4ul, realz1n, remix, zmb |
|            1 |     3574 | 2025-02-07 | Legacy          | L   | 0.202      | -            | -                | -                | -         |    -0.10 | bnc, Leomonster, realz1n, remix, zmb  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,821.50)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-26 |      1.000 | $750.00        | $750.00         |
| 2025-05-29 |      0.941 | $892.00        | $839.12         |
| 2025-05-11 |      0.822 | $1,500.00      | $1,232.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
