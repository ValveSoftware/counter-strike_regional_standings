### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [22](../standings_global.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
Final Rank Value:  1417.0<br />
<br />
Final Rank Value (1417.0) = Starting Rank Value (1680.8) + Head To Head Adjustments (-263.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.776[<sup>1</sup>](#table2)
- Bounty Collected: 0.525[<sup>2</sup>](#table1)
- Opponent Network: 0.234[<sup>2</sup>](#table1)
- LAN Wins: 0.851[<sup>2</sup>](#table1)

The average of these factors is 0.596<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1680.8
- 400 + ( ( 0.596 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1680.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       48 | 2024-07-16 | PERA               | W   | 1.000      | 0.500        | 0.067 (0.033)    | 0.454 (0.227)    | -         |     3.75 | deko, KENSI, Lack1, Norwi, r3salt     |
|           78 |      331 | 2024-06-16 | Complexity         | L   | 0.992      | -            | -                | -                | -         |    -4.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      399 | 2024-06-14 | The MongolZ        | W   | 0.979      | 0.500        | 1.000 (0.490)    | 0.653 (0.320)    | 1 (0.979) |    29.15 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      409 | 2024-06-14 | Falcons            | W   | 0.978      | 0.500        | 0.344 (0.168)    | -                | 1 (0.978) |    21.79 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      508 | 2024-06-10 | 9 Pandas           | W   | 0.952      | -            | -                | -                | -         |     6.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |      512 | 2024-06-10 | Monte              | W   | 0.952      | -            | -                | -                | -         |     3.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |      516 | 2024-06-10 | SAW                | L   | 0.952      | -            | -                | -                | -         |   -20.85 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |      544 | 2024-06-09 | Monte              | L   | 0.947      | -            | -                | -                | -         |   -26.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      551 | 2024-06-09 | PARIVISION         | W   | 0.946      | -            | -                | -                | -         |     3.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      560 | 2024-06-09 | RUSH B             | L   | 0.946      | -            | -                | -                | -         |   -28.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      566 | 2024-06-09 | 3DMAX              | L   | 0.945      | -            | -                | -                | -         |   -23.63 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      573 | 2024-06-09 | SINNERS            | L   | 0.945      | -            | -                | -                | -         |   -27.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      660 | 2024-06-07 | Sangal             | L   | 0.934      | -            | -                | -                | -         |   -24.76 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      677 | 2024-06-07 | Verdant            | W   | 0.933      | -            | -                | -                | -         |     0.85 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      679 | 2024-06-07 | PERA               | W   | 0.933      | -            | -                | -                | -         |     1.80 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      717 | 2024-06-06 | RUSH B             | W   | 0.928      | 0.500        | -                | 0.327 (0.152)    | -         |     0.90 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      782 | 2024-06-05 | PARIVISION         | W   | 0.921      | 0.500        | -                | 0.424 (0.195)    | -         |     1.95 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      833 | 2024-06-04 | 3DMAX              | L   | 0.914      | -            | -                | -                | -         |   -24.12 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      900 | 2024-06-02 | BLEED              | L   | 0.897      | -            | -                | -                | -         |   -23.64 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      925 | 2024-06-01 | Lynn Vision        | W   | 0.893      | 0.500        | 0.126 (0.056)    | -                | 1 (0.893) |     2.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      934 | 2024-06-01 | Chinggis Warriors  | W   | 0.891      | -            | -                | -                | 1 (0.891) |     0.33 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |     1009 | 2024-05-29 | The MongolZ        | L   | 0.872      | -            | -                | -                | -         |    -3.28 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     1032 | 2024-05-28 | Lynn Vision        | W   | 0.865      | 0.500        | 0.126 (0.054)    | -                | 1 (0.865) |     2.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     1203 | 2024-05-21 | Astralis           | L   | 0.819      | -            | -                | -                | -         |    -3.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     1333 | 2024-05-17 | SAW                | W   | 0.792      | 0.769        | 0.147 (0.090)    | 0.544 (0.332)    | -         |     5.06 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     1348 | 2024-05-16 | PARIVISION         | W   | 0.788      | 0.769        | -                | 0.424 (0.257)    | -         |     1.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1357 | 2024-05-16 | MIBR               | L   | 0.787      | -            | -                | -                | -         |   -11.09 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1370 | 2024-05-16 | SAW                | L   | 0.785      | -            | -                | -                | -         |   -20.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1421 | 2024-05-15 | Spirit             | L   | 0.779      | -            | -                | -                | -         |    -2.13 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1564 | 2024-05-10 | MOUZ NXT           | L   | 0.748      | -            | -                | -                | -         |   -22.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1822 | 2024-04-28 | MIBR               | L   | 0.665      | -            | -                | -                | -         |   -11.13 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     1823 | 2024-04-28 | Rebels             | W   | 0.664      | 0.500        | -                | 0.575 (0.191)    | 1 (0.664) |     0.99 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     1849 | 2024-04-27 | Party Astronauts   | W   | 0.658      | 0.500        | -                | 0.604 (0.199)    | 1 (0.658) |     0.72 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     1873 | 2024-04-25 | Apeks              | L   | 0.651      | -            | -                | -                | -         |   -19.55 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     1877 | 2024-04-25 | Party Astronauts   | W   | 0.649      | 0.500        | -                | 0.604 (0.196)    | 1 (0.649) |     0.64 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     2083 | 2024-04-18 | RUBY               | L   | 0.600      | -            | -                | -                | -         |   -18.35 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     2193 | 2024-04-14 | OG                 | W   | 0.574      | 0.684        | 0.210 (0.082)    | -                | -         |     1.40 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     2207 | 2024-04-13 | BetBoom            | W   | 0.567      | 0.684        | 0.403 (0.156)    | 0.704 (0.273)    | -         |     7.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     2218 | 2024-04-12 | AMKAL              | W   | 0.561      | -            | -                | -                | -         |     0.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     2241 | 2024-04-11 | BetBoom            | W   | 0.555      | -            | -                | -                | -         |     7.97 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     2248 | 2024-04-11 | Apeks              | W   | 0.554      | -            | -                | -                | -         |     0.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     2253 | 2024-04-11 | FORZE              | W   | 0.553      | 0.684        | 0.095 (0.036)    | -                | -         |     0.62 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     2282 | 2024-04-10 | PARIVISION         | W   | 0.548      | -            | -                | -                | -         |     0.46 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     2295 | 2024-04-10 | BetBoom            | L   | 0.547      | -            | -                | -                | -         |    -9.47 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     2342 | 2024-04-09 | KOI                | L   | 0.541      | -            | -                | -                | -         |   -15.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     2352 | 2024-04-09 | 1WIN               | W   | 0.540      | -            | -                | -                | -         |     0.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     2359 | 2024-04-09 | 9 Pandas           | W   | 0.539      | -            | -                | -                | -         |     0.76 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     2370 | 2024-04-08 | Metizport          | W   | 0.534      | -            | -                | -                | -         |     0.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     2374 | 2024-04-08 | OG                 | W   | 0.534      | 0.684        | 0.210 (0.077)    | -                | -         |     0.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2387 | 2024-04-08 | 1WIN               | L   | 0.532      | -            | -                | -                | -         |   -16.46 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2476 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.507      | -            | -                | -                | -         |    10.92 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     2517 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.501      | -            | -                | -                | -         |    11.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     2555 | 2024-04-02 | Apeks              | W   | 0.494      | -            | -                | -                | -         |     0.53 | deko, KENSI, Lack1, Norwi, r3salt     |
|           26 |     2563 | 2024-04-02 | Metizport          | W   | 0.493      | -            | -                | -                | -         |     0.39 | deko, KENSI, Lack1, Norwi, r3salt     |
|           25 |     2575 | 2024-04-01 | SINNERS            | L   | 0.488      | -            | -                | -                | -         |   -14.67 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2615 | 2024-03-28 | brazylijski luz    | W   | 0.461      | -            | -                | -                | -         |     0.16 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2646 | 2024-03-27 | Metizport          | W   | 0.455      | -            | -                | -                | -         |     0.35 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2653 | 2024-03-27 | AURA               | W   | 0.454      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2687 | 2024-03-25 | Rebels             | W   | 0.441      | -            | -                | -                | -         |     0.47 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2703 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.428      | -            | -                | -                | -         |     0.42 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2718 | 2024-03-22 | ex-Sprout          | W   | 0.421      | -            | -                | -                | -         |     0.03 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     2841 | 2024-03-16 | Gods Reign         | W   | 0.379      | -            | -                | -                | 1 (0.379) |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     2863 | 2024-03-15 | Gods Reign         | W   | 0.372      | -            | -                | -                | 1 (0.372) |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     2897 | 2024-03-14 | Bad News Kangaroos | W   | 0.364      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     3155 | 2024-03-04 | Young Ninjas       | L   | 0.300      | -            | -                | -                | -         |    -9.36 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     3200 | 2024-03-02 | Rebels             | W   | 0.287      | -            | -                | -                | -         |     0.30 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     3219 | 2024-03-01 | FORZE              | W   | 0.281      | -            | -                | -                | -         |     0.20 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     3227 | 2024-03-01 | 9 Pandas           | W   | 0.280      | -            | -                | -                | -         |     0.39 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     3232 | 2024-02-29 | KOI                | W   | 0.275      | -            | -                | -                | -         |     0.61 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     3237 | 2024-02-29 | Spirit Academy     | W   | 0.273      | -            | -                | -                | -         |     0.02 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     3242 | 2024-02-29 | HAVU               | W   | 0.272      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     3245 | 2024-02-28 | kONO               | W   | 0.268      | -            | -                | -                | -         |     0.10 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     3252 | 2024-02-28 | FORZE              | L   | 0.267      | -            | -                | -                | -         |    -8.23 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3472 | 2024-02-18 | Monte              | L   | 0.202      | -            | -                | -                | -         |    -6.05 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     3482 | 2024-02-18 | B8                 | W   | 0.199      | -            | -                | -                | -         |     0.34 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     3499 | 2024-02-17 | kONO               | W   | 0.194      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     3503 | 2024-02-17 | Monte              | L   | 0.193      | -            | -                | -                | -         |    -5.82 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            2 |     3506 | 2024-02-17 | kONO               | W   | 0.193      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            1 |     4105 | 2024-01-19 | FORZE              | L   | 0.001      | -            | -                | -                | -         |    -0.04 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126,242.30)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.51) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $10,000.00     | $9,930.65       |
| 2024-06-09 |      0.948 | $8,500.00      | $8,054.65       |
| 2024-06-02 |      0.899 | $15,000.00     | $13,491.08      |
| 2024-05-23 |      0.834 | $12,500.00     | $10,421.96      |
| 2024-04-28 |      0.665 | $20,000.00     | $13,300.67      |
| 2024-04-14 |      0.574 | $105,000.00    | $60,240.70      |
| 2024-03-16 |      0.379 | $28,500.00     | $10,802.58      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
