### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1886.0<br />
<br />
Final Rank Value (1886.0) = Starting Rank Value (1888.6) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.692[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.815[<sup>2</sup>](#table1)

The average of these factors is 0.693<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1888.6
- 400 + ( ( 0.693 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1888.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      318 | 2024-06-16 | Spirit       | L   | 0.994      | -            | -                | -                | -         |   -10.15 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      342 | 2024-06-15 | Virtus.pro   | W   | 0.988      | 0.729        | 0.349 (0.251)    | 0.367 (0.264)    | 1 (0.988) |     9.05 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      432 | 2024-06-13 | FaZe         | W   | 0.973      | 0.729        | 0.902 (0.640)    | 0.479 (0.340)    | 1 (0.973) |    16.35 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      461 | 2024-06-12 | Astralis     | W   | 0.966      | 0.729        | 0.549 (0.387)    | 0.434 (0.306)    | 1 (0.966) |    14.39 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |     1003 | 2024-05-29 | HEROIC       | L   | 0.874      | -            | -                | -                | -         |   -19.29 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1024 | 2024-05-28 | Spirit       | L   | 0.867      | -            | -                | -                | -         |    -9.41 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1042 | 2024-05-27 | BIG          | W   | 0.861      | -            | -                | -                | 1 (0.861) |     1.44 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1608 | 2024-05-08 | FaZe         | L   | 0.734      | -            | -                | -                | -         |   -10.28 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1658 | 2024-05-05 | Complexity   | L   | 0.714      | -            | -                | -                | -         |   -13.99 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1730 | 2024-05-02 | BIG          | W   | 0.693      | 0.889        | 0.212 (0.130)    | 0.382 (0.235)    | 1 (0.693) |     0.96 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1757 | 2024-05-01 | FlyQuest     | W   | 0.686      | 0.889        | -                | 0.388 (0.236)    | 1 (0.686) |     0.86 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2585 | 2024-03-31 | FaZe         | W   | 0.481      | 1.000        | 0.902 (0.434)    | 0.479 (0.230)    | 1 (0.481) |     7.92 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2590 | 2024-03-30 | G2           | W   | 0.475      | 1.000        | 0.738 (0.351)    | 0.496 (0.236)    | 1 (0.475) |     9.05 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2600 | 2024-03-29 | Eternal Fire | W   | 0.467      | 1.000        | 1.000 (0.467)    | -                | 1 (0.467) |     4.69 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2693 | 2024-03-24 | paiN         | W   | 0.434      | 1.000        | 0.476 (0.207)    | 0.763 (0.331)    | 1 (0.434) |     2.27 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2701 | 2024-03-23 | Cloud9       | L   | 0.428      | -            | -                | -                | -         |   -13.13 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2717 | 2024-03-22 | Spirit       | L   | 0.421      | -            | -                | -                | -         |    -4.82 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2735 | 2024-03-21 | G2           | W   | 0.414      | 1.000        | 0.738 (0.306)    | 0.496 (0.206)    | -         |     8.03 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2752 | 2024-03-21 | The MongolZ  | W   | 0.412      | 1.000        | 1.000 (0.412)    | 0.653 (0.269)    | -         |     7.68 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3524 | 2024-02-16 | BetBoom      | W   | 0.187      | -            | -                | -                | -         |     1.17 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3559 | 2024-02-15 | Virtus.pro   | L   | 0.180      | -            | -                | -                | -         |    -3.94 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3589 | 2024-02-14 | Enterprise   | W   | 0.175      | -            | -                | -                | -         |     0.04 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3606 | 2024-02-14 | KOI          | W   | 0.172      | -            | -                | -                | -         |     0.11 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3703 | 2024-02-06 | Falcons      | L   | 0.120      | -            | -                | -                | -         |    -3.26 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3711 | 2024-02-05 | Eternal Fire | W   | 0.115      | -            | -                | -                | -         |     1.00 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3728 | 2024-02-04 | Apeks        | W   | 0.107      | -            | -                | -                | -         |     0.03 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3754 | 2024-02-03 | Spirit       | L   | 0.101      | -            | -                | -                | -         |    -1.15 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3897 | 2024-01-27 | G2           | W   | 0.053      | -            | -                | -                | -         |     1.04 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     3974 | 2024-01-23 | G2           | W   | 0.026      | -            | -                | -                | -         |     0.51 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4000 | 2024-01-22 | Complexity   | W   | 0.020      | -            | -                | -                | -         |     0.25 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4116 | 2024-01-19 | Virtus.pro   | W   | 0.001      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($352,405.67)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $85,000.00     | $84,458.47      |
| 2024-06-02 |      0.901 | $5,000.00      | $4,506.96       |
| 2024-05-12 |      0.760 | $23,500.00     | $17,865.76      |
| 2024-03-31 |      0.481 | $500,000.00    | $240,514.12     |
| 2024-02-11 |      0.154 | $24,000.00     | $3,694.45       |
| 2024-01-28 |      0.061 | $22,500.00     | $1,365.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
