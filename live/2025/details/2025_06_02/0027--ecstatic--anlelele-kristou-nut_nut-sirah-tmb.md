### Roster Details<br />
Team Name: ECSTATIC<br />
Roster: Anlelele, Kristou, nut nut, sirah, TMB<br />
Global Rank: [27](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [18]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1187.0<br />
<br />
Final Rank Value (1187.0) = Starting Rank Value (1213.4) + Head To Head Adjustments (-26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.560[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.351[<sup>2</sup>](#table1)
- LAN Wins: 0.419[<sup>2</sup>](#table1)

The average of these factors is 0.443<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1213.4
- 400 + ( ( 0.443 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 1213.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |       74 | 2025-05-24 | Alliance           | W   | 1.000      | 0.500        | 0.056 (0.028)    | -                | 1 (1.000) |     5.61 | Anlelele, Kristou, nut nut, sirah, TMB |
|           81 |       94 | 2025-05-23 | Alliance           | W   | 1.000      | 0.500        | 0.056 (0.028)    | -                | 1 (1.000) |     5.39 | Anlelele, Kristou, nut nut, sirah, TMB |
|           80 |      150 | 2025-05-20 | Johnny Speeds      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.48 | Anlelele, Kristou, nut nut, sirah, TMB |
|           79 |      160 | 2025-05-20 | Nordix             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.46 | Anlelele, Kristou, nut nut, sirah, TMB |
|           78 |      201 | 2025-05-17 | Nemiga             | L   | 1.000      | -            | -                | -                | -         |   -20.39 | Anlelele, Kristou, nut nut, sirah, TMB |
|           77 |      247 | 2025-05-15 | BetBoom            | W   | 1.000      | 0.435        | 0.127 (0.055)    | 0.747 (0.325)    | 0 (0.000) |    12.57 | Anlelele, Kristou, nut nut, sirah, TMB |
|           76 |      305 | 2025-05-13 | Astrum             | W   | 1.000      | 0.435        | -                | 0.890 (0.387)    | 0 (0.000) |     9.55 | Anlelele, Kristou, nut nut, sirah, TMB |
|           75 |      354 | 2025-05-11 | ENCE               | W   | 1.000      | 0.354        | 0.197 (0.070)    | -                | 0 (0.000) |    15.55 | Anlelele, Kristou, nut nut, sirah, TMB |
|           74 |      360 | 2025-05-11 | TNL                | L   | 1.000      | -            | -                | -                | -         |   -17.93 | Anlelele, Kristou, nut nut, sirah, TMB |
|           73 |      379 | 2025-05-10 | BetBoom            | W   | 1.000      | 0.354        | 0.127 (0.045)    | -                | 0 (0.000) |    14.03 | Anlelele, Kristou, nut nut, sirah, TMB |
|           72 |      409 | 2025-05-09 | Monte              | W   | 1.000      | 0.435        | -                | 0.849 (0.369)    | 0 (0.000) |     6.19 | Anlelele, Kristou, nut nut, sirah, TMB |
|           71 |      454 | 2025-05-07 | Fire Flux          | W   | 1.000      | 0.435        | -                | 0.758 (0.329)    | 0 (0.000) |     4.43 | Anlelele, Kristou, nut nut, sirah, TMB |
|           70 |      462 | 2025-05-07 | NAVI Junior        | L   | 1.000      | -            | -                | -                | -         |   -15.19 | Anlelele, Kristou, nut nut, sirah, TMB |
|           69 |      471 | 2025-05-07 | ENCE               | W   | 1.000      | 0.384        | 0.197 (0.076)    | 0.870 (0.335)    | -         |    15.53 | Anlelele, Kristou, nut nut, sirah, TMB |
|           68 |      491 | 2025-05-06 | 500                | W   | 1.000      | -            | -                | -                | -         |     9.36 | Anlelele, Kristou, nut nut, sirah, TMB |
|           67 |      540 | 2025-05-04 | Partizan           | W   | 1.000      | 0.354        | 0.094 (0.033)    | -                | -         |     8.03 | Anlelele, Kristou, nut nut, sirah, TMB |
|           66 |      545 | 2025-05-04 | 9INE               | W   | 1.000      | 0.384        | -                | 0.961 (0.369)    | -         |    11.01 | Anlelele, Kristou, nut nut, sirah, TMB |
|           65 |      631 | 2025-04-30 | TNL                | L   | 0.984      | -            | -                | -                | -         |   -16.84 | Anlelele, Kristou, nut nut, sirah, TMB |
|           64 |      658 | 2025-04-29 | ECLOT              | W   | 0.977      | 0.384        | 0.130 (0.049)    | -                | -         |     9.01 | Anlelele, Kristou, nut nut, sirah, TMB |
|           63 |      666 | 2025-04-29 | RUSH B             | W   | 0.976      | 0.384        | -                | 1.000 (0.375)    | -         |     7.67 | Anlelele, Kristou, nut nut, sirah, TMB |
|           62 |      670 | 2025-04-28 | GUN5               | W   | 0.971      | -            | -                | -                | -         |     9.43 | Anlelele, Kristou, nut nut, sirah, TMB |
|           61 |      724 | 2025-04-26 | ECLOT              | W   | 0.958      | 0.435        | 0.130 (0.054)    | 0.775 (0.322)    | -         |     9.53 | Anlelele, Kristou, nut nut, sirah, TMB |
|           60 |      818 | 2025-04-20 | Sangal             | W   | 0.918      | -            | -                | -                | -         |     2.96 | Anlelele, Kristou, nut nut, sirah, TMB |
|           59 |      843 | 2025-04-18 | Iberian Soul       | L   | 0.905      | -            | -                | -                | -         |   -18.26 | Anlelele, Kristou, nut nut, sirah, TMB |
|           58 |      957 | 2025-04-14 | Monte              | W   | 0.878      | 0.435        | -                | 0.849 (0.324)    | -         |     6.42 | Anlelele, Kristou, nut nut, sirah, TMB |
|           57 |     1017 | 2025-04-11 | Sashi              | W   | 0.857      | 0.435        | -                | 1.000 (0.372)    | -         |     6.10 | Anlelele, Kristou, nut nut, sirah, TMB |
|           56 |     1385 | 2025-03-30 | Sashi              | W   | 0.778      | -            | -                | -                | -         |     6.50 | Anlelele, Kristou, nut nut, sirah, TMB |
|           55 |     1391 | 2025-03-30 | Metizport          | L   | 0.777      | -            | -                | -                | -         |   -16.57 | Anlelele, Kristou, nut nut, sirah, TMB |
|           54 |     1426 | 2025-03-29 | RUSH B             | W   | 0.772      | -            | -                | -                | -         |     5.73 | Anlelele, Kristou, nut nut, sirah, TMB |
|           53 |     1511 | 2025-03-28 | ENCE               | L   | 0.764      | -            | -                | -                | -         |   -12.20 | Anlelele, Kristou, nut nut, sirah, TMB |
|           52 |     1572 | 2025-03-27 | GUN5               | L   | 0.758      | -            | -                | -                | -         |   -16.08 | Anlelele, Kristou, nut nut, sirah, TMB |
|           51 |     1676 | 2025-03-25 | Imperial Valkyries | W   | 0.744      | -            | -                | -                | -         |     4.47 | Anlelele, Kristou, nut nut, sirah, TMB |
|           50 |     1724 | 2025-03-23 | Zero Tenacity      | W   | 0.730      | -            | -                | -                | -         |     4.95 | Anlelele, Kristou, nut nut, sirah, TMB |
|           49 |     1736 | 2025-03-22 | BC.Game            | W   | 0.725      | -            | -                | -                | -         |     8.45 | Anlelele, Kristou, nut nut, sirah, TMB |
|           48 |     1794 | 2025-03-20 | Sashi              | L   | 0.709      | -            | -                | -                | -         |   -17.04 | Anlelele, Kristou, nut nut, sirah, TMB |
|           47 |     1847 | 2025-03-19 | Betclic            | W   | 0.703      | -            | -                | -                | -         |     9.74 | Anlelele, Kristou, nut nut, sirah, TMB |
|           46 |     1892 | 2025-03-17 | Roler Coaster      | W   | 0.693      | -            | -                | -                | -         |     1.17 | Anlelele, Kristou, nut nut, sirah, TMB |
|           45 |     1894 | 2025-03-17 | Astrum             | W   | 0.693      | -            | -                | -                | -         |     5.88 | Anlelele, Kristou, nut nut, sirah, TMB |
|           44 |     1900 | 2025-03-17 | Betera             | W   | 0.691      | -            | -                | -                | -         |     3.68 | Anlelele, Kristou, nut nut, sirah, TMB |
|           43 |     1908 | 2025-03-17 | Preasy             | W   | 0.691      | -            | -                | -                | -         |     1.71 | Anlelele, Kristou, nut nut, sirah, TMB |
|           42 |     1920 | 2025-03-16 | Chimera            | W   | 0.684      | -            | -                | -                | -         |     1.73 | Anlelele, Kristou, nut nut, sirah, TMB |
|           41 |     1942 | 2025-03-15 | Rhyno              | W   | 0.677      | -            | -                | -                | -         |     2.68 | Anlelele, Kristou, nut nut, sirah, TMB |
|           40 |     1987 | 2025-03-13 | ENCE               | L   | 0.663      | -            | -                | -                | -         |   -10.38 | Anlelele, Kristou, nut nut, sirah, TMB |
|           39 |     1999 | 2025-03-12 | Fire Flux          | L   | 0.658      | -            | -                | -                | -         |   -16.00 | Anlelele, Kristou, nut nut, sirah, TMB |
|           38 |     2180 | 2025-03-08 | NAVI Junior        | W   | 0.631      | 0.435        | 0.442 (0.121)    | -                | -         |     9.81 | Anlelele, Kristou, nut nut, sirah, TMB |
|           37 |     2189 | 2025-03-08 | Monte              | L   | 0.630      | -            | -                | -                | -         |   -15.30 | Anlelele, Kristou, nut nut, sirah, TMB |
|           36 |     2312 | 2025-03-06 | SINNERS            | W   | 0.617      | -            | -                | -                | -         |     6.29 | Anlelele, Kristou, nut nut, sirah, TMB |
|           35 |     2375 | 2025-03-04 | GUN5               | W   | 0.603      | -            | -                | -                | -         |     6.23 | Anlelele, Kristou, nut nut, sirah, TMB |
|           34 |     2448 | 2025-03-01 | Tricked            | W   | 0.583      | -            | -                | -                | -         |     6.46 | Anlelele, Kristou, nut nut, sirah, TMB |
|           33 |     2474 | 2025-02-27 | FAVBET             | W   | 0.572      | -            | -                | -                | -         |     3.88 | Anlelele, Kristou, nut nut, sirah, TMB |
|           32 |     2515 | 2025-02-26 | PERPLEXITY         | W   | 0.565      | -            | -                | -                | -         |     1.98 | Anlelele, Kristou, nut nut, sirah, TMB |
|           31 |     2701 | 2025-02-20 | Iberian Soul       | L   | 0.524      | -            | -                | -                | -         |   -12.38 | Anlelele, Kristou, nut nut, sirah, TMB |
|           30 |     2723 | 2025-02-19 | Alliance           | L   | 0.519      | -            | -                | -                | -         |   -11.49 | Anlelele, Kristou, nut nut, sirah, TMB |
|           29 |     2766 | 2025-02-18 | CYBERSHOKE         | L   | 0.510      | -            | -                | -                | -         |   -12.98 | Anlelele, Kristou, nut nut, sirah, TMB |
|           28 |     2809 | 2025-02-16 | SINNERS            | W   | 0.498      | -            | -                | -                | -         |     5.36 | Anlelele, Kristou, nut nut, sirah, TMB |
|           27 |     2849 | 2025-02-15 | NAVI Junior        | L   | 0.490      | -            | -                | -                | -         |    -8.65 | Anlelele, Kristou, nut nut, sirah, TMB |
|           26 |     2914 | 2025-02-12 | Chimera            | W   | 0.472      | -            | -                | -                | -         |     0.94 | Anlelele, Kristou, nut nut, sirah, TMB |
|           25 |     2985 | 2025-02-10 | fnatic             | L   | 0.456      | -            | -                | -                | -         |    -8.14 | Anlelele, Kristou, nut nut, sirah, TMB |
|           24 |     3174 | 2025-02-05 | NAVI Junior        | L   | 0.423      | -            | -                | -                | -         |    -7.21 | Anlelele, Kristou, nut nut, sirah, TMB |
|           23 |     3199 | 2025-02-03 | Portuguese Family  | L   | 0.412      | -            | -                | -                | -         |   -12.01 | Anlelele, Kristou, nut nut, sirah, TMB |
|           22 |     3208 | 2025-02-02 | Spirit Academy     | L   | 0.405      | -            | -                | -                | -         |    -6.31 | Anlelele, Kristou, nut nut, sirah, TMB |
|           21 |     3254 | 2025-01-29 | AMKAL              | W   | 0.376      | -            | -                | -                | -         |     0.73 | Anlelele, Kristou, nut nut, sirah, TMB |
|           20 |     3289 | 2025-01-28 | kONO               | W   | 0.369      | -            | -                | -                | -         |     0.32 | Anlelele, Kristou, nut nut, sirah, TMB |
|           19 |     3333 | 2025-01-25 | Iberian Soul       | W   | 0.350      | -            | -                | -                | -         |     2.29 | Anlelele, Kristou, nut nut, sirah, TMB |
|           18 |     3375 | 2025-01-24 | CPH Wolves         | L   | 0.343      | -            | -                | -                | -         |   -10.02 | Anlelele, Kristou, nut nut, sirah, TMB |
|           17 |     3516 | 2025-01-09 | GenOne             | L   | 0.243      | -            | -                | -                | -         |    -7.33 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           16 |     3519 | 2025-01-08 | CS2News            | W   | 0.237      | -            | -                | -                | -         |     0.13 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           15 |     3522 | 2025-01-07 | GenOne             | L   | 0.231      | -            | -                | -                | -         |    -6.99 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           14 |     3527 | 2025-01-05 | kONO               | L   | 0.218      | -            | -                | -                | -         |    -6.73 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           13 |     3539 | 2025-01-03 | BadGuys            | W   | 0.203      | -            | -                | -                | -         |     0.10 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           12 |     3555 | 2024-12-27 | Insilio            | W   | 0.158      | -            | -                | -                | -         |     0.09 | Cabbi, Kristou, n1Xen, nut nut, TMB    |
|           11 |     3660 | 2024-12-15 | Spirit Academy     | L   | 0.078      | -            | -                | -                | -         |    -1.31 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|           10 |     3669 | 2024-12-15 | 9INE               | W   | 0.077      | -            | -                | -                | -         |     0.68 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            9 |     3685 | 2024-12-14 | ECLOT              | L   | 0.072      | -            | -                | -                | -         |    -1.55 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            8 |     3694 | 2024-12-14 | Zero Tenacity      | W   | 0.070      | -            | -                | -                | -         |     0.35 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            7 |     3709 | 2024-12-13 | SINNERS            | W   | 0.065      | -            | -                | -                | -         |     0.63 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            6 |     3730 | 2024-12-12 | ECLOT              | L   | 0.058      | -            | -                | -                | -         |    -1.25 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            5 |     3736 | 2024-12-12 | B8                 | W   | 0.056      | -            | -                | -                | -         |     0.86 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            4 |     3746 | 2024-12-11 | Fire Flux          | W   | 0.051      | -            | -                | -                | -         |     0.19 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            3 |     3769 | 2024-12-09 | FLuffy Gangsters   | W   | 0.036      | -            | -                | -                | -         |     0.02 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            2 |     3810 | 2024-12-07 | Chimera            | L   | 0.025      | -            | -                | -                | -         |    -0.76 | Anlelele, Kristou, n1Xen, nut nut, TMB |
|            1 |     3836 | 2024-12-06 | AMKAL              | L   | 0.019      | -            | -                | -                | -         |    -0.57 | Anlelele, Kristou, n1Xen, nut nut, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($72,701.26)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-24 |      1.000 | $50,000.00     | $50,000.00      |
| 2025-05-18 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-05-11 |      1.000 | $9,000.00      | $9,000.00       |
| 2025-05-07 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-05-01 |      0.990 | $4,000.00      | $3,961.99       |
| 2025-03-31 |      0.784 | $2,500.00      | $1,959.16       |
| 2024-12-15 |      0.078 | $10,000.00     | $780.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
