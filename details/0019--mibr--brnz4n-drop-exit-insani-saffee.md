### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1516.2<br />
<br />
Final Rank Value (1516.2) = Starting Rank Value (1589.2) + Head To Head Adjustments (-73.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.638[<sup>1</sup>](#table2)
- Bounty Collected: 0.543[<sup>2</sup>](#table1)
- Opponent Network: 0.277[<sup>2</sup>](#table1)
- LAN Wins: 0.798[<sup>2</sup>](#table1)

The average of these factors is 0.564<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1589.2
- 400 + ( ( 0.564 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1589.2


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
|           75 |      197 | 2024-06-15 | Complexity     | L   | 1.000      | -            | -                | -                | -         |    -8.11 | brnz4n, drop, exit, insani, saffee |
|           74 |      222 | 2024-06-14 | Alliance       | W   | 1.000      | 0.500        | -                | 0.377 (0.188)    | 1 (1.000) |     1.05 | brnz4n, drop, exit, insani, saffee |
|           73 |      239 | 2024-06-14 | ENCE           | L   | 1.000      | -            | -                | -                | -         |   -22.62 | brnz4n, drop, exit, insani, saffee |
|           72 |      478 | 2024-06-07 | Bounty Hunters | L   | 0.975      | -            | -                | -                | -         |   -29.96 | brnz4n, drop, exit, insani, saffee |
|           71 |      537 | 2024-06-06 | 9z             | L   | 0.969      | -            | -                | -                | -         |   -15.11 | brnz4n, drop, exit, insani, saffee |
|           70 |      609 | 2024-06-05 | BESTIA         | W   | 0.962      | 0.450        | -                | 0.657 (0.284)    | -         |     1.67 | brnz4n, drop, exit, insani, saffee |
|           69 |      661 | 2024-06-04 | Galorys        | W   | 0.955      | 0.450        | -                | 0.519 (0.223)    | -         |     0.47 | brnz4n, drop, exit, insani, saffee |
|           68 |      987 | 2024-05-22 | paiN           | W   | 0.867      | 0.450        | 0.478 (0.186)    | 0.768 (0.300)    | -         |    10.08 | brnz4n, drop, exit, insani, saffee |
|           67 |      990 | 2024-05-22 | paiN           | W   | 0.867      | 0.450        | 0.478 (0.186)    | 0.768 (0.300)    | -         |    10.84 | brnz4n, drop, exit, insani, saffee |
|           66 |     1060 | 2024-05-20 | BetBoom        | L   | 0.855      | -            | -                | -                | -         |   -15.83 | brnz4n, drop, exit, insani, saffee |
|           65 |     1073 | 2024-05-20 | BIG            | W   | 0.853      | 0.769        | 0.215 (0.141)    | 0.405 (0.265)    | -         |     7.00 | brnz4n, drop, exit, insani, saffee |
|           64 |     1082 | 2024-05-20 | BetBoom        | L   | 0.851      | -            | -                | -                | -         |   -16.60 | brnz4n, drop, exit, insani, saffee |
|           63 |     1159 | 2024-05-17 | HEROIC         | L   | 0.833      | -            | -                | -                | -         |    -8.64 | brnz4n, drop, exit, insani, saffee |
|           62 |     1193 | 2024-05-16 | Aurora         | W   | 0.827      | 0.769        | 0.518 (0.329)    | 0.853 (0.542)    | 1 (0.827) |    11.12 | brnz4n, drop, exit, insani, saffee |
|           61 |     1249 | 2024-05-15 | HEROIC         | L   | 0.819      | -            | -                | -                | -         |    -8.55 | brnz4n, drop, exit, insani, saffee |
|           60 |     1658 | 2024-04-28 | Aurora         | W   | 0.705      | 0.500        | 0.518 (0.182)    | 0.853 (0.300)    | 1 (0.705) |    11.38 | brnz4n, drop, exit, insani, saffee |
|           59 |     1660 | 2024-04-27 | Apeks          | W   | 0.703      | -            | -                | -                | 1 (0.703) |     1.46 | brnz4n, drop, exit, insani, saffee |
|           58 |     1686 | 2024-04-27 | Rooster        | W   | 0.697      | -            | -                | -                | 1 (0.697) |     0.35 | brnz4n, drop, exit, insani, saffee |
|           57 |     1708 | 2024-04-26 | Rebels         | L   | 0.691      | -            | -                | -                | -         |   -20.64 | brnz4n, drop, exit, insani, saffee |
|           56 |     1711 | 2024-04-25 | KZG            | W   | 0.689      | -            | -                | -                | 1 (0.689) |     0.12 | brnz4n, drop, exit, insani, saffee |
|           55 |     1820 | 2024-04-20 | paiN           | L   | 0.654      | -            | -                | -                | -         |   -11.83 | brnz4n, drop, exit, insani, saffee |
|           54 |     1827 | 2024-04-20 | OG             | W   | 0.653      | 0.589        | 0.215 (0.083)    | -                | 1 (0.653) |     2.31 | brnz4n, drop, exit, insani, saffee |
|           53 |     1843 | 2024-04-19 | paiN           | W   | 0.649      | 0.143        | 0.478 (0.044)    | -                | -         |     9.25 | brnz4n, drop, exit, insani, saffee |
|           52 |     1850 | 2024-04-19 | FURIA          | W   | 0.648      | 0.589        | 0.253 (0.097)    | 0.509 (0.194)    | 1 (0.648) |    10.54 | brnz4n, drop, exit, insani, saffee |
|           51 |     1872 | 2024-04-19 | paiN           | L   | 0.646      | -            | -                | -                | -         |   -11.35 | brnz4n, drop, exit, insani, saffee |
|           50 |     1893 | 2024-04-18 | Imperial       | W   | 0.643      | -            | -                | -                | -         |     7.46 | brnz4n, drop, exit, insani, saffee |
|           49 |     1895 | 2024-04-18 | paiN           | W   | 0.642      | -            | -                | -                | -         |     9.26 | brnz4n, drop, exit, insani, saffee |
|           48 |     1900 | 2024-04-18 | OG             | W   | 0.641      | 0.589        | 0.215 (0.081)    | -                | 1 (0.641) |     2.27 | brnz4n, drop, exit, insani, saffee |
|           47 |     1945 | 2024-04-17 | RED Canids     | W   | 0.635      | -            | -                | -                | -         |     1.72 | brnz4n, drop, exit, insani, saffee |
|           46 |     1951 | 2024-04-17 | Case           | W   | 0.634      | -            | -                | -                | -         |     0.39 | brnz4n, drop, exit, insani, saffee |
|           45 |     1990 | 2024-04-16 | Bounty Hunters | W   | 0.628      | -            | -                | -                | -         |     0.41 | brnz4n, drop, exit, insani, saffee |
|           44 |     2011 | 2024-04-15 | Imperial       | W   | 0.621      | 0.435        | 0.390 (0.105)    | 0.646 (0.174)    | -         |     7.47 | brnz4n, drop, exit, insani, saffee |
|           43 |     2025 | 2024-04-14 | Galorys        | W   | 0.615      | -            | -                | -                | -         |     0.44 | brnz4n, drop, exit, insani, saffee |
|           42 |     2039 | 2024-04-13 | Case           | W   | 0.607      | -            | -                | -                | -         |     0.37 | brnz4n, drop, exit, insani, saffee |
|           41 |     2069 | 2024-04-11 | paiN           | W   | 0.595      | -            | -                | -                | -         |     9.66 | brnz4n, drop, exit, insani, saffee |
|           40 |     2111 | 2024-04-10 | Galorys        | W   | 0.588      | -            | -                | -                | -         |     0.40 | brnz4n, drop, exit, insani, saffee |
|           39 |     2112 | 2024-04-10 | Galorys        | W   | 0.588      | -            | -                | -                | -         |     0.40 | brnz4n, drop, exit, insani, saffee |
|           38 |     2129 | 2024-04-10 | Imperial       | W   | 0.586      | -            | -                | -                | -         |     7.90 | brnz4n, drop, exit, insani, saffee |
|           37 |     2161 | 2024-04-09 | adalYamigos    | W   | 0.582      | -            | -                | -                | -         |     0.14 | brnz4n, drop, exit, insani, saffee |
|           36 |     2165 | 2024-04-09 | adalYamigos    | W   | 0.581      | -            | -                | -                | -         |     0.14 | brnz4n, drop, exit, insani, saffee |
|           35 |     2170 | 2024-04-09 | RED Canids     | W   | 0.581      | -            | -                | -                | -         |     1.79 | brnz4n, drop, exit, insani, saffee |
|           34 |     2202 | 2024-04-08 | W7M            | W   | 0.575      | -            | -                | -                | -         |     0.28 | brnz4n, drop, exit, insani, saffee |
|           33 |     2236 | 2024-04-07 | paiN           | W   | 0.569      | -            | -                | -                | -         |    10.04 | brnz4n, drop, exit, insani, saffee |
|           32 |     2254 | 2024-04-06 | Bounty Hunters | W   | 0.562      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|           31 |     2270 | 2024-04-05 | Fluxo          | W   | 0.555      | -            | -                | -                | -         |     1.29 | brnz4n, drop, exit, insani, saffee |
|           30 |     2271 | 2024-04-05 | Fluxo          | L   | 0.555      | -            | -                | -                | -         |   -16.33 | brnz4n, drop, exit, insani, saffee |
|           29 |     2274 | 2024-04-05 | ODDIK          | W   | 0.554      | -            | -                | -                | -         |     0.57 | brnz4n, drop, exit, insani, saffee |
|           28 |     2297 | 2024-04-04 | Solid          | W   | 0.548      | -            | -                | -                | -         |     0.43 | brnz4n, drop, exit, insani, saffee |
|           27 |     2301 | 2024-04-04 | Solid          | W   | 0.548      | -            | -                | -                | -         |     0.43 | brnz4n, drop, exit, insani, saffee |
|           26 |     2332 | 2024-04-03 | Fluxo          | W   | 0.542      | -            | -                | -                | -         |     1.11 | brnz4n, drop, exit, insani, saffee |
|           25 |     2382 | 2024-04-02 | Fluxo          | W   | 0.535      | -            | -                | -                | -         |     1.07 | brnz4n, drop, exit, insani, saffee |
|           24 |     2385 | 2024-04-02 | Sharks         | W   | 0.534      | -            | -                | -                | -         |     0.21 | brnz4n, drop, exit, insani, saffee |
|           23 |     2471 | 2024-03-27 | Case           | W   | 0.495      | -            | -                | -                | -         |     0.33 | brnz4n, drop, exit, insani, saffee |
|           22 |     2477 | 2024-03-27 | Case           | W   | 0.495      | -            | -                | -                | -         |     0.33 | brnz4n, drop, exit, insani, saffee |
|           21 |     2517 | 2024-03-26 | ODDIK          | W   | 0.488      | -            | -                | -                | -         |     0.55 | brnz4n, drop, exit, insani, saffee |
|           20 |     2519 | 2024-03-26 | ODDIK          | W   | 0.488      | -            | -                | -                | -         |     0.55 | brnz4n, drop, exit, insani, saffee |
|           19 |     2711 | 2024-03-14 | Sharks         | W   | 0.409      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           18 |     2713 | 2024-03-14 | Sharks         | W   | 0.408      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           17 |     2784 | 2024-03-12 | Fluxo          | L   | 0.394      | -            | -                | -                | -         |   -11.65 | brnz4n, drop, exit, insani, saffee |
|           16 |     2823 | 2024-03-10 | Galorys        | W   | 0.381      | -            | -                | -                | -         |     0.23 | brnz4n, drop, exit, insani, saffee |
|           15 |     2871 | 2024-03-08 | LA RUGONETA    | W   | 0.368      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|           14 |     3002 | 2024-03-03 | Legacy         | L   | 0.335      | -            | -                | -                | -         |    -9.90 | brnz4n, drop, exit, insani, saffee |
|           13 |     3034 | 2024-03-02 | NRG            | W   | 0.327      | -            | -                | -                | 1 (0.327) |     0.22 | brnz4n, drop, exit, insani, saffee |
|           12 |     3057 | 2024-03-01 | BOSS           | L   | 0.321      | -            | -                | -                | -         |    -9.95 | brnz4n, drop, exit, insani, saffee |
|           11 |     3583 | 2024-02-03 | Imperial       | L   | 0.142      | -            | -                | -                | -         |    -2.77 | brnz4n, drop, exit, insani, saffee |
|           10 |     3647 | 2024-02-01 | paiN           | W   | 0.128      | -            | -                | -                | -         |     2.02 | brnz4n, drop, exit, insani, saffee |
|            9 |     3650 | 2024-02-01 | W7M            | W   | 0.128      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|            8 |     3823 | 2024-01-22 | adalYamigos    | L   | 0.062      | -            | -                | -                | -         |    -1.94 | brnz4n, drop, exit, insani, saffee |
|            7 |     3885 | 2024-01-20 | BESTIA         | W   | 0.048      | -            | -                | -                | -         |     0.06 | brnz4n, drop, exit, insani, saffee |
|            6 |     3933 | 2024-01-19 | TIMACETA       | W   | 0.042      | -            | -                | -                | -         |     0.00 | brnz4n, drop, exit, insani, saffee |
|            5 |     3947 | 2024-01-19 | ODDIK          | W   | 0.041      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |
|            4 |     3990 | 2024-01-18 | 9z             | L   | 0.036      | -            | -                | -                | -         |    -0.33 | brnz4n, drop, exit, insani, saffee |
|            3 |     3997 | 2024-01-18 | Sharks         | W   | 0.034      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |
|            2 |     4039 | 2024-01-17 | 9z             | L   | 0.029      | -            | -                | -                | -         |    -0.27 | brnz4n, drop, exit, insani, saffee |
|            1 |     4061 | 2024-01-17 | Sharks         | W   | 0.028      | -            | -                | -                | -         |     0.03 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,824.24)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.988 | $3,000.00      | $2,964.18       |
| 2024-04-28 |      0.705 | $50,000.00     | $35,232.20      |
| 2024-04-20 |      0.655 | $20,000.00     | $13,096.02      |
| 2024-04-15 |      0.621 | $25,000.00     | $15,531.84      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
