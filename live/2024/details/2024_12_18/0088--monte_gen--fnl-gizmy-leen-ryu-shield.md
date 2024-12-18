### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [88](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [62]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  903.3<br />
<br />
Final Rank Value (903.3) = Starting Rank Value (828.8) + Head To Head Adjustments (74.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.8
- 400 + ( ( 0.224 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 828.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      269 | 2024-12-04 | FORZE Reload      | W   | 1.000      | 0.333        | 0.019 (0.006)    | -                | 0 (0.000) |     8.91 | fnl, Gizmy, leen, ryu, shield   |
|           40 |      286 | 2024-12-03 | FLuffy Gangsters  | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.541 (0.180)    | 0 (0.000) |    11.63 | fnl, Gizmy, leen, ryu, shield   |
|           39 |      302 | 2024-12-02 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.27 | fnl, Gizmy, leen, ryu, shield   |
|           38 |      454 | 2024-11-24 | TNL               | L   | 1.000      | -            | -                | -                | -         |   -21.03 | Burmylov, fnl, Gizmy, leen, ryu |
|           37 |     1163 | 2024-10-22 | Insilio           | L   | 0.818      | -            | -                | -                | -         |   -18.86 | fnl, Gizmy, leen, ryu, shield   |
|           36 |     1313 | 2024-10-16 | CYBERSHOKE        | W   | 0.778      | -            | -                | -                | 0 (0.000) |    12.83 | fnl, Gizmy, leen, ryu, shield   |
|           35 |     1468 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.725      | -            | -                | -                | -         |    -8.44 | fnl, Gizmy, leen, ryu, shield   |
|           34 |     1712 | 2024-10-01 | ECSTATIC          | L   | 0.678      | -            | -                | -                | -         |    -8.28 | fnl, Gizmy, leen, ryu, shield   |
|           33 |     1739 | 2024-09-30 | ECLOT             | L   | 0.671      | -            | -                | -                | -         |    -3.19 | fnl, Gizmy, leen, ryu, shield   |
|           32 |     1750 | 2024-09-29 | WW                | W   | 0.667      | -            | -                | -                | 0 (0.000) |     2.79 | AiyvaN, fnl, leen, ryu, shield  |
|           31 |     1793 | 2024-09-28 | los kogutos       | L   | 0.659      | -            | -                | -                | -         |    -7.26 | fnl, Gizmy, leen, ryu, shield   |
|           30 |     1879 | 2024-09-26 | BetBoom           | L   | 0.646      | -            | -                | -                | -         |    -5.21 | fnl, Gizmy, leen, ryu, shield   |
|           29 |     1895 | 2024-09-26 | Spirit Academy    | L   | 0.644      | -            | -                | -                | -         |    -7.57 | fnl, Gizmy, leen, ryu, shield   |
|           28 |     1990 | 2024-09-24 | Rhyno             | W   | 0.632      | 0.435        | 0.152 (0.042)    | 0.532 (0.146)    | 0 (0.000) |    14.28 | fnl, Gizmy, leen, ryu, shield   |
|           27 |     2094 | 2024-09-20 | Passion UA        | W   | 0.606      | 0.435        | 0.115 (0.030)    | 1.000 (0.263)    | 0 (0.000) |    14.70 | fnl, Gizmy, leen, ryu, shield   |
|           26 |     2176 | 2024-09-18 | Zero Tenacity     | W   | 0.591      | 0.435        | 0.079 (0.020)    | 0.706 (0.181)    | 0 (0.000) |    14.46 | fnl, Gizmy, leen, ryu, shield   |
|           25 |     2259 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.571      | 0.435        | 0.071 (0.018)    | 0.786 (0.195)    | 0 (0.000) |    13.59 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           24 |     2273 | 2024-09-14 | DMS               | W   | 0.566      | -            | -                | -                | 0 (0.000) |     5.43 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           23 |     2325 | 2024-09-13 | GamerLegion       | L   | 0.558      | -            | -                | -                | -         |    -1.59 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           22 |     2401 | 2024-09-10 | SovvyKiNG         | W   | 0.540      | -            | -                | -                | -         |     3.42 | fnl, Gizmy, leen, ryu, shield   |
|           21 |     2410 | 2024-09-10 | CYBERSHOKE        | W   | 0.539      | 0.435        | -                | 0.738 (0.173)    | -         |     9.78 | fnl, Gizmy, leen, ryu, shield   |
|           20 |     2428 | 2024-09-09 | Verdant           | W   | 0.533      | -            | -                | -                | -         |     9.00 | fnl, Gizmy, leen, ryu, shield   |
|           19 |     2434 | 2024-09-09 | GUN5              | L   | 0.532      | -            | -                | -                | -         |    -3.97 | fnl, Gizmy, leen, ryu, shield   |
|           18 |     2490 | 2024-09-07 | Insilio           | W   | 0.518      | 0.435        | -                | 0.414 (0.093)    | -         |     8.21 | fnl, Gizmy, leen, ryu, shield   |
|           17 |     2576 | 2024-09-04 | Aurora Young Blud | W   | 0.500      | 0.435        | 0.036 (0.008)    | 0.927 (0.202)    | -         |     9.31 | fnl, Gizmy, leen, ryu, shield   |
|           16 |     2616 | 2024-09-03 | EYEBALLERS        | L   | 0.492      | -            | -                | -                | -         |    -9.05 | fnl, Gizmy, leen, ryu, shield   |
|           15 |     2654 | 2024-09-01 | CPH Wolves        | W   | 0.480      | -            | -                | -                | -         |     5.63 | fnl, Gizmy, leen, ryu, shield   |
|           14 |     2797 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.452      | -            | -                | -                | -         |    -2.64 | fnl, Gizmy, leen, ryu, shield   |
|           13 |     2836 | 2024-08-27 | TSM               | W   | 0.446      | 0.435        | 0.039 (0.008)    | 0.587 (0.114)    | -         |     9.69 | fnl, Gizmy, leen, ryu, shield   |
|           12 |     2958 | 2024-08-25 | PARIVISION        | W   | 0.434      | 0.435        | 0.026 (0.005)    | -                | -         |     9.95 | fnl, Gizmy, leen, ryu, shield   |
|           11 |     3146 | 2024-08-20 | Revenant          | W   | 0.400      | -            | -                | -                | -         |     6.33 | fnl, Gizmy, leen, ryu, shield   |
|           10 |     3217 | 2024-08-17 | Insilio           | W   | 0.381      | -            | -                | -                | -         |     6.28 | fnl, Gizmy, leen, ryu, shield   |
|            9 |     3250 | 2024-08-16 | los kogutos       | L   | 0.373      | -            | -                | -                | -         |    -1.50 | AiyvaN, fnl, leen, ryu, shield  |
|            8 |     3346 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.352      | 0.435        | 0.071 (0.011)    | 0.786 (0.120)    | -         |     9.49 | fnl, Gizmy, leen, ryu, shield   |
|            7 |     3393 | 2024-08-12 | Preasy            | W   | 0.345      | -            | -                | -                | -         |     0.96 | fnl, Gizmy, leen, ryu, shield   |
|            6 |     3465 | 2024-08-09 | HAVU              | L   | 0.326      | -            | -                | -                | -         |    -8.73 | fnl, Gizmy, leen, ryu, shield   |
|            5 |     3541 | 2024-08-07 | DMS               | L   | 0.312      | -            | -                | -                | -         |    -6.24 | fnl, Gizmy, leen, ryu, shield   |
|            4 |     3574 | 2024-08-06 | CYBERSHOKE        | L   | 0.307      | -            | -                | -                | -         |    -4.24 | fnl, Gizmy, leen, ryu, shield   |
|            3 |     3631 | 2024-08-04 | Revenant          | W   | 0.293      | -            | -                | -                | -         |     4.12 | fnl, Gizmy, leen, ryu, shield   |
|            2 |     3848 | 2024-07-30 | Sampi             | L   | 0.258      | -            | -                | -                | -         |    -2.09 | fnl, Gizmy, leen, ryu, shield   |
|            1 |     3872 | 2024-07-29 | MOUZ NXT          | L   | 0.252      | -            | -                | -                | -         |    -4.63 | fnl, Gizmy, leen, ryu, shield   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,268.62)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-04 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-28 |      0.454 | $5,000.00      | $2,268.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
