### Roster Details<br />
Team Name: NRG<br />
Roster: autimatic, Brehze, HexT, nitr0, oSee<br />
Global Rank: [38](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [13]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  1075.6<br />
<br />
Final Rank Value (1075.6) = Starting Rank Value (885.1) + Head To Head Adjustments (190.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.217[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.1
- 400 + ( ( 0.253 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 885.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           91 |       28 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -12.66 | autimatic, Brehze, HexT, nitr0, oSee |
|           90 |       33 | 2024-10-01 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -13.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           89 |      163 | 2024-09-27 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -16.16 | autimatic, Brehze, HexT, nitr0, oSee |
|           88 |      168 | 2024-09-27 | E-Xolos LAZER    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           87 |      257 | 2024-09-25 | M80              | L   | 1.000      | -            | -                | -                | -         |    -8.72 | autimatic, Brehze, HexT, nitr0, oSee |
|           86 |      262 | 2024-09-25 | M80              | W   | 1.000      | 0.477        | 0.216 (0.103)    | 0.593 (0.283)    | 0 (0.000) |    23.31 | autimatic, Brehze, HexT, nitr0, oSee |
|           85 |      314 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.557 (0.265)    | 0 (0.000) |     6.95 | autimatic, Brehze, HexT, nitr0, oSee |
|           84 |      317 | 2024-09-24 | timbermen        | W   | 1.000      | 0.477        | 0.027 (0.013)    | 0.557 (0.265)    | 0 (0.000) |     7.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           83 |      393 | 2024-09-22 | Nouns            | W   | 1.000      | 0.303        | 0.059 (0.018)    | 0.621 (0.188)    | 0 (0.000) |    15.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           82 |      397 | 2024-09-22 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.64 | autimatic, Brehze, HexT, nitr0, oSee |
|           81 |      422 | 2024-09-21 | Party Astronauts | W   | 1.000      | 0.303        | -                | 0.499 (0.151)    | 0 (0.000) |     9.32 | autimatic, Brehze, HexT, nitr0, oSee |
|           80 |      469 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.080 (0.038)    | 0.578 (0.276)    | 0 (0.000) |    18.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           79 |      473 | 2024-09-19 | Wildcard         | W   | 1.000      | 0.477        | 0.080 (0.038)    | 0.578 (0.276)    | 0 (0.000) |    20.54 | autimatic, Brehze, HexT, nitr0, oSee |
|           78 |      502 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.55 | autimatic, Brehze, HexT, nitr0, oSee |
|           77 |      505 | 2024-09-18 | Take Flyte       | W   | 1.000      | -            | -                | -                | -         |     4.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           76 |      538 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     3.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           75 |      539 | 2024-09-17 | LAG              | W   | 1.000      | -            | -                | -                | -         |     3.33 | autimatic, Brehze, HexT, nitr0, oSee |
|           74 |     1038 | 2024-08-30 | Wildcard         | L   | 0.982      | -            | -                | -                | -         |    -9.63 | autimatic, Brehze, HexT, nitr0, oSee |
|           73 |     1039 | 2024-08-30 | Nouns            | W   | 0.981      | 0.143        | 0.059 (0.008)    | -                | -         |    18.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           72 |     1064 | 2024-08-29 | Wildcard         | L   | 0.976      | -            | -                | -                | -         |    -9.62 | autimatic, Brehze, HexT, nitr0, oSee |
|           71 |     1068 | 2024-08-29 | Nouns            | W   | 0.974      | -            | -                | -                | -         |    18.77 | autimatic, Brehze, HexT, nitr0, oSee |
|           70 |     1120 | 2024-08-28 | Legacy           | L   | 0.967      | -            | -                | -                | -         |   -14.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           69 |     1184 | 2024-08-27 | Nouns            | L   | 0.960      | -            | -                | -                | -         |   -12.12 | autimatic, Brehze, HexT, nitr0, oSee |
|           68 |     1232 | 2024-08-26 | timbermen        | W   | 0.955      | -            | -                | -                | -         |    12.94 | autimatic, Brehze, HexT, nitr0, oSee |
|           67 |     1253 | 2024-08-26 | Akimbo           | W   | 0.953      | -            | -                | -                | -         |     1.97 | autimatic, Brehze, HexT, nitr0, oSee |
|           66 |     1565 | 2024-08-17 | Wildcard         | L   | 0.895      | -            | -                | -                | -         |   -12.18 | autimatic, Brehze, HexT, nitr0, oSee |
|           65 |     1567 | 2024-08-17 | LAG              | W   | 0.894      | -            | -                | -                | -         |     3.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           64 |     1569 | 2024-08-17 | DETONATE         | W   | 0.894      | -            | -                | -                | -         |     1.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           63 |     1616 | 2024-08-15 | LAG              | W   | 0.881      | -            | -                | -                | -         |     3.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           62 |     1618 | 2024-08-15 | InControl        | W   | 0.881      | -            | -                | -                | -         |     4.09 | autimatic, Brehze, HexT, nitr0, oSee |
|           61 |     1726 | 2024-08-12 | Akimbo           | W   | 0.861      | -            | -                | -                | -         |     1.83 | autimatic, Brehze, HexT, nitr0, oSee |
|           60 |     1914 | 2024-08-06 | Revenge Nation   | W   | 0.822      | -            | -                | -                | -         |     2.53 | autimatic, Brehze, HexT, nitr0, oSee |
|           59 |     1919 | 2024-08-06 | Revenge Nation   | W   | 0.821      | -            | -                | -                | -         |     2.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           58 |     1974 | 2024-08-04 | timbermen        | W   | 0.809      | -            | -                | -                | -         |    12.30 | autimatic, Brehze, HexT, nitr0, oSee |
|           57 |     1979 | 2024-08-04 | Wildcard         | W   | 0.807      | 0.303        | 0.080 (0.019)    | -                | -         |    15.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           56 |     2013 | 2024-08-03 | BOSS             | W   | 0.801      | -            | -                | -                | -         |     6.59 | autimatic, Brehze, HexT, nitr0, oSee |
|           55 |     2120 | 2024-07-31 | BOSS             | W   | 0.782      | -            | -                | -                | -         |     6.80 | autimatic, Brehze, HexT, nitr0, oSee |
|           54 |     2124 | 2024-07-31 | BOSS             | W   | 0.781      | -            | -                | -                | -         |     7.19 | autimatic, Brehze, HexT, nitr0, oSee |
|           53 |     2168 | 2024-07-30 | Party Astronauts | L   | 0.775      | -            | -                | -                | -         |   -13.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           52 |     2173 | 2024-07-30 | Party Astronauts | L   | 0.775      | -            | -                | -                | -         |   -14.05 | autimatic, Brehze, HexT, nitr0, oSee |
|           51 |     2461 | 2024-07-21 | Wildcard         | L   | 0.715      | -            | -                | -                | -         |   -10.11 | autimatic, Brehze, HexT, nitr0, oSee |
|           50 |     2465 | 2024-07-21 | Nouns            | W   | 0.714      | 0.303        | 0.059 (0.013)    | -                | -         |    13.81 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     2491 | 2024-07-20 | BOSS             | W   | 0.708      | -            | -                | -                | -         |     6.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     2559 | 2024-07-18 | E-Xolos LAZER    | W   | 0.695      | 0.477        | -                | 0.452 (0.150)    | -         |     6.34 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     2563 | 2024-07-18 | E-Xolos LAZER    | W   | 0.695      | -            | -                | -                | -         |     6.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     2625 | 2024-07-17 | Mythic           | W   | 0.688      | -            | -                | -                | -         |     5.02 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     2630 | 2024-07-17 | Mythic           | W   | 0.688      | -            | -                | -                | -         |     5.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     2687 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.682      | 0.477        | -                | 0.490 (0.159)    | -         |     5.01 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     2692 | 2024-07-16 | FLUFFY AIMERS    | W   | 0.682      | 0.477        | -                | 0.490 (0.159)    | -         |     5.23 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     2742 | 2024-07-15 | Limitless        | W   | 0.675      | -            | -                | -                | -         |     6.71 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     2745 | 2024-07-15 | Limitless        | W   | 0.675      | -            | -                | -                | -         |     7.06 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     3203 | 2024-06-09 | M80              | W   | 0.433      | 0.143        | 0.216 (0.013)    | -                | -         |    12.23 | autimatic, Brehze, HexT, oSee, Walco |
|           39 |     3265 | 2024-06-08 | Party Astronauts | W   | 0.427      | -            | -                | -                | -         |     6.82 | autimatic, Brehze, HexT, oSee, Walco |
|           38 |     3321 | 2024-06-07 | Party Astronauts | L   | 0.420      | -            | -                | -                | -         |    -6.72 | autimatic, Brehze, HexT, oSee, Walco |
|           37 |     3364 | 2024-06-06 | Party Astronauts | L   | 0.415      | -            | -                | -                | -         |    -7.08 | autimatic, Brehze, HexT, oSee, Walco |
|           36 |     3376 | 2024-06-06 | Wildcard         | W   | 0.414      | -            | -                | -                | -         |     8.18 | autimatic, Brehze, HexT, oSee, Walco |
|           35 |     3378 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.413      | -            | -                | -                | -         |     3.76 | autimatic, Brehze, HexT, oSee, Walco |
|           34 |     3399 | 2024-06-06 | Wildcard         | L   | 0.413      | -            | -                | -                | -         |    -4.82 | autimatic, Brehze, HexT, oSee, Walco |
|           33 |     3432 | 2024-06-05 | LAG              | W   | 0.409      | -            | -                | -                | -         |     2.81 | autimatic, Brehze, HexT, oSee, Walco |
|           32 |     3444 | 2024-06-05 | FLUFFY AIMERS    | W   | 0.407      | -            | -                | -                | -         |     3.79 | autimatic, Brehze, HexT, oSee, Walco |
|           31 |     3482 | 2024-06-04 | Nouns            | L   | 0.402      | -            | -                | -                | -         |    -3.37 | autimatic, Brehze, HexT, oSee, Walco |
|           30 |     3777 | 2024-05-23 | Nouns            | L   | 0.322      | -            | -                | -                | -         |    -2.75 | autimatic, Brehze, HexT, oSee, Walco |
|           29 |     3794 | 2024-05-22 | timbermen        | L   | 0.315      | -            | -                | -                | -         |    -3.08 | autimatic, Brehze, HexT, oSee, Walco |
|           28 |     3799 | 2024-05-22 | timbermen        | L   | 0.315      | -            | -                | -                | -         |    -3.15 | autimatic, Brehze, HexT, oSee, Walco |
|           27 |     3822 | 2024-05-22 | Legacy           | W   | 0.313      | -            | -                | -                | -         |     5.09 | autimatic, Brehze, HexT, oSee, Walco |
|           26 |     3845 | 2024-05-21 | Phoenix          | L   | 0.308      | -            | -                | -                | -         |    -7.56 | autimatic, Brehze, HexT, oSee, Walco |
|           25 |     3847 | 2024-05-21 | Phoenix          | W   | 0.308      | -            | -                | -                | -         |     2.16 | autimatic, Brehze, HexT, oSee, Walco |
|           24 |     3878 | 2024-05-20 | M80              | L   | 0.302      | -            | -                | -                | -         |    -1.00 | autimatic, Brehze, HexT, oSee, Walco |
|           23 |     3883 | 2024-05-20 | M80              | L   | 0.302      | -            | -                | -                | -         |    -1.01 | autimatic, Brehze, HexT, oSee, Walco |
|           22 |     3941 | 2024-05-18 | Nouns            | L   | 0.289      | -            | -                | -                | -         |    -2.67 | autimatic, Brehze, HexT, oSee, Walco |
|           21 |     3946 | 2024-05-18 | Party Astronauts | W   | 0.287      | -            | -                | -                | -         |     2.62 | autimatic, Brehze, HexT, oSee, Walco |
|           20 |     3980 | 2024-05-17 | BOSS             | W   | 0.281      | -            | -                | -                | -         |     2.79 | autimatic, Brehze, HexT, oSee, Walco |
|           19 |     4048 | 2024-05-15 | LAG              | W   | 0.268      | -            | -                | -                | -         |     1.63 | autimatic, Brehze, HexT, oSee, Walco |
|           18 |     4056 | 2024-05-15 | LAG              | W   | 0.268      | -            | -                | -                | -         |     1.65 | autimatic, Brehze, HexT, oSee, Walco |
|           17 |     4101 | 2024-05-14 | Take Flyte       | W   | 0.262      | -            | -                | -                | -         |     2.96 | autimatic, Brehze, HexT, oSee, Walco |
|           16 |     4107 | 2024-05-14 | Take Flyte       | W   | 0.261      | -            | -                | -                | -         |     3.02 | autimatic, Brehze, HexT, oSee, Walco |
|           15 |     4171 | 2024-05-12 | Phoenix          | W   | 0.248      | -            | -                | -                | -         |     1.84 | autimatic, Brehze, HexT, oSee, Walco |
|           14 |     4173 | 2024-05-12 | Elevate          | W   | 0.247      | -            | -                | -                | -         |     0.95 | autimatic, Brehze, HexT, oSee, Walco |
|           13 |     4203 | 2024-05-11 | Phoenix          | W   | 0.240      | -            | -                | -                | -         |     1.75 | autimatic, Brehze, HexT, oSee, Walco |
|           12 |     4205 | 2024-05-11 | BOSS             | W   | 0.240      | -            | -                | -                | -         |     2.58 | autimatic, Brehze, HexT, oSee, Walco |
|           11 |     4307 | 2024-05-06 | Party Astronauts | W   | 0.208      | -            | -                | -                | -         |     1.95 | autimatic, Brehze, HexT, oSee, Walco |
|           10 |     4308 | 2024-05-06 | Party Astronauts | L   | 0.208      | -            | -                | -                | -         |    -4.67 | autimatic, Brehze, HexT, oSee, Walco |
|            9 |     4543 | 2024-04-25 | Wildcard         | L   | 0.135      | -            | -                | -                | -         |    -1.62 | autimatic, Brehze, HexT, oSee, Walco |
|            8 |     4545 | 2024-04-25 | Wildcard         | W   | 0.135      | -            | -                | -                | -         |     2.65 | autimatic, Brehze, HexT, oSee, Walco |
|            7 |     4781 | 2024-04-17 | Akimbo           | L   | 0.081      | -            | -                | -                | -         |    -1.59 | autimatic, Brehze, HexT, oSee, Walco |
|            6 |     4840 | 2024-04-15 | Mythic           | W   | 0.068      | -            | -                | -                | -         |     0.66 | autimatic, Brehze, HexT, oSee, Walco |
|            5 |     4841 | 2024-04-15 | Mythic           | W   | 0.068      | -            | -                | -                | -         |     0.66 | autimatic, Brehze, HexT, oSee, Walco |
|            4 |     4927 | 2024-04-10 | BOSS             | W   | 0.035      | -            | -                | -                | -         |     0.38 | autimatic, Brehze, HexT, oSee, Walco |
|            3 |     4932 | 2024-04-10 | BOSS             | L   | 0.035      | -            | -                | -                | -         |    -0.72 | autimatic, Brehze, HexT, oSee, Walco |
|            2 |     4986 | 2024-04-09 | Carpe Diem       | W   | 0.028      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, oSee, Walco |
|            1 |     4989 | 2024-04-09 | Carpe Diem       | W   | 0.028      | -            | -                | -                | -         |     0.21 | autimatic, Brehze, HexT, oSee, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,263.52)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-08-18 |      0.902 | $750.00        | $676.67         |
| 2024-08-04 |      0.809 | $4,000.00      | $3,237.38       |
| 2024-07-21 |      0.715 | $1,000.00      | $715.37         |
| 2024-06-09 |      0.435 | $4,250.00      | $1,849.54       |
| 2024-05-18 |      0.289 | $1,000.00      | $288.57         |
| 2024-05-12 |      0.248 | $2,000.00      | $495.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
