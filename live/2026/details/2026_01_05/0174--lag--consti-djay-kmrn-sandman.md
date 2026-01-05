### Roster Details<br />
Team Name: LAG<br />
Roster: consti, djay, kmrn, Sandman<br />
Global Rank: [174](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [36]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  729.0<br />
<br />
Final Rank Value (729.0) = Starting Rank Value (705.8) + Head To Head Adjustments (23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.8
- 400 + ( ( 0.154 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 705.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      206 | 2025-12-16 | BOSS            | L   | 1.000      | -            | -                | -                | -         |   -10.88 | consti, djay, kmrn, Pluto, Sandman      |
|           34 |      215 | 2025-12-14 | 33              | W   | 1.000      | 0.278        | 0.002 (0.000)    | -                | 0 (0.000) |     8.20 | consti, djay, kmrn, Sandman, xaler      |
|           33 |      241 | 2025-12-12 | Kraken Seas     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.23 | consti, djay, kmrn, Sandman, xaler      |
|           32 |      257 | 2025-12-11 | InControl       | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.200 (0.067)    | 0 (0.000) |    14.04 | consti, djay, kmrn, Pluto, Sandman      |
|           31 |      278 | 2025-12-09 | Akimbo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.98 | consti, djay, kmrn, Pluto, Sandman      |
|           30 |      315 | 2025-12-07 | Aether          | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.102 (0.034)    | 0 (0.000) |    13.10 | consti, djay, kmrn, Pluto, Sandman      |
|           29 |      362 | 2025-12-05 | Pulse           | L   | 0.997      | -            | -                | -                | -         |   -22.84 | consti, djay, kmrn, REKMEISTER, Sandman |
|           28 |      428 | 2025-12-02 | Outfit 49       | L   | 0.976      | -            | -                | -                | -         |   -20.71 | consti, djay, kmrn, REKMEISTER, Sandman |
|           27 |      964 | 2025-11-11 | BOSS            | L   | 0.836      | -            | -                | -                | -         |   -10.36 | consti, djay, kmrn, mason, Sandman      |
|           26 |      992 | 2025-11-10 | SkinRave        | L   | 0.829      | -            | -                | -                | -         |    -5.12 | consti, djay, kmrn, mason, Sandman      |
|           25 |     1419 | 2025-10-29 | BOSS            | L   | 0.749      | -            | -                | -                | -         |   -10.37 | consti, djay, kmrn, mason, Sandman      |
|           24 |     1514 | 2025-10-26 | Mythic          | W   | 0.730      | 0.363        | 0.002 (0.001)    | 0.208 (0.055)    | 0 (0.000) |     9.86 | consti, djay, kmrn, mason, Sandman      |
|           23 |     1573 | 2025-10-25 | OverKnight      | W   | 0.723      | 0.333        | 0.000 (0.000)    | 0.266 (0.064)    | 0 (0.000) |    10.05 | consti, djay, kmrn, mason, Sandman      |
|           22 |     1582 | 2025-10-25 | Marsborne       | L   | 0.722      | -            | -                | -                | -         |    -2.18 | consti, djay, kmrn, mason, Sandman      |
|           21 |     1632 | 2025-10-24 | Wanted Goons    | W   | 0.716      | 0.363        | -                | 0.141 (0.037)    | 0 (0.000) |     5.63 | consti, djay, kmrn, mason, Sandman      |
|           20 |     1757 | 2025-10-21 | Marsborne       | L   | 0.696      | -            | -                | -                | -         |    -2.10 | consti, djay, kmrn, mason, Sandman      |
|           19 |     1852 | 2025-10-16 | Phoenix         | W   | 0.662      | 0.333        | 0.003 (0.001)    | 0.287 (0.063)    | 0 (0.000) |    10.42 | consti, djay, kmrn, mason, Sandman      |
|           18 |     1960 | 2025-10-13 | Outfit 49       | W   | 0.642      | 0.333        | -                | 0.181 (0.039)    | 0 (0.000) |     6.67 | consti, djay, kmrn, mason, Sandman      |
|           17 |     2050 | 2025-10-09 | BOSS            | L   | 0.616      | -            | -                | -                | -         |    -8.46 | consti, djay, mason, Sandman, Wolffe    |
|           16 |     2096 | 2025-10-08 | Marsborne       | L   | 0.610      | -            | -                | -                | -         |    -1.59 | consti, djay, mason, Sandman, Wolffe    |
|           15 |     2211 | 2025-10-06 | FlyQuest RED    | W   | 0.596      | 0.363        | 0.018 (0.004)    | 0.272 (0.059)    | -         |    10.80 | consti, djay, mason, Sandman, Wolffe    |
|           14 |     2814 | 2025-09-21 | SportsBetExpert | W   | 0.496      | 0.278        | 0.003 (0.000)    | -                | -         |     6.73 | consti, djay, mason, Sandman, Wolffe    |
|           13 |     2845 | 2025-09-20 | NuTorious       | W   | 0.489      | -            | -                | -                | -         |     4.19 | consti, djay, mason, Sandman, Wolffe    |
|           12 |     2904 | 2025-09-18 | SkinRave        | L   | 0.476      | -            | -                | -                | -         |    -2.99 | consti, djay, mason, Sandman, Wolffe    |
|           11 |     2936 | 2025-09-17 | Wanted Goons    | W   | 0.470      | -            | -                | -                | -         |     4.34 | consti, djay, mason, Sandman, Wolffe    |
|           10 |     3076 | 2025-09-13 | BOSS            | L   | 0.442      | -            | -                | -                | -         |    -5.39 | consti, djay, mason, Sandman, Wolffe    |
|            9 |     3123 | 2025-09-12 | anything else   | W   | 0.436      | -            | -                | -                | -         |     3.38 | consti, djay, mason, Sandman, Wolffe    |
|            8 |     3166 | 2025-09-11 | Voca            | L   | 0.429      | -            | -                | -                | -         |    -2.99 | consti, djay, mason, Sandman, Wolffe    |
|            7 |     3270 | 2025-09-09 | OverKnight      | W   | 0.416      | 0.363        | 0.000 (0.000)    | 0.266 (0.040)    | -         |     5.96 | consti, djay, mason, Sandman, Wolffe    |
|            6 |     3604 | 2025-08-27 | Voca            | L   | 0.329      | -            | -                | -                | -         |    -2.19 | consti, djay, mason, Sandman, Wolffe    |
|            5 |     3632 | 2025-08-26 | BOSS            | L   | 0.322      | -            | -                | -                | -         |    -4.08 | consti, djay, mason, Sandman, Wolffe    |
|            4 |     3694 | 2025-08-22 | regain          | W   | 0.296      | 0.333        | 0.005 (0.001)    | 0.404 (0.040)    | -         |     4.96 | consti, djay, mason, Sandman, Wolffe    |
|            3 |     3709 | 2025-08-21 | TSG             | W   | 0.289      | -            | -                | -                | -         |     2.52 | consti, djay, mason, Sandman, Wolffe    |
|            2 |     3763 | 2025-08-19 | Voca            | L   | 0.277      | -            | -                | -                | -         |    -1.83 | consti, djay, mason, Sandman, Wolffe    |
|            1 |     3804 | 2025-08-17 | Money Crew      | W   | 0.262      | -            | -                | -                | -         |     3.15 | consti, djay, mason, Sandman, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,574.01)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $1,750.00      | $1,750.00       |
| 2025-11-15 |      0.863 | $1,000.00      | $863.17         |
| 2025-09-22 |      0.503 | $1,000.00      | $502.86         |
| 2025-08-17 |      0.262 | $1,750.00      | $457.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
