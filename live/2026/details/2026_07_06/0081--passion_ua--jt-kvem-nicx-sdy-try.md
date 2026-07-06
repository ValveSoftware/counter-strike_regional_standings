### Roster Details<br />
Team Name: Passion UA<br />
Roster: JT, Kvem, nicx, sdy, try<br />
Global Rank: [81](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [16]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  1057.5<br />
<br />
Final Rank Value (1057.5) = Starting Rank Value (1105.2) + Head To Head Adjustments (-47.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.658[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1105.2
- 400 + ( ( 0.374 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1105.2


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
|           45 |     1083 | 2026-05-21 | Betclic           | L   | 0.891      | -            | -                | -                | -         |   -12.53 | JT, Kvem, nicx, sdy, try       |
|           44 |     1084 | 2026-05-21 | OG                | L   | 0.891      | -            | -                | -                | -         |   -13.06 | JT, Kvem, nicx, sdy, try       |
|           43 |     1085 | 2026-05-21 | Rebels            | L   | 0.891      | -            | -                | -                | -         |   -16.98 | JT, Kvem, nicx, sdy, try       |
|           42 |     1086 | 2026-05-21 | Metizport         | L   | 0.891      | -            | -                | -                | -         |   -14.15 | JT, Kvem, nicx, sdy, try       |
|           41 |     1311 | 2026-05-12 | SINNERS           | L   | 0.836      | -            | -                | -                | -         |    -8.88 | JT, Kvem, nicx, sdy, try       |
|           40 |     1354 | 2026-05-11 | Natus Vincere     | L   | 0.829      | -            | -                | -                | -         |    -0.46 | JT, Kvem, nicx, sdy, try       |
|           39 |     1687 | 2026-04-30 | FOKUS             | L   | 0.755      | -            | -                | -                | -         |    -7.48 | JT, Kvem, nicx, sdy, try       |
|           38 |     1864 | 2026-04-26 | Marsborne         | W   | 0.728      | 0.371        | 0.010 (0.003)    | 0.333 (0.090)    | 1 (0.728) |     7.53 | JT, Kvem, nicx, Senzu, try     |
|           37 |     1875 | 2026-04-26 | Wildcard          | L   | 0.728      | -            | -                | -                | -         |    -6.47 | JT, Kvem, nicx, Senzu, try     |
|           36 |     1916 | 2026-04-25 | NRG               | W   | 0.724      | 0.371        | 0.073 (0.019)    | -                | 1 (0.724) |    12.08 | JT, Kvem, nicx, Senzu, try     |
|           35 |     1924 | 2026-04-25 | NuTorious         | W   | 0.722      | -            | -                | -                | 1 (0.722) |     0.69 | JT, Kvem, nicx, Senzu, try     |
|           34 |     1933 | 2026-04-25 | Fisher College    | L   | 0.722      | -            | -                | -                | -         |   -14.54 | JT, Kvem, nicx, Senzu, try     |
|           33 |     1951 | 2026-04-25 | AGA               | W   | 0.721      | -            | -                | -                | 1 (0.721) |     0.37 | JT, Kvem, nicx, Senzu, try     |
|           32 |     2217 | 2026-04-14 | B8                | L   | 0.648      | -            | -                | -                | -         |    -1.54 | FaNg, JT, Kvem, nicx, try      |
|           31 |     2236 | 2026-04-13 | FURIA             | L   | 0.642      | -            | -                | -                | -         |    -0.55 | FaNg, JT, Kvem, nicx, try      |
|           30 |     2468 | 2026-04-05 | Sangal            | L   | 0.588      | -            | -                | -                | -         |   -13.99 | JT, Kvem, nicx, Senzu, try     |
|           29 |     2486 | 2026-04-05 | BESTIA            | W   | 0.586      | 0.333        | 0.013 (0.003)    | 0.496 (0.097)    | 1 (0.586) |    10.26 | JT, Kvem, nicx, Senzu, try     |
|           28 |     2557 | 2026-04-04 | ASTRAL            | W   | 0.580      | 0.333        | 0.012 (0.002)    | 0.898 (0.174)    | 1 (0.580) |     7.25 | JT, Kvem, nicx, Senzu, try     |
|           27 |     2571 | 2026-04-04 | PURE              | W   | 0.579      | -            | -                | -                | 1 (0.579) |     0.50 | JT, Kvem, nicx, Senzu, try     |
|           26 |     2808 | 2026-04-01 | Alliance          | L   | 0.561      | -            | -                | -                | -         |    -3.07 | JT, Kvem, nicx, Senzu, try     |
|           25 |     2831 | 2026-04-01 | Sashi             | W   | 0.560      | 0.354        | 0.012 (0.002)    | 0.490 (0.097)    | 1 (0.560) |     8.49 | JT, Kvem, nicx, Senzu, try     |
|           24 |     2881 | 2026-03-31 | Monte             | L   | 0.555      | -            | -                | -                | -         |    -1.92 | JT, Kvem, nicx, Senzu, try     |
|           23 |     2924 | 2026-03-31 | FaZe              | W   | 0.553      | 0.354        | 0.310 (0.061)    | 0.327 (0.064)    | 1 (0.553) |    14.68 | JT, Kvem, nicx, Senzu, try     |
|           22 |     3009 | 2026-03-30 | Eternal Fire      | W   | 0.546      | 0.354        | -                | 0.632 (0.122)    | 1 (0.546) |     8.33 | JT, Kvem, nicx, Senzu, try     |
|           21 |     3350 | 2026-03-24 | Echo              | L   | 0.507      | -            | -                | -                | -         |    -4.88 | JT, Kvem, nicx, Senzu, try     |
|           20 |     3383 | 2026-03-24 | BASEMENT BOYS     | L   | 0.505      | -            | -                | -                | -         |    -7.55 | JT, Kvem, nicx, Senzu, try     |
|           19 |     4322 | 2026-03-05 | FOKUS             | L   | 0.381      | -            | -                | -                | -         |    -2.96 | JT, Kvem, nicx, Senzu, try     |
|           18 |     4378 | 2026-03-04 | HEROIC            | L   | 0.374      | -            | -                | -                | -         |    -3.32 | JT, Kvem, nicx, Senzu, try     |
|           17 |     4422 | 2026-03-03 | paiN              | L   | 0.368      | -            | -                | -                | -         |    -1.68 | JT, Kvem, nicx, Senzu, try     |
|           16 |     4468 | 2026-03-02 | FUT               | L   | 0.361      | -            | -                | -                | -         |    -0.44 | JT, Kvem, nicx, Senzu, try     |
|           15 |     4503 | 2026-03-01 | Liquid            | W   | 0.355      | 0.613        | 0.101 (0.022)    | -                | -         |     7.72 | JT, Kvem, nicx, Senzu, try     |
|           14 |     4947 | 2026-02-21 | Gentle Mates      | L   | 0.299      | -            | -                | -                | -         |    -2.88 | Grim, JT, Kvem, nicx, try      |
|           13 |     5018 | 2026-02-19 | Rebels            | W   | 0.289      | 0.342        | -                | 0.614 (0.061)    | -         |     4.28 | Grim, JT, Kvem, nicx, try      |
|           12 |     5030 | 2026-02-19 | ALGO              | W   | 0.288      | -            | -                | -                | -         |     0.33 | Grim, JT, Kvem, nicx, try      |
|           11 |     5032 | 2026-02-19 | Rebels            | L   | 0.288      | -            | -                | -                | -         |    -4.87 | Grim, JT, Kvem, nicx, try      |
|           10 |     5396 | 2026-02-12 | Wildcard          | W   | 0.243      | 0.769        | 0.109 (0.020)    | 0.517 (0.097)    | -         |     5.86 | Grim, hallzerk, JT, Kvem, nicx |
|            9 |     5437 | 2026-02-11 | Wildcard          | W   | 0.236      | 0.769        | 0.109 (0.020)    | 0.517 (0.094)    | -         |     5.77 | Grim, hallzerk, JT, Kvem, nicx |
|            8 |     5469 | 2026-02-10 | insane players    | W   | 0.230      | -            | -                | -                | -         |     0.76 | Grim, hallzerk, JT, Kvem, nicx |
|            7 |     5486 | 2026-02-10 | Villainous        | W   | 0.228      | -            | -                | -                | -         |     0.57 | Grim, hallzerk, JT, Kvem, nicx |
|            6 |     5539 | 2026-02-08 | NRG               | L   | 0.214      | -            | -                | -                | -         |    -3.15 | Grim, hallzerk, JT, Kvem, nicx |
|            5 |     5561 | 2026-02-07 | M80               | W   | 0.209      | 0.769        | 0.070 (0.011)    | 0.558 (0.090)    | -         |     5.20 | Grim, hallzerk, JT, Kvem, nicx |
|            4 |     5594 | 2026-02-06 | BOSS              | W   | 0.202      | -            | -                | -                | -         |     0.43 | Grim, hallzerk, JT, Kvem, nicx |
|            3 |     5845 | 2026-01-29 | Ninjas in Pyjamas | L   | 0.147      | -            | -                | -                | -         |    -1.21 | Grim, hallzerk, JT, Kvem, nicx |
|            2 |     5861 | 2026-01-28 | G2                | L   | 0.142      | -            | -                | -                | -         |    -0.13 | Grim, hallzerk, JT, Kvem, nicx |
|            1 |     6357 | 2026-01-14 | GamerLegion       | L   | 0.046      | -            | -                | -                | -         |    -0.07 | Grim, hallzerk, JT, Kvem, nicx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,369.29)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.868 | $4,000.00      | $3,473.11       |
| 2026-04-26 |      0.729 | $2,600.00      | $1,894.36       |
| 2026-04-19 |      0.681 | $4,000.00      | $2,724.88       |
| 2026-04-05 |      0.588 | $3,000.00      | $1,762.69       |
| 2026-04-02 |      0.568 | $1,500.00      | $851.78         |
| 2026-03-05 |      0.381 | $4,500.00      | $1,715.00       |
| 2026-01-30 |      0.154 | $2,500.00      | $386.22         |
| 2026-01-18 |      0.075 | $7,500.00      | $561.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
