### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [70](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [51]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  936.8<br />
<br />
Final Rank Value (936.8) = Starting Rank Value (915.8) + Head To Head Adjustments (20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.8
- 400 + ( ( 0.267 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 915.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       44 | 2024-10-08 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -18.04 | fnl, Gizmy, leen, ryu, shield  |
|           34 |      288 | 2024-10-01 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -13.98 | fnl, Gizmy, leen, ryu, shield  |
|           33 |      315 | 2024-09-30 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -14.77 | fnl, Gizmy, leen, ryu, shield  |
|           32 |      326 | 2024-09-29 | WW                | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.69 | AiyvaN, fnl, leen, ryu, shield |
|           31 |      369 | 2024-09-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -20.84 | fnl, Gizmy, leen, ryu, shield  |
|           30 |      455 | 2024-09-26 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |    -7.66 | fnl, Gizmy, leen, ryu, shield  |
|           29 |      471 | 2024-09-26 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -17.50 | fnl, Gizmy, leen, ryu, shield  |
|           28 |      566 | 2024-09-24 | Rhyno             | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.494 (0.215)    | 0 (0.000) |     8.25 | fnl, Gizmy, leen, ryu, shield  |
|           27 |      670 | 2024-09-20 | Passion UA        | W   | 1.000      | 0.435        | 0.197 (0.086)    | 1.000 (0.435)    | 0 (0.000) |    15.46 | fnl, Gizmy, leen, ryu, shield  |
|           26 |      752 | 2024-09-18 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.127 (0.055)    | 0.904 (0.393)    | 0 (0.000) |    19.63 | fnl, Gizmy, leen, ryu, shield  |
|           25 |      835 | 2024-09-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.084 (0.037)    | 0.812 (0.353)    | 0 (0.000) |    14.56 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           24 |      849 | 2024-09-14 | DMS               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.32 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           23 |      901 | 2024-09-13 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -11.12 | AiyvaN, fnl, Gizmy, leen, ryu  |
|           22 |      977 | 2024-09-10 | Space             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.74 | fnl, Gizmy, leen, ryu, shield  |
|           21 |      986 | 2024-09-10 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.754 (0.328)    | 0 (0.000) |    18.10 | fnl, Gizmy, leen, ryu, shield  |
|           20 |     1004 | 2024-09-09 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.45 | fnl, Gizmy, leen, ryu, shield  |
|           19 |     1010 | 2024-09-09 | GUN5              | L   | 0.999      | -            | -                | -                | -         |   -10.87 | fnl, Gizmy, leen, ryu, shield  |
|           18 |     1066 | 2024-09-07 | Insilio           | W   | 0.985      | 0.435        | 0.040 (0.017)    | 0.678 (0.290)    | 0 (0.000) |    14.32 | fnl, Gizmy, leen, ryu, shield  |
|           17 |     1152 | 2024-09-04 | Aurora Young Blud | W   | 0.967      | 0.435        | -                | 0.583 (0.245)    | -         |    11.80 | fnl, Gizmy, leen, ryu, shield  |
|           16 |     1192 | 2024-09-03 | EYEBALLERS        | L   | 0.960      | -            | -                | -                | -         |   -19.35 | fnl, Gizmy, leen, ryu, shield  |
|           15 |     1230 | 2024-09-01 | CPH Wolves        | W   | 0.948      | -            | -                | -                | -         |    11.82 | fnl, Gizmy, leen, ryu, shield  |
|           14 |     1373 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.919      | -            | -                | -                | -         |   -13.59 | fnl, Gizmy, leen, ryu, shield  |
|           13 |     1412 | 2024-08-27 | TSM               | W   | 0.914      | 0.435        | 0.065 (0.026)    | 0.807 (0.321)    | -         |    19.15 | fnl, Gizmy, leen, ryu, shield  |
|           12 |     1534 | 2024-08-25 | PARIVISION        | W   | 0.901      | 0.435        | 0.042 (0.016)    | -                | -         |    20.77 | fnl, Gizmy, leen, ryu, shield  |
|           11 |     1722 | 2024-08-20 | Revenant          | W   | 0.867      | -            | -                | -                | -         |    15.15 | fnl, Gizmy, leen, ryu, shield  |
|           10 |     1793 | 2024-08-17 | Insilio           | W   | 0.848      | 0.435        | 0.040 (0.015)    | 0.678 (0.250)    | -         |    14.34 | fnl, Gizmy, leen, ryu, shield  |
|            9 |     1826 | 2024-08-16 | Permitta          | L   | 0.840      | -            | -                | -                | -         |   -12.50 | AiyvaN, fnl, leen, ryu, shield |
|            8 |     1922 | 2024-08-13 | ALTERNATE aTTaX   | W   | 0.819      | 0.435        | 0.084 (0.030)    | 0.812 (0.289)    | -         |    13.63 | fnl, Gizmy, leen, ryu, shield  |
|            7 |     1969 | 2024-08-12 | Preasy            | W   | 0.813      | -            | -                | -                | -         |     6.86 | fnl, Gizmy, leen, ryu, shield  |
|            6 |     2041 | 2024-08-09 | HAVU              | L   | 0.793      | -            | -                | -                | -         |   -21.63 | fnl, Gizmy, leen, ryu, shield  |
|            5 |     2117 | 2024-08-07 | DMS               | L   | 0.779      | -            | -                | -                | -         |   -13.63 | fnl, Gizmy, leen, ryu, shield  |
|            4 |     2150 | 2024-08-06 | CYBERSHOKE        | L   | 0.774      | -            | -                | -                | -         |   -10.32 | fnl, Gizmy, leen, ryu, shield  |
|            3 |     2207 | 2024-08-04 | Revenant          | W   | 0.761      | -            | -                | -                | -         |    11.38 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     2424 | 2024-07-30 | Sampi             | L   | 0.726      | -            | -                | -                | -         |    -9.65 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     2448 | 2024-07-29 | MOUZ NXT          | L   | 0.720      | -            | -                | -                | -         |    -9.03 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,604.61)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
