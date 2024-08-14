### Roster Details<br />
Team Name: GUN5<br />
Roster: easy, FinigaN, SELLTER, tN1R, xiELO<br />
Global Rank: [99](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [71]( ../standings_europe.md)<br />
<br />
Final Rank Value:  860.0<br />
<br />
Final Rank Value (860.0) = Starting Rank Value (914.9) + Head To Head Adjustments (-55.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.198[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.9
- 400 + ( ( 0.261 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 914.9


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
|           40 |      223 | 2024-08-07 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -1.51 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           39 |      276 | 2024-08-06 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -6.84 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           38 |      368 | 2024-08-03 | PARIVISION        | W   | 1.000      | 0.500        | 0.047 (0.024)    | 0.627 (0.314)    | 0 (0.000) |    25.57 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           37 |      373 | 2024-08-03 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -7.48 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           36 |      440 | 2024-08-01 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -16.08 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           35 |      460 | 2024-08-01 | NOM               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.44 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           34 |      508 | 2024-07-31 | K27               | L   | 1.000      | -            | -                | -                | -         |   -26.82 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           33 |      551 | 2024-07-30 | Endpoint          | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.591 (0.257)    | 0 (0.000) |    14.24 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           32 |      584 | 2024-07-29 | TSM               | W   | 1.000      | 0.143        | 0.055 (0.008)    | -                | 0 (0.000) |    21.95 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           31 |      608 | 2024-07-28 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.64 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           30 |      618 | 2024-07-28 | NOM               | L   | 1.000      | -            | -                | -                | -         |   -26.05 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           29 |      654 | 2024-07-26 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -15.38 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           28 |      696 | 2024-07-25 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -14.82 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           27 |      768 | 2024-07-23 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -16.81 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           26 |      821 | 2024-07-21 | Endpoint          | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.591 (0.257)    | 0 (0.000) |    14.23 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           25 |      862 | 2024-07-20 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -15.74 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           24 |      999 | 2024-07-17 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -9.23 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           23 |     1028 | 2024-07-17 | WOPA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.09 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           22 |     1062 | 2024-07-16 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -27.54 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           21 |     1121 | 2024-07-15 | CPH Wolves        | L   | 0.998      | -            | -                | -                | -         |   -22.11 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           20 |     1355 | 2024-06-15 | 3DMAX             | L   | 0.800      | -            | -                | -                | -         |    -1.82 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           19 |     1398 | 2024-06-14 | Gaimin Gladiators | W   | 0.793      | 0.435        | 0.032 (0.011)    | 0.326 (0.112)    | 0 (0.000) |    10.60 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           18 |     1413 | 2024-06-14 | Spirit Academy    | L   | 0.791      | -            | -                | -                | -         |   -20.07 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           17 |     1520 | 2024-06-10 | EYEBALLERS        | W   | 0.765      | 0.435        | -                | 0.614 (0.204)    | 0 (0.000) |     9.10 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           16 |     1674 | 2024-06-07 | HAVU              | W   | 0.746      | -            | -                | -                | 0 (0.000) |     4.24 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           15 |     1800 | 2024-06-05 | CYBERSHOKE        | W   | 0.733      | 0.435        | 0.036 (0.012)    | 0.442 (0.141)    | -         |     8.50 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           14 |     1885 | 2024-06-03 | Permitta          | L   | 0.718      | -            | -                | -                | -         |   -13.45 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           13 |     1899 | 2024-06-02 | FURIA             | W   | 0.712      | 0.435        | 0.301 (0.093)    | 0.506 (0.157)    | -         |    21.76 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           12 |     1909 | 2024-06-02 | VP.Prodigy        | W   | 0.711      | 0.435        | 0.024 (0.007)    | 0.350 (0.108)    | -         |     9.96 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           11 |     1918 | 2024-06-01 | SINNERS           | W   | 0.707      | 0.435        | 0.044 (0.013)    | 0.922 (0.283)    | -         |    15.06 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|           10 |     1961 | 2024-05-31 | GamerLegion       | W   | 0.699      | 0.435        | 0.160 (0.049)    | -                | -         |    16.39 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            9 |     2042 | 2024-05-28 | Permitta          | L   | 0.677      | -            | -                | -                | -         |   -10.99 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            8 |     2082 | 2024-05-26 | DMS               | W   | 0.664      | 0.435        | -                | 0.514 (0.148)    | -         |     9.91 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            7 |     2108 | 2024-05-24 | SINNERS           | L   | 0.653      | -            | -                | -                | -         |    -6.56 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            6 |     2123 | 2024-05-23 | Sampi             | L   | 0.647      | -            | -                | -                | -         |   -11.39 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            5 |     2294 | 2024-05-18 | NOM               | W   | 0.613      | -            | -                | -                | -         |     2.22 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            4 |     2366 | 2024-05-16 | Space             | W   | 0.600      | -            | -                | -                | -         |     6.94 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            3 |     2415 | 2024-05-15 | 777               | W   | 0.593      | -            | -                | -                | -         |     4.19 | easy, FinigaN, SELLTER, tN1R, xiELO  |
|            2 |     3525 | 2024-04-03 | 3DMAX             | L   | 0.313      | -            | -                | -                | -         |    -0.21 | easy, kelieN, SELLTER, spirit, tN1R  |
|            1 |     3628 | 2024-03-28 | Space             | W   | 0.273      | -            | -                | -                | -         |     2.90 | easy, r3salt, SELLTER, shalfey, tN1R |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,574.52)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.806 | $2,000.00      | $1,612.05       |
| 2024-06-16 |      0.805 | $2,500.00      | $2,013.24       |
| 2024-06-09 |      0.760 | $3,000.00      | $2,279.55       |
| 2024-06-02 |      0.712 | $22,000.00     | $15,669.68      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
