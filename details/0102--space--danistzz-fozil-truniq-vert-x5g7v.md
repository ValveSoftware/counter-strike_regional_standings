### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Global Rank: [102](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
<br />
Final Rank Value:  856.0<br />
<br />
Final Rank Value (856.0) = Starting Rank Value (821.2) + Head To Head Adjustments (34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.180[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.2
- 400 + ( ( 0.204 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 821.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        3 | 2024-07-31 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -4.76 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           32 |       50 | 2024-07-30 | PERA            | L   | 1.000      | -            | -                | -                | -         |   -11.64 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           31 |      136 | 2024-07-28 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -17.66 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           30 |      165 | 2024-07-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -15.77 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           29 |      184 | 2024-07-26 | Monte           | L   | 1.000      | -            | -                | -                | -         |    -9.29 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           28 |      253 | 2024-07-24 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -18.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |      368 | 2024-07-20 | CPH Wolves      | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.358 (0.156)    | 0 (0.000) |    12.48 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           26 |      444 | 2024-07-18 | DMS             | W   | 1.000      | 0.435        | -                | 0.447 (0.194)    | 0 (0.000) |    16.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           25 |      634 | 2024-07-15 | Permitta        | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.799 (0.347)    | 0 (0.000) |    17.88 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |      923 | 2024-06-14 | BIG             | L   | 0.885      | -            | -                | -                | -         |    -2.98 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |     1007 | 2024-06-11 | Rare Atom       | W   | 0.866      | 0.435        | -                | 0.397 (0.149)    | 0 (0.000) |     6.53 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |     1028 | 2024-06-10 | Passion UA      | L   | 0.859      | -            | -                | -                | -         |    -7.55 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |     1129 | 2024-06-08 | Permitta        | L   | 0.846      | -            | -                | -                | -         |   -11.97 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |     1257 | 2024-06-06 | VP.Prodigy      | W   | 0.833      | 0.435        | 0.026 (0.009)    | 0.406 (0.147)    | 0 (0.000) |    14.74 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |     1396 | 2024-06-03 | EYEBALLERS      | W   | 0.813      | 0.435        | 0.006 (0.002)    | 0.513 (0.181)    | 0 (0.000) |    12.36 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     1609 | 2024-05-25 | 9 Pandas        | L   | 0.753      | -            | -                | -                | -         |    -6.46 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     1652 | 2024-05-23 | Metizport       | W   | 0.737      | 0.435        | 0.039 (0.012)    | -                | 0 (0.000) |    15.04 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     1724 | 2024-05-21 | System5         | W   | 0.727      | -            | -                | -                | 0 (0.000) |     6.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     1787 | 2024-05-19 | DMS             | W   | 0.713      | 0.435        | -                | 0.447 (0.139)    | 0 (0.000) |    13.42 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     1835 | 2024-05-18 | Verdant         | W   | 0.703      | 0.435        | 0.015 (0.005)    | -                | 0 (0.000) |    13.67 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1867 | 2024-05-17 | 777             | L   | 0.697      | -            | -                | -                | -         |   -14.47 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     1885 | 2024-05-16 | GUN5            | L   | 0.693      | -            | -                | -                | -         |    -8.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     1941 | 2024-05-15 | Rounds          | W   | 0.686      | -            | -                | -                | -         |     1.55 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     1953 | 2024-05-15 | Nexus           | W   | 0.684      | 0.435        | 0.014 (0.004)    | -                | -         |     9.43 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     1990 | 2024-05-14 | EYEBALLERS      | W   | 0.680      | 0.500        | 0.006 (0.002)    | 0.513 (0.175)    | -         |    12.62 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     2032 | 2024-05-13 | MOUZ NXT        | L   | 0.670      | -            | -                | -                | -         |    -4.83 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     2084 | 2024-05-11 | Viperio         | W   | 0.658      | -            | -                | -                | -         |     4.75 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     2509 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.520      | 0.500        | 0.032 (0.008)    | 0.564 (0.147)    | -         |    11.30 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     3015 | 2024-04-04 | 3DMAX           | L   | 0.412      | -            | -                | -                | -         |    -0.11 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     3054 | 2024-04-03 | PARIVISION      | L   | 0.405      | -            | -                | -                | -         |    -2.30 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     3131 | 2024-03-29 | B8              | W   | 0.372      | 0.500        | 0.168 (0.031)    | 0.879 (0.164)    | -         |     9.82 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     3147 | 2024-03-28 | GUN5            | L   | 0.366      | -            | -                | -                | -         |    -4.05 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     3599 | 2024-03-07 | Apeks           | L   | 0.226      | -            | -                | -                | -         |    -2.52 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,944.76)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.853 | $500.00        | $426.55         |
| 2024-05-26 |      0.759 | $2,000.00      | $1,518.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
