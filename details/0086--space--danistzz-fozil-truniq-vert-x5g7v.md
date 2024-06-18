### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [86](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  930.8<br />
<br />
Final Rank Value (930.8) = Starting Rank Value (855.5) + Head To Head Adjustments (75.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.224[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.5
- 400 + ( ( 0.224 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 855.5


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
|           29 |       93 | 2024-06-14 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -1.90 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           28 |      177 | 2024-06-11 | Rare Atom       | W   | 1.000      | 0.435        | -                | 0.218 (0.095)    | 0 (0.000) |     6.38 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           27 |      198 | 2024-06-10 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -10.01 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           26 |      299 | 2024-06-08 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -14.37 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           25 |      427 | 2024-06-06 | VP.Prodigy      | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.518 (0.225)    | 0 (0.000) |    17.08 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |      566 | 2024-06-03 | EYEBALLERS      | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.653 (0.284)    | 0 (0.000) |    14.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |      781 | 2024-05-25 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -6.75 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      824 | 2024-05-23 | Metizport       | W   | 1.000      | 0.435        | 0.073 (0.032)    | 0.587 (0.255)    | 0 (0.000) |    22.55 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           21 |      896 | 2024-05-21 | System5         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           20 |      959 | 2024-05-19 | DMS             | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.473 (0.205)    | 0 (0.000) |    17.37 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |     1007 | 2024-05-18 | Verdant         | W   | 0.993      | 0.435        | 0.013 (0.006)    | 0.308 (0.133)    | 0 (0.000) |    14.13 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     1039 | 2024-05-17 | 777             | L   | 0.987      | -            | -                | -                | -         |   -20.83 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     1057 | 2024-05-16 | GUN5            | L   | 0.983      | -            | -                | -                | -         |   -12.10 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     1113 | 2024-05-15 | Rounds          | W   | 0.975      | -            | -                | -                | 0 (0.000) |     1.74 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     1125 | 2024-05-15 | Nexus           | W   | 0.974      | 0.435        | 0.012 (0.005)    | 0.397 (0.168)    | 0 (0.000) |    12.76 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     1162 | 2024-05-14 | EYEBALLERS      | W   | 0.970      | 0.500        | 0.006 (0.003)    | 0.653 (0.317)    | 0 (0.000) |    17.81 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1204 | 2024-05-13 | MOUZ NXT        | L   | 0.960      | -            | -                | -                | -         |    -6.24 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     1256 | 2024-05-11 | Viperio         | W   | 0.948      | -            | -                | -                | -         |     6.31 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     1681 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.810      | 0.500        | 0.046 (0.019)    | 0.573 (0.232)    | -         |    16.93 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     2187 | 2024-04-04 | 3DMAX           | L   | 0.702      | -            | -                | -                | -         |    -2.46 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            9 |     2226 | 2024-04-03 | PARIVISION      | L   | 0.695      | -            | -                | -                | -         |    -6.36 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            8 |     2304 | 2024-03-29 | B8              | W   | 0.662      | 0.500        | 0.229 (0.076)    | 1.000 (0.331)    | -         |    17.99 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            7 |     2320 | 2024-03-28 | GUN5            | L   | 0.656      | -            | -                | -                | -         |    -7.15 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            6 |     2772 | 2024-03-07 | Apeks           | L   | 0.516      | -            | -                | -                | -         |    -2.80 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |
|            5 |     4082 | 2024-01-13 | 500             | L   | 0.155      | -            | -                | -                | -         |    -3.17 | enzero, fozil, leri511, TruNiQ, Vert      |
|            4 |     4114 | 2024-01-12 | ARCRED          | W   | 0.150      | 0.143        | 0.048 (0.001)    | -                | -         |     2.60 | enzero, fozil, leri511, TruNiQ, Vert      |
|            3 |     4160 | 2024-01-11 | IKLA            | L   | 0.143      | -            | -                | -                | -         |    -3.83 | enzero, fozil, leri511, TruNiQ, Vert      |
|            2 |     4169 | 2024-01-11 | Gucci Academy   | W   | 0.142      | -            | -                | -                | -         |     0.58 | enzero, fozil, leri511, TruNiQ, Vert      |
|            1 |     4179 | 2024-01-10 | ThunderFlash    | W   | 0.137      | -            | -                | -                | -         |     0.31 | enzero, fozil, leri511, TruNiQ, Vert      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
