### Roster Details<br />
Team Name: Space<br />
Roster: danistzz, fozil, TruNiQ, Vert, X5G7V<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  954.6<br />
<br />
Final Rank Value (954.6) = Starting Rank Value (878.2) + Head To Head Adjustments (76.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.352[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 878.2
- 400 + ( ( 0.223 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 878.2


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
|           25 |      104 | 2024-07-15 | Permitta        | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.794 (0.345)    | 0 (0.000) |    17.31 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           24 |      393 | 2024-06-14 | BIG             | L   | 0.980      | -            | -                | -                | -         |    -2.27 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           23 |      477 | 2024-06-11 | Rare Atom       | W   | 0.960      | 0.435        | -                | 0.372 (0.155)    | 0 (0.000) |     6.56 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           22 |      498 | 2024-06-10 | Passion UA      | L   | 0.954      | -            | -                | -                | -         |    -9.88 | danistzz, fozil, H4SAN4TOR, Vert, X5G7V   |
|           21 |      599 | 2024-06-08 | Permitta        | L   | 0.941      | -            | -                | -                | -         |   -13.76 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|           20 |      727 | 2024-06-06 | VP.Prodigy      | W   | 0.927      | 0.435        | 0.039 (0.016)    | 0.498 (0.201)    | 0 (0.000) |    15.67 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           19 |      866 | 2024-06-03 | EYEBALLERS      | W   | 0.907      | 0.435        | 0.009 (0.004)    | 0.619 (0.244)    | 0 (0.000) |    12.96 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           18 |     1079 | 2024-05-25 | 9 Pandas        | L   | 0.847      | -            | -                | -                | -         |    -6.71 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           17 |     1122 | 2024-05-23 | Metizport       | W   | 0.832      | 0.435        | 0.064 (0.023)    | 0.478 (0.173)    | 0 (0.000) |    17.41 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           16 |     1194 | 2024-05-21 | System5         | W   | 0.821      | -            | -                | -                | 0 (0.000) |     6.52 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           15 |     1257 | 2024-05-19 | DMS             | W   | 0.807      | 0.435        | 0.005 (0.002)    | 0.494 (0.173)    | 0 (0.000) |    13.58 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           14 |     1305 | 2024-05-18 | Verdant         | W   | 0.798      | 0.435        | 0.013 (0.004)    | -                | 0 (0.000) |    11.48 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           13 |     1337 | 2024-05-17 | 777             | L   | 0.792      | -            | -                | -                | -         |   -16.99 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           12 |     1355 | 2024-05-16 | GUN5            | L   | 0.788      | -            | -                | -                | -         |    -9.57 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           11 |     1411 | 2024-05-15 | Rounds          | W   | 0.780      | -            | -                | -                | 0 (0.000) |     1.32 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|           10 |     1423 | 2024-05-15 | Nexus           | W   | 0.778      | 0.435        | 0.011 (0.004)    | 0.432 (0.146)    | 0 (0.000) |     9.79 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            9 |     1460 | 2024-05-14 | EYEBALLERS      | W   | 0.775      | 0.500        | 0.009 (0.003)    | 0.619 (0.240)    | -         |    13.65 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            8 |     1502 | 2024-05-13 | MOUZ NXT        | L   | 0.765      | -            | -                | -                | -         |    -5.60 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            7 |     1554 | 2024-05-11 | Viperio         | W   | 0.752      | -            | -                | -                | -         |     4.70 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            6 |     1979 | 2024-04-20 | ALTERNATE aTTaX | W   | 0.614      | 0.500        | 0.050 (0.015)    | 0.644 (0.198)    | -         |    13.14 | danistzz, fozil, TruNiQ, Vert, X5G7V      |
|            5 |     2485 | 2024-04-04 | 3DMAX           | L   | 0.506      | -            | -                | -                | -         |    -1.90 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            4 |     2524 | 2024-04-03 | PARIVISION      | L   | 0.500      | -            | -                | -                | -         |    -5.43 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            3 |     2601 | 2024-03-29 | B8              | W   | 0.467      | 0.500        | 0.246 (0.057)    | 1.000 (0.233)    | -         |    12.37 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            2 |     2617 | 2024-03-28 | GUN5            | L   | 0.461      | -            | -                | -                | -         |    -5.14 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |
|            1 |     3069 | 2024-03-07 | Apeks           | L   | 0.321      | -            | -                | -                | -         |    -2.84 | enzero, fozil, TruNiQ, Vert, waterfaLLZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,181.04)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $500.00        | $473.80         |
| 2024-05-26 |      0.854 | $2,000.00      | $1,707.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
