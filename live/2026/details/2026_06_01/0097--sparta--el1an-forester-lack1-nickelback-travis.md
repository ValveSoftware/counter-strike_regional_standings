### Roster Details<br />
Team Name: SPARTA<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [97](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [64]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1070.9<br />
<br />
Final Rank Value (1070.9) = Starting Rank Value (1212.2) + Head To Head Adjustments (-141.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.305[<sup>2</sup>](#table1)
- LAN Wins: 0.619[<sup>2</sup>](#table1)

The average of these factors is 0.426<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1212.2
- 400 + ( ( 0.426 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1212.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           83 |      225 | 2026-05-25 | Oxuji                | L   | 1.000      | -            | -                | -                | -         |   -13.13 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           82 |      229 | 2026-05-25 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |    -6.47 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           81 |      240 | 2026-05-25 | Athlon               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           80 |      258 | 2026-05-24 | Lazer Cats           | L   | 1.000      | -            | -                | -                | -         |   -23.52 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           79 |      372 | 2026-05-22 | Falcons Force        | W   | 1.000      | -            | -                | -                | -         |     7.17 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           78 |      446 | 2026-05-20 | GenOne               | L   | 1.000      | -            | -                | -                | -         |   -21.65 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           77 |      499 | 2026-05-18 | Just Players         | L   | 1.000      | -            | -                | -                | -         |   -24.50 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           76 |      551 | 2026-05-16 | Walczaki             | L   | 1.000      | -            | -                | -                | -         |    -9.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           75 |      579 | 2026-05-15 | AM                   | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.725 (0.315)    | -         |    16.98 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           74 |      607 | 2026-05-14 | Nemiga               | L   | 1.000      | -            | -                | -                | -         |    -7.66 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           73 |      633 | 2026-05-13 | TNC                  | W   | 1.000      | -            | -                | -                | -         |     3.80 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           72 |      680 | 2026-05-12 | Oxuji                | W   | 1.000      | 0.384        | -                | 0.790 (0.304)    | -         |    16.14 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           71 |      738 | 2026-05-10 | Lavked               | L   | 1.000      | -            | -                | -                | -         |   -18.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           70 |      798 | 2026-05-08 | BET-M                | L   | 1.000      | -            | -                | -                | -         |   -13.68 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           69 |      809 | 2026-05-08 | ex-RUBY              | L   | 1.000      | -            | -                | -                | -         |   -19.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           68 |      849 | 2026-05-05 | GenOne               | W   | 1.000      | 0.435        | -                | 0.916 (0.398)    | -         |     6.06 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           67 |      892 | 2026-05-03 | Nemesis              | L   | 1.000      | -            | -                | -                | -         |    -8.22 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           66 |      904 | 2026-05-03 | HEROIC Academy       | W   | 1.000      | -            | -                | -                | -         |     3.69 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           65 |      927 | 2026-05-02 | fnatic               | W   | 1.000      | 0.384        | -                | 0.656 (0.252)    | -         |    12.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           64 |      988 | 2026-05-01 | INOX Division        | L   | 0.994      | -            | -                | -                | -         |   -21.14 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           63 |      990 | 2026-05-01 | Nemesis              | L   | 0.994      | -            | -                | -                | -         |    -8.92 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           62 |     1074 | 2026-04-29 | Rebels               | W   | 0.981      | 0.384        | -                | 0.723 (0.272)    | -         |    11.33 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           61 |     1111 | 2026-04-28 | megoshort            | W   | 0.974      | -            | -                | -                | -         |     3.94 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           60 |     1161 | 2026-04-27 | GenOne               | W   | 0.967      | 0.384        | -                | 0.916 (0.341)    | -         |     5.37 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           59 |     1248 | 2026-04-26 | BIG                  | L   | 0.958      | -            | -                | -                | -         |    -5.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           58 |     1277 | 2026-04-25 | Lavked               | W   | 0.954      | 0.384        | 0.019 (0.007)    | 1.000 (0.367)    | -         |     8.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           57 |     1319 | 2026-04-25 | TDK                  | W   | 0.952      | 0.435        | 0.038 (0.016)    | 0.855 (0.354)    | -         |    18.23 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           56 |     1382 | 2026-04-23 | DONSTU               | W   | 0.941      | -            | -                | -                | -         |     3.46 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           55 |     2033 | 2026-04-02 | CYBERSHOKE Prospects | L   | 0.802      | -            | -                | -                | -         |   -18.05 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           54 |     2040 | 2026-04-02 | TDK                  | L   | 0.801      | -            | -                | -                | -         |   -11.12 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           53 |     2077 | 2026-04-02 | CYBERSHOKE Prospects | W   | 0.800      | -            | -                | -                | 1 (0.800) |     6.58 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           52 |     2637 | 2026-03-25 | WW                   | L   | 0.747      | -            | -                | -                | -         |   -11.92 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           51 |     3046 | 2026-03-18 | cirahvi              | L   | 0.699      | -            | -                | -                | -         |   -20.02 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           50 |     3111 | 2026-03-16 | aAa                  | L   | 0.688      | -            | -                | -                | -         |   -18.69 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           49 |     3607 | 2026-03-06 | WW                   | L   | 0.621      | -            | -                | -                | -         |   -12.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           48 |     3614 | 2026-03-06 | Virtus.pro           | W   | 0.620      | -            | -                | -                | 1 (0.620) |    10.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           47 |     3626 | 2026-03-06 | 1win                 | W   | 0.620      | 0.333        | 0.088 (0.018)    | -                | 1 (0.620) |    10.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           46 |     3637 | 2026-03-05 | TDK                  | W   | 0.617      | 0.333        | 0.038 (0.008)    | -                | 1 (0.617) |    10.19 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           45 |     3651 | 2026-03-05 | Virtus.pro           | L   | 0.615      | -            | -                | -                | -         |    -8.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           44 |     3749 | 2026-03-03 | Younglings           | W   | 0.602      | -            | -                | -                | 1 (0.602) |     0.24 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |     3770 | 2026-03-03 | Nuclear TigeRES      | L   | 0.600      | -            | -                | -                | -         |    -7.65 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |     3781 | 2026-03-03 | 5Actors              | W   | 0.599      | -            | -                | -                | 1 (0.599) |     0.27 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |     3829 | 2026-03-02 | HOTU                 | L   | 0.592      | -            | -                | -                | -         |    -5.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |     3912 | 2026-02-28 | MOUZ NXT             | W   | 0.579      | -            | -                | -                | -         |     5.90 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |     3935 | 2026-02-27 | TDK                  | W   | 0.574      | 0.435        | 0.038 (0.009)    | 0.855 (0.213)    | -         |     9.74 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |     3948 | 2026-02-27 | SINNERS              | W   | 0.573      | 0.435        | 0.119 (0.030)    | -                | -         |    13.51 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |     4008 | 2026-02-26 | BASEMENT BOYS        | W   | 0.567      | -            | -                | -                | -         |     7.96 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |     4019 | 2026-02-26 | Alliance             | W   | 0.566      | 0.435        | 0.100 (0.025)    | -                | -         |    13.83 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |     4106 | 2026-02-24 | Leo                  | L   | 0.553      | -            | -                | -                | -         |   -15.37 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |     4110 | 2026-02-24 | magic                | W   | 0.553      | 0.435        | 0.238 (0.057)    | -                | -         |    15.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |     4173 | 2026-02-23 | cirahvi              | W   | 0.544      | -            | -                | -                | -         |     1.93 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |     4187 | 2026-02-22 | TNC                  | W   | 0.541      | 0.435        | -                | 1.000 (0.235)    | -         |     5.63 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |     4347 | 2026-02-20 | ex-RUBY              | L   | 0.525      | -            | -                | -                | -         |   -11.87 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |     4365 | 2026-02-19 | Omega                | W   | 0.521      | -            | -                | -                | -         |     7.28 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |     4382 | 2026-02-19 | TNC                  | L   | 0.520      | -            | -                | -                | -         |   -11.40 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |     4425 | 2026-02-18 | HAVU                 | W   | 0.514      | -            | -                | -                | -         |     4.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |     4478 | 2026-02-17 | ex-Zero Tenacity     | W   | 0.508      | -            | -                | -                | -         |     0.94 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |     4499 | 2026-02-17 | Inner Circle         | W   | 0.507      | 0.435        | 0.054 (0.012)    | -                | -         |    11.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |     4544 | 2026-02-16 | Fuzos                | W   | 0.500      | -            | -                | -                | -         |     1.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |     4554 | 2026-02-16 | ARCRED               | L   | 0.498      | -            | -                | -                | -         |    -6.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |     4579 | 2026-02-15 | Lazer Cats           | W   | 0.494      | -            | -                | -                | -         |     2.36 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |     4589 | 2026-02-15 | Hashiras             | L   | 0.494      | -            | -                | -                | -         |   -14.00 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |     4611 | 2026-02-15 | MASONIC              | W   | 0.492      | -            | -                | -                | -         |     0.19 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |     4660 | 2026-02-14 | Oxuji                | L   | 0.486      | -            | -                | -                | -         |    -6.54 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |     4677 | 2026-02-14 | K27                  | L   | 0.486      | -            | -                | -                | -         |    -4.10 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |     4698 | 2026-02-13 | UNiTY                | L   | 0.481      | -            | -                | -                | -         |   -13.65 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |     4759 | 2026-02-12 | Leo                  | W   | 0.473      | -            | -                | -                | -         |     1.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |     4826 | 2026-02-10 | GenOne               | W   | 0.461      | -            | -                | -                | -         |     2.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |     4861 | 2026-02-09 | Phantom              | L   | 0.453      | -            | -                | -                | -         |    -8.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |     4909 | 2026-02-07 | Rebels               | W   | 0.440      | -            | -                | -                | -         |     6.99 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     4971 | 2026-02-05 | TNC                  | W   | 0.428      | -            | -                | -                | -         |     3.40 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     4992 | 2026-02-04 | Fuzos                | W   | 0.422      | -            | -                | -                | -         |     0.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     5033 | 2026-02-03 | Nuclear TigeRES      | L   | 0.412      | -            | -                | -                | -         |    -4.06 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     5057 | 2026-02-02 | RUSTEC               | W   | 0.407      | -            | -                | -                | 1 (0.407) |     1.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     5070 | 2026-02-02 | ARCRED               | L   | 0.405      | -            | -                | -                | -         |    -5.95 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     5110 | 2026-01-31 | Just Players         | W   | 0.395      | -            | -                | -                | 1 (0.395) |     1.47 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     5129 | 2026-01-31 | K27                  | L   | 0.393      | -            | -                | -                | -         |    -3.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     5138 | 2026-01-31 | Just Players         | W   | 0.392      | -            | -                | -                | 1 (0.392) |     1.43 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     5867 | 2025-12-21 | K27                  | L   | 0.120      | -            | -                | -                | -         |    -1.05 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            4 |     5876 | 2025-12-21 | Oxuji                | W   | 0.118      | -            | -                | -                | -         |     2.26 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            3 |     6045 | 2025-12-09 | K27                  | L   | 0.041      | -            | -                | -                | -         |    -0.35 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            2 |     6051 | 2025-12-09 | Rune Eaters          | W   | 0.039      | -            | -                | -                | -         |     0.28 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     6071 | 2025-12-08 | Nemiga               | W   | 0.033      | -            | -                | -                | -         |     0.67 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,992.47)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-15 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-05-03 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-04-27 |      0.967 | $2,000.00      | $1,933.52       |
| 2026-03-06 |      0.622 | $1,500.00      | $932.87         |
| 2026-02-27 |      0.574 | $22,000.00     | $12,637.58      |
| 2026-02-20 |      0.527 | $2,000.00      | $1,054.85       |
| 2025-12-21 |      0.120 | $9,887.00      | $1,183.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
