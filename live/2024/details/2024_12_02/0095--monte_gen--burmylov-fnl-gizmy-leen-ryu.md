### Roster Details<br />
Team Name: Monte Gen<br />
Roster: Burmylov, fnl, Gizmy, leen, ryu<br />
Global Rank: [95](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [71]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  916.8<br />
<br />
Final Rank Value (916.8) = Starting Rank Value (839.0) + Head To Head Adjustments (77.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.0
- 400 + ( ( 0.219 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 839.0


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
|           38 |      147 | 2024-11-24 | TNL               | L   | 1.000      | -            | -                | -                | -         |   -23.01 | Burmylov, fnl, Gizmy, leen, ryu |
|           37 |      856 | 2024-10-22 | Insilio           | L   | 0.925      | -            | -                | -                | -         |   -11.76 | fnl, Gizmy, leen, ryu, shield   |
|           36 |     1006 | 2024-10-16 | CYBERSHOKE        | W   | 0.885      | -            | -                | -                | 0 (0.000) |    14.51 | fnl, Gizmy, leen, ryu, shield   |
|           35 |     1161 | 2024-10-08 | ALTERNATE aTTaX   | L   | 0.833      | -            | -                | -                | -         |    -9.98 | fnl, Gizmy, leen, ryu, shield   |
|           34 |     1405 | 2024-10-01 | ECSTATIC          | L   | 0.786      | -            | -                | -                | -         |   -10.09 | fnl, Gizmy, leen, ryu, shield   |
|           33 |     1432 | 2024-09-30 | ECLOT             | L   | 0.778      | -            | -                | -                | -         |    -3.91 | fnl, Gizmy, leen, ryu, shield   |
|           32 |     1443 | 2024-09-29 | WW                | W   | 0.774      | -            | -                | -                | 0 (0.000) |     2.99 | AiyvaN, fnl, leen, ryu, shield  |
|           31 |     1486 | 2024-09-28 | Permitta          | L   | 0.766      | -            | -                | -                | -         |    -8.49 | fnl, Gizmy, leen, ryu, shield   |
|           30 |     1572 | 2024-09-26 | BetBoom           | L   | 0.754      | -            | -                | -                | -         |    -5.40 | fnl, Gizmy, leen, ryu, shield   |
|           29 |     1588 | 2024-09-26 | Spirit Academy    | L   | 0.752      | -            | -                | -                | -         |   -10.37 | fnl, Gizmy, leen, ryu, shield   |
|           28 |     1683 | 2024-09-24 | Rhyno             | W   | 0.739      | 0.435        | 0.147 (0.047)    | 0.554 (0.178)    | 0 (0.000) |    16.40 | fnl, Gizmy, leen, ryu, shield   |
|           27 |     1787 | 2024-09-20 | Passion UA        | W   | 0.714      | 0.435        | 0.101 (0.031)    | 1.000 (0.310)    | 0 (0.000) |    17.22 | fnl, Gizmy, leen, ryu, shield   |
|           26 |     1869 | 2024-09-18 | Zero Tenacity     | W   | 0.698      | 0.435        | 0.082 (0.025)    | 0.724 (0.220)    | 0 (0.000) |    17.38 | fnl, Gizmy, leen, ryu, shield   |
|           25 |     1952 | 2024-09-15 | ALTERNATE aTTaX   | W   | 0.679      | 0.435        | 0.072 (0.021)    | 0.795 (0.234)    | 0 (0.000) |    16.38 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           24 |     1966 | 2024-09-14 | DMS               | W   | 0.673      | -            | -                | -                | 0 (0.000) |     7.56 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           23 |     2018 | 2024-09-13 | GamerLegion       | L   | 0.665      | -            | -                | -                | -         |    -2.35 | AiyvaN, fnl, Gizmy, leen, ryu   |
|           22 |     2094 | 2024-09-10 | SovvyKiNG         | W   | 0.648      | -            | -                | -                | 0 (0.000) |     4.16 | fnl, Gizmy, leen, ryu, shield   |
|           21 |     2103 | 2024-09-10 | CYBERSHOKE        | W   | 0.646      | 0.435        | 0.016 (0.005)    | 0.640 (0.180)    | 0 (0.000) |    12.09 | fnl, Gizmy, leen, ryu, shield   |
|           20 |     2121 | 2024-09-09 | Verdant           | W   | 0.640      | -            | -                | -                | 0 (0.000) |     9.93 | fnl, Gizmy, leen, ryu, shield   |
|           19 |     2127 | 2024-09-09 | GUN5              | L   | 0.639      | -            | -                | -                | -         |    -5.84 | fnl, Gizmy, leen, ryu, shield   |
|           18 |     2183 | 2024-09-07 | Insilio           | W   | 0.625      | 0.435        | 0.019 (0.005)    | 0.622 (0.169)    | -         |    11.13 | fnl, Gizmy, leen, ryu, shield   |
|           17 |     2269 | 2024-09-04 | Aurora Young Blud | W   | 0.607      | 0.435        | 0.024 (0.006)    | 0.709 (0.187)    | -         |    10.11 | fnl, Gizmy, leen, ryu, shield   |
|           16 |     2309 | 2024-09-03 | EYEBALLERS        | L   | 0.600      | -            | -                | -                | -         |   -10.78 | fnl, Gizmy, leen, ryu, shield   |
|           15 |     2347 | 2024-09-01 | CPH Wolves        | W   | 0.588      | -            | -                | -                | -         |     7.04 | fnl, Gizmy, leen, ryu, shield   |
|           14 |     2490 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.559      | -            | -                | -                | -         |    -2.92 | fnl, Gizmy, leen, ryu, shield   |
|           13 |     2529 | 2024-08-27 | TSM               | W   | 0.554      | 0.435        | 0.046 (0.011)    | 0.635 (0.153)    | -         |    12.99 | fnl, Gizmy, leen, ryu, shield   |
|           12 |     2651 | 2024-08-25 | PARIVISION        | W   | 0.541      | 0.435        | 0.029 (0.007)    | -                | -         |    13.56 | fnl, Gizmy, leen, ryu, shield   |
|           11 |     2839 | 2024-08-20 | Revenant          | W   | 0.507      | -            | -                | -                | -         |     8.89 | fnl, Gizmy, leen, ryu, shield   |
|           10 |     2910 | 2024-08-17 | Insilio           | W   | 0.488      | 0.435        | -                | 0.622 (0.132)    | -         |     9.48 | fnl, Gizmy, leen, ryu, shield   |
|            9 |     2943 | 2024-08-16 | Permitta          | L   | 0.480      | -            | -                | -                | -         |    -1.52 | AiyvaN, fnl, leen, ryu, shield  |
|            8 |     3039 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.459      | 0.435        | 0.072 (0.014)    | 0.795 (0.159)    | -         |    12.76 | fnl, Gizmy, leen, ryu, shield   |
|            7 |     3086 | 2024-08-12 | Preasy            | W   | 0.453      | -            | -                | -                | -         |     5.76 | fnl, Gizmy, leen, ryu, shield   |
|            6 |     3158 | 2024-08-09 | HAVU              | L   | 0.433      | -            | -                | -                | -         |   -11.71 | fnl, Gizmy, leen, ryu, shield   |
|            5 |     3234 | 2024-08-07 | DMS               | L   | 0.419      | -            | -                | -                | -         |    -7.11 | fnl, Gizmy, leen, ryu, shield   |
|            4 |     3267 | 2024-08-06 | CYBERSHOKE        | L   | 0.414      | -            | -                | -                | -         |    -5.36 | fnl, Gizmy, leen, ryu, shield   |
|            3 |     3324 | 2024-08-04 | Revenant          | W   | 0.401      | -            | -                | -                | -         |     6.27 | fnl, Gizmy, leen, ryu, shield   |
|            2 |     3541 | 2024-07-30 | Sampi             | L   | 0.366      | -            | -                | -                | -         |    -2.38 | fnl, Gizmy, leen, ryu, shield   |
|            1 |     3565 | 2024-07-29 | MOUZ NXT          | L   | 0.360      | -            | -                | -                | -         |    -5.88 | fnl, Gizmy, leen, ryu, shield   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,804.92)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
