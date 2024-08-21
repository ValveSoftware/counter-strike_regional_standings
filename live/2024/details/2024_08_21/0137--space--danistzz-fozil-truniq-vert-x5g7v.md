### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Global Rank: [137](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [94]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  755.2<br />
<br />
Final Rank Value (755.2) = Starting Rank Value (795.8) + Head To Head Adjustments (-40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.178[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.8
- 400 + ( ( 0.199 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 795.8


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
|           46 |      111 | 2024-08-19 | DMS             | L   | 1.000      | -            | -                | -                | -         |   -10.69 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           45 |      130 | 2024-08-18 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |   -18.65 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           44 |      194 | 2024-08-15 | EYEBALLERS      | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.550 (0.239)    | 0 (0.000) |    17.48 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           43 |      227 | 2024-08-14 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -13.64 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           42 |      272 | 2024-08-13 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -11.49 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           41 |      335 | 2024-08-11 | Project G       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.28 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           40 |      380 | 2024-08-09 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -14.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           39 |      409 | 2024-08-08 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -10.71 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           38 |      446 | 2024-08-07 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -1.26 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           37 |      497 | 2024-08-06 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |    -8.84 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           36 |      535 | 2024-08-05 | HAVU            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.89 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           35 |      627 | 2024-08-02 | B8              | L   | 1.000      | -            | -                | -                | -         |    -4.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           34 |      635 | 2024-08-02 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -11.64 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           33 |      711 | 2024-07-31 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -3.98 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           32 |      758 | 2024-07-30 | Qiang           | L   | 1.000      | -            | -                | -                | -         |   -11.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           31 |      844 | 2024-07-28 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -15.20 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           30 |      873 | 2024-07-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -14.47 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           29 |      892 | 2024-07-26 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -14.87 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           28 |      961 | 2024-07-24 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -18.13 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |     1076 | 2024-07-20 | CPH Wolves      | W   | 0.986      | 0.435        | 0.003 (0.001)    | 0.315 (0.135)    | 0 (0.000) |    12.56 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           26 |     1152 | 2024-07-18 | DMS             | W   | 0.973      | 0.435        | -                | 0.510 (0.216)    | 0 (0.000) |    16.57 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           25 |     1342 | 2024-07-15 | Permitta        | W   | 0.952      | 0.435        | 0.036 (0.015)    | 0.953 (0.394)    | 0 (0.000) |    18.02 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |     1631 | 2024-06-14 | BIG             | L   | 0.745      | -            | -                | -                | -         |    -2.07 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |     1715 | 2024-06-11 | Rare Atom       | W   | 0.726      | 0.435        | 0.025 (0.008)    | 0.407 (0.128)    | 0 (0.000) |    11.48 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |     1736 | 2024-06-10 | Passion UA      | L   | 0.719      | -            | -                | -                | -         |    -5.57 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |     1837 | 2024-06-08 | Permitta        | L   | 0.706      | -            | -                | -                | -         |    -8.88 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |     1965 | 2024-06-06 | VP.Prodigy      | W   | 0.693      | 0.435        | 0.023 (0.007)    | -                | 0 (0.000) |    12.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |     2104 | 2024-06-03 | EYEBALLERS      | W   | 0.673      | 0.435        | 0.005 (0.001)    | 0.550 (0.161)    | 0 (0.000) |    11.02 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     2317 | 2024-05-25 | 9 Pandas        | L   | 0.613      | -            | -                | -                | -         |    -5.20 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     2360 | 2024-05-23 | Metizport       | W   | 0.597      | -            | -                | -                | 0 (0.000) |     9.39 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     2432 | 2024-05-21 | System5         | W   | 0.587      | -            | -                | -                | -         |     5.14 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     2495 | 2024-05-19 | DMS             | W   | 0.573      | 0.435        | -                | 0.510 (0.127)    | -         |    11.23 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     2543 | 2024-05-18 | Verdant         | W   | 0.563      | 0.435        | 0.013 (0.003)    | -                | -         |    11.25 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     2575 | 2024-05-17 | 777             | L   | 0.557      | -            | -                | -                | -         |   -11.55 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     2593 | 2024-05-16 | GUN5            | L   | 0.553      | -            | -                | -                | -         |    -6.20 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     2649 | 2024-05-15 | Rounds          | W   | 0.546      | -            | -                | -                | -         |     1.46 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     2661 | 2024-05-15 | Nexus           | W   | 0.544      | 0.435        | 0.012 (0.003)    | 0.489 (0.116)    | -         |     8.04 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     2698 | 2024-05-14 | EYEBALLERS      | W   | 0.540      | 0.500        | -                | 0.550 (0.148)    | -         |    10.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     2740 | 2024-05-13 | MOUZ NXT        | L   | 0.530      | -            | -                | -                | -         |    -3.86 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     2792 | 2024-05-11 | Viperio         | W   | 0.518      | -            | -                | -                | -         |     3.95 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     3217 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.380      | 0.500        | 0.035 (0.007)    | -                | -         |     8.30 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     3723 | 2024-04-04 | 3DMAX           | L   | 0.272      | -            | -                | -                | -         |    -0.09 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     3762 | 2024-04-03 | PARIVISION      | L   | 0.265      | -            | -                | -                | -         |    -1.20 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     3839 | 2024-03-29 | B8              | W   | 0.232      | 0.500        | 0.170 (0.020)    | 1.000 (0.116)    | -         |     5.93 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     3855 | 2024-03-28 | GUN5            | L   | 0.226      | -            | -                | -                | -         |    -2.34 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     4307 | 2024-03-07 | Apeks           | L   | 0.086      | -            | -                | -                | -         |    -1.25 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,594.81)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.713 | $500.00        | $356.56         |
| 2024-05-26 |      0.619 | $2,000.00      | $1,238.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
