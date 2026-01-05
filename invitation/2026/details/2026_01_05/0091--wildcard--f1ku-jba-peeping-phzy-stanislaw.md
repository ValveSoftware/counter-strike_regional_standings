### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [91](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [20]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  982.6<br />
<br />
Final Rank Value (982.6) = Starting Rank Value (921.5) + Head To Head Adjustments (61.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.243[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.5
- 400 + ( ( 0.263 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 921.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     1783 | 2025-10-19 | SkinRave          | L   | 0.683      | -            | -                | -                | -         |   -10.78 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           41 |     1799 | 2025-10-18 | Marsborne         | W   | 0.676      | 0.363        | 0.037 (0.009)    | 0.689 (0.169)    | 0 (0.000) |    15.22 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           40 |     1850 | 2025-10-16 | Voca              | W   | 0.663      | 0.363        | 0.042 (0.010)    | 0.620 (0.149)    | 0 (0.000) |     9.83 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           39 |     1888 | 2025-10-15 | regain            | W   | 0.656      | 0.363        | -                | 0.404 (0.096)    | 0 (0.000) |     4.97 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           38 |     1926 | 2025-10-14 | Marsborne         | L   | 0.649      | -            | -                | -                | -         |    -5.08 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           37 |     2099 | 2025-10-08 | Phoenix           | W   | 0.609      | 0.363        | -                | 0.287 (0.063)    | 0 (0.000) |     4.08 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           36 |     2213 | 2025-10-06 | Mythic            | W   | 0.596      | -            | -                | -                | 0 (0.000) |     3.11 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           35 |     2222 | 2025-10-06 | Zomblers          | L   | 0.595      | -            | -                | -                | -         |   -15.42 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           34 |     2337 | 2025-10-04 | OG                | L   | 0.582      | -            | -                | -                | -         |    -2.62 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           33 |     2352 | 2025-10-04 | CPH Wolves        | W   | 0.580      | 0.333        | -                | 0.816 (0.158)    | 1 (0.580) |     7.36 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           32 |     2671 | 2025-09-26 | Betclic           | L   | 0.528      | -            | -                | -                | -         |   -10.10 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           31 |     2691 | 2025-09-26 | Phantom           | L   | 0.526      | -            | -                | -                | -         |   -12.30 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           30 |     2701 | 2025-09-26 | MOUZ NXT          | W   | 0.525      | 0.354        | -                | 0.832 (0.155)    | 1 (0.525) |    14.18 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           29 |     2795 | 2025-09-22 | Marsborne         | W   | 0.503      | 0.363        | 0.037 (0.007)    | 0.689 (0.126)    | -         |    11.93 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           28 |     2813 | 2025-09-21 | Voca              | W   | 0.497      | 0.363        | 0.042 (0.008)    | 0.620 (0.112)    | -         |     7.39 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           27 |     2871 | 2025-09-19 | SkinRave          | W   | 0.483      | 0.363        | 0.050 (0.009)    | 0.546 (0.096)    | -         |     7.74 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           26 |     2905 | 2025-09-18 | Aether            | W   | 0.476      | -            | -                | -                | -         |     2.59 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           25 |     2937 | 2025-09-17 | Voca              | L   | 0.470      | -            | -                | -                | -         |    -7.68 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           24 |     3026 | 2025-09-14 | Marsborne         | L   | 0.450      | -            | -                | -                | -         |    -3.44 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           23 |     3033 | 2025-09-14 | BOSS              | W   | 0.448      | 0.303        | -                | 0.470 (0.064)    | -         |     4.10 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           22 |     3078 | 2025-09-13 | barry pickers     | W   | 0.442      | -            | -                | -                | -         |     0.59 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           21 |     3167 | 2025-09-11 | Akimbo            | W   | 0.429      | -            | -                | -                | -         |     2.24 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           20 |     3271 | 2025-09-09 | Nocturnal         | W   | 0.416      | -            | -                | -                | -         |     2.13 | JBa, Peeping, phzy, Sonic, stanislaw  |
|           19 |     3366 | 2025-09-07 | ODDIK             | W   | 0.402      | 0.333        | 0.019 (0.003)    | -                | 1 (0.402) |     7.81 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           18 |     3371 | 2025-09-07 | Ninjas in Pyjamas | L   | 0.401      | -            | -                | -                | -         |    -0.45 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           17 |     3386 | 2025-09-06 | Fluxo             | W   | 0.396      | 0.333        | 0.036 (0.005)    | -                | 1 (0.396) |    10.98 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           16 |     3401 | 2025-09-06 | powerFinesse      | W   | 0.394      | -            | -                | -                | 1 (0.394) |     0.59 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           15 |     3503 | 2025-08-30 | Voca              | L   | 0.349      | -            | -                | -                | -         |    -5.35 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           14 |     3581 | 2025-08-28 | regain            | W   | 0.335      | -            | -                | -                | -         |     2.54 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           13 |     3708 | 2025-08-21 | Voca              | W   | 0.289      | 0.333        | 0.042 (0.004)    | -                | -         |     4.74 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           12 |     3765 | 2025-08-19 | BOSS              | W   | 0.276      | -            | -                | -                | -         |     2.66 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           11 |     3830 | 2025-08-16 | Voca              | L   | 0.256      | -            | -                | -                | -         |    -4.01 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           10 |     3875 | 2025-08-15 | NRG               | L   | 0.249      | -            | -                | -                | -         |    -0.45 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            9 |     3926 | 2025-08-14 | M80               | W   | 0.242      | 0.333        | 0.075 (0.006)    | -                | -         |     7.31 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            8 |     3972 | 2025-08-13 | TSG               | W   | 0.236      | -            | -                | -                | -         |     0.74 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            7 |     4025 | 2025-08-12 | Phoenix           | W   | 0.229      | -            | -                | -                | -         |     1.74 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            6 |     4269 | 2025-08-01 | M80               | L   | 0.156      | -            | -                | -                | -         |    -0.20 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            5 |     4281 | 2025-08-01 | Marsborne         | L   | 0.154      | -            | -                | -                | -         |    -0.91 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            4 |     4295 | 2025-07-31 | NRG               | W   | 0.150      | 0.616        | 0.048 (0.004)    | -                | -         |     4.47 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            3 |     4305 | 2025-07-30 | LAG               | W   | 0.142      | -            | -                | -                | -         |     0.71 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            2 |     4357 | 2025-07-27 | SkinRave          | L   | 0.122      | -            | -                | -                | -         |    -2.10 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            1 |     4393 | 2025-07-26 | MIGHT             | W   | 0.116      | -            | -                | -                | -         |     0.19 | fr3nd, JBa, Peeping, Sonic, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,526.60)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.683 | $4,000.00      | $2,732.21       |
| 2025-10-08 |      0.609 | $250.00        | $152.23         |
| 2025-09-22 |      0.503 | $8,000.00      | $4,022.89       |
| 2025-09-14 |      0.450 | $1,000.00      | $449.56         |
| 2025-09-07 |      0.403 | $1,300.00      | $523.61         |
| 2025-09-02 |      0.370 | $1,000.00      | $369.70         |
| 2025-08-15 |      0.249 | $2,000.00      | $498.22         |
| 2025-08-01 |      0.156 | $5,000.00      | $778.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
