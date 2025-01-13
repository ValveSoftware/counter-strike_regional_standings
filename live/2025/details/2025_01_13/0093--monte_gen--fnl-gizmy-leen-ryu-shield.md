### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [93](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [66]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  889.5<br />
<br />
Final Rank Value (889.5) = Starting Rank Value (825.6) + Head To Head Adjustments (64.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.6
- 400 + ( ( 0.215 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 825.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      108 | 2024-12-21 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -15.09 | fnl, Gizmy, leen, ryu, shield    |
|           43 |      115 | 2024-12-20 | Anonymo           | W   | 1.000      | 0.333        | 0.063 (0.021)    | 0.401 (0.134)    | 0 (0.000) |    12.62 | AiyvaN, Gizmy, leen, ryu, shield |
|           42 |      127 | 2024-12-19 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.45 | AiyvaN, Gizmy, leen, ryu, shield |
|           41 |      408 | 2024-12-04 | FORZE Reload      | W   | 0.934      | 0.333        | 0.031 (0.010)    | -                | 0 (0.000) |    10.12 | fnl, Gizmy, leen, ryu, shield    |
|           40 |      425 | 2024-12-03 | FLuffy Gangsters  | W   | 0.927      | 0.333        | 0.015 (0.005)    | 0.583 (0.180)    | 0 (0.000) |    11.44 | fnl, Gizmy, leen, ryu, shield    |
|           39 |      441 | 2024-12-02 | Preasy            | W   | 0.922      | 0.333        | 0.011 (0.003)    | -                | 0 (0.000) |     9.71 | fnl, Gizmy, leen, ryu, shield    |
|           38 |      593 | 2024-11-24 | TNL               | L   | 0.867      | -            | -                | -                | -         |   -16.62 | Burmylov, fnl, Gizmy, leen, ryu  |
|           37 |     1302 | 2024-10-22 | Insilio           | L   | 0.646      | -            | -                | -                | -         |   -14.76 | fnl, Gizmy, leen, ryu, shield    |
|           36 |     1452 | 2024-10-16 | CYBERSHOKE        | W   | 0.605      | 0.143        | -                | 0.633 (0.055)    | 0 (0.000) |     9.59 | fnl, Gizmy, leen, ryu, shield    |
|           35 |     1607 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.553      | -            | -                | -                | -         |    -5.47 | fnl, Gizmy, leen, ryu, shield    |
|           34 |     1851 | 2024-10-01 | ECSTATIC          | L   | 0.506      | -            | -                | -                | -         |    -5.56 | fnl, Gizmy, leen, ryu, shield    |
|           33 |     1878 | 2024-09-30 | ECLOT             | L   | 0.499      | -            | -                | -                | -         |    -1.63 | fnl, Gizmy, leen, ryu, shield    |
|           32 |     1889 | 2024-09-29 | WW                | W   | 0.494      | -            | -                | -                | 0 (0.000) |     2.21 | AiyvaN, fnl, leen, ryu, shield   |
|           31 |     1932 | 2024-09-28 | los kogutos       | L   | 0.487      | -            | -                | -                | -         |    -3.82 | fnl, Gizmy, leen, ryu, shield    |
|           30 |     2018 | 2024-09-26 | BetBoom           | L   | 0.474      | -            | -                | -                | -         |    -3.57 | fnl, Gizmy, leen, ryu, shield    |
|           29 |     2034 | 2024-09-26 | Spirit Academy    | L   | 0.472      | -            | -                | -                | -         |    -4.65 | fnl, Gizmy, leen, ryu, shield    |
|           28 |     2129 | 2024-09-24 | Rhyno             | W   | 0.460      | -            | -                | -                | 0 (0.000) |     4.65 | fnl, Gizmy, leen, ryu, shield    |
|           27 |     2233 | 2024-09-20 | Passion UA        | W   | 0.434      | 0.435        | 0.114 (0.021)    | 0.844 (0.159)    | 0 (0.000) |    11.10 | fnl, Gizmy, leen, ryu, shield    |
|           26 |     2315 | 2024-09-18 | Zero Tenacity     | W   | 0.419      | 0.435        | 0.084 (0.015)    | 0.622 (0.113)    | 0 (0.000) |    10.07 | fnl, Gizmy, leen, ryu, shield    |
|           25 |     2398 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.399      | 0.435        | 0.076 (0.013)    | 0.688 (0.119)    | -         |     9.89 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           24 |     2412 | 2024-09-14 | DMS               | W   | 0.394      | -            | -                | -                | -         |     3.67 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           23 |     2464 | 2024-09-13 | GamerLegion       | L   | 0.385      | -            | -                | -                | -         |    -0.80 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           22 |     2540 | 2024-09-10 | SovvyKiNG         | W   | 0.368      | -            | -                | -                | -         |     2.04 | fnl, Gizmy, leen, ryu, shield    |
|           21 |     2549 | 2024-09-10 | CYBERSHOKE        | W   | 0.366      | 0.435        | -                | 0.633 (0.101)    | -         |     6.11 | fnl, Gizmy, leen, ryu, shield    |
|           20 |     2567 | 2024-09-09 | Verdant           | W   | 0.360      | -            | -                | -                | -         |     7.29 | fnl, Gizmy, leen, ryu, shield    |
|           19 |     2573 | 2024-09-09 | GUN5              | L   | 0.359      | -            | -                | -                | -         |    -2.22 | fnl, Gizmy, leen, ryu, shield    |
|           18 |     2629 | 2024-09-07 | Insilio           | W   | 0.345      | -            | -                | -                | -         |     5.07 | fnl, Gizmy, leen, ryu, shield    |
|           17 |     2715 | 2024-09-04 | Aurora Young Blud | W   | 0.328      | 0.435        | 0.045 (0.006)    | 0.841 (0.120)    | -         |     6.51 | fnl, Gizmy, leen, ryu, shield    |
|           16 |     2755 | 2024-09-03 | EYEBALLERS        | L   | 0.320      | -            | -                | -                | -         |    -4.77 | fnl, Gizmy, leen, ryu, shield    |
|           15 |     2793 | 2024-09-01 | CPH Wolves        | W   | 0.308      | -            | -                | -                | -         |     3.96 | fnl, Gizmy, leen, ryu, shield    |
|           14 |     2936 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.279      | -            | -                | -                | -         |    -1.52 | fnl, Gizmy, leen, ryu, shield    |
|           13 |     2975 | 2024-08-27 | TSM               | W   | 0.274      | 0.435        | 0.035 (0.004)    | 0.425 (0.051)    | -         |     5.33 | fnl, Gizmy, leen, ryu, shield    |
|           12 |     3097 | 2024-08-25 | PARIVISION        | W   | 0.262      | -            | -                | -                | -         |     5.16 | fnl, Gizmy, leen, ryu, shield    |
|           11 |     3285 | 2024-08-20 | Revenant          | W   | 0.228      | -            | -                | -                | -         |     2.89 | fnl, Gizmy, leen, ryu, shield    |
|           10 |     3356 | 2024-08-17 | Insilio           | W   | 0.208      | -            | -                | -                | -         |     3.09 | fnl, Gizmy, leen, ryu, shield    |
|            9 |     3389 | 2024-08-16 | los kogutos       | L   | 0.200      | -            | -                | -                | -         |    -0.72 | AiyvaN, fnl, leen, ryu, shield   |
|            8 |     3485 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.179      | 0.435        | 0.076 (0.006)    | 0.688 (0.054)    | -         |     4.80 | fnl, Gizmy, leen, ryu, shield    |
|            7 |     3532 | 2024-08-12 | Preasy            | W   | 0.173      | -            | -                | -                | -         |     0.47 | fnl, Gizmy, leen, ryu, shield    |
|            6 |     3604 | 2024-08-09 | HAVU              | L   | 0.153      | -            | -                | -                | -         |    -4.11 | fnl, Gizmy, leen, ryu, shield    |
|            5 |     3680 | 2024-08-07 | DMS               | L   | 0.139      | -            | -                | -                | -         |    -2.93 | fnl, Gizmy, leen, ryu, shield    |
|            4 |     3713 | 2024-08-06 | CYBERSHOKE        | L   | 0.134      | -            | -                | -                | -         |    -2.01 | fnl, Gizmy, leen, ryu, shield    |
|            3 |     3770 | 2024-08-04 | Revenant          | W   | 0.121      | -            | -                | -                | -         |     1.44 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     3987 | 2024-07-30 | Sampi             | L   | 0.086      | -            | -                | -                | -         |    -0.73 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     4011 | 2024-07-29 | MOUZ NXT          | L   | 0.080      | -            | -                | -                | -         |    -1.68 | fnl, Gizmy, leen, ryu, shield    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,077.03)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-12-04 |      0.934 | $5,000.00      | $4,670.69       |
| 2024-08-28 |      0.281 | $5,000.00      | $1,406.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
