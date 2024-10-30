### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [16](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [4]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  1499.8<br />
<br />
Final Rank Value (1499.8) = Starting Rank Value (1634.6) + Head To Head Adjustments (-134.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.713[<sup>1</sup>](#table2)
- Bounty Collected: 0.582[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.885[<sup>2</sup>](#table1)

The average of these factors is 0.623<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1634.6
- 400 + ( ( 0.623 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1634.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          112 |       54 | 2024-10-27 | B8                | L   | 1.000      | -            | -                | -                | -         |   -21.82 | biguzera, kauez, lux, nqz, snow |
|          111 |      103 | 2024-10-25 | Legacy            | W   | 1.000      | 0.500        | -                | 0.699 (0.350)    | 1 (1.000) |     4.76 | biguzera, kauez, lux, nqz, snow |
|          110 |      109 | 2024-10-25 | Monte             | W   | 1.000      | 0.500        | -                | 0.833 (0.417)    | 1 (1.000) |     3.82 | biguzera, kauez, lux, nqz, snow |
|          109 |      160 | 2024-10-20 | MIBR              | W   | 1.000      | 0.450        | 0.282 (0.127)    | 0.564 (0.254)    | -         |     7.50 | biguzera, kauez, lux, nqz, snow |
|          108 |      242 | 2024-10-17 | MIBR              | W   | 1.000      | 0.450        | 0.282 (0.127)    | 0.564 (0.254)    | -         |     7.59 | biguzera, kauez, lux, nqz, snow |
|          107 |      272 | 2024-10-16 | inSanitY          | W   | 1.000      | -            | -                | -                | -         |     1.66 | biguzera, kauez, lux, nqz, snow |
|          106 |      426 | 2024-10-08 | Imperial          | L   | 1.000      | -            | -                | -                | -         |   -25.88 | biguzera, kauez, lux, nqz, snow |
|          105 |      433 | 2024-10-08 | Imperial          | W   | 1.000      | 0.450        | 0.248 (0.112)    | 0.578 (0.260)    | -         |     5.13 | biguzera, kauez, lux, nqz, snow |
|          104 |      439 | 2024-10-08 | MIBR              | W   | 1.000      | 0.450        | 0.282 (0.127)    | 0.564 (0.254)    | -         |     6.22 | biguzera, kauez, lux, nqz, snow |
|          103 |      442 | 2024-10-08 | MIBR              | W   | 1.000      | 0.450        | 0.282 (0.127)    | -                | -         |     6.58 | biguzera, kauez, lux, nqz, snow |
|          102 |      461 | 2024-10-07 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -8.45 | biguzera, kauez, lux, nqz, snow |
|          101 |      471 | 2024-10-07 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -4.78 | biguzera, kauez, lux, nqz, snow |
|          100 |      556 | 2024-10-04 | BESTIA            | L   | 1.000      | -            | -                | -                | -         |   -27.99 | biguzera, kauez, lux, nqz, snow |
|           99 |      618 | 2024-10-02 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -26.69 | biguzera, kauez, lux, nqz, snow |
|           98 |      621 | 2024-10-02 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |   -27.81 | biguzera, kauez, lux, nqz, snow |
|           97 |      625 | 2024-10-02 | RED Canids        | W   | 1.000      | -            | -                | -                | -         |     3.56 | biguzera, kauez, lux, nqz, snow |
|           96 |      630 | 2024-10-02 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |   -28.38 | biguzera, kauez, lux, nqz, snow |
|           95 |      666 | 2024-10-01 | Hype              | W   | 1.000      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, snow |
|           94 |      670 | 2024-10-01 | Hype              | W   | 1.000      | -            | -                | -                | -         |     0.46 | biguzera, kauez, lux, nqz, snow |
|           93 |      724 | 2024-09-29 | Fluxo             | W   | 0.996      | -            | -                | -                | -         |     2.38 | biguzera, kauez, lux, nqz, snow |
|           92 |      728 | 2024-09-29 | Solid             | W   | 0.994      | -            | -                | -                | -         |     0.98 | biguzera, kauez, lux, nqz, snow |
|           91 |      754 | 2024-09-28 | RED Canids        | W   | 0.989      | -            | -                | -                | -         |     2.79 | biguzera, kauez, lux, nqz, snow |
|           90 |      760 | 2024-09-28 | Solid             | L   | 0.988      | -            | -                | -                | -         |   -30.24 | biguzera, kauez, lux, nqz, snow |
|           89 |      892 | 2024-09-25 | ODDIK             | W   | 0.969      | -            | -                | -                | -         |     1.41 | biguzera, kauez, lux, nqz, snow |
|           88 |      896 | 2024-09-25 | ODDIK             | W   | 0.968      | -            | -                | -                | -         |     1.43 | biguzera, kauez, lux, nqz, snow |
|           87 |      944 | 2024-09-24 | Sharks            | W   | 0.962      | -            | -                | -                | -         |     1.14 | biguzera, kauez, lux, nqz, snow |
|           86 |      951 | 2024-09-24 | Sharks            | W   | 0.961      | -            | -                | -                | -         |     1.16 | biguzera, kauez, lux, nqz, snow |
|           85 |      991 | 2024-09-23 | RED Canids        | W   | 0.954      | -            | -                | -                | -         |     3.33 | biguzera, kauez, lux, nqz, snow |
|           84 |     1007 | 2024-09-23 | inSanitY          | W   | 0.953      | -            | -                | -                | -         |     0.69 | biguzera, kauez, lux, nqz, snow |
|           83 |     1097 | 2024-09-19 | KRÜ               | W   | 0.928      | -            | -                | -                | -         |     0.48 | biguzera, kauez, lux, nqz, snow |
|           82 |     1100 | 2024-09-19 | KRÜ               | W   | 0.928      | -            | -                | -                | -         |     0.48 | biguzera, kauez, lux, nqz, snow |
|           81 |     1133 | 2024-09-18 | BESTIA            | W   | 0.922      | 0.450        | 0.218 (0.090)    | 0.737 (0.306)    | -         |     1.23 | biguzera, kauez, lux, nqz, snow |
|           80 |     1137 | 2024-09-18 | BESTIA            | W   | 0.921      | 0.450        | -                | 0.737 (0.306)    | -         |     1.25 | biguzera, kauez, lux, nqz, snow |
|           79 |     1660 | 2024-08-31 | Eternal Fire      | L   | 0.799      | -            | -                | -                | -         |    -5.83 | biguzera, kauez, lux, nqz, snow |
|           78 |     1670 | 2024-08-30 | Virtus.pro        | W   | 0.793      | 0.769        | 0.469 (0.286)    | -                | 1 (0.793) |    11.05 | biguzera, kauez, lux, nqz, snow |
|           77 |     1698 | 2024-08-29 | MOUZ              | L   | 0.788      | -            | -                | -                | -         |    -4.28 | biguzera, kauez, lux, nqz, snow |
|           76 |     1750 | 2024-08-28 | HEROIC            | W   | 0.781      | 0.769        | 0.443 (0.266)    | 0.502 (0.301)    | 1 (0.781) |    13.19 | biguzera, kauez, lux, nqz, snow |
|           75 |     1840 | 2024-08-27 | Falcons           | W   | 0.771      | -            | -                | -                | 1 (0.771) |     6.91 | biguzera, kauez, lux, nqz, snow |
|           74 |     1948 | 2024-08-25 | 9z                | W   | 0.759      | -            | -                | -                | 1 (0.759) |     4.17 | biguzera, kauez, lux, nqz, snow |
|           73 |     1964 | 2024-08-24 | FaZe              | L   | 0.754      | -            | -                | -                | -         |    -8.87 | biguzera, kauez, lux, nqz, snow |
|           72 |     1967 | 2024-08-24 | BetBoom           | W   | 0.753      | -            | -                | -                | 1 (0.753) |     2.15 | biguzera, kauez, lux, nqz, snow |
|           71 |     1993 | 2024-08-23 | Cloud9            | W   | 0.746      | -            | -                | -                | -         |     0.91 | biguzera, kauez, lux, nqz, snow |
|           70 |     2319 | 2024-08-13 | G2                | L   | 0.679      | -            | -                | -                | -         |    -2.73 | biguzera, kauez, lux, nqz, snow |
|           69 |     2358 | 2024-08-12 | The MongolZ       | W   | 0.674      | 1.000        | 0.698 (0.471)    | 0.592 (0.399)    | 1 (0.674) |    14.41 | biguzera, kauez, lux, nqz, snow |
|           68 |     2387 | 2024-08-11 | 9z                | W   | 0.667      | 1.000        | 0.271 (0.181)    | -                | 1 (0.667) |     3.66 | biguzera, kauez, lux, nqz, snow |
|           67 |     2411 | 2024-08-10 | Natus Vincere     | L   | 0.660      | -            | -                | -                | -         |    -2.23 | biguzera, kauez, lux, nqz, snow |
|           66 |     2433 | 2024-08-09 | MIBR              | W   | 0.654      | -            | -                | -                | 1 (0.654) |     4.42 | biguzera, kauez, lux, nqz, snow |
|           65 |     2445 | 2024-08-09 | Imperial          | W   | 0.653      | -            | -                | -                | -         |     2.30 | biguzera, kauez, lux, nqz, snow |
|           64 |     2495 | 2024-08-07 | Liquid            | L   | 0.641      | -            | -                | -                | -         |    -7.83 | biguzera, kauez, lux, nqz, snow |
|           63 |     2636 | 2024-08-03 | Legacy            | W   | 0.615      | -            | -                | -                | -         |     1.14 | biguzera, kauez, lux, nqz, snow |
|           62 |     2648 | 2024-08-03 | ODDIK             | W   | 0.613      | -            | -                | -                | -         |     1.34 | biguzera, kauez, lux, nqz, snow |
|           61 |     2671 | 2024-08-02 | MIBR              | W   | 0.608      | -            | -                | -                | -         |     4.11 | biguzera, kauez, lux, nqz, snow |
|           60 |     2674 | 2024-08-02 | Legacy            | W   | 0.607      | -            | -                | -                | -         |     1.07 | biguzera, kauez, lux, nqz, snow |
|           59 |     2690 | 2024-08-02 | Sharks            | W   | 0.606      | -            | -                | -                | -         |     1.16 | biguzera, kauez, lux, nqz, snow |
|           58 |     2726 | 2024-08-01 | Sharks            | W   | 0.600      | -            | -                | -                | -         |     1.13 | biguzera, kauez, lux, nqz, snow |
|           57 |     2755 | 2024-07-31 | ODDIK             | W   | 0.595      | -            | -                | -                | -         |     1.26 | biguzera, kauez, lux, nqz, snow |
|           56 |     2779 | 2024-07-31 | Dusty Roots       | W   | 0.593      | -            | -                | -                | -         |     0.20 | biguzera, kauez, lux, nqz, snow |
|           55 |     2803 | 2024-07-30 | Players           | W   | 0.588      | -            | -                | -                | -         |     0.11 | biguzera, kauez, lux, nqz, snow |
|           54 |     2806 | 2024-07-30 | Players           | W   | 0.588      | -            | -                | -                | -         |     0.11 | biguzera, kauez, lux, nqz, snow |
|           53 |     2820 | 2024-07-30 | Case              | W   | 0.586      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow |
|           52 |     2840 | 2024-07-29 | Imperial          | W   | 0.582      | -            | -                | -                | -         |     2.15 | biguzera, kauez, lux, nqz, snow |
|           51 |     2868 | 2024-07-28 | Imperial          | W   | 0.576      | -            | -                | -                | -         |     2.04 | biguzera, kauez, lux, nqz, snow |
|           50 |     2875 | 2024-07-28 | RED Canids        | W   | 0.574      | -            | -                | -                | -         |     2.62 | biguzera, kauez, lux, nqz, snow |
|           49 |     3089 | 2024-07-21 | Fluxo             | L   | 0.528      | -            | -                | -                | -         |   -15.25 | biguzera, kauez, lux, nqz, snow |
|           48 |     3098 | 2024-07-21 | Fluxo             | W   | 0.527      | -            | -                | -                | -         |     1.33 | biguzera, kauez, lux, nqz, snow |
|           47 |     3122 | 2024-07-20 | Imperial          | W   | 0.521      | -            | -                | -                | -         |     1.63 | biguzera, kauez, lux, nqz, snow |
|           46 |     3137 | 2024-07-20 | Bounty Hunters    | W   | 0.520      | -            | -                | -                | -         |     0.24 | biguzera, kauez, lux, nqz, snow |
|           45 |     3158 | 2024-07-19 | Fluxo             | W   | 0.514      | -            | -                | -                | -         |     1.22 | biguzera, kauez, lux, nqz, snow |
|           44 |     3170 | 2024-07-19 | Vikings KR        | W   | 0.513      | -            | -                | -                | -         |     0.13 | biguzera, kauez, lux, nqz, snow |
|           43 |     3197 | 2024-07-18 | Dusty Roots       | W   | 0.508      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow |
|           42 |     3202 | 2024-07-18 | Dusty Roots       | W   | 0.508      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow |
|           41 |     3265 | 2024-07-17 | Case              | W   | 0.502      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|           40 |     3267 | 2024-07-17 | Case              | W   | 0.501      | -            | -                | -                | -         |     0.33 | biguzera, kauez, lux, nqz, snow |
|           39 |     3295 | 2024-07-17 | W7M               | W   | 0.500      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow |
|           38 |     3328 | 2024-07-16 | Galorys           | W   | 0.495      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, snow |
|           37 |     3333 | 2024-07-16 | Galorys           | W   | 0.495      | -            | -                | -                | -         |     0.17 | biguzera, kauez, lux, nqz, snow |
|           36 |     3373 | 2024-07-15 | Solid             | W   | 0.489      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow |
|           35 |     3376 | 2024-07-15 | Solid             | W   | 0.488      | -            | -                | -                | -         |     0.25 | biguzera, kauez, lux, nqz, snow |
|           34 |     3604 | 2024-06-16 | Fluxo             | L   | 0.295      | -            | -                | -                | -         |    -8.74 | biguzera, kauez, lux, nqz, snow |
|           33 |     3631 | 2024-06-15 | 9z                | L   | 0.288      | -            | -                | -                | -         |    -7.68 | biguzera, kauez, lux, nqz, snow |
|           32 |     3647 | 2024-06-15 | ODDIK             | W   | 0.286      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, snow |
|           31 |     3664 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.282      | -            | -                | -                | -         |    -7.91 | biguzera, kauez, lux, nqz, snow |
|           30 |     3682 | 2024-06-14 | BESTIA            | W   | 0.280      | -            | -                | -                | -         |     0.55 | biguzera, kauez, lux, nqz, snow |
|           29 |     3707 | 2024-06-13 | KRÜ               | W   | 0.274      | -            | -                | -                | -         |     0.11 | biguzera, kauez, lux, nqz, snow |
|           28 |     3781 | 2024-06-10 | BESTIA            | W   | 0.255      | -            | -                | -                | -         |     0.51 | biguzera, kauez, lux, nqz, snow |
|           27 |     3791 | 2024-06-10 | Imperial          | W   | 0.253      | -            | -                | -                | -         |     0.88 | biguzera, kauez, lux, nqz, snow |
|           26 |     3822 | 2024-06-09 | Sharks            | W   | 0.247      | -            | -                | -                | -         |     0.57 | biguzera, kauez, lux, nqz, snow |
|           25 |     3878 | 2024-06-08 | Hype              | W   | 0.242      | -            | -                | -                | -         |     0.11 | biguzera, kauez, lux, nqz, snow |
|           24 |     3914 | 2024-06-08 | Dusty Roots       | W   | 0.239      | -            | -                | -                | -         |     0.07 | biguzera, kauez, lux, nqz, snow |
|           23 |     3936 | 2024-06-07 | Patins da Ferrari | W   | 0.235      | -            | -                | -                | -         |     0.04 | biguzera, kauez, lux, nqz, snow |
|           22 |     3986 | 2024-06-06 | Galorys           | W   | 0.229      | -            | -                | -                | -         |     0.08 | biguzera, kauez, lux, nqz, snow |
|           21 |     3995 | 2024-06-06 | Sharks            | L   | 0.228      | -            | -                | -                | -         |    -6.68 | biguzera, kauez, lux, nqz, snow |
|           20 |     4064 | 2024-06-05 | Fluxo             | W   | 0.222      | -            | -                | -                | -         |     0.34 | biguzera, kauez, lux, nqz, snow |
|           19 |     4116 | 2024-06-04 | ODDIK             | W   | 0.215      | -            | -                | -                | -         |     0.40 | biguzera, kauez, lux, nqz, snow |
|           18 |     4443 | 2024-05-22 | MIBR              | L   | 0.127      | -            | -                | -                | -         |    -3.05 | biguzera, kauez, lux, nqz, snow |
|           17 |     4446 | 2024-05-22 | MIBR              | L   | 0.127      | -            | -                | -                | -         |    -3.07 | biguzera, kauez, lux, nqz, snow |
|           16 |     4552 | 2024-05-19 | AMKAL             | L   | 0.107      | -            | -                | -                | -         |    -3.25 | biguzera, kauez, lux, nqz, snow |
|           15 |     4562 | 2024-05-19 | OG                | W   | 0.105      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|           14 |     4576 | 2024-05-18 | AMKAL             | L   | 0.100      | -            | -                | -                | -         |    -3.06 | biguzera, kauez, lux, nqz, snow |
|           13 |     4799 | 2024-05-12 | 9z                | W   | 0.061      | -            | -                | -                | -         |     0.26 | biguzera, kauez, lux, nqz, snow |
|           12 |     4831 | 2024-05-11 | BESTIA            | W   | 0.054      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, nqz, snow |
|           11 |     4860 | 2024-05-10 | RED Canids        | W   | 0.047      | -            | -                | -                | -         |     0.18 | biguzera, kauez, lux, nqz, snow |
|           10 |     4870 | 2024-05-09 | Fluxo             | L   | 0.042      | -            | -                | -                | -         |    -1.27 | biguzera, kauez, lux, nqz, snow |
|            9 |     4876 | 2024-05-09 | Fluxo             | W   | 0.042      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, nqz, snow |
|            8 |     4895 | 2024-05-08 | RED Canids        | W   | 0.035      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow |
|            7 |     4897 | 2024-05-08 | RED Canids        | L   | 0.035      | -            | -                | -                | -         |    -0.97 | biguzera, kauez, lux, nqz, snow |
|            6 |     4901 | 2024-05-08 | Galorys           | W   | 0.034      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            5 |     4903 | 2024-05-08 | Galorys           | W   | 0.034      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            4 |     4916 | 2024-05-07 | W7M               | W   | 0.028      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            3 |     4936 | 2024-05-06 | W7M               | W   | 0.021      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            2 |     4937 | 2024-05-06 | W7M               | W   | 0.020      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |
|            1 |     4949 | 2024-05-05 | KRÜ               | W   | 0.014      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96,290.53)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-13 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-09-01 |      0.806 | $25,000.00     | $20,140.21      |
| 2024-08-27 |      0.773 | $10,000.00     | $7,726.75       |
| 2024-08-25 |      0.761 | $7,500.00      | $5,704.92       |
| 2024-08-18 |      0.714 | $24,000.00     | $17,137.25      |
| 2024-08-02 |      0.608 | $10,000.00     | $6,083.19       |
| 2024-06-16 |      0.295 | $10,000.00     | $2,945.30       |
| 2024-06-10 |      0.255 | $10,000.00     | $2,552.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
