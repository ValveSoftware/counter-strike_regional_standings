### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [62]( ../standings_europe.md)<br />
Final Rank Value:  929.2<br />
<br />
Final Rank Value (929.2) = Starting Rank Value (858.4) + Head To Head Adjustments (70.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.4
- 400 + ( ( 0.217 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 858.4


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
|           24 |      229 | 2024-06-14 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -2.04 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |      313 | 2024-06-11 | Rare Atom       | W   | 1.000      | 0.435        | -                | 0.298 (0.129)    | 0 (0.000) |     7.06 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      334 | 2024-06-10 | Passion UA      | L   | 0.993      | -            | -                | -                | -         |   -10.18 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |      435 | 2024-06-08 | Permitta        | L   | 0.981      | -            | -                | -                | -         |   -13.87 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |      563 | 2024-06-06 | VP.Prodigy      | W   | 0.967      | 0.435        | 0.038 (0.016)    | 0.519 (0.218)    | 0 (0.000) |    16.71 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |      702 | 2024-06-03 | EYEBALLERS      | W   | 0.947      | 0.435        | 0.009 (0.004)    | 0.646 (0.266)    | 0 (0.000) |    13.87 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |      915 | 2024-05-25 | 9 Pandas        | L   | 0.887      | -            | -                | -                | -         |    -6.51 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |      958 | 2024-05-23 | Metizport       | W   | 0.871      | 0.435        | 0.065 (0.025)    | 0.489 (0.185)    | 0 (0.000) |    18.87 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     1030 | 2024-05-21 | System5         | W   | 0.861      | 0.500        | 0.002 (0.001)    | -                | 0 (0.000) |     7.11 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     1093 | 2024-05-19 | DMS             | W   | 0.847      | 0.435        | 0.005 (0.002)    | 0.471 (0.173)    | 0 (0.000) |    14.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     1141 | 2024-05-18 | Verdant         | W   | 0.838      | 0.435        | 0.013 (0.005)    | 0.327 (0.119)    | 0 (0.000) |    12.38 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1173 | 2024-05-17 | 777             | L   | 0.831      | -            | -                | -                | -         |   -17.49 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     1191 | 2024-05-16 | GUN5            | L   | 0.827      | -            | -                | -                | -         |    -9.66 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     1247 | 2024-05-15 | Rounds          | W   | 0.820      | -            | -                | -                | 0 (0.000) |     1.49 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     1259 | 2024-05-15 | Romania         | W   | 0.818      | 0.435        | 0.011 (0.004)    | 0.375 (0.133)    | 0 (0.000) |    10.57 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     1296 | 2024-05-14 | EYEBALLERS      | W   | 0.814      | 0.500        | 0.009 (0.004)    | 0.646 (0.263)    | 0 (0.000) |    14.92 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     1338 | 2024-05-13 | MOUZ NXT        | L   | 0.804      | -            | -                | -                | -         |    -5.31 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     1390 | 2024-05-11 | Viperio         | W   | 0.792      | -            | -                | -                | -         |     5.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     1815 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.654      | 0.500        | 0.050 (0.016)    | 0.577 (0.189)    | -         |    14.30 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     2321 | 2024-04-04 | 3DMAX           | L   | 0.546      | -            | -                | -                | -         |    -1.86 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     2360 | 2024-04-03 | PARIVISION      | L   | 0.539      | -            | -                | -                | -         |    -5.22 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     2437 | 2024-03-29 | B8              | W   | 0.507      | 0.500        | 0.242 (0.061)    | 1.000 (0.253)    | -         |    13.69 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     2453 | 2024-03-28 | GUN5            | L   | 0.500      | -            | -                | -                | -         |    -5.24 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     2905 | 2024-03-07 | Apeks           | L   | 0.360      | -            | -                | -                | -         |    -2.69 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,280.07)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $500.00        | $493.61         |
| 2024-05-26 |      0.893 | $2,000.00      | $1,786.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
