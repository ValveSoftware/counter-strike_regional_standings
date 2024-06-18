### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  1032.6<br />
<br />
Final Rank Value (1032.6) = Starting Rank Value (958.0) + Head To Head Adjustments (74.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.0
- 400 + ( ( 0.275 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 958.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       44 | 2024-06-15 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -6.74 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           19 |       87 | 2024-06-14 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.076 (0.033)    | 0.632 (0.275)    | 0 (0.000) |    18.09 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           18 |      102 | 2024-06-14 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -26.23 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           17 |      209 | 2024-06-10 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.653 (0.284)    | 0 (0.000) |    11.02 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           16 |      363 | 2024-06-07 | HAVU              | W   | 1.000      | 0.435        | -                | 0.222 (0.096)    | 0 (0.000) |     6.09 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           15 |      489 | 2024-06-05 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.050 (0.022)    | 0.284 (0.124)    | 0 (0.000) |     6.95 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           14 |      574 | 2024-06-03 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -20.05 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           13 |      588 | 2024-06-02 | FURIA             | W   | 1.000      | 0.435        | 0.245 (0.106)    | 0.521 (0.227)    | 0 (0.000) |    29.35 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           12 |      599 | 2024-06-02 | VP.Prodigy        | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.518 (0.225)    | 0 (0.000) |    14.08 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           11 |      609 | 2024-06-01 | SINNERS           | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.782 (0.340)    | 0 (0.000) |    19.66 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|           10 |      652 | 2024-05-31 | GamerLegion       | W   | 1.000      | 0.435        | 0.239 (0.104)    | 0.336 (0.146)    | 0 (0.000) |    27.68 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            9 |      733 | 2024-05-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -16.65 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            8 |      773 | 2024-05-26 | DMS               | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.473 (0.205)    | 0 (0.000) |    14.14 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            7 |      799 | 2024-05-24 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -11.79 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            6 |      814 | 2024-05-23 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -15.97 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            5 |      985 | 2024-05-18 | NOM               | W   | 0.996      | -            | -                | -                | 0 (0.000) |     3.07 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            4 |     1057 | 2024-05-16 | Space             | W   | 0.983      | -            | -                | -                | -         |    12.10 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            3 |     1106 | 2024-05-15 | 777               | W   | 0.976      | 0.143        | 0.024 (0.003)    | -                | -         |     6.86 | easy, FinigaN, SELLTER, tN1R, xiELO       |
|            2 |     2216 | 2024-04-03 | 3DMAX             | L   | 0.696      | -            | -                | -                | -         |    -4.22 | easy, kelieN, SELLTER, spirit, tN1R       |
|            1 |     2320 | 2024-03-28 | Space             | W   | 0.656      | 0.500        | 0.007 (0.002)    | 0.419 (0.137)    | -         |     7.15 | danistzz, fozil, TruNiQ, Vert, waterfaLLZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-02 |      1.000 | $22,000.00     | $22,000.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
