### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [18](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [14]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1428.8<br />
<br />
Final Rank Value (1428.8) = Starting Rank Value (1416.4) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.603[<sup>1</sup>](#table2)
- Bounty Collected: 0.505[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.711[<sup>2</sup>](#table1)

The average of these factors is 0.494<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1416.4
- 400 + ( ( 0.494 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1416.4


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
|           26 |      139 | 2024-08-02 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -5.73 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      261 | 2024-07-30 | GamerLegion      | W   | 1.000      | 0.581        | 0.173 (0.100)    | 0.259 (0.151)    | 1 (1.000) |     5.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      292 | 2024-07-29 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -5.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1060 | 2024-06-16 | Complexity       | L   | 0.859      | -            | -                | -                | -         |    -7.44 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1065 | 2024-06-16 | ENCE             | W   | 0.859      | 0.500        | 0.173 (0.074)    | 0.422 (0.181)    | 1 (0.859) |    11.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1094 | 2024-06-15 | The MongolZ      | W   | 0.853      | 0.500        | 1.000 (0.426)    | 0.694 (0.296)    | 1 (0.853) |    24.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1104 | 2024-06-15 | Party Astronauts | W   | 0.851      | 0.500        | 0.041 (0.017)    | 0.510 (0.217)    | 1 (0.851) |     2.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1147 | 2024-06-14 | Aurora           | L   | 0.845      | -            | -                | -                | -         |   -13.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1753 | 2024-05-28 | Liquid           | L   | 0.736      | -            | -                | -                | -         |    -6.22 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1774 | 2024-05-27 | Monte            | W   | 0.728      | 0.624        | 0.080 (0.036)    | 0.598 (0.272)    | 1 (0.728) |     2.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1786 | 2024-05-27 | G2               | L   | 0.727      | -            | -                | -                | -         |    -1.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2037 | 2024-05-18 | Spirit           | L   | 0.665      | -            | -                | -                | -         |    -1.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2067 | 2024-05-17 | Virtus.pro       | W   | 0.659      | 0.769        | 0.499 (0.253)    | 0.308 (0.156)    | 1 (0.659) |    16.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2141 | 2024-05-15 | BetBoom          | W   | 0.647      | 0.769        | 0.248 (0.123)    | 0.513 (0.255)    | 1 (0.647) |     9.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2207 | 2024-05-14 | Virtus.pro       | L   | 0.640      | -            | -                | -                | -         |    -3.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2580 | 2024-04-27 | G2               | L   | 0.526      | -            | -                | -                | -         |    -0.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     2605 | 2024-04-26 | BetBoom          | L   | 0.519      | -            | -                | -                | -         |    -8.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     2631 | 2024-04-25 | TYLOO            | W   | 0.512      | 0.889        | 0.019 (0.009)    | 0.086 (0.039)    | 1 (0.512) |     0.43 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     2651 | 2024-04-24 | The MongolZ      | L   | 0.506      | -            | -                | -                | -         |    -0.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3826 | 2024-03-06 | Metizport        | L   | 0.181      | -            | -                | -                | -         |    -5.39 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|            6 |     4277 | 2024-02-16 | AMKAL            | L   | 0.052      | -            | -                | -                | -         |    -1.35 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     4307 | 2024-02-15 | Eternal Fire     | L   | 0.045      | -            | -                | -                | -         |    -0.25 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     4333 | 2024-02-14 | FaZe             | L   | 0.040      | -            | -                | -                | -         |    -0.24 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     4337 | 2024-02-14 | 3DMAX            | W   | 0.039      | 0.143        | 0.510 (0.003)    | 1.000 (0.006)    | 1 (0.039) |     1.01 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     4393 | 2024-02-10 | Spirit           | L   | 0.014      | -            | -                | -                | -         |    -0.03 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     4406 | 2024-02-09 | ENCE             | W   | 0.008      | 1.000        | 0.173 (0.001)    | 0.422 (0.003)    | 1 (0.008) |     0.14 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,207.30)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-06-16 |      0.859 | $20,000.00     | $17,187.75      |
| 2024-06-02 |      0.768 | $5,000.00      | $3,838.58       |
| 2024-05-19 |      0.673 | $50,000.00     | $33,635.83      |
| 2024-05-12 |      0.627 | $7,000.00      | $4,385.98       |
| 2024-03-10 |      0.208 | $5,000.00      | $1,038.52       |
| 2024-02-11 |      0.020 | $80,000.00     | $1,620.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
