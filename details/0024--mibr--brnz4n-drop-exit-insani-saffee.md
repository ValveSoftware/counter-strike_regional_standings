### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Global Rank: [24](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [6]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1346.4<br />
<br />
Final Rank Value (1346.4) = Starting Rank Value (1434.4) + Head To Head Adjustments (-88.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.590[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.286[<sup>2</sup>](#table1)
- LAN Wins: 0.640[<sup>2</sup>](#table1)

The average of these factors is 0.501<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1434.4
- 400 + ( ( 0.501 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1434.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |        6 | 2024-07-31 | ODDIK          | W   | 1.000      | 0.450        | 0.096 (0.043)    | 0.781 (0.352)    | -         |     5.32 | brnz4n, drop, exit, insani, saffee |
|           76 |       11 | 2024-07-31 | ODDIK          | W   | 1.000      | 0.450        | 0.096 (0.043)    | 0.781 (0.352)    | -         |     5.59 | brnz4n, drop, exit, insani, saffee |
|           75 |       39 | 2024-07-30 | Dusty Roots    | L   | 1.000      | -            | -                | -                | -         |   -30.15 | brnz4n, drop, exit, insani, saffee |
|           74 |       42 | 2024-07-30 | Dusty Roots    | W   | 1.000      | -            | -                | -                | -         |     1.17 | brnz4n, drop, exit, insani, saffee |
|           73 |       46 | 2024-07-30 | 9z Academy     | W   | 1.000      | -            | -                | -                | -         |     0.26 | brnz4n, drop, exit, insani, saffee |
|           72 |       81 | 2024-07-29 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -21.53 | brnz4n, drop, exit, insani, saffee |
|           71 |      107 | 2024-07-28 | RED Canids     | W   | 1.000      | -            | -                | -                | -         |     7.23 | brnz4n, drop, exit, insani, saffee |
|           70 |      114 | 2024-07-28 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -22.54 | brnz4n, drop, exit, insani, saffee |
|           69 |      203 | 2024-07-25 | Galorys        | W   | 1.000      | 0.450        | -                | 0.552 (0.249)    | -         |     1.10 | brnz4n, drop, exit, insani, saffee |
|           68 |      208 | 2024-07-25 | Galorys        | W   | 1.000      | 0.450        | -                | 0.552 (0.249)    | -         |     1.11 | brnz4n, drop, exit, insani, saffee |
|           67 |      471 | 2024-07-18 | The MongolZ    | L   | 1.000      | -            | -                | -                | -         |    -3.38 | brnz4n, drop, exit, insani, saffee |
|           66 |      521 | 2024-07-17 | Spirit         | L   | 1.000      | -            | -                | -                | -         |    -1.42 | brnz4n, drop, exit, insani, saffee |
|           65 |      891 | 2024-06-15 | Complexity     | L   | 0.891      | -            | -                | -                | -         |    -7.35 | brnz4n, drop, exit, insani, saffee |
|           64 |      916 | 2024-06-14 | Alliance       | W   | 0.886      | -            | -                | -                | 1 (0.886) |     1.24 | brnz4n, drop, exit, insani, saffee |
|           63 |      933 | 2024-06-14 | ENCE           | L   | 0.885      | -            | -                | -                | -         |   -16.44 | brnz4n, drop, exit, insani, saffee |
|           62 |     1172 | 2024-06-07 | Bounty Hunters | L   | 0.841      | -            | -                | -                | -         |   -25.26 | brnz4n, drop, exit, insani, saffee |
|           61 |     1231 | 2024-06-06 | 9z             | L   | 0.834      | -            | -                | -                | -         |   -12.54 | brnz4n, drop, exit, insani, saffee |
|           60 |     1303 | 2024-06-05 | BESTIA         | W   | 0.828      | 0.450        | -                | 0.731 (0.272)    | -         |     2.53 | brnz4n, drop, exit, insani, saffee |
|           59 |     1355 | 2024-06-04 | Galorys        | W   | 0.821      | 0.450        | -                | 0.552 (0.204)    | -         |     0.94 | brnz4n, drop, exit, insani, saffee |
|           58 |     1681 | 2024-05-22 | paiN           | W   | 0.733      | 0.450        | 0.305 (0.101)    | 0.796 (0.263)    | -         |     8.79 | brnz4n, drop, exit, insani, saffee |
|           57 |     1684 | 2024-05-22 | paiN           | W   | 0.733      | 0.450        | 0.305 (0.101)    | 0.796 (0.263)    | -         |     9.35 | brnz4n, drop, exit, insani, saffee |
|           56 |     1754 | 2024-05-20 | BetBoom        | L   | 0.720      | -            | -                | -                | -         |   -13.21 | brnz4n, drop, exit, insani, saffee |
|           55 |     1767 | 2024-05-20 | BIG            | W   | 0.719      | 0.769        | 0.133 (0.073)    | -                | -         |     5.25 | brnz4n, drop, exit, insani, saffee |
|           54 |     1776 | 2024-05-20 | BetBoom        | L   | 0.717      | -            | -                | -                | -         |   -13.72 | brnz4n, drop, exit, insani, saffee |
|           53 |     1853 | 2024-05-17 | HEROIC         | L   | 0.699      | -            | -                | -                | -         |    -8.01 | brnz4n, drop, exit, insani, saffee |
|           52 |     1887 | 2024-05-16 | Aurora         | W   | 0.693      | 0.769        | 0.433 (0.231)    | 0.800 (0.426)    | 1 (0.693) |    13.93 | brnz4n, drop, exit, insani, saffee |
|           51 |     1943 | 2024-05-15 | HEROIC         | L   | 0.685      | -            | -                | -                | -         |    -7.83 | brnz4n, drop, exit, insani, saffee |
|           50 |     2352 | 2024-04-28 | Aurora         | W   | 0.571      | 0.500        | 0.433 (0.124)    | 0.800 (0.228)    | 1 (0.571) |    12.84 | brnz4n, drop, exit, insani, saffee |
|           49 |     2354 | 2024-04-27 | Apeks          | W   | 0.569      | -            | -                | -                | 1 (0.569) |     1.22 | brnz4n, drop, exit, insani, saffee |
|           48 |     2380 | 2024-04-27 | Rooster        | W   | 0.563      | -            | -                | -                | 1 (0.563) |     0.46 | brnz4n, drop, exit, insani, saffee |
|           47 |     2402 | 2024-04-26 | Rebels         | L   | 0.556      | -            | -                | -                | -         |   -16.30 | brnz4n, drop, exit, insani, saffee |
|           46 |     2405 | 2024-04-25 | KZG            | W   | 0.555      | -            | -                | -                | 1 (0.555) |     0.21 | brnz4n, drop, exit, insani, saffee |
|           45 |     2514 | 2024-04-20 | paiN           | L   | 0.520      | -            | -                | -                | -         |    -9.54 | brnz4n, drop, exit, insani, saffee |
|           44 |     2521 | 2024-04-20 | OG             | W   | 0.519      | 0.589        | 0.144 (0.044)    | -                | 1 (0.519) |     1.70 | brnz4n, drop, exit, insani, saffee |
|           43 |     2537 | 2024-04-19 | paiN           | W   | 0.515      | -            | -                | -                | -         |     7.16 | brnz4n, drop, exit, insani, saffee |
|           42 |     2544 | 2024-04-19 | FURIA          | W   | 0.514      | 0.589        | 0.286 (0.087)    | -                | 1 (0.514) |    12.71 | brnz4n, drop, exit, insani, saffee |
|           41 |     2566 | 2024-04-19 | paiN           | L   | 0.512      | -            | -                | -                | -         |    -9.08 | brnz4n, drop, exit, insani, saffee |
|           40 |     2587 | 2024-04-18 | Imperial       | W   | 0.509      | -            | -                | -                | -         |     5.18 | brnz4n, drop, exit, insani, saffee |
|           39 |     2589 | 2024-04-18 | paiN           | W   | 0.508      | -            | -                | -                | -         |     7.20 | brnz4n, drop, exit, insani, saffee |
|           38 |     2594 | 2024-04-18 | OG             | W   | 0.507      | -            | -                | -                | 1 (0.507) |     1.70 | brnz4n, drop, exit, insani, saffee |
|           37 |     2639 | 2024-04-17 | RED Canids     | W   | 0.501      | -            | -                | -                | -         |     1.99 | brnz4n, drop, exit, insani, saffee |
|           36 |     2645 | 2024-04-17 | Case           | W   | 0.500      | -            | -                | -                | -         |     0.78 | brnz4n, drop, exit, insani, saffee |
|           35 |     2684 | 2024-04-16 | Bounty Hunters | W   | 0.494      | -            | -                | -                | -         |     0.68 | brnz4n, drop, exit, insani, saffee |
|           34 |     2705 | 2024-04-15 | Imperial       | W   | 0.487      | 0.435        | 0.245 (0.052)    | -                | -         |     5.05 | brnz4n, drop, exit, insani, saffee |
|           33 |     2719 | 2024-04-14 | Galorys        | W   | 0.480      | -            | -                | -                | -         |     0.76 | brnz4n, drop, exit, insani, saffee |
|           32 |     2733 | 2024-04-13 | Case           | W   | 0.473      | -            | -                | -                | -         |     0.74 | brnz4n, drop, exit, insani, saffee |
|           31 |     2763 | 2024-04-11 | paiN           | W   | 0.461      | -            | -                | -                | -         |     7.22 | brnz4n, drop, exit, insani, saffee |
|           30 |     2805 | 2024-04-10 | Galorys        | W   | 0.454      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           29 |     2806 | 2024-04-10 | Galorys        | W   | 0.454      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           28 |     2823 | 2024-04-10 | Imperial       | W   | 0.452      | -            | -                | -                | -         |     5.05 | brnz4n, drop, exit, insani, saffee |
|           27 |     2855 | 2024-04-09 | adalYamigos    | W   | 0.447      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|           26 |     2859 | 2024-04-09 | adalYamigos    | W   | 0.447      | -            | -                | -                | -         |     0.17 | brnz4n, drop, exit, insani, saffee |
|           25 |     2864 | 2024-04-09 | RED Canids     | W   | 0.447      | -            | -                | -                | -         |     1.96 | brnz4n, drop, exit, insani, saffee |
|           24 |     2896 | 2024-04-08 | W7M            | W   | 0.441      | -            | -                | -                | -         |     0.52 | brnz4n, drop, exit, insani, saffee |
|           23 |     2930 | 2024-04-07 | paiN           | W   | 0.435      | -            | -                | -                | -         |     7.26 | brnz4n, drop, exit, insani, saffee |
|           22 |     2948 | 2024-04-06 | Bounty Hunters | W   | 0.428      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|           21 |     2964 | 2024-04-05 | Fluxo          | W   | 0.421      | -            | -                | -                | -         |     1.61 | brnz4n, drop, exit, insani, saffee |
|           20 |     2965 | 2024-04-05 | Fluxo          | L   | 0.421      | -            | -                | -                | -         |   -11.79 | brnz4n, drop, exit, insani, saffee |
|           19 |     2968 | 2024-04-05 | ODDIK          | W   | 0.420      | -            | -                | -                | -         |     1.04 | brnz4n, drop, exit, insani, saffee |
|           18 |     2991 | 2024-04-04 | Solid          | W   | 0.414      | -            | -                | -                | -         |     0.64 | brnz4n, drop, exit, insani, saffee |
|           17 |     2995 | 2024-04-04 | Solid          | W   | 0.414      | -            | -                | -                | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           16 |     3026 | 2024-04-03 | Fluxo          | W   | 0.408      | -            | -                | -                | -         |     1.45 | brnz4n, drop, exit, insani, saffee |
|           15 |     3076 | 2024-04-02 | Fluxo          | W   | 0.401      | -            | -                | -                | -         |     1.41 | brnz4n, drop, exit, insani, saffee |
|           14 |     3079 | 2024-04-02 | Sharks         | W   | 0.400      | -            | -                | -                | -         |     0.31 | brnz4n, drop, exit, insani, saffee |
|           13 |     3165 | 2024-03-27 | Case           | W   | 0.361      | -            | -                | -                | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           12 |     3171 | 2024-03-27 | Case           | W   | 0.361      | -            | -                | -                | -         |     0.66 | brnz4n, drop, exit, insani, saffee |
|           11 |     3211 | 2024-03-26 | ODDIK          | W   | 0.354      | -            | -                | -                | -         |     0.97 | brnz4n, drop, exit, insani, saffee |
|           10 |     3213 | 2024-03-26 | ODDIK          | W   | 0.354      | -            | -                | -                | -         |     0.98 | brnz4n, drop, exit, insani, saffee |
|            9 |     3405 | 2024-03-14 | Sharks         | W   | 0.274      | -            | -                | -                | -         |     0.67 | brnz4n, drop, exit, insani, saffee |
|            8 |     3407 | 2024-03-14 | Sharks         | W   | 0.274      | -            | -                | -                | -         |     0.68 | brnz4n, drop, exit, insani, saffee |
|            7 |     3478 | 2024-03-12 | Fluxo          | L   | 0.260      | -            | -                | -                | -         |    -7.30 | brnz4n, drop, exit, insani, saffee |
|            6 |     3517 | 2024-03-10 | Galorys        | W   | 0.247      | -            | -                | -                | -         |     0.38 | brnz4n, drop, exit, insani, saffee |
|            5 |     3565 | 2024-03-08 | LA RUGONETA    | W   | 0.234      | -            | -                | -                | -         |     0.06 | brnz4n, drop, exit, insani, saffee |
|            4 |     3696 | 2024-03-03 | Legacy         | L   | 0.201      | -            | -                | -                | -         |    -5.77 | brnz4n, drop, exit, insani, saffee |
|            3 |     3728 | 2024-03-02 | NRG            | W   | 0.193      | -            | -                | -                | 1 (0.193) |     0.23 | brnz4n, drop, exit, insani, saffee |
|            2 |     3751 | 2024-03-01 | BOSS           | L   | 0.187      | -            | -                | -                | -         |    -5.70 | brnz4n, drop, exit, insani, saffee |
|            1 |     4277 | 2024-02-03 | Imperial       | L   | 0.008      | -            | -                | -                | -         |    -0.17 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,375.83)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.899 | $3,000.00      | $2,695.66       |
| 2024-06-09 |      0.854 | $3,000.00      | $2,561.81       |
| 2024-04-28 |      0.571 | $50,000.00     | $28,526.05      |
| 2024-04-20 |      0.521 | $20,000.00     | $10,413.55      |
| 2024-04-15 |      0.487 | $25,000.00     | $12,178.77      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
