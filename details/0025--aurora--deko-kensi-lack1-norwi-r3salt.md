### Roster Details<br />
Team Name: Aurora<br />
Roster: deko, KENSI, Lack1, Norwi, r3salt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1390.4<br />
<br />
Final Rank Value (1390.4) = Starting Rank Value (1678.6) + Head To Head Adjustments (-288.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.782[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.907[<sup>2</sup>](#table1)

The average of these factors is 0.629<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1678.6
- 400 + ( ( 0.629 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1678.6


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
|           80 |       31 | 2024-06-16 | Complexity         | L   | 1.000      | -            | -                | -                | -         |    -4.62 | deko, KENSI, Lack1, Norwi, r3salt     |
|           79 |       99 | 2024-06-14 | The MongolZ        | W   | 1.000      | 0.500        | 0.986 (0.493)    | 0.681 (0.341)    | 1 (1.000) |    29.51 | deko, KENSI, Lack1, Norwi, r3salt     |
|           78 |      109 | 2024-06-14 | Falcons            | W   | 1.000      | 0.500        | 0.381 (0.190)    | -                | 1 (1.000) |    24.24 | deko, KENSI, Lack1, Norwi, r3salt     |
|           77 |      208 | 2024-06-10 | 9 Pandas           | W   | 1.000      | -            | -                | -                | -         |     8.23 | deko, KENSI, Lack1, Norwi, r3salt     |
|           76 |      212 | 2024-06-10 | Monte              | W   | 1.000      | -            | -                | -                | -         |     9.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           75 |      216 | 2024-06-10 | SAW                | L   | 1.000      | -            | -                | -                | -         |   -18.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           74 |      244 | 2024-06-09 | Monte              | L   | 1.000      | -            | -                | -                | -         |   -21.44 | deko, KENSI, Lack1, Norwi, r3salt     |
|           73 |      251 | 2024-06-09 | PARIVISION         | W   | 1.000      | -            | -                | -                | -         |     5.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           72 |      260 | 2024-06-09 | RUSH B             | L   | 1.000      | -            | -                | -                | -         |   -29.29 | deko, KENSI, Lack1, Norwi, r3salt     |
|           71 |      266 | 2024-06-09 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -23.65 | deko, KENSI, Lack1, Norwi, r3salt     |
|           70 |      273 | 2024-06-09 | SINNERS            | L   | 1.000      | -            | -                | -                | -         |   -28.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           69 |      360 | 2024-06-07 | Sangal             | L   | 1.000      | -            | -                | -                | -         |   -25.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           68 |      377 | 2024-06-07 | Verdant            | W   | 1.000      | -            | -                | -                | -         |     1.06 | deko, KENSI, Lack1, Norwi, r3salt     |
|           67 |      379 | 2024-06-07 | PERA               | W   | 1.000      | -            | -                | -                | -         |     2.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           66 |      417 | 2024-06-06 | RUSH B             | W   | 1.000      | -            | -                | -                | -         |     1.19 | deko, KENSI, Lack1, Norwi, r3salt     |
|           65 |      482 | 2024-06-05 | PARIVISION         | W   | 1.000      | 0.500        | -                | 0.462 (0.231)    | -         |     2.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           64 |      533 | 2024-06-04 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -25.20 | deko, KENSI, Lack1, Norwi, r3salt     |
|           63 |      602 | 2024-06-02 | BLEED              | L   | 1.000      | -            | -                | -                | -         |   -24.07 | deko, KENSI, Lack1, Norwi, r3salt     |
|           62 |      627 | 2024-06-01 | Lynn Vision        | W   | 1.000      | 0.500        | 0.126 (0.063)    | -                | 1 (1.000) |     3.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           61 |      636 | 2024-06-01 | Chinggis Warriors  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.50 | deko, KENSI, Lack1, Norwi, r3salt     |
|           60 |      711 | 2024-05-29 | The MongolZ        | L   | 1.000      | -            | -                | -                | -         |    -4.04 | deko, KENSI, Lack1, Norwi, r3salt     |
|           59 |      734 | 2024-05-28 | Lynn Vision        | W   | 1.000      | 0.500        | 0.126 (0.063)    | -                | 1 (1.000) |     3.60 | deko, KENSI, Lack1, Norwi, r3salt     |
|           58 |      905 | 2024-05-21 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -2.93 | deko, KENSI, Lack1, Norwi, r3salt     |
|           57 |     1035 | 2024-05-17 | SAW                | W   | 0.988      | 0.769        | 0.140 (0.107)    | 0.571 (0.433)    | -         |     9.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           56 |     1050 | 2024-05-16 | PARIVISION         | W   | 0.984      | 0.769        | -                | 0.462 (0.349)    | -         |     2.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           55 |     1059 | 2024-05-16 | MIBR               | L   | 0.983      | -            | -                | -                | -         |   -10.74 | deko, KENSI, Lack1, Norwi, r3salt     |
|           54 |     1072 | 2024-05-16 | SAW                | L   | 0.981      | -            | -                | -                | -         |   -21.84 | deko, KENSI, Lack1, Norwi, r3salt     |
|           53 |     1123 | 2024-05-15 | Spirit             | L   | 0.974      | -            | -                | -                | -         |    -2.03 | deko, KENSI, Lack1, Norwi, r3salt     |
|           52 |     1266 | 2024-05-10 | MOUZ NXT           | L   | 0.943      | -            | -                | -                | -         |   -27.45 | deko, KENSI, Lack1, Norwi, r3salt     |
|           51 |     1524 | 2024-04-28 | MIBR               | L   | 0.860      | -            | -                | -                | -         |   -11.71 | deko, KENSI, Lack1, Norwi, r3salt     |
|           50 |     1525 | 2024-04-28 | Rebels             | W   | 0.860      | 0.500        | -                | 0.450 (0.193)    | 1 (0.860) |     1.94 | deko, KENSI, Lack1, Norwi, r3salt     |
|           49 |     1551 | 2024-04-27 | Party Astronauts   | W   | 0.853      | 0.500        | -                | 0.600 (0.256)    | 1 (0.853) |     1.11 | deko, KENSI, Lack1, Norwi, r3salt     |
|           48 |     1575 | 2024-04-25 | Apeks              | L   | 0.846      | -            | -                | -                | -         |   -24.38 | deko, KENSI, Lack1, Norwi, r3salt     |
|           47 |     1579 | 2024-04-25 | Party Astronauts   | W   | 0.844      | 0.500        | -                | 0.600 (0.254)    | 1 (0.844) |     0.96 | deko, KENSI, Lack1, Norwi, r3salt     |
|           46 |     1785 | 2024-04-18 | RUBY               | L   | 0.795      | -            | -                | -                | -         |   -24.27 | deko, KENSI, Lack1, Norwi, r3salt     |
|           45 |     1895 | 2024-04-14 | OG                 | W   | 0.769      | 0.684        | 0.235 (0.124)    | -                | -         |     3.22 | deko, KENSI, Lack1, Norwi, r3salt     |
|           44 |     1909 | 2024-04-13 | BetBoom            | W   | 0.762      | 0.684        | 0.414 (0.216)    | 0.798 (0.416)    | -         |    11.07 | deko, KENSI, Lack1, Norwi, r3salt     |
|           43 |     1920 | 2024-04-12 | AMKAL              | W   | 0.756      | -            | -                | -                | -         |     2.14 | deko, KENSI, Lack1, Norwi, r3salt     |
|           42 |     1943 | 2024-04-11 | BetBoom            | W   | 0.750      | 0.143        | 0.414 (0.044)    | -                | -         |    11.69 | deko, KENSI, Lack1, Norwi, r3salt     |
|           41 |     1950 | 2024-04-11 | Apeks              | W   | 0.749      | -            | -                | -                | -         |     1.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           40 |     1955 | 2024-04-11 | FORZE              | W   | 0.748      | 0.684        | 0.096 (0.049)    | 0.350 (0.179)    | -         |     1.37 | deko, KENSI, Lack1, Norwi, r3salt     |
|           39 |     1984 | 2024-04-10 | PARIVISION         | W   | 0.743      | -            | -                | -                | -         |     0.86 | deko, KENSI, Lack1, Norwi, r3salt     |
|           38 |     1997 | 2024-04-10 | BetBoom            | L   | 0.742      | -            | -                | -                | -         |   -11.70 | deko, KENSI, Lack1, Norwi, r3salt     |
|           37 |     2044 | 2024-04-09 | KOI                | L   | 0.736      | -            | -                | -                | -         |   -21.40 | deko, KENSI, Lack1, Norwi, r3salt     |
|           36 |     2054 | 2024-04-09 | 1WIN               | W   | 0.735      | -            | -                | -                | -         |     0.73 | deko, KENSI, Lack1, Norwi, r3salt     |
|           35 |     2061 | 2024-04-09 | 9 Pandas           | W   | 0.734      | -            | -                | -                | -         |     1.57 | deko, KENSI, Lack1, Norwi, r3salt     |
|           34 |     2072 | 2024-04-08 | Metizport          | W   | 0.730      | -            | -                | -                | -         |     1.08 | deko, KENSI, Lack1, Norwi, r3salt     |
|           33 |     2076 | 2024-04-08 | OG                 | W   | 0.729      | 0.684        | 0.235 (0.117)    | -                | -         |     2.10 | deko, KENSI, Lack1, Norwi, r3salt     |
|           32 |     2089 | 2024-04-08 | 1WIN               | L   | 0.728      | -            | -                | -                | -         |   -22.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           31 |     2178 | 2024-04-04 | Ninjas in Pyjamas  | W   | 0.703      | -            | -                | -                | -         |    14.52 | deko, KENSI, Lack1, Norwi, r3salt     |
|           30 |     2219 | 2024-04-03 | Ninjas in Pyjamas  | W   | 0.696      | -            | -                | -                | -         |    15.17 | deko, KENSI, Lack1, Norwi, r3salt     |
|           29 |     2257 | 2024-04-02 | Apeks              | W   | 0.689      | -            | -                | -                | -         |     1.34 | deko, KENSI, Lack1, Norwi, r3salt     |
|           28 |     2265 | 2024-04-02 | Metizport          | W   | 0.688      | -            | -                | -                | -         |     0.81 | deko, KENSI, Lack1, Norwi, r3salt     |
|           27 |     2277 | 2024-04-01 | SINNERS            | L   | 0.683      | -            | -                | -                | -         |   -20.44 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           26 |     2318 | 2024-03-28 | brazylijski luz    | W   | 0.656      | -            | -                | -                | -         |     0.24 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           25 |     2349 | 2024-03-27 | Metizport          | W   | 0.650      | -            | -                | -                | -         |     0.73 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           24 |     2356 | 2024-03-27 | AURA               | W   | 0.649      | -            | -                | -                | -         |     0.05 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           23 |     2390 | 2024-03-25 | Rebels             | W   | 0.636      | -            | -                | -                | -         |     1.01 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           22 |     2406 | 2024-03-23 | ALTERNATE aTTaX    | W   | 0.623      | 0.500        | -                | 0.573 (0.179)    | -         |     0.60 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           21 |     2421 | 2024-03-22 | ex-Sprout          | W   | 0.616      | -            | -                | -                | -         |     0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           20 |     2544 | 2024-03-16 | Gods Reign         | W   | 0.574      | -            | -                | -                | 1 (0.574) |     0.25 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           19 |     2566 | 2024-03-15 | Gods Reign         | W   | 0.567      | -            | -                | -                | 1 (0.567) |     0.23 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           18 |     2600 | 2024-03-14 | Bad News Kangaroos | W   | 0.560      | -            | -                | -                | -         |     0.26 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           17 |     2858 | 2024-03-04 | Young Ninjas       | L   | 0.495      | -            | -                | -                | -         |   -15.40 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           16 |     2903 | 2024-03-02 | Rebels             | W   | 0.482      | -            | -                | -                | -         |     0.75 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           15 |     2922 | 2024-03-01 | FORZE              | W   | 0.477      | -            | -                | -                | -         |     0.50 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           14 |     2930 | 2024-03-01 | 9 Pandas           | W   | 0.475      | -            | -                | -                | -         |     1.04 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           13 |     2935 | 2024-02-29 | KOI                | W   | 0.470      | -            | -                | -                | -         |     1.23 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           12 |     2940 | 2024-02-29 | Spirit Academy     | W   | 0.468      | -            | -                | -                | -         |     0.08 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           11 |     2945 | 2024-02-29 | HAVU               | W   | 0.467      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|           10 |     2948 | 2024-02-28 | kONO               | W   | 0.463      | -            | -                | -                | -         |     0.18 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            9 |     2955 | 2024-02-28 | FORZE              | L   | 0.462      | -            | -                | -                | -         |   -14.16 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            8 |     3175 | 2024-02-18 | Monte              | L   | 0.397      | -            | -                | -                | -         |   -10.72 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            7 |     3185 | 2024-02-18 | B8                 | W   | 0.395      | -            | -                | -                | -         |     0.77 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            6 |     3202 | 2024-02-17 | kONO               | W   | 0.389      | -            | -                | -                | -         |     0.13 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            5 |     3206 | 2024-02-17 | Monte              | L   | 0.388      | -            | -                | -                | -         |   -10.68 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            4 |     3209 | 2024-02-17 | kONO               | W   | 0.388      | -            | -                | -                | -         |     0.12 | BELCHONOKK, deko, KENSI, Lack1, Norwi |
|            3 |     3808 | 2024-01-19 | FORZE              | L   | 0.197      | -            | -                | -                | -         |    -6.18 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            2 |     3871 | 2024-01-18 | Enterprise         | L   | 0.189      | -            | -                | -                | -         |    -5.82 | deko, KENSI, Lack1, Norwi, SELLTER    |
|            1 |     3882 | 2024-01-18 | IKLA               | L   | 0.189      | -            | -                | -                | -         |    -5.93 | deko, KENSI, Lack1, Norwi, SELLTER    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($158,319.95)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.53) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-09 |      1.000 | $6,500.00      | $6,500.00       |
| 2024-06-02 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-05-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-04-28 |      0.860 | $20,000.00     | $17,206.34      |
| 2024-04-14 |      0.769 | $105,000.00    | $80,745.45      |
| 2024-03-16 |      0.574 | $28,500.00     | $16,368.16      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
