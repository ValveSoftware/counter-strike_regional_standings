### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [53]( ../standings_europe.md)<br />
Final Rank Value:  989.8<br />
<br />
Final Rank Value (989.8) = Starting Rank Value (980.4) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.395[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.4
- 400 + ( ( 0.270 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 980.4


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
|           23 |       17 | 2024-07-17 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.20 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           22 |       51 | 2024-07-16 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -28.64 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           21 |      110 | 2024-07-15 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -24.68 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           20 |      344 | 2024-06-15 | 3DMAX             | L   | 0.988      | -            | -                | -                | -         |    -7.27 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           19 |      387 | 2024-06-14 | Gaimin Gladiators | W   | 0.981      | 0.435        | 0.067 (0.028)    | 0.488 (0.208)    | 0 (0.000) |    15.71 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           18 |      402 | 2024-06-14 | Spirit Academy    | L   | 0.979      | -            | -                | -                | -         |   -25.20 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           17 |      509 | 2024-06-10 | EYEBALLERS        | W   | 0.952      | 0.435        | 0.009 (0.004)    | 0.619 (0.256)    | 0 (0.000) |    10.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           16 |      663 | 2024-06-07 | HAVU              | W   | 0.934      | 0.435        | -                | 0.202 (0.082)    | 0 (0.000) |     5.42 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           15 |      789 | 2024-06-05 | CYBERSHOKE        | W   | 0.921      | 0.435        | 0.059 (0.024)    | 0.309 (0.124)    | 0 (0.000) |     7.07 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           14 |      874 | 2024-06-03 | Permitta          | L   | 0.906      | -            | -                | -                | -         |   -18.37 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           13 |      888 | 2024-06-02 | FURIA             | W   | 0.900      | 0.435        | 0.253 (0.099)    | 0.483 (0.189)    | 0 (0.000) |    26.61 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           12 |      898 | 2024-06-02 | VP.Prodigy        | W   | 0.898      | 0.435        | 0.039 (0.015)    | 0.498 (0.195)    | 0 (0.000) |    12.29 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           11 |      907 | 2024-06-01 | SINNERS           | W   | 0.895      | 0.435        | 0.058 (0.022)    | 0.744 (0.289)    | 0 (0.000) |    17.34 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           10 |      950 | 2024-05-31 | GamerLegion       | W   | 0.887      | 0.435        | 0.244 (0.094)    | 0.333 (0.128)    | 0 (0.000) |    23.68 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            9 |     1031 | 2024-05-28 | Permitta          | L   | 0.865      | -            | -                | -                | -         |   -14.99 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            8 |     1071 | 2024-05-26 | DMS               | W   | 0.852      | 0.435        | 0.005 (0.002)    | 0.494 (0.183)    | 0 (0.000) |    11.39 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            7 |     1097 | 2024-05-24 | SINNERS           | L   | 0.841      | -            | -                | -                | -         |   -10.34 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            6 |     1112 | 2024-05-23 | Sampi             | L   | 0.835      | -            | -                | -                | -         |   -14.19 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            5 |     1283 | 2024-05-18 | NOM               | W   | 0.801      | -            | -                | -                | -         |     2.17 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            4 |     1355 | 2024-05-16 | Space             | W   | 0.788      | -            | -                | -                | -         |     9.57 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            3 |     1404 | 2024-05-15 | 777               | W   | 0.781      | 0.143        | 0.024 (0.003)    | -                | -         |     5.31 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            2 |     2514 | 2024-04-03 | 3DMAX             | L   | 0.501      | -            | -                | -                | -         |    -3.17 | easy, kelieN, SELLTER, spirit, tN1R  |
|            1 |     2617 | 2024-03-28 | Space             | W   | 0.461      | 0.500        | 0.009 (0.002)    | 0.430 (0.099)    | -         |     5.14 | easy, r3salt, SELLTER, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,113.33)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $2,000.00      | $1,987.56       |
| 2024-06-16 |      0.993 | $2,500.00      | $2,482.63       |
| 2024-06-09 |      0.948 | $3,000.00      | $2,842.82       |
| 2024-06-02 |      0.900 | $22,000.00     | $19,800.32      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
