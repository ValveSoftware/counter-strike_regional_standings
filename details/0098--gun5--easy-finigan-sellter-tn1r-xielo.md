### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Global Rank: [98](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
<br />
Final Rank Value:  860.1<br />
<br />
Final Rank Value (860.1) = Starting Rank Value (926.9) + Head To Head Adjustments (-66.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 926.9
- 400 + ( ( 0.255 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 926.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       27 | 2024-07-31 | K27               | L   | 1.000      | -            | -                | -                | -         |   -26.61 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           33 |       70 | 2024-07-30 | Endpoint          | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.523 (0.227)    | 0 (0.000) |    13.99 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           32 |      103 | 2024-07-29 | TSM               | W   | 1.000      | 0.143        | 0.039 (0.006)    | -                | 0 (0.000) |    20.60 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           31 |      127 | 2024-07-28 | Astralis Talent   | W   | 1.000      | 0.435        | 0.009 (0.004)    | -                | 0 (0.000) |    10.46 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           30 |      137 | 2024-07-28 | NOM               | L   | 1.000      | -            | -                | -                | -         |   -25.90 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           29 |      173 | 2024-07-26 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -22.91 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           28 |      215 | 2024-07-25 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -15.03 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           27 |      287 | 2024-07-23 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -24.70 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           26 |      340 | 2024-07-21 | Endpoint          | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.523 (0.227)    | 0 (0.000) |    12.78 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           25 |      381 | 2024-07-20 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -16.14 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           24 |      518 | 2024-07-17 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -11.64 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           23 |      547 | 2024-07-17 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.92 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           22 |      581 | 2024-07-16 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -28.19 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           21 |      640 | 2024-07-15 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -22.12 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           20 |      874 | 2024-06-15 | 3DMAX             | L   | 0.893      | -            | -                | -                | -         |    -2.02 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           19 |      917 | 2024-06-14 | Gaimin Gladiators | W   | 0.886      | 0.435        | 0.040 (0.015)    | 0.363 (0.140)    | 0 (0.000) |    13.51 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           18 |      932 | 2024-06-14 | Spirit Academy    | L   | 0.885      | -            | -                | -                | -         |   -22.40 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           17 |     1039 | 2024-06-10 | EYEBALLERS        | W   | 0.858      | 0.435        | -                | 0.513 (0.191)    | 0 (0.000) |    10.13 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           16 |     1193 | 2024-06-07 | HAVU              | W   | 0.839      | -            | -                | -                | 0 (0.000) |     5.02 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           15 |     1319 | 2024-06-05 | CYBERSHOKE        | W   | 0.826      | 0.435        | 0.040 (0.014)    | 0.347 (0.125)    | 0 (0.000) |     8.77 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           14 |     1404 | 2024-06-03 | Permitta          | L   | 0.811      | -            | -                | -                | -         |   -15.91 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           13 |     1418 | 2024-06-02 | FURIA             | W   | 0.806      | 0.435        | 0.286 (0.100)    | 0.495 (0.173)    | 0 (0.000) |    24.63 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           12 |     1428 | 2024-06-02 | VP.Prodigy        | W   | 0.804      | 0.435        | 0.026 (0.009)    | 0.406 (0.142)    | -         |    11.70 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           11 |     1437 | 2024-06-01 | SINNERS           | W   | 0.800      | 0.435        | 0.038 (0.013)    | 0.721 (0.251)    | -         |    15.52 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           10 |     1480 | 2024-05-31 | GamerLegion       | W   | 0.793      | 0.435        | 0.177 (0.061)    | 0.273 (0.094)    | -         |    20.24 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            9 |     1561 | 2024-05-28 | Permitta          | L   | 0.770      | -            | -                | -                | -         |   -12.99 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            8 |     1601 | 2024-05-26 | DMS               | W   | 0.757      | 0.435        | -                | 0.447 (0.147)    | -         |    11.49 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            7 |     1627 | 2024-05-24 | SINNERS           | L   | 0.747      | -            | -                | -                | -         |    -9.19 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            6 |     1642 | 2024-05-23 | Sampi             | L   | 0.740      | -            | -                | -                | -         |   -12.56 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            5 |     1813 | 2024-05-18 | NOM               | W   | 0.706      | -            | -                | -                | -         |     2.44 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            4 |     1885 | 2024-05-16 | Space             | W   | 0.693      | -            | -                | -                | -         |     8.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            3 |     1934 | 2024-05-15 | 777               | W   | 0.686      | -            | -                | -                | -         |     5.07 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            2 |     3044 | 2024-04-03 | 3DMAX             | L   | 0.406      | -            | -                | -                | -         |    -0.20 | easy, kelieN, SELLTER, spirit, tN1R  |
|            1 |     3147 | 2024-03-28 | Space             | W   | 0.366      | -            | -                | -                | -         |     4.05 | easy, r3salt, SELLTER, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,325.20)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $2,000.00      | $1,798.54       |
| 2024-06-16 |      0.899 | $2,500.00      | $2,246.35       |
| 2024-06-09 |      0.853 | $3,000.00      | $2,559.28       |
| 2024-06-02 |      0.806 | $22,000.00     | $17,721.04      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
