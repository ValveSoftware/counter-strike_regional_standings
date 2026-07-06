### Roster Details<br />
Team Name: UNiTY<br />
Roster: 2high, KWERTZZ, M1key, NEOFRAG, woozzzi<br />
Global Rank: [163](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  812.8<br />
<br />
Final Rank Value (812.8) = Starting Rank Value (753.6) + Head To Head Adjustments (59.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.6
- 400 + ( ( 0.188 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 753.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      628 | 2026-05-31 | ASTRAL               | L   | 0.960      | -            | -                | -                | -         |    -9.27 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           63 |      694 | 2026-05-30 | ENCE                 | L   | 0.952      | -            | -                | -                | -         |   -14.15 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           62 |      710 | 2026-05-29 | INOX Division        | W   | 0.947      | 0.384        | 0.024 (0.009)    | 1.000 (0.364)    | 0 (0.000) |    23.05 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           61 |      773 | 2026-05-28 | aAa                  | W   | 0.939      | 0.384        | -                | 0.285 (0.103)    | 0 (0.000) |    14.65 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           60 |      848 | 2026-05-26 | Atreides             | L   | 0.926      | -            | -                | -                | -         |   -14.24 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           59 |      944 | 2026-05-23 | BASEMENT BOYS        | L   | 0.908      | -            | -                | -                | -         |    -5.09 | 2high, juanflatroo, KWERTZZ, M1key, NEOFRAG |
|           58 |     1429 | 2026-05-09 | MOUZ NXT             | L   | 0.814      | -            | -                | -                | -         |    -8.54 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           57 |     1487 | 2026-05-07 | Bebop                | W   | 0.798      | 0.384        | -                | 0.704 (0.216)    | 0 (0.000) |    14.44 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           56 |     1494 | 2026-05-06 | Lavked               | L   | 0.794      | -            | -                | -                | -         |    -6.84 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           55 |     1508 | 2026-05-05 | Omega                | L   | 0.788      | -            | -                | -                | -         |    -7.95 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           54 |     1534 | 2026-05-04 | los kogutos          | L   | 0.779      | -            | -                | -                | -         |   -11.90 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           53 |     1595 | 2026-05-02 | PsychoFace           | W   | 0.767      | 0.384        | 0.028 (0.008)    | 1.000 (0.295)    | 0 (0.000) |    18.07 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           52 |     1662 | 2026-05-01 | los kogutos          | L   | 0.760      | -            | -                | -                | -         |   -11.26 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           51 |     1694 | 2026-04-30 | PsychoFace           | W   | 0.754      | 0.384        | 0.028 (0.008)    | 1.000 (0.290)    | 0 (0.000) |    18.50 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           50 |     1778 | 2026-04-28 | Young Ninjas         | L   | 0.741      | -            | -                | -                | -         |    -9.48 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           49 |     1826 | 2026-04-27 | MOUZ NXT             | W   | 0.734      | 0.363        | 0.009 (0.003)    | 0.511 (0.136)    | 0 (0.000) |    15.55 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           48 |     1870 | 2026-04-26 | FromPR               | W   | 0.728      | -            | -                | -                | 0 (0.000) |     3.44 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           47 |     1910 | 2026-04-26 | INOX Division        | L   | 0.725      | -            | -                | -                | -         |    -7.08 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           46 |     1966 | 2026-04-25 | FromPR               | W   | 0.720      | -            | -                | -                | 0 (0.000) |     3.15 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           45 |     2083 | 2026-04-22 | KOLESIE              | L   | 0.700      | -            | -                | -                | -         |    -4.17 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           44 |     2132 | 2026-04-19 | Clutchain            | W   | 0.680      | -            | -                | -                | 0 (0.000) |     3.85 | 2high, M1key, MoriiSko, NEOFRAG, woozzzi    |
|           43 |     2199 | 2026-04-15 | Alliance             | L   | 0.654      | -            | -                | -                | -         |    -0.70 | 2high, M1key, MoriiSko, NEOFRAG, woozzzi    |
|           42 |     2255 | 2026-04-12 | EYEBALLERS           | W   | 0.634      | 0.363        | 0.093 (0.022)    | -                | 0 (0.000) |    18.44 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           41 |     2298 | 2026-04-11 | Hashiras             | L   | 0.625      | -            | -                | -                | -         |   -10.76 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           40 |     2311 | 2026-04-10 | KOLESIE              | L   | 0.621      | -            | -                | -                | -         |    -3.89 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           39 |     2321 | 2026-04-10 | Famalicão            | W   | 0.619      | -            | -                | -                | -         |     7.17 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           38 |     2338 | 2026-04-09 | Hashiras             | L   | 0.614      | -            | -                | -                | -         |   -10.88 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           37 |     2340 | 2026-04-09 | ASTRAL               | L   | 0.614      | -            | -                | -                | -         |    -4.00 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           36 |     2429 | 2026-04-06 | Inner Circle Academy | W   | 0.594      | 0.384        | 0.010 (0.002)    | -                | -         |    10.27 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           35 |     2469 | 2026-04-05 | ex-MANA              | L   | 0.587      | -            | -                | -                | -         |    -8.19 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           34 |     2540 | 2026-04-04 | G2 Ares              | W   | 0.581      | 0.384        | 0.010 (0.002)    | 0.614 (0.137)    | -         |    13.09 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           33 |     2625 | 2026-04-03 | ENCE                 | L   | 0.574      | -            | -                | -                | -         |    -8.75 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           32 |     2814 | 2026-04-01 | Atreides             | W   | 0.561      | 0.384        | -                | 0.764 (0.165)    | -         |     8.20 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           31 |     3005 | 2026-03-30 | brazylijski luz      | W   | 0.546      | -            | -                | -                | -         |     7.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           30 |     3059 | 2026-03-29 | BASEMENT BOYS        | W   | 0.541      | 0.384        | 0.017 (0.003)    | 0.478 (0.099)    | -         |    14.68 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           29 |     3227 | 2026-03-27 | bond1e               | L   | 0.527      | -            | -                | -                | -         |   -13.31 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           28 |     3306 | 2026-03-25 | Qual4                | W   | 0.514      | -            | -                | -                | -         |     1.66 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           27 |     3424 | 2026-03-23 | Metizport            | L   | 0.501      | -            | -                | -                | -         |    -2.25 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           26 |     3447 | 2026-03-23 | Metizport            | L   | 0.499      | -            | -                | -                | -         |    -2.29 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           25 |     3533 | 2026-03-21 | Sangal               | L   | 0.488      | -            | -                | -                | -         |    -5.63 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           24 |     3589 | 2026-03-20 | G2 Ares              | W   | 0.482      | 0.384        | -                | 0.614 (0.114)    | -         |    11.27 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           23 |     4296 | 2026-03-06 | MOUZ NXT             | L   | 0.385      | -            | -                | -                | -         |    -3.64 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           22 |     4464 | 2026-03-02 | BET-M                | L   | 0.361      | -            | -                | -                | -         |    -1.66 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           21 |     4559 | 2026-02-28 | WW                   | W   | 0.347      | -            | -                | -                | -         |     8.78 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           20 |     4830 | 2026-02-23 | ENCE                 | W   | 0.312      | -            | -                | -                | -         |     4.83 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           19 |     5138 | 2026-02-17 | Alliance             | L   | 0.275      | -            | -                | -                | -         |    -0.25 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           18 |     5222 | 2026-02-15 | JiJieHao             | W   | 0.264      | 0.384        | 0.055 (0.006)    | -                | -         |     7.71 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           17 |     5276 | 2026-02-15 | ex-Zero Tenacity     | W   | 0.259      | -            | -                | -                | -         |     4.54 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           16 |     5294 | 2026-02-14 | Johnny Speeds        | L   | 0.255      | -            | -                | -                | -         |    -0.70 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           15 |     5359 | 2026-02-13 | SPARTA               | W   | 0.248      | 0.384        | 0.027 (0.003)    | -                | -         |     6.67 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           14 |     5734 | 2026-02-02 | Nuclear TigeRES      | L   | 0.172      | -            | -                | -                | -         |    -0.31 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           13 |     5858 | 2026-01-29 | 1win                 | L   | 0.146      | -            | -                | -                | -         |    -0.41 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           12 |     5882 | 2026-01-28 | Betclic              | W   | 0.139      | -            | -                | -                | -         |     4.08 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           11 |     5929 | 2026-01-25 | MOUZ NXT             | W   | 0.121      | -            | -                | -                | -         |     2.62 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           10 |     5949 | 2026-01-25 | japczany             | W   | 0.119      | -            | -                | -                | -         |     0.66 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            9 |     6021 | 2026-01-23 | Hashiras             | W   | 0.107      | -            | -                | -                | -         |     1.67 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            8 |     6031 | 2026-01-23 | DUNDU                | W   | 0.106      | -            | -                | -                | -         |     0.41 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            7 |     6080 | 2026-01-22 | GenOne               | L   | 0.099      | -            | -                | -                | -         |    -1.09 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            6 |     6143 | 2026-01-20 | Nuclear TigeRES      | L   | 0.085      | -            | -                | -                | -         |    -0.15 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            5 |     6151 | 2026-01-19 | ex-Fingers Crossed   | L   | 0.080      | -            | -                | -                | -         |    -1.95 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            4 |     6167 | 2026-01-18 | AM                   | L   | 0.075      | -            | -                | -                | -         |    -1.35 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            3 |     6208 | 2026-01-17 | Bebop                | W   | 0.068      | -            | -                | -                | -         |     0.47 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            2 |     6317 | 2026-01-15 | illwill              | W   | 0.055      | -            | -                | -                | -         |     1.20 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|            1 |     6351 | 2026-01-14 | Petardka             | W   | 0.047      | -            | -                | -                | -         |     0.27 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($460.83)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.614 | $750.00        | $460.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
