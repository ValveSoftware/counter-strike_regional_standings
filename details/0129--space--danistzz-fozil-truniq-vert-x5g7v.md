### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Global Rank: [129](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
<br />
Final Rank Value:  768.0<br />
<br />
Final Rank Value (768.0) = Starting Rank Value (797.5) + Head To Head Adjustments (-29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.5
- 400 + ( ( 0.201 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 797.5


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
|           43 |        0 | 2024-08-14 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -13.81 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           42 |       45 | 2024-08-13 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -11.71 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           41 |      108 | 2024-08-11 | Project G       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.24 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           40 |      153 | 2024-08-09 | EYEBALLERS      | L   | 1.000      | -            | -                | -                | -         |   -14.42 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           39 |      182 | 2024-08-08 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -11.36 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           38 |      219 | 2024-08-07 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -1.38 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           37 |      270 | 2024-08-06 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |    -8.94 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           36 |      308 | 2024-08-05 | HAVU            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.28 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           35 |      400 | 2024-08-02 | B8              | L   | 1.000      | -            | -                | -                | -         |    -4.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           34 |      408 | 2024-08-02 | BC.Game         | L   | 1.000      | -            | -                | -                | -         |   -12.06 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           33 |      484 | 2024-07-31 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -4.13 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           32 |      531 | 2024-07-30 | ex-PERA         | L   | 1.000      | -            | -                | -                | -         |   -11.21 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           31 |      617 | 2024-07-28 | Endpoint        | L   | 1.000      | -            | -                | -                | -         |   -16.09 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           30 |      646 | 2024-07-26 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -14.78 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           29 |      665 | 2024-07-26 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -15.52 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           28 |      734 | 2024-07-24 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -18.28 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |      849 | 2024-07-20 | CPH Wolves      | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.345 (0.150)    | 0 (0.000) |    12.63 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           26 |      925 | 2024-07-18 | DMS             | W   | 1.000      | 0.435        | -                | 0.514 (0.223)    | 0 (0.000) |    16.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           25 |     1115 | 2024-07-15 | Permitta        | W   | 0.999      | 0.435        | 0.036 (0.016)    | 0.957 (0.416)    | 0 (0.000) |    18.63 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |     1404 | 2024-06-14 | BIG             | L   | 0.792      | -            | -                | -                | -         |    -2.10 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |     1488 | 2024-06-11 | Rare Atom       | W   | 0.772      | 0.435        | 0.009 (0.003)    | 0.448 (0.151)    | 0 (0.000) |    11.26 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |     1509 | 2024-06-10 | Passion UA      | L   | 0.766      | -            | -                | -                | -         |    -6.14 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |     1610 | 2024-06-08 | Permitta        | L   | 0.753      | -            | -                | -                | -         |    -9.67 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |     1738 | 2024-06-06 | VP.Prodigy      | W   | 0.739      | 0.435        | 0.024 (0.008)    | -                | 0 (0.000) |    13.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |     1877 | 2024-06-03 | EYEBALLERS      | W   | 0.720      | 0.435        | 0.005 (0.002)    | 0.614 (0.192)    | 0 (0.000) |    11.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     2090 | 2024-05-25 | 9 Pandas        | L   | 0.660      | -            | -                | -                | -         |    -5.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     2133 | 2024-05-23 | Metizport       | W   | 0.644      | 0.435        | -                | 0.414 (0.116)    | 0 (0.000) |    10.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     2205 | 2024-05-21 | System5         | W   | 0.633      | -            | -                | -                | 0 (0.000) |     5.55 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     2268 | 2024-05-19 | DMS             | W   | 0.619      | 0.435        | -                | 0.514 (0.138)    | -         |    11.92 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     2316 | 2024-05-18 | Verdant         | W   | 0.610      | 0.435        | 0.014 (0.004)    | -                | -         |    11.83 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     2348 | 2024-05-17 | 777             | L   | 0.604      | -            | -                | -                | -         |   -12.52 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     2366 | 2024-05-16 | GUN5            | L   | 0.600      | -            | -                | -                | -         |    -6.94 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     2422 | 2024-05-15 | Rounds          | W   | 0.592      | -            | -                | -                | -         |     1.55 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     2434 | 2024-05-15 | Nexus           | W   | 0.591      | 0.435        | 0.013 (0.003)    | 0.548 (0.141)    | -         |     8.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     2471 | 2024-05-14 | EYEBALLERS      | W   | 0.587      | 0.500        | 0.005 (0.001)    | 0.614 (0.180)    | -         |    11.16 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     2513 | 2024-05-13 | MOUZ NXT        | L   | 0.577      | -            | -                | -                | -         |    -4.16 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     2565 | 2024-05-11 | Viperio         | W   | 0.564      | -            | -                | -                | -         |     4.27 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     2990 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.427      | 0.500        | 0.036 (0.008)    | -                | -         |     9.19 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     3496 | 2024-04-04 | 3DMAX           | L   | 0.319      | -            | -                | -                | -         |    -0.11 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     3535 | 2024-04-03 | PARIVISION      | L   | 0.312      | -            | -                | -                | -         |    -1.49 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     3612 | 2024-03-29 | B8              | W   | 0.279      | 0.500        | 0.174 (0.024)    | 0.903 (0.126)    | -         |     7.16 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     3628 | 2024-03-28 | GUN5            | L   | 0.273      | -            | -                | -                | -         |    -2.90 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     4080 | 2024-03-07 | Apeks           | L   | 0.133      | -            | -                | -                | -         |    -1.83 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,711.65)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.760 | $500.00        | $379.92         |
| 2024-05-26 |      0.666 | $2,000.00      | $1,331.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
