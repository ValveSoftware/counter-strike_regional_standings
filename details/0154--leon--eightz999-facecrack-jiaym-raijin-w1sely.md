### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (725.5) + Head To Head Adjustments (-23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.5
- 400 + ( ( 0.154 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 725.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      201 | 2024-06-15 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -11.08 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |      233 | 2024-06-14 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -6.75 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |      294 | 2024-06-12 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |    -9.26 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |      321 | 2024-06-11 | MASONIC           | W   | 0.998      | 0.143        | 0.015 (0.002)    | 0.114 (0.016)    | 0 (0.000) |    19.73 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |      696 | 2024-06-03 | Verdant           | L   | 0.948      | -            | -                | -                | -         |    -9.27 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |      758 | 2024-06-01 | Aurora Young Blud | L   | 0.933      | -            | -                | -                | -         |   -13.92 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |      780 | 2024-05-31 | VP.Prodigy        | W   | 0.927      | 0.372        | 0.038 (0.013)    | 0.519 (0.179)    | 0 (0.000) |    23.12 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |      830 | 2024-05-29 | HOTU              | L   | 0.914      | -            | -                | -                | -         |   -15.02 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |     1140 | 2024-05-18 | Rhyno             | L   | 0.838      | -            | -                | -                | -         |    -3.63 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     1163 | 2024-05-17 | WOPA              | W   | 0.833      | 0.143        | 0.002 (0.000)    | 0.155 (0.018)    | 0 (0.000) |    10.16 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     1297 | 2024-05-14 | VP.Prodigy        | L   | 0.814      | -            | -                | -                | -         |    -6.48 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     1323 | 2024-05-13 | Secret            | W   | 0.808      | 0.143        | 0.000 (0.000)    | 0.092 (0.011)    | 0 (0.000) |     8.19 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     1636 | 2024-04-29 | Romania           | L   | 0.712      | -            | -                | -                | -         |    -6.64 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     1652 | 2024-04-28 | VP.Prodigy        | L   | 0.706      | -            | -                | -                | -         |    -5.90 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     1938 | 2024-04-18 | BIG               | L   | 0.638      | -            | -                | -                | -         |    -0.51 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2414 | 2024-04-01 | Lazer Cats        | W   | 0.527      | 0.384        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     4.42 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     4113 | 2024-01-16 | ex-Anonymo        | L   | 0.021      | -            | -                | -                | -         |    -0.52 | eightz999, facecrack, JIaYm, k0s, Z1W0W     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
