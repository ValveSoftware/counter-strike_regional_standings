### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, k4Mi, Mercury, Moseyuh, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [106](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  852.0<br />
<br />
Final Rank Value (852.0) = Starting Rank Value (825.9) + Head To Head Adjustments (26.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.433[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.9
- 400 + ( ( 0.210 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 825.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      324 | 2024-06-08 | Lynn Vision     | L   | 1.000      | -            | -                | -                | -         |    -5.29 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           17 |      378 | 2024-06-07 | GR              | W   | 1.000      | 0.416        | 0.011 (0.004)    | 0.119 (0.049)    | 0 (0.000) |     8.57 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           16 |      447 | 2024-06-06 | The QUBE        | W   | 1.000      | 0.416        | 0.007 (0.003)    | 0.071 (0.030)    | 0 (0.000) |     9.23 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           15 |      500 | 2024-06-05 | Lynn Vision     | L   | 1.000      | -            | -                | -                | -         |    -4.57 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           14 |      546 | 2024-06-04 | LYG             | W   | 1.000      | 0.416        | 0.005 (0.002)    | 0.064 (0.027)    | 0 (0.000) |    10.94 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           13 |     1535 | 2024-04-27 | M80             | L   | 0.855      | -            | -                | -                | -         |    -2.41 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     1558 | 2024-04-26 | Sharks          | W   | 0.849      | 0.889        | 0.028 (0.021)    | 0.052 (0.039)    | 1 (0.849) |    11.40 | advent, JamYoung, kaze, Mercury, zdr    |
|           11 |     1595 | 2024-04-25 | Falcons         | L   | 0.841      | -            | -                | -                | -         |    -0.36 | advent, JamYoung, kaze, Mercury, zdr    |
|           10 |     1617 | 2024-04-24 | G2              | L   | 0.834      | -            | -                | -                | -         |    -0.06 | advent, JamYoung, kaze, Mercury, zdr    |
|            9 |     1750 | 2024-04-19 | Rare Atom       | L   | 0.801      | -            | -                | -                | -         |   -18.61 | advent, JamYoung, kaze, Mercury, zdr    |
|            8 |     1790 | 2024-04-18 | The MongolZ     | L   | 0.795      | -            | -                | -                | -         |    -0.09 | advent, JamYoung, kaze, Mercury, zdr    |
|            7 |     1803 | 2024-04-18 | Lynn Vision     | W   | 0.794      | 0.143        | 0.126 (0.014)    | 0.258 (0.029)    | 0 (0.000) |    21.88 | advent, JamYoung, kaze, Mercury, zdr    |
|            6 |     1834 | 2024-04-17 | Sheer Conquer   | W   | 0.787      | 0.143        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     3.63 | advent, JamYoung, kaze, Mercury, zdr    |
|            5 |     1840 | 2024-04-17 | The Huns        | W   | 0.787      | 0.143        | 0.000 (0.000)    | 0.065 (0.007)    | 0 (0.000) |     4.14 | advent, JamYoung, kaze, Mercury, zdr    |
|            4 |     2088 | 2024-04-08 | Lynn Vision     | L   | 0.728      | -            | -                | -                | -         |    -2.58 | advent, JamYoung, kaze, Mercury, zdr    |
|            3 |     2098 | 2024-04-08 | MOUZ            | L   | 0.726      | -            | -                | -                | -         |    -0.03 | advent, JamYoung, kaze, Mercury, zdr    |
|            2 |     2633 | 2024-03-13 | LYG             | L   | 0.554      | -            | -                | -                | -         |   -11.14 | advent, JamYoung, lyrics3, Mercury, zdr |
|            1 |     2639 | 2024-03-13 | padaem Holodnie | W   | 0.554      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.44 | advent, JamYoung, lyrics3, Mercury, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,758.32)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-04-14 |      0.767 | $4,000.00      | $3,069.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
