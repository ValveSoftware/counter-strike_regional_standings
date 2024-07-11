### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  623.6<br />
<br />
Final Rank Value (623.6) = Starting Rank Value (667.2) + Head To Head Adjustments (-43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.2
- 400 + ( ( 0.127 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 667.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      459 | 2024-06-08 | NOFEAR5           | L   | 0.979      | -            | -                | -                | -         |   -12.96 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           14 |     1131 | 2024-05-18 | NAVI Javelins     | L   | 0.839      | -            | -                | -                | -         |    -4.70 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           13 |     1675 | 2024-04-27 | Imperial fe       | L   | 0.699      | -            | -                | -                | -         |    -1.28 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           12 |     1864 | 2024-04-19 | Let Her Cook      | L   | 0.647      | -            | -                | -                | -         |    -2.87 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |     2030 | 2024-04-14 | dreamcatchers fe  | L   | 0.613      | -            | -                | -                | -         |    -8.90 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |     2086 | 2024-04-11 | NAVI Javelins     | L   | 0.593      | -            | -                | -                | -         |    -4.16 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |     2183 | 2024-04-09 | Let Her Cook      | L   | 0.580      | -            | -                | -                | -         |    -2.43 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |     2264 | 2024-04-06 | BIG EQUIPA        | L   | 0.559      | -            | -                | -                | -         |    -5.09 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |     2309 | 2024-04-04 | NAVI Javelins     | L   | 0.547      | -            | -                | -                | -         |    -3.89 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |     2487 | 2024-03-27 | Fearless Cheetahs | L   | 0.494      | -            | -                | -                | -         |    -6.62 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |     2601 | 2024-03-20 | Crescent fe       | W   | 0.448      | 0.331        | 0.007 (0.001)    | 0.107 (0.016)    | 0 (0.000) |     7.38 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     2899 | 2024-03-07 | 1WIN Gang         | W   | 0.361      | 0.331        | 0.002 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     5.98 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     3182 | 2024-02-24 | ENCE Athena       | L   | 0.279      | -            | -                | -                | -         |    -4.41 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     3313 | 2024-02-18 | Astralis W        | W   | 0.240      | 0.143        | 0.002 (0.000)    | 0.034 (0.001)    | 0 (0.000) |     3.51 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     3422 | 2024-02-14 | ex-GUILD fe       | L   | 0.215      | -            | -                | -                | -         |    -3.17 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,151.72)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.981 | $100.00        | $98.07          |
| 2024-04-27 |      0.699 | $107.00        | $74.84          |
| 2024-04-21 |      0.660 | $1,250.00      | $825.61         |
| 2024-04-14 |      0.613 | $250.00        | $153.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
