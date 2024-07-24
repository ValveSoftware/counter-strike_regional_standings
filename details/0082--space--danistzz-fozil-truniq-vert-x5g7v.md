### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [82](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  924.3<br />
<br />
Final Rank Value (924.3) = Starting Rank Value (835.7) + Head To Head Adjustments (88.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.200[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.7
- 400 + ( ( 0.215 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 835.7


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
|           28 |       11 | 2024-07-24 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -19.01 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |      126 | 2024-07-20 | CPH Wolves      | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.388 (0.169)    | 0 (0.000) |    12.09 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           26 |      202 | 2024-07-18 | DMS             | W   | 1.000      | 0.435        | -                | 0.461 (0.200)    | 0 (0.000) |    14.82 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           25 |      392 | 2024-07-15 | Permitta        | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.790 (0.343)    | 0 (0.000) |    17.54 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |      681 | 2024-06-14 | BIG             | L   | 0.933      | -            | -                | -                | -         |    -2.66 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |      765 | 2024-06-11 | Rare Atom       | W   | 0.913      | -            | -                | -                | 0 (0.000) |     6.62 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      786 | 2024-06-10 | Passion UA      | L   | 0.906      | -            | -                | -                | -         |    -8.38 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |      887 | 2024-06-08 | Permitta        | L   | 0.894      | -            | -                | -                | -         |   -12.84 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |     1015 | 2024-06-06 | VP.Prodigy      | W   | 0.880      | 0.435        | 0.033 (0.012)    | 0.462 (0.176)    | 0 (0.000) |    14.89 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |     1154 | 2024-06-03 | EYEBALLERS      | W   | 0.860      | 0.435        | 0.007 (0.003)    | 0.571 (0.214)    | 0 (0.000) |    12.45 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     1367 | 2024-05-25 | 9 Pandas        | L   | 0.800      | -            | -                | -                | -         |    -6.70 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     1410 | 2024-05-23 | Metizport       | W   | 0.785      | 0.435        | 0.051 (0.017)    | 0.460 (0.157)    | 0 (0.000) |    16.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     1482 | 2024-05-21 | System5         | W   | 0.774      | -            | -                | -                | 0 (0.000) |     6.43 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     1545 | 2024-05-19 | DMS             | W   | 0.760      | -            | -                | -                | 0 (0.000) |    12.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     1593 | 2024-05-18 | Verdant         | W   | 0.751      | 0.435        | 0.019 (0.006)    | -                | 0 (0.000) |    14.40 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1625 | 2024-05-17 | 777             | L   | 0.744      | -            | -                | -                | -         |   -15.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     1643 | 2024-05-16 | GUN5            | L   | 0.740      | -            | -                | -                | -         |    -9.07 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     1699 | 2024-05-15 | Rounds          | W   | 0.733      | -            | -                | -                | -         |     1.54 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     1711 | 2024-05-15 | Nexus           | W   | 0.731      | 0.435        | 0.018 (0.006)    | 0.480 (0.153)    | -         |     9.88 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     1748 | 2024-05-14 | EYEBALLERS      | W   | 0.727      | 0.500        | 0.007 (0.003)    | 0.571 (0.208)    | -         |    12.98 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     1790 | 2024-05-13 | MOUZ NXT        | L   | 0.718      | -            | -                | -                | -         |    -5.29 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     1842 | 2024-05-11 | Viperio         | W   | 0.705      | -            | -                | -                | -         |     4.85 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     2267 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.567      | 0.500        | 0.041 (0.012)    | 0.638 (0.181)    | -         |    12.22 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     2773 | 2024-04-04 | 3DMAX           | L   | 0.459      | -            | -                | -                | -         |    -1.44 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     2812 | 2024-04-03 | PARIVISION      | L   | 0.453      | -            | -                | -                | -         |    -3.40 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     2889 | 2024-03-29 | B8              | W   | 0.420      | 0.500        | 0.206 (0.043)    | 0.933 (0.196)    | -         |    10.92 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     2905 | 2024-03-28 | GUN5            | L   | 0.413      | -            | -                | -                | -         |    -4.63 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     3357 | 2024-03-07 | Apeks           | L   | 0.273      | -            | -                | -                | -         |    -2.80 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,062.98)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $500.00        | $450.19         |
| 2024-05-26 |      0.806 | $2,000.00      | $1,612.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
