### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [63](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  1040.2<br />
<br />
Final Rank Value (1040.2) = Starting Rank Value (977.4) + Head To Head Adjustments (62.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.274<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 977.4
- 400 + ( ( 0.274 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 977.4


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
|           20 |      180 | 2024-06-15 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -6.96 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           19 |      223 | 2024-06-14 | Gaimin Gladiators | W   | 1.000      | 0.435        | 0.069 (0.030)    | 0.528 (0.229)    | 0 (0.000) |    16.96 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           18 |      238 | 2024-06-14 | Spirit Academy    | L   | 1.000      | -            | -                | -                | -         |   -25.96 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           17 |      345 | 2024-06-10 | EYEBALLERS        | W   | 0.992      | 0.435        | 0.009 (0.004)    | 0.646 (0.279)    | 0 (0.000) |    10.86 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           16 |      499 | 2024-06-07 | HAVU              | W   | 0.974      | 0.435        | -                | 0.211 (0.089)    | 0 (0.000) |     5.65 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           15 |      625 | 2024-06-05 | CYBERSHOKE        | W   | 0.960      | 0.435        | 0.058 (0.024)    | 0.317 (0.132)    | 0 (0.000) |     7.14 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           14 |      710 | 2024-06-03 | Permitta          | L   | 0.945      | -            | -                | -                | -         |   -19.13 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           13 |      724 | 2024-06-02 | FURIA             | W   | 0.940      | 0.435        | 0.253 (0.104)    | 0.509 (0.208)    | 0 (0.000) |    27.82 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           12 |      734 | 2024-06-02 | VP.Prodigy        | W   | 0.938      | 0.435        | 0.038 (0.015)    | 0.519 (0.211)    | 0 (0.000) |    12.89 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           11 |      743 | 2024-06-01 | SINNERS           | W   | 0.934      | 0.435        | 0.057 (0.023)    | 0.767 (0.311)    | 0 (0.000) |    18.21 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           10 |      786 | 2024-05-31 | GamerLegion       | W   | 0.927      | 0.435        | 0.243 (0.098)    | 0.345 (0.139)    | 0 (0.000) |    24.99 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            9 |      867 | 2024-05-28 | Permitta          | L   | 0.905      | -            | -                | -                | -         |   -15.46 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            8 |      907 | 2024-05-26 | DMS               | W   | 0.891      | 0.435        | 0.005 (0.002)    | 0.471 (0.182)    | 0 (0.000) |    11.94 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            7 |      933 | 2024-05-24 | SINNERS           | L   | 0.881      | -            | -                | -                | -         |   -10.63 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            6 |      948 | 2024-05-23 | Slovakia          | L   | 0.874      | -            | -                | -                | -         |   -14.95 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            5 |     1119 | 2024-05-18 | NOM               | W   | 0.840      | -            | -                | -                | 0 (0.000) |     2.32 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            4 |     1191 | 2024-05-16 | Space             | W   | 0.827      | -            | -                | -                | -         |     9.66 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            3 |     1240 | 2024-05-15 | 777               | W   | 0.820      | 0.143        | 0.024 (0.003)    | -                | -         |     5.54 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            2 |     2350 | 2024-04-03 | 3DMAX             | L   | 0.540      | -            | -                | -                | -         |    -3.36 | easy, kelieN, SELLTER, spirit, tN1R  |
|            1 |     2453 | 2024-03-28 | Space             | W   | 0.500      | 0.500        | 0.009 (0.002)    | 0.404 (0.101)    | -         |     5.24 | easy, r3salt, SELLTER, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,133.39)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      0.987 | $3,000.00      | $2,961.65       |
| 2024-06-02 |      0.940 | $22,000.00     | $20,671.74      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
