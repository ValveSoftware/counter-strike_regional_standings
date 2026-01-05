### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, CYPHER, kRaSnaL, Rainwaker, volt<br />
Global Rank: [67](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [49]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1107.5<br />
<br />
Final Rank Value (1107.5) = Starting Rank Value (1046.0) + Head To Head Adjustments (61.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.322[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1046.0
- 400 + ( ( 0.326 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1046.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           88 |      222 | 2025-12-14 | magic            | L   | 1.000      | -            | -                | -                | -         |   -12.99 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           87 |      232 | 2025-12-13 | CYBERSHOKE       | W   | 1.000      | 0.435        | 0.062 (0.027)    | 1.000 (0.435)    | 0 (0.000) |    21.74 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           86 |      251 | 2025-12-12 | OG               | W   | 1.000      | 0.435        | 0.072 (0.031)    | -                | 0 (0.000) |    23.06 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           85 |      270 | 2025-12-10 | Sashi            | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.694 (0.301)    | 0 (0.000) |    21.09 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           84 |      318 | 2025-12-07 | Partizan         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.59 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           83 |      327 | 2025-12-07 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |   -11.37 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           82 |      330 | 2025-12-07 | Johnny Speeds    | L   | 1.000      | -            | -                | -                | -         |   -12.35 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           81 |      345 | 2025-12-06 | ECSTATIC         | L   | 1.000      | -            | -                | -                | -         |    -6.35 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           80 |      392 | 2025-12-04 | BASEMENT BOYS    | W   | 0.988      | -            | -                | -                | 0 (0.000) |     7.11 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           79 |      420 | 2025-12-03 | SPARTA           | W   | 0.980      | 0.371        | -                | 0.983 (0.357)    | 0 (0.000) |    14.64 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt   |
|           78 |      442 | 2025-12-02 | Sangal           | L   | 0.972      | -            | -                | -                | -         |   -11.73 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           77 |      520 | 2025-11-29 | Monte            | L   | 0.953      | -            | -                | -                | -         |    -7.87 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           76 |      665 | 2025-11-23 | AaB              | W   | 0.914      | -            | -                | -                | -         |     7.08 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           75 |      683 | 2025-11-22 | FAVBET           | L   | 0.908      | -            | -                | -                | -         |   -16.24 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           74 |      718 | 2025-11-21 | HEROIC           | L   | 0.901      | -            | -                | -                | -         |    -1.64 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           73 |      728 | 2025-11-21 | FORZE Reload     | L   | 0.900      | -            | -                | -                | -         |   -22.95 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           72 |      767 | 2025-11-20 | CPH Wolves       | W   | 0.894      | 0.384        | -                | 0.816 (0.280)    | -         |     7.62 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           71 |      804 | 2025-11-19 | ECLOT            | W   | 0.886      | 0.435        | 0.075 (0.029)    | 0.677 (0.261)    | -         |    14.09 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           70 |      813 | 2025-11-18 | 33               | W   | 0.881      | 0.435        | -                | 0.670 (0.256)    | -         |    13.54 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           69 |      826 | 2025-11-17 | RUBY             | W   | 0.873      | 0.435        | 0.046 (0.017)    | 0.962 (0.365)    | -         |    13.05 | CeRq, CYPHER, hampus, Rainwaker, volt    |
|           68 |      863 | 2025-11-15 | Betclic          | W   | 0.861      | -            | -                | -                | -         |     6.95 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           67 |      867 | 2025-11-15 | Leo              | L   | 0.860      | -            | -                | -                | -         |   -18.08 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           66 |      904 | 2025-11-13 | SPARTA           | W   | 0.848      | 0.435        | -                | 0.983 (0.362)    | -         |     8.90 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           65 |      916 | 2025-11-13 | Monte            | L   | 0.846      | -            | -                | -                | -         |    -6.79 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           64 |      939 | 2025-11-12 | NOVAQ            | W   | 0.841      | 0.384        | -                | 0.826 (0.267)    | -         |    11.29 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           63 |      943 | 2025-11-12 | CYBERSHOKE       | L   | 0.840      | -            | -                | -                | -         |    -7.03 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           62 |      951 | 2025-11-12 | Nuclear TigeRES  | L   | 0.839      | -            | -                | -                | -         |   -11.93 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           61 |      972 | 2025-11-11 | K27              | L   | 0.834      | -            | -                | -                | -         |    -4.18 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           60 |      977 | 2025-11-11 | 9BOOMPRO         | W   | 0.833      | -            | -                | -                | -         |     7.59 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           59 |      997 | 2025-11-10 | FORZE Reload     | W   | 0.828      | -            | -                | -                | -         |     6.48 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           58 |     1087 | 2025-11-08 | magic            | L   | 0.813      | -            | -                | -                | -         |   -12.99 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           57 |     1161 | 2025-11-07 | ECSTATIC         | W   | 0.806      | 0.435        | 0.108 (0.038)    | -                | -         |    20.25 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           56 |     1250 | 2025-11-05 | SPARTA           | W   | 0.793      | 0.435        | -                | 0.983 (0.339)    | -         |     7.87 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           55 |     1272 | 2025-11-04 | Nuclear TigeRES  | L   | 0.788      | -            | -                | -                | -         |   -12.43 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           54 |     1357 | 2025-11-01 | ALLINNERS        | W   | 0.767      | -            | -                | -                | -         |     5.49 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           53 |     1410 | 2025-10-30 | Washington       | W   | 0.753      | -            | -                | -                | -         |     3.63 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           52 |     1430 | 2025-10-29 | GUN5             | L   | 0.746      | -            | -                | -                | -         |    -5.73 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           51 |     1454 | 2025-10-28 | SINNERS          | L   | 0.741      | -            | -                | -                | -         |    -6.82 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           50 |     1533 | 2025-10-26 | Nexus            | W   | 0.728      | -            | -                | -                | -         |    11.62 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           49 |     1681 | 2025-10-24 | Washington       | W   | 0.712      | -            | -                | -                | -         |     4.13 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           48 |     1836 | 2025-10-17 | Nuclear TigeRES  | L   | 0.666      | -            | -                | -                | -         |   -11.14 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           47 |     1911 | 2025-10-15 | ARCRED           | W   | 0.652      | -            | -                | -                | -         |     6.98 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           46 |     1935 | 2025-10-14 | GUN5             | L   | 0.647      | -            | -                | -                | -         |    -4.96 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|           45 |     1968 | 2025-10-13 | Oramond          | L   | 0.640      | -            | -                | -                | -         |   -10.02 | CeRq, chawzyyy, Rainwaker, REDSTAR, volt |
|           44 |     2023 | 2025-10-10 | Sangal           | L   | 0.621      | -            | -                | -                | -         |    -7.97 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           43 |     2070 | 2025-10-09 | Leo              | W   | 0.614      | -            | -                | -                | -         |     5.23 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           42 |     2120 | 2025-10-08 | EYEBALLERS       | W   | 0.608      | 0.384        | 0.103 (0.024)    | -                | -         |    16.22 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           41 |     2149 | 2025-10-08 | Nemiga           | L   | 0.605      | -            | -                | -                | -         |    -9.51 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           40 |     2236 | 2025-10-06 | VP.Prodigy       | W   | 0.594      | -            | -                | -                | -         |     4.14 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           39 |     2244 | 2025-10-06 | kONO             | W   | 0.593      | -            | -                | -                | -         |     3.97 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           38 |     2384 | 2025-10-03 | Sangal           | W   | 0.574      | 0.435        | 0.027 (0.007)    | -                | -         |    11.45 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           37 |     2457 | 2025-10-01 | SPARTA           | W   | 0.561      | -            | -                | -                | -         |     5.18 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           36 |     2533 | 2025-09-29 | Friendly Campers | L   | 0.547      | -            | -                | -                | -         |    -1.84 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           35 |     2557 | 2025-09-29 | CPH Wolves       | L   | 0.544      | -            | -                | -                | -         |   -11.97 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           34 |     2600 | 2025-09-28 | Liquid           | L   | 0.538      | -            | -                | -                | -         |    -0.51 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           33 |     2630 | 2025-09-27 | Friendly Campers | W   | 0.534      | 0.354        | 0.109 (0.021)    | -                | 1 (0.534) |    15.09 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           32 |     2636 | 2025-09-27 | Betclic          | W   | 0.533      | -            | -                | -                | 1 (0.533) |     5.50 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           31 |     2654 | 2025-09-27 | Liquid           | L   | 0.532      | -            | -                | -                | -         |    -0.43 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           30 |     2669 | 2025-09-26 | kONO             | W   | 0.528      | -            | -                | -                | 1 (0.528) |     3.76 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           29 |     2695 | 2025-09-26 | BIG              | L   | 0.526      | -            | -                | -                | -         |    -2.43 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           28 |     2706 | 2025-09-26 | AaB              | W   | 0.525      | -            | -                | -                | 1 (0.525) |     3.22 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           27 |     2762 | 2025-09-24 | ARCRED           | W   | 0.514      | -            | -                | -                | -         |     6.09 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           26 |     2781 | 2025-09-23 | Tricked          | W   | 0.507      | -            | -                | -                | -         |     2.90 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|           25 |     2804 | 2025-09-22 | GUN5             | L   | 0.500      | -            | -                | -                | -         |    -3.02 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           24 |     2807 | 2025-09-22 | KHAN             | W   | 0.499      | -            | -                | -                | -         |     3.13 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           23 |     2855 | 2025-09-20 | FORZE Reload     | W   | 0.486      | -            | -                | -                | -         |     4.60 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           22 |     2865 | 2025-09-20 | RUBY             | L   | 0.485      | -            | -                | -                | -         |    -7.46 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           21 |     2961 | 2025-09-17 | AMKAL            | W   | 0.467      | -            | -                | -                | -         |     4.27 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           20 |     3003 | 2025-09-15 | SENZA            | W   | 0.454      | -            | -                | -                | -         |     1.58 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           19 |     3082 | 2025-09-13 | AMKAL            | L   | 0.441      | -            | -                | -                | -         |    -9.84 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           18 |     3253 | 2025-09-10 | SENZA            | W   | 0.420      | -            | -                | -                | -         |     1.60 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           17 |     3414 | 2025-09-06 | 1win             | L   | 0.392      | -            | -                | -                | -         |    -8.43 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           16 |     3416 | 2025-09-06 | AaB              | W   | 0.391      | -            | -                | -                | -         |     2.75 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           15 |     3424 | 2025-09-05 | Oramond          | L   | 0.387      | -            | -                | -                | -         |    -5.67 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           14 |     3431 | 2025-09-05 | ENCE             | L   | 0.386      | -            | -                | -                | -         |    -1.55 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           13 |     3656 | 2025-08-25 | ARCRED           | L   | 0.314      | -            | -                | -                | -         |    -7.05 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           12 |     3688 | 2025-08-23 | FAVBET           | W   | 0.299      | -            | -                | -                | -         |     3.19 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           11 |     3723 | 2025-08-21 | Eternal Fire     | L   | 0.286      | -            | -                | -                | -         |    -8.41 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|           10 |     3756 | 2025-08-20 | Metizport        | L   | 0.279      | -            | -                | -                | -         |    -4.15 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            9 |     3818 | 2025-08-17 | HOTU             | L   | 0.260      | -            | -                | -                | -         |    -0.78 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            8 |     3912 | 2025-08-15 | CYBERSHOKE       | L   | 0.246      | -            | -                | -                | -         |    -0.99 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            7 |     3957 | 2025-08-14 | SINNERS          | L   | 0.239      | -            | -                | -                | -         |    -1.69 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            6 |     4005 | 2025-08-13 | Passion UA       | W   | 0.233      | -            | -                | -                | -         |     0.79 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            5 |     4039 | 2025-08-12 | Betclic          | L   | 0.228      | -            | -                | -                | -         |    -5.13 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            4 |     4095 | 2025-08-11 | CYBERSHOKE       | W   | 0.221      | -            | -                | -                | -         |     6.08 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            3 |     4114 | 2025-08-11 | 9INE             | W   | 0.219      | 0.486        | 0.062 (0.007)    | -                | -         |     6.11 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            2 |     4224 | 2025-08-05 | ARCRED           | W   | 0.180      | -            | -                | -                | -         |     1.59 | CeRq, hampus, Rainwaker, REDSTAR, volt   |
|            1 |     4230 | 2025-08-05 | 33               | W   | 0.178      | -            | -                | -                | -         |     2.66 | CeRq, hampus, Rainwaker, REDSTAR, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,438.89)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-11-23 |      0.914 | $500.00        | $457.01         |
| 2025-11-16 |      0.868 | $750.00        | $650.65         |
| 2025-11-13 |      0.847 | $3,000.00      | $2,540.52       |
| 2025-11-09 |      0.821 | $2,000.00      | $1,642.01       |
| 2025-09-28 |      0.541 | $275.00        | $148.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
