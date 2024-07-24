### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [20](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1419.9<br />
<br />
Final Rank Value (1419.9) = Starting Rank Value (1465.1) + Head To Head Adjustments (-45.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.629[<sup>1</sup>](#table2)
- Bounty Collected: 0.510[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.714[<sup>2</sup>](#table1)

The average of these factors is 0.526<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1465.1
- 400 + ( ( 0.526 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1465.1


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
|           69 |      229 | 2024-07-18 | The MongolZ    | L   | 1.000      | -            | -                | -                | -         |    -4.51 | brnz4n, drop, exit, insani, saffee |
|           68 |      279 | 2024-07-17 | Spirit         | L   | 1.000      | -            | -                | -                | -         |    -1.54 | brnz4n, drop, exit, insani, saffee |
|           67 |      649 | 2024-06-15 | Complexity     | L   | 0.939      | -            | -                | -                | -         |    -7.47 | brnz4n, drop, exit, insani, saffee |
|           66 |      674 | 2024-06-14 | Alliance       | W   | 0.933      | -            | -                | -                | 1 (0.933) |     1.22 | brnz4n, drop, exit, insani, saffee |
|           65 |      691 | 2024-06-14 | ENCE           | L   | 0.932      | -            | -                | -                | -         |   -20.18 | brnz4n, drop, exit, insani, saffee |
|           64 |      930 | 2024-06-07 | Bounty Hunters | L   | 0.888      | -            | -                | -                | -         |   -26.83 | brnz4n, drop, exit, insani, saffee |
|           63 |      989 | 2024-06-06 | 9z             | L   | 0.882      | -            | -                | -                | -         |   -12.72 | brnz4n, drop, exit, insani, saffee |
|           62 |     1061 | 2024-06-05 | BESTIA         | W   | 0.875      | 0.450        | 0.114 (0.045)    | 0.740 (0.291)    | -         |     2.50 | brnz4n, drop, exit, insani, saffee |
|           61 |     1113 | 2024-06-04 | Galorys        | W   | 0.868      | 0.450        | -                | 0.592 (0.231)    | -         |     0.79 | brnz4n, drop, exit, insani, saffee |
|           60 |     1439 | 2024-05-22 | paiN           | W   | 0.780      | 0.450        | 0.393 (0.138)    | 0.825 (0.290)    | -         |     9.66 | brnz4n, drop, exit, insani, saffee |
|           59 |     1442 | 2024-05-22 | paiN           | W   | 0.780      | 0.450        | 0.393 (0.138)    | 0.825 (0.290)    | -         |    10.33 | brnz4n, drop, exit, insani, saffee |
|           58 |     1512 | 2024-05-20 | BetBoom        | L   | 0.768      | -            | -                | -                | -         |   -14.28 | brnz4n, drop, exit, insani, saffee |
|           57 |     1525 | 2024-05-20 | BIG            | W   | 0.766      | 0.769        | 0.173 (0.102)    | 0.347 (0.204)    | -         |     6.12 | brnz4n, drop, exit, insani, saffee |
|           56 |     1534 | 2024-05-20 | BetBoom        | L   | 0.765      | -            | -                | -                | -         |   -14.88 | brnz4n, drop, exit, insani, saffee |
|           55 |     1611 | 2024-05-17 | HEROIC         | L   | 0.747      | -            | -                | -                | -         |    -8.46 | brnz4n, drop, exit, insani, saffee |
|           54 |     1645 | 2024-05-16 | Aurora         | W   | 0.740      | 0.769        | 0.423 (0.240)    | 0.783 (0.445)    | 1 (0.740) |    11.48 | brnz4n, drop, exit, insani, saffee |
|           53 |     1701 | 2024-05-15 | HEROIC         | L   | 0.733      | -            | -                | -                | -         |    -8.37 | brnz4n, drop, exit, insani, saffee |
|           52 |     2110 | 2024-04-28 | Aurora         | W   | 0.618      | 0.500        | 0.423 (0.131)    | 0.783 (0.242)    | 1 (0.618) |    11.14 | brnz4n, drop, exit, insani, saffee |
|           51 |     2112 | 2024-04-27 | Apeks          | W   | 0.616      | -            | -                | -                | 1 (0.616) |     1.31 | brnz4n, drop, exit, insani, saffee |
|           50 |     2138 | 2024-04-27 | Rooster        | W   | 0.610      | -            | -                | -                | 1 (0.610) |     0.45 | brnz4n, drop, exit, insani, saffee |
|           49 |     2160 | 2024-04-26 | Rebels         | L   | 0.604      | -            | -                | -                | -         |   -17.77 | brnz4n, drop, exit, insani, saffee |
|           48 |     2163 | 2024-04-25 | KZG            | W   | 0.602      | -            | -                | -                | 1 (0.602) |     0.19 | brnz4n, drop, exit, insani, saffee |
|           47 |     2272 | 2024-04-20 | paiN           | L   | 0.567      | -            | -                | -                | -         |   -10.07 | brnz4n, drop, exit, insani, saffee |
|           46 |     2279 | 2024-04-20 | OG             | W   | 0.566      | 0.589        | 0.170 (0.056)    | -                | 1 (0.566) |     1.89 | brnz4n, drop, exit, insani, saffee |
|           45 |     2295 | 2024-04-19 | paiN           | W   | 0.563      | -            | -                | -                | -         |     8.20 | brnz4n, drop, exit, insani, saffee |
|           44 |     2302 | 2024-04-19 | FURIA          | W   | 0.562      | 0.589        | 0.355 (0.117)    | 0.563 (0.186)    | 1 (0.562) |    13.99 | brnz4n, drop, exit, insani, saffee |
|           43 |     2324 | 2024-04-19 | paiN           | L   | 0.560      | -            | -                | -                | -         |    -9.52 | brnz4n, drop, exit, insani, saffee |
|           42 |     2345 | 2024-04-18 | Imperial       | W   | 0.556      | -            | -                | -                | -         |     6.26 | brnz4n, drop, exit, insani, saffee |
|           41 |     2347 | 2024-04-18 | paiN           | W   | 0.555      | -            | -                | -                | -         |     8.31 | brnz4n, drop, exit, insani, saffee |
|           40 |     2352 | 2024-04-18 | OG             | W   | 0.554      | 0.589        | 0.170 (0.055)    | -                | 1 (0.554) |     1.91 | brnz4n, drop, exit, insani, saffee |
|           39 |     2397 | 2024-04-17 | RED Canids     | W   | 0.548      | -            | -                | -                | -         |     2.11 | brnz4n, drop, exit, insani, saffee |
|           38 |     2403 | 2024-04-17 | Case           | W   | 0.548      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|           37 |     2442 | 2024-04-16 | Bounty Hunters | W   | 0.541      | -            | -                | -                | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           36 |     2463 | 2024-04-15 | Imperial       | W   | 0.534      | 0.435        | 0.317 (0.074)    | -                | -         |     6.19 | brnz4n, drop, exit, insani, saffee |
|           35 |     2477 | 2024-04-14 | Galorys        | W   | 0.528      | -            | -                | -                | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           34 |     2491 | 2024-04-13 | Case           | W   | 0.520      | 0.435        | -                | 0.751 (0.170)    | -         |     0.68 | brnz4n, drop, exit, insani, saffee |
|           33 |     2521 | 2024-04-11 | paiN           | W   | 0.509      | -            | -                | -                | -         |     8.48 | brnz4n, drop, exit, insani, saffee |
|           32 |     2563 | 2024-04-10 | Galorys        | W   | 0.501      | -            | -                | -                | -         |     0.59 | brnz4n, drop, exit, insani, saffee |
|           31 |     2564 | 2024-04-10 | Galorys        | W   | 0.501      | -            | -                | -                | -         |     0.59 | brnz4n, drop, exit, insani, saffee |
|           30 |     2581 | 2024-04-10 | Imperial       | W   | 0.500      | -            | -                | -                | -         |     6.31 | brnz4n, drop, exit, insani, saffee |
|           29 |     2613 | 2024-04-09 | adalYamigos    | W   | 0.495      | -            | -                | -                | -         |     0.18 | brnz4n, drop, exit, insani, saffee |
|           28 |     2617 | 2024-04-09 | adalYamigos    | W   | 0.495      | -            | -                | -                | -         |     0.18 | brnz4n, drop, exit, insani, saffee |
|           27 |     2622 | 2024-04-09 | RED Canids     | W   | 0.494      | -            | -                | -                | -         |     2.13 | brnz4n, drop, exit, insani, saffee |
|           26 |     2654 | 2024-04-08 | W7M            | W   | 0.488      | -            | -                | -                | -         |     0.51 | brnz4n, drop, exit, insani, saffee |
|           25 |     2688 | 2024-04-07 | paiN           | W   | 0.482      | -            | -                | -                | -         |     8.63 | brnz4n, drop, exit, insani, saffee |
|           24 |     2706 | 2024-04-06 | Bounty Hunters | W   | 0.475      | -            | -                | -                | -         |     0.70 | brnz4n, drop, exit, insani, saffee |
|           23 |     2722 | 2024-04-05 | Fluxo          | W   | 0.468      | -            | -                | -                | -         |     1.77 | brnz4n, drop, exit, insani, saffee |
|           22 |     2723 | 2024-04-05 | Fluxo          | L   | 0.468      | -            | -                | -                | -         |   -13.14 | brnz4n, drop, exit, insani, saffee |
|           21 |     2726 | 2024-04-05 | ODDIK          | W   | 0.467      | -            | -                | -                | -         |     1.01 | brnz4n, drop, exit, insani, saffee |
|           20 |     2749 | 2024-04-04 | Solid          | W   | 0.461      | 0.450        | -                | 0.791 (0.164)    | -         |     0.65 | brnz4n, drop, exit, insani, saffee |
|           19 |     2753 | 2024-04-04 | Solid          | W   | 0.461      | -            | -                | -                | -         |     0.66 | brnz4n, drop, exit, insani, saffee |
|           18 |     2784 | 2024-04-03 | Fluxo          | W   | 0.455      | -            | -                | -                | -         |     1.59 | brnz4n, drop, exit, insani, saffee |
|           17 |     2834 | 2024-04-02 | Fluxo          | W   | 0.448      | -            | -                | -                | -         |     1.54 | brnz4n, drop, exit, insani, saffee |
|           16 |     2837 | 2024-04-02 | Sharks         | W   | 0.448      | -            | -                | -                | -         |     0.30 | brnz4n, drop, exit, insani, saffee |
|           15 |     2923 | 2024-03-27 | Case           | W   | 0.408      | -            | -                | -                | -         |     0.61 | brnz4n, drop, exit, insani, saffee |
|           14 |     2929 | 2024-03-27 | Case           | W   | 0.408      | -            | -                | -                | -         |     0.61 | brnz4n, drop, exit, insani, saffee |
|           13 |     2969 | 2024-03-26 | ODDIK          | W   | 0.402      | -            | -                | -                | -         |     0.96 | brnz4n, drop, exit, insani, saffee |
|           12 |     2971 | 2024-03-26 | ODDIK          | W   | 0.401      | -            | -                | -                | -         |     0.97 | brnz4n, drop, exit, insani, saffee |
|           11 |     3163 | 2024-03-14 | Sharks         | W   | 0.322      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|           10 |     3165 | 2024-03-14 | Sharks         | W   | 0.321      | -            | -                | -                | -         |     0.71 | brnz4n, drop, exit, insani, saffee |
|            9 |     3236 | 2024-03-12 | Fluxo          | L   | 0.308      | -            | -                | -                | -         |    -8.64 | brnz4n, drop, exit, insani, saffee |
|            8 |     3275 | 2024-03-10 | Galorys        | W   | 0.295      | -            | -                | -                | -         |     0.33 | brnz4n, drop, exit, insani, saffee |
|            7 |     3323 | 2024-03-08 | LA RUGONETA    | W   | 0.281      | -            | -                | -                | -         |     0.06 | brnz4n, drop, exit, insani, saffee |
|            6 |     3454 | 2024-03-03 | Legacy         | L   | 0.248      | -            | -                | -                | -         |    -7.12 | brnz4n, drop, exit, insani, saffee |
|            5 |     3486 | 2024-03-02 | NRG            | W   | 0.240      | -            | -                | -                | 1 (0.240) |     0.27 | brnz4n, drop, exit, insani, saffee |
|            4 |     3509 | 2024-03-01 | BOSS           | L   | 0.234      | -            | -                | -                | -         |    -7.16 | brnz4n, drop, exit, insani, saffee |
|            3 |     4035 | 2024-02-03 | Imperial       | L   | 0.055      | -            | -                | -                | -         |    -1.11 | brnz4n, drop, exit, insani, saffee |
|            2 |     4099 | 2024-02-01 | paiN           | W   | 0.042      | -            | -                | -                | -         |     0.69 | brnz4n, drop, exit, insani, saffee |
|            1 |     4102 | 2024-02-01 | W7M            | W   | 0.041      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71,151.88)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-16 |      0.946 | $3,000.00      | $2,837.52       |
| 2024-06-09 |      0.901 | $3,000.00      | $2,703.67       |
| 2024-04-28 |      0.618 | $50,000.00     | $30,890.43      |
| 2024-04-20 |      0.568 | $20,000.00     | $11,359.31      |
| 2024-04-15 |      0.534 | $25,000.00     | $13,360.96      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
