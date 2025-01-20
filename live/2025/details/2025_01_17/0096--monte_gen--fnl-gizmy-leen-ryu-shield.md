### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [96](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  879.0<br />
<br />
Final Rank Value (879.0) = Starting Rank Value (820.7) + Head To Head Adjustments (58.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.7
- 400 + ( ( 0.212 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 820.7


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
|           44 |      112 | 2024-12-21 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -15.04 | fnl, Gizmy, leen, ryu, shield    |
|           43 |      119 | 2024-12-20 | Anonymo           | W   | 1.000      | 0.333        | 0.064 (0.021)    | 0.409 (0.136)    | 0 (0.000) |    13.01 | AiyvaN, Gizmy, leen, ryu, shield |
|           42 |      131 | 2024-12-19 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.67 | AiyvaN, Gizmy, leen, ryu, shield |
|           41 |      412 | 2024-12-04 | FORZE Reload      | W   | 0.906      | 0.333        | 0.032 (0.010)    | -                | 0 (0.000) |    10.20 | fnl, Gizmy, leen, ryu, shield    |
|           40 |      429 | 2024-12-03 | FLuffy Gangsters  | W   | 0.899      | 0.333        | 0.015 (0.004)    | 0.588 (0.176)    | 0 (0.000) |    11.36 | fnl, Gizmy, leen, ryu, shield    |
|           39 |      445 | 2024-12-02 | Preasy            | W   | 0.894      | 0.333        | 0.012 (0.004)    | -                | 0 (0.000) |     9.85 | fnl, Gizmy, leen, ryu, shield    |
|           38 |      597 | 2024-11-24 | TNL               | L   | 0.838      | -            | -                | -                | -         |   -15.73 | Burmylov, fnl, Gizmy, leen, ryu  |
|           37 |     1306 | 2024-10-22 | Insilio           | L   | 0.617      | -            | -                | -                | -         |   -13.98 | fnl, Gizmy, leen, ryu, shield    |
|           36 |     1456 | 2024-10-16 | CYBERSHOKE        | W   | 0.577      | 0.143        | -                | 0.627 (0.052)    | 0 (0.000) |     9.20 | fnl, Gizmy, leen, ryu, shield    |
|           35 |     1611 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.524      | -            | -                | -                | -         |    -4.95 | fnl, Gizmy, leen, ryu, shield    |
|           34 |     1855 | 2024-10-01 | ECSTATIC          | L   | 0.477      | -            | -                | -                | -         |    -5.17 | fnl, Gizmy, leen, ryu, shield    |
|           33 |     1882 | 2024-09-30 | ECLOT             | L   | 0.470      | -            | -                | -                | -         |    -1.45 | fnl, Gizmy, leen, ryu, shield    |
|           32 |     1893 | 2024-09-29 | WW                | W   | 0.466      | -            | -                | -                | 0 (0.000) |     2.17 | AiyvaN, fnl, leen, ryu, shield   |
|           31 |     1936 | 2024-09-28 | los kogutos       | L   | 0.458      | -            | -                | -                | -         |    -3.32 | fnl, Gizmy, leen, ryu, shield    |
|           30 |     2022 | 2024-09-26 | BetBoom           | L   | 0.445      | -            | -                | -                | -         |    -3.18 | fnl, Gizmy, leen, ryu, shield    |
|           29 |     2038 | 2024-09-26 | Spirit Academy    | L   | 0.444      | -            | -                | -                | -         |    -4.26 | fnl, Gizmy, leen, ryu, shield    |
|           28 |     2133 | 2024-09-24 | Rhyno             | W   | 0.431      | -            | -                | -                | 0 (0.000) |     4.46 | fnl, Gizmy, leen, ryu, shield    |
|           27 |     2237 | 2024-09-20 | Passion UA        | W   | 0.405      | 0.435        | 0.109 (0.019)    | 0.830 (0.146)    | 0 (0.000) |    10.42 | fnl, Gizmy, leen, ryu, shield    |
|           26 |     2319 | 2024-09-18 | Zero Tenacity     | W   | 0.390      | 0.435        | 0.083 (0.014)    | 0.570 (0.097)    | 0 (0.000) |     9.31 | fnl, Gizmy, leen, ryu, shield    |
|           25 |     2402 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.370      | 0.435        | 0.075 (0.012)    | 0.683 (0.110)    | -         |     9.29 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           24 |     2416 | 2024-09-14 | DMS               | W   | 0.365      | -            | -                | -                | -         |     3.46 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           23 |     2468 | 2024-09-13 | GamerLegion       | L   | 0.357      | -            | -                | -                | -         |    -5.74 | AiyvaN, fnl, Gizmy, leen, ryu    |
|           22 |     2544 | 2024-09-10 | SovvyKiNG         | W   | 0.339      | -            | -                | -                | -         |     1.90 | fnl, Gizmy, leen, ryu, shield    |
|           21 |     2553 | 2024-09-10 | CYBERSHOKE        | W   | 0.338      | 0.435        | -                | 0.627 (0.092)    | -         |     5.57 | fnl, Gizmy, leen, ryu, shield    |
|           20 |     2571 | 2024-09-09 | Verdant           | W   | 0.332      | -            | -                | -                | -         |     6.76 | fnl, Gizmy, leen, ryu, shield    |
|           19 |     2577 | 2024-09-09 | GUN5              | L   | 0.331      | -            | -                | -                | -         |    -2.00 | fnl, Gizmy, leen, ryu, shield    |
|           18 |     2633 | 2024-09-07 | Insilio           | W   | 0.317      | -            | -                | -                | -         |     4.57 | fnl, Gizmy, leen, ryu, shield    |
|           17 |     2719 | 2024-09-04 | Aurora Young Blud | W   | 0.299      | 0.435        | 0.045 (0.006)    | 0.838 (0.109)    | -         |     5.94 | fnl, Gizmy, leen, ryu, shield    |
|           16 |     2759 | 2024-09-03 | EYEBALLERS        | L   | 0.291      | -            | -                | -                | -         |    -4.33 | fnl, Gizmy, leen, ryu, shield    |
|           15 |     2797 | 2024-09-01 | CPH Wolves        | W   | 0.279      | -            | -                | -                | -         |     3.59 | fnl, Gizmy, leen, ryu, shield    |
|           14 |     2940 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.251      | -            | -                | -                | -         |    -1.36 | fnl, Gizmy, leen, ryu, shield    |
|           13 |     2979 | 2024-08-27 | TSM               | W   | 0.245      | 0.435        | 0.034 (0.004)    | 0.409 (0.044)    | -         |     4.67 | fnl, Gizmy, leen, ryu, shield    |
|           12 |     3101 | 2024-08-25 | PARIVISION        | W   | 0.233      | -            | -                | -                | -         |     4.41 | fnl, Gizmy, leen, ryu, shield    |
|           11 |     3289 | 2024-08-20 | Revenant          | W   | 0.199      | -            | -                | -                | -         |     2.47 | fnl, Gizmy, leen, ryu, shield    |
|           10 |     3360 | 2024-08-17 | Insilio           | W   | 0.180      | -            | -                | -                | -         |     2.61 | fnl, Gizmy, leen, ryu, shield    |
|            9 |     3393 | 2024-08-16 | los kogutos       | L   | 0.172      | -            | -                | -                | -         |    -0.61 | AiyvaN, fnl, leen, ryu, shield   |
|            8 |     3489 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.151      | 0.435        | 0.075 (0.005)    | 0.683 (0.045)    | -         |     4.03 | fnl, Gizmy, leen, ryu, shield    |
|            7 |     3536 | 2024-08-12 | Preasy            | W   | 0.144      | -            | -                | -                | -         |     0.40 | fnl, Gizmy, leen, ryu, shield    |
|            6 |     3608 | 2024-08-09 | HAVU              | L   | 0.125      | -            | -                | -                | -         |    -3.35 | fnl, Gizmy, leen, ryu, shield    |
|            5 |     3684 | 2024-08-07 | DMS               | L   | 0.111      | -            | -                | -                | -         |    -2.34 | fnl, Gizmy, leen, ryu, shield    |
|            4 |     3717 | 2024-08-06 | CYBERSHOKE        | L   | 0.106      | -            | -                | -                | -         |    -1.61 | fnl, Gizmy, leen, ryu, shield    |
|            3 |     3774 | 2024-08-04 | Revenant          | W   | 0.092      | -            | -                | -                | -         |     1.09 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     3991 | 2024-07-30 | Sampi             | L   | 0.057      | -            | -                | -                | -         |    -0.50 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     4015 | 2024-07-29 | MOUZ NXT          | L   | 0.051      | -            | -                | -                | -         |    -1.11 | fnl, Gizmy, leen, ryu, shield    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,792.35)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-12-04 |      0.906 | $5,000.00      | $4,528.35       |
| 2024-08-28 |      0.253 | $5,000.00      | $1,264.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
