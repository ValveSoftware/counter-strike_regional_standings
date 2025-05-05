### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, sliimey, TjP<br />
Global Rank: [72](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  851.5<br />
<br />
Final Rank Value (851.5) = Starting Rank Value (855.3) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.286[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.3
- 400 + ( ( 0.251 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 855.3


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
|           36 |        6 | 2025-05-04 | Mindfreak            | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.298 (0.099)    | 0 (0.000) |    12.83 | asap, chelleos, DannyG, sliimey, TjP |
|           35 |       33 | 2025-05-02 | Housebets            | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.390 (0.130)    | 0 (0.000) |    15.26 | asap, chelleos, DannyG, sliimey, TjP |
|           34 |      291 | 2025-04-16 | ex-TALON             | L   | 1.000      | -            | -                | -                | -         |   -13.27 | asap, chelleos, DannyG, sliimey, TjP |
|           33 |      315 | 2025-04-15 | FlyQuest             | L   | 1.000      | -            | -                | -                | -         |    -7.88 | asap, chelleos, DannyG, sliimey, TjP |
|           32 |      409 | 2025-04-09 | Only One Word        | L   | 1.000      | -            | -                | -                | -         |   -23.03 | asap, chelleos, DannyG, sliimey, TjP |
|           31 |      415 | 2025-04-09 | Only One Word        | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.327 (0.109)    | 0 (0.000) |     7.98 | asap, chelleos, DannyG, sliimey, TjP |
|           30 |      578 | 2025-04-02 | KZG                  | W   | 0.978      | 0.333        | -                | 0.200 (0.065)    | 0 (0.000) |     5.45 | asap, chelleos, DANZ, sliimey, TjP   |
|           29 |      582 | 2025-04-02 | KZG                  | W   | 0.978      | 0.333        | -                | 0.200 (0.065)    | 0 (0.000) |     5.73 | asap, chelleos, DANZ, sliimey, TjP   |
|           28 |      642 | 2025-03-30 | SemperFi             | L   | 0.959      | -            | -                | -                | -         |    -9.31 | asap, chelleos, DannyG, sliimey, TjP |
|           27 |      645 | 2025-03-30 | ex-TALON             | W   | 0.958      | 0.143        | 0.008 (0.001)    | -                | 0 (0.000) |    17.24 | asap, chelleos, DannyG, sliimey, TjP |
|           26 |      702 | 2025-03-29 | SemperFi             | L   | 0.951      | -            | -                | -                | -         |    -9.30 | asap, chelleos, DannyG, sliimey, TjP |
|           25 |      764 | 2025-03-28 | Housebets            | W   | 0.945      | 0.143        | 0.014 (0.002)    | -                | 0 (0.000) |    13.93 | asap, chelleos, DannyG, sliimey, TjP |
|           24 |      840 | 2025-03-27 | KZG                  | W   | 0.938      | -            | -                | -                | -         |     6.52 | asap, chelleos, DannyG, sliimey, TjP |
|           23 |      926 | 2025-03-23 | SemperFi             | L   | 0.911      | -            | -                | -                | -         |    -9.77 | asap, chelleos, DannyG, sliimey, TjP |
|           22 |      953 | 2025-03-22 | ex-TALON             | L   | 0.905      | -            | -                | -                | -         |   -12.19 | asap, chelleos, DannyG, sliimey, TjP |
|           21 |      955 | 2025-03-21 | Housebets            | W   | 0.903      | 0.345        | 0.014 (0.004)    | 0.390 (0.121)    | 1 (0.903) |    13.23 | asap, chelleos, DannyG, sliimey, TjP |
|           20 |      986 | 2025-03-20 | Only One Word        | W   | 0.892      | 0.345        | -                | 0.327 (0.100)    | 1 (0.892) |    11.71 | asap, chelleos, DannyG, sliimey, TjP |
|           19 |      987 | 2025-03-20 | SemperFi             | L   | 0.891      | -            | -                | -                | -         |    -9.52 | asap, chelleos, DannyG, sliimey, TjP |
|           18 |      989 | 2025-03-19 | Justice For Tomorrow | W   | 0.890      | -            | -                | -                | 1 (0.890) |     6.51 | asap, chelleos, DannyG, sliimey, TjP |
|           17 |     1052 | 2025-03-17 | Housebets            | L   | 0.872      | -            | -                | -                | -         |   -15.61 | asap, chelleos, DannyG, sliimey, TjP |
|           16 |     1053 | 2025-03-17 | Housebets            | W   | 0.871      | 0.333        | 0.014 (0.004)    | 0.390 (0.113)    | -         |    11.83 | asap, chelleos, DannyG, sliimey, TjP |
|           15 |     1632 | 2025-02-26 | Justice For Tomorrow | W   | 0.745      | -            | -                | -                | -         |     4.95 | asap, chelleos, DANZ, sliimey, TjP   |
|           14 |     1635 | 2025-02-26 | Justice For Tomorrow | W   | 0.745      | -            | -                | -                | -         |     5.17 | asap, chelleos, DANZ, sliimey, TjP   |
|           13 |     1668 | 2025-02-24 | MANTRA               | L   | 0.735      | -            | -                | -                | -         |   -17.37 | asap, chelleos, DannyG, sliimey, TjP |
|           12 |     1690 | 2025-02-23 | Vantage              | L   | 0.729      | -            | -                | -                | -         |   -19.45 | asap, chelleos, DannyG, sliimey, TjP |
|           11 |     1791 | 2025-02-19 | Underground          | L   | 0.699      | -            | -                | -                | -         |   -17.52 | asap, chelleos, DannyG, sliimey, TjP |
|           10 |     1795 | 2025-02-19 | Underground          | W   | 0.698      | -            | -                | -                | -         |     4.36 | asap, chelleos, DannyG, sliimey, TjP |
|            9 |     1988 | 2025-02-10 | ATOX                 | L   | 0.644      | -            | -                | -                | -         |   -10.52 | asap, chelleos, dpr, sliimey, TjP    |
|            8 |     2021 | 2025-02-10 | SemperFi             | W   | 0.638      | 0.143        | 0.016 (0.001)    | -                | -         |    12.28 | asap, chelleos, dpr, sliimey, TjP    |
|            7 |     2025 | 2025-02-09 | Just Swing           | W   | 0.637      | -            | -                | -                | -         |     8.18 | asap, chelleos, dpr, sliimey, TjP    |
|            6 |     2061 | 2025-02-08 | DXA                  | W   | 0.630      | -            | -                | -                | -         |     1.37 | asap, chelleos, dpr, sliimey, TjP    |
|            5 |     2113 | 2025-02-08 | SemperFi             | L   | 0.626      | -            | -                | -                | -         |    -7.64 | asap, chelleos, dpr, sliimey, TjP    |
|            4 |     2352 | 2025-01-23 | MANTRA               | W   | 0.519      | 0.333        | -                | 0.347 (0.060)    | -         |     3.52 | asap, chelleos, dpr, sliimey, TjP    |
|            3 |     2353 | 2025-01-23 | MANTRA               | W   | 0.518      | 0.333        | -                | 0.347 (0.060)    | -         |     3.63 | asap, chelleos, dpr, sliimey, TjP    |
|            2 |     2364 | 2025-01-22 | Mindfreak            | W   | 0.512      | 0.333        | 0.006 (0.001)    | -                | -         |     3.42 | asap, chelleos, dpr, sliimey, TjP    |
|            1 |     2367 | 2025-01-22 | Mindfreak            | W   | 0.512      | 0.333        | 0.006 (0.001)    | -                | -         |     3.53 | asap, chelleos, dpr, sliimey, TjP    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,964.85)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $3,250.00      | $3,250.00       |
| 2025-03-23 |      0.912 | $1,881.00      | $1,714.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
