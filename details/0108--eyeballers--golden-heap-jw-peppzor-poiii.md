### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: Golden, HEAP, JW, Peppzor, poiii<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [108](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  882.7<br />
<br />
Final Rank Value (882.7) = Starting Rank Value (938.9) + Head To Head Adjustments (-56.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.277[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.9
- 400 + ( ( 0.251 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 938.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |       66 | 2024-07-16 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -6.88 | Golden, HEAP, JW, Peppzor, poiii  |
|           58 |      109 | 2024-07-15 | DASH              | L   | 1.000      | -            | -                | -                | -         |   -28.09 | Golden, HEAP, JW, Peppzor, poiii  |
|           57 |      315 | 2024-06-16 | System5           | W   | 0.994      | -            | -                | -                | 0 (0.000) |     8.25 | flusha, Golden, HEAP, JW, Peppzor |
|           56 |      348 | 2024-06-15 | ARCRED            | L   | 0.987      | -            | -                | -                | -         |   -11.79 | flusha, Golden, HEAP, JW, Peppzor |
|           55 |      381 | 2024-06-14 | 9INE              | W   | 0.981      | -            | -                | -                | 0 (0.000) |     3.92 | flusha, Golden, HEAP, JW, Peppzor |
|           54 |      484 | 2024-06-11 | Zero Tenacity     | L   | 0.959      | -            | -                | -                | -         |    -7.84 | flusha, Golden, HEAP, JW, Peppzor |
|           53 |      497 | 2024-06-10 | 3DMAX             | L   | 0.954      | -            | -                | -                | -         |    -5.66 | flusha, Golden, HEAP, JW, Peppzor |
|           52 |      509 | 2024-06-10 | GUN5              | L   | 0.952      | -            | -                | -                | -         |   -10.37 | flusha, Golden, HEAP, JW, Peppzor |
|           51 |      545 | 2024-06-09 | CYBERSHOKE        | L   | 0.947      | -            | -                | -                | -         |   -18.49 | flusha, Golden, HEAP, JW, Peppzor |
|           50 |      570 | 2024-06-09 | Nexus             | W   | 0.945      | 0.450        | -                | 0.432 (0.184)    | 0 (0.000) |     7.70 | flusha, Golden, HEAP, JW, Peppzor |
|           49 |      612 | 2024-06-08 | Gaimin Gladiators | L   | 0.940      | -            | -                | -                | -         |    -9.78 | flusha, Golden, HEAP, JW, Peppzor |
|           48 |      629 | 2024-06-08 | VP.Prodigy        | W   | 0.939      | 0.435        | 0.039 (0.016)    | 0.498 (0.203)    | 0 (0.000) |    15.00 | flusha, Golden, HEAP, JW, Peppzor |
|           47 |      668 | 2024-06-07 | Zero Tenacity     | W   | 0.933      | 0.500        | 0.154 (0.072)    | 1.000 (0.467)    | 0 (0.000) |    21.73 | flusha, Golden, HEAP, JW, Peppzor |
|           46 |      682 | 2024-06-07 | Illuminar         | L   | 0.932      | -            | -                | -                | -         |   -17.52 | flusha, Golden, HEAP, JW, Peppzor |
|           45 |      741 | 2024-06-06 | 9INE              | W   | 0.926      | -            | -                | -                | 0 (0.000) |     9.60 | flusha, Golden, HEAP, JW, Peppzor |
|           44 |      793 | 2024-06-05 | SINNERS           | W   | 0.920      | 0.435        | 0.058 (0.023)    | 0.744 (0.297)    | 0 (0.000) |    18.92 | flusha, Golden, HEAP, JW, Peppzor |
|           43 |      811 | 2024-06-05 | Passion UA        | W   | 0.918      | 0.500        | 0.087 (0.040)    | 0.847 (0.389)    | 0 (0.000) |    20.71 | flusha, Golden, HEAP, JW, Peppzor |
|           42 |      866 | 2024-06-03 | Space             | L   | 0.907      | -            | -                | -                | -         |   -12.96 | flusha, Golden, HEAP, JW, Peppzor |
|           41 |     1196 | 2024-05-21 | PERA              | L   | 0.821      | -            | -                | -                | -         |    -9.51 | Golden, HEAP, JW, Peppzor, Sapec  |
|           40 |     1199 | 2024-05-21 | DMS               | L   | 0.820      | -            | -                | -                | -         |   -12.21 | Golden, HEAP, JW, Peppzor, Sapec  |
|           39 |     1238 | 2024-05-20 | B8                | L   | 0.813      | -            | -                | -                | -         |    -4.80 | Golden, HEAP, JW, Peppzor, Sapec  |
|           38 |     1322 | 2024-05-17 | ALTERNATE aTTaX   | W   | 0.794      | 0.435        | 0.050 (0.017)    | 0.644 (0.222)    | 0 (0.000) |    14.96 | Golden, HEAP, JW, Peppzor, Sapec  |
|           37 |     1371 | 2024-05-16 | MASONIC           | L   | 0.785      | -            | -                | -                | -         |   -15.79 | Golden, HEAP, JW, Peppzor, Sapec  |
|           36 |     1402 | 2024-05-15 | Permitta          | W   | 0.781      | 0.435        | -                | 0.794 (0.270)    | 0 (0.000) |    12.43 | Golden, HEAP, JW, Peppzor, Sapec  |
|           35 |     1415 | 2024-05-15 | 9INE              | W   | 0.779      | -            | -                | -                | -         |     2.44 | Golden, HEAP, JW, Peppzor, Sapec  |
|           34 |     1419 | 2024-05-15 | Rhyno             | L   | 0.779      | -            | -                | -                | -         |    -8.26 | Golden, HEAP, JW, Peppzor, Sapec  |
|           33 |     1460 | 2024-05-14 | Space             | L   | 0.775      | -            | -                | -                | -         |   -13.65 | Golden, HEAP, JW, Peppzor, Sapec  |
|           32 |     1494 | 2024-05-13 | Zero Tenacity     | L   | 0.767      | -            | -                | -                | -         |    -8.20 | Golden, HEAP, JW, Peppzor, Sapec  |
|           31 |     1567 | 2024-05-10 | Metizport         | L   | 0.747      | -            | -                | -                | -         |    -9.22 | Golden, HEAP, JW, Peppzor, Sapec  |
|           30 |     1696 | 2024-05-03 | Zero Tenacity     | W   | 0.701      | 0.435        | 0.154 (0.047)    | 1.000 (0.305)    | -         |    14.54 | Golden, HEAP, JW, Peppzor, Sapec  |
|           29 |     1729 | 2024-05-02 | RUSH B            | W   | 0.693      | -            | -                | -                | -         |     9.18 | Golden, HEAP, JW, Peppzor, Sapec  |
|           28 |     1750 | 2024-05-01 | BetBoom           | L   | 0.686      | -            | -                | -                | -         |    -0.68 | Golden, HEAP, JW, Peppzor, Sapec  |
|           27 |     1767 | 2024-04-30 | Enterprise        | W   | 0.681      | 0.435        | 0.055 (0.016)    | 0.635 (0.188)    | -         |    10.92 | Golden, HEAP, JW, Peppzor, Sapec  |
|           26 |     1775 | 2024-04-30 | HAVU              | L   | 0.679      | -            | -                | -                | -         |   -15.65 | Golden, HEAP, JW, Peppzor, Sapec  |
|           25 |     1789 | 2024-04-29 | ex-Guild Eagles   | W   | 0.674      | -            | -                | -                | -         |    10.24 | Golden, HEAP, JW, Peppzor, Sapec  |
|           24 |     1847 | 2024-04-27 | Illuminar         | W   | 0.659      | -            | -                | -                | -         |     2.55 | Golden, HEAP, JW, Peppzor, Sapec  |
|           23 |     1887 | 2024-04-25 | HAVU              | W   | 0.647      | -            | -                | -                | -         |     5.31 | Golden, HEAP, JW, Peppzor, Sapec  |
|           22 |     1894 | 2024-04-25 | Zero Tenacity     | W   | 0.646      | 0.384        | 0.154 (0.038)    | 1.000 (0.248)    | -         |    14.13 | Golden, HEAP, JW, Peppzor, Sapec  |
|           21 |     1924 | 2024-04-23 | Insilio           | L   | 0.634      | -            | -                | -                | -         |    -8.55 | Golden, HEAP, JW, Peppzor, Sapec  |
|           20 |     1944 | 2024-04-22 | MOUZ NXT          | L   | 0.626      | -            | -                | -                | -         |    -5.36 | Golden, HEAP, JW, Peppzor, Sapec  |
|           19 |     1983 | 2024-04-20 | PERA              | W   | 0.614      | 0.500        | 0.067 (0.021)    | -                | -         |    11.22 | Golden, HEAP, JW, Peppzor, Sapec  |
|           18 |     2080 | 2024-04-18 | DMS               | L   | 0.600      | -            | -                | -                | -         |    -9.82 | Golden, HEAP, JW, Peppzor, Sapec  |
|           17 |     2144 | 2024-04-17 | Endpoint          | L   | 0.592      | -            | -                | -                | -         |    -9.62 | Golden, HEAP, JW, Peppzor, Sapec  |
|           16 |     2306 | 2024-04-10 | Permitta          | L   | 0.545      | -            | -                | -                | -         |    -7.39 | Golden, HEAP, JW, Peppzor, Sapec  |
|           15 |     2407 | 2024-04-07 | Metizport         | L   | 0.527      | -            | -                | -                | -         |    -6.23 | Golden, HEAP, JW, Peppzor, Sapec  |
|           14 |     2411 | 2024-04-07 | Alliance          | W   | 0.526      | -            | -                | -                | -         |     7.95 | Golden, HEAP, JW, Peppzor, Sapec  |
|           13 |     2423 | 2024-04-06 | Onliners5         | W   | 0.520      | -            | -                | -                | -         |     0.78 | Golden, HEAP, JW, Peppzor, Sapec  |
|           12 |     2475 | 2024-04-04 | Sangal            | L   | 0.507      | -            | -                | -                | -         |    -4.14 | Golden, HEAP, JW, Peppzor, Sapec  |
|           11 |     2519 | 2024-04-03 | 9 Pandas          | L   | 0.501      | -            | -                | -                | -         |    -4.28 | Golden, HEAP, JW, Peppzor, Sapec  |
|           10 |     2529 | 2024-04-03 | BIG               | L   | 0.499      | -            | -                | -                | -         |    -1.27 | Golden, HEAP, JW, Peppzor, Sapec  |
|            9 |     2619 | 2024-03-28 | KOI               | W   | 0.460      | 0.500        | 0.091 (0.021)    | -                | -         |    11.62 | Golden, HEAP, JW, Peppzor, Sapec  |
|            8 |     2881 | 2024-03-14 | TSM               | L   | 0.368      | -            | -                | -                | -         |    -8.83 | flusha, HEAP, JW, Peppzor, Sapec  |
|            7 |     3000 | 2024-03-10 | Alliance          | L   | 0.340      | -            | -                | -                | -         |    -5.63 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            6 |     3023 | 2024-03-09 | Metizport         | W   | 0.333      | -            | -                | -                | -         |     5.88 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            5 |     3027 | 2024-03-09 | Onliners5         | W   | 0.333      | -            | -                | -                | -         |     0.48 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            4 |     3090 | 2024-03-06 | 9INE              | W   | 0.315      | -            | -                | -                | -         |     0.94 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            3 |     3784 | 2024-02-02 | Metizport         | L   | 0.095      | -            | -                | -                | -         |    -1.38 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            2 |     3789 | 2024-02-02 | Sashi             | W   | 0.094      | -            | -                | -                | -         |     2.28 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|            1 |     4110 | 2024-01-19 | Entropiq          | L   | 0.001      | -            | -                | -                | -         |    -0.03 | HEAP, JW, Peppzor, Sapec, SHiNE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,186.45)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $1,000.00      | $947.61         |
| 2024-04-07 |      0.527 | $2,350.00      | $1,238.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
