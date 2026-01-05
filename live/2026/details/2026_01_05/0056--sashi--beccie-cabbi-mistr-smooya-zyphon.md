### Roster Details<br />
Team Name: Sashi<br />
Roster: Beccie, Cabbi, MistR, smooya, Zyphon<br />
Global Rank: [56](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [40]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1180.3<br />
<br />
Final Rank Value (1180.3) = Starting Rank Value (1295.8) + Head To Head Adjustments (-115.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.806[<sup>2</sup>](#table1)

The average of these factors is 0.452<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1295.8
- 400 + ( ( 0.452 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1295.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |      270 | 2025-12-10 | 500              | L   | 1.000      | -            | -                | -                | -         |   -21.09 | Beccie, Cabbi, Kristou, Lucky, MistR  |
|           62 |      299 | 2025-12-08 | RUBY             | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.962 (0.418)    | 0 (0.000) |     9.30 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           61 |      348 | 2025-12-06 | Sangal           | L   | 1.000      | -            | -                | -                | -         |   -17.35 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           60 |      383 | 2025-12-05 | SPARTA           | L   | 0.992      | -            | -                | -                | -         |   -22.78 | Beccie, Cabbi, Kristou, MistR, Zyphon |
|           59 |      417 | 2025-12-03 | FORZE Reload     | W   | 0.981      | 0.435        | -                | 0.434 (0.185)    | -         |     4.93 | Beccie, Cabbi, Kristou, MistR, Zyphon |
|           58 |      501 | 2025-11-29 | Inner Circle     | L   | 0.954      | -            | -                | -                | -         |   -11.59 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           57 |      525 | 2025-11-29 | GUN5             | W   | 0.953      | 0.333        | 0.026 (0.008)    | 0.816 (0.259)    | 1 (0.953) |    14.74 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           56 |      664 | 2025-11-23 | AMKAL            | W   | 0.914      | -            | -                | -                | 1 (0.914) |     3.12 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           55 |      694 | 2025-11-22 | Impulse GW       | W   | 0.906      | -            | -                | -                | 1 (0.906) |     2.11 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           54 |     1088 | 2025-11-08 | BetBoom          | L   | 0.813      | -            | -                | -                | -         |    -4.97 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           53 |     1100 | 2025-11-08 | Alliance         | W   | 0.812      | 0.335        | 0.052 (0.014)    | 0.791 (0.215)    | 1 (0.812) |    15.48 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           52 |     1115 | 2025-11-07 | BC.Game          | W   | 0.808      | 0.335        | 0.035 (0.009)    | -                | 1 (0.808) |     7.82 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           51 |     1135 | 2025-11-07 | BetBoom          | L   | 0.807      | -            | -                | -                | -         |    -4.67 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           50 |     1156 | 2025-11-07 | 777              | W   | 0.806      | -            | -                | -                | 1 (0.806) |     0.88 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           49 |     1167 | 2025-11-07 | Boys N Da HUD    | W   | 0.806      | -            | -                | -                | 1 (0.806) |     0.27 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           48 |     1175 | 2025-11-07 | Betclic          | W   | 0.806      | -            | -                | -                | 1 (0.806) |     3.57 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           47 |     1185 | 2025-11-07 | Lilmix           | W   | 0.805      | -            | -                | -                | 1 (0.805) |     0.88 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           46 |     1414 | 2025-10-30 | Spirit Academy   | L   | 0.752      | -            | -                | -                | -         |   -19.90 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           45 |     1449 | 2025-10-28 | kONO             | W   | 0.741      | -            | -                | -                | -         |     4.47 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           44 |     1553 | 2025-10-26 | Sangal           | L   | 0.727      | -            | -                | -                | -         |   -11.58 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           43 |     1685 | 2025-10-24 | SPARTA           | W   | 0.712      | 0.435        | -                | 0.983 (0.304)    | -         |     3.08 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           42 |     1768 | 2025-10-21 | Fire Flux        | W   | 0.692      | 0.435        | -                | 0.856 (0.257)    | -         |     3.10 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           41 |     1996 | 2025-10-11 | RUBY             | L   | 0.627      | -            | -                | -                | -         |   -13.78 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           40 |     2006 | 2025-10-11 | Johnny Speeds    | L   | 0.626      | -            | -                | -                | -         |    -9.96 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           39 |     2028 | 2025-10-10 | Partizan         | L   | 0.621      | -            | -                | -                | -         |   -17.75 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           38 |     2036 | 2025-10-10 | CYBERSHOKE       | W   | 0.620      | 0.435        | 0.062 (0.017)    | 1.000 (0.269)    | -         |    10.21 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           37 |     2071 | 2025-10-09 | SPARTA           | W   | 0.614      | 0.384        | -                | 0.983 (0.232)    | -         |     2.05 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           36 |     2173 | 2025-10-07 | Oramond          | W   | 0.601      | 0.384        | 0.081 (0.019)    | 1.000 (0.231)    | -         |     4.68 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           35 |     2183 | 2025-10-07 | Monte            | L   | 0.600      | -            | -                | -                | -         |    -9.02 | Beccie, Bl4zE, Cabbi, MistR, Zyphon   |
|           34 |     2239 | 2025-10-06 | ECLOT            | L   | 0.594      | -            | -                | -                | -         |   -12.56 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           33 |     2292 | 2025-10-05 | NOVAQ            | L   | 0.588      | -            | -                | -                | -         |   -14.48 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           32 |     2507 | 2025-09-30 | Friendly Campers | L   | 0.553      | -            | -                | -                | -         |    -5.50 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           31 |     2585 | 2025-09-28 | SINNERS          | W   | 0.539      | 0.435        | 0.190 (0.045)    | 0.793 (0.186)    | -         |     5.89 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           30 |     2688 | 2025-09-26 | FORZE Reload     | W   | 0.526      | -            | -                | -                | -         |     1.53 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           29 |     2731 | 2025-09-25 | RUBY             | L   | 0.520      | -            | -                | -                | -         |   -13.09 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           28 |     2742 | 2025-09-25 | HOTU             | L   | 0.519      | -            | -                | -                | -         |    -5.00 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           27 |     2790 | 2025-09-23 | FORZE Reload     | W   | 0.506      | -            | -                | -                | -         |     1.37 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           26 |     2792 | 2025-09-23 | SINNERS          | W   | 0.505      | 0.371        | 0.190 (0.036)    | -                | -         |     5.73 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           25 |     2831 | 2025-09-21 | Betclic          | W   | 0.493      | -            | -                | -                | -         |     1.59 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           24 |     2863 | 2025-09-20 | BetBoom          | L   | 0.486      | -            | -                | -                | -         |    -3.22 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           23 |     2887 | 2025-09-19 | HOTU             | W   | 0.480      | 0.435        | 0.063 (0.013)    | -                | -         |    10.79 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           22 |     2931 | 2025-09-18 | Metizport        | W   | 0.472      | -            | -                | -                | -         |     3.34 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           21 |     3093 | 2025-09-13 | Nexus            | L   | 0.440      | -            | -                | -                | -         |    -9.12 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           20 |     3137 | 2025-09-12 | JiJieHao         | W   | 0.434      | -            | -                | -                | -         |     1.43 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           19 |     3245 | 2025-09-10 | AaB              | W   | 0.420      | -            | -                | -                | -         |     0.82 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           18 |     3290 | 2025-09-09 | BC.Game          | L   | 0.414      | -            | -                | -                | -         |   -10.74 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           17 |     3851 | 2025-08-16 | Nexus            | L   | 0.254      | -            | -                | -                | -         |    -5.28 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           16 |     3896 | 2025-08-15 | Partizan         | W   | 0.247      | -            | -                | -                | -         |     0.40 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           15 |     3995 | 2025-08-13 | GUN5             | W   | 0.234      | -            | -                | -                | -         |     3.54 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           14 |     4049 | 2025-08-12 | PARIVISION       | L   | 0.227      | -            | -                | -                | -         |    -1.61 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           13 |     4135 | 2025-08-10 | BetBoom          | L   | 0.213      | -            | -                | -                | -         |    -1.49 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           12 |     4141 | 2025-08-10 | Phantom          | W   | 0.213      | -            | -                | -                | -         |     1.58 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           11 |     4177 | 2025-08-08 | fnatic           | L   | 0.201      | -            | -                | -                | -         |    -1.40 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           10 |     4220 | 2025-08-05 | Betclic          | W   | 0.181      | -            | -                | -                | -         |     0.53 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            9 |     4259 | 2025-08-02 | Nexus            | W   | 0.160      | -            | -                | -                | -         |     1.80 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            8 |     4303 | 2025-07-31 | ARCRED           | W   | 0.145      | -            | -                | -                | -         |     0.40 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            7 |     4318 | 2025-07-29 | 9INE             | L   | 0.134      | -            | -                | -                | -         |    -1.41 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            6 |     4576 | 2025-07-16 | PARIVISION       | L   | 0.048      | -            | -                | -                | -         |    -0.33 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|            5 |     4586 | 2025-07-16 | FUT              | W   | 0.046      | -            | -                | -                | -         |     1.24 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|            4 |     4596 | 2025-07-15 | Inner Circle     | L   | 0.041      | -            | -                | -                | -         |    -0.51 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|            3 |     4606 | 2025-07-15 | fnatic           | W   | 0.040      | -            | -                | -                | -         |     0.99 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|            2 |     4623 | 2025-07-14 | Liquid           | W   | 0.034      | 0.624        | 0.552 (0.012)    | -                | -         |     0.95 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|            1 |     4634 | 2025-07-14 | 1win             | W   | 0.031      | -            | -                | -                | -         |     0.10 | Beccie, Cabbi, Lucky, Patti, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,420.32)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      0.914 | $2,610.00      | $2,385.11       |
| 2025-11-08 |      0.815 | $1,305.00      | $1,063.52       |
| 2025-10-12 |      0.634 | $2,000.00      | $1,267.67       |
| 2025-10-01 |      0.561 | $2,000.00      | $1,121.71       |
| 2025-09-25 |      0.519 | $5,000.00      | $2,594.56       |
| 2025-09-21 |      0.494 | $2,000.00      | $987.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
