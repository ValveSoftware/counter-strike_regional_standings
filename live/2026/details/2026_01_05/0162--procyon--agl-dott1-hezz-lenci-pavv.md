### Roster Details<br />
Team Name: Procyon<br />
Roster: AGL, dott1, Hezz, lenci, pavv<br />
Global Rank: [162](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [33]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  765.1<br />
<br />
Final Rank Value (765.1) = Starting Rank Value (777.8) + Head To Head Adjustments (-12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.109[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.8
- 400 + ( ( 0.190 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 777.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      900 | 2025-11-13 | BESTIA            | L   | 0.849      | -            | -                | -                | -         |    -1.82 | AGL, dott1, Hezz, lenci, pavv |
|           28 |      979 | 2025-11-11 | FURIA fe          | W   | 0.833      | 0.371        | 0.014 (0.004)    | 0.253 (0.078)    | 0 (0.000) |    15.73 | AGL, dott1, Hezz, lenci, pavv |
|           27 |     1036 | 2025-11-09 | Vasco             | W   | 0.819      | 0.371        | 0.000 (0.000)    | 0.165 (0.050)    | 0 (0.000) |     6.41 | AGL, dott1, Hezz, lenci, pavv |
|           26 |     1119 | 2025-11-07 | Prison Breakers   | L   | 0.808      | -            | -                | -                | -         |   -20.00 | AGL, dott1, Hezz, lenci, pavv |
|           25 |     1241 | 2025-11-05 | Bounty Hunters    | L   | 0.795      | -            | -                | -                | -         |    -8.00 | AGL, dott1, Hezz, lenci, pavv |
|           24 |     1281 | 2025-11-04 | Fuego             | W   | 0.786      | 0.371        | 0.000 (0.000)    | 0.275 (0.080)    | 0 (0.000) |     8.01 | AGL, dott1, Hezz, lenci, pavv |
|           23 |     1527 | 2025-10-26 | Galorys           | L   | 0.729      | -            | -                | -                | -         |    -7.56 | AGL, dott1, Hezz, lenci, pavv |
|           22 |     1583 | 2025-10-25 | Crashers          | W   | 0.722      | 0.363        | 0.000 (0.000)    | 0.227 (0.059)    | 0 (0.000) |     5.51 | AGL, dott1, Hezz, lenci, pavv |
|           21 |     1650 | 2025-10-24 | BESTIA            | L   | 0.715      | -            | -                | -                | -         |    -1.08 | AGL, dott1, Hezz, lenci, pavv |
|           20 |     1698 | 2025-10-23 | Four Magic        | W   | 0.708      | 0.363        | -                | 0.165 (0.042)    | 0 (0.000) |     5.05 | AGL, dott1, Hezz, lenci, pavv |
|           19 |     1930 | 2025-10-14 | ShindeN           | L   | 0.649      | -            | -                | -                | -         |    -6.33 | AGL, dott1, Hezz, lenci, pavv |
|           18 |     1973 | 2025-10-12 | MIBR Academy      | L   | 0.634      | -            | -                | -                | -         |   -16.57 | AGL, dott1, Hezz, lenci, pavv |
|           17 |     2042 | 2025-10-10 | JERSA             | W   | 0.620      | -            | -                | -                | 0 (0.000) |     1.76 | AGL, dott1, Hezz, lenci, pavv |
|           16 |     2060 | 2025-10-09 | Sharks            | W   | 0.615      | 0.363        | 0.085 (0.019)    | 0.682 (0.152)    | 0 (0.000) |    18.39 | AGL, dott1, Hezz, lenci, pavv |
|           15 |     2110 | 2025-10-08 | Fuego             | W   | 0.608      | 0.363        | -                | 0.275 (0.061)    | 0 (0.000) |     5.93 | AGL, dott1, Hezz, lenci, pavv |
|           14 |     2132 | 2025-10-08 | Crashers          | L   | 0.607      | -            | -                | -                | -         |   -14.77 | AGL, dott1, Hezz, lenci, pavv |
|           13 |     2159 | 2025-10-07 | Galorys           | W   | 0.602      | 0.363        | 0.004 (0.001)    | 0.464 (0.101)    | -         |    13.54 | AGL, dott1, Hezz, lenci, pavv |
|           12 |     2232 | 2025-10-06 | Yawara            | L   | 0.594      | -            | -                | -                | -         |    -7.90 | AGL, dott1, Hezz, lenci, pavv |
|           11 |     2278 | 2025-10-05 | GameHunters       | L   | 0.589      | -            | -                | -                | -         |   -13.15 | AGL, dott1, Hezz, lenci, pavv |
|           10 |     2713 | 2025-09-25 | Dusty Roots       | L   | 0.522      | -            | -                | -                | -         |    -5.42 | AGL, dott1, Hezz, lenci, pavv |
|            9 |     2753 | 2025-09-24 | Dusty Roots       | W   | 0.515      | 0.314        | 0.011 (0.002)    | 0.348 (0.056)    | 1 (0.515) |    10.88 | AGL, dott1, Hezz, lenci, pavv |
|            8 |     2765 | 2025-09-24 | 9z                | W   | 0.514      | 0.314        | 0.080 (0.013)    | 0.502 (0.081)    | 1 (0.514) |    14.73 | AGL, dott1, Hezz, lenci, pavv |
|            7 |     3225 | 2025-09-10 | Fuego             | L   | 0.422      | -            | -                | -                | -         |    -9.67 | AGL, dott1, Hezz, lenci, pavv |
|            6 |     3344 | 2025-09-08 | MIBR fe           | W   | 0.407      | 0.371        | 0.129 (0.019)    | -                | -         |    11.33 | AGL, dott1, Hezz, lenci, pavv |
|            5 |     3409 | 2025-09-06 | Players           | L   | 0.393      | -            | -                | -                | -         |   -10.18 | AGL, dott1, Hezz, lenci, pavv |
|            4 |     3442 | 2025-09-04 | KRÜ               | L   | 0.382      | -            | -                | -                | -         |    -6.74 | AGL, dott1, Hezz, lenci, pavv |
|            3 |     4367 | 2025-07-27 | 9z                | L   | 0.121      | -            | -                | -                | -         |    -0.42 | AGL, dott1, Hezz, lenci, pavv |
|            2 |     4578 | 2025-07-16 | Gaimin Gladiators | L   | 0.047      | -            | -                | -                | -         |    -0.33 | AGL, dott1, Hezz, lenci, pavv |
|            1 |     4739 | 2025-07-09 | Yawara            | W   | 0.001      | 0.525        | 0.003 (0.000)    | -                | -         |     0.02 | AGL, dott1, Hezz, lenci, pavv |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($783.44)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-25 |      0.522 | $1,500.00      | $783.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
