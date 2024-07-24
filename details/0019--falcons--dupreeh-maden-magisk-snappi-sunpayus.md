### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
Final Rank Value:  1449.7<br />
<br />
Final Rank Value (1449.7) = Starting Rank Value (1439.6) + Head To Head Adjustments (10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.641[<sup>1</sup>](#table2)
- Bounty Collected: 0.528[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.710[<sup>2</sup>](#table1)

The average of these factors is 0.514<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1439.6
- 400 + ( ( 0.514 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1439.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      610 | 2024-06-16 | Complexity       | L   | 0.946      | -            | -                | -                | -         |    -7.87 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      615 | 2024-06-16 | ENCE             | W   | 0.945      | 0.500        | 0.171 (0.081)    | 0.380 (0.180)    | 1 (0.945) |    10.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      644 | 2024-06-15 | The MongolZ      | W   | 0.939      | 0.500        | 1.000 (0.470)    | 0.725 (0.341)    | 1 (0.939) |    26.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      654 | 2024-06-15 | Party Astronauts | W   | 0.938      | 0.500        | 0.053 (0.025)    | 0.591 (0.277)    | 1 (0.938) |     2.56 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      697 | 2024-06-14 | Aurora           | L   | 0.931      | -            | -                | -                | -         |   -18.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1303 | 2024-05-28 | Liquid           | L   | 0.822      | -            | -                | -                | -         |   -10.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1324 | 2024-05-27 | Monte            | W   | 0.815      | 0.624        | 0.083 (0.042)    | 0.428 (0.217)    | 1 (0.815) |     1.92 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1336 | 2024-05-27 | G2               | L   | 0.813      | -            | -                | -                | -         |    -1.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1587 | 2024-05-18 | Spirit           | L   | 0.752      | -            | -                | -                | -         |    -1.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1617 | 2024-05-17 | Virtus.pro       | W   | 0.746      | 0.769        | 0.595 (0.341)    | 0.374 (0.214)    | 1 (0.746) |    19.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1691 | 2024-05-15 | BetBoom          | W   | 0.734      | 0.769        | 0.333 (0.188)    | 0.642 (0.362)    | 1 (0.734) |    10.89 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1757 | 2024-05-14 | Virtus.pro       | L   | 0.727      | -            | -                | -                | -         |    -3.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2130 | 2024-04-27 | G2               | L   | 0.612      | -            | -                | -                | -         |    -1.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2155 | 2024-04-26 | BetBoom          | L   | 0.605      | -            | -                | -                | -         |    -8.90 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2181 | 2024-04-25 | TYLOO            | W   | 0.599      | 0.889        | 0.026 (0.014)    | 0.116 (0.062)    | 1 (0.599) |     0.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2201 | 2024-04-24 | The MongolZ      | L   | 0.592      | -            | -                | -                | -         |    -1.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3376 | 2024-03-06 | Metizport        | L   | 0.268      | -            | -                | -                | -         |    -7.96 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           10 |     3827 | 2024-02-16 | AMKAL            | L   | 0.139      | -            | -                | -                | -         |    -3.81 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     3857 | 2024-02-15 | Eternal Fire     | L   | 0.131      | -            | -                | -                | -         |    -0.97 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     3883 | 2024-02-14 | FaZe             | L   | 0.127      | -            | -                | -                | -         |    -0.52 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     3887 | 2024-02-14 | 3DMAX            | W   | 0.126      | -            | -                | -                | 1 (0.126) |     0.94 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     3943 | 2024-02-10 | Spirit           | L   | 0.100      | -            | -                | -                | -         |    -0.21 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     3956 | 2024-02-09 | ENCE             | W   | 0.094      | 1.000        | 0.171 (0.016)    | 0.380 (0.036)    | 1 (0.094) |     1.37 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3991 | 2024-02-06 | Natus Vincere    | W   | 0.073      | 1.000        | 1.000 (0.073)    | 0.364 (0.027)    | 1 (0.073) |     2.20 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     4000 | 2024-02-05 | Complexity       | W   | 0.067      | 1.000        | 0.405 (0.027)    | -                | -         |     1.70 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     4014 | 2024-02-04 | Rebels           | W   | 0.061      | 1.000        | -                | 0.661 (0.040)    | -         |     0.17 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     4056 | 2024-02-03 | Eternal Fire     | L   | 0.052      | -            | -                | -                | -         |    -0.37 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($76,144.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $20,000.00     | $18,916.79      |
| 2024-06-02 |      0.854 | $5,000.00      | $4,270.84       |
| 2024-05-19 |      0.759 | $50,000.00     | $37,958.43      |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |
| 2024-02-11 |      0.107 | $80,000.00     | $8,536.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
