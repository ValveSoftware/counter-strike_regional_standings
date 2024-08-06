### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Global Rank: [75](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
<br />
Final Rank Value:  960.2<br />
<br />
Final Rank Value (960.2) = Starting Rank Value (919.5) + Head To Head Adjustments (40.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.416[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.5
- 400 + ( ( 0.253 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 919.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       15 | 2024-08-06 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.14 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           61 |      281 | 2024-07-30 | Rhyno             | W   | 1.000      | 0.143        | 0.071 (0.010)    | -                | 0 (0.000) |    17.96 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           60 |      509 | 2024-07-23 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.95 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           59 |      523 | 2024-07-22 | DASH              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.42 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           58 |      530 | 2024-07-22 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.85 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           57 |      554 | 2024-07-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -14.80 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           56 |      620 | 2024-07-19 | UNiTY             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.68 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           55 |      748 | 2024-07-17 | FORZE Reload      | L   | 1.000      | -            | -                | -                | -         |   -28.16 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           54 |      853 | 2024-07-15 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.16 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           53 |      890 | 2024-07-12 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.09 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           52 |      971 | 2024-07-08 | Revenant          | W   | 1.000      | 0.371        | 0.027 (0.010)    | -                | 0 (0.000) |    10.92 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           51 |     1067 | 2024-06-16 | 3DMAX             | L   | 0.858      | -            | -                | -                | -         |    -1.48 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           50 |     1154 | 2024-06-13 | PERA              | L   | 0.841      | -            | -                | -                | -         |   -12.15 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           49 |     1171 | 2024-06-13 | Illuminar         | W   | 0.839      | 0.450        | -                | 0.340 (0.128)    | 0 (0.000) |    11.46 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           48 |     1195 | 2024-06-12 | Sampi             | W   | 0.833      | 0.379        | -                | 1.000 (0.315)    | 0 (0.000) |    11.08 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           47 |     1238 | 2024-06-10 | SINNERS           | W   | 0.820      | 0.379        | 0.047 (0.014)    | 0.800 (0.248)    | -         |    16.54 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           46 |     1252 | 2024-06-10 | Gaimin Gladiators | W   | 0.818      | 0.450        | 0.037 (0.014)    | -                | -         |    15.11 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           45 |     1294 | 2024-06-09 | ECLOT             | L   | 0.812      | -            | -                | -                | -         |    -3.88 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           44 |     1338 | 2024-06-08 | Nexus             | W   | 0.807      | 0.450        | -                | 0.447 (0.162)    | -         |     7.97 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           43 |     1418 | 2024-06-07 | Entropiq          | W   | 0.799      | -            | -                | -                | -         |     1.44 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           42 |     1467 | 2024-06-06 | Illuminar         | L   | 0.793      | -            | -                | -                | -         |   -15.49 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |     1518 | 2024-06-05 | Verdant           | L   | 0.787      | -            | -                | -                | -         |   -13.30 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           40 |     1530 | 2024-06-05 | Serbia            | L   | 0.786      | -            | -                | -                | -         |   -16.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           39 |     1590 | 2024-06-04 | Johnny Speeds     | W   | 0.778      | 0.371        | 0.122 (0.035)    | 1.000 (0.288)    | -         |    21.04 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           38 |     1613 | 2024-06-03 | UNiTY             | W   | 0.771      | -            | -                | -                | -         |    13.88 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |     1656 | 2024-06-01 | ARCRED            | L   | 0.760      | -            | -                | -                | -         |   -11.67 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |     1670 | 2024-06-01 | Permitta          | W   | 0.758      | 0.371        | 0.039 (0.011)    | 0.919 (0.258)    | -         |    12.24 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |     1711 | 2024-05-30 | RUSTEC            | W   | 0.747      | -            | -                | -                | -         |     1.27 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |     1725 | 2024-05-30 | brazylijski luz   | L   | 0.744      | -            | -                | -                | -         |   -14.33 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     1735 | 2024-05-29 | FLuffy Gangsters  | W   | 0.741      | -            | -                | -                | -         |     2.80 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     1763 | 2024-05-28 | Sampi             | W   | 0.733      | 0.379        | -                | 1.000 (0.278)    | -         |    11.60 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           31 |     1844 | 2024-05-24 | Illuminar         | W   | 0.705      | -            | -                | -                | -         |     9.88 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           30 |     1891 | 2024-05-22 | Entropiq          | W   | 0.694      | -            | -                | -                | -         |     1.24 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     1979 | 2024-05-20 | ECSTATIC          | W   | 0.679      | -            | -                | -                | -         |     2.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           28 |     2308 | 2024-05-10 | BetBoom           | L   | 0.612      | -            | -                | -                | -         |    -1.22 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           27 |     2375 | 2024-05-07 | Permitta          | W   | 0.592      | 0.435        | 0.039 (0.010)    | 0.919 (0.236)    | -         |    10.63 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           26 |     2389 | 2024-05-06 | B8                | L   | 0.586      | -            | -                | -                | -         |    -5.37 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           25 |     2417 | 2024-05-04 | MOUZ NXT          | W   | 0.574      | 0.435        | 0.139 (0.035)    | 0.961 (0.240)    | -         |    12.74 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           24 |     2476 | 2024-05-01 | ENCE Academy      | W   | 0.554      | -            | -                | -                | -         |     5.24 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           23 |     2505 | 2024-04-30 | EYEBALLERS        | L   | 0.547      | -            | -                | -                | -         |    -8.41 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           22 |     2542 | 2024-04-29 | Nexus             | L   | 0.538      | -            | -                | -                | -         |    -9.75 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           21 |     2583 | 2024-04-27 | Permitta          | L   | 0.525      | -            | -                | -                | -         |    -6.54 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           20 |     2602 | 2024-04-26 | Insilio           | L   | 0.519      | -            | -                | -                | -         |    -7.72 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           19 |     2675 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.498      | -            | -                | -                | -         |    -7.18 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           18 |     2741 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.478      | -            | -                | -                | -         |    -6.59 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           17 |     2815 | 2024-04-18 | MOUZ NXT          | L   | 0.466      | -            | -                | -                | -         |    -4.83 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           16 |     2838 | 2024-04-18 | Nexus             | W   | 0.465      | -            | -                | -                | -         |     6.14 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           15 |     2863 | 2024-04-17 | ENCE              | L   | 0.459      | -            | -                | -                | -         |    -0.77 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           14 |     2995 | 2024-04-11 | Sashi             | L   | 0.418      | -            | -                | -                | -         |    -3.15 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           13 |     3039 | 2024-04-10 | AMKAL             | W   | 0.412      | 0.384        | 0.130 (0.020)    | -                | -         |     9.96 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           12 |     3168 | 2024-04-06 | Sampi             | L   | 0.385      | -            | -                | -                | -         |    -6.18 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           11 |     3259 | 2024-04-03 | Permitta          | W   | 0.366      | 0.384        | -                | 0.919 (0.129)    | -         |     6.90 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           10 |     3319 | 2024-04-01 | BLEED             | W   | 0.352      | 0.384        | 0.089 (0.012)    | -                | -         |     6.57 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            9 |     3756 | 2024-03-09 | kONO              | L   | 0.200      | -            | -                | -                | -         |    -4.03 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     3766 | 2024-03-09 | Sampi             | L   | 0.199      | -            | -                | -                | -         |    -3.40 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     3836 | 2024-03-06 | INGLORIOUS        | L   | 0.180      | -            | -                | -                | -         |    -5.10 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     3842 | 2024-03-06 | Permitta          | L   | 0.179      | -            | -                | -                | -         |    -2.34 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     3953 | 2024-03-02 | Sampi             | W   | 0.151      | -            | -                | -                | -         |     2.15 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     4266 | 2024-02-16 | SAW               | L   | 0.054      | -            | -                | -                | -         |    -0.35 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     4300 | 2024-02-15 | BetBoom           | L   | 0.045      | -            | -                | -                | -         |    -0.08 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     4327 | 2024-02-14 | Natus Vincere     | L   | 0.041      | -            | -                | -                | -         |    -0.00 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     4339 | 2024-02-14 | AMKAL             | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.96 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,565.95)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-25 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-06-17 |      0.866 | $5,000.00      | $4,329.06       |
| 2024-06-13 |      0.841 | $5,447.00      | $4,580.79       |
| 2024-06-06 |      0.792 | $3,000.00      | $2,376.02       |
| 2024-05-02 |      0.560 | $500.00        | $280.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
