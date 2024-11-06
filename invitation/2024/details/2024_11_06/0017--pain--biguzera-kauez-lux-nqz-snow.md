### Roster Details<br />
Team Name: paiN<br />
Roster: biguzera, kauez, lux, nqz, snow<br />
Global Rank: [17](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [4]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  1402.1<br />
<br />
Final Rank Value (1402.1) = Starting Rank Value (1508.2) + Head To Head Adjustments (-106.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.582[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.313[<sup>2</sup>](#table1)
- LAN Wins: 0.819[<sup>2</sup>](#table1)

The average of these factors is 0.565<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1508.2
- 400 + ( ( 0.565 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1508.2


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
|          102 |      195 | 2024-10-27 | B8                | L   | 1.000      | -            | -                | -                | -         |   -20.98 | biguzera, kauez, lux, nqz, snow |
|          101 |      244 | 2024-10-25 | Legacy            | W   | 1.000      | 0.500        | -                | 0.708 (0.354)    | 1 (1.000) |     5.32 | biguzera, kauez, lux, nqz, snow |
|          100 |      250 | 2024-10-25 | Monte             | W   | 1.000      | 0.500        | -                | 0.882 (0.441)    | 1 (1.000) |     4.55 | biguzera, kauez, lux, nqz, snow |
|           99 |      301 | 2024-10-20 | MIBR              | W   | 1.000      | 0.450        | 0.136 (0.061)    | 0.572 (0.257)    | -         |     7.90 | biguzera, kauez, lux, nqz, snow |
|           98 |      383 | 2024-10-17 | MIBR              | W   | 1.000      | 0.450        | 0.136 (0.061)    | 0.572 (0.257)    | -         |     8.00 | biguzera, kauez, lux, nqz, snow |
|           97 |      413 | 2024-10-16 | inSanitY          | W   | 1.000      | -            | -                | -                | -         |     1.99 | biguzera, kauez, lux, nqz, snow |
|           96 |      567 | 2024-10-08 | Imperial          | L   | 1.000      | -            | -                | -                | -         |   -25.69 | biguzera, kauez, lux, nqz, snow |
|           95 |      574 | 2024-10-08 | Imperial          | W   | 1.000      | 0.450        | 0.119 (0.054)    | 0.588 (0.265)    | -         |     5.32 | biguzera, kauez, lux, nqz, snow |
|           94 |      580 | 2024-10-08 | MIBR              | W   | 1.000      | 0.450        | 0.136 (0.061)    | 0.572 (0.257)    | -         |     6.57 | biguzera, kauez, lux, nqz, snow |
|           93 |      583 | 2024-10-08 | MIBR              | W   | 1.000      | 0.450        | 0.136 (0.061)    | -                | -         |     6.98 | biguzera, kauez, lux, nqz, snow |
|           92 |      602 | 2024-10-07 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -8.28 | biguzera, kauez, lux, nqz, snow |
|           91 |      612 | 2024-10-07 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -6.00 | biguzera, kauez, lux, nqz, snow |
|           90 |      697 | 2024-10-04 | BESTIA            | L   | 0.981      | -            | -                | -                | -         |   -26.97 | biguzera, kauez, lux, nqz, snow |
|           89 |      759 | 2024-10-02 | Fluxo             | L   | 0.969      | -            | -                | -                | -         |   -25.40 | biguzera, kauez, lux, nqz, snow |
|           88 |      762 | 2024-10-02 | Fluxo             | L   | 0.969      | -            | -                | -                | -         |   -26.52 | biguzera, kauez, lux, nqz, snow |
|           87 |      766 | 2024-10-02 | RED Canids        | W   | 0.968      | -            | -                | -                | -         |     3.72 | biguzera, kauez, lux, nqz, snow |
|           86 |      771 | 2024-10-02 | RED Canids        | L   | 0.967      | -            | -                | -                | -         |   -27.21 | biguzera, kauez, lux, nqz, snow |
|           85 |      807 | 2024-10-01 | Hype              | W   | 0.962      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow |
|           84 |      811 | 2024-10-01 | Hype              | W   | 0.962      | -            | -                | -                | -         |     0.59 | biguzera, kauez, lux, nqz, snow |
|           83 |      865 | 2024-09-29 | Fluxo             | W   | 0.950      | -            | -                | -                | -         |     2.64 | biguzera, kauez, lux, nqz, snow |
|           82 |      869 | 2024-09-29 | Solid             | W   | 0.948      | -            | -                | -                | -         |     1.20 | biguzera, kauez, lux, nqz, snow |
|           81 |      895 | 2024-09-28 | RED Canids        | W   | 0.942      | -            | -                | -                | -         |     2.92 | biguzera, kauez, lux, nqz, snow |
|           80 |      901 | 2024-09-28 | Solid             | L   | 0.942      | -            | -                | -                | -         |   -28.59 | biguzera, kauez, lux, nqz, snow |
|           79 |     1033 | 2024-09-25 | ODDIK             | W   | 0.922      | -            | -                | -                | -         |     1.60 | biguzera, kauez, lux, nqz, snow |
|           78 |     1037 | 2024-09-25 | ODDIK             | W   | 0.922      | -            | -                | -                | -         |     1.62 | biguzera, kauez, lux, nqz, snow |
|           77 |     1085 | 2024-09-24 | Sharks            | W   | 0.916      | -            | -                | -                | -         |     1.35 | biguzera, kauez, lux, nqz, snow |
|           76 |     1092 | 2024-09-24 | Sharks            | W   | 0.915      | -            | -                | -                | -         |     1.37 | biguzera, kauez, lux, nqz, snow |
|           75 |     1132 | 2024-09-23 | RED Canids        | W   | 0.908      | -            | -                | -                | -         |     3.42 | biguzera, kauez, lux, nqz, snow |
|           74 |     1148 | 2024-09-23 | inSanitY          | W   | 0.907      | -            | -                | -                | -         |     0.85 | biguzera, kauez, lux, nqz, snow |
|           73 |     1238 | 2024-09-19 | KRÜ               | W   | 0.882      | -            | -                | -                | -         |     0.62 | biguzera, kauez, lux, nqz, snow |
|           72 |     1241 | 2024-09-19 | KRÜ               | W   | 0.882      | -            | -                | -                | -         |     0.62 | biguzera, kauez, lux, nqz, snow |
|           71 |     1274 | 2024-09-18 | BESTIA            | W   | 0.875      | 0.450        | 0.107 (0.042)    | 0.747 (0.294)    | -         |     1.44 | biguzera, kauez, lux, nqz, snow |
|           70 |     1278 | 2024-09-18 | BESTIA            | W   | 0.875      | 0.450        | -                | 0.747 (0.294)    | -         |     1.46 | biguzera, kauez, lux, nqz, snow |
|           69 |     1801 | 2024-08-31 | Eternal Fire      | L   | 0.753      | -            | -                | -                | -         |    -6.97 | biguzera, kauez, lux, nqz, snow |
|           68 |     1811 | 2024-08-30 | Virtus.pro        | W   | 0.747      | 0.769        | 0.216 (0.124)    | -                | 1 (0.747) |     9.72 | biguzera, kauez, lux, nqz, snow |
|           67 |     1839 | 2024-08-29 | MOUZ              | L   | 0.741      | -            | -                | -                | -         |    -5.15 | biguzera, kauez, lux, nqz, snow |
|           66 |     1891 | 2024-08-28 | HEROIC            | W   | 0.734      | 0.769        | 0.524 (0.296)    | 0.554 (0.313)    | 1 (0.734) |    15.21 | biguzera, kauez, lux, nqz, snow |
|           65 |     1981 | 2024-08-27 | Falcons           | W   | 0.725      | -            | -                | -                | 1 (0.725) |     5.98 | biguzera, kauez, lux, nqz, snow |
|           64 |     2089 | 2024-08-25 | 9z                | W   | 0.713      | -            | -                | -                | 1 (0.713) |     3.63 | biguzera, kauez, lux, nqz, snow |
|           63 |     2105 | 2024-08-24 | FaZe              | L   | 0.708      | -            | -                | -                | -         |    -7.95 | biguzera, kauez, lux, nqz, snow |
|           62 |     2108 | 2024-08-24 | BetBoom           | W   | 0.707      | -            | -                | -                | 1 (0.707) |     2.02 | biguzera, kauez, lux, nqz, snow |
|           61 |     2134 | 2024-08-23 | Cloud9            | W   | 0.700      | -            | -                | -                | -         |     1.04 | biguzera, kauez, lux, nqz, snow |
|           60 |     2460 | 2024-08-13 | G2                | L   | 0.633      | -            | -                | -                | -         |    -1.26 | biguzera, kauez, lux, nqz, snow |
|           59 |     2499 | 2024-08-12 | The MongolZ       | W   | 0.628      | 1.000        | 1.000 (0.628)    | 0.632 (0.397)    | 1 (0.628) |    16.53 | biguzera, kauez, lux, nqz, snow |
|           58 |     2528 | 2024-08-11 | 9z                | W   | 0.621      | 1.000        | 0.121 (0.075)    | -                | 1 (0.621) |     3.23 | biguzera, kauez, lux, nqz, snow |
|           57 |     2552 | 2024-08-10 | Natus Vincere     | L   | 0.614      | -            | -                | -                | -         |    -1.70 | biguzera, kauez, lux, nqz, snow |
|           56 |     2574 | 2024-08-09 | MIBR              | W   | 0.608      | -            | -                | -                | 1 (0.608) |     4.35 | biguzera, kauez, lux, nqz, snow |
|           55 |     2586 | 2024-08-09 | Imperial          | W   | 0.606      | -            | -                | -                | -         |     2.21 | biguzera, kauez, lux, nqz, snow |
|           54 |     2636 | 2024-08-07 | Liquid            | L   | 0.595      | -            | -                | -                | -         |    -8.19 | biguzera, kauez, lux, nqz, snow |
|           53 |     2777 | 2024-08-03 | Legacy            | W   | 0.569      | -            | -                | -                | -         |     1.27 | biguzera, kauez, lux, nqz, snow |
|           52 |     2789 | 2024-08-03 | ODDIK             | W   | 0.567      | -            | -                | -                | -         |     1.45 | biguzera, kauez, lux, nqz, snow |
|           51 |     2812 | 2024-08-02 | MIBR              | W   | 0.562      | -            | -                | -                | -         |     4.02 | biguzera, kauez, lux, nqz, snow |
|           50 |     2815 | 2024-08-02 | Legacy            | W   | 0.561      | -            | -                | -                | -         |     1.21 | biguzera, kauez, lux, nqz, snow |
|           49 |     2831 | 2024-08-02 | Sharks            | W   | 0.560      | -            | -                | -                | -         |     1.30 | biguzera, kauez, lux, nqz, snow |
|           48 |     2867 | 2024-08-01 | Sharks            | W   | 0.554      | -            | -                | -                | -         |     1.28 | biguzera, kauez, lux, nqz, snow |
|           47 |     2896 | 2024-07-31 | ODDIK             | W   | 0.549      | -            | -                | -                | -         |     1.38 | biguzera, kauez, lux, nqz, snow |
|           46 |     2920 | 2024-07-31 | Dusty Roots       | W   | 0.546      | -            | -                | -                | -         |     0.27 | biguzera, kauez, lux, nqz, snow |
|           45 |     2944 | 2024-07-30 | Players           | W   | 0.542      | -            | -                | -                | -         |     0.16 | biguzera, kauez, lux, nqz, snow |
|           44 |     2947 | 2024-07-30 | Players           | W   | 0.542      | -            | -                | -                | -         |     0.16 | biguzera, kauez, lux, nqz, snow |
|           43 |     2961 | 2024-07-30 | Case              | W   | 0.540      | -            | -                | -                | -         |     0.52 | biguzera, kauez, lux, nqz, snow |
|           42 |     2981 | 2024-07-29 | Imperial          | W   | 0.536      | -            | -                | -                | -         |     2.05 | biguzera, kauez, lux, nqz, snow |
|           41 |     3009 | 2024-07-28 | Imperial          | W   | 0.530      | -            | -                | -                | -         |     1.95 | biguzera, kauez, lux, nqz, snow |
|           40 |     3016 | 2024-07-28 | RED Canids        | W   | 0.528      | -            | -                | -                | -         |     2.56 | biguzera, kauez, lux, nqz, snow |
|           39 |     3230 | 2024-07-21 | Fluxo             | L   | 0.482      | -            | -                | -                | -         |   -13.76 | biguzera, kauez, lux, nqz, snow |
|           38 |     3239 | 2024-07-21 | Fluxo             | W   | 0.480      | -            | -                | -                | -         |     1.37 | biguzera, kauez, lux, nqz, snow |
|           37 |     3263 | 2024-07-20 | Imperial          | W   | 0.475      | -            | -                | -                | -         |     1.54 | biguzera, kauez, lux, nqz, snow |
|           36 |     3278 | 2024-07-20 | Bounty Hunters    | W   | 0.473      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|           35 |     3299 | 2024-07-19 | Fluxo             | W   | 0.468      | -            | -                | -                | -         |     1.26 | biguzera, kauez, lux, nqz, snow |
|           34 |     3311 | 2024-07-19 | Vikings KR        | W   | 0.467      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, nqz, snow |
|           33 |     3338 | 2024-07-18 | Dusty Roots       | W   | 0.462      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, nqz, snow |
|           32 |     3343 | 2024-07-18 | Dusty Roots       | W   | 0.462      | -            | -                | -                | -         |     0.21 | biguzera, kauez, lux, nqz, snow |
|           31 |     3406 | 2024-07-17 | Case              | W   | 0.455      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow |
|           30 |     3408 | 2024-07-17 | Case              | W   | 0.455      | -            | -                | -                | -         |     0.41 | biguzera, kauez, lux, nqz, snow |
|           29 |     3436 | 2024-07-17 | W7M               | W   | 0.453      | -            | -                | -                | -         |     0.19 | biguzera, kauez, lux, nqz, snow |
|           28 |     3469 | 2024-07-16 | Galorys           | W   | 0.449      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, nqz, snow |
|           27 |     3474 | 2024-07-16 | Galorys           | W   | 0.449      | -            | -                | -                | -         |     0.23 | biguzera, kauez, lux, nqz, snow |
|           26 |     3514 | 2024-07-15 | Solid             | W   | 0.442      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|           25 |     3517 | 2024-07-15 | Solid             | W   | 0.442      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|           24 |     3745 | 2024-06-16 | Fluxo             | L   | 0.248      | -            | -                | -                | -         |    -7.30 | biguzera, kauez, lux, nqz, snow |
|           23 |     3772 | 2024-06-15 | 9z                | L   | 0.242      | -            | -                | -                | -         |    -6.51 | biguzera, kauez, lux, nqz, snow |
|           22 |     3788 | 2024-06-15 | ODDIK             | W   | 0.240      | -            | -                | -                | -         |     0.54 | biguzera, kauez, lux, nqz, snow |
|           21 |     3805 | 2024-06-14 | Ninjas in Pyjamas | L   | 0.236      | -            | -                | -                | -         |    -6.58 | biguzera, kauez, lux, nqz, snow |
|           20 |     3823 | 2024-06-14 | BESTIA            | W   | 0.234      | -            | -                | -                | -         |     0.53 | biguzera, kauez, lux, nqz, snow |
|           19 |     3848 | 2024-06-13 | KRÜ               | W   | 0.228      | -            | -                | -                | -         |     0.14 | biguzera, kauez, lux, nqz, snow |
|           18 |     3922 | 2024-06-10 | BESTIA            | W   | 0.209      | -            | -                | -                | -         |     0.47 | biguzera, kauez, lux, nqz, snow |
|           17 |     3932 | 2024-06-10 | Imperial          | W   | 0.207      | -            | -                | -                | -         |     0.73 | biguzera, kauez, lux, nqz, snow |
|           16 |     3963 | 2024-06-09 | Sharks            | W   | 0.201      | -            | -                | -                | -         |     0.56 | biguzera, kauez, lux, nqz, snow |
|           15 |     4019 | 2024-06-08 | Hype              | W   | 0.196      | -            | -                | -                | -         |     0.12 | biguzera, kauez, lux, nqz, snow |
|           14 |     4055 | 2024-06-08 | Dusty Roots       | W   | 0.193      | -            | -                | -                | -         |     0.10 | biguzera, kauez, lux, nqz, snow |
|           13 |     4077 | 2024-06-07 | Patins da Ferrari | W   | 0.189      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, nqz, snow |
|           12 |     4127 | 2024-06-06 | Galorys           | W   | 0.183      | -            | -                | -                | -         |     0.09 | biguzera, kauez, lux, nqz, snow |
|           11 |     4136 | 2024-06-06 | Sharks            | L   | 0.182      | -            | -                | -                | -         |    -5.24 | biguzera, kauez, lux, nqz, snow |
|           10 |     4205 | 2024-06-05 | Fluxo             | W   | 0.176      | -            | -                | -                | -         |     0.32 | biguzera, kauez, lux, nqz, snow |
|            9 |     4257 | 2024-06-04 | ODDIK             | W   | 0.169      | -            | -                | -                | -         |     0.38 | biguzera, kauez, lux, nqz, snow |
|            8 |     4584 | 2024-05-22 | MIBR              | L   | 0.081      | -            | -                | -                | -         |    -1.91 | biguzera, kauez, lux, nqz, snow |
|            7 |     4587 | 2024-05-22 | MIBR              | L   | 0.081      | -            | -                | -                | -         |    -1.91 | biguzera, kauez, lux, nqz, snow |
|            6 |     4693 | 2024-05-19 | AMKAL             | L   | 0.060      | -            | -                | -                | -         |    -1.82 | biguzera, kauez, lux, nqz, snow |
|            5 |     4703 | 2024-05-19 | OG                | W   | 0.059      | -            | -                | -                | -         |     0.01 | biguzera, kauez, lux, nqz, snow |
|            4 |     4717 | 2024-05-18 | AMKAL             | L   | 0.054      | -            | -                | -                | -         |    -1.64 | biguzera, kauez, lux, nqz, snow |
|            3 |     4940 | 2024-05-12 | 9z                | W   | 0.015      | -            | -                | -                | -         |     0.06 | biguzera, kauez, lux, nqz, snow |
|            2 |     4972 | 2024-05-11 | BESTIA            | W   | 0.008      | -            | -                | -                | -         |     0.02 | biguzera, kauez, lux, nqz, snow |
|            1 |     5001 | 2024-05-10 | RED Canids        | W   | 0.000      | -            | -                | -                | -         |     0.00 | biguzera, kauez, lux, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,832.50)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-13 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-09-01 |      0.759 | $25,000.00     | $18,985.28      |
| 2024-08-27 |      0.726 | $10,000.00     | $7,264.78       |
| 2024-08-25 |      0.714 | $7,500.00      | $5,358.44       |
| 2024-08-18 |      0.668 | $24,000.00     | $16,028.52      |
| 2024-08-02 |      0.562 | $10,000.00     | $5,621.22       |
| 2024-06-16 |      0.248 | $10,000.00     | $2,483.32       |
| 2024-06-10 |      0.209 | $10,000.00     | $2,090.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
