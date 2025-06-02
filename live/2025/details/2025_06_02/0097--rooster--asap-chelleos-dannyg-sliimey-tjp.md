### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, sliimey, TjP<br />
Global Rank: [97](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  812.3<br />
<br />
Final Rank Value (812.3) = Starting Rank Value (799.4) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.4
- 400 + ( ( 0.218 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 799.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      543 | 2025-05-04 | Mindfreak            | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.211 (0.070)    | 0 (0.000) |    13.20 | asap, chelleos, DannyG, sliimey, TjP |
|           35 |      592 | 2025-05-02 | Housebets            | W   | 0.996      | 0.333        | 0.009 (0.003)    | 0.255 (0.084)    | 0 (0.000) |    15.31 | asap, chelleos, DannyG, sliimey, TjP |
|           34 |      924 | 2025-04-16 | ex-TALON             | L   | 0.889      | -            | -                | -                | -         |   -12.59 | asap, chelleos, DannyG, sliimey, TjP |
|           33 |      948 | 2025-04-15 | FlyQuest             | L   | 0.882      | -            | -                | -                | -         |    -3.09 | asap, chelleos, DannyG, sliimey, TjP |
|           32 |     1063 | 2025-04-09 | Only One Word        | L   | 0.843      | -            | -                | -                | -         |   -18.27 | asap, chelleos, DannyG, sliimey, TjP |
|           31 |     1069 | 2025-04-09 | Only One Word        | W   | 0.842      | 0.333        | 0.002 (0.001)    | 0.225 (0.063)    | 0 (0.000) |     8.08 | asap, chelleos, DannyG, sliimey, TjP |
|           30 |     1305 | 2025-04-02 | KZG                  | W   | 0.796      | 0.333        | -                | 0.124 (0.033)    | 0 (0.000) |     5.38 | asap, chelleos, DANZ, sliimey, TjP   |
|           29 |     1309 | 2025-04-02 | KZG                  | W   | 0.796      | 0.333        | -                | 0.124 (0.033)    | 0 (0.000) |     5.64 | asap, chelleos, DANZ, sliimey, TjP   |
|           28 |     1395 | 2025-03-30 | SemperFi             | L   | 0.776      | -            | -                | -                | -         |    -8.30 | asap, chelleos, DannyG, sliimey, TjP |
|           27 |     1399 | 2025-03-30 | ex-TALON             | W   | 0.775      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |    13.60 | asap, chelleos, DannyG, sliimey, TjP |
|           26 |     1459 | 2025-03-29 | SemperFi             | L   | 0.769      | -            | -                | -                | -         |    -8.32 | asap, chelleos, DannyG, sliimey, TjP |
|           25 |     1521 | 2025-03-28 | Housebets            | W   | 0.763      | 0.143        | 0.009 (0.001)    | 0.255 (0.028)    | 0 (0.000) |    11.56 | asap, chelleos, DannyG, sliimey, TjP |
|           24 |     1597 | 2025-03-27 | KZG                  | W   | 0.756      | -            | -                | -                | -         |     6.13 | asap, chelleos, DannyG, sliimey, TjP |
|           23 |     1728 | 2025-03-23 | SemperFi             | L   | 0.728      | -            | -                | -                | -         |    -8.51 | asap, chelleos, DannyG, sliimey, TjP |
|           22 |     1758 | 2025-03-22 | ex-TALON             | L   | 0.723      | -            | -                | -                | -         |   -10.33 | asap, chelleos, DannyG, sliimey, TjP |
|           21 |     1760 | 2025-03-21 | Housebets            | W   | 0.721      | 0.345        | 0.009 (0.002)    | 0.255 (0.063)    | 1 (0.721) |    10.83 | asap, chelleos, DannyG, sliimey, TjP |
|           20 |     1795 | 2025-03-20 | Only One Word        | W   | 0.709      | 0.345        | 0.002 (0.001)    | 0.225 (0.055)    | 1 (0.709) |    10.13 | asap, chelleos, DannyG, sliimey, TjP |
|           19 |     1796 | 2025-03-20 | SemperFi             | L   | 0.708      | -            | -                | -                | -         |    -8.30 | asap, chelleos, DannyG, sliimey, TjP |
|           18 |     1798 | 2025-03-19 | Justice For Tomorrow | W   | 0.707      | -            | -                | -                | 1 (0.707) |     5.97 | asap, chelleos, DannyG, sliimey, TjP |
|           17 |     1911 | 2025-03-17 | Housebets            | L   | 0.689      | -            | -                | -                | -         |   -12.01 | asap, chelleos, DannyG, sliimey, TjP |
|           16 |     1912 | 2025-03-17 | Housebets            | W   | 0.689      | 0.333        | 0.009 (0.002)    | 0.255 (0.058)    | -         |     9.84 | asap, chelleos, DannyG, sliimey, TjP |
|           15 |     2537 | 2025-02-26 | Justice For Tomorrow | W   | 0.563      | -            | -                | -                | -         |     4.45 | asap, chelleos, DANZ, sliimey, TjP   |
|           14 |     2540 | 2025-02-26 | Justice For Tomorrow | W   | 0.563      | -            | -                | -                | -         |     4.62 | asap, chelleos, DANZ, sliimey, TjP   |
|           13 |     2589 | 2025-02-24 | MANTRA               | L   | 0.553      | -            | -                | -                | -         |   -12.43 | asap, chelleos, DannyG, sliimey, TjP |
|           12 |     2615 | 2025-02-23 | Vantage              | L   | 0.547      | -            | -                | -                | -         |   -14.15 | asap, chelleos, DannyG, sliimey, TjP |
|           11 |     2738 | 2025-02-19 | Underground          | L   | 0.516      | -            | -                | -                | -         |   -12.22 | asap, chelleos, DannyG, sliimey, TjP |
|           10 |     2742 | 2025-02-19 | Underground          | W   | 0.516      | -            | -                | -                | -         |     4.04 | asap, chelleos, DannyG, sliimey, TjP |
|            9 |     2953 | 2025-02-10 | ATOX                 | L   | 0.462      | -            | -                | -                | -         |    -8.71 | asap, chelleos, dpr, sliimey, TjP    |
|            8 |     2986 | 2025-02-10 | SemperFi             | W   | 0.456      | 0.143        | 0.010 (0.001)    | -                | -         |     8.41 | asap, chelleos, dpr, sliimey, TjP    |
|            7 |     2990 | 2025-02-09 | Just Swing           | W   | 0.455      | -            | -                | -                | -         |     6.27 | asap, chelleos, dpr, sliimey, TjP    |
|            6 |     3026 | 2025-02-08 | DXA                  | W   | 0.448      | -            | -                | -                | -         |     1.31 | asap, chelleos, dpr, sliimey, TjP    |
|            5 |     3078 | 2025-02-08 | SemperFi             | L   | 0.443      | -            | -                | -                | -         |    -5.83 | asap, chelleos, dpr, sliimey, TjP    |
|            4 |     3408 | 2025-01-23 | MANTRA               | W   | 0.336      | 0.333        | -                | 0.221 (0.025)    | -         |     2.81 | asap, chelleos, dpr, sliimey, TjP    |
|            3 |     3409 | 2025-01-23 | MANTRA               | W   | 0.336      | -            | -                | -                | -         |     2.87 | asap, chelleos, dpr, sliimey, TjP    |
|            2 |     3438 | 2025-01-22 | Mindfreak            | W   | 0.330      | 0.333        | 0.004 (0.000)    | -                | -         |     2.73 | asap, chelleos, dpr, sliimey, TjP    |
|            1 |     3441 | 2025-01-22 | Mindfreak            | W   | 0.329      | -            | -                | -                | -         |     2.79 | asap, chelleos, dpr, sliimey, TjP    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,621.77)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $3,250.00      | $3,250.00       |
| 2025-03-23 |      0.729 | $1,881.00      | $1,371.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
