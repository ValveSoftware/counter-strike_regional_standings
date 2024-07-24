### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  906.4<br />
<br />
Final Rank Value (906.4) = Starting Rank Value (936.9) + Head To Head Adjustments (-30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.394[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 936.9
- 400 + ( ( 0.265 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 936.9


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
|           27 |       45 | 2024-07-23 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -25.53 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           26 |       98 | 2024-07-21 | Endpoint          | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.466 (0.203)    | 0 (0.000) |    12.54 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           25 |      139 | 2024-07-20 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -16.08 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           24 |      276 | 2024-07-17 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -13.14 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           23 |      305 | 2024-07-17 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.89 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           22 |      339 | 2024-07-16 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -28.24 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           21 |      398 | 2024-07-15 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -22.15 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           20 |      632 | 2024-06-15 | 3DMAX             | L   | 0.940      | -            | -                | -                | -         |    -6.40 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           19 |      675 | 2024-06-14 | Gaimin Gladiators | W   | 0.933      | 0.435        | 0.053 (0.022)    | 0.432 (0.175)    | 0 (0.000) |    14.58 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           18 |      690 | 2024-06-14 | Spirit Academy    | L   | 0.932      | -            | -                | -                | -         |   -23.68 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           17 |      797 | 2024-06-10 | EYEBALLERS        | W   | 0.905      | 0.435        | 0.007 (0.003)    | 0.571 (0.225)    | 0 (0.000) |    10.24 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           16 |      951 | 2024-06-07 | HAVU              | W   | 0.887      | -            | -                | -                | 0 (0.000) |     5.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           15 |     1077 | 2024-06-05 | CYBERSHOKE        | W   | 0.873      | 0.435        | 0.050 (0.019)    | 0.294 (0.112)    | 0 (0.000) |     7.16 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           14 |     1162 | 2024-06-03 | Permitta          | L   | 0.858      | -            | -                | -                | -         |   -16.98 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           13 |     1176 | 2024-06-02 | FURIA             | W   | 0.853      | 0.435        | 0.355 (0.132)    | 0.563 (0.209)    | 0 (0.000) |    26.15 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           12 |     1186 | 2024-06-02 | VP.Prodigy        | W   | 0.851      | 0.435        | 0.033 (0.012)    | 0.462 (0.171)    | 0 (0.000) |    11.85 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           11 |     1195 | 2024-06-01 | SINNERS           | W   | 0.847      | 0.435        | 0.048 (0.018)    | 0.769 (0.283)    | 0 (0.000) |    16.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           10 |     1238 | 2024-05-31 | GamerLegion       | W   | 0.840      | 0.435        | 0.205 (0.075)    | 0.309 (0.113)    | 0 (0.000) |    21.75 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            9 |     1319 | 2024-05-28 | Permitta          | L   | 0.818      | -            | -                | -                | -         |   -13.81 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            8 |     1359 | 2024-05-26 | DMS               | W   | 0.804      | 0.435        | -                | 0.461 (0.161)    | -         |    10.73 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            7 |     1385 | 2024-05-24 | SINNERS           | L   | 0.794      | -            | -                | -                | -         |    -9.88 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            6 |     1400 | 2024-05-23 | Sampi             | L   | 0.787      | -            | -                | -                | -         |   -13.27 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            5 |     1571 | 2024-05-18 | NOM               | W   | 0.754      | -            | -                | -                | -         |     2.38 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            4 |     1643 | 2024-05-16 | Space             | W   | 0.740      | -            | -                | -                | -         |     9.07 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            3 |     1692 | 2024-05-15 | 777               | W   | 0.734      | 0.143        | 0.020 (0.002)    | -                | -         |     5.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            2 |     2802 | 2024-04-03 | 3DMAX             | L   | 0.454      | -            | -                | -                | -         |    -2.41 | easy, kelieN, SELLTER, spirit, tN1R  |
|            1 |     2905 | 2024-03-28 | Space             | W   | 0.413      | 0.500        | 0.007 (0.002)    | 0.452 (0.093)    | -         |     4.63 | easy, r3salt, SELLTER, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,720.19)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $2,000.00      | $1,893.11       |
| 2024-06-16 |      0.946 | $2,500.00      | $2,364.57       |
| 2024-06-09 |      0.900 | $3,000.00      | $2,701.14       |
| 2024-06-02 |      0.853 | $22,000.00     | $18,761.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
